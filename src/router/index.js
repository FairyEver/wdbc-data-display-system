import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => { require(['@/components/main/index.vue'], resolve) },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: resolve => { require(['@/page/dashboard/index.vue'], resolve) }
        }
      ]
    }
  ]
})
