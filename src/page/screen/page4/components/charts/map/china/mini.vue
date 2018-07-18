<template>
  <div ref='chart' :style="style"></div>
</template>

<script>
import echarts from '../../../../plugins/echarts'
export default {
  props: {
    name: { default: '未命名图表' },
    data: { default: () => [] },
    ready: { default: false },
    size: {
      default: () => {
        return {
          height: 0,
          width: 0
        }
      }
    },
    // 地图类型 默认是全国地图
    mapType: { default: 'china' },
    // 单位
    dw: { default: '' }
  },
  data () {
    return {
      // 图表设置
      chart: null,
      option: {
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: (params) => {
            if (isNaN(params.value)) {
              // 没有数据
              return '暂时没有数据'
            } else {
              // 有数据
              return params.value + this.dw
            }
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: 1234,
          color: ['#2DB1FF', '#002330']
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
            mapType: '',
            roam: false,
            itemStyle: {
              normal: {
                areaColor: 'rgba(0,0,0,0)',
                label: {
                  show: false,
                  fontSize: 8,
                  color: '#52D7E9'
                },
                borderWidth: 1,
                borderColor: '#1E6591'
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
                areaColor: '#78F7FF',
                borderWidth: 1,
                borderColor: '#0C1019',
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
  computed: {
    style () {
      return {
        height: this.size.height + 'px',
        width: this.size.width + 'px'
      }
    },
    visualMapMax () {
      // 左下角的数值设置最大值 这个最大值应该等于数据的最大项
      let max = 0
      this.data.forEach(e => {
        if (max < Number(e.value)) {
          max = Number(e.value)
        }
      })
      return max
    }
  },
  watch: {
    ready (value) {
      if (value) {
        console.log(`map/china/simple [${this.name}] [watch: ready is ${value}]`)
        this.init()
      }
    },
    mapType () {
      if (this.chart) {
        this.refresh()
      }
    },
    data () {
      if (this.chart) {
        this.refresh()
      }
    },
    size (value, oldValue) {
      if ((value.height === oldValue.height) || (value.width === oldValue.width)) {
        return
      }
      if (!this.ready) {
        return
      }
      if (this.chart === null) {
        return
      }
      this.dispose()
      this.init()
    }
  },
  mounted () {
    console.log(`map/china/simple [${this.name}] [mounted]`)
  },
  methods: {
    dispose () {
      // 销毁
      this.chart.dispose()
      console.log(`map/china/simple [${this.name}] [实例销毁]`)
    },
    init () {
      // 初始化
      this.$nextTick(() => {
        this.chart = echarts.init(this.$refs.chart)
        // 更新设置
        this.updateOption()
        // 重新设置图表
        this.chart.setOption(this.option)
        console.log(`map/china/simple [${this.name}] [图表实例化完毕]`)
      })
    },
    updateOption () {
      // 更新option设置
      this.option.visualMap.max = this.visualMapMax
      this.option.series[0].mapType = this.mapType
      this.option.series[0].data = this.data
    },
    refresh () {
      if (this.chart) {
        this.$nextTick(() => {
          // 更新设置
          this.updateOption()
          // 重新设置图表
          this.chart.setOption(this.option)
          if (this.autoPlay) {
            this.playStart()
          }
        })
      }
    }
  }
}
</script>
