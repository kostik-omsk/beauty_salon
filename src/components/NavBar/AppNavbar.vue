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
          Chloé
          <svg
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id="lotus"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M132.885,252.461c0-7.365,0.397-14.632,1.138-21.784c-20.264-11.958-42.114-20.036-62.894-25.465
			c-0.435-0.096-0.863-0.21-1.289-0.33C42.578,197.889,17.27,195.395,0,194.58c1.896,38.848,12.204,118.399,62.793,168.987
			c39.046,39.046,94.956,54.11,136.356,59.825C168.874,384.184,132.885,322.788,132.885,252.461z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M394.52,116.126c-11.802,5.564-27.47,13.751-44.093,24.669c6.44,12.797,12.254,26.49,16.94,40.908
			c13.504-6.875,27.295-12.441,40.894-16.934C404.228,145.288,398.936,128.415,394.52,116.126z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M255.974,88.608c-26.136,28.829-75.054,92.341-75.054,163.852c0,71.502,48.906,135.008,75.055,163.848
			c26.149-28.84,75.055-92.346,75.055-163.848S282.124,117.45,255.974,88.608z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M377.929,230.681c0.741,7.152,1.138,14.417,1.138,21.779c0,70.263-35.924,131.61-66.183,170.823
			c41.464-5.767,97.412-20.854,136.274-59.717c50.797-50.794,61.013-130.137,62.841-168.942
			C481.28,196.116,425.109,202.884,377.929,230.681z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M117.429,116.128c-4.414,12.286-9.705,29.161-13.74,48.644c13.599,4.493,27.39,10.059,40.894,16.932
			c4.687-14.42,10.499-28.112,16.94-40.908C144.902,129.88,129.236,121.692,117.429,116.128z"
                />
              </g>
            </g>
          </svg>
        </router-link>
      </div>
      <div class="tel">
        <a href="tel:+79133851386">
          <i class="bi bi-telephone me-2"></i>
          <span>+7 (913) 385-13-86</span>
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

      span {
        position: relative;
        display: block;
        width: 100%;
        height: 5px;
        border-radius: 3px;
        background: $dark;

        @include myTransitionAll;
      }
      @media (hover: hover) {
        &:hover span {
          background: $highlightAccent;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);

    .logo-text {
      font-family: 'PlayfairDisplay-Italic', sans-serif;
      font-size: $font-size-xxxl;
      font-weight: 500;
      color: $dark;
    }
    a {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: $dark;
    }

    #lotus {
      position: relative;
      top: 5px;
      width: 45px;
      height: 45px;
      fill: $dark;
    }
  }

  .tel {
    a {
      font-size: 22px;
      span,
      i {
        font-weight: 600;
        color: $dark;
        @include myTransitionAll;
      }

      &:hover {
        span,
        i {
          text-shadow: 0 0 2px $highlightAccent;
        }
      }
    }

    @media (max-width: 996px) {
      display: none;
    }
  }
}
</style>
