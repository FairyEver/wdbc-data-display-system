<template>
  <div class="maker" :style="style">
    <!-- 页面列表 -->
    <div class="left">
      <cdds-maker-page-list
        :pages="currentPages"
        :active="validPageActive"
        @select="handlePageListSelect"
        @add="handlePageListAdd">
      </cdds-maker-page-list>
    </div>
    <!-- 工具条 -->
    <div class="main-header">
      <Button class="header-btn" :type="autoSize ? 'default' : 'primary'" size="small" @click="handleSetScale(false)">
        1:1
      </Button>
      <Button class="header-btn" :type="autoSize ? 'primary' : 'default'" size="small" @click="handleSetScale(true)">
        适合窗口
      </Button>
    </div>
    <!-- 预览窗口 主要 -->
    <div ref="main" class="main" :class="{center: autoSize}">
      <div
        v-if="validPageActive === null"
        class="info-choose-page">
        请先选择一个页面
      </div>
      <div :style="viewerStyle">
        <!-- 加载一个视图 在使用的时候也是用这个组件 -->
        <cdds-viewer
          v-if="validPageActive !== null"
          :cell="stageCell"
          :width="stageWidth"
          :height="stageHeight"
          :page="currentPages[validPageActive]">
        </cdds-viewer>
      </div>
    </div>
    <!-- 右侧菜单 -->
    <div class="right">
      <Tabs v-if="validPageActive !== null">
        <TabPane label="页面">
          <cdds-page-setting
            :pages="currentPages"
            :active="validPageActive"
            @rename="handlePageRename"
            @delete="handlePageDelete">
          </cdds-page-setting>
        </TabPane>
        <TabPane label="组件">标签二的内容</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cdds-maker',
  components: {
    CddsMakerPageList: () => import('./components/pageList'),
    CddsViewer: () => import('../viewer'),
    CddsPageSetting: () => import('./components/pageSetting')
  },
  props: {
    // 整个编辑器的高度
    height: {
      type: String,
      required: false,
      default: '500px'
    },
    // 舞台设置
    stageCell: {
      type: Number,
      required: false,
      default: 0
    },
    stageHeight: {
      type: Number,
      required: false,
      default: 0
    },
    stageWidth: {
      type: Number,
      required: false,
      default: 0
    },
    // 页面设置
    pages: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data () {
    return {
      // 私有舞台设置
      currentStageCell: 0,
      currentStageHeight: 0,
      currentStageWidth: 0,
      // 私有页面设置
      currentPages: [],
      // 现在激活的页面
      pageActive: null,
      // 中间主要容器的尺寸
      mainWidth: 0,
      mainHeight: 0,
      // 自动缩放
      autoSize: true
    }
  },
  computed: {
    // 容器的样式
    style () {
      return {
        height: this.height
      }
    },
    // 有效的“现在激活的页面” 实际用的都是这个
    validPageActive () {
      if (this.pageActive === null || this.currentPages.length === 0) {
        return null
      } else {
        return this.pageActive < this.currentPages.length ? this.pageActive : this.currentPages.length - 1
      }
    },
    // 中间预览窗口的样式 主要是设置缩放
    viewerStyle () {
      if (this.autoSize) {
        const zoomWidth = this.mainWidth / (this.stageCell * this.stageWidth + 40)
        const zoomHeight = this.mainHeight / (this.stageCell * this.stageHeight + 40)
        return {
          zoom: zoomWidth > zoomHeight ? zoomHeight : zoomWidth
        }
      } else {
        return {
          zoom: 0.9
        }
      }
    }
  },
  mounted () {
    // 获取中间主要容器的尺寸
    this.getMainSize()
  },
  methods: {
    // 获取中间主要容器的尺寸
    getMainSize () {
      this.mainWidth = this.$refs.main.offsetWidth
      this.mainHeight = this.$refs.main.offsetHeight
    },
    // 外部参数变化了 更新内部值
    updateCurrent () {
      this.currentStageCell = this.stageCell
      this.currentStageHeight = this.stageHeight
      this.currentStageWidth = this.stageWidth
      this.currentPages = this.pages
    },
    // 接收用户的设置预览缩放设置
    handleSetScale (autoSize) {
      this.autoSize = autoSize
    },
    // 接收页面列表的选中事件
    handlePageListSelect (index) {
      this.pageActive = index
    },
    // 接收页面列表的新建页面事件
    handlePageListAdd ({type, name}) {
      this.currentPages.push({
        title: name,
        type
      })
      this.$Message.success('新建页面成功')
    },
    // 接收更改页面标题的事件
    handlePageRename (newName) {
      this.currentPages[this.validPageActive].title = newName
      this.$Message.success('修改页面标题成功')
    },
    // 接收删除页面的事件
    handlePageDelete () {
      this.currentPages.splice(this.validPageActive, 1)
      this.$Message.success('删除页面成功')
    }
  }
}
</script>

<style scoped>
.maker {
  position: relative;
}
/* 主要的左中右布局 */
.maker .left {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 200px;
  overflow: auto;
}
.maker .main-header {
  position: absolute;
  top: 0px;
  left: 200px;
  right: 300px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: 1px solid #dddee1;
  border-right: 1px solid #dddee1;
  border-bottom: 1px solid #dddee1;
}
.maker .main-header .header-btn {
  margin-left: 4px;
}
.maker .main {
  position: absolute;
  top: 30px;
  bottom: 0px;
  left: 200px;
  right: 300px;
  overflow: auto;
  border-left: 1px solid #dddee1;
  border-right: 1px solid #dddee1;
  background-color: #dddee1;
  /* padding: 10px; */
}
.maker .main.center {
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0px; */
}
.maker .right {
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  width: 300px;
  overflow: auto;
}
/* 请选择一个页面的提示 */
.info-choose-page {
  height: 30px;
  line-height: 30px;
  width: 200px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -15px;
  color: #333;
}
</style>
