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
      width: 0
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
        grid: {
          left: this.gridLeft,
          right: this.gridRight,
          top: this.gridTop,
          bottom: this.gridBottom,
          containLabel: true
        },
        yAxis: {
<<<<<<< .merge_file_gO2Yl8
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
=======
          data: ['云南省', '陕西省', '山西省', '辽宁省', '安徽省', '湖北省', '江苏省', '山东省', '河南省', '河北省'],
>>>>>>> .merge_file_eY0fqn
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
        },
        xAxis: {
          position: 'top',
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
        },
        series: [
          {
            type: 'bar',
            data: ['1632', '1983', '2507', '3025', '3182', '4996', '5059', '8897', '9452', '12443'],
            barMaxWidth: 14,
            itemStyle: {
              normal: {
                color: '#DD9C38',
                barBorderRadius: [0, 1, 1, 0]
              }
            }
          }
        ]
      }
    }
<<<<<<< .merge_file_gO2Yl8
  }
  // mounted () {
  //   this.$emit('mounted')
  // },
  // methods: {
  //   // 请求数据 这个函数最后应该返回接口的数据
  //   getData () {
  //     return new Promise(async (resolve, reject) => {
  //       const res = await this.$http.post(this.url, {
  //         type: 2,
  //         ...this.ajaxData
  //       })
  //       resolve(res.data)
  //     })
  //   },
  //   // 返回拼好的option
  //   optionMaker () {
  //     return new Promise(async (resolve, reject) => {
  //       const data = this.transform(await this.getData())
  //       const option = this.option
  //       option.yAxis.data = data.map(e => e.name)
  //       option.series[0].data = data.map(e => e.value)
  //       resolve(option)
  //     })
  //   },
  //   // 初始化
  //   init ({height, width}) {
  //     this.updateSize(height, width)
  //       .then(async () => {
  //         this.chart = this.echarts.init(this.$refs.chart)
  //         this.chart.setOption(await this.optionMaker())
  //         if (this.interval) {
  //           this.intervalObj = setInterval(this.refresh, this.interval)
  //         }
  //       })
  //   },
  //   // 更新数据
  //   async refresh () {
  //     this.chart.setOption(await this.optionMaker())
  //   }
  // }
=======
  },
  methods: {
    // 初始化
    init (height, width) {
      this.updateSize(height, width)
        .then(async () => {
          this.chart = this.echarts.init(this.$refs.chart)
          this.chart.setOption(this.option)
        })
    }
  }
>>>>>>> .merge_file_eY0fqn
}
</script>
