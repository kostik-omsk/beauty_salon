<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useServicesStore } from '@/stores/ListServices'

import SectionBlock from '@/components/SectionBlock/SectionBlock.vue'
import CardServicesVue from './ui/CardServices.vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ListServices = useServicesStore()
const { listServices } = storeToRefs(ListServices)

interface CollectionElement extends HTMLElement {
  tl: gsap.core.Timeline
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  const services = gsap.utils.toArray('.services__item') as CollectionElement[]

  services.forEach((service) => {
    gsap.from(service, {
      scrollTrigger: {
        trigger: service,
        start: 'top bottom'
      },
      y: 200
    })
  })
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<template>
  <SectionBlock class="services">
    <template #title>Наши услуги</template>
    <template #content>
      <div class="container">
        <div class="services__list">
          <CardServicesVue v-for="service in listServices" :key="service.id" :service="service" />
        </div>
      </div>
    </template>
  </SectionBlock>
</template>

<style lang="scss" scoped></style>
