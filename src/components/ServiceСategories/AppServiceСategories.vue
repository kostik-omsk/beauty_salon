<template>
  <div class="categories">
    <template v-for="{ id, title, urlName } in listServices" :key="id">
      <router-link class="categories__link" :to="{ name: id }">
        <div class="categories__img">
          <img :src="urlName" :alt="title" />
        </div>
        <p class="categories__title">{{ title }}</p>
      </router-link>
    </template>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useServicesStore } from '@/stores/ListServices'
const ListServices = useServicesStore()
const { listServices } = storeToRefs(ListServices)
</script>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  &__link {
    position: relative;
    padding: 5px;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-color: $myprimary;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
    transition: all 0.4s ease;
    &:hover {
      background: $mygreen;
      box-shadow: 0px 2px 10px rgb(75, 75, 75);
      & .categories__title {
        color: $myprimary;
      }
    }
  }

  &__img {
    border-radius: 20px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    text-align: center;
    margin: 0.5rem 0 0 0;
    padding: 0;
    color: $mygreen;
    font-size: $font-size-md;
    font-weight: 700;
  }
}
</style>
