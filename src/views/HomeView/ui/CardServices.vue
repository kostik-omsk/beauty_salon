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
      <router-link class="service__details-btn" :to="{ name: id }">
        <p>Подробней</p>
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
    display: flex;
    font-weight: 600;
    font-size: 20px;
    gap: 0.5rem;
    align-items: center;
    bottom: 0;
    color: $myprimary;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    opacity: 0.8;
    @include myTransitionAll;

    &::after {
      position: absolute;
      content: '';
      width: 0;
      left: 0;
      bottom: -7px;
      background: $mygreen-dark;
      height: 2px;
      @include myTransitionAll;
    }
    & p {
      margin: 0;
      position: relative;
      font-size: 20px;
    }

    & p::before {
      position: absolute;
      content: 'Подробней';
      width: 0%;
      inset: 0;
      color: $mygreen-dark;
      overflow: hidden;
      @include myTransitionAll;
    }

    & svg {
      color: $myprimary;
      transition: 0.2s;
      position: relative;
      width: 15px;
      transition-delay: 0.2s;
    }

    &:hover svg {
      transform: translateX(4px);
      color: $mygreen-dark;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover p::before {
      width: 100%;
    }

    &:hover {
      color: $mygreen-dark;
      opacity: 1;
    }
  }
}
</style>
