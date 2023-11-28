<script lang="ts" setup></script>

<template>
  <footer class="container-fluid footer" id="footer">
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
  </footer>
</template>
<style lang="scss" scoped>
@import '@/assets/var.scss';
.footer {
  color: $mygreen;
  background: $myprimary;
  width: 100%;

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
