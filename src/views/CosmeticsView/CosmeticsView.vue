<template>
  <section class="cosmetics my-5">
    <div class="container">
      <div class="intro">
        <h1 class="intro__title mt-5">Откройте для себя мир профессиональной косметики</h1>
      </div>
      <ScrollGallery />
    </div>
  </section>
</template>

<script lang="ts" setup>
import ScrollGallery from './ui/ScrollGallery.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';

.intro {
  padding: 5rem 0;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  &__title {
    font-size: $font-size-xxxl;
    @media only screen and (max-width: 768px) {
      font-size: $font-size-xxl;
    }
    @media only screen and (max-width: 576px) {
      font-size: $font-size-xl;
    }
  }
}
</style>
