<template>
  <div class="brands__conveyor conveyor">
    <div :class="['conveyor__group', animationDirectionClass]">
      <div class="conveyor__item" v-for="(url, index) in CosmeticsImg" :key="index">
        <img class="img-fluid" :src="`${url}`" alt="logo brand" />
      </div>
    </div>
    <div :class="['conveyor__group', animationDirectionClass]">
      <div class="conveyor__item" v-for="(url, index) in CosmeticsImg" :key="index">
        <img class="img-fluid" :src="`${url}`" alt="logo brand" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  direction: {
    type: String,
    default: 'right',
    validator: (value: string) => ['right', 'left'].includes(value)
  }
})

const CosmeticsImg = [
  'assets/logo/city.svg',
  'assets/logo/angi.svg',
  'assets/logo/evasion.svg',
  'assets/logo/Isov.svg',
  'assets/logo/uton.svg',
  'assets/logo/gigi.svg',
  'assets/logo/storyderm.svg'
]

const animationDirectionClass = computed(() => {
  return props.direction === 'left' ? 'conveyor__group--reverse' : 'conveyor__group--normal'
})
</script>

<style lang="scss" scoped>
.conveyor {
  display: flex;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-mask-image: linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0),
    hsl(0, 0%, 0%) 20%,
    hsl(0, 0%, 0%) 80%,
    hsla(0, 0%, 0%, 0)
  );
  mask-image: linear-gradient(to right, hsla(0, 0%, 0%, 0), hsl(0, 0%, 0%) 20%, hsl(0, 0%, 0%) 80%, hsla(0, 0%, 0%, 0));

  &__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: calc(clamp(5rem, 1rem + 40vmin, 10rem) / 4);
    min-width: 100%;
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  &__group--normal {
    animation-name: scroll-x;
  }

  &__group--reverse {
    animation-name: scroll-x-reverse;
  }

  &__item {
    display: grid;
    place-items: center;
    width: clamp(5rem, 1rem + 40vmin, 10rem);
    aspect-ratio: 16 / 9;
  }

  @keyframes scroll-x {
    0% {
      transform: translate(0);
    }

    to {
      transform: translate(-100%);
    }
  }

  @keyframes scroll-x-reverse {
    0% {
      transform: translate(-100%);
    }

    to {
      transform: translate(0);
    }
  }
}
</style>
