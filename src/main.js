import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

import '@/components/Charts/register.js'

import '@/mock/index.js'

import color from '@/style/color.js'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.prototype.$color = color

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
