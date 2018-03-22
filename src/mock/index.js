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
    return Mock.mock([
      {
        key: 'type1',
        label: 'TYPE1',
        data: [
          {name: 'A', value: '@natural(10, 300)'},
          {name: 'B', value: '@natural(10, 300)'},
          {name: 'C', value: '@natural(10, 300)'},
          {name: 'D', value: '@natural(10, 300)'},
          {name: 'E', value: '@natural(10, 300)'},
          {name: 'F', value: '@natural(10, 300)'},
          {name: 'G', value: '@natural(10, 300)'},
          {name: 'H', value: '@natural(10, 300)'}
        ]
      }
    ])
  }
})
