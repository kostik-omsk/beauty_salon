<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useServicesStore } from '@/stores/ListServices'

import getImageUrl from '@/utils/getImagesUrl'
import AppPriceList from './ui/AppPriceList.vue'
import AppInfoList from './ui/AppInfoList.vue'

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
      <template v-if="service.info">
        <div v-html="service.info"></div>
      </template>
      <template v-else>
        <p class="service__description">{{ service.description }}</p>
      </template>
      <div class="service__btn clear">
        <a class="btn primary-btn" href="https://dikidi.ru/#widget=173285">Записаться</a>
      </div>
    </div>

    <AppPriceList v-if="service.priceList" :priceList="service.priceList" :title="service.title" />
    <div class="service__list-info mt-5">
      <AppInfoList v-if="service.preparation" :list="service.preparation" title="Подготовка" />
      <AppInfoList v-if="service.contraindications" :list="service.contraindications" title="Противопоказания" />
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
  position: relative;
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
    max-width: 300px;
    margin: 0 auto 1rem;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.service__btn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1.5rem;
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
