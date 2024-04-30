<script setup lang="ts">
const { list, title } = defineProps(['list', 'title'])
</script>

<template>
  <div class="service__accordion accordion mt-5">
    <div class="accordion__header">
      <h4 class="accordion__title">{{ title }}:</h4>
    </div>
    <div class="accordion__body">
      <ul class="accordion__list">
        <li class="accordion__item" v-for="(item, index) in list" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
.accordion {
  &__list {
    margin-left: 1.2rem;
  }

  &__item {
    margin-bottom: 0.5rem;
    font-size: $font-size-base;
  }
}
</style>
