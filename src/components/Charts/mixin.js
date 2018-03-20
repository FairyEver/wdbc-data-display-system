import echarts from 'echarts'
export default {
  props: {
    // 标题
    titleText: {type: String, required: false, default: 'Chart'}
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
