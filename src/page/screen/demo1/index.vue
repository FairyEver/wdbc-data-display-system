<template>
  <div class="container flex-group col">
    <div class="flex-item flex-group col center screen-header" style="height: 100px;">
      <p class="title">页面标题</p>
      <p class="sub-title">页面小标题</p>
    </div>
    <!-- TOP -->
    <div class="flex-item flex-group row" style="height: 120px; padding: 5px;">
      <div ref="box1" class="flex-item grow hov" style="margin: 5px;">1</div>
      <div ref="box2" class="flex-item grow hov" style="margin: 5px;">1</div>
      <div ref="box3" class="flex-item grow hov" style="margin: 5px;">1</div>
      <div ref="box4" class="flex-item grow hov" style="margin: 5px;">1</div>
    </div>
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <div class="flex-item grow flex-group col">
        <div ref="box5" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarDemo ref="box5chart" v-bind="setting.box5chart" @mounted="handleChartMounted"></ChartBarDemo>
        </div>
        <div ref="box6" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarDemo ref="box6chart" v-bind="setting.box6chart" @mounted="handleChartMounted"></ChartBarDemo>
        </div>
      </div>
      <div class="flex-item grow flex-group col">
        <div ref="box7" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarDemo ref="box7chart" v-bind="setting.box7chart" @mounted="handleChartMounted"></ChartBarDemo>
        </div>
        <div ref="box8" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarDemo ref="box8chart" v-bind="setting.box8chart" @mounted="handleChartMounted"></ChartBarDemo>
        </div>
      </div>
      <div class="flex-item grow flex-group col">
        <div ref="box9" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarDemo ref="box9chart" v-bind="setting.box9chart" @mounted="handleChartMounted"></ChartBarDemo>
        </div>
        <div ref="box10" class="flex-item grow hov" style="margin: 5px;">
          <ChartBarDemo ref="box10chart" v-bind="setting.box10chart" @mounted="handleChartMounted"></ChartBarDemo>
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
        box5chart: {
          titleText: 'barDemo',
          itemColor: this.$color.cyan,
          url: 'x.mock',
          ajaxData: {
            name: 'name'
          }
        },
        box6chart: {
          titleText: 'barDemo',
          itemColor: this.$color.yellow,
          url: 'x.mock',
          ajaxData: {
            name: 'name'
          }
        },
        box7chart: {
          titleText: 'barDemo',
          itemColor: this.$color.red,
          url: 'x.mock',
          ajaxData: {
            name: 'name'
          }
        },
        box8chart: {
          titleText: 'barDemo',
          itemColor: this.$color.green,
          url: 'x.mock',
          ajaxData: {
            name: 'name'
          }
        },
        box9chart: {
          titleText: 'barDemo',
          itemColor: this.$color.orange,
          url: 'x.mock',
          ajaxData: {
            name: 'name'
          }
        },
        box10chart: {
          titleText: 'barDemo',
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
        const box = /box\d+/
        if (box.test(name)) {
          this.boxs.push(name)
        }
      }
      this.boxs.forEach(box => {
        const chart = this.$refs[`${box}chart`]
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
