<script setup lang="ts">
import { useServicesStore } from '@/stores/ListServices'
import AppPriceList from '@/components/ServiceInfo/ui/AppPriceList.vue'
import getImageUrl from '@/utils/getImagesUrl'
const services = useServicesStore()
const { getFlattenedServices } = services
let service = getFlattenedServices
</script>

<template>
  <div class="container">
    <div class="price">
      <h1 class="price__title my-5">Цены на услуги</h1>
      <div class="price__item item" v-for="{ id, title, urlName, priceList } in service" :key="id">
        <div class="item__header">
          <div class="item__img">
            <picture>
              <source :srcset="getImageUrl(urlName, 'webp')" type="image/webp" />
              <img :src="getImageUrl(urlName, 'png')" :alt="title" loading="lazy" width="250" height="250" />
            </picture>
          </div>
          <div class="item__info">
            <h4 class="item__title">{{ title }}</h4>
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
          </div>
        </div>
        <AppPriceList class="mb-5 border-top-left" v-if="priceList" :priceList="priceList" :title="title" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';

.price {
  &__title {
    text-align: center;
  }
}

.item {
  &__header {
    position: relative;
    top: 1px;
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #eeeeee;

    border-radius: 1rem 1rem 0 0;
    padding: 1rem;
    border: 1px dashed $dark;
    border-bottom: 1px solid #eeeeee;
  }

  &__img {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    border-radius: 0.5rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

:global(.border-top-left) {
  border-radius: 0 0rem 1rem 1rem !important;
}
</style>
