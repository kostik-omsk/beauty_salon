<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeRouteUpdate } from 'vue-router'
import { useListMenuStore } from '@/stores/ListMenu'

const listInfo = [
  {
    id: 1,
    title: 'Экспертный подбор косметики.',
    description:
      'Воспользуйтесь профессиональными консультациями по подбору косметики. Мы поможем вам выбрать только те продукты, которые наилучшим образом соответствуют вашим потребностям, возрасту и типу кожи. Экспертное мнение и рекомендации обеспечат максимально эффективный уход.',
    img: '/assets/img/gallery/9'
  },

  {
    id: 2,
    title: 'Качество, проверенное временем.',
    description:
      'Мы предлагаем только проверенные средства от брендов с безупречной репутацией, которые пользуются доверием профессионалов и потребителей на протяжении многих лет. Каждое средство прошло строгий контроль качества, чтобы вы могли быть уверены в его безопасности и эффективности.',
    img: '/assets/img/gallery/2'
  },
  {
    id: 3,
    title: 'Поддержка на каждом этапе.',
    description:
      'Мы не просто подбираем косметику, но и сопровождаем вас в процессе ухода, давая рекомендации и советы по использованию средств.',
    img: '/assets/img/gallery/4'
  }
]

const menuStore = useListMenuStore()
let ctx: gsap.Context
gsap.registerPlugin(ScrollTrigger)

onBeforeRouteUpdate(() => {
  ctx?.revert()
})

function createAnimation() {
  ctx = gsap.context(() => {
    const details = gsap.utils.toArray('.contentSection:not(:first-child)') as HTMLElement[]
    const photos = gsap.utils.toArray('.photo:not(:first-child)') as HTMLElement[]
    const allPhotos = gsap.utils.toArray('.photo') as HTMLElement[]

    gsap.set(photos, { yPercent: 101 })

    ScrollTrigger.create({
      trigger: '.gallery',
      start: 'top top',
      end: 'bottom bottom',
      pin: '.right',
      invalidateOnRefresh: true
    })

    details.forEach((detail, index) => {
      let headline = detail.querySelector('.gallary__title')
      let animation = gsap.timeline().to(photos[index], { yPercent: 0 }).set(allPhotos[index], { autoAlpha: 0 })

      ScrollTrigger.create({
        trigger: headline,
        start: 'top 80%',
        end: 'top 50%',
        animation: animation,
        scrub: true,
        markers: false
      })
    })
  })
}

onMounted(() => {
  watch(
    () => menuStore.menuAnimationComplete,
    (complete) => {
      if (!complete) {
        ctx?.revert()
        createAnimation()
      } else {
        ctx?.revert()
        createAnimation()
      }
    },
    { immediate: true }
  )
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <div class="gallery mt-5">
    <div class="left">
      <div class="content">
        <div class="contentSection" v-for="item of listInfo" :key="item.id">
          <h2 class="gallary__title mb-3">{{ item.title }}</h2>
          <p class="gallary__description">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="photos">
        <div class="photo" v-for="item of listInfo" :key="item.id">
          <picture>
            <source :srcset="`${item.img}.webp`" type="image/webp" />
            <img class="img-fluid" :src="`${item.img}.png`" :alt="item.title" loading="lazy" />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';

.gallery {
  display: flex;
}

.left {
  width: 60%;
}

.right {
  height: 100vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content {
  margin: auto;
  width: 80%;
}

.contentSection {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gallary__title {
  font-size: $font-size-lg;
  font-weight: 800;
}

.gallary__description {
  font-size: $font-size-md;
  line-height: 1.4;
}

.photos {
  width: 100%;
  height: 60%;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.35);
}

.photo {
  position: absolute;
  width: 100%;
  height: 100%;
}

.red {
  background: crimson;
}

.green {
  background: MediumSeaGreen;
}

.blue {
  background: dodgerblue;
}

.pink {
  background: deepPink;
}
</style>
