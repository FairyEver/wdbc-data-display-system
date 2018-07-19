<template>
  <div class="layout-main">
    <div class="layout-main__main">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <div v-if="dashboard" class="layout-main__dashboard">
      <div>
        <router-link
          class="link"
          v-for="(link, index) in links"
          :key="index"
          :to="{name: link.name}">
          {{link.title}}
        </router-link>
      </div>
    </div>
    <div v-if="!dashboard" class="layout-main__dashboard-btn" @click="dashboard = true">
      打开控制台
    </div>
    <div v-if="dashboard" class="layout-main__dashboard-btn light" @click="dashboard = false">
      关闭控制台
    </div>
  </div>
</template>

<script>
import routerSetting from '@/router/index.js'
export default {
  data () {
    return {
      routerSetting,
      dashboard: true
    }
  },
  computed: {
    links () {
      return this.routerSetting.options.routes[0].children.map(e => ({
        title: e.title,
        name: e.name
      }))
    }
  }
}
</script>
