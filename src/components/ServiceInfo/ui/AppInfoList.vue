<script setup lang="ts">
const { list, title } = defineProps(['list', 'title'])
</script>

<template>
  <div class="service__info info">
    <div class="info__header mb-3">
      <h4 class="info__title">{{ title }}:</h4>
    </div>
    <div class="info__body">
      <ul class="info__list">
        <li class="info__item" v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
    </div>
    <p v-if="title == 'Противопоказания*'" class="mt-3">
      * Количество противопоказаний может быть больше, необходима консультация специалиста.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';
.info {
  flex: 0 0 48%;
  padding: 1.5rem;
  overflow: hidden;
  border-radius: 1rem;
  @include boxShadow;

  &__title {
    font-size: $font-size-base;
  }
  &__list {
    margin-left: 1.2rem;
  }

  &__item {
    margin-bottom: 0.5rem;
    font-size: $font-size-base;
    &::marker {
      color: $mygreen-dark;
    }
  }
}
</style>
