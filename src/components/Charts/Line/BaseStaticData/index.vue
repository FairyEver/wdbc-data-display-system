<template>
  <div ref="chart" :style="style"></div>
</template>

<script>
// 使用静态数据
import mixin from '@/components/Charts/mixin.js'
export default {
  mixins: [
    mixin
  ],
  props: {
    // 标题
    titleText: {type: String, required: false, default: ''},
    titleColor: {type: String, required: false, default: '#FFF'},
    titleSize: {type: String, required: false, default: '18'},
    // 接口地址
    data: {type: Array, required: false, default: () => []},
    // grid 设置
    gridTop: {type: String, required: false, default: '20'},
    gridBottom: {type: String, required: false, default: '20'},
    gridLeft: {type: String, required: false, default: '20'},
    gridRight: {type: String, required: false, default: '5%'},
    // 坐标轴
    xAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    yAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    yAxisSplitLineColor: {type: String, required: false, default: '#0F3551'},
    // series
    seriesColor: {type: String, required: false, default: '#0F3551'},
    seriesLabelTextColor: {type: String, required: false, default: '#FFF'}
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
          show: this.titleText !== '',
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
    // 返回拼好的option
    optionMaker () {
      const option = this.option
      option.xAxis.data = this.data.map(e => e.name)
      option.series[0].data = this.data.map(e => e.value)
      return option
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(() => {
          this.chart = this.echarts.init(this.$refs.chart)
          this.chart.setOption(this.optionMaker())
        })
    },
    // 刷新数据
    refresh () {
      this.chart.setOption(this.optionMaker())
    }
  }
}
</script>
