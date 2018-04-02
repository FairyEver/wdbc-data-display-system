<template>
  <div :style="style" class="chart-count-style-3">
    <div class="row">
      <div class="col">
        <p>年{{titleText}}</p>
        <span ref="num" :style="{color: color1 || $color.cyan}"></span>
      </div>
      <div class="col">
        <p>月{{titleText}}</p>
        <span ref="num2" :style="{color: color2 || $color.green}"></span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p>周{{titleText}}</p>
        <span ref="num3" :style="{color: color3 || $color.orange}"></span>
      </div>
      <div class="col">
        <p>日{{titleText}}</p>
        <span ref="num4" :style="{color: color4 || $color.pink}"></span>
      </div>
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
    // 颜色
    color1: {type: String, required: false, default: ''},
    color2: {type: String, required: false, default: ''},
    color3: {type: String, required: false, default: ''},
    color4: {type: String, required: false, default: ''},
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
      intervalObj: null,
      // 数字动画对象
      countupObj: null,
      countupObj2: null,
      countupObj3: null,
      countupObj4: null
    }
  },
  computed: {
    // 容器样式
    style () {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`
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
          const [num, num2, num3, num4] = this.transform(await this.getData())
          this.countupObj = new this.CountUp(this.$refs.num, 0, num, 0, 2, {useGrouping: false})
          this.countupObj2 = new this.CountUp(this.$refs.num2, 0, num2, 0, 2, {useGrouping: false})
          this.countupObj3 = new this.CountUp(this.$refs.num3, 0, num3, 0, 2, {useGrouping: false})
          this.countupObj4 = new this.CountUp(this.$refs.num4, 0, num4, 0, 2, {useGrouping: false})
          this.countupObj.start()
          this.countupObj2.start()
          this.countupObj3.start()
          this.countupObj4.start()
          this.intervalObj = setInterval(async () => {
            const [num, num2, num3, num4] = this.transform(await this.getData())
            this.countupObj.update(num)
            this.countupObj2.update(num2)
            this.countupObj3.update(num3)
            this.countupObj4.update(num4)
          }, this.interval)
        })
    }
  }
}
</script>

<style lang="scss">
.chart-count-style-3 {
  display: flex;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
  .row {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    .col {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        margin: 0px;
        font-size: 20px;
      }
      span {
        font-size: 46px;
      }
    }
  }
}
</style>
