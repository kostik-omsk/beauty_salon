<script lang="ts">
import { computed, inject } from 'vue'
import { storeToRefs } from 'pinia'
import { useListMenuStore } from '@/stores/ListMenu'
import { useRouter } from 'vue-router'

export default {
  name: 'AppNavbarListMenuDrop',
  props: ['menu'],

  setup(props) {
    const menuStore = useListMenuStore()
    const { isOpen } = storeToRefs(menuStore)
    const router = useRouter()
    const aniMenu = inject('aniMenu') as gsap.core.Timeline

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

      if (props.menu.hash) {
        aniMenu.reverse().eventCallback('onReverseComplete', () => {
          router.push({ name: props.menu.name, hash: props.menu.hash })
        })
      } else if (router.currentRoute.value.name !== props.menu.name) {
        aniMenu.reverse().eventCallback('onReverseComplete', () => {
          router.push({ name: props.menu.name })
        })
      }
    }

    return { isOpen, isFolder, toggle, close, submenuStyle }
  }
}
</script>

<template>
  <li v-if="isFolder" @click="toggle">
    <span class="item-menu">{{ menu.title }}</span>
    <ul class="sub-menu" :class="submenuStyle">
      <AppNavbarListMenuDrop
        v-for="(dropMenu, index) in menu.subMenu"
        :key="dropMenu.name + '_' + index"
        :menu="dropMenu"
        @click="toggle"
      />
    </ul>
  </li>
  <template v-else>
    <li>
      <router-link :to="{ name: menu.name }" class="item-menu" @click="close">{{ menu.title }}</router-link>
    </li>
  </template>
</template>
<style lang="scss" scoped>
@import '@/assets/style/mixins.scss';
.sub-menu {
  padding-left: 20px;
  overflow: hidden;
  @include myTransitionAll;
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
