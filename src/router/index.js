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
        // {
        //   title: '布局演示1',
        //   path: 'screen/demo1',
        //   name: 'screen-demo1',
        //   component: resolve => { require(['@/page/screen/demo/demo1'], resolve) }
        // },
        // {
        //   title: '布局演示2',
        //   path: 'screen/demo2',
        //   name: 'screen-demo2',
        //   component: resolve => { require(['@/page/screen/demo/demo2'], resolve) }
        // },
        // {
        //   title: '布局演示3',
        //   path: 'screen/demo3',
        //   name: 'screen-demo3',
        //   component: resolve => { require(['@/page/screen/demo/demo3'], resolve) }
        // },
        // {
        //   title: '折线图演示',
        //   path: 'screen/demo4',
        //   name: 'screen-demo4',
        //   component: resolve => { require(['@/page/screen/demo/demo4'], resolve) }
        // },
        // {
        //   title: '饼图',
        //   path: 'screen/demo5',
        //   name: 'screen-demo5',
        //   component: resolve => { require(['@/page/screen/demo/demo5'], resolve) }
        // },
        // {
        //   title: '多条折线图',
        //   path: 'screen/demo6',
        //   name: 'screen-demo6',
        //   component: resolve => { require(['@/page/screen/demo/demo6'], resolve) }
        // },
        // {
        //   title: '堆叠折线图',
        //   path: 'screen/demo7',
        //   name: 'screen-demo7',
        //   component: resolve => { require(['@/page/screen/demo/demo7'], resolve) }
        // },
        // {
        //   title: '雷达图1',
        //   path: 'screen/demo8',
        //   name: 'screen-demo8',
        //   component: resolve => { require(['@/page/screen/demo/demo8'], resolve) }
        // },
        {
          title: '页面1',
          path: 'screen/page1',
          name: 'screen-page1',
          component: resolve => { require(['@/page/screen/page1'], resolve) }
        },
        {
          title: '页面2',
          path: 'screen/page2',
          name: 'screen-page2',
          component: resolve => { require(['@/page/screen/page2'], resolve) }
        }
      ]
    }
  ]
})
