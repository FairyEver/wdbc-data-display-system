<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">演示页面四</p>
      <p class="sub-title">第四个页面的小标题</p>
    </div>
    <div class="flex-item grow flex-group row">
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box-line-base-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineBase
            ref="box-line-base-1-g-c"
            title-text="lineBase"
            grid-right="20"
            :series-color="$color.cyan"
            :series-label-text-color="$color.bg"
            @mounted="mountedChartNum++">
          </ChartLineBase>
        </div>
        <div ref="box-line-base-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineBase
            ref="box-line-base-2-g-c"
            title-text="lineBase"
            grid-right="20"
            :series-color="$color.yellow"
            :series-label-text-color="$color.bg"
            @mounted="mountedChartNum++">
          </ChartLineBase>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box-line-base-3-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineBase
            ref="box-line-base-3-g-c"
            title-text="lineBase"
            grid-right="20"
            :series-color="$color.green"
            :series-label-text-color="$color.bg"
            @mounted="mountedChartNum++">
          </ChartLineBase>
        </div>
        <div ref="box-line-base-4-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineBase
            ref="box-line-base-4-g-c"
            title-text="lineBase"
            grid-right="20"
            :series-color="$color.pink"
            :series-label-text-color="'#FFF'"
            @mounted="mountedChartNum++">
          </ChartLineBase>
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
