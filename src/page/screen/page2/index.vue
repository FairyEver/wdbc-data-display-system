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
            <!-- 三大指数 -->
            <div v-if="mountedChartNum === needMountedChartNum" class="flex-item" style="text-align: center; line-height: 30px; font-size: 16px;">
              今日全国行情指数
            </div>
            <div ref="box-count-style3-1-g" class="flex-item hov" style="height: 240px; margin: 5px;">
              <ChartCountStyle3
                ref="box-count-style3-1-g-c"
                title-text="销售额"
                :ajax-data="{name: 'cell-4'}"
                @mounted="mountedChartNum++">
              </ChartCountStyle3>
            </div>
            <!-- <div ref="box-radar-style1-1-g" class="flex-item grow hov" style="margin: 5px;">
              <ChartRadarStyle1
                ref="box-radar-style1-1-g-c"
                title-text="今日全国市场价格对比"
                url="http://192.168.164.120:6080/api/countrywideMarketPriceCompare"
                :transform="(data) => data.dataInfo"
                @mounted="mountedChartNum++">
              </ChartRadarStyle1>
            </div> -->
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
        <div ref="box-bar-base-1-g" class="flex-item hov" style="height: 300px; margin: 5px;">
          <ChartBarBase
            ref="box-bar-base-1-g-c"
            title-text="barBase"
            grid-left="50"
            grid-right="20"
            :series-color="$color.cyan"
            @mounted="mountedChartNum++">
          </ChartBarBase>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item flex-group col" style="width: 25%;">
        <div ref="box-count-style3-2-g" class="flex-item hov" style="height: 240px; margin: 5px;">
          <ChartCountStyle3
            ref="box-count-style3-2-g-c"
            title-text="销售量"
            :ajax-data="{name: 'cell-4'}"
            @mounted="mountedChartNum++">
          </ChartCountStyle3>
        </div>
        <!-- <div ref="box-line-multi-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineMulti
            ref="box-line-multi-2-g-c"
            title-text="全国行情指数趋势"
            :series-color="[$color.cyan, $color.green, $color.yellow, $color.red]"
            :series-label-text-color="[$color.bg, $color.bg, $color.bg, '#FFF']"
            url="http://192.168.164.120:6080/api/marketQuotationIndexGraph"
            :transform="(data) => data.dataInfo"
            @mounted="mountedChartNum++">
          </ChartLineMulti>
        </div>
        <div ref="box-bar-stack-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarStack
            ref="box-bar-stack-1-g-c"
            title-text="今日采集情况"
            :series-color="$color.cyan"
            url="http://192.168.164.120:6080/api/getCurrentCollectionPoint"
            :ajax-data="{name: 'bar-stack'}"
            :transform="(data) => data.dataInfo"
            @mounted="mountedChartNum++">
          </ChartBarStack>
        </div> -->
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
