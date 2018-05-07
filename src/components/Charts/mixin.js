import echarts from 'echarts'
import CountUp from 'countup.js'
import chinaMap from '@/assets/map/china.js'

import chinaMapShanDong from '@/assets/echarts/山东.js'
import chinaMapJiangSu from '@/assets/echarts/江苏.js'
import chinaMapHeBei from '@/assets/echarts/河北.js'
import chinaMapHuBei from '@/assets/echarts/湖北.js'
import chinaMapLiaoNing from '@/assets/echarts/辽宁.js'

echarts.registerMap('china', chinaMap)

echarts.registerMap('shandong', chinaMapShanDong)
echarts.registerMap('jiangsu', chinaMapJiangSu)
echarts.registerMap('hebei', chinaMapHeBei)
echarts.registerMap('hubei', chinaMapHuBei)
echarts.registerMap('liaoning', chinaMapLiaoNing)

// https://github.com/inorganik/CountUp.js
export default {
  props: {
    // 处理接口返回的数据
    transform: {
      type: Function,
      required: false,
      default: (data) => data
    },
    // 图表第一次初始化的时候就先请求一次数据
    autoGetData: {
      type: Boolean,
      required: false,
      default: true
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
