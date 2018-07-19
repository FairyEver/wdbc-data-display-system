<template>
  <div ref="chart" :style="styles"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: ['styles'],
  data () {
    return {
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
        legend: {
          data: ['白壳鸡蛋', '红壳鸡蛋', '粉壳鸡蛋', '玉米', '豆粕43', '淘汰鸡'],
          textStyle: {
            color: ['#ffffff'],
            fontSize: 20
          }
        },
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
        },
        series: [
          {
            name: '白壳鸡蛋',
            type: 'line',
            data: [3.1, 5, 7, 4.3, 4.26, 4.35, 4.33, 4.4, 3.55, 3.6, 3.4, 3.4, 3.5],
            showSymbol: false
          },
          {
            name: '红壳鸡蛋',
            type: 'line',
            data: [5.8, 5.5, 6.5, 4.5, 4.75, 5.1, 5, 5.03, 4.25, 4.25, 4.3, 4.3, 4.05],
            showSymbol: false
          },
          {
            name: '粉壳鸡蛋',
            type: 'line',
            data: [4.5, 6.5, 7, 5.8, 6, 6.5, 6.5, 6.6, 6.2, 5.2, 4.8, 4.8, 4.8],
            showSymbol: false
          },
          {
            name: '玉米',
            type: 'line',
            data: [2920, 3450, 3400, 2980, 2220, 2180, 2360, 2300, 2400, 2450, 3380, 2400, 2400],
            showSymbol: false
          },
          {
            name: '豆粕43',
            type: 'line',
            data: [3660, 3560, 4200, 4050, 3850, 3850, 3830, 3780, 3950, 4150, 3960, 3900, 3900],
            showSymbol: false
          },
          {
            name: '淘汰鸡',
            type: 'line',
            data: [6, 7.5, 8, 7.2, 7.2, 7.3, 6.8, 5.5, 5.8, 6, 6, 6.65, 5.8],
            showSymbol: false
          }
        ]
      }
    }
  },
  mounted () {
    this.chart = this.echarts.init(this.$refs.chart)
    this.chart.setOption(this.option)
  }
}
</script>
