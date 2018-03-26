<template>
  <div :style="style" class="chart-count-style-2">
    <p class="title" :style="styleTitle">{{titleText}}</p>
    <p class="num" :style="styleNum">
      <span ref="num"></span>
    </p>
    <p class="sub-title">
      <span>+</span>
      <span>67</span>
      <span>
        <img src="@/assets/image/arrow-up.svg">
        <img src="@/assets/image/arrow-down.svg">
      </span>
      <span>1.92</span>
      <span>%</span>
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
    titleColor: {type: String, required: false, default: '#FFF'},
    titleSize: {type: String, required: false, default: '24'},
    // 数字
    numSize: {type: String, required: false, default: '64'},
    numColor: {type: String, required: false, default: '#FFF'},
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
    styleTitle () {
      return {
        'color': this.titleColor,
        'fontSize': `${this.titleSize}px`,
        'lineHeight': `${this.titleSize}px`
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
        resolve(res.data.num)
      })
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(async () => {
          const data = await this.getData()
          this.countupObj = new this.CountUp(this.$refs.num, 0, data)
          this.countupObj.start()
          this.intervalObj = setInterval(async () => {
            this.countupObj.update(await this.getData())
          }, this.interval)
        })
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
  }
  .sub-title {
    img {
      height: 12px;
    }
  }
}
</style>
