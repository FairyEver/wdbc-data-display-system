<template>
  <div style="padding: 0px 10px 10px 10px;">
    <Form label-position="top">
      <FormItem label="重命名">
        <i-input v-model="rename">
          <Button slot="append" icon="checkmark" @click="$emit('rename', rename)">确定</Button>
        </i-input>
      </FormItem>
      <FormItem label="删除">
        <Button type="error" long @click="$emit('delete')">
          <Icon type="trash-a"></Icon>
          删除《{{activePageName}}》
        </Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  props: {
    // 所有的页面
    pages: {
      type: Array,
      required: false,
      default: () => []
    },
    // 当前激活的页面
    active: {
      type: Number,
      required: false,
      default: null
    }
  },
  data () {
    return {
      rename: ''
    }
  },
  computed: {
    // 返回现在激活页面的名称
    activePageName () {
      return this.pages[this.active].title
    }
  },
  watch: {
    // 当前页面改变的时候改变重命名输入框的值
    activePageName (value) {
      this.rename = value
    }
  },
  created () {
    // 改变重命名输入框的值
    this.rename = this.activePageName
  }
}
</script>
