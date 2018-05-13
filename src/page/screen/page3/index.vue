<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">智慧蛋鸡大数据平台 生产规模</p>
    </div>
    <!-- row -->
    <div class="flex-item flex-group row" style="height: 180px; padding: 5px; margin-top: -10px;">
      <div class="flex-item grow flex-group row">
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">年产蛋规模</div>
          <div class="flex-item grow cell-number">394</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">纯系</div>
          <div class="flex-item grow cell-number">60000</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">祖代</div>
          <div class="flex-item grow cell-number">380000</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">父母代</div>
          <div class="flex-item grow cell-number">3500000</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
      </div>
      <div class="flex-item grow flex-group row">
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">年孵化能力</div>
          <div class="flex-item grow cell-number">28000</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">孵化基地</div>
          <div class="flex-item grow cell-number">9</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">孵化厅</div>
          <div class="flex-item grow cell-number">14</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">单厅孵化能力</div>
          <div class="flex-item grow cell-number">2000</div>
          <div class="flex-item cell-unit">万套</div>
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
              <p class="page-3-card-content-number">530</p>
              <p class="page-3-card-content-unit">万人</p>
            </div>
          </div>
          <div class="flex-item grow" ref="box-line-base-sd-l-1-g">
            <ChartLineBaseStaticData
              ref="box-line-base-sd-l-1-g-c"
              :data="dataL1"
              title-text="历史趋势"
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
              <p class="page-3-card-content-number">97</p>
              <p class="page-3-card-content-unit">百分之</p>
            </div>
          </div>
          <div class="flex-item grow" ref="box-line-base-sd-l-2-g">
            <ChartLineBaseStaticData
              ref="box-line-base-sd-l-2-g-c"
              :data="dataL2"
              title-text="历史趋势"
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
              <p class="page-3-card-content-number">12</p>
              <p class="page-3-card-content-unit">百分之</p>
            </div>
          </div>
          <div class="flex-item grow" ref="box-line-base-sd-l-3-g">
            <ChartLineBaseStaticData
              ref="box-line-base-sd-l-3-g-c"
              :data="dataL3"
              title-text="历史趋势"
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
        <div class="flex-item grow hov" ref="box-map-style1-1-g" style="margin: 5px;">
          <ChartMapStyle1
            ref="box-map-style1-1-g-c"
            title-text="全国数据"
            @mounted="mountedChartNum++">
          </ChartMapStyle1>
        </div>
        <div class="flex-item flex-group row" style="height: 240px;">
          <div class="flex-item grow hov" style="margin: 5px;">
            <img class="page-3-image" :src="`/static/image/${String(areasActive)}-1.png`">
          </div>
          <div class="flex-item grow hov" style="margin: 5px;">
            <img class="page-3-image" :src="`/static/image/${String(areasActive)}-2.png`">
          </div>
          <div class="flex-item grow hov" style="margin: 5px;">
            <img class="page-3-image" :src="`/static/image/${String(areasActive)}-3.png`">
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
              <p class="page-3-card-content-number">530</p>
              <p class="page-3-card-content-unit">万人</p>
            </div>
          </div>
          <div class="flex-item grow" ref="box-line-base-sd-r-1-g">
            <ChartLineBaseStaticData
              ref="box-line-base-sd-r-1-g-c"
              :data="dataR1"
              title-text="历史趋势"
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
              <p class="page-3-card-content-number">530</p>
              <p class="page-3-card-content-unit">万人</p>
            </div>
          </div>
          <div class="flex-item grow" ref="box-line-base-sd-r-2-g">
            <ChartLineBaseStaticData
              ref="box-line-base-sd-r-2-g-c"
              :data="dataR2"
              title-text="历史趋势"
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
              <p class="page-3-card-content-number">530</p>
              <p class="page-3-card-content-unit">万人</p>
            </div>
          </div>
          <div class="flex-item grow" ref="box-line-base-sd-r-3-g">
            <ChartLineBaseStaticData
              ref="box-line-base-sd-r-3-g-c"
              :data="dataR3"
              title-text="历史趋势"
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
// import _get from 'lodash.get'
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
      dataL1: [
        {name: 'A', value: 20},
        {name: 'B', value: 10},
        {name: 'C', value: 30},
        {name: 'D', value: 40},
        {name: 'E', value: 20}
      ],
      dataL2: [
        {name: 'A', value: 10},
        {name: 'B', value: 20},
        {name: 'C', value: 60},
        {name: 'D', value: 50},
        {name: 'E', value: 60}
      ],
      dataL3: [
        {name: 'A', value: 20},
        {name: 'B', value: 10},
        {name: 'C', value: 40},
        {name: 'D', value: 10},
        {name: 'E', value: 30}
      ],
      dataR1: [
        {name: 'A', value: 10},
        {name: 'B', value: 20},
        {name: 'C', value: 10},
        {name: 'D', value: 50},
        {name: 'E', value: 30}
      ],
      dataR2: [
        {name: 'A', value: 20},
        {name: 'B', value: 10},
        {name: 'C', value: 30},
        {name: 'D', value: 50},
        {name: 'E', value: 20}
      ],
      dataR3: [
        {name: 'A', value: 30},
        {name: 'B', value: 10},
        {name: 'C', value: 20},
        {name: 'D', value: 50},
        {name: 'E', value: 30}
      ]
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
            this.$refs['box-map-style1-1-g-c'].activeMap(e)
            const temp = [
              {name: 'A', value: Math.round(Math.random() * 100)},
              {name: 'B', value: Math.round(Math.random() * 100)},
              {name: 'C', value: Math.round(Math.random() * 100)},
              {name: 'D', value: Math.round(Math.random() * 100)},
              {name: 'E', value: Math.round(Math.random() * 100)}
            ]
            this.areasActive = i
            this.dataL1 = temp
            this.dataL2 = temp
            this.dataL3 = temp
            this.dataR1 = temp
            this.dataR2 = temp
            this.dataR3 = temp
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
  font-size: 30px;
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
