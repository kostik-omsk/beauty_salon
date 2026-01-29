<script setup lang="ts">
import AppHeader from './ui/Header/AppHeader.vue'
import AppFooter from './ui/Footer/AppFooter.vue'
import CookieBanner from '@/components/CookieBanner/CookieBanner.vue'
</script>

<template>
  <AppHeader />
  <main><RouterView /></main>
  <AppFooter />
  <CookieBanner />
</template>

<style scoped></style>
