<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useServicesStore } from '@/stores/ListServices'

import { ref, watch } from 'vue'
const route = useRoute()
const services = useServicesStore()
const { getServiceById } = services

let service = ref(getServiceById(route.name as string))

watch(route, () => {
  service.value = getServiceById(route.name as string)
})
</script>

<template>
  <div class="service__content">
    <p>{{ service }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
