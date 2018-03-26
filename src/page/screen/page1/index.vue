<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">第一个页面</p>
      <p class="sub-title">第一个页面的小标题</p>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- col -->
      <div class="flex-item flex-group col" style="width: 25%;">
        <div ref="box-line-multi-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineMulti
            ref="box-line-multi-1-g-c"
            title-text="今日行情"
            :series-color="[$color.cyan, $color.green, $color.yellow, $color.red]"
            :series-label-text-color="[$color.bg, $color.bg, $color.bg, '#FFF']"
            @mounted="mountedChartNum++">
          </ChartLineMulti>
        </div>
        <div ref="box-line-multi-3-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineMulti
            ref="box-line-multi-3-g-c"
            title-text="今日行情"
            :series-color="[$color.cyan, $color.green, $color.yellow, $color.red]"
            :series-label-text-color="[$color.bg, $color.bg, $color.bg, '#FFF']"
            @mounted="mountedChartNum++">
          </ChartLineMulti>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div class="flex-item flex-group row" style="height: 200px; padding: 5px;">
          <div class="flex-item grow"></div>
          <div ref="box-count-style2-1-g" class="flex-item hov" style="width: 200px; margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-1-g-c"
              title-text="蛋价指数"
              :ajax-data="{name: 'djzs'}"
              :title-color="$color.cyan"
              :num-color="$color.cyan"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
          <div ref="box-count-style2-2-g" class="flex-item hov" style="width: 200px; margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-2-g-c"
              title-text="成本指数"
              :ajax-data="{name: 'cbzs'}"
              :title-color="$color.yellow"
              :num-color="$color.yellow"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
          <div ref="box-count-style2-3-g" class="flex-item hov" style="width: 200px; margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-3-g-c"
              title-text="盈利指数"
              :ajax-data="{name: 'ylzs'}"
              :title-color="$color.green"
              :num-color="$color.green"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
          <div class="flex-item grow"></div>
        </div>
        <div class="flex-item grow" style="height: 200px;">
          h
        </div>
      </div>
      <!-- col -->
      <div class="flex-item flex-group col" style="width: 25%;">
        <div ref="box-line-multi-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineMulti
            ref="box-line-multi-2-g-c"
            title-text="今日行情"
            :series-color="[$color.cyan, $color.green, $color.yellow, $color.red]"
            :series-label-text-color="[$color.bg, $color.bg, $color.bg, '#FFF']"
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
