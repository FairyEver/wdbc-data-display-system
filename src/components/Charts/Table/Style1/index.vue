<template>
  <div :style="style" class="chart-table-style-1">
    <div class="header" :style="styleHeader">{{titleText}} {{date}}</div>
    <table class="table" :style="styleTable">
      <tr class="table-title">
        <th v-for="(item, index) in table.title" :key="index" style="padding: 0px;" :style="{width: index === 0 ? '300px' : 'auto'}">{{item}}</th>
      </tr>
      <tr class="table-row" :class="{'n2': index % 2 === 0}" v-for="(row, index) in table.rows" :key="`row${index}`">
        <td v-for="(col, colIndex) in row" :key="`col${colIndex}`" style="padding: 0px;">{{col}}</td>
      </tr>
    </table>
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
    titleSize: {type: String, required: false, default: '18'},
    titleHeight: {type: String, required: false, default: '40'},
    // 接口地址
    url: {type: String, required: false, default: 'x.mock'},
    // 发送请求的时候带的参数
    ajaxData: {type: Object, required: false, default: () => ({})},
    // 表格滚动时间间隔
    interval: {type: Number, required: false, default: 3000}
  },
  data () {
    return {
      // 宽高
      height: 0,
      width: 0,
      // 定时器
      intervalObj: null,
      // 表格数据 缓存区
      tableRows: [],
      tableRowStartIndex: 0,
      // 表格数据 这个数据是实际显示的
      table: {
        title: [],
        rows: []
      },
      // 当前日期
      date: ''
    }
  },
  computed: {
    // 容器样式
    style () {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`
      }
    },
    styleHeader () {
      return {
        color: `${this.titleColor}px`,
        fontSize: `${this.titleSize}px`,
        height: `${this.titleHeight}px`,
        lineHeight: `${this.titleHeight}px`,
        textAlign: 'center'
      }
    },
    styleTable () {
      return {
        height: `${this.height - Number(this.titleHeight)}px`
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
          type: 3,
          ...this.ajaxData
        })
        resolve(res.data)
      })
    },
    // 初始化
    init ({height, width}) {
      this.updateSize(height, width)
        .then(async () => {
          const data = this.transform(await this.getData())
          this.getDate()
          this.table.title = data.title
          this.tableRows = data.rows
          this.table.rows = await this.giveMeFive()
          this.intervalObj = setInterval(async () => {
            this.table.rows = await this.giveMeFive()
          }, this.interval)
        })
    },
    // 依次返回 tableRows 中的五个值
    async giveMeFive () {
      return new Promise(async (resolve, reject) => {
        if (this.tableRowStartIndex >= this.tableRows.length) {
          this.tableRowStartIndex = 0
          const data = this.transform(await this.getData())
          this.tableRows = data.rows
          this.getDate()
        }
        const five = this.tableRows.slice(this.tableRowStartIndex, this.tableRowStartIndex + 5)
        this.tableRowStartIndex += 5
        resolve(five)
      })
    },
    getDate () {
      var date = new Date()
      this.date = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0')
    }
  }
}
</script>

<style lang="scss">
.chart-table-style-1 {
  display: flex;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
  .header {
    background-color: rgba(#FFF, .1);
    margin: 0px 2px;
  }
  .table {
    height: 100%;
    width: 100%;
    text-align: center;
    thead {
      text-align: center;
    }
    .table-title {
      background-color: rgba(#FFF, .3);
    }
    .table-row {
      background-color: rgba(#FFF, 0.3);
      font-size: 14px;
      &.n2 {
        background-color: rgba(#FFF, .1);
      }
    }
  }
}
</style>
