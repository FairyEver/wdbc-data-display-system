<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">智慧蛋鸡大数据平台 电商交易</p>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- 中间 -->
      <div class="flex-item grow flex-group col">
        <!-- 地图 -->
        <div ref="QuestionAnswer" class="flex-item grow hov" style="margin: 5px;">
          <ChartMapStyle6
            ref="QuestionAnswerChart"
            title-text="问题解答次数全国分布"
            sub-text="累计交流：48753次  解决问题：10903例  问题类型：67类">
          </ChartMapStyle6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'
import ChartMapStyle6 from '@/components/Charts/Map/Style6/index.vue'
import chartData from './data.json'

export default {
  mixins: [
    mixin
  ],
  components: {
    ChartMapStyle6
  },
  created () {
    this.chartData = chartData
  },
  mounted () {
    this.$refs.QuestionAnswerChart.init(
      this.$refs.QuestionAnswer.offsetHeight,
      this.$refs.QuestionAnswer.offsetWidth
    )
  }
}
</script>
