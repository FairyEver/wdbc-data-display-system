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
    subText: {type: String, required: false, default: ''},
    titleColor: {type: String, required: false, default: '#FFF'},
    titleSize: {type: String, required: false, default: '18'}
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
          text: `${this.titleText}\n\n`,
          subtext: this.subText,
          top: '10',
          left: 'center',
          textStyle: {
            color: this.titleColor,
            fontSize: this.titleSize,
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
            data: [
              {
                name: '广东省',
                value: '2'
              },
              {
                name: '广西省',
                value: '2'
              },
              {
                name: '上海市',
                value: '7'
              },
              {
                name: '贵州省',
                value: '14'
              },
              {
                name: '四川省',
                value: '20'
              },
              {
                name: '重庆市',
                value: '23'
              },
              {
                name: '北京市',
                value: '29'
              },
              {
                name: '宁夏回族自治区',
                value: '29'
              },
              {
                name: '湖南省',
                value: '30'
              },
              {
                name: '浙江省',
                value: '37'
              },
              {
                name: '福建省',
                value: '40'
              },
              {
                name: '天津市',
                value: '40'
              },
              {
                name: '江西省',
                value: '58'
              },
              {
                name: '海南省',
                value: '59'
              },
              {
                name: '甘肃省',
                value: '61'
              },
              {
                name: '吉林省',
                value: '84'
              },
              {
                name: '黑龙江省',
                value: '88'
              },
              {
                name: '江苏省',
                value: '161'
              },
              {
                name: '辽宁省',
                value: '162'
              },
              {
                name: '陕西省',
                value: '173'
              },
              {
                name: '内蒙古自治区',
                value: '176'
              },
              {
                name: '云南省',
                value: '181'
              },
              {
                name: '安徽省',
                value: '202'
              },
              {
                name: '新疆维吾尔自治区',
                value: '214'
              },
              {
                name: '山西省',
                value: '270'
              },
              {
                name: '湖北省',
                value: '322'
              },
              {
                name: '河南省',
                value: '416'
              },
              {
                name: '山东省',
                value: '585'
              },
              {
                name: '河北省',
                value: '1533'
              }
            ]
          }
        ]
      }
    }
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
}
</script>
