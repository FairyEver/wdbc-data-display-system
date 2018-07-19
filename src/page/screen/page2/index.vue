<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">智慧蛋鸡大数据平台 养殖户分布</p>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- 左侧 -->
      <div class="flex-item flex-group col" style="width: 25%;">
        <!-- 全国养殖户户数TOP10 -->
        <div ref="box-bar-top-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarTop10
            ref="box-bar-top-1-g-c"
            :url="`${$root.host}/api/getFarmTop10`"
            :transform="(data) => data.dataInfo.result"
            title-text="全国养殖户户数TOP10"
            @mounted="mountedChartNum++">
          </ChartBarTop10>
        </div>
        <!-- 全国养殖户年龄分布 -->
        <div ref="box-bar-style2-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarStyle2
            ref="box-bar-style2-1-g-c"
            :url="`${$root.host}/api/getAgeDistributing`"
            :transform="(data) => data.dataInfo.result"
            title-text="全国养殖户年龄分布"
            @mounted="mountedChartNum++">
          </ChartBarStyle2>
        </div>
        <!-- 全国养殖户从业年限分布 -->
        <div ref="box-pie-style2-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartPieStyle2
            ref="box-pie-style2-1-g-c"
            :url="`${$root.host}/api/getFeedingPeriodDistributing`"
            :transform="(data) => data.dataInfo.result"
            title-text="全国养殖户从业年限分布"
            @mounted="mountedChartNum++">
          </ChartPieStyle2>
        </div>
      </div>
      <!-- 中间 -->
      <div class="flex-item grow flex-group col">
        <!-- 地图 -->
        <div ref="box-map-center-g" class="flex-item grow hov middle" style="margin: 5px;">
          <p class="middle-text">{{applog}}</p>
          <ChartMapStyle2
            ref="box-map-center-g-c"
            title-text="全国养殖户分布"
            :url="`${$root.host}/api/getCountryFarmDistributing`"
            :transform="(data) => data.dataInfo.result"
            @initDone="handleMapInitDone"
            @mounted="mountedChartNum++">
          </ChartMapStyle2>
        </div>
        <!-- 三种蛋鸡分布 -->
        <div class="flex-item hov flex-group row" style="height: 160px; margin: 5px; padding: 20px 0px;">
          <!-- 三块 -->
          <div class="flex-item grow flex-group col">
            <div ref="box-pie-style3-c1-g" class="flex-item grow">
              <ChartPieStyle3
                ref="box-pie-style3-c1-g-c"
                :data="distributingBottomRed"
                :color-light="pieColors[0]"
                @mounted="mountedChartNum++">
              </ChartPieStyle3>
            </div>
            <div class="flex-item center-pie-title" :style="{color: pieColors[0]}">红壳蛋鸡养殖户</div>
          </div>
          <div class="flex-item grow flex-group col">
            <div ref="box-pie-style3-c2-g" class="flex-item grow">
              <ChartPieStyle3
                ref="box-pie-style3-c2-g-c"
                :data="distributingBottomPink"
                :color-light="pieColors[1]"
                @mounted="mountedChartNum++">
              </ChartPieStyle3>
            </div>
            <div class="flex-item center-pie-title" :style="{color: pieColors[1]}">粉壳蛋鸡养殖户</div>
          </div>
          <div class="flex-item grow flex-group col">
            <div ref="box-pie-style3-c3-g" class="flex-item grow">
              <ChartPieStyle3
                ref="box-pie-style3-c3-g-c"
                :data="distributingBottomWhite"
                :color-light="pieColors[2]"
                @mounted="mountedChartNum++">
              </ChartPieStyle3>
            </div>
            <div class="flex-item center-pie-title" :style="{color: pieColors[2]}">白壳蛋鸡养殖户</div>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="flex-item flex-group col" style="width: 25%;">
        <!-- 全国养殖户户数TOP10 -->
        <div class="flex-item grow flex-group row hov" style="margin: 5px;">
          <div class="flex-item flex-group col" style="width: 100px;">
            <!-- 三块 -->
            <div class="flex-item grow flex-group col">
              <div ref="box-pie-style3-r1-g" class="flex-item grow">
                <ChartPieStyle3
                  ref="box-pie-style3-r1-g-c"
                  :radius="['60%', '70%']"
                  :data="distributingRightRed"
                  :color-light="pieColors[0]"
                  @mounted="mountedChartNum++">
                </ChartPieStyle3>
              </div>
              <div class="flex-item center-pie-title mini" :style="{color: pieColors[0]}">红壳占比</div>
            </div>
            <div class="flex-item grow flex-group col">
              <div ref="box-pie-style3-r2-g" class="flex-item grow">
                <ChartPieStyle3
                  ref="box-pie-style3-r2-g-c"
                  :radius="['60%', '70%']"
                  :data="distributingRightPink"
                  :color-light="pieColors[1]"
                  @mounted="mountedChartNum++">
                </ChartPieStyle3>
              </div>
              <div class="flex-item center-pie-title mini" :style="{color: pieColors[1]}">粉壳占比</div>
            </div>
            <div class="flex-item grow flex-group col">
              <div ref="box-pie-style3-r3-g" class="flex-item grow">
                <ChartPieStyle3
                  ref="box-pie-style3-r3-g-c"
                  :radius="['60%', '70%']"
                  :data="distributingRightWhite"
                  :color-light="pieColors[2]"
                  @mounted="mountedChartNum++">
                </ChartPieStyle3>
              </div>
              <div class="flex-item center-pie-title mini" :style="{color: pieColors[2]}">白壳占比</div>
            </div>
          </div>
          <div ref="box-map-mini-g" class="flex-item grow">
            <ChartMapMini
              ref="box-map-mini-g-c"
              :title-text="`${mapMiniType}养殖户分布`"
              :map-type="mapMiniType"
              :map-data="mapMiniData"
              @mounted="mountedChartNum++">
            </ChartMapMini>
          </div>
        </div>
        <!-- 全国养殖户年龄分布 -->
        <div ref="box-bar-style2-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarStyle2
            ref="box-bar-style2-2-g-c"
            :title-text="`${mapMiniType}养殖户年龄分布`"
            :url="`${$root.host}/api/getAgeDistributing`"
            :ajaxData="{ areaId: areaCode }"
            :transform="(data) => data.dataInfo.result"
            :auto-get-data="false"
            :interval="0"
            @mounted="mountedChartNum++">
          </ChartBarStyle2>
        </div>
        <!-- 全国养殖户从业年限分布 -->
        <div ref="box-pie-style2-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartPieStyle2
            ref="box-pie-style2-2-g-c"
            :title-text="`${mapMiniType}养殖户从业年限分布`"
            :url="`${$root.host}/api/getFeedingPeriodDistributing`"
            :ajaxData="{ areaId: areaCode }"
            :transform="(data) => data.dataInfo.result"
            :auto-get-data="false"
            :interval="0"
            @mounted="mountedChartNum++">
          </ChartPieStyle2>
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
      pieColors: [
        '#E6E09F',
        '#90DEF5',
        '#4F9CE0'
      ],
      // 所有地区
      allCollectionPoint: [],
      // 右上角的小地图
      mapMiniType: 'hebei',
      mapMiniData: [],
      // 当前激活的地区编码
      areaCode: '',
      // 分布 中间下面
      distributingBottomRed: 0,
      distributingBottomPink: 0,
      distributingBottomWhite: 0,
      // 分布 右侧
      distributingRightRed: 0,
      distributingRightPink: 0,
      distributingRightWhite: 0,
      // app 注册
      applog: ''
    }
  },
  methods: {
    async init2 () {
      this.applog = '养殖户数：74488'
      // 初始化图表
      this.init()
        .then(async () => {
          // 中间的三个小圆圈
          this.getEggColorChickenDistributing()
            .then((dis) => {
              this.distributingBottomRed = dis[0]
              this.distributingBottomPink = dis[1]
              this.distributingBottomWhite = dis[2]
            })
        })
    },
    // [数据获取] 获得所有的地区
    getCountryAllCollectionPoint () {
      return new Promise(async (resolve, reject) => {
        const res = await this.$http.get(`${this.$root.host}/api/getCountryAllCollectionPoint`)
        resolve(res.data.dataInfo.data)
      })
    },
    // [数据获取] 获取省下所有城市的养殖户数量 右上角使用的
    getCityFarmerCountByProvince (areaId) {
      return new Promise(async (resolve, reject) => {
        const res = await this.$http.get(`${this.$root.host}/api/getCityFarmerCountByProvince?areaId=${areaId}`)
        resolve(res.data.dataInfo.result)
      })
    },
    // [数据获取] 获取圆环的数据 包括下面的还有侧面的
    getEggColorChickenDistributing (areaId) {
      return new Promise(async (resolve, reject) => {
        const url = areaId ? `${this.$root.host}/api/getEggColorChickenDistributing?areaId=${areaId}` : `${this.$root.host}/api/getEggColorChickenDistributing`
        const res = await this.$http.get(url)
        resolve(_get(res, 'data.dataInfo.result', [0, 0, 0]))
      })
    },
    // 中间的地图加载完了数据
    async handleMapInitDone () {
      console.log('handleMapInitDone')
      // 获取全国的地区
      this.allCollectionPoint = await this.getCountryAllCollectionPoint()
      // 启动轮播队列
      this.startQueue()
    },
    // 启动轮播队列
    startQueue () {
      this.allCollectionPoint.reduce((p, point) => {
        return p.then(() => {
          return new Promise(async (resolve, reject) => {
            // 更新中间的地图
            if (this.$refs['box-map-center-g-c']) {
              this.$refs['box-map-center-g-c'].activeMap(point.areaName)
            }
            // 更新右上角的地图
            this.mapMiniData = await this.getCityFarmerCountByProvince(point.areaCode)
            this.mapMiniType = point.areaName
            // 右边的三个小圆圈
            const dis = await this.getEggColorChickenDistributing(point.areaCode)
            this.distributingRightRed = dis[0]
            this.distributingRightPink = dis[1]
            this.distributingRightWhite = dis[2]
            // 更新右边其他图
            this.areaCode = point.areaCode
            this.$nextTick(() => {
              if (this.$refs['box-map-mini-g-c']) {
                this.$refs['box-map-mini-g-c'].activeMap()
              }
              if (this.$refs['box-pie-style2-2-g-c']) {
                this.$refs['box-pie-style2-2-g-c'].refresh()
              }
              if (this.$refs['box-bar-style2-2-g-c']) {
                this.$refs['box-bar-style2-2-g-c'].refresh()
              }
            })
            setTimeout(resolve, 3000)
          })
        })
      }, Promise.resolve())
        .then(() => {
          if (this.$refs['box-pie-style2-2-g-c']) {
            this.startQueue()
          }
        })
    }
  }
}
</script>

<style lang="scss">
.center-pie-title {
  height: 30px;
  line-height: 30px;
  text-align: center;
  &.mini {
    height: 24px;
    line-height: 24px;
  }
}
</style>
