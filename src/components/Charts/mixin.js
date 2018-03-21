import echarts from 'echarts'
import countup from 'countup.js'
export default {
  props: {
    // 标题
    titleText: {
      type: String,
      required: false,
      default: 'Chart'
    },
    subTitleText: {
      type: String,
      required: false,
      default: 'subTitleText'
    },
    // 接口地址
    url: {
      type: String,
      required: false,
      default: 'x.mock'
    },
    // 发送请求的时候带的参数
    ajaxData: {
      type: Object,
      required: false,
      default: () => ({})
    },
    // 发送请求的间隔
    interval: {
      type: Number,
      required: false,
      default: 3000
    },
    // 图表的颜色 主体颜色
    itemColor: {
      type: String,
      required: false,
      default: '#FFF'
    },
    // grid 设置
    gridTop: {
      type: String,
      required: false,
      default: '40'
    },
    gridBottom: {
      type: String,
      required: false,
      default: '30'
    },
    gridLeft: {
      type: String,
      required: false,
      default: '10%'
    },
    gridRight: {
      type: String,
      required: false,
      default: '5%'
    }
  },
  data () {
    return {
      // 库
      echarts,
      countup,
      // 图表对象
      chart: null,
      // 数字动画对象
      countupObj: null
    }
  },
  methods: {
    updateSize (height, width) {
      return new Promise((resolve, reject) => {
        this.height = height
        this.width = width
        this.$nextTick(resolve)
      })
    }
  }
}
