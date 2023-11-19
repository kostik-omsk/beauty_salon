<template>
  <div class="wrapper">
    <video loop muted autoplay class="video">
      <source :src="`${urlVideo}`" type="video/mp4" />
      <source src="video/plane.webm" type="video/webm" />
    </video>
  </div>
</template>

<script setup lang="ts">
const urlVideo = new URL('@/assets/cosmetic_video.mp4', import.meta.url)
</script>

<style lang="scss" scoped>
.wrapper {
  flex: 0 0 33%;
  max-width: 450px;
  overflow: hidden;
}
.video {
  width: 100%;
  border-radius: 1rem;
}
</style>
