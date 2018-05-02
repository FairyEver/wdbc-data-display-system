import echarts from 'echarts'
import chinaMap from '@/assets/echarts/中国.js'
import chinaMapShanDong from '@/assets/echarts/山东.js'
import chinaMapJiangSu from '@/assets/echarts/江苏.js'
import chinaMapHeBei from '@/assets/echarts/河北.js'
import chinaMapHuBei from '@/assets/echarts/湖北.js'
import chinaMapLiaoNing from '@/assets/echarts/辽宁.js'

// chinaMapLiaoNing.features.map(e => e.properties.name).forEach(e => {
//   console.log(e)
// })

echarts.registerMap('china', chinaMap)
echarts.registerMap('shandong', chinaMapShanDong)
echarts.registerMap('jiangsu', chinaMapJiangSu)
echarts.registerMap('hebei', chinaMapHeBei)
echarts.registerMap('hubei', chinaMapHuBei)
echarts.registerMap('liaoning', chinaMapLiaoNing)

export default echarts
