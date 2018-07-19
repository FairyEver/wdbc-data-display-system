<template>
  <div ref='chart' :style="style"></div>
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
          text: '',
          x: 'center',
          top: 5,
          textStyle: {
            fontSize: 16,
            color: this.colorTitle
          }
        },
        color: [
          '#f7d09c',
          '#9c62e4',
          '#db5c5e',
          '#5ea2db',
          '#55be9d',
          '#da9664'
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>数量: {c}<br/>占比: {d}%'
        },
        series: [
          {
            name: '占比',
            type: 'pie',
            center: ['50%', '55%'],
            radius: ['25%', '50%'],
            avoidLabelOverlap: true,
            itemStyle: {
              normal: {
                borderColor: '#171F29',
                borderWidth: 4
              }
            },
            label: {
              normal: {
                show: true,
                formatter: '{b}\n{d}%',
                textStyle: {
                  fontSize: 12,
                  color: '#BCC4CE'
                }
              },
              emphasis: {
                show: true
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: []
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
        // // console.log(`map/china/simple [${this.name}] [watch: ready is ${value}]`)
        this.init()
      }
    },
    size (value) {
      // // console.log(`pie/type1 [${this.name}] [组件尺寸变化 ${value.height}*${value.width}]`)
      if (this.chart === null) {
        return
      }
      this.dispose()
      this.init()
    },
    name (value) {
      // // console.log(`pie/type1 [${this.name}] [name变化 ${this.name}]`)
      if (this.chart === null) {
        return
      }
      this.refresh()
    },
    data (value, oldValue) {
      // // console.log(`pie/type1 [${this.name}] [检测到了数据更新]`)
      this.refresh()
    }
  },
  mounted () {
    // // console.log(`pie/type1 [${this.name}] [mounted]`)
  },
  methods: {
    dispose () {
      // 销毁
      this.chart.dispose()
      // // console.log(`pie/type1 [${this.name}] [实例销毁]`)
    },
    init () {
      // 初始化
      this.$nextTick(() => {
        this.chart = echarts.init(this.$refs.chart)
        this.option.title.text = this.name
        this.option.series[0].data = this.data
        this.chart.setOption(this.option)
        // // console.log(`pie/type1 [${this.name}] [图表实例化完毕]`)
      })
    },
    refresh () {
      // 更新
      this.$nextTick(() => {
        this.option.title.text = this.name
        this.option.series[0].data = this.data
        this.chart.setOption(this.option)
      })
    }
  }
}
</script>
