<template>
  <div class="container flex-group col">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">第2个页面</p>
      <p class="sub-title">第2个页面的小标题</p>
    </div>
    <!-- row -->
    <div class="flex-item flex-group row" style="height: 120px; padding: 5px;">
      <div ref="box1" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1
          ref="box1chart"
          title-text="count"
          sub-title-text="count style1"
          url="x.mock"
          :num-color="$color.cyan"
          @mounted="mountedChartNum ++">
        </ChartCountStyle1>
      </div>
      <div ref="box2" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1
          ref="box2chart"
          title-text="count"
          sub-title-text="count style1"
          url="x.mock"
          :num-color="$color.pink"
          @mounted="mountedChartNum ++">
        </ChartCountStyle1>
      </div>
      <div ref="box3" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1
          ref="box3chart"
          title-text="count"
          sub-title-text="count style1"
          url="x.mock"
          :num-color="$color.green"
          @mounted="mountedChartNum ++">
        </ChartCountStyle1>
      </div>
      <div ref="box4" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1
          ref="box4chart"
          title-text="count"
          sub-title-text="count style1"
          url="x.mock"
          :num-color="$color.orange"
          @mounted="mountedChartNum ++">
        </ChartCountStyle1>
      </div>
      <div ref="box12" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1
          ref="box12chart"
          title-text="count"
          sub-title-text="count style1"
          url="x.mock"
          :num-color="$color.orange"
          @mounted="mountedChartNum ++">
        </ChartCountStyle1>
      </div>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box5" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box5chart"
            title-text="barBase"
            :series-color="$color.cyan"
            @mounted="mountedChartNum ++">
          </ChartBarBase>
        </div>
        <div ref="box6" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box6chart"
            title-text="barBase"
            :series-color="$color.yellow"
            @mounted="mountedChartNum ++">
          </ChartBarBase>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box7" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box7chart"
            title-text="barBase"
            :series-color="$color.red"
            @mounted="mountedChartNum ++">
          </ChartBarBase>
        </div>
        <div ref="box8" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box8chart"
            title-text="barBase"
            :series-color="$color.green"
            @mounted="mountedChartNum ++">
          </ChartBarBase>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box9" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box9chart"
            title-text="barBase"
            :series-color="$color.orange"
            @mounted="mountedChartNum ++">
          </ChartBarBase>
        </div>
        <div ref="box10" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase
            ref="box10chart"
            title-text="barBase"
            :series-color="$color.pink"
            @mounted="mountedChartNum ++">
          </ChartBarBase>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      boxs: [],
      mountedChartNum: 0,
      needMountedChartNum: 11
    }
  },
  watch: {
    // 监视已经完成初始化的图表数量
    mountedChartNum (num) {
      if (num === this.needMountedChartNum) {
        this.init()
      }
    }
  },
  methods: {
    // 初始化
    init () {
      for (const name in this.$refs) {
        const box = /box\d+/
        if (box.test(name)) {
          const chart = this.$refs[`${name}chart`]
          if (!chart) {
            return
          }
          if (!chart.init) {
            return
          }
          chart.init({
            height: this.$refs[name].offsetHeight,
            width: this.$refs[name].offsetWidth
          })
        }
      }
    }
  }
}
</script>
