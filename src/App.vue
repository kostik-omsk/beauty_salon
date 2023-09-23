<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/NavBar/AppNavbar.vue'
</script>

<template>
  <header>
    <AppNavbar />
  </header>

  <RouterView />
</template>

<style scoped></style>
