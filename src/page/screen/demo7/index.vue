<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">多条折线图</p>
      <p class="sub-title">多条折线图 - 小标题</p>
    </div>
    <!-- row -->
    <div ref="box-line-multi-1-g" class="flex-item grow hov" style="margin: 10px;">
      <ChartLineMulti
        ref="box-line-multi-1-g-c"
        title-text="今日行情"
        :series-color="[$color.cyan, $color.green, $color.yellow, $color.red]"
        :series-label-text-color="[$color.bg, $color.bg, $color.bg, '#FFF']"
        @mounted="mountedChartNum++">
      </ChartLineMulti>
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
