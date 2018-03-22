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
    titleSize: {type: String, required: false, default: '14'},
    // 接口地址
    url: {type: String, required: false, default: 'x.mock'},
    // 发送请求的时候带的参数
    ajaxData: {type: Object, required: false, default: () => ({})},
    // 发送请求的间隔
    interval: {type: Number, required: false, default: 10000},
    // grid 设置
    gridTop: {type: String, required: false, default: '40'},
    gridBottom: {type: String, required: false, default: '30'},
    gridLeft: {type: String, required: false, default: '10%'},
    gridRight: {type: String, required: false, default: '5%'},
    // 坐标轴
    xAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    yAxisAxisLineColor: {type: String, required: false, default: '#FFF'},
    yAxisSplitLineColor: {type: String, required: false, default: '#0F3551'},
    // series
    itemColor: {type: String, required: false, default: '#0F3551'},
    labelColor: {type: String, required: false, default: '#FFF'}
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
          text: '堆叠区域图'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLine: {
              lineStyle: {
                color: this.xAxisAxisLineColor
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: this.yAxisAxisLineColor
              }
            },
            splitLine: {
              lineStyle: {
                color: this.yAxisSplitLineColor
              }
            }
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [150, 232, 201, 154, 190, 330, 410]
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
          type: 3,
          ...this.ajaxData
        })
        resolve(res.data.list)
      })
    },
    // 返回拼好的option
    optionMaker () {
      return new Promise(async (resolve, reject) => {
        const data = await this.getData()
        console.log(data)
        const option = this.option
        // option.xAxis.data = data.map(e => e.name)
        // option.series[0].data = data.map(e => e.value)
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
