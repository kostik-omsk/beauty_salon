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
  <section class="service">
    <p>{{ service }}</p>
  </section>
</template>

<style lang="scss" scoped></style>
