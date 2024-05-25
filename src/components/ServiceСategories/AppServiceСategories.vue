<template>
  <div class="categories">
    <template v-for="{ id, title, urlName } in listServices" :key="id">
      <router-link class="categories__link" :to="{ name: id }">
        <div class="categories__img">
          <picture>
            <source :srcset="getImageUrl(urlName, 'webp')" type="image/webp" />
            <img :src="getImageUrl(urlName, 'png')" :alt="title" />
          </picture>
        </div>
        <p class="categories__title mb-2">{{ title }}</p>
      </router-link>
    </template>
  </div>
</template>

<script setup lang="ts">
import getImageUrl from '@/utils/getImagesUrl'

const props = defineProps(['services'])
const listServices = props.services
</script>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';
.categories {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: 1.2rem;

  &__link {
    position: relative;
    padding: 5px;
    width: 243px;
    border-radius: 25px;
    background-color: $myprimary;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
    @include myTransitionAll;

    &:hover {
      background: $mygreen;
      box-shadow: 0px 2px 10px rgb(75, 75, 75);

      & .categories__title {
        color: $myprimary;
      }

      & .categories__img {
        img {
          transform: scale(1.05);
        }
      }
    }
  }

  &__img {
    border-radius: 20px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      @include myTransitionAll;
    }
  }

  &__title {
    text-align: center;
    margin: 0.5rem 0 0 0;
    padding: 0;
    color: $mygreen;
    font-size: $font-size-base;
    font-weight: 700;
  }
}
</style>
