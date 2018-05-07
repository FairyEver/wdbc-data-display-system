<template>
  <div ref="chart" :style="style"></div>
</template>

<script>
import mixin from '@/components/Charts/mixin.js'
import data from './data'
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
      width: 0
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
            data: data
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
        // const res = await this.$http.post(this.url, {
        //   type: 2,
        //   ...this.ajaxData
        // })
        // resolve(res.data)
        resolve({
          list: [
            {"name":"湖南","hong":"0 ","fen":"1450 ","bai":"0 ","all":"1450 "},
            {"name":"广东","hong":"1 ","fen":"30 ","bai":"0 ","all":"31 "},
            {"name":"广西","hong":"3 ","fen":"35 ","bai":"0 ","all":"38 "},
            {"name":"上海","hong":"14 ","fen":"5 ","bai":"0 ","all":"19 "},
            {"name":"海南","hong":"2 ","fen":"15 ","bai":"0 ","all":"17 "},
            {"name":"重庆","hong":"65 ","fen":"712 ","bai":"0 ","all":"777 "},
            {"name":"贵州","hong":"2 ","fen":"270 ","bai":"0 ","all":"272 "},
            {"name":"四川","hong":"103 ","fen":"1527 ","bai":"0 ","all":"1630 "},
            {"name":"江西","hong":"1200 ","fen":"400 ","bai":"0 ","all":"1600 "},
            {"name":"福建","hong":"500 ","fen":"50 ","bai":"0 ","all":"550 "},
            {"name":"湖北","hong":"1520 ","fen":"1640 ","bai":"0 ","all":"3160 "},
            {"name":"安徽","hong":"3200 ","fen":"3100 ","bai":"0 ","all":"6300 "},
            {"name":"云南","hong":"815 ","fen":"1225 ","bai":"0 ","all":"2040 "},
            {"name":"内蒙","hong":"3250 ","fen":"25 ","bai":"0 ","all":"3275 "},
            {"name":"甘肃","hong":"2800 ","fen":"0 ","bai":"0 ","all":"2800 "},
            {"name":"宁夏","hong":"1750 ","fen":"40 ","bai":"0 ","all":"1790 "},
            {"name":"北京","hong":"750 ","fen":"75 ","bai":"0 ","all":"825 "},
            {"name":"江苏","hong":"15000 ","fen":"3000 ","bai":"0 ","all":"18000 "},
            {"name":"青海","hong":"100 ","fen":"0 ","bai":"0 ","all":"100 "},
            {"name":"新疆","hong":"750 ","fen":"0 ","bai":"0 ","all":"750 "},
            {"name":"山西","hong":"4000 ","fen":"116 ","bai":"20 ","all":"4136 "},
            {"name":"山东","hong":"17500 ","fen":"875 ","bai":"925 ","all":"19300 "},
            {"name":"吉林","hong":"2600 ","fen":"800 ","bai":"100 ","all":"3500 "},
            {"name":"浙江","hong":"400 ","fen":"50 ","bai":"10 ","all":"460 "},
            {"name":"河北","hong":"11570 ","fen":"14880 ","bai":"695 ","all":"27145 "},
            {"name":"河南","hong":"11750 ","fen":"475 ","bai":"340 ","all":"12565 "},
            {"name":"黑龙江","hong":"2700 ","fen":"200 ","bai":"50 ","all":"2950 "},
            {"name":"陕西","hong":"4500 ","fen":"175 ","bai":"25 ","all":"4700 "},
            {"name":"辽宁","hong":"13800 ","fen":"250 ","bai":"33 ","all":"14083 "},
            {"name":"天津","hong":"1500 ","fen":"50 ","bai":"100 ","all":"1650 "}
          ].map(e => ({
            name: e.name,
            value: e.all
          }))
        })
      })
    },
    // 返回拼好的option
    optionMaker () {
      return new Promise(async (resolve, reject) => {
        const data = this.transform(await this.getData()).list
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
          this.chart.setOption(await this.optionMaker())
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
    activeMap (name = '河北') {
      this.chart.dispatchAction({
        type: 'mapSelect',
        name
      })
    },
    // 取消激活某个地区
    unActiveMap (name = '河北') {
      this.chart.dispatchAction({
        type: 'mapUnSelect',
        name
      })
    }
  }
}
</script>
