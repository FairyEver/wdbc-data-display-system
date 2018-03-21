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
          title: '演示页面1',
          path: 'screen/demo1',
          name: 'screen-demo1',
          component: resolve => { require(['@/page/screen/demo1'], resolve) }
        },
        {
          title: '演示页面2',
          path: 'screen/demo2',
          name: 'screen-demo2',
          component: resolve => { require(['@/page/screen/demo2'], resolve) }
        },
        {
          title: '演示页面3',
          path: 'screen/demo3',
          name: 'screen-demo3',
          component: resolve => { require(['@/page/screen/demo3'], resolve) }
        }
      ]
    }
  ]
})
