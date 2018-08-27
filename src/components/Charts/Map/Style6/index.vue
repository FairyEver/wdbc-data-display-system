<template>
  <div ref="chart" :style="style"></div>
</template>

<script>
/* eslint-disable */
import mixin from '@/components/Charts/mixin.js'
Array.prototype.max = function(){ 
  return Math.max.apply({},this)
} 
Array.prototype.min = function(){ 
  return Math.min.apply({},this)
}
export default {
  mixins: [
    mixin
  ],
  props: {
    data: {type: Array, default: () => []}
  },
  data () {
    return {
      titleText: '累计交易额 ¥1,197,925,503',
      subText: '雏鸡 ¥1,195,570,049 饲料 ¥2,355,454.35 疫苗 ¥0',
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
          text: `${this.titleText}\n\n`,
          subtext: this.subText,
          top: '10',
          left: 'center',
          textStyle: {
            color: '#FFF',
            fontSize: '18',
            height: 500
          },
          subtextStyle: {
            fontSize: 20,
            color: '#FED628'
          }
        },
        tooltip: {
          show: false
        },
        visualMap: {
          type: 'continuous',
          min: this.data.map(e => e.value).min(),
          max: this.data.map(e => e.value).max(),
          show: true,
          itemWidth: 8,
          itemHeight: 50,
          color: ['#1EB2BD', '#134C55'],
          text: ['高', '低'],
          textStyle: {
            color: '#2DB1FF'
          }
        },
        toolbox: {
          show: false
        },
        roamController: {
          show: true,
          x: 'right',
          mapTypeControl: {
            'china': true
          }
        },
        series: [
          {
            type: 'map',
            mapType: 'china',
            roam: false,
            left: 50,
            right: 50,
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
            data: this.data
          }
        ]
      }
    }
  },
  methods: {
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(async () => {
          this.chart = this.echarts.init(this.$refs.chart)
          this.chart.setOption(this.option)
        })
    }
  },
  mounted () {
    this.$emit('mounted')
  }
}
</script>
