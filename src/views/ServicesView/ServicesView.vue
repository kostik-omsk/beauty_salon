<template>
  <div class="container mt-4">
    <Breadcrumb />
    <div class="services" :class="{ 'services-sidebar-off': isServices }">
      <aside v-if="showSidebar" class="menu-scroll">
        <Sidebar />
      </aside>
      <template v-if="isServices">
        <ServiceСategories />
      </template>
      <template v-else>
        <router-view v-slot="{ Component }">
          <transition name="service">
            <component :is="Component" />
          </transition>
        </router-view>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed, ref, onMounted, onUnmounted } from 'vue'

import Sidebar from '@/components/Sidebar/AppSidebar.vue'
import Breadcrumb from '@/components/Breadcrumb/AppBreadcrumb.vue'
import ServiceСategories from '@/components/ServiceСategories/AppServiceСategories.vue'

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

.service {
  height: 200vh;
}

.service-enter-active {
  transition: opacity 0.5s ease;
}

.service-enter-from {
  opacity: 0;
}
</style>
