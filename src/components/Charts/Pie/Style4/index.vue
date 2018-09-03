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
    // 数据
    data: {default: () => []},
    // 图例
    legendTop: {type: String, required: false, default: '40'},
    legendTextColor: {type: String, required: false, default: '#FFF'}
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
  watch: {
    data () {
      this.refresh()
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
        color: [
          '#5ea2db',
          '#db5c5e',
          '#f7d09c',
          '#55be9d',
          '#9c62e4',
          '#da9664'
        ],
        grid: {
          top: 46,
          left: 16,
          right: 16,
          bottom: 16,
          containLabel: true
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)',
          backgroundColor: '#000'
        },
        legend: {
          top: this.legendTop,
          textStyle: {
            color: this.legendTextColor
          },
          data: this.data.map(item => item.name)
        },
        series: [{
          type: 'pie',
          radius: ['40%', '60%'],
          center: ['50%', '50%'],
          data: this.data,
          animationType: 'scale',
          animationEasing: 'elasticOut'
        }]
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
