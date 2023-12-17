<template>
  <div class="sidebar">
    <div class="sidebar__list">
      <div
        class="sidebar__item"
        :class="{ 'sidebar__link-active': isActiveLink(name) }"
        v-for="({ name, title }, index) in menu"
        :key="index"
      >
        <router-link class="sidebar__link" :to="{ name: name }">
          {{ title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useListMenu } from '@/stores/ListMenu'

const menuStore = useListMenu()
const { getMenuServices } = storeToRefs(menuStore)
const menu = getMenuServices

const route = useRoute()

function isActiveLink(name: string) {
  return route.name === name || route.fullPath.includes(`/${name}`)
}
</script>

<style scoped lang="scss">
@import '@/assets/style/var.scss';
.sidebar {
  position: sticky;
  top: 1rem;
}

.sidebar__item {
  padding-left: 0.8rem;
  border-left: 3px solid rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    border-left: 3px solid $mygreen;
    background-color: $myprimary;
    .sidebar__link {
      color: $secondary;
    }
  }

  &.sidebar__link-active {
    border-left: 3px solid $mygreen;
    background-color: $myprimary;
    .sidebar__link {
      color: $mygreen;
    }
  }
}

.sidebar__link {
  display: inline-block;
  padding: 0.5rem 0;
  width: 100%;
  color: $myprimary;
  font-weight: 500;
}
</style>
