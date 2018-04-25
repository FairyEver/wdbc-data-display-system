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
            title-text="全国养殖户户数TOP10"
            @mounted="mountedChartNum++">
          </ChartBarTop10>
        </div>
        <!-- 全国养殖户年龄分布 -->
        <div ref="box-bar-style2-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarStyle2
            ref="box-bar-style2-1-g-c"
            title-text="全国养殖户年龄分布"
            @mounted="mountedChartNum++">
          </ChartBarStyle2>
        </div>
        <!-- 全国养殖户从业年限分布 -->
        <div ref="box-pie-style2-1-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartPieStyle2
            ref="box-pie-style2-1-g-c"
            title-text="全国养殖户从业年限分布"
            @mounted="mountedChartNum++">
          </ChartPieStyle2>
        </div>
      </div>
      <!-- 中间 -->
      <div class="flex-item grow flex-group col">
        <!-- 地图 -->
        <div class="flex-item grow hov" style="margin: 5px;"></div>
        <!-- 三种蛋鸡分布 -->
        <div class="flex-item hov flex-group row" style="height: 200px; margin: 5px;">
          <!-- 三块 -->
          <div class="flex-item grow">
          </div>
          <div class="flex-item grow">
          </div>
          <div class="flex-item grow">
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="flex-item flex-group col" style="width: 25%;">
        <!-- 全国养殖户户数TOP10 -->
        <div class="flex-item grow flex-group row hov" style="margin: 5px;">
          <div class="flex-item flex-group col" style="width: 100px;">
            <div class="flex-item grow"></div>
            <div class="flex-item grow"></div>
            <div class="flex-item grow"></div>
          </div>
          <div ref="box-bar-style2-3-g" class="flex-item grow">
            <ChartBarStyle2
              ref="box-bar-style2-3-g-c"
              title-text="全国养殖户年龄分布"
              @mounted="mountedChartNum++">
            </ChartBarStyle2>
          </div>
        </div>
        <!-- 全国养殖户年龄分布 -->
        <div ref="box-bar-style2-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarStyle2
            ref="box-bar-style2-2-g-c"
            title-text="全国养殖户年龄分布"
            @mounted="mountedChartNum++">
          </ChartBarStyle2>
        </div>
        <!-- 全国养殖户从业年限分布 -->
        <div ref="box-pie-style2-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartPieStyle2
            ref="box-pie-style2-2-g-c"
            title-text="全国养殖户从业年限分布"
            @mounted="mountedChartNum++">
          </ChartPieStyle2>
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
