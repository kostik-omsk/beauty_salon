<script setup lang="ts">
const { priceList, title } = defineProps(['priceList', 'title'])
</script>

<template>
  <div class="service__prices prices mt-5">
    <div class="prices__list">
      <div class="prices__header">
        <span class="prices__col">Услуга</span>
        <div class="prices__col">
          Цена
          <span class="price-format">{{ title.includes('/') ? `(${title})` : '' }}</span>
        </div>
      </div>
      <div class="prices__item" v-for="(item, index) in priceList" :key="index">
        <span class="prices__subtitle">{{ item.name }}</span>
        <span class="prices__price">{{ item.price }}&#8381;</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';

.prices__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.8rem;
  background-color: #eeeeee;
}

.price-format {
  display: block;
  font-weight: 400;
  font-size: $font-size-sm;
}

.prices__col {
  text-align: center;
  font-size: $font-size-md;
  font-weight: 700;
}

.prices__item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0.8rem;
  border-top: 2px solid #d0d0d0;
  font-size: $font-size-md;

  &:nth-child(odd) {
    background-color: #eeeeee;
  }
}
.prices__subtitle {
  display: block;
}
.prices__price {
  flex-grow: 0;
  flex-shrink: 1;
  font-weight: 800;
}
</style>
