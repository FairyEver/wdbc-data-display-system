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
    interval: {type: Number, required: false, default: 10000},
    // grid 设置
    gridTop: {type: String, required: false, default: '40'},
    gridBottom: {type: String, required: false, default: '20'},
    gridLeft: {type: String, required: false, default: '20'},
    gridRight: {type: String, required: false, default: '5%'}
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
