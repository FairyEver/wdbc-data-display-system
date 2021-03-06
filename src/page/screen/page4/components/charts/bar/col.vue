<template>
  <div ref='chart' :style="style" @click="checkData"></div>
</template>

<script>
import echarts from '@/components/Charts/echarts.js'
export default {
  props: {
    name: { default: '未命名图表' },
    data: { default: () => [] },
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
      chart: null,
      option: {
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
          left: 50,
          right: 30,
          top: 54,
          bottom: 30
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params, ticket, callback) {
            var res = params.name + ' : ' + params.value
            return res
          }
        },
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: '{c}'
          }
        },
        xAxis: [{
          data: this.data.map(e => e.name).reverse(),
          interval: 500,
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
        }],
        yAxis: [{
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
        }],
        series: [
          {
            type: 'bar',
            data: this.data.reverse(),
            barMaxWidth: 20,
            itemStyle: {
              normal: {
                barBorderRadius: [2, 2, 0, 0],
                color: function (params) {
                  var colorList = [
                    '#5ea2db',
                    '#db5c5e',
                    '#f7d09c',
                    '#55be9d',
                    '#9c62e4',
                    '#da9664'
                  ]
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        ]
      }
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
        this.init()
      }
    },
    size (value) {
      if (this.chart === null) {
        return
      }
      this.dispose()
      this.init()
    },
    name (value) {
      if (this.chart === null) {
        return
      }
      this.refresh()
    },
    data (value, oldValue) {
      this.refresh()
    }
  },
  mounted () {
  },
  methods: {
    dispose () {
      // 销毁
      this.chart.dispose()
    },
    init () {
      // 初始化
      this.$nextTick(() => {
        this.chart = echarts.init(this.$refs.chart)
        this.option.title.text = this.name
        this.option.xAxis[0].data = this.data.map(e => e.name).reverse()
        this.option.series[0].data = this.data
        this.chart.setOption(this.option)
      })
    },
    refresh () {
      // 更新
      this.$nextTick(() => {
        this.option.title.text = this.name
        this.option.xAxis[0].data = this.data.map(e => e.name).reverse()
        this.option.series[0].data = this.data
        this.chart.setOption(this.option)
      })
    },
    checkData () {
    }
  }
}
</script>
