import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => { require(['@/components/layout-main'], resolve) },
      children: [
        {
          title: '布局演示1',
          path: 'screen/demo1',
          name: 'screen-demo1',
          component: resolve => { require(['@/page/screen/demo1'], resolve) }
        },
        {
          title: '布局演示2',
          path: 'screen/demo2',
          name: 'screen-demo2',
          component: resolve => { require(['@/page/screen/demo2'], resolve) }
        },
        {
          title: '布局演示3',
          path: 'screen/demo3',
          name: 'screen-demo3',
          component: resolve => { require(['@/page/screen/demo3'], resolve) }
        },
        {
          title: '折线图演示',
          path: 'screen/demo4',
          name: 'screen-demo4',
          component: resolve => { require(['@/page/screen/demo4'], resolve) }
        },
        {
          title: '饼图',
          path: 'screen/demo5',
          name: 'screen-demo5',
          component: resolve => { require(['@/page/screen/demo5'], resolve) }
        }
      ]
    }
  ]
})
