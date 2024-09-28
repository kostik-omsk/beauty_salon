<script lang="ts">
import { storeToRefs } from 'pinia'
import { gsap } from 'gsap'
import { onMounted, onUnmounted, provide, watch } from 'vue'
import AppNavbarListMenu from './ui/AppNavbarListMenu.vue'
import { useListMenuStore } from '@/stores/ListMenu'

export default {
  name: 'AppNavbar',
  components: { AppNavbarListMenu },
  setup() {
    //pinia.register
    const menuStore = useListMenuStore()
    const { listMenu, show, getShow } = storeToRefs(menuStore)
    let ctx: gsap.Context
    //animation menu
    let aniMenu = gsap.timeline({
      paused: true,
      onComplete: () => {
        menuStore.setMenuAnimationComplete(true) // Флаг анимации завершен
      },
      onReverseComplete: () => {
        menuStore.setMenuAnimationComplete(true) // Флаг анимации завершен
      }
    })
    //убить остатки динамического стиля
    const killTimeline = (timeline: any) => {
      const targets = timeline.getChildren()

      timeline.kill()

      for (let i = 0; i < targets.length; i++) {
        if (targets[i].targets().length) {
          gsap.set(targets[i].targets(), { clearProps: 'all' })
        }
      }
    }
    // Показ menu
    const showMenu = () => {
      show.value = !show.value
    }

    watch(getShow, () => {
      if (show.value) {
        aniMenu.play()
        menuStore.setMenuAnimationComplete(false)
      } else {
        aniMenu.reverse()
        gsap.delayedCall(0.6, () => {
          killTimeline(aniMenu)
          menuStore.setMenuAnimationComplete(false)
        })
      }
    })

    onMounted(() => {
      ctx = gsap.context(() => {
        aniMenu
          .set('#app', { height: '90%', overflow: 'hidden', borderRadius: '1rem ' })
          .set('body', { overflow: 'hidden' })
          .set('html', { overflow: 'hidden' })
          .to('#app', {
            scale: 0.88,
            x: '380px',
            duration: 0.6,
            ease: 'power1.inOut'
          })
          .from('.menu-list', { x: 150, duration: 0.6 }, 0)
        // Закрытие мену при нажатии на слайд страници
        let sub = document.querySelector('#app')
        if (sub) {
          sub.addEventListener('click', () => {
            if (show.value == true) {
              showMenu()
            }
          })
        }
      })
    })

    onUnmounted(() => {
      ctx.revert()
    })

    provide('aniMenu', aniMenu)

    return { showMenu, listMenu, show }
  }
}
</script>
<template>
  <div class="my-navbar">
    <nav>
      <div class="menu-burger">
        <div id="nav-icon" @click.stop="showMenu" :class="{ open: show }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="logo">
        <router-link to="/" class="logo-text">
          <!-- <img src="@/assets/svg/logo.svg" alt="logo" height="55" /> -->
          Chloe
        </router-link>
      </div>
      <div class="tel">
        <a href="tel:+79133851386">
          <i class="bi bi-telephone me-2"></i>
          <strong>+7 (913) 385-13-86</strong>
        </a>
      </div>
    </nav>
    <teleport to="body">
      <AppNavbarListMenu v-show="show" :listMenu="listMenu" />
    </teleport>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';
.my-navbar {
  position: relative;
  padding: 5px 20px 0px;
  margin: 0 auto;
  z-index: 5;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 82px;
  }
  .menu-burger {
    cursor: pointer;

    #nav-icon {
      height: 40px;
      width: 50px;
      display: grid;
      align-content: space-evenly;
      position: relative;
      overflow: hidden;
      background: white;

      span {
        position: relative;
        display: block;
        width: 100%;
        height: 5px;
        border-radius: 3px;
        background: $myprimary;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 150%;
        mix-blend-mode: screen;
        background: $mygreen;
        @include myTransitionAll;
        transform: translate(-27px, -15px) rotate(45deg);
      }

      &:hover::after {
        transform: translate(70px, -5px) rotate(45deg);
      }
    }
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);

    .logo-text {
      font-size: $font-size-xxxl;
      font-weight: 800;
      color: $mygreen-dark;
      background-color: $mygreen-dark;
      background-image: linear-gradient(-20deg, $mygreen, $mygreen-dark 60%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $myprimary;
    }
  }

  .tel {
    a {
      font-size: 22px;
      strong,
      i {
        font-weight: 800;
        color: $myprimary;
        @include myTransitionAll;
      }

      &:hover {
        strong,
        i {
          color: $mygreen-dark;
        }
      }
    }

    @media (max-width: 996px) {
      display: none;
    }
  }
}
</style>
