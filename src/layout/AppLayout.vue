<script setup lang="ts">
import AppHeader from './ui/Header/AppHeader.vue'
import AppFooter from './ui/Footer/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main class="container-fluid"><RouterView /></main>
  <AppFooter />
</template>

<style scoped></style>
