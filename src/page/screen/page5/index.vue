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
        <div ref="box-map-center-g" class="flex-item grow hov" style="margin: 5px;">
          <!-- <ChartMapStyle5
            ref="box-map-center-g-c"
            title-text="问题解答次数全国分布"
            :url="`${$root.host}/api/getCountryFarmDistributing`"
            :transform="(data) => data.dataInfo.result"
            @initDone="handleMapInitDone"
            @mounted="mountedChartNum++">
          </ChartMapStyle5> -->
        </div>
      </div>
      <!-- 右侧 -->
      <div class="flex-item flex-group col" style="width: 25%;">
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

export default {
  mixins: [
    mixin
  ],
  components: {
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
  mounted () {
    this.$refs.provinceQuestionChart.init(this.$refs.provinceQuestion.offsetHeight, this.$refs.provinceQuestion.offsetWidth)
    this.$refs.diseaseTypeChart.init(this.$refs.diseaseType.offsetHeight, this.$refs.diseaseType.offsetWidth)
  }
}
</script>
