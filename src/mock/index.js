var Mock = require('mockjs')

Mock.mock(/\.mock/, ({url, type, body}) => {
  const bodyObj = JSON.parse(body)
  if (bodyObj.type === 1) {
    return 100
  } else if (bodyObj.type === 2) {
    return Mock.mock({
      'list|10': [
        {name: '@first', value: '@natural(10, 100)'}
      ]
    })
  }
})
