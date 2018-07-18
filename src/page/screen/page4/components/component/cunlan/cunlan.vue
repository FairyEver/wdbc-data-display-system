<template>
  <div :style="style" class="body">
    <div class="title" :style="styleColor">{{name}} {{value}}{{dw}}</div>
    <div class="content">
      <div class="info" v-if="type === 1">
        <!-- 数字信息 -->
        <item
          label="年产蛋"
          :value="info.cd"
          :dw="'万吨'"
          color="#DB5F52"
          :point="point"
          :label-size="labelSize"
          :value-size="valueSize"
          :minWidth="60">
        </item>
        <item
          label="年耗料"
          :value="info.hl"
          :dw="'万吨'"
          color="#D69E41"
          :point="point"
          :label-size="labelSize"
          :value-size="valueSize"
          :minWidth="60">
        </item>
        <item
          label="年淘汰鸡"
          :value="info.tt"
          :dw="'万只'"
          color="#58BCA0"
          :point="point"
          :label-size="labelSize"
          :value-size="valueSize"
          :minWidth="60">
        </item>
        <!-- 数字信息 结束 -->
      </div>
      <div class="info" v-if="type === 2">
        <!-- 养殖户信息 -->
        <div class="type2item">
          <pie
            :data="info.hong"
            :size="sizePie"
            :color-dark="'#850C00'"
            :color-light="'#F26355'"
            :font-size="10"
            :radius="['70%', '80%']">
          </pie>
          <div class="type2title" :style="styleColor">红壳占比</div>
        </div>
        <div class="type2item">
          <pie
            :data="info.fen"
            :size="sizePie"
            :color-dark="'#005F3F'"
            :color-light="'#5AEBBA'"
            :font-size="10"
            :radius="['70%', '80%']">
          </pie>
          <div class="type2title" :style="styleColor">粉壳占比</div>
        </div>
        <div class="type2item">
          <pie
            :data="info.bai"
            :size="sizePie"
            :color-dark="'#806400'"
            :color-light="'#FFD848'"
            :font-size="10"
            :radius="['70%', '80%']">
          </pie>
          <div class="type2title" :style="styleColor">白壳占比</div>
        </div>
        <!-- 养殖户信息 结束 -->
      </div>
      <div class="map" ref="map">
        <map-x
          :name="name"
          :ready="ready"
          :size="{height:mapHeight, width:mapWidth}"
          :data="map"
          :map-type="mapType"
          :dw="dw">
        </map-x>
      </div>
    </div>
  </div>
</template>

<script>
import item from '../../number/_item'
import mapX from '../../charts/map/china/mini'
import pie from '../../charts/pie/type2'
export default {
  components: {
    item,
    mapX,
    pie
  },
  props: {
    name: { default: '' },
    data: { default: () => [] },
    size: {
      default: () => {
        return {
          height: 0,
          width: 0
        }
      }
    },
    type: { default: 1 },
    province: { default: '河北' },
    // 下面就不是地图相关的了
    value: { default: 0 },
    info: {
      default: () => {
        return {
          cd: 0,
          hl: 0,
          tt: 0,
          ym: 0
        }
      }
    },
    map: {
      default: () => []
    },
    // 样式设置
    colorTitle: { default: '#FFF' },
    dw: { default: '' },
    // 小饼图尺寸
    sizePie: {
      default: () => {
        return {
          height: 50,
          width: 50
        }
      }
    }
  },
  data () {
    return {
      point: false,
      labelSize: 12,
      valueSize: 24
    }
  },
  computed: {
    style () {
      // 最外层元素的样式
      return {
        width: this.size.width + 'px',
        height: this.size.height + 'px'
      }
    },
    styleColor () {
      return {
        color: this.colorTitle
      }
    },
    mapHeight () {
      if (this.size.height === 0) {
        return 0
      } else {
        return this.size.height - 30
      }
    },
    mapWidth () {
      if (this.size.width === 0) {
        return 0
      } else {
        return this.size.width - 110
      }
    },
    ready () {
      return !(this.mapType === null || this.mapHeight === 0 || this.mapWidth === 0)
    },
    mapType () {
      // 地图区域
      switch (this.province) {
        case '山东':
          return 'shandong'
        case '江苏':
          return 'jiangsu'
        case '河北':
          return 'hebei'
        case '湖北':
          return 'hubei'
        case '辽宁':
          return 'liaoning'
        default:
          return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$heightTitle: 30px;
$widthInfo: 110px;
.body{
  position: relative;
  .title{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: $heightTitle;
    line-height: $heightTitle;
    text-align: center;
    font-size: 14px;
  }
  .content{
    position: absolute;
    top: $heightTitle;
    bottom: 0px;
    width: 100%;
    .info{
      position: absolute;
      top: 0px;
      bottom: 0px;
      left: 0px;
      width: $widthInfo;
      // 居中
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      .type2item{
        .type2title{
          font-size: 10px;
        }
      }
    }
    .map{
      position: absolute;
      top: 0px;
      left: $widthInfo;
      right: 0px;
      bottom: 0px;
    }
  }
}
</style>
