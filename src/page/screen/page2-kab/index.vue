<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">智慧蛋鸡全国销售大数据平台</p>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <!-- 上半部分 -->
        <div class="flex-item grow flex-group row">
          <!-- 上半部分 左侧 -->
          <div class="flex-item flex-group col" style="width: 35%;">
            <!-- 销售额 -->
            <div ref="box-count-style3-1-g" class="flex-item hov" style="height: 200px; margin: 5px;">
              <ChartCountStyle3
                ref="box-count-style3-1-g-c"
                title-text="销售额"
                :ajax-data="{name: 'cell-4'}"
                @mounted="mountedChartNum++">
              </ChartCountStyle3>
            </div>
            <!-- 销售额曲线 -->
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
          </div>
          <!-- 上半部分 右侧 -->
          <div ref="box-map-style1-1-g" class="flex-item grow">
            <ChartMapStyle1
              ref="box-map-style1-1-g-c"
              title-text="地区销售数据"
              @mounted="mountedChartNum++">
            </ChartMapStyle1>
          </div>
        </div>
        <!-- 表格 -->
        <div ref="box-table-style1-1-g" class="flex-item hov" style="height: 300px; margin: 5px;">
          <ChartTableStyle1
            ref="box-table-style1-1-g-c"
            title-text="各地市场报价行情"
            :ajax-data="{name: 'table-hq'}"
            @mounted="mountedChartNum++">
          </ChartTableStyle1>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item flex-group col" style="width: 25%;">
        <!-- 销售数据 -->
        <div ref="box-count-style3-2-g" class="flex-item hov" style="height: 200px; margin: 5px;">
          <ChartCountStyle3
            ref="box-count-style3-2-g-c"
            title-text="销售量"
            :ajax-data="{name: 'cell-4'}"
            @mounted="mountedChartNum++">
          </ChartCountStyle3>
        </div>
        <!-- 销售数据曲线 -->
        <div ref="box-line-base-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineBase
            ref="box-line-base-2-g-c"
            title-text="lineBase"
            grid-right="20"
            :series-color="$color.cyan"
            :series-label-text-color="$color.bg"
            @mounted="mountedChartNum++">
          </ChartLineBase>
        </div>
        <div ref="box-bar-multi-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarMulti
            title-text="lineBase"
            ref="box-bar-multi-1-g-c"
            @mounted="mountedChartNum++">
          </ChartBarMulti>
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

scss
