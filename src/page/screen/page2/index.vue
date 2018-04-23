<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">智慧蛋鸡全国行情大数据平台 养殖户分布</p>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- 左侧 -->
      <div class="flex-item flex-group col" style="width: 25%;">
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
      console.log('init2')
    }
  }
}
</script>
