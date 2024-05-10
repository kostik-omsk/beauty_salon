<script setup lang="ts">
import { ref } from 'vue'
import AppModal from '@/components/Modal/AppModal.vue'

const { priceList, title } = defineProps(['priceList', 'title'])

const isDialogOpen = ref(false)
const currentItemIndex = ref(-1)

const openDialog = (index: number) => {
  currentItemIndex.value = index
  isDialogOpen.value = true
}

const closeDialog = () => {
  isDialogOpen.value = false
}
</script>

<template>
  <div class="service__prices prices mt-5">
    <div class="prices__list">
      <div class="prices__header">
        <span class="prices__col">Услуга</span>
        <div class="prices__col">
          Цена &#8381;
          <span class="price-format">{{ title.includes('/') ? `(${title})` : '' }}</span>
        </div>
      </div>
      <div class="prices__item" v-for="(item, index) in priceList" :key="index">
        <span class="prices__subtitle">
          {{ item.name }}
          <i class="prices__info bi bi-question-circle" v-if="item.info" @click="openDialog(index)"></i>
        </span>
        <span class="prices__price">{{ item.price }}</span>
      </div>
    </div>
  </div>
  <AppModal :isOpen="isDialogOpen" @close-dialog="closeDialog">
    <template #title>{{ priceList[currentItemIndex].name }}</template>
    <template #content>{{ priceList[currentItemIndex].info }} </template>
  </AppModal>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';

.prices {
  border-radius: 1rem;
  overflow: hidden;

  @include boxShadow;
}

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
  font-size: $font-size-base;
  font-weight: 700;
}

.prices__item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0.8rem;
  border-top: 2px solid #d0d0d0;
  font-size: $font-size-base;

  &:nth-child(odd) {
    background-color: #eeeeee;
  }
}
.prices__subtitle {
  display: block;
}
.prices__price {
  text-align: end;
  flex-grow: 0;
  flex-shrink: 1;
  font-weight: 800;
}

.prices__info {
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: $mygreen-dark;
  }
}
</style>
