<template>
  <div class="gallery">
    <div class="galleryBoxes">
      <div v-for="(box, i) in photeBoxes" :key="i" :class="box.class" :id="box.id + i"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { photeBoxes } from './dataGallery'

interface PhotoBoxElement extends HTMLElement {
  tl: gsap.core.Timeline
}

onMounted(() => {
  const box = gsap.utils.toArray('.photoBox') as PhotoBoxElement[]

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

  // function pauseBoxes() {
  //   for (let i = 0; i < box.length; i++) {
  //     const tl = box[i].tl
  //     tl.pause()
  //   }
  // }

  box.forEach((el, i) => {
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

  const timelineOptions = {
    onStart: playBoxes
    // onComplete: pauseBoxes
  }

  gsap
    .timeline(timelineOptions)
    .set('.gallery', { perspective: 800 })
    .set('.photoBox', { opacity: 1 })
    .fromTo('.gallery', { autoAlpha: 0 }, { duration: 0.6, ease: 'power2.inOut', autoAlpha: 1 }, 0.2)
})
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100%;
  position: absolute;
}

.gallery__img {
  height: 100%;
  display: block;
  @media only screen and (max-width: 768px) {
    object-fit: cover;
  }
  @media only screen and (max-width: 576px) {
  }
}
.photoBox {
  will-change: transform;
}
.galleryBoxes {
  translate: none;
  rotate: none;
  scale: none;
  width: 1200px;
  transform: translate(-44%, 0%) rotate(10deg) rotateY(-15deg) rotateX(14deg);
  left: 75%;
  will-change: transform;

  @media (max-width: 1400px) {
    transform: translate(-55%, 0%) rotate(10deg) rotateY(-15deg) rotateX(14deg);
  }
  @media (max-width: 568px) {
    transform: translate(-50%, 0%) rotate(10deg) rotateY(-15deg) rotateX(14deg);
  }
}
</style>
