<template>
  <section class="service">
    <h3 class="service__title mb-4">{{ titleView }}</h3>
    <template v-if="currentService">
      <ServiceСategories :services="currentService" :key="route.path" />
    </template>
    <template v-else>
      <router-view v-slot="{ Component }">
        <AppServiceInfo :is="Component" :key="route.path" />
      </router-view>
    </template>
  </section>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useServicesStore } from '@/stores/ListServices'

import ServiceСategories from '@/components/ServiceСategories/AppServiceСategories.vue'
import AppServiceInfo from '@/components/ServiceInfo/AppServiceInfo.vue'

const ListServices = useServicesStore()
const { subMenuServiceData } = ListServices
const route = useRoute()

let titleView = ref(route.meta.breadcrumb)
const currentService = ref(subMenuServiceData(route.name as string))

watch(route, () => {
  titleView.value = route.meta.breadcrumb
  currentService.value = subMenuServiceData(route.name as string)
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
</style>
