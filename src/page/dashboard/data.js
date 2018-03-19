export default {
  stage: {
    cell: 10,
    height: 108,
    width: 192
  },
  pages: [
    {
      // 公用属性
      title: '第一个页面',
      type: 'grid',
      // type = grid 时生效
      gridColNum: 12,
      gridRowHeight: 10,
      gridLayout: [
        {'x': 0, 'y': 0, 'w': 2, 'h': 20, 'i': '0'},
        {'x': 2, 'y': 0, 'w': 2, 'h': 40, 'i': '1'},
        {'x': 4, 'y': 0, 'w': 2, 'h': 50, 'i': '2'},
        {'x': 6, 'y': 0, 'w': 2, 'h': 30, 'i': '3'},
        {'x': 8, 'y': 0, 'w': 2, 'h': 30, 'i': '4'}
      ]
    }
  ]
}
