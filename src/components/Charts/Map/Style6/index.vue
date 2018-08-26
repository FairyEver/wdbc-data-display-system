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
    data: {type: Array, default: () => []}
  },
  data () {
    return {
      titleText: '累计交易额 ¥12,000',
      subText: '雏鸡 ¥12,000 饲料 ¥12,000 疫苗 ¥12,000',
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
          show: true,
          min: 0,
          max: 1000,
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
