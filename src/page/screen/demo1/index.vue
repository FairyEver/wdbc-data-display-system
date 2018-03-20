<template>
  <div class="container flex-group col">
    <div class="flex-item flex-group col center screen-header" style="height: 100px;">
      <p class="title">页面标题</p>
      <p class="sub-title">页面小标题</p>
    </div>
    <!-- TOP -->
    <div class="flex-item flex-group row" style="height: 120px; padding: 5px;">
      <div ref="box-1" class="flex-item grow hov" style="margin: 5px;">1</div>
      <div ref="box-2" class="flex-item grow hov" style="margin: 5px;">1</div>
      <div ref="box-3" class="flex-item grow hov" style="margin: 5px;">1</div>
      <div ref="box-4" class="flex-item grow hov" style="margin: 5px;">1</div>
    </div>
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <div class="flex-item grow flex-group col">
        <div ref="box-5" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo ref="box-5-chart" v-bind="setting.lineDemo1" @mounted="handleChartMounted"></ChartLineDemo>
        </div>
        <div ref="box-6" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo ref="box-6-chart" v-bind="setting.lineDemo2" @mounted="handleChartMounted"></ChartLineDemo>
        </div>
      </div>
      <div class="flex-item grow flex-group col">
        <div ref="box-7" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo ref="box-7-chart" v-bind="setting.lineDemo3" @mounted="handleChartMounted"></ChartLineDemo>
        </div>
        <div ref="box-8" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo ref="box-8-chart" v-bind="setting.lineDemo4" @mounted="handleChartMounted"></ChartLineDemo>
        </div>
      </div>
      <div class="flex-item grow flex-group col">
        <div ref="box-9" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo ref="box-9-chart" v-bind="setting.lineDemo5" @mounted="handleChartMounted"></ChartLineDemo>
        </div>
        <div ref="box-10" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo ref="box-10-chart" v-bind="setting.lineDemo6" @mounted="handleChartMounted"></ChartLineDemo>
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
      needMountedChartNum: 6,
      setting: {
        lineDemo1: {
          titleText: 'lineDemo',
          itemColor: this.$color.cyan,
          url: 'x.mock',
          ajaxData: {
            name: 'name'
          }
        },
        lineDemo2: {
          titleText: 'lineDemo',
          itemColor: this.$color.yellow,
          url: 'x.mock',
          ajaxData: {
            name: 'name'
          }
        },
        lineDemo3: {
          titleText: 'lineDemo',
          itemColor: this.$color.red,
          url: 'x.mock',
          ajaxData: {
            name: 'name'
          }
        },
        lineDemo4: {
          titleText: 'lineDemo',
          itemColor: this.$color.green,
          url: 'x.mock',
          ajaxData: {
            name: 'name'
          }
        },
        lineDemo5: {
          titleText: 'lineDemo',
          itemColor: this.$color.orange,
          url: 'x.mock',
          ajaxData: {
            name: 'name'
          }
        },
        lineDemo6: {
          titleText: 'lineDemo',
          itemColor: this.$color.pink,
          url: 'x.mock',
          ajaxData: {
            name: 'name'
          }
        }
      }
    }
  },
  watch: {
    mountedChartNum (num) {
      if (num === this.needMountedChartNum) {
        this.init()
      }
    }
  },
  methods: {
    handleChartMounted () {
      this.mountedChartNum += 1
    },
    init () {
      // 获取所有的box
      for (const name in this.$refs) {
        const box = /box-\d+/
        if (box.test(name)) {
          this.boxs.push(name)
        }
      }
      this.boxs.forEach(box => {
        const chart = this.$refs[`${box}-chart`]
        console.log(chart)
        if (chart) {
          chart.init({
            height: this.$refs[box].offsetHeight,
            width: this.$refs[box].offsetWidth
          })
        }
      })
    }
  }
}
</script>
