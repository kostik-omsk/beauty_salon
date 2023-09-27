<template>
  <div class="gallery">
    <div class="galleryBoxes">
      <div v-for="(box, i) in photeBoxes" :key="i" :class="box.class" :id="box.id + i"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import useImageUrl from '@/composable/getImgUrl'
import { photeBoxes } from './dataGallery'

interface PhotoBoxElement extends HTMLElement {
  tl: gsap.core.Timeline
}

export default {
  name: 'AppGallery',
  setup() {
    onMounted(() => {
      const box = document.querySelectorAll('.photoBox ') as NodeListOf<PhotoBoxElement>

      Array.from(box).forEach((el, i) => {
        const column = photeBoxes[i].column

        gsap.set(el, {
          backgroundImage: `url(${photeBoxes[i].name})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          x: [60, 280, 500][column],
          width: 400,
          height: 640,
          borderRadius: 20,
          scale: 0.5,
          zIndex: 1
        })

        el.tl = gsap
          .timeline({ paused: true, repeat: -1 })
          .fromTo(
            el,
            { y: [-575, 800, 800][column], rotation: -0.05 },
            {
              duration: [40, 35, 26][column],
              y: [800, -575, -575][column],
              rotation: 0.05,
              ease: 'none'
            }
          )
          .progress((i % 4) / 4)
      })

      function playBoxes() {
        for (let i = 0; i < box.length; i++) {
          const tl = box[i].tl
          tl.play()
          gsap.to(tl, {
            duration: 0.4,
            timeScale: 1,
            ease: 'sine.in',
            overwrite: true
          })
        }
      }

      gsap
        .timeline({ onStart: playBoxes })
        .set('.gallery', { perspective: 800 })
        .set('.photoBox', { opacity: 1 })
        .fromTo('.gallery', { autoAlpha: 0 }, { duration: 0.6, ease: 'power2.inOut', autoAlpha: 1 }, 0.2)
    })
    return { photeBoxes, useImageUrl: useImageUrl }
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100%;
  position: absolute;
}
.photoBox {
  will-change: transform, opacity;
}
.galleryBoxes {
  will-change: transform;
  translate: none;
  rotate: none;
  scale: none;
  width: 1200px;
  transform: translate(-44%, 0%) rotate(10deg) rotateY(-15deg) rotateX(14deg);
  left: 75%;

  @media (max-width: 1400px) {
    transform: translate(-55%, 0%) rotate(10deg) rotateY(-15deg) rotateX(14deg);
  }
}
</style>
