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
          text: '玉米',
          textStyle: {
            color: ['red']
          },
          left: 'center'
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          backgroundColor: ['skyblue'],
          textStyle: {
            color: ['#003']
          }
        },
        legend: {
          data: ['销量']
        },
        dataZoom: [{
          show: true,
          realtime: true,
          start: 20,
          end: 80
        }, {
          type: 'inside',
          realtime: true,
          start: 20,
          end: 80
        }],
        xAxis: {
          data: ['0', '1', '2', '3', '4', '5'],
          boundaryGap: false
        },
        yAxis: {

        },
        series: [
          {
            name: '折线A',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20],
            showSymbol: false,
            markLine: { // 设置警戒线（图表标线）
              silent: true, // 图形是否不响应和触发鼠标事件
              lineStyle: {
                normal: {
                  type: 'solid'
                }
              },
              data: []
            }
          },
          {
            name: '折线B',
            type: 'line',
            data: [15, 22, 10, 30, 20, 40],
            showSymbol: false
          },
          {
            name: '折线C',
            type: 'line',
            data: [21, 14, 16, 21, 12, 16],
            showSymbol: false
          },
          {
            name: '折线D',
            type: 'line',
            data: [25, 8, 12, 30, 26, 22],
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
