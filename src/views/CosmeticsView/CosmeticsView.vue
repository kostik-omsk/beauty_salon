<template>
  <section class="cosmetics">
    <div class="container">
      <div class="intro">
        <h1 class="intro__title">Профессиональная косметика и индивидуальные комплексы ухода.</h1>
      </div>
      <ScrollGallery />
      <div class="record mb-5">
        <div class="record__head">
          <h2 class="record__title mb-5">Получите индивидуальные рекомендации по уходу за кожей!</h2>
        </div>
        <AppForm />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import AppForm from '@/components/Form/AppForm.vue'
import ScrollGallery from './ui/ScrollGallery.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';

.intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    padding: 2rem 0;
  }

  &__title {
    margin-top: 5rem;
    font-size: $font-size-xxxl;
    @media only screen and (max-width: 768px) {
      margin-top: 0rem;
      font-size: $font-size-xxl;
    }
    @media only screen and (max-width: 576px) {
      font-size: $font-size-xl;
    }
  }
}

.record {
  &__head {
    margin: 0 auto;
    max-width: 680px;
  }
  &__title {
    text-align: center;
  }
}
</style>
