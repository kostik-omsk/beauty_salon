<script setup lang="ts">
const currentYear = new Date().getFullYear()
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
            <div class="logo-wrap">
              <router-link to="/" class="logo-text">
                Chloé
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
              </router-link>
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
              <a href="https://www.instagram.com/anastasiya__dankina/" target="_blank"
                ><i class="bi bi-instagram"></i
              ></a>
              <a href="https://www.t.me/chloe_dankina" target="_blank"><i class="bi bi-telegram"></i></a>
              <a href="https://api.whatsapp.com/send?phone=79133851386" target="_blank"
                ><i class="bi bi-whatsapp"></i
              ></a>
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
              class="yandex-map"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa3b5d4573e3554d77c8e1c3f0daa1427fae8e1b2db52fddbe82754e2ee16c92e&amp;source=constructor"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="footer__copyright">
        <p class="footer__copyright-text">© «Chloé» {{ currentYear }}</p>
        <button class="footer__copyright-up" @click="scrollToTop">Наверх ↥</button>
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

    .logo-text {
      font-family: 'PlayfairDisplay-Italic', sans-serif;
      margin: 0;
      font-size: $font-size-xxxl;
      font-weight: 500;
      color: $highlightAccent;
      // background-color: $mygreen-dark;
      // background-image: linear-gradient(-20deg, $mygreen, $mygreen-dark 60%);
      // background-clip: text;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }

    #lotus {
      position: relative;
      top: 5px;
      width: 45px;
      height: 45px;
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
          width: 38px;
          height: 38px;
          fill: $highlightAccent;
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
  }

  &__copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0;

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
}
</style>
