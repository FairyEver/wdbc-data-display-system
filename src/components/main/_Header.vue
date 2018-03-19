<template>
  <div class="header">
    <router-link
      v-for="(item, index) in link"
      :key="index"
      :to="{name: item.name}">
      {{item.title}}
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      link: [
        {name: 'dashboard', title: 'dashboard'}
      ]
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #000;
  height: 30px;
  line-height: 30px;
  padding: 0px 10px;
  font-size: 12px;
}
.header a {
  color: #CCC;
  text-decoration: none;
}
.header a:hover {
  color: #FFF;
}
</style>
