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
    interval: {type: Number, required: false, default: 3000},
    // 循环
    loop: {type: Boolean, required: false, default: true},
    // grid 设置
    gridTop: {type: String, required: false, default: '60'},
    gridBottom: {type: String, required: false, default: '20'},
    gridLeft: {type: String, required: false, default: '20'},
    gridRight: {type: String, required: false, default: '5%'},
    // 坐标轴
    xAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    yAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    yAxisSplitLineColor: {type: String, required: false, default: '#0F3551'},
    // series
    seriesColor: {type: String, required: false, default: '#0F3551'},
    seriesLabelTextColor: {type: String, required: false, default: '#FFF'},
    // 这个组件比较特殊的
    options: {type: Array, required: false, default: () => []},
    value: {default: 0}
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
        grid: {
          left: this.gridLeft,
          right: this.gridRight,
          top: this.gridTop,
          bottom: this.gridBottom,
          containLabel: true
        },
        xAxis: {
          data: [],
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: this.xAxisAxisLineColor
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: this.yAxisAxisLineColor
            }
          },
          splitLine: {
            lineStyle: {
              color: this.yAxisSplitLineColor
            }
          }
        },
        series: [
          {
            type: 'line',
            smooth: 0.3,
            itemStyle: {
              color: this.seriesColor
            },
            symbol: 'circle',
            symbolSize: 6,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0, color: this.$toRGB(this.seriesColor)
                  }, {
                    offset: 1, color: this.$toRGB(this.seriesColor, 0)
                  }
                ],
                globalCoord: false
              }
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                distance: '5',
                color: this.seriesLabelTextColor,
                backgroundColor: this.seriesColor,
                padding: [3, 6],
                borderRadius: 2
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
      let value = null
      if (this.value === 'null') {
        value = 0
      } else {
        value = this.value < this.options.length - 1 ? this.value + 1 : 0
      }
      return new Promise(async (resolve, reject) => {
        const res = await this.$http.get(this.url, {
          params: {
            type: 2,
            name: this.options[value].value,
            quotationType: this.options[value].value,
            ...this.ajaxData
          }
        })
        this.$emit('input', value)
        resolve(res.data)
      })
    },
    // 返回拼好的option
    optionMaker () {
      return new Promise(async (resolve, reject) => {
        const data = this.transform(await this.getData()).list
        const option = this.option
        option.xAxis.data = data.map(e => e.name)
        option.series[0].data = data.map(e => e.value)
        resolve(option)
      })
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(async () => {
          this.chart = this.echarts.init(this.$refs.chart)
          this.chart.setOption(await this.optionMaker())
          this.intervalObj = setInterval(() => {
            this.refresh()
          }, this.interval)
        })
    },
    // 重新请求数据
    async refresh () {
      if (this.value === this.options.length - 1) {
        if (this.loop) {
          this.chart.setOption(await this.optionMaker())
        } else {
          this.$emit('end')
          clearInterval(this.intervalObj)
        }
      } else {
        this.chart.setOption(await this.optionMaker())
      }
    },
    // 新的一圈
    newRound () {
      console.log('newRound')
    }
  }
}
</script>
