import Vue from 'vue'
import Router from 'vue-router'

// const dev = process.env.NODE_ENV === 'development'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => { require(['@/components/layout-main'], resolve) },
      children: [
        {
          title: '养殖基地分布',
          path: 'screen/page7',
          name: 'screen-page7',
          component: resolve => { require(['@/page/screen/page7'], resolve) }
        },
        // {
        //   title: '鸡舍环境监控',
        //   path: 'screen/page10',
        //   name: 'screen-page10',
        //   component: resolve => { require(['@/page/screen/page10'], resolve) }
        // },
        {
          title: '物流运输一',
          path: 'screen/page9',
          name: 'screen-page9',
          component: resolve => { require(['@/page/screen/page9'], resolve) }
        },
        {
          title: '物流运输二',
          path: 'screen/page8',
          name: 'screen-page8',
          component: resolve => { require(['@/page/screen/page8'], resolve) }
        },
        {
          title: '养殖户分布',
          path: 'screen/page2',
          name: 'screen-page2',
          component: resolve => { require(['@/page/screen/page2'], resolve) }
        },
        {
          title: '存栏信息',
          path: 'screen/page4',
          name: 'screen-page4',
          component: resolve => { require(['@/page/screen/page4'], resolve) }
        },
        {
          title: '电商交易',
          path: 'screen/page6',
          name: 'screen-page6',
          component: resolve => { require(['@/page/screen/page6'], resolve) }
        },
        {
          title: '市场行情',
          path: 'screen/page1',
          name: 'screen-page1',
          component: resolve => { require(['@/page/screen/page1'], resolve) }
        },
        {
          title: '坐堂兽医',
          path: 'screen/page5',
          name: 'screen-page5',
          component: resolve => { require(['@/page/screen/page5'], resolve) }
        }
      ]
    }
  ]
})
