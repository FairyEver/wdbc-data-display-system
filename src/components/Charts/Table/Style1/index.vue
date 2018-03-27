<template>
  <div :style="style" class="chart-table-style-1">
    <div class="header">
      {{titleText}}
    </div>
  </div>
</template>

<script>
import mixin from '@/components/Charts/mixin.js'
export default {
  mixins: [
    mixin
  ],
  props: {
    // 标题
    titleText: {type: String, required: false, default: 'Chart'},
    titleColor: {type: String, required: false, default: '#FFF'},
    titleSize: {type: String, required: false, default: '36'},
    // 接口地址
    url: {type: String, required: false, default: 'x.mock'},
    // 发送请求的时候带的参数
    ajaxData: {type: Object, required: false, default: () => ({})},
    // 发送请求的间隔
    interval: {type: Number, required: false, default: 10000}
  },
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
    // 数字样式
    styleNum () {
      return {
        color: this.numColor,
        'fontSize': `${this.numSize}px`,
        'lineHeight': `${this.numSize}px`
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
        resolve(res.data)
      })
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(async () => {
          const data = await this.getData()
          // this.countupObj = new this.CountUp(this.$refs.num, 0, data)
          // this.countupObj.start()
          // this.intervalObj = setInterval(async () => {
          //   this.countupObj.update(await this.getData())
          // }, this.interval)
        })
    }
  }
}
</script>

<style lang="scss">
.chart-table-style-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  .title-group {
    width: 50%;
    margin-right: 20px;
    text-align: right;
    .title {
      margin: 0px;
      padding: 0px;
      margin-bottom: 5px;
    }
    .sub-title {
      margin: 0px;
      padding: 0px;
    }
  }
  .num-group {
    width: 50%;
  }
}
</style>
