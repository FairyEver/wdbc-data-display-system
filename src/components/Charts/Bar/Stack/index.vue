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
    // 图例
    legendTop: {type: String, required: false, default: '40'},
    legendTextColor: {type: String, required: false, default: '#FFF'},
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
    // series
    seriesColor: {type: String, required: false, default: '#0F3551'},
    seriesLabelTextColor: {type: String, required: false, default: '#FFF'}
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
          top: '6',
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
          bottom: this.gridBottom
        },
        legend: {
          top: this.legendTop,
          textStyle: {
            color: this.legendTextColor
          },
          data: ['钥匙量', '有效房源量']
        },
        xAxis: {
          type: 'value',
          axisTick : {show: false},
          axisLine: {
            show: false,
            lineStyle:{
              color: this.xAxisAxisLineColor
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: [
          {
            type: 'category',
            axisTick : {show: false},
            axisLine: {
              lineStyle:{
                color: this.yAxisAxisLineColor
              }
            },
            data: ['广州','深圳','东莞','天津','惠州','北京三级','成都','南京','重庆','长沙']
          },
          {
            type: 'category',
            axisLine: {show:false},
            axisTick: {show:false},
            axisLabel: {show:false},
            splitArea: {show:false},
            splitLine: {show:false},
            data: ['广州','深圳','东莞','天津','惠州','北京三级','成都','南京','重庆','长沙']
          }
        ],
        series: [
          {
            name: '有效房源量',
            type: 'bar',
            yAxisIndex:1,
            itemStyle:{
              normal: {
                show: true,
                color: '#277ace',
                barBorderRadius:50,
                borderWidth:0,
                borderColor:'#333'
              }
            },
            barGap:'0%',
            barCategoryGap:'50%',
            data: [120, 132, 101, 134, 90, 230, 210, 125, 231, 132]
          },
          {
            name: '钥匙量',
            type: 'bar',
            itemStyle:{
              normal: {
                show: true,
                color: '#5de3e1',
                barBorderRadius:50,
                borderWidth:0,
                borderColor:'#333'
              }
            },
            barGap:'0%',
            barCategoryGap:'50%',
            data: [32, 52, 41, 64, 15, 10, 32, 25, 210, 32]
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
