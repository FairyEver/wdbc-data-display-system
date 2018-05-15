<template>
  <div ref="chart" :style="style"></div>
</template>

<script>
import mixin from '@/components/Charts/mixin.js'
import data from './data.json'
export default {
  mixins: [
    mixin
  ],
  props: {
    // 标题
    titleText: {type: String, required: false, default: 'Chart'},
    titleColor: {type: String, required: false, default: '#FFF'},
    titleSize: {type: String, required: false, default: '18'}
  },
  data () {
    return {
      // 宽高
      height: 0,
      width: 0,
      // 上一个激活的区域名字
      lastActiveMap: ''
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
        legend: {
          icon: 'circle',
          x: 'center',
          y: '10%',
          data: [
            '雏鸡',
            '蛋鸡'
          ],
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          show: false,
          trigger: 'item'
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#134C55',
              borderColor: '#11CDD9',
              borderWidth: 2
            },
            emphasis: {
              areaColor: '#FFCF2D',
              borderWidth: 2,
              borderColor: '#FF8D23',
              shadowColor: 'rgba(0, 0, 0, 0.4)',
              shadowBlur: 20,
              shadowOffsetY: 4
            }
          }
        },
        series: [
          {
            name: '雏鸡',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 10,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#FFF'
              }
            },
            data: data.zj
          },
          {
            name: '蛋鸡',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: data.dj,
            symbolSize: 14,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: '#eac736',
                shadowBlur: 10,
                shadowColor: '#05C3F9'
              }
            },
            zlevel: 1
          },
          {
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle: {
              normal: {
                areaColor: 'rgba(0,0,0,0)',
                label: {
                  show: false
                },
                borderWidth: 2,
                borderColor: '#11CDD9'
              },
              emphasis: {
                label: {
                  show: true,
                  position: ['50%', '50%'],
                  fontSize: 16,
                  color: '#52D7E9',
                  backgroundColor: 'rgba(0,0,0,.7)',
                  padding: [4, 6],
                  borderRadius: 2
                },
                areaColor: '#FFCF2D',
                borderWidth: 2,
                borderColor: '#FF8D23',
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20,
                shadowOffsetY: 4
              }
            },
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
        resolve(res.data)
      })
    },
    // 返回拼好的option
    optionMaker () {
      return new Promise(async (resolve, reject) => {
        const data = this.transform(await this.getData()).list
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
          this.chart.setOption(this.option)
        })
    },
    // 激活某个地区
    activeMap (name = '河北省') {
      if (this.lastActiveMap) {
        this.unActiveMap(this.lastActiveMap)
      }
      this.chart.dispatchAction({
        type: 'mapSelect',
        name
      })
      this.lastActiveMap = name
    },
    // 取消激活某个地区
    unActiveMap (name = '河北省') {
      this.chart.dispatchAction({
        type: 'mapUnSelect',
        name
      })
    }
  }
}
</script>
