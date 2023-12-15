<template>
  <!-- <h2>Эпиляция</h2> -->
  <div class="categorys">
    <div class="category">
      <div class="category__title">
        <h3>
          Сахар <br />
          Воск
        </h3>
      </div>
      <span class="category__img">
        <img src="@/assets/img/wax.png" alt="" />
      </span>
    </div>
    <div class="category">
      <div class="category__title">
        <h3>
          Диодный лазер <br />
          Элос
        </h3>
      </div>
      <span class="category__img">
        <img src="@/assets/img/lazer.png" alt="" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
.categorys {
  display: flex;
  justify-content: space-evenly;
}
.category {
  position: relative;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: 10px solid $myprimary;
    -webkit-transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  &:hover:before {
    border-color: $mygreen;
    animation: product-border-bounce 0.4s ease-in-out;
  }

  .category__title {
    text-align: center;
  }

  &__img {
    position: absolute;
    right: -10%;
    bottom: -30%;
    width: 150px;
    img {
      width: 100%;
    }
  }
}

@keyframes product-border-bounce {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.05;
  }
  100% {
    scale: 1;
  }
}
</style>
