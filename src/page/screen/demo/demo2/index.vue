<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">演示页面二</p>
      <p class="sub-title">第二个页面的小标题</p>
    </div>
    <!-- row -->
    <div class="flex-item flex-group row" style="height: 120px; padding: 5px;">
      <div ref="box-count-style1-1-g" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1
          ref="box-count-style1-1-g-c"
          title-text="count"
          sub-title-text="count style1"
          title-size="30"
          sub-title-size="16"
          num-size="54"
          url="x.mock"
          :num-color="$color.cyan"
          @mounted="mountedChartNum++">
        </ChartCountStyle1>
      </div>
      <div ref="box-count-style1-2-g" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1
          ref="box-count-style1-2-g-c"
          title-text="count"
          sub-title-text="count style1"
          title-size="30"
          sub-title-size="16"
          num-size="54"
          url="x.mock"
          :num-color="$color.pink"
          @mounted="mountedChartNum++">
        </ChartCountStyle1>
      </div>
      <div ref="box-count-style1-3-g" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1
          ref="box-count-style1-3-g-c"
          title-text="count"
          sub-title-text="count style1"
          title-size="30"
          sub-title-size="16"
          num-size="54"
          url="x.mock"
          :num-color="$color.green"
          @mounted="mountedChartNum++">
        </ChartCountStyle1>
      </div>
      <div ref="box-count-style1-4-g" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1
          ref="box-count-style1-4-g-c"
          title-text="count"
          sub-title-text="count style1"
          title-size="30"
          sub-title-size="16"
          num-size="54"
          url="x.mock"
          :num-color="$color.orange"
          @mounted="mountedChartNum++">
        </ChartCountStyle1>
      </div>
      <div ref="box-count-style1-5-g" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1
          ref="box-count-style1-5-g-c"
          title-text="count"
          sub-title-text="count style1"
          title-size="30"
          sub-title-size="16"
          num-size="54"
          url="x.mock"
          :num-color="$color.red"
          @mounted="mountedChartNum++">
        </ChartCountStyle1>
      </div>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box-bar-base-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box-bar-base-1-g-c"
            title-text="barBase"
            grid-right="20"
            :series-color="$color.cyan"
            @mounted="mountedChartNum++">
          </ChartBarBase>
        </div>
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
      </div>
      <!-- col -->
      <div class="flex-item grow flex-group col">
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
