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
        <img class="img-fluid" :src="getImageUrl(urlName, 'png')" :alt="title" />
      </picture>
    </div>
    <div class="service__info">
      <h3 class="service__title">{{ title }}</h3>
      <p class="service__description">{{ description }}</p>
      <router-link class="service__details-btn" :to="{ name: id }">Подробней</router-link>
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
    flex: 0 0 250px;
    width: 250px;
    height: 250px;
    border-radius: 20px;
    overflow: hidden;
  }

  &__title {
    margin-bottom: 1.5rem;
  }

  &__description {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    margin-bottom: 2rem;
  }

  &__details-btn {
    position: absolute;
    bottom: 0;
    color: $myprimary;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    opacity: 0.7;
    @include myTransitionAll;
    &:hover {
      color: $mygreen-dark;
      opacity: 1;
    }
  }
}
</style>
