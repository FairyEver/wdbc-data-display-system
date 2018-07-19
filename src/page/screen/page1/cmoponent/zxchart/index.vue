<template>
  <div class="pag">
    <div ref="chart" :style="styles">
    </div>
    <p class="btns">
      <button v-for="(item, index) in titleName" :key="index" :class="index == btnShow ? 'active':' '" @click="btnClick(item,index)">{{item}}</button>
    </p>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: ['styles'],
  data () {
    return {
      btnShow: 0,
      titleName: ['红壳鸡蛋', '粉壳鸡蛋', '白壳鸡蛋', '玉米', '豆粕', '淘汰鸡'],
      echarts,
      option: {
        title: {
          text: '全国价格信息',
          textStyle: {
            color: ['#ffffff'],
            fontSize: 30
          },
          y: 0,
          x: 10
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          backgroundColor: ['#ffffff'],
          textStyle: {
            color: ['#003']
          }
        },
        grid: {
          left: '2%',
          right: '5%',
          bottom: '10%',
          containLabel: true
        },
        // legend: {
        //   data: ['白壳鸡蛋', '红壳鸡蛋', '粉壳鸡蛋', '玉米', '豆粕43', '淘汰鸡'],
        //   textStyle: {
        //     color: ['#ffffff'],
        //     fontSize: 20
        //   }
        // },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 20,
            end: 80,
            handleColor: 'yellow'
          },
          {
            type: 'inside',
            realtime: true,
            start: 20,
            end: 80
          }
        ],
        xAxis: {
          data: [
            '2017年7月',
            '2017年8月',
            '2017年9月',
            '2017年10月',
            '2017年11月',
            '2017年12月',
            '2018年1月',
            '2018年2月',
            '2018年3月',
            '2018年4月',
            '2018年5月',
            '2018年6月',
            '2018年7月'
          ],
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#ffffff'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#ffffff'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          }
        }
      }
    }
  },
  computed: {
    series () {
      return [
        {
          name: '红壳鸡蛋',
          type: 'line',
          data: [5.8, 5.5, 6.5, 4.5, 4.75, 5.1, 5, 5.03, 4.25, 4.25, 4.3, 4.3, 4.05],
          showSymbol: true
        },
        {
          name: '粉壳鸡蛋',
          type: 'line',
          data: [4.5, 6.5, 7, 5.8, 6, 6.5, 6.5, 6.6, 6.2, 5.2, 4.8, 4.8, 4.8],
          showSymbol: true
        },
        {
          name: '白壳鸡蛋',
          type: 'line',
          data: [3.1, 5, 7, 4.3, 4.26, 4.35, 4.33, 4.4, 3.55, 3.6, 3.4, 3.4, 3.5],
          showSymbol: true
        },
        {
          name: '玉米',
          type: 'line',
          data: [2920, 3450, 3400, 2980, 2220, 2180, 2360, 2300, 2400, 2450, 3380, 2400, 2400],
          showSymbol: true
        },
        {
          name: '豆粕',
          type: 'line',
          data: [3660, 3560, 4200, 4050, 3850, 3850, 3830, 3780, 3950, 4150, 3960, 3900, 3900],
          showSymbol: true
        },
        {
          name: '淘汰鸡',
          type: 'line',
          data: [6, 7.5, 8, 7.2, 7.2, 7.3, 6.8, 5.5, 5.8, 6, 6, 6.65, 5.8],
          showSymbol: true
        }
      ]
    }
  },
  mounted () {
    this.chart = this.echarts.init(this.$refs.chart)
    this.init()
  },
  methods: {
    btnClick (name, index) {
      let series = []
      series = this.series.filter(e => e.name === name)
      this.btnShow = index
      this.init(series)
    },
    init (series = this.series.filter((e, i) => i === 0)) {
      const option = {}
      series[0].lineStyle = {
        color: '#00FFFF',
        width: 3
      }
      series[0].symbol = 'circle'
      series[0].symbolSize = 6
      series[0].itemStyle = {
        color: '#00FFFF'
      }
      series[0].label = {
        normal: {
          show: true,
          position: 'top',
          distance: '5',
          color: '#000',
          backgroundColor: '#00EEEE',
          padding: [3, 6],
          borderRadius: 2,
          fontSize: 16
        }
      }
      series[0].areaStyle = {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#00FFFF'
          }, {
            offset: 1,
            color: '#04243E'
          }])
        }
      }
      for (let attr in this.option) {
        option[attr] = this.option[attr]
      }
      this.option.yAxis.min = this.minnum(series[0].data)
      option.series = series
      this.chart.setOption(option)
    },
    minnum (data = []) {
      let min = data.sort((a, b) => a - b)[0]
      min > 1000 ? min = 2000 : min = Math.floor(min)
      return min
    }
  }
}
</script>
<style>
  .pag{
    position: relative;
  }
  .btns{
    padding: 0;
    margin: 0;
    position: absolute;
    top: 5px;
    text-align: center;
    width: 100%;
  }
  .btns button{
    margin: 0 5px;
    display: inline-block;
    outline: none;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font: 14px/100% Arial, Helvetica, sans-serif;
    padding: .5em 2em .55em;
    text-shadow: 0 1px 1px rgba(0,0,0,.3);
    -webkit-border-radius: .5em;
    -moz-border-radius: .5em;
    border-radius: .5em;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
    -moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
    background: #ccc;
  }
  .btns button:hover{
    border: 1px solid #fff;
  }
  .btns .active{
    background: #fff;
  }
</style>
