<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">演示页面五</p>
      <p class="sub-title">第五个页面的小标题</p>
    </div>
    <div class="flex-item grow flex-group row">
      <!-- col -->
      <div class="flex-item flex-group col" style="width: 33%;">
        <div ref="box-pie-base-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartPieBase
            ref="box-pie-base-1-g-c"
            title-text="pieBase"
            :color="$color.group1"
            @mounted="mountedChartNum++">
          </ChartPieBase>
        </div>
        <div ref="box-pie-base-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartPieBase
            ref="box-pie-base-2-g-c"
            title-text="pieBase"
            :color="$color.group1"
            @mounted="mountedChartNum++">
          </ChartPieBase>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box-pie-base-3-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartPieBase
            ref="box-pie-base-3-g-c"
            title-text="pieBase"
            :color="$color.group1"
            :radius="['50%', '80%']"
            @mounted="mountedChartNum++">
          </ChartPieBase>
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
