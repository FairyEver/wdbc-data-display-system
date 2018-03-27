<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">第一个页面</p>
      <p class="sub-title">第一个页面的小标题</p>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <!-- 上半部分 -->
        <div class="flex-item grow flex-group col">

        </div>
        <!-- 表格 -->
        <div class="flex-item" style="height: 300px;">
          table
        </div>
      </div>
      <!-- col -->
      <div class="flex-item flex-group col" style="width: 30%;">
        <div ref="box-line-multi-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineMulti
            ref="box-line-multi-2-g-c"
            title-text="今日行情"
            :series-color="[$color.group1[0], $color.group1[1], $color.group1[2]]"
            :series-label-text-color="['#FFF', '#FFF', '#FFF']"
            @mounted="mountedChartNum++">
          </ChartLineMulti>
        </div>
        <div ref="box-bar-stack-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarStack
            ref="box-bar-stack-1-g-c"
            title-text="今日行情"
            :series-color="$color.cyan"
            :ajax-data="{name: 'bar-stack'}"
            @mounted="mountedChartNum++">
          </ChartBarStack>
        </div>
      </div>
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
