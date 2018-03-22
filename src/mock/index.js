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
      list: [
        {name: 'A3', value: '@natural(10, 300)'},
        {name: 'B3', value: '@natural(10, 300)'},
        {name: 'C3', value: '@natural(10, 300)'},
        {name: 'D3', value: '@natural(10, 300)'},
        {name: 'E3', value: '@natural(10, 300)'},
        {name: 'F3', value: '@natural(10, 300)'},
        {name: 'G3', value: '@natural(10, 300)'},
        {name: 'H3', value: '@natural(10, 300)'}
      ]
    })
  }
})
