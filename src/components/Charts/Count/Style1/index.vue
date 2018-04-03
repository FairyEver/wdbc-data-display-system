<template>
  <div :style="style" class="chart-count-style-1">
    <div class="title-group">
      <p class="title" :style="styleTitle">{{titleText}}</p>
      <p class="sub-title" :style="styleSubTitle">{{subTitleText}}</p>
    </div>
    <div class="num-group" :style="styleNum">
      <span ref="num"></span>
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
    subTitleText: {type: String, required: false, default: 'Chart'},
    subTitleColor: {type: String, required: false, default: '#FFF'},
    subtitleSize: {type: String, required: false, default: '18'},
    // 数字
    numSize: {type: String, required: false, default: '70'},
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
      intervalObj: null,
      // 数字动画对象
      countupObj: null
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
        'color': this.subTitleColor,
        'fontSize': `${this.subTitleSize}px`,
        'lineHeight': `${this.subTitleSize}px`
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
          const data = this.transform(await this.getData()).num
          this.countupObj = new this.CountUp(this.$refs.num, 0, data)
          this.countupObj.start()
          this.intervalObj = setInterval(async () => {
            this.countupObj.update(this.transform(await this.getData()).num)
          }, this.interval)
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
