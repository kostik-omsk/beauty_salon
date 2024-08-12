<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SectionBlock from '@/components/SectionBlock/SectionBlock.vue'
import CardChooseUs from './ui/CardChooseUs.vue'

const chooseUs = [
  { img: 'img-1', text: 'Профессионализм' },
  { img: 'img-2', text: 'Индивидуальный подход' },
  { img: 'img-3', text: 'Опыт' },
  { img: 'img-4', text: 'Доверие' },
  { img: 'img-5', text: 'Технологии' },
  { img: 'img-6', text: 'Большой выбор услуг' },
  { img: 'img-7', text: 'Комфорт и уют' }
]

onMounted(() => {
  // gsap.registerPlugin(ScrollTrigger)
  // // Основная анимация
  // gsap.from('.why-choose-us__img__text', {
  //   scrollTrigger: {
  //     trigger: '.why-choose-us__wrap',
  //     start: 'top 80%',
  //     end: 'bottom 90%',
  //     scrub: true,
  //     markers: true
  //   },
  //   opacity: 0,
  //   scale: 0.5,
  //   duration: 1.5,
  //   stagger: 0.3
  // })
})

onUnmounted(() => {
  // Очищаем все триггеры при уничтожении компонента
  // ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})
</script>

<template>
  <SectionBlock class="why-choose-us">
    <template #title>Почему выбирают нас</template>
    <template #content>
      <div class="container">
        <div class="why-choose-us__wrap">
          <div class="why-choose-us__description">
            <p>
              В мире, где каждый день приносит новые вызовы и стрессы, наша Студия Красоты становится оазисом
              спокойствия и гармонии, местом, где каждый клиент чувствует себя особенным и любимым. Почему именно нас
              выбирают снова и снова?
            </p>
            <p>Ответ прост — мы предлагаем нечто большее, чем просто услуги красоты.</p>
          </div>
          <cardChooseUs
            v-for="({ text, img }, i) in chooseUs"
            :key="i"
            :text="text"
            :img="img"
            :imgClass="`img-${i + 1}`"
          ></cardChooseUs>
        </div>
      </div>
    </template>
  </SectionBlock>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';

.why-choose-us {
  &__wrap {
    position: relative;
    height: 1236px;
    padding: 20rem 0;

    @media (max-width: 1440px) {
      height: calc(1236 * (100vw / 1440));
    }

    @media (max-width: 768px) {
      height: calc(1850 * (100vw / 1440));
    }

    @media (max-width: 576px) {
      height: calc(2550 * (100vw / 1440));
    }
  }

  &__description {
    position: absolute;
    top: 26%;
    left: 23%;
    max-width: 38%;
    padding: clamp(1rem, 2vw, 2rem);
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0px 0px 16px rgba(209, 209, 209, 0.5);
    border: 1px dashed #d0d0d0;

    @media (max-width: 768px) {
      // position: relative;
      top: 32%;
      left: 0;
      max-width: 100%;
    }

    @media (max-width: 576px) {
      top: 26.5%;
    }

    p {
      font-size: 1.73rem;
      font-weight: 600;
      &:last-child {
        margin: 0;
      }

      @media (max-width: 1440px) {
        font-size: calc((100vw / 1440) * 27.5);
      }

      @media (max-width: 768px) {
        font-size: calc((100vw / 1440) * 47.5);
      }
    }
  }
}
</style>
