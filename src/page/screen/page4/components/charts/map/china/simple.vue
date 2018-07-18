<template>
  <div ref='chart' :style="style"></div>
</template>

<script>
// import echarts from '../../../../plugins/echarts'
import echarts from '@/components/Charts/echarts.js'
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
    // 默认向外提交的模拟用户选择了哪个地区 这个地区如果没有 就从数据中取第一个
    defaultActiveName: { default: '河北' },
    // 自动播放相关
    autoPlay: { default: false },
    autoPlayTimeSpace: { default: 3000 },
    // 可以使用的地区 除了这几个地区 其它的都不能点 不能激活
    ableSpace: {
      default: () => {
        return [
          '河北',
          '山东',
          '辽宁',
          '江苏',
          '湖北'
        ]
      }
    }
  },
  data () {
    return {
      // 自动播放相关
      autoPlayTimer: null,
      // 现在选中的区域名称和index
      selectedMap: '',
      activeCount: 0,
      // 图表设置
      chart: null,
      option: {
        title: {
          text: '全国数据',
          x: 'center',
          top: 20,
          textStyle: {
            color: '#FEE032',
            fontSize: 24
          }
        },
        tooltip: {
          show: false
          // trigger: 'item',
          // formatter: '{c0}'
        },
        visualMap: {
          type: 'continuous',
          show: true,
          min: 0,
          max: 10000,
          itemWidth: 8,
          itemHeight: 50,
          // color: ['#2DB1FF', '#002330'],
          // color: ['#00F4FF', '#0C1019'],
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
            // top: 0,
            // bottom: 0,
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
    size (value) {
      if (!this.ready) {
        return
      }
      if (this.chart === null) {
        return
      }
      console.log(`map/china/simple [${this.name}] [组件尺寸变化 ${value.height}*${value.width}]`)
      this.dispose()
      this.init()
    },
    data (value, oldValue) {
      console.log(`map/china/simple [${this.name}] [检测到了数据更新]`)
      this.refresh()
    },
    autoPlay (value) {
      console.log(`map/china/simple [${this.name}] [监听到了autoPlay变化为${value}]`)
      // 监视这个值实现控制自动播放
      if (value) {
        this.playStart()
      } else {
        this.playStop()
      }
    },
    selectedMap (value, oldValue) {
      // 监视这个值实现激活新的区域 取消激活旧的区域
      if (value) {
        this.activeMap(value)
      }
      if (oldValue) {
        this.unActiveMap(oldValue)
      }
    }
  },
  mounted () {
    console.log(`map/china/simple [${this.name}] [mounted]`)
  },
  methods: {
    inArray (arr, obj) {
      // 返回是否在指定的数组中出现
      var i = arr.length
      while (i--) {
        if (arr[i] === obj) {
          return true
        }
      }
      return false
    },
    playStart () {
      // 开始自动播放
      if (this.autoPlayTimer === null) {
        console.log(`map/china/simple [${this.name}] [playStart]`)
        this.autoPlayTimer = setInterval(() => {
          this.playCount()
        }, this.autoPlayTimeSpace)
      }
    },
    playStop () {
      // 停止自动播放
      if (this.autoPlayTimer !== null) {
        console.log(`map/china/simple [${this.name}] [playStop]`)
        clearInterval(this.autoPlayTimer)
        // 还原数据
        this.autoPlayTimer = null
        this.activeCount = 0
        this.selectedMap = ''
        // 取消激活最后一项
        this.unActiveMap(this.selectedMap)
        // 向外更新autoPlay设置
        this.$emit('update:autoPlay', false)
      }
    },
    playCount () {
      // 自动播放的每一步
      if (this.activeCount >= this.ableSpace.length) {
        this.playStop()
        this.$emit('playRound')
      } else {
        // 更新激活的区域
        // 在所有的数据中循环
        // this.selectedMap = this.data[this.activeCount].name
        // 只在允许的数据中循环
        this.selectedMap = this.ableSpace[this.activeCount]
        this.activeCount += 1
      }
    },
    activeMap (name, emit = true) {
      this.selectedMap = name
      // 激活某个地区
      this.chart.dispatchAction({
        type: 'mapSelect',
        name: name
      })
      if (emit) {
        // 默认是会发生一次向外提交事件 改变第二个参数来禁用
        this.emit(name)
      }
    },
    unActiveMap (name) {
      // 取消激活某个地区
      this.chart.dispatchAction({
        type: 'mapUnSelect',
        name: name
      })
    },
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
        let _this = this
        this.chart.on('click', function (params) {
          // 检查是否在允许的区域中
          if (_this.inArray(_this.ableSpace, params.data.name)) {
            // 检查是否在自动播放
            if (_this.autoPlayTimer !== null) {
              _this.playStop()
            }
            // 激活这块地图
            _this.selectedMap = params.data.name
          }
        })
        this.activeMap(this.defaultActiveName)
        console.log(`map/china/simple [${this.name}] [图表实例化完毕]`)
      })
    },
    updateOption () {
      // 更新option设置
      this.option.visualMap.max = this.visualMapMax
      this.option.title.text = this.name
      this.option.series[0].data = this.data
    },
    refresh () {
      // 更新
      this.$nextTick(() => {
        // 更新设置
        this.updateOption()
        // 重新设置图表
        console.log('this.option', this.option)
        this.chart.setOption(this.option)
        this.activeMap(this.selectedMap)
        if (this.autoPlay) {
          this.playStart()
        }
      })
    },
    emit (name) {
      // 这个方法会向外提交模拟点击了某个区域的数据
      // 定义到底是哪个地区
      let filterName
      if (name) {
        filterName = name
      } else {
        filterName = this.defaultActiveName
      }
      // 筛选数据
      let data = this.data.filter(e => e.name === filterName)
      if (data.length === 0) {
        data = [this.data[0]]
      }
      // 提交事件
      this.$emit('check', {
        data: {
          ...data[0]
        }
      })
    }
  }
}
</script>
