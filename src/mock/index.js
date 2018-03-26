var Mock = require('mockjs')

Mock.mock(/\.mock/, ({url, type, body}) => {
  const bodyObj = JSON.parse(body)
  if (bodyObj.type === 1) {
    // 简单一个数字的数据
    if (bodyObj.name === 'djzs' || bodyObj.name === 'cbzs' || bodyObj.name === 'ylzs') {
      return Mock.mock({
        num: '@natural(400, 500)',
        num2: '@natural(-99, 99)',
        num3: '@natural(1, 20)'
      })
    } else {
      return Mock.mock({
        num: '@natural(100, 300)'
      })
    }
  } else if (bodyObj.type === 2) {
    // 键值对数据
    return Mock.mock({
      list: [
        {name: 'A', value: '@natural(10, 300)'},
        {name: 'B', value: '@natural(10, 300)'},
        {name: 'C', value: '@natural(10, 300)'},
        {name: 'D', value: '@natural(10, 300)'},
        {name: 'E', value: '@natural(10, 300)'},
        {name: 'F', value: '@natural(10, 300)'},
        {name: 'G', value: '@natural(10, 300)'},
        {name: 'H', value: '@natural(10, 300)'}
      ]
    })
  } else if (bodyObj.type === 3) {
    // 多series数据
    if (bodyObj.name === 'bar-stack') {
      // 判断参数 层叠柱状图
      const all = Mock.mock({
        name: '所有采集点',
        data: ['@natural(20, 100)', '@natural(20, 100)', '@natural(20, 100)', '@natural(20, 100)', '@natural(20, 100)', '@natural(20, 100)', '@natural(20, 100)']
      })
      return Mock.mock({
        legend: ['今日活跃', '所有采集点'],
        yAxis: ['河北', '山东', '浙江', '辽宁', '山西', '广东', '黑龙江'],
        series: [
          all,
          {
            name: '今日活跃',
            data: all.data.map(e => e - 10)
          }
        ]
      })
    } else {
      // 判断参数 最基础的数据 多条折线图
      return Mock.mock({
        legend: ['类型1', '类型2', '类型3'],
        xAxis: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        series: [
          {
            name: '类型1',
            data: ['@natural(1, 100)', '@natural(1, 100)', '@natural(1, 100)', '@natural(1, 100)', '@natural(1, 100)', '@natural(1, 100)', '@natural(1, 100)']
          }, {
            name: '类型2',
            data: ['@natural(101, 200)', '@natural(101, 200)', '@natural(101, 200)', '@natural(101, 200)', '@natural(101, 200)', '@natural(101, 200)', '@natural(101, 200)']
          }, {
            name: '类型3',
            data: ['@natural(201, 300)', '@natural(201, 300)', '@natural(201, 300)', '@natural(201, 300)', '@natural(201, 300)', '@natural(201, 300)', '@natural(201, 300)']
          }
        ]
      })
    }
  }
})
