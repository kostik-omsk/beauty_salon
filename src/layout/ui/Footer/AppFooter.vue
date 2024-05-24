<template>
  <footer class="footer container" id="footer">
    <div class="full-width-window">
      <div class="row my-2 footer__info align-items-center">
        <div class="col-lg-3">
          <img src="@/assets/svg/logo.svg" alt="logo" height="55" />
        </div>
        <div class="col-lg-3">
          <h4>Тел:</h4>
          <a class="footer__tel" href="tel:+79133851386">
            <i class="bi bi-telephone"></i>
            <strong class="ms-1 text-nowrap">+7 (913) 385-13-86</strong>
          </a>
        </div>
        <div class="col-lg-3">
          <h4>Адрес:</h4>
          <span class="text text-nowrap"><i class="bi bi-geo-alt me-1"></i>Кольцово, Технопарковая 1</span>
        </div>
        <div class="col-lg-3">
          <div class="footer__socials float-lg-end">
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
      </div>
      <div class="mt-2 w-100">
        <iframe
          class="yandex-map"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A59ab304d48a7c4a9d8164b23ac331167de9a2f6e721908746653bbda01e64970&amp;source=constructor"
          frameborder="1"
        ></iframe>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import '@/assets/style/var.scss';
.footer {
  color: $mygreen;
  background: $myprimary;

  @media only screen and (max-width: 992px) {
    display: flex;
    gap: 20px;
  }

  @media only screen and (max-width: 626px) {
    flex-direction: column;
    gap: 0px;
  }
  &__info {
    @media only screen and (max-width: 992px) {
      max-width: 300px;
    }
    @media only screen and (max-width: 626px) {
      height: 280px;
      align-content: space-between;
    }
  }

  &__socials {
    a {
      font-size: 32px;
      color: $mygreen;
      margin-left: 20px;

      &:first-child {
        margin-left: 0;
      }

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
        fill: $mygreen;
      }
    }
  }

  &__tel {
    display: flex;
    align-items: center;
    color: $mygreen;
  }
}
.yandex-map {
  width: 100%;
  height: 350px;
}
</style>
