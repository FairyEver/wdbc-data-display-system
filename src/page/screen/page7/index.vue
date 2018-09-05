<template>
  <div class="iframe">
    <iframe
      src="http://210.12.220.212:8099/UpLoad/ykshow/Apps/Sandcastle/pages/1/index.html"
      frameborder="0"
      height="1080"
      width="1920">
    </iframe>
  </div>
</template>

<script>
export default {
  mounted () {
    setTimeout(() => {
      this.$emit('ok')
    }, 3000)
  }
}
</script>

