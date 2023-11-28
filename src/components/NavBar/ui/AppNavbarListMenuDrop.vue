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
    const submenuStyle = computed(() => ({
      'submenu-open': isOpen.value,
      'submenu-closed': !isOpen.value
    }))

    const toggle = () => {
      if (isFolder.value) {
        menuStore.toggleMenu()
      }
    }
    const close = () => {
      menuStore.closeMenu()
    }

    return { isOpen, isFolder, toggle, close, submenuStyle }
  }
}
</script>

<template>
  <li v-if="isFolder" @click="toggle">
    <span class="item-menu">{{ menu.title }}</span>
    <ul class="sub-menu" :class="submenuStyle">
      <AppNavbarListMenuDrop v-for="dropMenu in menu.subMenu" :key="dropMenu.name" :menu="dropMenu" @click="toggle" />
    </ul>
  </li>
  <template v-else>
    <li>
      <router-link :to="menu.name" class="item-menu" @click="close">{{ menu.title }}</router-link>
    </li>
  </template>
</template>
<style lang="scss" scoped>
.sub-menu {
  padding-left: 20px;
  overflow: hidden;
  transition: height 0.3s ease;
}
.submenu-open {
  height: 178px;
  @media (max-width: 500px) {
    height: 172px;
  } /* Установить высоту блока в 100px, когда isOpen === true */
}
.submenu-closed {
  height: 0; /* Установить высоту блока в 0px, когда isOpen === false */
}
</style>
