import echarts from 'echarts'
import CountUp from 'countup.js'
import chinaMap from '@/assets/map/china.js'
echarts.registerMap('china', chinaMap)

// https://github.com/inorganik/CountUp.js
export default {
  data () {
    return {
      // 库
      echarts,
      CountUp,
      // 图表对象
      chart: null
    }
  },
  methods: {
    updateSize (height, width) {
      return new Promise((resolve, reject) => {
        this.height = height
        this.width = width
        this.$nextTick(resolve)
      })
    }
  }
}
