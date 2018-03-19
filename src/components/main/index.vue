<template>
  <div>
    <div>
      <x-header></x-header>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    XHeader: () => import('./_Header.vue')
  }
}
</script>

<style scoped>
</style>
