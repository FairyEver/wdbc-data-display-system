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

echarts.registerMap('安徽省', anhui)
echarts.registerMap('黑龙江省', heilongjiang)
echarts.registerMap('内蒙古自治区', neimenggu)
echarts.registerMap('新疆维吾尔自治区', xinjiang)
echarts.registerMap('北京市', beijing)
echarts.registerMap('河南省', henan)
echarts.registerMap('宁夏回族自治区', ningxia)
echarts.registerMap('自藏自治区', xizang)
echarts.registerMap('重庆市', chongqing)
echarts.registerMap('香港特别行政区', hongkong)
echarts.registerMap('青海省', qinghai)
echarts.registerMap('云南省', yunnan)
echarts.registerMap('福建省', fujian)
echarts.registerMap('湖北省', hubei)
echarts.registerMap('山西省', shan1xi)
echarts.registerMap('浙江省', zhejiang)
echarts.registerMap('甘肃省', gansu)
echarts.registerMap('湖南省', hunan)
echarts.registerMap('陕西省', shan3xi)
echarts.registerMap('广东省', guangdong)
echarts.registerMap('江苏省', jiangsu)
echarts.registerMap('山东省', shandong)
echarts.registerMap('广西壮族自治区', guangxi)
echarts.registerMap('江西省', jiangxi)
echarts.registerMap('上海市', shanghai)
echarts.registerMap('贵州省', guizhou)
echarts.registerMap('吉林省', jilin)
echarts.registerMap('四川省', sichuan)
echarts.registerMap('海南省', hainan)
echarts.registerMap('辽宁省', liaoning)
echarts.registerMap('台湾', taiwan)
echarts.registerMap('河北省', hebei)
echarts.registerMap('澳门特别行政区', macau)
echarts.registerMap('天津市', tianjin)

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
