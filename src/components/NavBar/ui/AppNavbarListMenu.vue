<script lang="ts">
import { storeToRefs } from 'pinia'
import { useListMenu } from '@/stores/ListMenu'
import AppNavbarListMenuDrop from './AppNavbarListMenuDrop.vue'

export default {
  name: 'AppNavbarListMenu',
  components: { AppNavbarListMenuDrop },
  emits: ['closeMenu'],
  setup() {
    const menuStore = useListMenu()
    const { listMenu, show } = storeToRefs(menuStore)
    const closeMenuMobile = () => {
      show.value = false
    }

    return { listMenu, closeMenuMobile, show }
  }
}
</script>
<template>
  <div class="menu-list">
    <button @click="closeMenuMobile" class="close-menu"></button>
    <div class="inner">
      <div class="menu-container">
        <a class="item-menu" href="tel:+79133851386">
          <i class="bi bi-telephone me-2"></i>
          <strong>+7 (913) 385-13-86</strong>
        </a>
      </div>
      <div class="menu-container">
        <ul>
          <AppNavbarListMenuDrop v-for="menu in listMenu" :key="menu.name" :menu="menu" />
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/var.scss';

.menu-list {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100%;
  padding: 84px 40px;
  min-width: 375px;
  transform: none;
  overflow: auto;
  will-change: transform;

  .close-menu {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.8;
    transition: 0.3s ease-out;
    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 80%;
      height: 4px;
      border-radius: 3px;
      background-color: #3c3c3c;
      left: 50%;
      top: 50%;
    }
    &:after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:hover,
    &:focus {
      transform: scale(1.1);
      opacity: 1;
    }
  }

  .inner {
    height: auto;
    width: auto;

    .menu-container {
      margin-top: 25px;

      ul:first-child {
        padding: 0;
      }

      ul {
        max-height: 320px;
      }

      .item-menu {
        cursor: pointer;
        position: relative;
        color: #fff;
        font-size: 1.45rem;
        letter-spacing: 1px;
        font-weight: 400;
        text-shadow: 0px 0px 0.8rem #000000;

        @media (max-width: 500px) {
          font-size: 1.4rem;
        }

        &::after {
          content: '';
          position: absolute;
          display: block;
          bottom: -5px;
          left: 0;
          width: 100%;
          transition: transform 0.5s cubic-bezier(0.52, 0.01, 0.16, 1);
          transform: scaleX(0);
          border-top: 4px solid #a3dc59;
          padding-bottom: inherit;
        }

        &:hover::after {
          transform: scaleX(1);
        }
      }
    }
  }
}
</style>
