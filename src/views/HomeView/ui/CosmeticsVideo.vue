<template>
  <video loop muted autoplay class="video">
    <source src="/assets/cosmetic_video.mp4" type="video/mp4" />
    <source src="/assets/cosmetic_video.webm" type="video/webm" />
  </video>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.video {
  width: 100%;
  border-radius: 1rem;
  aspect-ratio: 1 / 1;
}
</style>
