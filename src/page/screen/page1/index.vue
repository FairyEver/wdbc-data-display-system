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
        <div class="flex-item" style="text-align: center; line-height: 30px; font-size: 16px; margin-right: -100px;">
          今日全国行情指数
        </div>
        <!-- 全国指数 -->
        <div class="flex-item flex-group row" style="height: 200px; padding: 5px; margin-right: -100px;">
          <div ref="box-count-style2-1-g" class="flex-item grow hov" style="margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-1-g-c"
              title-text="蛋价指数"
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
              title-text="成本指数"
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
              title-text="盈利指数"
              :url="`${$root.host}/api/marketQuotationHomeIndex`"
              :ajax-data="{name: 'ylzs'}"
              :transform="(data) => data.dataInfo.quotationData"
              :interval="0"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
        </div>
        <div ref="box-line-multi-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineMulti
            ref="box-line-multi-1-g-c"
            title-text="全国行情指数趋势"
            :series-color="[$color.cyan, $color.green, $color.yellow, $color.red]"
            :series-label-text-color="[$color.bg, $color.bg, $color.bg, '#FFF']"
            :url="`${$root.host}/api/marketQuotationIndexGraph`"
            :transform="(data) => data.dataInfo"
            @mounted="mountedChartNum++">
          </ChartLineMulti>
        </div>
        <div class="flex-item flex-group row hov" style="margin: 5px; height: 300px;">
          <div class="flex-item ul-list-col" style="width: 100px;">
            <ul>
              <li
                v-for="(item, index) in optionsL"
                :key="index"
                :class="{active: index === activeL}">
                {{item.name}}
              </li>
            </ul>
          </div>
          <div ref="box-line-base-plus-1-g" class="flex-item grow">
            <ChartLineBasePlus
              ref="box-line-base-plus-1-g-c"
              title-text="全国价格信息"
              :url="`${$root.host}/api/getProductPrice`"
              :series-color="$color.cyan"
              :series-label-text-color="$color.bg"
              :options="optionsL"
              v-model="activeL"
              :transform="(data) => data.dataInfo"
              @mounted="mountedChartNum++">
            </ChartLineBasePlus>
          </div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="flex-item grow flex-group col">
        <div ref="box-map-style1-1-g" class="flex-item grow middle">
            <p class="middle-text">{{applog}}</p>
            <ChartMapStyle1
                ref="box-map-style1-1-g-c"
                title-text="全国采集点分布"
                @mounted="mountedChartNum++">
            </ChartMapStyle1>
        </div>
        <div ref="box-table-style1-1-g" class="flex-item hov" style="height: 300px; margin: 5px;">
          <ChartTableStyle1
            ref="box-table-style1-1-g-c"
            title-text="各地市场报价行情"
            :url="`${$root.host}/api/getMarketQuotationPrice`"
            :transform="(data) => data.dataInfo"
            @mounted="mountedChartNum++">
          </ChartTableStyle1>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="flex-item flex-group col" style="width: 25%;">
        <!-- 三大指数 -->
        <div class="flex-item" style="text-align: center; line-height: 30px; font-size: 16px; margin-left: -100px;">
          今日{{activePointName}}行情指数
        </div>
        <!-- 地区指数 -->
        <div class="flex-item flex-group row" style="height: 200px; padding: 5px; margin-left: -100px;">
          <div ref="box-count-style2-4-g" class="flex-item grow hov" style="margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-4-g-c"
              title-text="蛋价指数"
              :url="`${$root.host}/api/marketQuotationProvinceIndex`"
              :ajax-data="{
                name: 'djzs',
                areaId: activePointCode
              }"
              :interval="0"
              :transform="(data) => data.dataInfo.quotationData"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
          <div ref="box-count-style2-5-g" class="flex-item grow hov" style="margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-5-g-c"
              title-text="成本指数"
              :url="`${$root.host}/api/marketQuotationProvinceIndex`"
              :ajax-data="{
                name: 'cbzs',
                areaId: activePointCode
              }"
              :interval="0"
              :transform="(data) => data.dataInfo.quotationData"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
          <div ref="box-count-style2-6-g" class="flex-item grow hov" style="margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-6-g-c"
              title-text="盈利指数"
              :url="`${$root.host}/api/marketQuotationProvinceIndex`"
              :ajax-data="{
                name: 'ylzs',
                areaId: activePointCode
              }"
              :interval="0"
              :transform="(data) => data.dataInfo.quotationData"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
        </div>
        <div ref="box-line-multi-3-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineMulti
            ref="box-line-multi-3-g-c"
            :title-text="`${activePointName}行情指数趋势`"
            :series-color="[$color.cyan, $color.green, $color.yellow, $color.red]"
            :series-label-text-color="[$color.bg, $color.bg, $color.bg, '#FFF']"
            :url="`${$root.host}/api/marketQuotationIndexGraph`"
            :interval="0"
            :transform="(data) => data.dataInfo"
            @mounted="mountedChartNum++">
          </ChartLineMulti>
        </div>
        <div class="flex-item flex-group row hov" style="margin: 5px; height: 300px;">
          <div class="flex-item ul-list-col" style="width: 100px;">
            <ul>
              <li
                v-for="(item, index) in optionsR"
                :key="index"
                :class="{active: item.value === activeQuotationType}">
                {{item.name}}
              </li>
            </ul>
          </div>
          <div ref="box-line-base-2-g" class="flex-item grow">
            <ChartLineBase
              ref="box-line-base-2-g-c"
              :title-text="`今日${activePointName}${activeQuotationTypeName}采集情况`"
              :url="`${$root.host}/api/getProductPrice`"
              :ajax-data="{
                quotationType: activeQuotationType,
                areaId: activePointCode
              }"
              :transform="(data) => data.dataInfo"
              :series-color="$color.cyan"
              :series-label-text-color="$color.bg"
              :interval="0"
              @mounted="mountedChartNum++">
            </ChartLineBase>
          </div>
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
      applog: 'App注册数：3000万'
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
    }
  },
  methods: {
    // 这个页面比较特殊 自己定义自己的初始化方法
    async init2 () {
      // 获取全国所有可用的地区
      this.allPoint = await this.getAllCollectionPoint()
      // 更新 optionsR
      await this.updateOptionsR()
      // 初始化图表
      this.init()
        .then(() => {
          // 启动右下角的队列
          this.startQueue()
        })
    },
    // 启动右下角的队列
    startQueue () {
      this.optionsR.reduce((p, option) => p.then(() => new Promise((resolve, reject) => {
        this.activeQuotationType = option.value
        this.$nextTick(this.$refs['box-line-base-2-g-c'].refresh)
        setTimeout(resolve, 3000)
      })), Promise.resolve())
        .then(() => {
          this.handleRoundEnd()
        })
    },
    // 更新 optionsR
    async updateOptionsR () {
      return new Promise(async (resolve, reject) => {
        const res = await this.getProvinceHadProduct(this.allPoint[this.activePoint].areaCode)
        this.optionsR = res.map(e => Number(e)).map(e => this.optionsL.find(ele => ele.value === e))
        if (this.optionsR[0]) {
          this.activeQuotationType = this.optionsR[0].value
        }
        resolve()
      })
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
    },
    // 右下角的图播放完了一圈
    async handleRoundEnd () {
      // 更新index
      this.activePoint = this.activePoint === this.allPoint.length - 1 ? 0 : this.activePoint + 1
      // 更新 optionsR
      await this.updateOptionsR()
      // 触发更新 右上角指数
      this.$refs['box-count-style2-4-g-c'].refresh()
      this.$refs['box-count-style2-5-g-c'].refresh()
      this.$refs['box-count-style2-6-g-c'].refresh()
      // 右侧 中间
      this.$refs['box-line-multi-3-g-c'].refresh()
      // 右侧 下面
      this.startQueue()
    }
  }
}
</script>
