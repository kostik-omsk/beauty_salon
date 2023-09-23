<script lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useListMenu } from '@/stores/ListMenu'

export default {
  name: 'AppNavbarListMenuDrop',
  props: ['menu'],
  setup(props) {
    const menuStore = useListMenu()
    const { isOpen } = storeToRefs(menuStore)

    const isFolder = computed(() => {
      return props.menu.subMenu !== undefined
    })
    const toggle = () => {
      if (isFolder.value) {
        menuStore.toggleMenu()
      }
    }
    const close = () => {
      menuStore.closeMenu()
    }

    return { isOpen, isFolder, toggle, close }
  }
}
</script>

<template>
  <li v-if="isFolder" @click="toggle">
    <span class="item-menu">{{ menu.title }}</span>
    <ul class="sub-menu" v-show="isOpen">
      <AppNavbarListMenuDrop v-for="dropMenu in menu.subMenu" :key="dropMenu.name" :menu="dropMenu" @click="toggle" />
    </ul>
  </li>
  <template v-else>
    <li>
      <span class="item-menu" @click="close">{{ menu.title }}</span>
    </li>
  </template>
</template>
<style lang="scss" scoped>
.sub-menu {
  padding-left: 20px;
}
</style>
