<script setup lang="ts"></script>

<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found__content">
        <h1 class="not-found__title bold">404</h1>
        <h2 class="not-found__subtitle"><span class="bold">Извините</span>, страница не найдена!</h2>
        <div class="not-found__btn mt-3">
          <router-link to="/" class="back-to-home">
            <p>На главную</p>
            <svg
              data-v-283aac68=""
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="4"
            >
              <path
                data-v-283aac68=""
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';

.not-found {
  &__title {
    font-size: 10rem;

    @media only screen and (max-width: 576px) {
      font-size: 7rem;
    }
  }

  &__subtitle {
    font-size: $font-size-xxxl;
    text-align: center;
  }

  &__content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .back-to-home {
    position: relative;
    display: flex;
    font-weight: 600;
    font-size: $font-size-xxl;
    gap: 0.5rem;
    align-items: center;
    bottom: 0;
    color: $dark;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    opacity: 0.8;

    @include myTransitionAll;

    &::after {
      position: absolute;
      content: '';
      width: 0;
      left: 0;
      bottom: 3px;
      background: $dark;
      height: 2px;
      @include myTransitionAll;
    }
    & p {
      margin: 0;
      position: relative;
      font-size: $font-size-xxl;
    }

    & p::before {
      position: absolute;
      content: 'На главную';
      width: 0%;
      inset: 0;
      color: $dark;
      overflow: hidden;
      @include myTransitionAll;
    }

    & svg {
      color: $dark;
      transition: 0.2s;
      position: relative;
      width: 20px;
      transition-delay: 0.2s;
    }

    &:hover svg {
      transform: translateX(4px);
      color: $dark;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover p::before {
      width: 100%;
    }

    &:hover {
      color: $dark;
      opacity: 1;
    }
  }
}
</style>
