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
    data: { default: () => 30 },
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
          text: '%',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: this.colorLight,
            fontSize: this.fontSize
          }
        },
        series: [
          {
            name: '订单数量',
            type: 'pie',
            hoverAnimation: false,
            radius: this.radius,
            center: ['50%', '50%'],
            clockwise: false,
            data: 30,
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
  mounted () {
    this.$emit('mounted')
  },
  methods: {
    // 返回拼好的option
    optionMaker () {
      const option = this.option
      return option
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(() => {
          this.chart.setOption(this.optionMaker())
        })
    }
  }
}
</script>
