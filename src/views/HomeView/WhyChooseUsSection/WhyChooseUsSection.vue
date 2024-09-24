<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SectionBlock from '@/components/SectionBlock/SectionBlock.vue'
import CardChooseUs from './ui/CardChooseUs.vue'

gsap.registerPlugin(ScrollTrigger)

const chooseUs = [
  { img: 'img-1', text: 'Профессионализм', translateX: '-11%' },
  { img: 'img-2', text: 'Индивидуальный подход', translateX: '11%' },
  { img: 'img-3', text: 'Опыт', translateY: '15%' },
  { img: 'img-4', text: 'Доверие', scale: 1.3 },
  { img: 'img-5', text: 'Технологии', scale: 1.3 },
  { img: 'img-6', text: 'Большой выбор услуг', translateX: '-15%' },
  { img: 'img-7', text: 'Комфорт и уют', translateX: '15%' }
]

const createAnimation = (selector: string, properties: object) => {
  gsap.to(selector, {
    ...properties,
    scrollTrigger: {
      trigger: selector,
      start: 'top center',
      scrub: 1,
      toggleActions: 'play none none reverse'
    }
  })
}

let ctx: gsap.Context

onMounted(() => {
  ctx = gsap.context(() => {
    chooseUs.forEach(({ img, translateX, translateY, scale }) => {
      const animationProperties = {
        translateX,
        translateY,
        scale
      }

      createAnimation(`.${img} img`, animationProperties)
    })
  })
})

onUnmounted(() => {
  if (!ctx) return
  ctx.revert()
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
          <CardChooseUs
            v-for="({ text, img }, i) in chooseUs"
            :key="i"
            :text="text"
            :img="img"
            :imgClass="`img-${i + 1}`"
          ></CardChooseUs>
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
      height: calc(2600 * (100vw / 1440));
    }
    @media (max-width: 441px) {
      height: calc(2750 * (100vw / 1440));
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
      top: 26%;
      left: 0;
      max-width: 100%;
    }

    @media (max-width: 441px) {
      top: 24.5%;
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
        font-size: calc((100vw / 1440) * 55.5);
      }
    }
  }
}
</style>
