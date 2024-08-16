<script setup lang="ts">
defineProps<{
  text: string
  img: string
  imgClass: string
}>()
</script>

<template>
  <div :class="['why-choose-us__img', imgClass]">
    <picture>
      <source :srcset="`/assets/img/chooseUs/${img}.webp`" type="image/webp" />
      <img :src="`/assets/img/chooseUs/${img}.png`" alt="choose Us" />
    </picture>
    <div class="why-choose-us__img__text">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';
.why-choose-us__img {
  position: absolute;
  border-radius: 1rem;
  overflow: hidden;

  &__text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    p {
      z-index: 10;
      color: $secondary;
      font-weight: 800;
      font-size: clamp(1rem, 2.3vw, 2rem);

      @media only screen and (max-width: 576px) {
        padding: 0.5rem;
        text-align: center;
      }
    }

    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: transform;
  }

  &.img-1 {
    top: 2%;
    left: 0;
    width: 33%;

    & img {
      transform: translateX(0%) scale(1.25);
    }

    @media (max-width: 768px) {
      top: unset;
      bottom: 0;
      left: 31%;
      width: 33%;
    }

    @media (max-width: 576px) {
      left: unset;
      right: 0;
      width: 54%;
    }
  }

  &.img-2 {
    top: 2%;
    right: 0;
    width: 36%;

    & img {
      transform: translateX(-11%) scale(1.25);
    }

    @media (max-width: 768px) {
      top: 0;
      width: 39%;
    }

    @media (max-width: 576px) {
      top: unset;
      bottom: 0;
      right: unset;
      left: 0;
      width: 42%;
    }
  }

  &.img-3 {
    top: 26%;
    width: 20%;

    & img {
      transform: translateY(-5%) scale(1.3);
    }

    @media (max-width: 768px) {
      top: 0;
      left: 35%;
      width: 22%;
    }

    @media (max-width: 576px) {
      left: 38%;
      width: 24%;
    }
  }

  &.img-4 {
    top: 2%;
    left: 39%;
    width: 20%;

    @media (max-width: 768px) {
      top: unset;
      left: unset;
      bottom: 3%;
      right: 0;
      width: 32%;
    }

    @media (max-width: 576px) {
      bottom: 21%;
      width: 40%;
    }
  }

  &.img-5 {
    top: 67%;
    left: 0;
    width: 20%;

    @media (max-width: 768px) {
      top: unset;
      bottom: 2%;
      left: 0;
      width: 27%;
    }

    @media (max-width: 576px) {
      top: 0;
      left: unset;
      right: 0;
      bottom: unset;
      width: 34%;
    }
  }

  &.img-6 {
    top: 75.5%;
    left: 27%;
    width: 31%;

    & img {
      transform: translateX(15%) scale(1.3);
    }

    @media (max-width: 768px) {
      top: unset;
      bottom: 17%;
      left: 31%;
      width: 33%;
    }

    @media (max-width: 576px) {
      left: 0;
      bottom: 26%;
      width: 56%;
    }
  }

  &.img-7 {
    top: 46%;
    right: 0;
    width: 36%;

    & img {
      transform: translateX(-15%) scale(1.3);
    }

    @media (max-width: 768px) {
      top: 0;
      left: 0;
      width: 31%;
    }

    @media (max-width: 576px) {
      width: 34%;
    }
  }
}
</style>
