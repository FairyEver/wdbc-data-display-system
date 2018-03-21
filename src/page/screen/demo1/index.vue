<template>
  <div class="container flex-group col">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">页面标题</p>
      <p class="sub-title">页面小标题</p>
    </div>
    <!-- row -->
    <div class="flex-item flex-group row" style="height: 120px; padding: 5px;">
      <div ref="box1" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1 ref="box1chart" v-bind="setting.box1chart" @mounted="handleChartMounted"></ChartCountStyle1>
      </div>
      <div ref="box2" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1 ref="box2chart" v-bind="setting.box2chart" @mounted="handleChartMounted"></ChartCountStyle1>
      </div>
      <div ref="box3" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1 ref="box3chart" v-bind="setting.box3chart" @mounted="handleChartMounted"></ChartCountStyle1>
      </div>
      <div ref="box4" class="flex-item grow hov" style="margin: 5px;">
        <ChartCountStyle1 ref="box4chart" v-bind="setting.box4chart" @mounted="handleChartMounted"></ChartCountStyle1>
      </div>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box5" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase ref="box5chart" v-bind="setting.box5chart" @mounted="handleChartMounted"></ChartBarBase>
        </div>
        <div ref="box6" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase ref="box6chart" v-bind="setting.box6chart" @mounted="handleChartMounted"></ChartBarBase>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box7" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase ref="box7chart" v-bind="setting.box7chart" @mounted="handleChartMounted"></ChartBarBase>
        </div>
        <div ref="box8" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase ref="box8chart" v-bind="setting.box8chart" @mounted="handleChartMounted"></ChartBarBase>
        </div>
      </div>
      <!-- col -->
      <div class="flex-item grow flex-group col">
        <div ref="box9" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase ref="box9chart" v-bind="setting.box9chart" @mounted="handleChartMounted"></ChartBarBase>
        </div>
        <div ref="box10" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarBase ref="box10chart" v-bind="setting.box10chart" @mounted="handleChartMounted"></ChartBarBase>
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
      needMountedChartNum: 10,
      // 图表设置
      setting: {
        box1chart: {
          titleText: 'count',
          subTitleText: 'count style1',
          numColor: this.$color.cyan,
          url: 'x.mock',
          ajaxData: {
            name: 'your data'
          }
        },
        box2chart: {
          titleText: 'count',
          subTitleText: 'count style1',
          numColor: this.$color.pink,
          url: 'x.mock',
          ajaxData: {
            name: 'your data'
          }
        },
        box3chart: {
          titleText: 'count',
          subTitleText: 'count style1',
          numColor: this.$color.green,
          url: 'x.mock',
          ajaxData: {
            name: 'your data'
          }
        },
        box4chart: {
          titleText: 'count',
          subTitleText: 'count style1',
          numColor: this.$color.orange,
          url: 'x.mock',
          ajaxData: {
            name: 'your data'
          }
        },
        box5chart: {
          titleText: 'barDemo',
          seriesColor: this.$color.cyan,
          url: 'x.mock',
          ajaxData: {
            name: 'your data'
          }
        },
        box6chart: {
          titleText: 'barDemo',
          seriesColor: this.$color.yellow,
          url: 'x.mock',
          ajaxData: {
            name: 'your data'
          }
        },
        box7chart: {
          titleText: 'barDemo',
          seriesColor: this.$color.red,
          url: 'x.mock',
          ajaxData: {
            name: 'your data'
          }
        },
        box8chart: {
          titleText: 'barDemo',
          seriesColor: this.$color.green,
          url: 'x.mock',
          ajaxData: {
            name: 'your data'
          }
        },
        box9chart: {
          titleText: 'barDemo',
          seriesColor: this.$color.orange,
          url: 'x.mock',
          ajaxData: {
            name: 'your data'
          }
        },
        box10chart: {
          titleText: 'barDemo',
          seriesColor: this.$color.pink,
          url: 'x.mock',
          ajaxData: {
            name: 'your data'
          }
        }
      }
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
    // 图表mounted回调
    handleChartMounted () {
      this.mountedChartNum += 1
    },
    // 初始化
    init () {
      // 获取所有的box
      for (const name in this.$refs) {
        const box = /box\d+/
        if (box.test(name)) {
          this.boxs.push(name)
        }
      }
      this.boxs.forEach(box => {
        const chart = this.$refs[`${box}chart`]
        if (!chart) {
          return
        }
        if (!chart.init) {
          return
        }
        chart.init({
          height: this.$refs[box].offsetHeight,
          width: this.$refs[box].offsetWidth
        })
      })
    }
  }
}
</script>
