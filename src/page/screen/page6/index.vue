<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">智慧蛋鸡大数据平台 市场行情</p>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- 左侧 -->
      <div class="flex-item flex-group col" style="width: 25%;">
        <!-- 三大指数 -->
        <div class="flex-item" style="text-align: center; line-height: 30px; font-size: 16px;">
          今日全国行情指数
        </div>
        <!-- 全国指数 -->
        <div ref="box-bar-stack2-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarStack2
            ref="box-bar-stack2-1-g-c"
            @mounted="mountedChartNum++">
          </ChartBarStack2>
        </div>
        <div ref="box-bar-stack2-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarStack2
            ref="box-bar-stack2-2-g-c"
            @mounted="mountedChartNum++">
          </ChartBarStack2>
        </div>
      </div>
      <!-- 中间 -->
      <div class="flex-item grow flex-group col">
        <!-- 地图 -->
        <div ref="box-map-style6-g" class="flex-item grow" style="margin: 5px;">
          <ChartMapStyle6
            ref="box-map-style6-g-c"
            title-text="问题解答次数全国分布"
            sub-text="累计交流：48753次  解决问题：10903例  问题类型：67类"
            @mounted="mountedChartNum++">
          </ChartMapStyle6>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="flex-item flex-group col" style="width: 25%;">
        <!-- 三大指数 -->
        <div class="flex-item" style="text-align: center; line-height: 30px; font-size: 16px; margin-left: -100px;">
          订单数据
        </div>
        <!-- 地区指数 -->
        <div class="flex-item flex-group row" style="height: 200px; padding: 5px; margin-left: -100px;">
          <div ref="box-count-style2-1-g" class="flex-item grow hov" style="margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-1-g-c"
              title-text="订单总数"
              :url="`${$root.host}/api/marketQuotationHomeIndex`"
              :ajax-data="{name: 'djzs'}"
              :transform="(data) => data.dataInfo.quotationData"
              :interval="0"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
          <div ref="box-count-style2-2-g" class="flex-item grow hov" style="margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-2-g-c"
              title-text="已交货订单数"
              :url="`${$root.host}/api/marketQuotationHomeIndex`"
              :ajax-data="{name: 'cbzs'}"
              :transform="(data) => data.dataInfo.quotationData"
              :interval="0"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
          <div ref="box-count-style2-3-g" class="flex-item grow hov" style="margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-3-g-c"
              title-text="支付订单数量"
              :url="`${$root.host}/api/marketQuotationHomeIndex`"
              :ajax-data="{name: 'ylzs'}"
              :transform="(data) => data.dataInfo.quotationData"
              :interval="0"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
        </div>
        <div ref="box-pie-style-3-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartPieStyle4
            ref="box-pie-style-3-g-c"
            title-text="各产品销售状况"
            @mounted="mountedChartNum++">
          </ChartPieStyle4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'
import _get from 'lodash.get'
export default {
  mixins: [
    mixin
  ],
  data () {
    return {
      useMixinAutoInit: false,
      activeL: 'null',
      optionsL: [
        {name: '红壳鸡蛋', value: 1},
        {name: '粉壳鸡蛋', value: 2},
        {name: '白壳鸡蛋', value: 3},
        {name: '玉米', value: 4},
        {name: '豆粕', value: 5},
        {name: '淘汰鸡', value: 6}
      ],
      // 右下角的option
      optionsR: [],
      // 全国所有的地区
      allPoint: [],
      activePoint: 0,
      activeQuotationType: 0,
      // App 注册数
      styles: {
        height: '800px',
        width: '1500px'
      }
    }
  },
  computed: {
    activePointCode () {
      return _get(this.allPoint, `[${this.activePoint}].areaCode`, '110000')
    },
    activePointName () {
      return _get(this.allPoint, `[${this.activePoint}].areaName`, '-')
    },
    activeQuotationTypeName () {
      const option = this.optionsR.find(e => e.value === this.activeQuotationType)
      return option ? option.name : ''
    },
    activeQuotationTypeNameL () {
      const option = this.optionsL.find(e => e.value - 1 === this.activeL)
      return option ? option.name : ''
    }
  },
  methods: {
    // 这个页面比较特殊 自己定义自己的初始化方法
    async init2 () {
      // 获取全国所有可用的地区
      this.allPoint = await this.getAllCollectionPoint()
      // 初始化图表
      this.init()
    },
    // [数据获取] 获得某个地区的可用分类
    getProvinceHadProduct (areaId = '') {
      return new Promise(async (resolve, reject) => {
        const res = await this.$http.get(`${this.$root.host}/api/getProvinceHadProduct?areaId=${areaId}`)
        resolve(res.data.dataInfo.result)
      })
    },
    // [数据获取] 获得所有的地区
    getAllCollectionPoint () {
      return new Promise(async (resolve, reject) => {
        const res = await this.$http.post(this.$root.host + '/api/getAllCollectionPoint')
        resolve(res.data.dataInfo.data)
      })
    }
  }
}
</script>
