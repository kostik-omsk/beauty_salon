<template>
  <section class="service">
    <h3 class="service__title mb-4">{{ titleView }}</h3>
    <div class="service__content" v-if="currentService">
      <ServiceСategories :services="currentService" />
    </div>
    <template v-else>
      <router-view v-slot="{ Component }">
        <AppServiceInfo :is="Component" />
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
const { getServiceById } = ListServices
const route = useRoute()

let titleView = ref(route.meta.breadcrumb)
let currentService = ref(getServiceById(route.name as string)?.subMenuService)

watch(route, () => {
  titleView.value = route.meta.breadcrumb
  currentService.value = getServiceById(route.name as string)?.subMenuService
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
</style>
