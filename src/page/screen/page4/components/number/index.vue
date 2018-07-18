<template>
  <div class="body">
    <item
      v-for="(item, index) in data"
      :key="index"
      :type="type"
      :label="item.label"
      :dw="dw[index]"
      :value="item.value"
      :color="color[index]"
      :min-width="minWidth">
    </item>
  </div>
</template>

<script>
import item from './_item.vue'
export default {
  components: {
    item
  },
  props: {
    type: { default: 1 },
    color: {
      default: () => [
        '#E6E09F',
        '#90DEF5',
        '#4F9CE0'
      ]
    },
    data: {
      default: () => [
        { label: 'lable1', value: '0000' },
        { label: 'lable2', value: '0000' },
        { label: 'lable3', value: '0000' }
      ]
    },
    size: {
      default: () => null
    },
    // 单位
    dw: {
      default: () => [
        '单位1',
        '单位2',
        '单位3'
      ]
    }
  },
  computed: {
    minWidth () {
      if ((this.size === null) || (this.size.width === 0)) {
        return 100
      } else {
        return this.size.width / this.data.length
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.body{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
</style>
