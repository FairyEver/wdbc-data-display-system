<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      playing: false,
      playIndex: 0,
      pageList: [
        'screen-page2',
        'screen-page4',
        'screen-page1',
        'screen-page6'
      ]
    }
  },
  watch: {
    $route (val) {
      if (val.query) {
        if (val.query.play === '1') {
          this.play()
        }
      }
    }
  },
  methods: {
    play () {
      if (this.playing) {
        return
      }
      this.playing = true
      const delay = Number(this.$route.query.delay || 30000)
      this.playIndex = this.pageList.findIndex(e => e === this.$route.name)
      setInterval(() => {
        let next = this.playIndex + 1
        if (next === this.pageList.length) {
          next = 0
        }
        this.$router.push({
          name: this.pageList[next]
        })
        this.playIndex = next
      }, delay)
    }
  }
}
</script>

<style lang="scss">
@import '~@/style/index.scss';
</style>
