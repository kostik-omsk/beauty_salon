<script setup lang="ts">
import AppGalleryIntro from '@/components/GalleryIntro/AppGalleryIntro.vue'
// import { computed } from 'vue'
</script>

<template>
  <section class="container intro">
    <div class="intro__block">
      <h1 class="block-title">Совершенство доступно</h1>
      <div class="block-text block-text-green">
        <i class="bi bi-geo-alt"></i>
        Кольцово, Технопaрковая 1
      </div>
      <div class="block-icons mt-1">
        <a href="https://www.instagram.com/anastasiya__dankina/" target="_blank"><i class="bi bi-instagram"></i></a>
        <a href="https://www.t.me/chloe_dankina" target="_blank"><i class="bi bi-telegram"></i></a>
        <a href="https://api.whatsapp.com/send?phone=79133851386" target="_blank"><i class="bi bi-whatsapp"></i></a>
      </div>
    </div>
    <AppGalleryIntro />
  </section>
</template>

<style lang="scss">
@import '@/assets/var.scss';

.intro {
  min-height: calc(100vh - 92px);
  position: relative;
  overflow: hidden;

  &__block {
    top: 35%;
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 15px;
    z-index: 100;

    @media (max-width: 767.98px) {
      font-size: 1.5rem;
      right: 0;
      left: 0;
      border-radius: 0px;
    }
    @media (max-width: 1400px) {
      box-shadow: 0 0 3px #00000095;
    }

    .block-title {
      font-weight: 700;
      font-size: 2.4rem;

      @media (max-width: 767.98px) {
        font-size: 1.5rem;
      }

      @media only screen and (max-width: 576px) {
        font-size: 1.4rem;
      }

      @media (min-width: 767.98px) and (max-width: 1200px) {
        font-size: 1.6rem;
      }
    }

    .block-text {
      font-size: 1.3rem;
      @media only screen and (max-width: 576px) {
        font-size: 1.1rem;
      }
    }

    .block-icons {
      display: flex;
      gap: 20px;

      a {
        font-size: 2rem;
        color: $myprimary;
        :hover {
          text-shadow: 1px 2px 3px rgb(75, 75, 75);
          color: #a3dc59;
          transition: all 0.3s ease;
        }
      }
    }
  }
  &__image {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
