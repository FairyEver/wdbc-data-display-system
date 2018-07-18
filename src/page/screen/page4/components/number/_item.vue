<template>
  <div class="item" :style="itemStyle">
    <template v-if="type === 1">
      <p class="text label" :style="styleLabel">
        <span v-if="point" :style="styleBG"></span>
        {{label}}
      </p>
      <p class="text value" :style="styleValue" ref="count"></p>
      <p class="text label" :style="styleLabel">{{dw}}</p>
    </template>
    <template v-if="type === 2">
      <pie
        :data="value"
        :size="sizePie"
        :color-dark="'#0C1019'"
        :color-light="color">
      </pie>
      <p class="text label" :style="styleLabel">
        {{label}}
      </p>
    </template>
  </div>
</template>

<script>
import Counter from 'countup.js'
import pie from '../charts/pie/type2'
export default {
  components: {
    pie
  },
  props: {
    type: { default: 1 },
    label: { default: 'label' },
    value: { default: null },
    dw: { default: '' },
    color: { default: 'red' },
    // 额外设置项
    point: { default: false },
    labelSize: { default: 14 },
    valueSize: { default: 42 },
    minWidth: { default: 160 },
    // pie
    sizePie: {
      default: () => {
        return {
          height: 80,
          width: 80
        }
      }
    }
  },
  data () {
    return {
      counterObj: null
    }
  },
  watch: {
    value (value) {
      if (this.counterObj !== null) {
        this.counterObj.update(value)
      }
    }
  },
  computed: {
    itemStyle () {
      // 最外层的容器样式
      return {
        minWidth: this.minWidth + 'px'
      }
    },
    style () {
      return {
        color: this.color
      }
    },
    styleBG () {
      return {
        backgroundColor: this.color
      }
    },
    styleLabel () {
      // label样式
      return {
        ...this.style,
        fontSize: this.labelSize + 'px',
        lineHeight: this.labelSize + 6 + 'px'
      }
    },
    styleValue () {
      // value样式
      return {
        ...this.style,
        fontSize: this.valueSize + 'px',
        lineHeight: this.valueSize + 6 + 'px'
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (this.type === 1) {
        var options = {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.'
        }
        this.counterObj = new Counter(this.$refs.count, 0, this.value, 0, 1, options)
        this.counterObj.start()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item{
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .text{
    padding: 0px;
    margin: 0px;
    span{
      display: inline-block;
      height: 10px;
      width: 10px;
      border-radius: 5px;
    }
    &.label{
      opacity: .6;
    }
  }
}
</style>
