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
      <!-- L -->
      <div class="flex-item grow flex-group col">
        <div ref="box-5" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo></ChartLineDemo>
        </div>
        <div ref="box-6" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo></ChartLineDemo>
        </div>
      </div>
      <!-- R -->
      <div class="flex-item grow flex-group col">
        <div ref="box-7" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo></ChartLineDemo>
        </div>
        <div ref="box-8" class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo></ChartLineDemo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      boxs: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // 获取所有的box
      for (const name in this.$refs) {
        const box = /box-\d/
        if (box.test(name)) {
          this.boxs.push(name)
        }
      }
      this.boxs.forEach(box => {
        console.log(this.$refs[box].offsetHeight)
        console.log(this.$refs[box].offsetWidth)
      })
    }
  }
}
</script>
