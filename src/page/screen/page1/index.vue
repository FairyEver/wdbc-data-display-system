<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">智慧蛋鸡全国行情大数据平台</p>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- 左侧 -->
      <div class="flex-item flex-group col" style="width: 30%;">
        <!-- 三大指数 -->
        <div class="flex-item" style="text-align: center; line-height: 30px; font-size: 16px;">
          今日全国行情指数
        </div>
        <div class="flex-item flex-group row" style="height: 200px; padding: 5px;">
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
      </div>
      <!-- 中间 -->
      <div class="flex-item grow flex-group col">
        
      </div>
      <!-- 右侧 -->
      <div class="flex-item grow flex-group col">
        
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
