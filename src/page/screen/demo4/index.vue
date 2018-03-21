<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">演示页面三</p>
      <p class="sub-title">第三个页面的小标题</p>
    </div>
    <div class="flex-item grow flex-group row">
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box-big-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineBase
            ref="box-big-1-g-c"
            title-text="lineBase"
            grid-left="50"
            grid-right="20"
            :series-color="$color.cyan"
            @mounted="mountedChartNum ++">
          </ChartLineBase>
        </div>
        <div ref="box-big-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineBase
            ref="box-big-2-g-c"
            title-text="lineBase"
            grid-left="40"
            grid-right="20"
            :series-color="$color.yellow"
            @mounted="mountedChartNum ++">
          </ChartLineBase>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box-big-3-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineBase
            ref="box-big-3-g-c"
            title-text="lineBase"
            grid-left="50"
            grid-right="20"
            :series-color="$color.green"
            @mounted="mountedChartNum ++">
          </ChartLineBase>
        </div>
        <div ref="box-big-4-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineBase
            ref="box-big-4-g-c"
            title-text="lineBase"
            grid-left="40"
            grid-right="20"
            :series-color="$color.pink"
            @mounted="mountedChartNum ++">
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
