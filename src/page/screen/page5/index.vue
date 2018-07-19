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
            title-text="各省提问排名"
            :y-axis-data="chartData.question.yAxisData"
            :series-data="chartData.question.seriesData">
          </ChartBarRank>
        </div>
        <div ref="diseaseType" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarRank
            ref="diseaseTypeChart"
            title-text="疾病类型排名"
            :y-axis-data="chartData.disease.yAxisData"
            :series-data="chartData.disease.seriesData"
            series-color="#5ea2db">
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
import chartData from './data.json'

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
      chartData: {},
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
  created () {
    this.chartData = chartData
    console.log(this.chartData)
  },
  mounted () {
    this.$refs.QuestionAnswerChart.init(this.$refs.QuestionAnswer.offsetHeight, this.$refs.QuestionAnswer.offsetWidth)
    this.$refs.provinceQuestionChart.init(this.$refs.provinceQuestion.offsetHeight, this.$refs.provinceQuestion.offsetWidth)
    this.$refs.diseaseTypeChart.init(this.$refs.diseaseType.offsetHeight, this.$refs.diseaseType.offsetWidth)
  }
}
</script>
