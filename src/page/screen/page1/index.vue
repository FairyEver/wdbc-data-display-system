<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">智慧蛋鸡全国行情大数据平台</p>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- 左侧 -->
      <div class="flex-item flex-group col" style="width: 25%;">
        
        <!-- 三大指数 -->
        <div class="flex-item" style="text-align: center; line-height: 30px; font-size: 16px; margin-right: -100px;">
          今日全国行情指数
        </div>
        <div class="flex-item flex-group row" style="height: 200px; padding: 5px; margin-right: -100px;">
          <div ref="box-count-style2-1-g" class="flex-item grow hov" style="margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-1-g-c"
              title-text="蛋价指数"
              :url="`${$root.host}/api/marketQuotationHomeIndex`"
              :ajax-data="{name: 'djzs'}"
              :transform="(data) => data.dataInfo.quotationData"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
          <div ref="box-count-style2-2-g" class="flex-item grow hov" style="margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-2-g-c"
              title-text="成本指数"
              :url="`${$root.host}/api/marketQuotationHomeIndex`"
              :ajax-data="{name: 'cbzs'}"
              :transform="(data) => data.dataInfo.quotationData"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
          <div ref="box-count-style2-3-g" class="flex-item grow hov" style="margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-3-g-c"
              title-text="盈利指数"
              :url="`${$root.host}/api/marketQuotationHomeIndex`"
              :ajax-data="{name: 'ylzs'}"
              :transform="(data) => data.dataInfo.quotationData"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
        </div>

        <div ref="box-line-multi-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineMulti
            ref="box-line-multi-1-g-c"
            title-text="全国行情指数趋势"
            :series-color="[$color.cyan, $color.green, $color.yellow, $color.red]"
            :series-label-text-color="[$color.bg, $color.bg, $color.bg, '#FFF']"
            :url="`${$root.host}/api/marketQuotationIndexGraph`"
            :transform="(data) => data.dataInfo"
            @mounted="mountedChartNum++">
          </ChartLineMulti>
        </div>

        <div class="flex-item flex-group row hov" style="margin: 5px; height: 300px;">
          <div class="flex-item ul-list-col" style="width: 100px;">
            <ul>
              <li class="active">红壳蛋鸡</li>
              <li>粉壳蛋鸡</li>
              <li>白壳蛋鸡</li>
              <li>玉米</li>
              <li>豆粕</li>
              <li>淘汰鸡</li>
            </ul>
          </div>
          <div ref="box-line-base-1-g" class="flex-item grow">
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

      </div>
      <!-- 中间 -->
      <div class="flex-item grow flex-group col">

        <div ref="box-map-style1-1-g" class="flex-item grow">
          <ChartMapStyle1
            ref="box-map-style1-1-g-c"
            title-text="全国采集点分布"
            @mounted="mountedChartNum++">
          </ChartMapStyle1>
        </div>
        
        <div ref="box-table-style1-1-g" class="flex-item hov" style="height: 300px; margin: 5px;">
          <ChartTableStyle1
            ref="box-table-style1-1-g-c"
            title-text="各地市场报价行情"
            :url="`${$root.host}/api/getMarketQuotationPrice`"
            :transform="(data) => data.dataInfo"
            @mounted="mountedChartNum++">
          </ChartTableStyle1>
        </div>

      </div>
      <!-- 右侧 -->
      <div class="flex-item flex-group col" style="width: 25%;">
        
        <!-- 三大指数 -->
        <div class="flex-item" style="text-align: center; line-height: 30px; font-size: 16px; margin-left: -100px;">
          今日全国行情指数
        </div>
        <div class="flex-item flex-group row" style="height: 200px; padding: 5px; margin-left: -100px;">
          <div ref="box-count-style2-4-g" class="flex-item grow hov" style="margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-4-g-c"
              title-text="蛋价指数"
              :url="`${$root.host}/api/marketQuotationHomeIndex`"
              :ajax-data="{name: 'djzs'}"
              :transform="(data) => data.dataInfo.quotationData"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
          <div ref="box-count-style2-5-g" class="flex-item grow hov" style="margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-5-g-c"
              title-text="成本指数"
              :url="`${$root.host}/api/marketQuotationHomeIndex`"
              :ajax-data="{name: 'cbzs'}"
              :transform="(data) => data.dataInfo.quotationData"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
          <div ref="box-count-style2-6-g" class="flex-item grow hov" style="margin: 5px;">
            <ChartCountStyle2
              ref="box-count-style2-6-g-c"
              title-text="盈利指数"
              :url="`${$root.host}/api/marketQuotationHomeIndex`"
              :ajax-data="{name: 'ylzs'}"
              :transform="(data) => data.dataInfo.quotationData"
              @mounted="mountedChartNum++">
            </ChartCountStyle2>
          </div>
        </div>

        <div ref="box-line-multi-3-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineMulti
            ref="box-line-multi-3-g-c"
            title-text="全国行情指数趋势"
            :series-color="[$color.cyan, $color.green, $color.yellow, $color.red]"
            :series-label-text-color="[$color.bg, $color.bg, $color.bg, '#FFF']"
            :url="`${$root.host}/api/marketQuotationIndexGraph`"
            :transform="(data) => data.dataInfo"
            @mounted="mountedChartNum++">
          </ChartLineMulti>
        </div>

        <div class="flex-item flex-group row hov" style="margin: 5px; height: 300px;">
          <div class="flex-item ul-list-col" style="width: 100px;">
            <ul>
              <li class="active">红壳蛋鸡</li>
              <li>粉壳蛋鸡</li>
              <li>白壳蛋鸡</li>
              <li>玉米</li>
              <li>豆粕</li>
              <li>淘汰鸡</li>
            </ul>
          </div>
          <div ref="box-line-base-2-g" class="flex-item grow">
            <ChartLineBase
              ref="box-line-base-2-g-c"
              title-text="lineBase"
              grid-right="20"
              :series-color="$color.cyan"
              :series-label-text-color="$color.bg"
              @mounted="mountedChartNum++">
            </ChartLineBase>
          </div>
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
