<script setup lang="ts">
import SectionBlock from '@/components/SectionBlock/SectionBlock.vue'
import { useReviewsStore } from '@/stores/reviewsStore'
import { onMounted, computed } from 'vue'

const store = useReviewsStore()

// Реактивное значение html из стора
const html = computed(() => store.getHtml)
const hasMore = computed(() => store.hasMore)
const isLoading = computed(() => store.isLoading)

// Загружаем отзывы при первом рендере страницы
onMounted(() => {
  store.loadReviews(true)
})

// Метод для загрузки дополнительных отзывов
const loadMoreReviews = () => {
  store.loadReviews(false)
}
</script>

<template>
  <SectionBlock class="my-5">
    <template #title>Отзывы</template>
    <template #content>
      <div class="container">
        <div class="reviews">
          <div v-html="html"></div>
          <div class="showmore" v-if="hasMore">
            <button @click="loadMoreReviews" class="btn primary-btn" :disabled="isLoading">
              <span v-if="!isLoading">Показать ещё</span>
              <span v-else>Загрузка...</span>
            </button>
          </div>
        </div>
      </div>
    </template>
  </SectionBlock>
</template>

<style lang="scss">
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';

.reviews {
  margin: 0 auto;
  max-width: 600px;
}

.showmore {
  display: flex;
  justify-content: center;
}

.review {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  @include myBorder;
  @include boxShadow;
}

.review .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.review .rating {
  display: block;
  content: '';
  background-image: url(/assets/img//stars-small.png);
  background-size: 72px;
  background-repeat: no-repeat;
  background-position: 0 0;
  width: var(--stars);
  height: 12px;
}

.review .client {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;
}

.review .client img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.review .details {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: flex-start;
  justify-content: flex-start;
}

.review .details .name {
  font-weight: 700;
  font-size: 0.9rem;
}

.review .details .date {
  opacity: 0.5;
  font-size: 0.8rem;
}
</style>
