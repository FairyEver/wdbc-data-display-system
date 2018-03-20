import echarts from 'echarts'
export default {
  props: {
    // 标题
    titleText: {
      type: String,
      required: false,
      default: 'Chart'
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
    // 图表的颜色
    itemColor: {
      type: String,
      required: false,
      default: '#FFF'
    }
  },
  data () {
    return {
      echarts,
      chart: null
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
