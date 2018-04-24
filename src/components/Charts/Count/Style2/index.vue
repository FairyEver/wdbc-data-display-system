<template>
  <div :style="style" class="chart-count-style-2">
    <p v-if="symbol" class="title" :style="styleTitle">{{titleText}}</p>
    <p class="num" :style="styleNum">
      <span ref="num"></span>
    </p>
    <p class="sub-title" :style="styleSubTitle">
      <span v-if="symbol !== '='">{{symbol}}</span>
      <span v-show="symbol !== '='" ref="num2"></span>
      <span v-if="symbol === '='">持平</span>
      <span>
        <img v-if="symbol === '+'" src="@/assets/image/arrow-up.svg">
        <img v-if="symbol === '-'" src="@/assets/image/arrow-down.svg">
      </span>
      <span v-show="symbol !== '='" ref="num3"></span>
      <span v-show="symbol !== '='">%</span>
    </p>
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
    titleSize: {type: String, required: false, default: '24'},
    subtitleSize: {type: String, required: false, default: '18'},
    // 数字
    numSize: {type: String, required: false, default: '64'},
    // 接口地址
    url: {type: String, required: false, default: 'x.mock'},
    // 发送请求的时候带的参数
    ajaxData: {type: Object, required: false, default: () => ({})},
    // 发送请求的间隔
    interval: {type: Number, required: false, default: 30 * 60 * 1000}
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
      // 符号 true + | false -
      symbol: ''
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
    styleTitle () {
      return {
        'color': this.titleColor,
        'fontSize': `${this.titleSize}px`,
        'lineHeight': `${this.titleSize}px`
      }
    },
    styleSubTitle () {
      return {
        'fontSize': `${this.subTitleSize}px`,
        'lineHeight': `${this.subTitleSize}px`,
        'color': this.color
      }
    },
    // 数字样式
    styleNum () {
      return {
        'color': this.color,
        'fontSize': `${this.numSize}px`,
        'lineHeight': `${this.numSize}px`
      }
    },
    // 颜色
    color () {
      switch (this.symbol) {
        case '+':
          return this.$color.red
        case '-':
          return this.$color.green
        default:
          return '#FFF'
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
          const data = this.transform(await this.getData())
          if (data.num2 === 0) {
            this.symbol = '='
          } else if (data.num2 > 0) {
            this.symbol = '+'
          } else {
            this.symbol = '-'
          }
          this.countupObj = new this.CountUp(this.$refs.num, 0, data.num, 0, 2, {useGrouping: false})
          this.countupObj2 = new this.CountUp(this.$refs.num2, 0, Math.abs(data.num2))
          this.countupObj3 = new this.CountUp(this.$refs.num3, 0, data.num3, 2)
          this.countupObj.start()
          this.countupObj2.start()
          this.countupObj3.start()
          if (this.interval !== 0) {
            this.intervalObj = setInterval(this.refresh, this.interval)
          }
        })
    },
    async refresh () {
      const data = this.transform(await this.getData())
      if (data.num2 === 0) {
        this.symbol = '='
      } else if (data.num2 > 0) {
        this.symbol = '+'
      } else {
        this.symbol = '-'
      }
      this.countupObj.update(data.num)
      this.countupObj2.update(Math.abs(data.num2))
      this.countupObj3.update(data.num3, 2)
    }
  }
}
</script>

<style lang="scss">
.chart-count-style-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
  p {
    margin: 0px;
    padding: 0px;
  }
  .title {
    font-size: 20px;
  }
  .num {
    font-size: 40px;
    margin: 10px 0px;
    font-weight: bold;
  }
  .sub-title {
    img {
      height: 18px;
    }
  }
}
</style>
