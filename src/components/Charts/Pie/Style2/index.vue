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
      // 定时器
      intervalObj: null
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
        color: [
          '#f7d09c',
          '#9c62e4',
          '#db5c5e',
          '#5ea2db',
          '#55be9d',
          '#da9664'
        ],
        series: [
          {
            data: [],
            name: '占比',
            type: 'pie',
            center: ['50%', '55%'],
            radius: ['25%', '50%'],
            avoidLabelOverlap: true,
            itemStyle: {
              normal: {
                borderColor: '#171F29',
                borderWidth: 4
              }
            },
            label: {
              normal: {
                show: true,
                formatter: '{b}\n{d}%',
                textStyle: {
                  fontSize: 12,
                  color: '#BCC4CE'
                }
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            }
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
        const res = await this.$http.get(this.url, {
          params: this.ajaxData
        })
        resolve(res.data)
      })
    },
    // 返回拼好的option
    optionMaker () {
      return new Promise(async (resolve, reject) => {
        const data = this.transform(await this.getData())
        const option = this.option
        option.series[0].data = data
        resolve(option)
      })
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(async () => {
          this.chart = this.echarts.init(this.$refs.chart)
          if (this.autoGetData) {
            this.chart.setOption(await this.optionMaker())
          }
          if (this.interval) {
            this.intervalObj = setInterval(this.refresh, this.interval)
          }
        })
    },
    // 更新数据
    async refresh () {
      this.chart.setOption(await this.optionMaker())
    }
  }
}
</script>
