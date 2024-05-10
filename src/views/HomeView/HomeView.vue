<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useServicesStore } from '@/stores/ListServices'
import AppGalleryIntro from '@/components/GalleryIntro/AppGalleryIntro.vue'
import CardServicesVue from './ui/CardServices.vue'
import LogoBrands from './ui/LogoBrands.vue'
import CosmeticsVideo from './ui/CosmeticsVideo.vue'

const ListServices = useServicesStore()
const { listServices } = storeToRefs(ListServices)
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
        <a href="https://vk.com/dankina_a_s" target="_blank">
          <i class="my-icon">
            <svg class="icon-vk" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
              <path
                d="M25,2C12.318,2,2,12.318,2,25s10.318,23,23,23c12.683,0,23-10.318,23-23S37.683,2,25,2z M34.973,29.535 c2.237,1.986,2.702,2.695,2.778,2.816C38.678,33.821,36.723,34,36.723,34h-4.12c0,0-1.003,0.011-1.86-0.557 c-1.397-0.915-2.86-2.689-3.888-2.381C25.992,31.32,26,32.486,26,33.483C26,33.84,25.693,34,25,34s-0.981,0-1.288,0 c-2.257,0-4.706-0.76-7.149-3.313c-3.456-3.609-6.487-10.879-6.487-10.879s-0.179-0.366,0.016-0.589 c0.221-0.25,0.822-0.218,0.822-0.218L14.909,19c0,0,0.376,0.071,0.646,0.261c0.223,0.156,0.347,0.454,0.347,0.454 s0.671,2.216,1.526,3.629c1.67,2.758,2.447,2.828,3.014,2.531C21.27,25.445,21,22.513,21,22.513s0.037-1.259-0.395-1.82 c-0.333-0.434-0.97-0.665-1.248-0.701c-0.225-0.029,0.151-0.423,0.63-0.648C20.627,19.059,21.498,18.986,23,19 c1.169,0.011,1.506,0.081,1.962,0.186C26.341,19.504,26,20.343,26,23.289c0,0.944-0.13,2.271,0.582,2.711 c0.307,0.19,1.359,0.422,3.231-2.618c0.889-1.442,1.596-3.834,1.596-3.834s0.146-0.263,0.373-0.393 c0.232-0.133,0.225-0.13,0.543-0.13S35.832,19,36.532,19c0.699,0,1.355-0.008,1.468,0.402c0.162,0.589-0.516,2.607-2.234,4.797 C32.943,27.793,32.63,27.457,34.973,29.535z"
              />
            </svg>
          </i>
        </a>
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
        <CosmeticsVideo />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/style/var.scss';

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
    border-radius: 1rem;
    z-index: 100;

    @media (max-width: 767.98px) {
      right: 0;
      left: 0;
      border-radius: 0px;
    }

    @media (max-width: 1400px) {
      box-shadow: 0 0 3px #00000095;
    }

    .block-title {
      font-weight: 800;
      font-size: $font-size-xxxl;
    }

    .block-text {
      font-size: $font-size-lg;

      @media only screen and (max-width: 576px) {
        font-size: 1.25rem;
      }
    }

    .block-icons {
      display: flex;
      align-items: center;
      gap: 20px;

      a {
        font-size: 2rem;
        color: $myprimary;
        transition: all 0.3s ease;
        &:hover {
          .my-icon svg {
            fill: #0077ff;
          }
          .bi-instagram {
            background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%),
              radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
              radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),
              radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%),
              radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),
              radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%),
              radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),
              linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .bi-telegram {
            color: #0088cc;
          }
          .bi-whatsapp {
            color: #25d366;
          }
        }
      }

      .my-icon {
        .icon-vk {
          display: inline-block;
          vertical-align: -0.19em;
          width: 36px;
          height: 36px;
          fill: $myprimary;
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
