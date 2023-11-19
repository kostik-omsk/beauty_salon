<script setup lang="ts">
import type { Service } from '../data/listServices'
const props = defineProps(['service'])
const { title, description, urlName, path } = props.service as Service
</script>

<template>
  <div class="services__item service">
    <div class="service__img">
      <img class="img-fluid" :src="urlName" :alt="title" />
    </div>
    <div class="service__info">
      <h3 class="service__title">{{ title }}</h3>
      <p class="service__description">{{ description }}</p>
      <router-link class="primary-btn" :to="path">Подробней</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/var.scss';
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
}
</style>
