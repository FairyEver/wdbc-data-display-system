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
          path: 'screen/demo1',
          name: 'screen-demo1',
          component: resolve => { require(['@/page/screen/demo1'], resolve) }
        }
      ]
    }
  ]
})
