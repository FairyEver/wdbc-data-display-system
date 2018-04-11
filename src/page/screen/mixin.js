export default {
  data () {
    return {
      useMixinAutoInit: true,
      boxs: [],
      mountedChartNum: 0,
      needMountedChartNum: 0
    }
  },
  mounted () {
    // 注册有多少个图表容器
    for (const name in this.$refs) {
      if (/^box-[a-zA-Z0-9-]+-g$/.test(name)) {
        this.needMountedChartNum++
      }
    }
  },
  watch: {
    // 监视已经完成初始化的图表数量
    mountedChartNum (num) {
      if (num === this.needMountedChartNum) {
        if (this.useMixinAutoInit) {
          this.init()
        } else {
          this.init2()
        }
      }
    }
  },
  methods: {
    // 初始化
    init () {
      return new Promise((resolve, reject) => {
        for (const name in this.$refs) {
          if (/^box-[a-zA-Z0-9-]+-g$/.test(name)) {
            const chart = this.$refs[`${name}-c`]
            if (!chart) {
              return
            }
            if (!chart.init) {
              return
            }
            chart.init({
              height: this.$refs[name].offsetHeight,
              width: this.$refs[name].offsetWidth
            })
          }
        }
        resolve()
      })
    }
  }
}
