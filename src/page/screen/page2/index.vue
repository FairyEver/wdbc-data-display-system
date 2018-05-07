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
        <div ref="box-map-center-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartMapStyle2
            ref="box-map-center-g-c"
            @mounted="mountedChartNum++">
          </ChartMapStyle2>
        </div>
        <!-- 三种蛋鸡分布 -->
        <div class="flex-item hov flex-group row" style="height: 160px; margin: 5px; padding: 20px 0px;">
          <!-- 三块 -->
          <div class="flex-item grow flex-group col">
            <div ref="box-pie-style3-c1-g" class="flex-item grow">
              <ChartPieStyle3
                ref="box-pie-style3-c1-g-c"
                :data="30"
                :color-light="pieColors[0]"
                @mounted="mountedChartNum++">
              </ChartPieStyle3>
            </div>
            <div class="flex-item center-pie-title" :style="{color: pieColors[0]}">
              红壳蛋鸡养殖户
            </div>
          </div>
          <div class="flex-item grow flex-group col">
            <div ref="box-pie-style3-c2-g" class="flex-item grow">
              <ChartPieStyle3
                ref="box-pie-style3-c2-g-c"
                :data="40"
                :color-light="pieColors[1]"
                @mounted="mountedChartNum++">
              </ChartPieStyle3>
            </div>
            <div class="flex-item center-pie-title" :style="{color: pieColors[1]}">
              红壳蛋鸡养殖户
            </div>
          </div>
          <div class="flex-item grow flex-group col">
            <div ref="box-pie-style3-c3-g" class="flex-item grow">
              <ChartPieStyle3
                ref="box-pie-style3-c3-g-c"
                :data="80"
                :color-light="pieColors[2]"
                @mounted="mountedChartNum++">
              </ChartPieStyle3>
            </div>
            <div class="flex-item center-pie-title" :style="{color: pieColors[2]}">
              红壳蛋鸡养殖户
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="flex-item flex-group col" style="width: 25%;">
        <!-- 全国养殖户户数TOP10 -->
        <div class="flex-item grow flex-group row hov" style="margin: 5px;">
          <div class="flex-item flex-group col" style="width: 100px;">
            <!-- 三块 -->
            <div class="flex-item grow flex-group col">
              <div ref="box-pie-style3-r1-g" class="flex-item grow">
                <ChartPieStyle3
                  ref="box-pie-style3-r1-g-c"
                  :radius="['60%', '70%']"
                  :data="30"
                  :color-light="pieColors[0]"
                  @mounted="mountedChartNum++">
                </ChartPieStyle3>
              </div>
              <div class="flex-item center-pie-title mini" :style="{color: pieColors[0]}">红壳占比</div>
            </div>
            <div class="flex-item grow flex-group col">
              <div ref="box-pie-style3-r2-g" class="flex-item grow">
                <ChartPieStyle3
                  ref="box-pie-style3-r2-g-c"
                  :radius="['60%', '70%']"
                  :data="10"
                  :color-light="pieColors[1]"
                  @mounted="mountedChartNum++">
                </ChartPieStyle3>
              </div>
              <div class="flex-item center-pie-title mini" :style="{color: pieColors[1]}">粉壳占比</div>
            </div>
            <div class="flex-item grow flex-group col">
              <div ref="box-pie-style3-r3-g" class="flex-item grow">
                <ChartPieStyle3
                  ref="box-pie-style3-r3-g-c"
                  :radius="['60%', '70%']"
                  :data="60"
                  :color-light="pieColors[2]"
                  @mounted="mountedChartNum++">
                </ChartPieStyle3>
              </div>
              <div class="flex-item center-pie-title mini" :style="{color: pieColors[2]}">白壳占比</div>
            </div>
          </div>
          <div ref="box-map-mini-g" class="flex-item grow">
            <ChartMapMini
              ref="box-map-mini-g-c"
              title-text="全国养殖户年龄分布"
              @mounted="mountedChartNum++">
            </ChartMapMini>
          </div>
        </div>
        <!-- 全国养殖户年龄分布 -->
        <div ref="box-bar-style2-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarStyle2
            ref="box-bar-style2-2-g-c"
            title-text="全国养殖户年龄分布"
            :auto-get-data="false"
            @mounted="mountedChartNum++">
          </ChartBarStyle2>
        </div>
        <!-- 全国养殖户从业年限分布 -->
        <div ref="box-pie-style2-2-g" class="flex-item grow hov" style="margin: 5px;">
          <ChartPieStyle2
            ref="box-pie-style2-2-g-c"
            title-text="全国养殖户从业年限分布"
            :auto-get-data="false"
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
      useMixinAutoInit: false,
      pieColors: [
        '#E6E09F',
        '#90DEF5',
        '#4F9CE0'
      ]
    }
  },
  methods: {
    async init2 () {
      // 初始化图表
      this.init()
        .then(() => {
          console.log('222')
        })
    }
  }
}
</script>

<style lang="scss">
.center-pie-title {
  height: 30px;
  line-height: 30px;
  text-align: center;
  &.mini {
    height: 24px;
    line-height: 24px;
  }
}
</style>
