<template>
  <div class="container-lg mb-5">
    <Breadcrumb />
    <div class="services" :class="{ 'services-sidebar-off': isServices }">
      <aside v-if="showSidebar" class="menu-scroll">
        <Sidebar />
      </aside>
      <template v-if="isServices">
        <ServiceСategories :services="listServices" />
      </template>
      <template v-else>
        <router-view v-slot="{ Component }">
          <ServiceView :is="Component" />
        </router-view>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useServicesStore } from '@/stores/ListServices'

import Sidebar from '@/components/Sidebar/AppSidebar.vue'
import Breadcrumb from '@/components/Breadcrumb/AppBreadcrumb.vue'
import ServiceСategories from '@/components/ServiceСategories/AppServiceСategories.vue'
import ServiceView from '../ServiceView/ServiceView.vue'

const ListServices = useServicesStore()
const { listServices } = storeToRefs(ListServices)

const route = useRoute()

const isDesktop = ref(window.innerWidth >= 1024)

const isServices = computed(() => {
  return route.name === 'services'
})

const showSidebar = computed(() => {
  return !isServices.value && isDesktop.value
})

const updateWindowWidth = () => {
  isDesktop.value = window.innerWidth >= 1024
}

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})
</script>

<style lang="scss" scoped>
.services {
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-areas: 'menu-scroll service';
  gap: 1.5rem;
  &.services-sidebar-off {
    grid-template-columns: auto;
    grid-template-areas: 'service';
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: auto;
    grid-template-areas: 'service';
  }
}
</style>
