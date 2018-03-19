<template>
  <cdds-maker ref="maker" v-bind="maker"></cdds-maker>
</template>

<script>
import data from './data.js'
const {
  stage: {
    cell: stageCell,
    height: stageHeight,
    width: stageWidth
  },
  pages
} = data
export default {
  components: {
    CddsMaker: () => import('@/components/cdds/maker/index.vue')
  },
  data () {
    return {
      maker: {
        // 舞台设置
        stageCell: 0,
        stageHeight: 0,
        stageWidth: 0,
        // 页面信息
        pages: [],
        // 编辑器设置
        height: 'calc(100vh - 30px)'
      }
    }
  },
  mounted () {
    // 获取数据
    this.getData()
  },
  methods: {
    // 获取数据
    getData () {
      // 模拟数据请求赋值
      setTimeout(() => {
        this.maker.stageCell = stageCell
        this.maker.stageHeight = stageHeight
        this.maker.stageWidth = stageWidth
        this.maker.pages = pages
        // 更新编辑器数据
        this.$nextTick(this.$refs.maker.updateCurrent)
        // 显示提示
        this.$Message.success('载入数据成功')
      }, 1000)
    }
  }
}
</script>
