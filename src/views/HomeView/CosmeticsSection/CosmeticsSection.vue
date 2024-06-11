<script setup lang="ts">
import SectionBlock from '@/components/SectionBlock/SectionBlock.vue'
import LogoBrands from './ui/LogoBrands.vue'
</script>

<template>
  <SectionBlock class="cosmetics my-5">
    <template #title>Косметика</template>
    <template #content>
      <div class="container">
        <div class="breakout">
          <div class="cosmetics__info">
            <div class="cosmetics__decor decor">
              <div class="decor__img decor__img-left">
                <img src="/assets/decor1.png" alt="cosmetics" />
              </div>
              <div class="decor__img decor__img-right">
                <img src="/assets/decor2.png" alt="cosmetics" />
              </div>
            </div>
            <h3 class="cosmetics__title">
              У нас вы можете приобрести профессиональную косметику для ухода за лицом и телом.
            </h3>
            <button class="btn primary-btn">Подробнее</button>
          </div>
          <LogoBrands />
        </div>
      </div>
    </template>
  </SectionBlock>
</template>

<style lang="scss" scoped>
.cosmetics {
  margin-bottom: 3rem;
  overflow: hidden;

  &__info {
    position: relative;
    margin: 5rem auto;
    max-width: 600px;
    text-align: center;

    @media screen and (max-width: 576px) {
      margin: 1rem auto 5rem;
    }
  }

  & .decor {
    &__img {
      position: absolute;
      z-index: 1;
      will-change: auto;
      img {
        width: 5vw;
        max-width: 60px;

        @media screen and (max-width: 768px) {
          width: 6vw;
        }

        @media screen and (max-width: 576px) {
          width: 9vw;
        }
      }
    }

    &__img-left {
      left: -8vw;
      animation: move 10s ease-in-out infinite;
      @media screen and (max-width: 768px) {
        left: 5vw;
        top: 65%;
      }

      @media screen and (max-width: 576px) {
        left: 9vw;
      }
    }

    &__img-right {
      right: -8vw;
      animation: move 7s ease-in-out infinite reverse;
      @media screen and (max-width: 768px) {
        right: 5vw;
        top: 50%;
      }
      @media screen and (max-width: 576px) {
        right: 9vw;
        top: 60%;
      }
    }

    @keyframes move {
      0% {
        transform: translate(-2%, 2%) scale(0.95) rotate(-5deg);
      }

      50% {
        transform: translate(2%, -2%) scale(1.1) rotate(5deg);
      }

      100% {
        transform: translate(-2%, 2%) scale(0.95) rotate(-5deg);
      }
    }
  }

  &__title {
    position: relative;
    margin-bottom: 3rem;
    z-index: 2;
  }
}
</style>
