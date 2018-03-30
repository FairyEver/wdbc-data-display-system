<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">多条折线图</p>
      <p class="sub-title">多条折线图 - 小标题</p>
    </div>
    <!-- row -->
    <div ref="box-radar-style1-1-g" class="flex-item grow hov" style="margin: 10px;">
      <ChartRadarStyle1
        ref="box-radar-style1-1-g-c"
        title-text="全国市场价格对比"
        :ajax-data="{name: 'radar-style-1'}"
        @mounted="mountedChartNum++">
      </ChartRadarStyle1>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'
export default {
  mixins: [
    mixin
  ]
}
</script>
