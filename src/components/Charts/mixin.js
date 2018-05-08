import echarts from 'echarts'
import CountUp from 'countup.js'
import chinaMap from '@/assets/map/china.js'

import anhui from '@/assets/echarts/anhui.json'
import heilongjiang from '@/assets/echarts/heilongjiang.json'
import neimenggu from '@/assets/echarts/neimenggu.json'
import xinjiang from '@/assets/echarts/xinjiang.json'
import beijing from '@/assets/echarts/beijing.json'
import henan from '@/assets/echarts/henan.json'
import ningxia from '@/assets/echarts/ningxia.json'
import xizang from '@/assets/echarts/xizang.json'
import chongqing from '@/assets/echarts/chongqing.json'
import hongkong from '@/assets/echarts/hongkong.json'
import qinghai from '@/assets/echarts/qinghai.json'
import yunnan from '@/assets/echarts/yunnan.json'
import fujian from '@/assets/echarts/fujian.json'
import hubei from '@/assets/echarts/hubei.json'
import shan1xi from '@/assets/echarts/shan1xi.json'
import zhejiang from '@/assets/echarts/zhejiang.json'
import gansu from '@/assets/echarts/gansu.json'
import hunan from '@/assets/echarts/hunan.json'
import shan3xi from '@/assets/echarts/shan3xi.json'
import guangdong from '@/assets/echarts/guangdong.json'
import jiangsu from '@/assets/echarts/jiangsu.json'
import shandong from '@/assets/echarts/shandong.json'
import guangxi from '@/assets/echarts/guangxi.json'
import jiangxi from '@/assets/echarts/jiangxi.json'
import shanghai from '@/assets/echarts/shanghai.json'
import guizhou from '@/assets/echarts/guizhou.json'
import jilin from '@/assets/echarts/jilin.json'
import sichuan from '@/assets/echarts/sichuan.json'
import hainan from '@/assets/echarts/hainan.json'
import liaoning from '@/assets/echarts/liaoning.json'
import taiwan from '@/assets/echarts/taiwan.json'
import hebei from '@/assets/echarts/hebei.json'
import macau from '@/assets/echarts/macau.json'
import tianjin from '@/assets/echarts/tianjin.json'

echarts.registerMap('china', chinaMap)

echarts.registerMap('anhui', anhui)
echarts.registerMap('heilongjiang', heilongjiang)
echarts.registerMap('neimenggu', neimenggu)
echarts.registerMap('xinjiang', xinjiang)
echarts.registerMap('beijing', beijing)
echarts.registerMap('henan', henan)
echarts.registerMap('ningxia', ningxia)
echarts.registerMap('xizang', xizang)
echarts.registerMap('chongqing', chongqing)
echarts.registerMap('hongkong', hongkong)
echarts.registerMap('qinghai', qinghai)
echarts.registerMap('yunnan', yunnan)
echarts.registerMap('fujian', fujian)
echarts.registerMap('hubei', hubei)
echarts.registerMap('shan1xi', shan1xi)
echarts.registerMap('zhejiang', zhejiang)
echarts.registerMap('gansu', gansu)
echarts.registerMap('hunan', hunan)
echarts.registerMap('shan3xi', shan3xi)
echarts.registerMap('guangdong', guangdong)
echarts.registerMap('jiangsu', jiangsu)
echarts.registerMap('shandong', shandong)
echarts.registerMap('guangxi', guangxi)
echarts.registerMap('jiangxi', jiangxi)
echarts.registerMap('shanghai', shanghai)
echarts.registerMap('guizhou', guizhou)
echarts.registerMap('jilin', jilin)
echarts.registerMap('sichuan', sichuan)
echarts.registerMap('hainan', hainan)
echarts.registerMap('liaoning', liaoning)
echarts.registerMap('taiwan', taiwan)
echarts.registerMap('hebei', hebei)
echarts.registerMap('macau', macau)
echarts.registerMap('tianjin', tianjin)

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
