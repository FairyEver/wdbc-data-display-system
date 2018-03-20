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
      width: 0,
      intervalObj: null
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
          text: this.titleText,
          left: 'center',
          textStyle: {
            color: '#FFF'
          }
        },
        grid: {
          left: '6%',
          right: '6%',
          top: '40',
          bottom: '30'
        },
        xAxis: {
          data: [],
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
              color: '#0F3551'
            }
          }
        },
        series: [
          {
            type: 'bar',
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
    // 请求数据 这个函数最后应该返回接口的数据
    getData () {
      return new Promise(async (resolve, reject) => {
        const res = await this.$http.post(this.url, {
          type: 2,
          ...this.ajaxData
        })
        resolve(res.data.list)
      })
    },
    // 返回拼好的option
    optionMaker () {
      return new Promise(async (resolve, reject) => {
        const data = await this.getData()
        const option = this.option
        option.xAxis.data = data.map(e => e.name)
        option.series[0].data = data.map(e => e.value)
        resolve(option)
      })
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(async () => {
          this.chart = this.echarts.init(this.$refs.chart)
          this.chart.setOption(await this.optionMaker())
          this.intervalObj = setInterval(async () => {
            this.chart.setOption(await this.optionMaker())
          }, this.interval)
        })
    }
  }
}
</script>
