<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">多条折线图</p>
      <p class="sub-title">多条折线图 - 小标题</p>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- col -->
      <div class="flex-item flex-group col" style="width: 66%;">
        <div ref="box-bar-base-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineMulti
            ref="box-bar-base-1-g-c"
            title-text="barBase"
            grid-left="50"
            grid-right="20"
            :series-color="[$color.cyan, $color.green, $color.yellow, $color.red]"
            @mounted="mountedChartNum++">
          </ChartLineMulti>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box-bar-base-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box-bar-base-2-g-c"
            title-text="barBase"
            grid-left="40"
            grid-right="20"
            :series-color="$color.yellow"
            @mounted="mountedChartNum++">
          </ChartBarBase>
        </div>
        <div ref="box-bar-base-3-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box-bar-base-3-g-c"
            title-text="barBase"
            grid-left="40"
            grid-right="20"
            :series-color="$color.red"
            @mounted="mountedChartNum++">
          </ChartBarBase>
        </div>
        <div ref="box-bar-base-4-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box-bar-base-4-g-c"
            title-text="barBase"
            grid-left="40"
            grid-right="20"
            :series-color="$color.green"
            @mounted="mountedChartNum++">
          </ChartBarBase>
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
