<template>
  <div class="wrapper">
    <video loop muted autoplay class="video">
      <source src="/assets/cosmetic_video.mp4" type="video/mp4" />
      <source src="/assets/cosmetic_video.webm" type="video/webm" />
    </video>
  </div>
</template>

<script setup lang="ts"></script>

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
