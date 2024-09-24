<template>
  <div class="brands__conveyor conveyor">
    <div :class="['conveyor__group', { 'css-animation': !useGsap }]">
      <div class="conveyor__item" v-for="(url, index) in CosmeticsImg" :key="index">
        <img class="img-fluid" :src="`${url}`" alt="logo brand" />
      </div>
    </div>
    <div :class="['conveyor__group', { 'css-animation': !useGsap }]">
      <div class="conveyor__item" v-for="(url, index) in CosmeticsImg" :key="index">
        <img class="img-fluid" :src="`${url}`" alt="logo brand" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const props = defineProps({
  useGsap: Boolean
})

gsap.registerPlugin(ScrollTrigger)

const CosmeticsImg = [
  'assets/logo/city.svg',
  'assets/logo/angi.svg',
  'assets/logo/evasion.svg',
  'assets/logo/Isov.svg',
  'assets/logo/uton.svg',
  'assets/logo/gigi.svg',
  'assets/logo/storyderm.svg'
]

let ctx: gsap.Context

onMounted(() => {
  if (props.useGsap) {
    ctx = gsap.context(() => {
      gsap.from('.conveyor__item', {
        y: 100,
        opacity: 0,
        ease: 'back.out(2)',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.conveyor',
          start: 'top 80%'
        }
      })

      gsap.to('.conveyor__group', {
        x: '-80%',
        scrollTrigger: {
          trigger: '.conveyor',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    })
  }
})

onUnmounted(() => {
  if (!ctx) return
  ctx.revert()
})
</script>

<style lang="scss" scoped>
.conveyor {
  display: flex;
  gap: calc(clamp(5.625rem, 1.702rem + 12.553vw, 13rem) / 4);
  margin: 7rem 0 4rem 0;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-mask-image: linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0),
    hsl(0, 0%, 0%) 15%,
    hsl(0, 0%, 0%) 85%,
    hsla(0, 0%, 0%, 0)
  );
  mask-image: linear-gradient(to right, hsla(0, 0%, 0%, 0), hsl(0, 0%, 0%) 15%, hsl(0, 0%, 0%) 85%, hsla(0, 0%, 0%, 0));

  &__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: calc(clamp(5.625rem, 1.702rem + 12.553vw, 13rem) / 4);
    min-width: 100%;
  }

  &__item {
    display: grid;
    place-items: center;
    width: clamp(5.625rem, 1.702rem + 12.553vw, 13rem);
  }
}

.css-animation {
  animation-name: scroll-x;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes scroll-x {
  0% {
    transform: translate(0);
  }

  to {
    transform: translate(calc(-100% - clamp(5.625rem, 1.702rem + 12.553vw, 13rem) / 4));
  }
}
</style>
