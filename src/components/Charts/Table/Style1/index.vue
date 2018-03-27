<template>
  <div :style="style" class="chart-table-style-1">
    <div class="header">{{titleText}}</div>
    <div class="table">
      <div class="table-title">
        <div v-for="(item, index) in table.title" :key="index">{{item}}</div>
      </div>
      <div class="table-row" v-for="(row, index) in table.rows" :key="`row${index}`">
        <div v-for="(col, colIndex) in row" :key="`col${colIndex}`">{{col}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '@/components/Charts/mixin.js'
export default {
  mixins: [
    mixin
  ],
  props: {
    // 标题
    titleText: {type: String, required: false, default: 'Chart'},
    titleColor: {type: String, required: false, default: '#FFF'},
    titleSize: {type: String, required: false, default: '36'},
    // 接口地址
    url: {type: String, required: false, default: 'x.mock'},
    // 发送请求的时候带的参数
    ajaxData: {type: Object, required: false, default: () => ({})},
    // 发送请求的间隔
    interval: {type: Number, required: false, default: 10000}
  },
  data () {
    return {
      // 宽高
      height: 0,
      width: 0,
      // 定时器
      intervalObj: null,
      table: {
        title: ['地址', '红壳蛋', '粉壳蛋', '白壳蛋', '玉米', '豆粕', '淘汰鸡'],
        rows: [
          ['地址1', 15, 15, 15, 15, 15, 15],
          ['地址2', 15, 15, 15, 15, 15, 15],
          ['地址3', 15, 15, 15, 15, 15, 15],
          ['地址4', 15, 15, 15, 15, 15, 15],
          ['地址5', 15, 15, 15, 15, 15, 15]
        ]
      }
    }
  },
  computed: {
    // 容器样式
    style () {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`
      }
    }
  },
  mounted () {
    this.$emit('mounted')
  },
  methods: {
    // 请求数据 这个函数最后应该返回接口的数据
    getData () {
      return new Promise(async (resolve, reject) => {
        const res = await this.$http.post(this.url, {
          type: 1,
          ...this.ajaxData
        })
        resolve(res.data)
      })
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(async () => {
          const data = await this.getData()
          console.log(data)
          // this.countupObj = new this.CountUp(this.$refs.num, 0, data)
          // this.countupObj.start()
          // this.intervalObj = setInterval(async () => {
          //   this.countupObj.update(await this.getData())
          // }, this.interval)
        })
    }
  }
}
</script>

<style lang="scss">
.chart-table-style-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
  .header {
  }
  .table {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .table-title {
      display: flex;
      flex-direction: row;
      div {
        flex-grow: 1;
        text-align: center;
      }
    }
    .table-row {
      display: flex;
      flex-direction: row;
      div {
        flex-grow: 1;
        text-align: center;
      }
    }
  }
}
</style>
