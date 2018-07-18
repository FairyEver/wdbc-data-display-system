<template>
  <div ref="chart" :style="style"></div>
</template>

<script>
import mixin from '@/components/Charts/mixin.js'
export default {
  mixins: [
    mixin
  ],
  props: {
    // 标题
    titleText: {type: String, required: false, default: 'Chart'},
    titleColor: {type: String, required: false, default: '#FFF'},
    titleSize: {type: String, required: false, default: '18'},
    // 接口地址
    url: {type: String, required: false, default: 'x.mock'},
    // 发送请求的时候带的参数
    ajaxData: {type: Object, required: false, default: () => ({})},
    // 发送请求的间隔
    interval: {type: Number, required: false, default: 10000}
  },
  data () {
    return {
      // 宽高
      height: 0,
      width: 0,
      // 上一个激活的区域名字
      lastActiveMap: ''
    }
  },
  computed: {
    // 容器样式
    style () {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`
      }
    },
    option () {
      return {
        title: {
          text: this.titleText,
          top: '10',
          left: 'center',
          textStyle: {
            color: this.titleColor,
            fontSize: this.titleSize
          }
        },
        tooltip: {
          show: false
        },
        visualMap: {
          type: 'continuous',
          show: true,
          min: 0,
          max: 10000,
          itemWidth: 8,
          itemHeight: 50,
          color: ['#1EB2BD', '#134C55'],
          text: ['高', '低'],
          textStyle: {
            color: '#2DB1FF'
          }
        },
        toolbox: {
          show: false
        },
        roamController: {
          show: true,
          x: 'right',
          mapTypeControl: {
            'china': true
          }
        },
        series: [
          {
            type: 'map',
            mapType: 'china',
            roam: false,
            left: 50,
            right: 50,
            itemStyle: {
              normal: {
                areaColor: 'rgba(0,0,0,0)',
                label: {
                  show: false
                },
                borderWidth: 2,
                borderColor: '#11CDD9'
              },
              emphasis: {
                label: {
                  show: true,
                  position: ['50%', '50%'],
                  fontSize: 16,
                  color: '#52D7E9',
                  backgroundColor: 'rgba(0,0,0,.7)',
                  padding: [4, 6],
                  borderRadius: 2
                },
                areaColor: '#FFCF2D',
                borderWidth: 2,
                borderColor: '#FF8D23',
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20,
                shadowOffsetY: 4
              }
            },
            data: []
          }
        ]
      }
    }
  },
  mounted () {
    this.$emit('mounted')
  },
  methods: {
    // 请求数据 这个函数最后应该返回接口的数据
    getData () {
      return new Promise(async (resolve, reject) => {
        const res = await this.$http.post(this.url, {
          type: 2,
          ...this.ajaxData
        })
        resolve(res.data)
      })
    },
    // 返回拼好的option
    optionMaker () {
      return new Promise(async (resolve, reject) => {
        const data = this.transform(await this.getData())
        const option = this.option
        option.visualMap.min = data.map(data => Number(data.value)).reduce((min, e) => e < min ? e : min, 0)
        option.visualMap.max = data.map(data => Number(data.value)).reduce((max, e) => e > max ? e : max, 0)
        option.series[0].data = data
        resolve(option)
      })
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(async () => {
          this.chart = this.echarts.init(this.$refs.chart)
          this.chart.setOption(await this.optionMaker())
          // 告诉外面 数据加载完了
          this.$emit('initDone')
          if (this.interval) {
            this.intervalObj = setInterval(this.refresh, this.interval)
          }
        })
    },
    // 更新数据
    async refresh () {
      this.chart.setOption(await this.optionMaker())
    },
    // 激活某个地区
    activeMap (name = '河北省') {
      if (this.lastActiveMap) {
        this.unActiveMap(this.lastActiveMap)
      }
      this.chart.dispatchAction({
        type: 'mapSelect',
        name
      })
      this.lastActiveMap = name
    },
    // 取消激活某个地区
    unActiveMap (name = '河北省') {
      this.chart.dispatchAction({
        type: 'mapUnSelect',
        name
      })
    }
  }
}
</script>
