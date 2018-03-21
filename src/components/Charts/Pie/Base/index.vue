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
    titleSize: {type: String, required: false, default: '14'},
    // 接口地址
    url: {type: String, required: false, default: 'x.mock'},
    // 发送请求的时候带的参数
    ajaxData: {type: Object, required: false, default: () => ({})},
    // 发送请求的间隔
    interval: {type: Number, required: false, default: 10000},
    // grid 设置
    gridTop: {type: String, required: false, default: '40'},
    gridBottom: {type: String, required: false, default: '30'},
    gridLeft: {type: String, required: false, default: '10%'},
    gridRight: {type: String, required: false, default: '5%'},
    // 坐标轴
    xAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    yAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    yAxisSplitLineColor: {type: String, required: false, default: '#0F3551'},
    // series
    seriesColor: {type: String, required: false, default: '#0F3551'},
    seriesBorderRadius: {type: Array, required: false, default: () => [4, 4, 0, 0]}
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
        series: [
          {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:[]
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
        resolve(res.data.list)
      })
    },
    // 返回拼好的option
    optionMaker () {
      return new Promise(async (resolve, reject) => {
        const option = this.option
        option.series[0].data = await this.getData()
        resolve(option)
      })
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(async () => {
          this.chart = this.echarts.init(this.$refs.chart)
          this.chart.setOption(await this.optionMaker())
          this.intervalObj = setInterval(async () => {
            this.chart.setOption(await this.optionMaker())
          }, this.interval)
        })
    }
  }
}
</script>
