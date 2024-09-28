<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { gsap } from 'gsap'
const { list, title } = defineProps(['list', 'title'])
const isOpenList = ref(false)
const dropdownList = ref(null)
const toggleList = () => {
  isOpenList.value = !isOpenList.value
}
const animateOpen = () => {
  gsap.to(dropdownList.value, { height: 'auto', marginTop: '1rem', duration: 0.3, opacity: 1, ease: 'power2.inOut' })
}

const animateClose = () => {
  gsap.to(dropdownList.value, { height: 0, marginTop: '0', duration: 0.3, opacity: 0, ease: 'power2.inOut' })
}

watch(isOpenList, (newVal) => {
  if (newVal) {
    animateOpen()
  } else {
    animateClose()
  }
})

onMounted(() => {
  gsap.set(dropdownList.value, { height: 0, opacity: 0 })
})

onBeforeUnmount(() => {
  gsap.killTweensOf(dropdownList.value)
})
</script>

<template>
  <div class="service__info info" @click="toggleList">
    <div class="info__header">
      <h4 class="info__title">{{ title }}:</h4>
      <button class="info__btn" :class="{ rotate: isOpenList }">
        <i class="info__arrow bi bi-chevron-down"></i>
      </button>
    </div>
    <div class="info__body" ref="dropdownList">
      <ul class="info__list">
        <li class="info__item" v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
      <p v-if="title === 'Противопоказания*'" class="mt-3">
        * Количество противопоказаний может быть больше, необходима консультация специалиста.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';
.info {
  position: relative;
  padding: 1.5rem;
  overflow: hidden;
  border-radius: 1rem;
  @include boxShadow;
  @include myBorder;

  cursor: pointer;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: $font-size-base;
    margin: 0;
  }

  &__btn {
    flex: 0 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 0;
    border-radius: 50%;
    border: none;
    background: $myprimary;
    color: $mygreen;
    transition: transform 0.5s ease;

    &.rotate {
      transform: rotate(180deg);
    }
  }

  &__arrow {
    margin-top: 4px;

    font-size: $font-size-base;
  }
}
</style>
