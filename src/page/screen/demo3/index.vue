<template>
  <div class="container flex-group col">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">演示页面三</p>
      <p class="sub-title">第三个页面的小标题</p>
    </div>
    <div class="flex-item grow flex-group row">
      <!-- col -->
      <div class="flex-item flex-group col" style="width: 300px;">
        <div ref="box-small-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartCountStyle1
            ref="box-small-1-g-c"
            title-text="count"
            sub-title-text="count style1"
            title-size="30"
            sub-title-size="16"
            num-size="54"
            url="x.mock"
            :num-color="$color.cyan"
            @mounted="mountedChartNum ++">
          </ChartCountStyle1>
        </div>
        <div ref="box-small-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartCountStyle1
            ref="box-small-2-g-c"
            title-text="count"
            sub-title-text="count style1"
            title-size="30"
            sub-title-size="16"
            num-size="54"
            url="x.mock"
            :num-color="$color.yellow"
            @mounted="mountedChartNum ++">
          </ChartCountStyle1>
        </div>
        <div ref="box-small-3-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartCountStyle1
            ref="box-small-3-g-c"
            title-text="count"
            sub-title-text="count style1"
            title-size="30"
            sub-title-size="16"
            num-size="54"
            url="x.mock"
            :num-color="$color.red"
            @mounted="mountedChartNum ++">
          </ChartCountStyle1>
        </div>
        <div ref="box-small-4-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartCountStyle1
            ref="box-small-4-g-c"
            title-text="count"
            sub-title-text="count style1"
            title-size="30"
            sub-title-size="16"
            num-size="54"
            url="x.mock"
            :num-color="$color.green"
            @mounted="mountedChartNum ++">
          </ChartCountStyle1>
        </div>
        <div ref="box-small-5-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartCountStyle1
            ref="box-small-5-g-c"
            title-text="count"
            sub-title-text="count style1"
            title-size="30"
            sub-title-size="16"
            num-size="54"
            url="x.mock"
            :num-color="$color.pink"
            @mounted="mountedChartNum ++">
          </ChartCountStyle1>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box-big-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box-big-1-g-c"
            title-text="barBase"
            grid-left="50"
            grid-right="20"
            :series-color="$color.cyan"
            @mounted="mountedChartNum ++">
          </ChartBarBase>
        </div>
        <div ref="box-big-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box-big-2-g-c"
            title-text="barBase"
            grid-left="40"
            grid-right="20"
            :series-color="$color.yellow"
            @mounted="mountedChartNum ++">
          </ChartBarBase>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box-big-3-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box-big-3-g-c"
            title-text="barBase"
            grid-left="50"
            grid-right="20"
            :series-color="$color.green"
            @mounted="mountedChartNum ++">
          </ChartBarBase>
        </div>
        <div ref="box-big-4-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box-big-4-g-c"
            title-text="barBase"
            grid-left="40"
            grid-right="20"
            :series-color="$color.pink"
            @mounted="mountedChartNum ++">
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
