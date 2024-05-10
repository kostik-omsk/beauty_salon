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
@import '@/assets/style/mixins.scss';
.breadcrumb__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media screen and (min-width: 576px) {
    flex-wrap: nowrap;
    & li + li::before {
      color: gray;
      content: '> ';
      padding: 0 5px;
    }
  }
}

.breadcrumb__item {
  list-style: none;

  @media screen and (max-width: 576px) {
    padding: 0.2rem 1rem;
    background: $mygreen-300;
    border-radius: 1rem;
  }
}

.breadcrumb__link {
  color: black;
  @include myTransitionAll;

  @media (hover: hover) {
    &:hover {
      color: $mygreen-dark;
    }
  }
}

.breadcrumb__text {
  color: gray;
}
</style>
