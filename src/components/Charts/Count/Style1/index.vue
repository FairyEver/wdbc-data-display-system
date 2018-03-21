<template>
  <div :style="style" class="chart-count-style-1">
    <div class="title-group">
      <p class="title">{{titleText}}</p>
      <p class="sub-title">{{subTitleText}}</p>
    </div>
    <div class="num-group" :style="styleNumGroup">233</div>
  </div>
</template>

<script>
import mixin from '@/components/Charts/mixin.js'
export default {
  mixins: [
    mixin
  ],
  data () {
    return {
      // 宽高
      height: 0,
      width: 0,
      // 定时器
      intervalObj: null
    }
  },
  computed: {
    // 容器样式
    style () {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`
      }
    },
    // 数字容器样式
    styleNumGroup () {
      return {
        color: this.itemColor
      }
    }
  },
  mounted () {
    this.$emit('mounted')
  },
  methods: {
    // 请求数据 这个函数最后应该返回接口的数据
    getData () {
      return new Promise(async (resolve, reject) => {
        const res = await this.$http.post(this.url, {
          type: 1,
          ...this.ajaxData
        })
        resolve(res.data.list)
      })
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(async () => {
          console.log('Hello')
        })
    }
  }
}
</script>

<style lang="scss">
.chart-count-style-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  .title-group {
    margin-right: 20px;
    .title {
      margin: 0px;
      padding: 0px;
      font-size: 36px;
      line-height: 36px;
      margin-bottom: 5px;
    }
    .sub-title {
      margin: 0px;
      padding: 0px;
      font-size: 20px;
      line-height: 20px;
    }
  }
  .num-group {
    font-size: 70px;
    line-height: 70px;
  }
}
</style>
