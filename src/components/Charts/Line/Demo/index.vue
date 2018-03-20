<template>
  <div ref="chart" :style="style"></div>
</template>

<script>
import mixin from '@/components/Charts/mixin.js'
export default {
  mixins: [
    mixin
  ],
  data () {
    return {
      height: 0,
      width: 0
    }
  },
  computed: {
    style () {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`
      }
    },
    option () {
      return {
        title: {
          text: 'ECharts 入门示例',
          left: 'center',
          textStyle: {
            color: '#FFF'
          }
        },
        grid: {
          left: '6%',
          right: '6%',
          bottom: 30
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          axisLine: {
            lineStyle: {
              color: '#FFF'
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#FFF'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#FFF'
            }
          }
        },
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    }
  },
  mounted () {
    this.$emit('mounted')
  },
  methods: {
    init ({height, width}) {
      this.updateSize(height, width)
        .then(() => {
          // 基于准备好的dom，初始化echarts实例
          var myChart = this.echarts.init(this.$refs.chart)
          // 绘制图表
          myChart.setOption(this.option)
        })
    }
  }
}
</script>
