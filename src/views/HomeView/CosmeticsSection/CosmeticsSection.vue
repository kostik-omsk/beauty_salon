<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionBlock from '@/components/SectionBlock/SectionBlock.vue'
import LogoBrands from '@/components/LogoBrands/LogoBrands.vue'

gsap.registerPlugin(SplitText, ScrollTrigger)

const mm = gsap.matchMedia()

const titleRef = ref<HTMLElement | null>(null)
let ctx: gsap.Context

onMounted(() => {
  mm.add('(min-width: 768px)', () => {
    if (!titleRef.value) return
    ctx = gsap.context(() => {
      const titleSplit = new SplitText(titleRef.value, { type: 'words, chars' })
      gsap.set(titleRef.value, { perspective: 400 })

      const tl = gsap.timeline({
        onComplete: () => titleSplit.revert()
      })

      tl.from(titleSplit.chars, {
        y: 80,
        rotationX: 180,
        transformOrigin: '0% 50% -50',
        scale: 0,
        opacity: 0,
        color: '#e4be8d',
        stagger: 0.04,
        ease: 'Back.easeOut'
      })

      tl.from(
        titleSplit.chars,
        {
          keyframes: [{ color: '#e4be8d' }, { color: '' }],
          stagger: 0.04,
          ease: 'Back.easeOut'
        },
        0.07
      )

      tl.from(
        '.decor__img-left',
        {
          opacity: 0,
          left: '-100%',
          duration: 1,
          clearProps: 'all'
        },
        '<1.5'
      )

      tl.from(
        '.decor__img-right',
        {
          opacity: 0,
          right: '-100%',
          duration: 1,
          clearProps: 'all'
        },
        '<'
      )

      tl.fromTo(
        '.cosmetics__btn',
        {
          opacity: 0,
          scale: 0.3
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          clearProps: 'all'
        },
        '<'
      )

      ScrollTrigger.create({
        trigger: titleRef.value,
        start: 'top 90%',
        animation: tl
      })
    })
  })
})

onUnmounted(() => {
  if (!ctx) return
  ctx.revert()
})
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
                <img src="/assets/decor1.png" alt="cosmetics" loading="lazy" />
              </div>
              <div class="decor__img decor__img-right">
                <img src="/assets/decor2.png" alt="cosmetics" loading="lazy" />
              </div>
            </div>
            <h3 class="cosmetics__title" ref="titleRef">
              Ваша красота - наша забота: Профессиональная косметика и индивидуальные комплексы ухода.
            </h3>
            <router-link to="cosmetics" class="cosmetics__btn btn primary-btn">Подробнее</router-link>
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
        filter: drop-shadow(0px 0px 1rem rgba(0, 0, 0, 0.2));
      }
    }

    &__img-left {
      top: 0%;
      left: -10vw;

      img {
        max-width: 80px;
        @media screen and (max-width: 768px) {
          width: 3.7rem;
        }

        @media screen and (max-width: 425px) {
          width: 2.9rem;
        }
      }

      @media screen and (max-width: 768px) {
        left: 5vw;
        top: 60%;
      }

      @media screen and (max-width: 425px) {
        left: 9vw;
        top: 70%;
      }
    }

    &__img-right {
      right: -9vw;

      img {
        max-width: 60px;
        @media screen and (max-width: 768px) {
          width: 3rem;
        }

        @media screen and (max-width: 425px) {
          width: 2rem;
        }
      }
      @media screen and (max-width: 768px) {
        right: 5vw;
        top: 50%;
      }
      @media screen and (max-width: 425px) {
        right: 9vw;
        top: 70%;
      }
    }
  }

  &__title {
    position: relative;
    margin-bottom: 3rem;
    z-index: 2;

    @media only screen and (max-width: 576px) {
      padding: 0 1rem;
    }
  }
}
</style>
