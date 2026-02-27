<script setup lang="ts">
import { useCookieConsentStore } from '@/stores/cookieConsent'

const currentYear = new Date().getFullYear()
const consentStore = useCookieConsentStore()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__content">
          <div class="logo">
            <div class="logo__wrap">
              <router-link to="/" class="logo__link" />
              <div class="logo__block">
                <p class="logo__name">Студия красоты</p>
                <svg
                  fill="#000000"
                  height="800px"
                  width="800px"
                  version="1.1"
                  id="lotus"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M132.885,252.461c0-7.365,0.397-14.632,1.138-21.784c-20.264-11.958-42.114-20.036-62.894-25.465
      c-0.435-0.096-0.863-0.21-1.289-0.33C42.578,197.889,17.27,195.395,0,194.58c1.896,38.848,12.204,118.399,62.793,168.987
      c39.046,39.046,94.956,54.11,136.356,59.825C168.874,384.184,132.885,322.788,132.885,252.461z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M394.52,116.126c-11.802,5.564-27.47,13.751-44.093,24.669c6.44,12.797,12.254,26.49,16.94,40.908
      c13.504-6.875,27.295-12.441,40.894-16.934C404.228,145.288,398.936,128.415,394.52,116.126z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M255.974,88.608c-26.136,28.829-75.054,92.341-75.054,163.852c0,71.502,48.906,135.008,75.055,163.848
      c26.149-28.84,75.055-92.346,75.055-163.848S282.124,117.45,255.974,88.608z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M377.929,230.681c0.741,7.152,1.138,14.417,1.138,21.779c0,70.263-35.924,131.61-66.183,170.823
      c41.464-5.767,97.412-20.854,136.274-59.717c50.797-50.794,61.013-130.137,62.841-168.942
      C481.28,196.116,425.109,202.884,377.929,230.681z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M117.429,116.128c-4.414,12.286-9.705,29.161-13.74,48.644c13.599,4.493,27.39,10.059,40.894,16.932
      c4.687-14.42,10.499-28.112,16.94-40.908C144.902,129.88,129.236,121.692,117.429,116.128z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div class="socials">
              <a href="https://vk.com/dankina_a_s" target="_blank">
                <i class="my-icon">
                  <svg
                    class="icon-vk"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                  >
                    <path
                      d="M25,2C12.318,2,2,12.318,2,25s10.318,23,23,23c12.683,0,23-10.318,23-23S37.683,2,25,2z M34.973,29.535 c2.237,1.986,2.702,2.695,2.778,2.816C38.678,33.821,36.723,34,36.723,34h-4.12c0,0-1.003,0.011-1.86-0.557 c-1.397-0.915-2.86-2.689-3.888-2.381C25.992,31.32,26,32.486,26,33.483C26,33.84,25.693,34,25,34s-0.981,0-1.288,0 c-2.257,0-4.706-0.76-7.149-3.313c-3.456-3.609-6.487-10.879-6.487-10.879s-0.179-0.366,0.016-0.589 c0.221-0.25,0.822-0.218,0.822-0.218L14.909,19c0,0,0.376,0.071,0.646,0.261c0.223,0.156,0.347,0.454,0.347,0.454 s0.671,2.216,1.526,3.629c1.67,2.758,2.447,2.828,3.014,2.531C21.27,25.445,21,22.513,21,22.513s0.037-1.259-0.395-1.82 c-0.333-0.434-0.97-0.665-1.248-0.701c-0.225-0.029,0.151-0.423,0.63-0.648C20.627,19.059,21.498,18.986,23,19 c1.169,0.011,1.506,0.081,1.962,0.186C26.341,19.504,26,20.343,26,23.289c0,0.944-0.13,2.271,0.582,2.711 c0.307,0.19,1.359,0.422,3.231-2.618c0.889-1.442,1.596-3.834,1.596-3.834s0.146-0.263,0.373-0.393 c0.232-0.133,0.225-0.13,0.543-0.13S35.832,19,36.532,19c0.699,0,1.355-0.008,1.468,0.402c0.162,0.589-0.516,2.607-2.234,4.797 C32.943,27.793,32.63,27.457,34.973,29.535z"
                    />
                  </svg>
                </i>
              </a>
              <a href="https://www.t.me/chloe_dankina" target="_blank"><i class="bi bi-telegram"></i></a>
              <a href="https://max.ru/u/f9LHodD0cOLwN72GRueDtBktF6ehHTWVvUh7kvu97dM4z94QBIBedLzwd1s" target="_blank">
                <i class="my-icon">
                  <svg class="max" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1000 1000">
                    <defs>
                      <linearGradient id="maxGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#4282cf" />
                        <stop offset="40%" stop-color="#3b51da" />
                        <stop offset="100%" stop-color="#782ab7" />
                      </linearGradient>
                    </defs>
                    <rect width="1000" height="1000" fill="url(#c)" ry="249.681" />
                    <rect width="1000" height="1000" fill="url(#d)" ry="249.681" />
                    <path
                      class="icon-path"
                      fill-rule="evenodd"
                      d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </i>
              </a>
            </div>
          </div>
          <div class="contacts">
            <div class="contacts__tel">
              <p class="contacts__subtitle">Тел:</p>
              <a class="contacts__link" href="tel:+79133851386">
                <i class="bi bi-telephone"></i>
                <span class="ms-1 text-nowrap">+7 (913) 385-13-86</span>
              </a>
            </div>
            <div class="contacts__address">
              <p class="contacts__subtitle">Адрес:</p>
              <span class="contacts__link"><i class="bi bi-geo-alt me-1"></i>Кольцово, Никольский пр-кт, 13</span>
            </div>
          </div>
          <div class="map">
            <iframe
              v-if="consentStore.functional"
              class="yandex-map"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa3b5d4573e3554d77c8e1c3f0daa1427fae8e1b2db52fddbe82754e2ee16c92e&amp;source=constructor&scroll=false"
              frameborder="0"
            ></iframe>

            <div v-else class="map__placeholder">
              <p>Карта доступна только при включенных функциональных cookie.</p>
              <button class="map__btn" type="button" @click="consentStore.openSettings">Настроить cookie</button>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__links">
        <router-link to="/user-agreement" class="footer__user-agreement">Пользовательское соглашение</router-link>
        <router-link to="/privacy-policy" class="footer__privacy-policy">Политика о персональных данных</router-link>
      </div>
      <div class="footer__copyright">
        <p class="footer__copyright-text">© «Студия красоты Анастасии Данькиной» {{ currentYear }}</p>
        <div class="footer__actions">
          <button class="footer__cookies" type="button" @click="consentStore.openSettings">Настройки cookie</button>
          <button class="footer__copyright-up" @click="scrollToTop">Наверх ↥</button>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';
.footer {
  color: $highlightAccent;
  background: $dark;
  padding: 1rem 0;

  &__content {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: auto;
    gap: 0.8rem 2rem;
    grid-template-areas:
      'logo contacts contacts'
      'map map map'
      'navigation navigation navigation';

    @media only screen and (max-width: 895px) {
      gap: 1.5rem;
      grid-template-areas:
        'logo logo logo'
        'contacts contacts contacts'
        'map map map'
        'navigation navigation navigation';
    }
  }

  .logo {
    grid-area: logo;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__wrap {
      position: relative;
    }
    &__link {
      position: absolute;
      inset: 0;
      z-index: 10;
    }

    &__block {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    &__name {
      margin: 0;
      font-family: 'PlayfairDisplay-Italic', sans-serif;
      font-weight: 500;
      color: $highlightAccent;

      font-size: $font-size-xl;
    }

    #lotus {
      position: relative;

      width: 40px;
      height: 40px;
      fill: $highlightAccent;
    }

    @media screen and (max-width: 895px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    @media screen and (max-width: 480px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: start;
    }

    .socials {
      display: flex;
      gap: 1.6rem;

      a {
        font-size: 35px;
        color: $highlightAccent;

        &:hover {
          .my-icon svg {
            fill: #0077ff;
          }
          .my-icon .max .icon-path {
            fill: url(#maxGradient);
          }

          .bi-telegram {
            color: #0088cc;
          }
        }
      }
      .my-icon {
        .icon-vk {
          display: inline-block;
          vertical-align: -0.19em;
          width: 38px;
          height: 38px;
          fill: $highlightAccent;
        }

        .max {
          width: 47px;
          height: 47px;
        }

        .icon-path {
          fill: $highlightAccent;
          transition: fill 0.3s ease;
        }
      }
    }
  }

  .contacts {
    grid-area: contacts;
    justify-self: end;
    display: flex;
    gap: 3rem;

    @media screen and (max-width: 1120px) {
      flex-direction: column;
      gap: 1.2rem;
      margin-top: 1.7rem;

      & > div {
        display: flex;
        align-items: baseline;
        gap: 1rem;
      }
    }

    @media screen and (max-width: 895px) {
      gap: 1rem;
      margin-top: 0;
      justify-self: start;
    }

    @media screen and (max-width: 480px) {
      & > div {
        flex-direction: column;
      }
    }

    &__subtitle {
      margin-top: 1.6rem;
      margin-right: 1rem;
      margin-bottom: 1.2rem;
      font-size: $font-size-md;
      text-transform: uppercase;

      @media screen and (max-width: 1120px) {
        margin: 0;
      }
      @media screen and (max-width: 787px) {
        gap: 0.8rem;
      }
    }

    &__link {
      display: flex;
      align-items: center;
      color: $highlightAccent;
      font-size: $font-size-md;
      @include myTransitionAll;

      &:hover {
        color: #fff;
      }
    }
  }

  .map {
    grid-area: map;
    .yandex-map {
      border-radius: 1rem;
      width: 100%;
      height: 400px;
    }

    &__placeholder {
      height: 400px;
      border-radius: 1rem;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 1.5rem;
      gap: 1rem;
    }

    &__btn {
      border: 1px solid $highlightAccent;
      background: transparent;
      color: $highlightAccent;
      padding: 0.5rem 1rem;
      border-radius: 999px;
      @include myTransitionAll;

      &:hover {
        background: $highlightAccent;
        color: $dark;
      }
    }
  }

  &__links {
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 480px) {
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
  }

  &__copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0;
    @media screen and (max-width: 480px) {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 0.5rem;
    }

    &-text {
      margin: 0;
    }
    &-up {
      text-decoration: none;
      background: none;
      border: none;
      padding: 0;
      color: $highlightAccent;
      @include myTransitionAll;
      font-size: $font-size-base;

      &:hover {
        color: #fff;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: 480px) {
      width: 100%;
      justify-content: space-between;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
  }

  &__cookies {
    background: none;
    border: none;
    color: $highlightAccent;
    text-decoration: underline;
    padding: 0;
    font-size: $font-size-base;
    @include myTransitionAll;

    &:hover {
      color: #fff;
    }
  }

  &__user-agreement {
    text-decoration: none;
    color: $highlightAccent;
    font-size: $font-size-base;
    @include myTransitionAll;
    &:hover {
      color: #fff;
    }
  }
  &__privacy-policy {
    text-decoration: none;
    color: $highlightAccent;
    font-size: $font-size-base;
    @include myTransitionAll;
    &:hover {
      color: #fff;
    }
  }
}
</style>
