<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">智慧蛋鸡大数据平台 生产规模</p>
    </div>
    <!-- row -->
    <div class="flex-item flex-group row" style="height: 160px; padding: 5px; margin-top: -10px;">
      <div class="flex-item grow flex-group row">
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">年产蛋规模</div>
          <div class="flex-item grow cell-number">445</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">纯系</div>
          <div class="flex-item grow cell-number">7</div>
          <div class="flex-item cell-unit">万只</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">祖代</div>
          <div class="flex-item grow cell-number">38</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">父母代</div>
          <div class="flex-item grow cell-number">400</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
      </div>
      <div class="flex-item grow flex-group row">
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">年孵化能力</div>
          <div class="flex-item grow cell-number">28000</div>
          <div class="flex-item cell-unit">万只</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">孵化基地</div>
          <div class="flex-item grow cell-number">9</div>
          <div class="flex-item cell-unit">个</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">孵化厅</div>
          <div class="flex-item grow cell-number">14</div>
          <div class="flex-item cell-unit">个</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">单厅孵化能力</div>
          <div class="flex-item grow cell-number">2000</div>
          <div class="flex-item cell-unit">万只</div>
        </div>
      </div>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- 左 -->
      <div class="flex-item flex-group col" style="width: 500px;">
        <div class="flex-item grow hov flex-group" style="margin: 5px;">
          <div class="flex-item flex-group col" style="width: 100px">
            <div class="flex-item page-3-card-title">
              <span>合格种</span>
              <span>蛋数量</span>
            </div>
            <div class="flex-item grow page-3-card-content">
              <p class="page-3-card-content-number" style="font-size: 16px">{{countL1}}</p>
              <p class="page-3-card-content-unit">单位：枚</p>
            </div>
          </div>
          <div class="flex-item grow" ref="box-line-base-sd-l-1-g">
            <ChartLineBaseStaticData
              ref="box-line-base-sd-l-1-g-c"
              :data="dataL1"
              grid-right="20"
              series-color="#11CDD9"
              :series-label-text-color="$color.bg"
              @mounted="mountedChartNum++">
            </ChartLineBaseStaticData>
          </div>
        </div>
        <div class="flex-item grow hov flex-group" style="margin: 5px;">
          <div class="flex-item flex-group col" style="width: 100px">
            <div class="flex-item page-3-card-title">
              <span>受精率</span>
            </div>
            <div class="flex-item grow page-3-card-content">
              <p class="page-3-card-content-number">{{countL2}}</p>
              <p class="page-3-card-content-unit">单位：%</p>
            </div>
          </div>
          <div class="flex-item grow" ref="box-line-base-sd-l-2-g">
            <ChartLineBaseStaticData
              ref="box-line-base-sd-l-2-g-c"
              :data="dataL2"
              grid-right="20"
              series-color="#11CDD9"
              :series-label-text-color="$color.bg"
              @mounted="mountedChartNum++">
            </ChartLineBaseStaticData>
          </div>
        </div>
        <div class="flex-item grow hov flex-group" style="margin: 5px;">
          <div class="flex-item flex-group col" style="width: 100px">
            <div class="flex-item page-3-card-title">
              <span>产蛋率</span>
            </div>
            <div class="flex-item grow page-3-card-content">
              <p class="page-3-card-content-number">{{countL3}}</p>
              <p class="page-3-card-content-unit">单位：%</p>
            </div>
          </div>
          <div class="flex-item grow" ref="box-line-base-sd-l-3-g">
            <ChartLineBaseStaticData
              ref="box-line-base-sd-l-3-g-c"
              :data="dataL3"
              grid-right="20"
              series-color="#11CDD9"
              :series-label-text-color="$color.bg"
              @mounted="mountedChartNum++">
            </ChartLineBaseStaticData>
          </div>
        </div>
      </div>
      <!-- 中 -->
      <div class="flex-item grow flex-group col">
        <div class="flex-item grow hov" ref="box-map-style3-1-g" style="margin: 5px;">
          <ChartMapStyle3
            ref="box-map-style3-1-g-c"
            title-text="生产基地全国分布"
            @mounted="mountedChartNum++">
          </ChartMapStyle3>
        </div>
        <div class="flex-item flex-group row" style="height: 229px;">
          <div class="flex-item grow hov" style="margin: 5px;">
            <img class="page-3-image" :src="`${path}/static/image/${String(areasActive)}-1.png`">
          </div>
          <div class="flex-item grow hov" style="margin: 5px;">
            <img class="page-3-image" :src="`${path}/static/image/${String(areasActive)}-2.png`">
          </div>
          <div class="flex-item grow hov" style="margin: 5px;">
            <img class="page-3-image" :src="`${path}/static/image/${String(areasActive)}-3.png`">
          </div>
        </div>
      </div>
      <!-- 右 -->
      <div class="flex-item flex-group col" style="width: 500px;">
        <div class="flex-item grow hov flex-group" style="margin: 5px;">
          <div class="flex-item flex-group col" style="width: 100px">
            <div class="flex-item page-3-card-title">
              <span>健母雏</span>
              <span>数量</span>
            </div>
            <div class="flex-item grow page-3-card-content">
              <p class="page-3-card-content-number">{{countR1}}</p>
              <p class="page-3-card-content-unit">单位：只</p>
            </div>
          </div>
          <div class="flex-item grow" ref="box-line-base-sd-r-1-g">
            <ChartLineBaseStaticData
              ref="box-line-base-sd-r-1-g-c"
              :data="dataR1"
              grid-right="20"
              series-color="#11CDD9"
              :series-label-text-color="$color.bg"
              @mounted="mountedChartNum++">
            </ChartLineBaseStaticData>
          </div>
        </div>
        <div class="flex-item grow hov flex-group" style="margin: 5px;">
          <div class="flex-item flex-group col" style="width: 100px">
            <div class="flex-item page-3-card-title">
              <span>孵化率</span>
            </div>
            <div class="flex-item grow page-3-card-content">
              <p class="page-3-card-content-number">{{countR2}}</p>
              <p class="page-3-card-content-unit">单位：%</p>
            </div>
          </div>
          <div class="flex-item grow" ref="box-line-base-sd-r-2-g">
            <ChartLineBaseStaticData
              ref="box-line-base-sd-r-2-g-c"
              :data="dataR2"
              grid-right="20"
              series-color="#11CDD9"
              :series-label-text-color="$color.bg"
              @mounted="mountedChartNum++">
            </ChartLineBaseStaticData>
          </div>
        </div>
        <div class="flex-item grow hov flex-group" style="margin: 5px;">
          <div class="flex-item flex-group col" style="width: 100px">
            <div class="flex-item page-3-card-title">
              <span>蛋雏比</span>
            </div>
            <div class="flex-item grow page-3-card-content">
              <p class="page-3-card-content-number">{{countR3}}</p>
              <p class="page-3-card-content-unit"></p>
            </div>
          </div>
          <div class="flex-item grow" ref="box-line-base-sd-r-3-g">
            <ChartLineBaseStaticData
              ref="box-line-base-sd-r-3-g-c"
              :data="dataR3"
              grid-right="20"
              series-color="#11CDD9"
              :series-label-text-color="$color.bg"
              @mounted="mountedChartNum++">
            </ChartLineBaseStaticData>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'
import _last from 'lodash.last'
import dataSide from './data.json'
const dev = process.env.NODE_ENV === 'development'
export default {
  mixins: [
    mixin
  ],
  data () {
    return {
      useMixinAutoInit: false,
      areasActive: 0,
      areas: [
        '北京市',
        '湖北省',
        '江苏省',
        '山东省',
        '云南省'
      ],
      countL1: 0,
      countL2: 0,
      countL3: 0,
      countR1: 0,
      countR2: 0,
      countR3: 0,
      dataL1: [],
      dataL2: [],
      dataL3: [],
      dataR1: [],
      dataR2: [],
      dataR3: []
    }
  },
  computed: {
    path () {
      if (dev) {
        return ''
      } else {
        return '/b'
      }
    }
  },
  methods: {
    init2 () {
      // 初始化图表
      this.init()
        .then(() => {
          this.start()
        })
    },
    round () {
      this.areas.reduce((p, e, i) => {
        return p.then(() => {
          return new Promise(resolve => {
            // 更新中间的地图
            this.$refs['box-map-style3-1-g-c'].activeMap(e)
            this.areasActive = i
            this.dataL1 = dataSide.all[i][0]
            this.dataL2 = dataSide.all[i][1]
            this.dataL3 = dataSide.all[i][2]
            this.dataR1 = dataSide.all[i][3]
            this.dataR2 = dataSide.all[i][4]
            this.dataR3 = dataSide.all[i][5]
            //
            this.countL1 = _last(dataSide.all[i][0]).value
            this.countL2 = _last(dataSide.all[i][1]).value
            this.countL3 = _last(dataSide.all[i][2]).value
            this.countR1 = _last(dataSide.all[i][3]).value
            this.countR2 = _last(dataSide.all[i][4]).value
            this.countR3 = _last(dataSide.all[i][5]).value
            //
            this.$nextTick(() => {
              this.$refs['box-line-base-sd-l-1-g-c'].refresh()
              this.$refs['box-line-base-sd-l-2-g-c'].refresh()
              this.$refs['box-line-base-sd-l-3-g-c'].refresh()
              this.$refs['box-line-base-sd-r-1-g-c'].refresh()
              this.$refs['box-line-base-sd-r-2-g-c'].refresh()
              this.$refs['box-line-base-sd-r-3-g-c'].refresh()
            })
            setTimeout(resolve, 3000)
          })
        })
      }, Promise.resolve())
        .then(() => {
          this.round()
        })
    },
    start () {
      this.round()
    }
  }
}
</script>

<style lang="scss">
.cell-title {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 30px;
  color: '#FFF';
  font-weight: bold;
}
.cell-unit {
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
  color: '#FFF';
  margin-bottom: 10px;
}
.cell-number {
  color: #F39656;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-3-image {
  border-radius: 2px;
}
.page-3-card-title {
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-weight: bold;
    font-size: 24px;
  }
}
.page-3-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: rgba(#000, 0.2);
  border-radius: 4px;
}
.page-3-card-content-number {
  font-size: 26px;
  text-align: center;
  margin: 0px;
  padding: 0px;
}
.page-3-card-content-unit {
  text-align: center;
  margin: 0px;
  padding: 0px;
}
</style>
