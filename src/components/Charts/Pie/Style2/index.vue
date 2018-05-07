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
          text: this.titleText,
          top: '10',
          left: 'center',
          textStyle: {
            color: this.titleColor,
            fontSize: this.titleSize
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
        series: [
          {
            data: [],
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
    // 请求数据 这个函数最后应该返回接口的数据
    getData () {
      return new Promise(async (resolve, reject) => {
        // const res = await this.$http.post(this.url, {
        //   type: 2,
        //   ...this.ajaxData
        // })
        // resolve(res.data)
        resolve({
          list: [
            {name: '2年以下', value: 3885},
            {name: '2-5年', value: 33544},
            {name: '5-10年', value: 61497},
            {name: '10-15年', value: 29520},
            {name: '15年以上', value: 7466}
          ]
        })
      })
    },
    // 返回拼好的option
    optionMaker () {
      return new Promise(async (resolve, reject) => {
        const data = this.transform(await this.getData()).list
        const option = this.option
        option.series[0].data = data
        resolve(option)
      })
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(async () => {
          this.chart = this.echarts.init(this.$refs.chart)
          if (this.autoGetData) {
            this.chart.setOption(await this.optionMaker())
          }
          if (this.interval) {
            this.intervalObj = setInterval(this.refresh, this.interval)
          }
        })
    },
    // 更新数据
    async refresh () {
      this.chart.setOption(await this.optionMaker())
    }
  }
}
</script>
