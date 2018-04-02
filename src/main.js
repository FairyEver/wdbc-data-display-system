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

Vue.prototype.$toRGB = (color, rgba = null) => {
  var sColor = color.toLowerCase()
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#'
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    var sColorChange = []
    for (var a = 1; a < 7; a += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(a, a + 2)))
    }
    if (rgba !== null) {
      return `rgba(${[...sColorChange, rgba].join(',')})`
    } else {
      return `rgb(${sColorChange.join(',')})`
    }
  }
  return sColor
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data () {
    return {
      isFullScreen: false,
      host: 'http://192.168.164.120:6080'
      // host: 'http://10.1.1.132:666'
    }
  },
  methods: {
    toggleFullScreen () {
      if (this.isFullScreen) {
        this.exitFullScreen()
      } else {
        this.fullScreen()
      }
    },
    // 全屏
    fullScreen () {
      var docElm = document.documentElement
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen()
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen()
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen()
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen()
      }
      this.isFullScreen = true
    },
    // 退出全屏
    exitFullScreen () {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      this.isFullScreen = false
    }
  }
})
