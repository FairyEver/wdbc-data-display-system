<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">多条折线图</p>
      <p class="sub-title">多条折线图 - 小标题</p>
    </div>
    <!-- row -->
    <div ref="box-line-stack-1-g" class="flex-item grow hov" style="margin: 10px;">
      <ChartLineStack
        ref="box-line-stack-1-g-c"
        title-text="今日行情"
        @mounted="mountedChartNum++">
      </ChartLineStack>
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
