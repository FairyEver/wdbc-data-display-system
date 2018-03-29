import echarts from 'echarts'
import CountUp from 'countup.js'
import chinaMap from '@/assets/map/china.js'
echarts.registerMap('china', chinaMap)

// https://github.com/inorganik/CountUp.js
export default {
  props: {
    // 处理接口返回的数据
    transform: {
      type: Function,
      required: false,
      default: (data) => data
    }
  },
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
