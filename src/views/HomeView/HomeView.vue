<script setup lang="ts">
import AppGalleryIntro from '@/components/GalleryIntro/AppGalleryIntro.vue'
import { listServices } from '@/views/HomeView/data/listServices'
import CardServicesVue from './ui/CardServices.vue'
import LogoBrands from './ui/LogoBrands.vue'
import CosmeticsVideo from './ui/CosmeticsVideo.vue'
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
  <section class="services">
    <div class="section__header">
      <div class="container">
        <h2 class="py-3">Наши услуги</h2>
      </div>
    </div>
    <div class="container">
      <div class="services__list">
        <CardServicesVue v-for="service in listServices" :key="service.id" :service="service" />
      </div>
    </div>
  </section>
  <section class="cosmetics">
    <div class="section__header">
      <div class="container">
        <h2 class="py-3">Косметика</h2>
      </div>
    </div>
    <div class="container">
      <LogoBrands />
      <h3>У нас вы сможете приобрести косметику по уходу за лицом и телом от различных брендов</h3>
      <div class="cosmetics__content mt-5">
        <div class="cosmetics__info">
          <h4>О важности использования косметики</h4>
          <p>
            Косметика для ухода за лицом и телом - это важный элемент в нашей повседневной жизни. Некоторые продукты
            могут помочь увлажнить кожу, устранить шелушение и защитить ее от воздействия внешней среды, а также
            устраняют недостатки и проблемы. Кроме того, использование косметики для ухода может уменьшить выраженность
            морщин и поддерживать здоровый вид кожи.
          </p>
          <p>
            Важно помнить, что при выборе косметических продуктов необходимо учитывать тип кожи, возраст и
            индивидуальное состояние кожи, чтобы получить максимальный эффект. В общем, приобретение качественной
            косметики для ухода за лицом и телом - это важный шаг к здоровью и красоте.
          </p>
          <router-link class="primary-btn mt-3" to="#">Каталог косметики</router-link>
        </div>
        <!-- <ImagesCosmetics /> -->
        <CosmeticsVideo />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/var.scss';

.intro {
  min-height: calc(100vh - 87px);
  position: relative;
  overflow: hidden;

  @media screen and (max-height: 800px), screen and (min-height: 1001px) {
    min-height: 750px;
  }

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

.section__header {
  color: $secondary;
  background: $myprimary;
  margin-bottom: 3rem;

  h2 {
    font-weight: 800;
    text-shadow: 0px 0px 10px #000000;
  }
}

.cosmetics__content {
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;

  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }
}
</style>
