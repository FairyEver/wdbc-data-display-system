<template>
  <div ref='chart' :style="style"></div>
</template>

<script>
// 这个组件不单独使用，只是生成一个小饼图
import echarts from '@/components/Charts/echarts.js'
export default {
  props: {
    name: { default: '未命名图表' },
    data: { default: () => 30 },
    size: {
      default: () => {
        return {
          height: 0,
          width: 0
        }
      }
    },
    // 样式设置
    colorDark: { default: '#341F24' },
    colorLight: { default: '#DB5F52' },
    // 中间的字体大小
    fontSize: { default: 14 },
    // 圆环的参数
    radius: {
      default: () => ['60%', '80%']
    }
  },
  data () {
    return {
      chart: null,
      option: {
        title: {
          text: '%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: this.colorLight,
            fontSize: 14
          }
        },
        series: [
          {
            name: '订单数量',
            type: 'pie',
            hoverAnimation: false,
            radius: ['60%', '80%'],
            center: ['50%', '50%'],
            clockwise: false,
            data: [],
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 0,
                borderColor: this.colorDark
              },
              emphasis: {
                borderWidth: 0,
                borderColor: this.colorDark
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
    },
    dataComputed () {
      return [
        {
          name: this.name,
          value: this.data,
          itemStyle: {
            normal: {
              color: this.colorLight
            }
          }
        },
        {
          name: 'other',
          value: 100 - this.data,
          itemStyle: {
            normal: {
              color: this.colorDark
            }
          }
        }
      ]
    }
  },
  watch: {
    size (value) {
      // console.log(`pie/type2 [${this.name}] [组件尺寸变化 ${value.height}*${value.width}]`)
      if (this.chart === null) {
        return
      }
      this.dispose()
      this.init()
    },
    data (value, oldValue) {
      // console.log(`pie/type2 [${this.name}] [检测到了数据更新]`)
      this.refresh()
    }
  },
  mounted () {
    // console.log(`pie/type2 [${this.name}] [mounted]`)
    this.init()
  },
  methods: {
    dispose () {
      // 销毁
      this.chart.dispose()
      // console.log(`pie/type2 [${this.name}] [实例销毁]`)
    },
    init () {
      // 初始化
      this.$nextTick(() => {
        this.chart = echarts.init(this.$refs.chart)
        this.refreshOption()
        this.chart.setOption(this.option)
        // console.log(`pie/type2 [${this.name}] [图表实例化完毕]`)
      })
    },
    refresh () {
      // 更新
      this.$nextTick(() => {
        this.refreshOption()
        this.chart.setOption(this.option)
      })
    },
    refreshOption () {
      this.option.title.text = this.data + '%'
      this.option.title.textStyle.fontSize = this.fontSize
      this.option.series[0].radius = this.radius
      this.option.series[0].data = this.dataComputed
    }
  }
}
</script>
