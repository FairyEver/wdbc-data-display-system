<template>
  <div :style="stageStyle" class="stage">
    <!-- 网格布局 -->
    <template v-if="page.type === 'grid'">
      <grid-layout v-bind="grid">
      <grid-item v-for="(item, index) in grid.layout" :key="index" v-bind="item">
        [{{item.i}}]
      </grid-item>
    </grid-layout>
    </template>
    <!-- 自由布局 -->
    <template v-if="page.type === 'free'">
      自由布局 还没做
      {{page}}
    </template>
  </div>
</template>

<script>
import {GridLayout, GridItem} from 'vue-grid-layout'
import clone from '../lib/clone'
export default {
  name: 'cdds-viewer',
  components: {
    GridLayout,
    GridItem
  },
  props: {
    // 舞台 单位尺寸
    cell: {
      type: Number,
      required: false,
      default: 1
    },
    // 舞台 宽度
    width: {
      type: Number,
      required: false,
      default: 192
    },
    // 舞台 高度
    height: {
      type: Number,
      required: false,
      default: 108
    },
    // 页面数据
    page: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data () {
    return {
      // type = grid 时生效
      grid: {
        isDraggable: true,
        isResizable: true,
        isMirrored: false,
        verticalCompact: true,
        margin: [0, 0],
        useCssTransforms: false,
        // 从外部获取值
        layout: [],
        colNum: 0,
        rowHeight: 0
      }
    }
  },
  computed: {
    // 舞台样式 主要是设置尺寸
    stageStyle () {
      return {
        width: this.cell * this.width + 'px',
        height: this.cell * this.height + 'px'
      }
    }
  },
  created () {
    this.propToCurrent()
  },
  methods: {
    // 将数据从参数复制到本地
    propToCurrent () {
      this.grid.colNum = this.page.gridColNum
      this.grid.rowHeight = this.page.gridRowHeight
      this.grid.layout = clone(this.page.gridLayout)
    }
  }
}
</script>

<style scoped>
.stage {
  background-color: #FFF;
}
</style>
