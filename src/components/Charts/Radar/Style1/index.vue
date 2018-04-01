<template>
  <div ref="chart" :style="style"></div>
</template>

<script>
import mixin from '@/components/Charts/mixin.js'
// const label = {
//   label: {
//     max: {
//       value: 3000,
//       name: '最大值的地名'
//     },
//     min: {
//       value: 12,
//       name: '最小的地名'
//     },
//     avg: {
//       value: 123
//     }
//   }
// }
export default {
  mixins: [
    mixin
  ],
  props: {
    // 标题
    titleText: {type: String, required: false, default: 'Chart'},
    titleColor: {type: String, required: false, default: '#FFF'},
    titleSize: {type: String, required: false, default: '20'},
    // 接口地址
    url: {type: String, required: false, default: 'x.mock'},
    // 发送请求的时候带的参数
    ajaxData: {type: Object, required: false, default: () => ({})},
    // 发送请求的间隔
    interval: {type: Number, required: false, default: 10000}
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
          top: 10,
          left: 10,
          textStyle: {
            color: this.titleColor,
            fontSize: this.titleSize
          }
        },
        legend: {
          left: 10,
          top: 50,
          orient: 'vertical',
          data: ['平均价', '最高价', '最低价'],
          textStyle: {
            color: '#FFF'
          }
        },
        radar: {
          radius: '50%',
          name: {
            formatter: (value, indicator) => {
              return [
                `{title|${value}均价 ${indicator.label.avg.value}元}}`,
                `{texth|${indicator.label.max.name} ${indicator.label.max.value}元}`,
                `{textl|${indicator.label.min.name} ${indicator.label.min.value}元}`
              ].join('\n')
            },
            rich: {
              title: {
                color: '#FFF',
                fontSize: 18,
                lineHeight: 20
              },
              texth: {
                color: this.$color.red,
                fontSize: 14,
                lineHeight: 16
              },
              textl: {
                color: this.$color.green,
                fontSize: 14,
                lineHeight: 16
              }
            }
          },
          axisLine: {
            lineStyle: {
              color: ['rgba(255, 255, 255, 0.1)']
            }
          },
          splitLine: {
            lineStyle: {
              color: ['rgba(255, 255, 255, 0.1)']
            }
          },
          splitArea: {
            areaStyle: {
              color: [
                'rgba(255, 255, 255, 0.05)',
                'rgba(0, 0, 0, 0.05)'
              ]
            }
          },
          indicator: [
            // {name: '红壳鸡蛋', min: 1500, max: 3500, ...label},
            // {name: '粉壳鸡蛋', min: 2500, max: 4500, ...label},
            // {name: '白壳鸡蛋', min: 2500, max: 5500, ...label},
            // {name: '玉米', min: 500, max: 2500, ...label},
            // {name: '豆粕', min: 10, max: 40, ...label},
            // {name: '淘汰鸡', min: 2500, max: 4500, ...label}
          ]
        },
        series: [{
          name: '价格',
          type: 'radar',
          data: [
            {
              // value: [3000, 4000, 5000, 2000, 30, 4000],
              value: [],
              name: '最高价',
              itemStyle: {
                color: this.$color.red
              },
              symbol: 'circle',
              symbolSize: 6,
              lineStyle: {
                color: this.$color.red
              }
            },
            {
              // value: [2200, 3400, 3300, 1200, 22, 3500],
              value: [],
              name: '平均价',
              itemStyle: {
                color: '#FFF'
              },
              symbol: 'circle',
              symbolSize: 6,
              lineStyle: {
                color: '#FFF'
              }
            },
            {
              // value: [2000, 3000, 3000, 1000, 20, 3000],
              value: [],
              name: '最低价',
              itemStyle: {
                color: this.$color.green
              },
              symbol: 'circle',
              symbolSize: 6,
              lineStyle: {
                color: this.$color.green
              }
            }
          ]
        }]
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
        resolve(res.data)
      })
    },
    // 返回拼好的option
    optionMaker () {
      return new Promise(async (resolve, reject) => {
        const data = this.transform(await this.getData())
        console.log(data)
        const option = this.option
        option.radar.indicator = data.indicator
        option.series[0].data[0].value = data.series[0]
        option.series[0].data[1].value = data.series[1]
        option.series[0].data[2].value = data.series[2]
        resolve(this.option)
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
