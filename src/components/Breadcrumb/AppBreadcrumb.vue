<template>
  <nav class="breadcrumb">
    <ul class="breadcrumb__list">
      <li class="breadcrumb__item">
        <router-link class="breadcrumb__link" to="/">
          <i class="bi bi-house-heart-fill"></i>
        </router-link>
      </li>
      <template v-for="(crumb, index) in matchedCrumbs" :key="index">
        <li class="breadcrumb__item" v-if="index !== matchedCrumbs.length - 1">
          <router-link class="breadcrumb__link" :to="crumb.path">
            {{ crumb.meta.breadcrumb }}
          </router-link>
        </li>
        <li class="breadcrumb__item" v-else>
          <span class="breadcrumb__text">{{ crumb.meta.breadcrumb }}</span>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const matchedCrumbs = computed(() => {
  return route.matched.map(({ path, meta }) => ({
    path,
    meta
  }))
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';

.breadcrumb__list {
  display: flex;

  & li + li::before {
    color: gray;
    content: '> ';
    padding: 0 5px;
  }
}

.breadcrumb__link {
  color: black;
  transition: color 0.3s;
  &:hover {
    color: $mygreen-dark;
  }
}

.breadcrumb__text {
  color: gray;
}
</style>
