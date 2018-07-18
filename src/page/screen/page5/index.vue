<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">智慧蛋鸡大数据平台 坐堂兽医</p>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- 中间 -->
      <div class="flex-item grow flex-group col">
        <!-- 地图 -->
        <div ref="QuestionAnswer" class="flex-item grow hov" style="margin: 5px;">
          <ChartMapStyle5
            ref="QuestionAnswerChart"
            title-text="问题解答次数全国分布">
          </ChartMapStyle5>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="flex-item flex-group col" style="width: 35%;">
        <div ref="provinceQuestion" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarRank
            ref="provinceQuestionChart"
            title-text="各省提问排名">
          </ChartBarRank>
        </div>
        <div ref="diseaseType" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarRank
            ref="diseaseTypeChart"
            title-text="疾病类型排名">
          </ChartBarRank>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'
import ChartBarRank from '@/components/Charts/Bar/rank/index.vue'
import ChartMapStyle5 from '@/components/Charts/Map/Style5/index.vue'

export default {
  mixins: [
    mixin
  ],
  components: {
    ChartMapStyle5,
    ChartBarRank
  },
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
      distributingRightWhite: 0
    }
  },
<<<<<<< HEAD
  methods: {
    async init2 () {
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
          if (this.$refs['box-map-mini-g-c']) {
            this.startQueue()
          }
        })
    }
=======
  mounted () {
    this.$refs.QuestionAnswerChart.init(this.$refs.QuestionAnswer.offsetHeight, this.$refs.QuestionAnswer.offsetWidth)
    this.$refs.provinceQuestionChart.init(this.$refs.provinceQuestion.offsetHeight, this.$refs.provinceQuestion.offsetWidth)
    this.$refs.diseaseTypeChart.init(this.$refs.diseaseType.offsetHeight, this.$refs.diseaseType.offsetWidth)
>>>>>>> 94d0d352e40a2d99496899b1b9ca86cf0c9e14d6
  }
}
</script>
