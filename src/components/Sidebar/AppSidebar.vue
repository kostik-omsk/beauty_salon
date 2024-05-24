<template>
  <div class="sidebar">
    <div class="sidebar__list">
      <div
        class="sidebar__item"
        :class="{ 'sidebar__link-active': isActiveLink(name) }"
        v-for="({ name, title }, index) in menu"
        :key="index"
      >
        <router-link class="sidebar__link" :class="{ 'sidebar__link-active': isActiveLink(name) }" :to="{ name: name }">
          {{ title }}
        </router-link>

        <template v-if="menu[index].subMenuService && isActiveLink(name)">
          <router-link
            class="sidebar__link sidebar__link-sub-menu"
            :class="{ 'sidebar__link-sub-menu-active': isActiveLink(subMenuService.name) }"
            :to="{ name: subMenuService.name }"
            v-for="subMenuService in menu[index].subMenuService"
            :key="subMenuService.name"
          >
            {{ subMenuService.title }}
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useListMenuStore } from '@/stores/ListMenu'

const menuStore = useListMenuStore()
const { getMenuServices } = storeToRefs(menuStore)
const menu = getMenuServices

const route = useRoute()

function isActiveLink(name: string) {
  return route.name === name || route.fullPath.includes(`/${name}`)
}
</script>

<style scoped lang="scss">
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';
.sidebar {
  position: sticky;
  top: 1rem;
}

.sidebar__item {
  padding-left: 0.8rem;
  border-left: 3px solid rgba(0, 0, 0, 0);
  border-radius: 0 1rem 1rem 0;
  @include myTransitionAll;
  cursor: pointer;
  &:hover {
    border-left: 3px solid $mygreen;
    background-color: $myprimary;
    border-radius: 0 1rem 1rem 0;
    .sidebar__link {
      color: $secondary;
    }
  }

  &.sidebar__link-active {
    border-left: 3px solid $mygreen;
    background-color: $myprimary;
    border-radius: 0 1rem 1rem 0;

    .sidebar__link {
      color: $mygreen;
    }

    .sidebar__link-sub-menu {
      color: $secondary;
      padding-left: 1.5rem;

      &:hover {
        color: $mygreen;
      }
    }

    .sidebar__link-sub-menu-active {
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
