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
    data: {type: Object, default: () => ({yAxis: [], series: []})},
    // 标题
    titleText: {type: String, required: false, default: 'Chart'},
    titleColor: {type: String, required: false, default: '#FFF'},
    titleSize: {type: String, required: false, default: '18'},
    // 图例
    legendTop: {type: String, required: false, default: '40'},
    legendTextColor: {type: String, required: false, default: '#FFF'},
    // grid 设置
    gridTop: {type: String, required: false, default: '80'},
    gridBottom: {type: String, required: false, default: '20'},
    gridLeft: {type: String, required: false, default: '20'},
    gridRight: {type: String, required: false, default: '5%'},
    // 坐标轴
    xAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    yAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    yAxisSplitLineColor: {type: String, required: false, default: '#0F3551'},
    seriesColor: {type: Array, default: () => ['#f845f1', '#ad46f3', '#5045f6', '#4777f5', '#44aff0', '#45dbf7', '#f6d54a', '#f69846', '#ff4343']}
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
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          top: this.legendTop,
          textStyle: {
            color: this.legendTextColor
          },
          data: this.data.series.map(e => e.name)
        },
        grid: {
          left: this.gridLeft,
          right: this.gridRight,
          top: this.gridTop,
          bottom: this.gridBottom,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: this.xAxisAxisLineColor
            }
          }
        },
        yAxis: {
          type: 'category',
          data: this.data.yAxis,
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
        series: this.data.series.map((e, index) => ({
          name: e.name,
          type: 'bar',
          barMaxWidth: 25,
          stack: '总量',
          itemStyle: {
            color: this.seriesColor[index],
            barBorderRadius: index === this.data.series.length - 1 ? [0, 4, 4, 0] : 0
          },
          label: {
            normal: {
              show: false,
              position: 'inside'
            }
          },
          data: e.data
        }))
      }
    }
  },
  mounted () {
    this.$emit('mounted')
  },
  watch: {
    data: {
      deep: true,
      handler () {
        this.refresh()
      }
    }
  },
  methods: {
    // 返回拼好的option
    optionMaker () {
      return this.option
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(async () => {
          this.chart = this.echarts.init(this.$refs.chart)
          this.chart.setOption(this.optionMaker())
        })
    },
    // 更新数据
    refresh () {
      this.chart.setOption(this.optionMaker())
    }
  }
}
</script>
