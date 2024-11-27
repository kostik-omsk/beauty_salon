<script lang="ts">
import { computed, inject, ref, nextTick } from 'vue'
import { storeToRefs } from 'pinia'
import { useListMenuStore } from '@/stores/ListMenu'
import { useRouter } from 'vue-router'
import gsap from 'gsap'

export default {
  name: 'AppNavbarListMenuDrop',
  props: ['menu'],

  setup(props) {
    const menuStore = useListMenuStore()
    const { isOpen } = storeToRefs(menuStore)
    const router = useRouter()
    const aniMenu = inject('aniMenu') as gsap.core.Timeline

    const isFolder = computed(() => props.menu.subMenu !== undefined)
    const subMenuRef = ref<HTMLElement | null>(null)

    const toggle = () => {
      if (isFolder.value) {
        if (isOpen.value) {
          gsap.to(subMenuRef.value, { height: 0, duration: 0.5, ease: 'power1.inOut' })
        } else {
          nextTick(() => {
            const scrollHeight = subMenuRef.value?.scrollHeight || 0
            gsap.to(subMenuRef.value, { height: scrollHeight, duration: 0.5, ease: 'power1.inOut' })
          })
        }
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

    return { isOpen, isFolder, toggle, close, subMenuRef }
  }
}
</script>

<template>
  <li v-if="isFolder" @click="toggle">
    <span class="item-menu">{{ menu.title }}</span>
    <ul class="sub-menu" ref="subMenuRef">
      <AppNavbarListMenuDrop
        v-for="(dropMenu, index) in menu.subMenu"
        :key="dropMenu.name + '_' + index"
        :menu="dropMenu"
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
  height: 0;
  @include myTransitionAll;
}
</style>
