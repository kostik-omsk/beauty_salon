<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useServicesStore } from '@/stores/ListServices'

import AppForm from '@/components/Form/AppForm.vue'
import SectionBlock from '@/components/SectionBlock/SectionBlock.vue'
import CardServicesVue from './ui/CardServices.vue'

const ListServices = useServicesStore()
const { listServices } = storeToRefs(ListServices)
</script>

<template>
  <SectionBlock class="services">
    <template #title>Наши услуги</template>
    <template #content>
      <div class="container">
        <div class="services__list">
          <CardServicesVue v-for="service in listServices" :key="service.id" :service="service" />
        </div>
        <AppForm class="my-5" id="form" />
      </div>
    </template>
  </SectionBlock>
</template>

<style lang="scss" scoped></style>
