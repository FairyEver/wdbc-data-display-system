<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">智慧蛋鸡全国行情大数据平台 养殖户分布</p>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- 左侧 -->
      <div class="flex-item flex-group col" style="width: 25%;">
        <!-- 全国养殖户户数TOP10 -->
        <div ref="box-bar-top-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarTop10
            ref="box-bar-top-1-g-c"
            title-text="barBase"
            @mounted="mountedChartNum++">
          </ChartBarTop10>
        </div>
        <!-- 全国养殖户年龄分布 -->
        <div ref="box-bar-top-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarTop10
            ref="box-bar-top-2-g-c"
            title-text="barBase"
            @mounted="mountedChartNum++">
          </ChartBarTop10>
        </div>
        <!-- 全国养殖户从业年限分布 -->
        <div ref="box-bar-top-3-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarTop10
            ref="box-bar-top-3-g-c"
            title-text="barBase"
            @mounted="mountedChartNum++">
          </ChartBarTop10>
        </div>
      </div>
      <!-- 中间 -->
      <div class="flex-item grow flex-group col">
        <!-- 地图 -->
        <div class="flex-item grow hov" style="margin: 5px;"></div>
        <!-- 三种蛋鸡分布 -->
        <div class="flex-item hov" style="height: 200px; margin: 5px;"></div>
      </div>
      <!-- 右侧 -->
      <div class="flex-item flex-group col" style="width: 25%;">
        <!-- 地区养殖户数据 -->
        <div class="flex-item grow hov" style="margin: 5px;"></div>
        <!-- 地区养殖户年龄分布数据 -->
        <div class="flex-item grow hov" style="margin: 5px;"></div>
        <!-- 地区养殖户从业年限分布数据 -->
        <div class="flex-item grow hov" style="margin: 5px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'
export default {
  mixins: [
    mixin
  ],
  data () {
    return {
      useMixinAutoInit: false
    }
  },
  methods: {
    // 这个页面比较特殊 自己定义自己的初始化方法
    async init2 () {
      this.init()
      console.log('init2')
    }
  }
}
</script>
