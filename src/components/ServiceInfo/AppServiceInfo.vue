<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useServicesStore } from '@/stores/ListServices'

import getImageUrl from '@/utils/getImagesUrl'
import AppPriceList from './ui/AppPriceList.vue'
import AppInfoList from './ui/AppInfoList.vue'
import AppForm from '../Form/AppForm.vue'

const route = useRoute()
const services = useServicesStore()
const { getServiceById } = services

let service = ref(getServiceById(route.name as string))

watch(route, () => {
  service.value = getServiceById(route.name as string)
})
</script>

<template>
  <div class="service__content" v-if="service">
    <div class="service__info">
      <div class="service__img">
        <picture>
          <source :srcset="getImageUrl(service.urlName, 'webp')" type="image/webp" />
          <img :src="getImageUrl(service.urlName, 'png')" :alt="service.title" />
        </picture>
      </div>
      <p class="service__description">{{ service.description }}</p>
    </div>
    <AppPriceList v-if="service.priceList" :priceList="service.priceList" :title="service.title" />
    <AppForm class="mt-5" />
    <div class="service__list-info mt-5">
      <AppInfoList v-if="service.preparation" :list="service.preparation" title="Подготовка" />
      <AppInfoList v-if="service.contraindications" :list="service.contraindications" title="Противопоказания*" />
      <AppInfoList
        v-if="service.recommendations"
        :list="service.recommendations"
        title="Рекомендации после процедуры"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';
.service__info {
  padding: 1.5rem;
  overflow: hidden;
  border-radius: 1rem;
  @include myBorder;
  @include boxShadow;
}
.service__img {
  float: left;
  width: 250px;
  margin-right: 1rem;
  border-radius: 1rem;
  overflow: hidden;

  @media screen and (max-width: 576px) {
    float: none;
    width: 300px;
    margin: 0 auto 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.service__description {
  margin-top: 0;
  font-size: $font-size-base;
}

.service__list-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
