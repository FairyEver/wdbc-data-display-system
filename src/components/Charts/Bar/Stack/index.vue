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
    // 图例
    legendTop: {type: String, required: false, default: '40'},
    legendTextColor: {type: String, required: false, default: '#FFF'},
    // 接口地址
    url: {type: String, required: false, default: 'x.mock'},
    // 发送请求的时候带的参数
    ajaxData: {type: Object, required: false, default: () => ({})},
    // 发送请求的间隔
    interval: {type: Number, required: false, default: 10000},
    // grid 设置
    gridTop: {type: String, required: false, default: '80'},
    gridBottom: {type: String, required: false, default: '30'},
    gridLeft: {type: String, required: false, default: '50'},
    gridRight: {type: String, required: false, default: '5%'},
    // 坐标轴
    xAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    yAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    // series
    seriesColor: {type: String, required: false, default: '#0F3551'},
    seriesBorderRadius: {type: Array, required: false, default: () => [0, 4, 4, 0]},
    seriesBarGap: {type: String, required: false, default: '0%'},
    seriesBarCategoryGap: {type: String, required: false, default: '30%'}
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
          top: '6',
          left: 'center',
          textStyle: {
            color: this.titleColor,
            fontSize: this.titleSize
          }
        },
        grid: {
          left: this.gridLeft,
          right: this.gridRight,
          top: this.gridTop,
          bottom: this.gridBottom
        },
        dataZoom: [{
            type: 'slider',
            yAxisIndex: [0, 1],
            filterMode: 'empty',
            start: 50,
            end: 100
          }, {
            type: 'inside',
            yAxisIndex: [0, 1],
            filterMode: 'empty',
            start: 50,
            end: 100
          }
        ],
        legend: {
          top: this.legendTop,
          textStyle: {
            color: this.legendTextColor
          },
          data: ['钥匙量', '有效房源量']
        },
        xAxis: {
          type: 'value',
          axisTick: {show: false},
          axisLine: {
            show: false,
            lineStyle: {
              color: this.xAxisAxisLineColor
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            axisLine: {
              lineStyle: {
                color: this.yAxisAxisLineColor
              }
            },
            data: []
          },
          {
            type: 'category',
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {show: false},
            splitArea: {show: false},
            splitLine: {show: false},
            data: []
          }
        ],
        series: [
          {
            name: '',
            type: 'bar',
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                show: true,
                color: this.$toRGB(this.seriesColor, 0.5),
                barBorderRadius: this.seriesBorderRadius,
                borderWidth: 0,
                borderColor: '#333'
              }
            },
            barGap: this.seriesBarGap,
            barCategoryGap: this.seriesBarCategoryGap,
            data: []
          },
          {
            name: '',
            type: 'bar',
            itemStyle: {
              normal: {
                show: true,
                color: this.$toRGB(this.seriesColor, 1),
                barBorderRadius: this.seriesBorderRadius,
                borderWidth: 0,
                borderColor: '#333'
              }
            },
            barGap: this.seriesBarGap,
            barCategoryGap: this.seriesBarCategoryGap,
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
          type: 3,
          ...this.ajaxData
        })
        resolve(res.data)
      })
    },
    // 返回拼好的option
    optionMaker () {
      return new Promise(async (resolve, reject) => {
        const data = await this.getData()
        const option = this.option
        option.legend.data = data.legend
        option.yAxis[0].data = data.yAxis
        option.yAxis[1].data = data.yAxis
        option.series[0].name = data.series[0].name
        option.series[0].data = data.series[0].data
        option.series[1].name = data.series[1].name
        option.series[1].data = data.series[1].data
        console.log(option)
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
