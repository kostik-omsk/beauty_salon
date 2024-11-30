<script setup lang="ts">
import getImageUrl from '@/utils/getImagesUrl'

const props = defineProps(['service'])
const { id, title, description, urlName } = props.service
</script>

<template>
  <div class="services__item service">
    <div class="service__img">
      <picture>
        <source :srcset="getImageUrl(urlName, 'webp')" type="image/webp" />
        <img :src="getImageUrl(urlName, 'png')" :alt="title" loading="lazy" width="250" height="250" />
      </picture>
    </div>
    <div class="service__info">
      <div class="service__text">
        <h3 class="service__title">{{ title }}</h3>
        <p class="service__description">{{ description }}</p>
      </div>
      <div class="service__btn">
        <router-link class="service__details-btn" :to="{ name: id }">
          <p>Подробнее</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </router-link>
        <!-- <router-link class="btn primary-btn" :to="{ path: '/', hash: '#form' }">Записаться</router-link> -->
        <a class="btn primary-btn" href="https://dikidi.ru/#widget=173285">Записаться</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';
.service {
  position: relative;
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }

  &__img {
    flex-shrink: 0;
    width: 250px;
    height: 250px;
    border-radius: 20px;
    overflow: hidden;

    @media only screen and (max-width: 992px) {
      width: 400px;
      height: 280px;
    }

    @media only screen and (max-width: 576px) {
      width: 100%;
      height: 280px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    margin-bottom: clamp(0.8rem, 2.5vw, 1.5rem);
  }

  &__description {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    margin-bottom: 2.5rem;
  }

  &__btn {
    display: flex;
    gap: 1.5rem;
  }
}
</style>
