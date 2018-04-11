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
    gridBottom: {type: String, required: false, default: '20'},
    gridLeft: {type: String, required: false, default: '20'},
    gridRight: {type: String, required: false, default: '5%'},
    // 坐标轴
    xAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    yAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    yAxisSplitLineColor: {type: String, required: false, default: '#0F3551'},
    // series
    seriesColor: {type: Array, required: false, default: () => ['#0F3551']},
    seriesLabelTextColor: {type: Array, required: false, default: () => ['#FFF']}
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
        legend: {
          top: this.legendTop,
          textStyle: {
            color: this.legendTextColor
          },
          data: []
        },
        grid: {
          left: this.gridLeft,
          right: this.gridRight,
          top: this.gridTop,
          bottom: this.gridBottom,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisLine: {
            lineStyle: {
              color: this.xAxisAxisLineColor
            }
          }
        },
        yAxis: [
          {
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
          }
        ],
        series: []
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
        const data = this.transform(await this.getData())
        const option = this.option
        option.legend.data = data.legend
        option.xAxis.data = data.xAxis
        option.series = data.series.map((e, index) => {
          const i = index % this.seriesColor.length
          const areaColor = this.seriesColor[i]
          const labelColor = this.seriesLabelTextColor[i]
          return {
            name: e.name,
            type: 'line',
            smooth: 0.3,
            itemStyle: {
              color: areaColor
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
                    offset: 0, color: this.$toRGB(areaColor)
                  }, {
                    offset: 1, color: this.$toRGB(areaColor, 0)
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
                color: labelColor,
                backgroundColor: areaColor,
                padding: [3, 6],
                borderRadius: 2
              }
            },
            data: e.data
          }
        })
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
