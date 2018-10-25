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
      now: 0,
      pageList: [
        'screen-page7',
        'screen-page9',
        'screen-page8',
        'screen-page2',
        'screen-page4',
        'screen-page6',
        'screen-page1'
      ],
      pageDelay: [
        40,
        8,
        10,
        13,
        8,
        5,
        10
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
      // 检查当前是第几个
      this.now = this.pageList.findIndex(e => e === this.$route.name)
      if (this.now === undefined) {
        this.now = 0
      }
      // 循环播放
      const startNext = () => {
        let next = this.now + 1
        if (next >= this.pageList.length) {
          next = 0
        }
        console.log(`${this.pageDelay[this.now]}秒后切换到${this.pageList[next]}`)
        setTimeout(() => {
          this.$router.push({
            name: this.pageList[next]
          })
          this.now = next
          startNext()
        }, this.pageDelay[this.now] * 1000)
      }
      startNext()
    }
  }
}
</script>

<style lang="scss">
@import '~@/style/index.scss';
</style>
