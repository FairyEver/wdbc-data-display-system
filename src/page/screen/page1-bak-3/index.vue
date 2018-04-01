<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">智慧蛋鸡全国行情数据展示</p>
      <!-- <p class="sub-title">第一个页面的小标题</p> -->
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <!-- 上半部分 -->
        <div class="flex-item grow flex-group row">
          <!-- 上半部分 左侧 -->
          <div class="flex-item flex-group col" style="width: 45%;">
            <!-- 三大指数 -->
            <div class="flex-item flex-group row" style="height: 200px; padding: 5px;">
              <div ref="box-count-style2-1-g" class="flex-item grow hov" style="margin: 5px;">
                <ChartCountStyle2
                  ref="box-count-style2-1-g-c"
                  title-text="蛋价指数"
                  url="http://192.168.164.120:6080/api/marketQuotationHomeIndex"
                  :ajax-data="{name: 'djzs'}"
                  :transform="(data) => data.dataInfo.quotationData"
                  :title-color="$color.cyan"
                  :num-color="$color.cyan"
                  @mounted="mountedChartNum++">
                </ChartCountStyle2>
              </div>
              <div ref="box-count-style2-2-g" class="flex-item grow hov" style="margin: 5px;">
                <ChartCountStyle2
                  ref="box-count-style2-2-g-c"
                  title-text="成本指数"
                  url="http://192.168.164.120:6080/api/marketQuotationHomeIndex"
                  :ajax-data="{name: 'cbzs'}"
                  :transform="(data) => data.dataInfo.quotationData"
                  :title-color="$color.yellow"
                  :num-color="$color.yellow"
                  @mounted="mountedChartNum++">
                </ChartCountStyle2>
              </div>
              <div ref="box-count-style2-3-g" class="flex-item grow hov" style="margin: 5px;">
                <ChartCountStyle2
                  ref="box-count-style2-3-g-c"
                  title-text="盈利指数"
                  url="http://192.168.164.120:6080/api/marketQuotationHomeIndex"
                  :ajax-data="{name: 'ylzs'}"
                  :transform="(data) => data.dataInfo.quotationData"
                  :title-color="$color.green"
                  :num-color="$color.green"
                  @mounted="mountedChartNum++">
                </ChartCountStyle2>
              </div>
            </div>
            <div ref="box-radar-style1-1-g" class="flex-item grow hov" style="margin: 5px;">
              <ChartRadarStyle1
                ref="box-radar-style1-1-g-c"
                title-text="全国市场价格对比"
                url="http://192.168.164.120:6080/api/countrywideMarketPriceCompare"
                :transform="(data) => data.dataInfo"
                @mounted="mountedChartNum++">
              </ChartRadarStyle1>
            </div>
          </div>
          <!-- 上半部分 右侧 -->
          <div ref="box-map-style1-1-g" class="flex-item grow">
            <ChartMapStyle1
              ref="box-map-style1-1-g-c"
              title-text="全国采集点"
              @mounted="mountedChartNum++">
            </ChartMapStyle1>
          </div>
        </div>
        <!-- 表格 -->
        <div ref="box-table-style1-1-g" class="flex-item hov" style="height: 300px; margin: 5px;">
          <ChartTableStyle1
            ref="box-table-style1-1-g-c"
            title-text="市场行情报价"
            url="http://192.168.164.120:6080/api/getMarketQuotationPrice"
            :transform="(data) => data.dataInfo"
            @mounted="mountedChartNum++">
          </ChartTableStyle1>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item flex-group col" style="width: 30%;">
        <div ref="box-line-multi-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineMulti
            ref="box-line-multi-2-g-c"
            title-text="全国行情指数"
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
