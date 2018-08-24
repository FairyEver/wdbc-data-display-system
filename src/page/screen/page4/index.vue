<template>
  <layout
    :auto-play.sync="autoPlay"
    :data-nav="dataNav"
    :data-nav-active.sync="dataNavActive"
    :offset-size.sync="offsetSize"
    :layout-ready.sync="layoutReady"
    :h-item-l1="280"
    :h-item-r1="280">

    <template slot="title">智慧蛋鸡大数据平台 存栏信息</template>

    <template slot="l1">
      <bar
        name="全国产蛋鸡数量"
        :ready="layoutReady"
        :size="offsetSize.l1"
        :data="dataTop10"
        :color-title="colorTitle">
      </bar>
    </template>
    <template slot="l2">
      <pie
        name="全国产蛋鸡数量区间分布"
        :ready="layoutReady"
        :size="offsetSize.l2"
        :data="cunLanFenBu"
        :color-title="colorTitle">
      </pie>
    </template>
    <template slot="l3">
      <pie
        name="全国产蛋鸡品种占比"
        :ready="layoutReady"
        :size="offsetSize.l3"
        :data="pinZhongZhanBi"
        :color-title="colorTitle">
      </pie>
    </template>

    <template slot="c1">
      <map-x
        :name="mapTitle"
        :ready="layoutReady"
        :size="offsetSize.c1"
        :data="dataMapFilted"
        :auto-play.sync="autoPlay"
        @check="mapClick"
        @playRound="mapPlayRound">
      </map-x>
    </template>
    <template slot="c2">
      <number-x
        :data="mapInfo"
        :dw="['万吨', '万吨', '万只']"
        :size="offsetSize.c2">
      </number-x>
    </template>

    <template slot="r1">
      <cunlan-info
        :name="rName + rType + '产蛋鸡分布'"
        :ready="layoutReady"
        :size="offsetSize.r1"
        :value="r1Value"
        :info="r1Info"
        :map="pieceMapFilted"
        :province="rName"
        :color-title="colorTitle"
        :dw="'万只'">
      </cunlan-info>
    </template>
    <template slot="r2">
      <pie
        :name="rName + '产蛋鸡数量区间分布'"
        :ready="layoutReady"
        :size="offsetSize.r2"
        :data="r2Data"
        :color-title="colorTitle">
      </pie>
    </template>
    <template slot="r3">
      <pie
        :name="rName + '产蛋鸡品种占比'"
        :ready="layoutReady"
        :size="offsetSize.r3"
        :data="r3Data"
        :color-title="colorTitle">
      </pie>
    </template>

  </layout>
</template>

<script>
// [组件] 主布局
import layout from './components/layout/2/index'
import mapX from './components/charts/map/china/simple'
import numberX from './components/number/index'
import bar from './components/charts/bar/row'
import pie from './components/charts/pie/type1'
import cunlanInfo from './components/component/cunlan/cunlan'

// 下面是新的数据
import chanDanHouBei from './data/产蛋鸡数和后备鸡数'
import pinZhongChina from './data/全国品种.js'
import pinZhongPiece from './data/地区品种.js'
import cunLan from './data/全国存栏区间.js'
import cunLanInfoChina from './data/每种存栏的四项数据_全国.js'
import cunLanInfoPiece from './data/每种存栏的四项数据_地区.js'

export default {
  components: {
    layout,
    mapX,
    numberX,
    bar,
    pie,
    cunlanInfo
  },
  data () {
    return {
      // 新版数据
      chanDanHouBei,
      pinZhongChina,
      pinZhongPiece,
      cunLan,
      cunLanInfoChina,
      cunLanInfoPiece,
      // 自动播放
      autoPlay: false,
      // 布局尺寸
      offsetSize: {},
      layoutReady: false,
      // 颜色设置
      colorTitle: '#55EDDC',
      nav: [
        { label: '蛋鸡产蛋鸡数', value: 'page1' },
        { label: '养殖户分布', value: 'page2' },
        { label: '行情数据', value: 'page3' }
      ],
      // 数据导航栏
      dataNavActive: 'all',
      dataNav: [
        { label: '全部', value: 'all' },
        { label: '红壳蛋鸡', value: 'hong' },
        { label: '白壳蛋鸡', value: 'bai' },
        { label: '粉壳蛋鸡', value: 'fen' }
      ],
      // 右侧有所卡片共享的地区名称
      rName: '',
      // 每个地区的详细数据 r1
      r1Info: {
        cd: 0,
        hl: 0,
        tt: 0
      },
      r1Value: 0
    }
  },
  computed: {
    pinZhongZhanBi () {
      // 全国品种占比
      let builder = (name) => {
        let temp = 0
        this.pinZhongChina.forEach(e => { temp += Number(e[name]) })
        return temp
      }
      return [
        { name: '红壳蛋鸡', value: builder('hong') },
        { name: '粉壳蛋鸡', value: builder('fen') },
        { name: '白壳蛋鸡', value: builder('bai') }
      ]
    },
    cunLanFenBu () {
      // 全国产蛋鸡数区间分布
      let builder = (name) => {
        let temp = 0
        this.cunLan.forEach(e => { temp += Number(e[name]) })
        return temp
      }
      return [
        { name: '＜5000', value: builder('5000') },
        { name: '5000-10000', value: builder('5000-10000') },
        { name: '10000-50000', value: builder('10000-50000') },
        { name: '50000-10万', value: builder('50000-100000') },
        { name: '>10万', value: builder('100000') }
      ]
    },
    dataTop10 () {
      const pinZhongChina = this.pinZhongChina
      return pinZhongChina.sort((a, b) => Number(a.all) - Number(b.all)).slice(-10).map(e => ({name: e.name, value: e.all}))
    },
    pieceMapFilted () {
      // 右上角小地图的数据
      let data = this.pinZhongPiece.filter(e => e.name === this.rName)
      if (data.length > 0) {
        return data[0].value.map(e => {
          return {
            name: e.name,
            value: e[this.dataNavActive]
          }
        })
      } else {
        return []
      }
    },
    dataMapFilted () {
      // 地图数据 这个计算属性会传递给地图
      return this.pinZhongChina.map(e => {
        return {
          name: e.name,
          value: e[this.dataNavActive]
        }
      })
    },
    mapInfo () {
      // 产蛋 日耗料 淘汰鸡 疫苗 传递给中间下部分 根据地图右侧的控制器切换
      let data = this.cunLanInfoChina.filter(e => e.name === this.dataNavActive)[0]
      return [
        { label: '年产蛋', value: data.cd },
        { label: '年耗料', value: data.hl },
        { label: '年淘汰鸡', value: data.tt }
      ]
    },
    // 地图的标题
    mapTitle () {
      return `产蛋鸡数 ${this.chanDanHouBei[this.dataNavActive].cd}万只  后备鸡数 ${this.chanDanHouBei[this.dataNavActive].hb}万只`
    },
    rType () {
      // 右侧有所卡片共享的数据分类 比如'红壳蛋鸡'
      switch (this.dataNavActive) {
        case 'all':
          return '全部品种'
        case 'hong':
          return '红壳蛋鸡'
        case 'bai':
          return '白壳蛋鸡'
        case 'fen':
          return '粉壳蛋鸡'
        default:
          return ''
      }
    },
    r2Data () {
      // r2数据 地区的产蛋鸡数区间
      let data = cunLan.filter(e => e.name === this.rName)
      if (data.length > 0) {
        return [
          {name: '＜5000', value: data[0]['5000']},
          {name: '5000-10000', value: data[0]['5000-10000']},
          {name: '10000-50000', value: data[0]['10000-50000']},
          {name: '50000-10万', value: data[0]['50000-100000']},
          {name: '>10万', value: data[0]['100000']}
        ]
      } else {
        return []
      }
    },
    r3Data () {
      let data = pinZhongChina.filter(e => e.name === this.rName)
      if (data.length > 0) {
        return [
          {name: '红壳蛋鸡', value: data[0].hong},
          {name: '粉壳蛋鸡', value: data[0].fen},
          {name: '白壳蛋鸡', value: data[0].bai}
        ]
      } else {
        return []
      }
    }
  },
  watch: {
    dataNavActive (value) {
      // 数据导航的值发生变化
      this.refreshR1Data(this.pinZhongChina.filter(e => e.name === this.rName)[0][value])
    }
  },
  // mounted () {
  //   if (this.$route.params.autoPlay) {
  //     this.autoPlay = true
  //   }
  // },
  methods: {
    qian (n) {
      // 整型转字符串
      var number = Number(n)
      var str = number.toString()
      // 正则匹配
      var newstr = str.replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
        return s + ','
      })
      return newstr
    },
    refreshR1Data (value) {
      // 更新r1相关的数据
      let r1Data = this.cunLanInfoPiece.filter(e => (e.name === this.rName) && (e.type === this.dataNavActive))
      this.r1Value = value
      this.r1Info = {
        cd: r1Data[0].cd,
        hl: r1Data[0].hl,
        tt: r1Data[0].tt
      }
    },
    mapClick (params) {
      // 更新地图下面的数据
      if (params.data) {
        let data = params.data
        // r
        this.rName = data.name
        // r1
        this.refreshR1Data(data.value)
      } else {
        // r
        this.rName = ''
        // r1
        this.r1Info = {
          cd: 0,
          hl: 0,
          tt: 0,
          ym: 0
        }
        this.r1Value = 0
      }
    },
    mapPlayRound () {
      // 地图播放了一遍
      // 代码移植过来的 不需要做什么了
      // if (this.dataNavActive === 'all') {
      //   this.dataNavActive = 'hong'
      //   this.autoPlay = true
      // } else if (this.dataNavActive === 'hong') {
      //   this.dataNavActive = 'bai'
      //   this.autoPlay = true
      // } else if (this.dataNavActive === 'bai') {
      //   this.dataNavActive = 'fen'
      //   this.autoPlay = true
      // } else {
      //   this.$router.push({
      //     name: 'page2',
      //     params: {
      //       autoPlay: true
      //     }
      //   })
      // }
    }
  }
}
</script>
