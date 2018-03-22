var Mock = require('mockjs')

Mock.mock(/\.mock/, ({url, type, body}) => {
  const bodyObj = JSON.parse(body)
  if (bodyObj.type === 1) {
    return Mock.mock({
      num: '@natural(100, 300)'
    })
  } else if (bodyObj.type === 2) {
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
    return Mock.mock({
      legend: ['类型1', '类型2', '类型3'],
      xAxis: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      series: [
        {
          name: '类型1',
          data: [
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)'
          ]
        }, {
          name: '类型2',
          data: [
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)'
          ]
        }, {
          name: '类型3',
          data: [
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)',
            '@natural(10, 300)'
          ]
        }
      ]
    })
  }
})
