<template>
  <div ref="chart" :style="style"></div>
</template>

<script>
import echarts from '../../../plugins/echarts'
export default {
  props: {
    name: { default: '未命名图表' },
    data: { default: () => {} },
    ready: { default: false },
    colorTitle: { default: '#FFF' },
    size: {
      default: () => {
        return {
          height: 0,
          width: 0
        }
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  computed: {
    style () {
      return {
        height: this.size.height + 'px',
        width: this.size.width + 'px'
      }
    }
  },
  watch: {
    ready (value) {
      if (value) {
        // console.log(`map/china/simple [${this.name}] [watch: ready is ${value}]`)
        this.init()
      }
    },
    size (value) {
      // console.log(`bar/row [${this.name}] [组件尺寸变化 ${value.height}*${value.width}]`)
      if (this.chart === null) {
        return
      }
      this.dispose()
      this.init()
    }
  },
  mounted () {
    // console.log(`bar/row [${this.name}] [mounted]`)
  },
  methods: {
    dispose () {
      // 销毁
      this.chart.dispose()
      // console.log(`bar/row [${this.name}] [实例销毁]`)
    },
    init () {
      let option = {
        title: {
          text: this.name,
          x: 'center',
          top: 5,
          textStyle: {
            fontSize: 16,
            color: this.colorTitle
          }
        },
        grid: {
          left: 40,
          right: 30,
          top: 54,
          bottom: 10
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params, ticket, callback) {
            var res = params.name + ' : ' + params.value
            return res
          }
        },
        yAxis: {
          data: this.data.map(e => e.name),
          axisLine: {
            // 坐标轴
            lineStyle: {
              color: '#434B56'
            }
          },
          axisTick: {
            // 刻度
            show: false
          },
          axisLabel: {
            // 坐标文字
            fontSize: 10,
            color: '#BCC4CE'
          }
        },
        xAxis: {
          position: 'top',
          axisLine: {
            // 坐标轴
            lineStyle: {
              color: '#434B56'
            }
          },
          splitLine: {
            // 网格区域分割线
            lineStyle: {
              color: '#333945'
            }
          },
          axisTick: {
            // 刻度
            show: false
          },
          axisLabel: {
            // 坐标文字
            fontSize: 10,
            color: '#BCC4CE'
          }
        },
        series: [
          {
            type: 'bar',
            data: this.data,
            barWidth: 10,
            itemStyle: {
              normal: {
                color: '#DD9C38',
                barBorderRadius: [0, 1, 1, 0]
              }
            }
          }
        ]
      }
      this.$nextTick(() => {
        this.chart = echarts.init(this.$refs.chart)
        this.chart.setOption(option)
        // console.log(`bar/row [${this.name}] [图表实例化完毕]`)
      })
    }
  }
}
</script>
