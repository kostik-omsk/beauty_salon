<script setup lang="ts">
import { useVkPostsStore } from '@/stores/useVkPostsStore'
import type { WallWallpostFull } from '@vkontakte/api-schema-typescript'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Modules = [Pagination, Navigation]

const postsStore = useVkPostsStore()
const posts: WallWallpostFull[] = postsStore.posts

const getData = (data: number) => {
  return new Date(data * 1000).toLocaleDateString()
}

const handleMouseEnter = (event: Event) => {
  const target = event.target as HTMLElement
  const block = target.querySelector('.post__info') as HTMLElement | null
  const text = target.querySelector('.post__text') as HTMLElement | null

  if (text && block) {
    const height = text.offsetHeight
    if (height > 165) {
      block.classList.add('post__text--active')
      block.style.maxHeight = `${height}px`
    }
  }
}

const handleMouseLeave = (event: Event) => {
  const target = event.target as HTMLElement
  const block = target.querySelector('.post__info') as HTMLElement | null

  if (block) {
    block.style.maxHeight = ''
  }
}
</script>

<template>
  <div class="post">
    <swiper
      :modules="Modules"
      :pagination="{
        el: '.swiper-pagination',
        dynamicBullets: true
      }"
      :style="{
        '--swiper-pagination-color': '#5aa900'
      }"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :space-between="50"
    >
      <swiper-slide
        class="post__content"
        v-for="post in posts"
        :key="post.id"
        @mouseenter="handleMouseEnter($event)"
        @mouseleave="handleMouseLeave($event)"
      >
        <div class="post__media" v-if="post.attachments && post.attachments.length">
          <swiper
            :modules="Modules"
            :navigation="true"
            :space-between="50"
            :style="{
              '--swiper-navigation-color': '#5aa900'
            }"
          >
            <template v-for="(attachment, index) in post.attachments" :key="index">
              <swiper-slide v-if="attachment.type === 'photo' && attachment.photo && attachment.photo.sizes">
                <div class="post__photo">
                  <img class="post__photo--background" :src="attachment.photo.sizes[3].url" alt="Photo" />
                  <img :src="attachment.photo.sizes[3].url" alt="Photo" />
                </div>
              </swiper-slide>
              <swiper-slide v-if="attachment.type == 'video' && attachment.video">
                <iframe
                  class="post__video"
                  :src="`https://vk.com/video_ext.php?oid=${attachment.video.owner_id}&id=${attachment.video.id}&hash=${attachment.video.access_key}`"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </swiper-slide>
            </template>
          </swiper>
        </div>
        <div class="post__info mt-4" v-if="post.text">
          <p class="post__text">{{ post.text }}</p>
        </div>
        <p class="post__date mt-4" v-if="post.date">{{ getData(post.date) }}</p>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';

.post {
  margin-bottom: 4rem;
  cursor: grab;

  &__content {
    width: 550px;
    min-height: 614px;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    overflow: hidden;
    background-color: white;
    @include boxShadow;

    &:hover .post__info::before {
      background: none;
    }
  }

  &__media {
    height: 518px;
  }

  &__photo {
    width: 100%;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;

    .post__photo--background {
      position: absolute;
      inset: 0;
      object-fit: cover;
      filter: blur(30px);
    }

    img {
      position: relative;
      width: 100%;
      object-fit: contain;
      aspect-ratio: 1 / 1;
      background: transparent;
      z-index: 2;
    }
  }

  &__video {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 1rem;
  }

  &__info {
    position: relative;
    max-height: 165px;
    overflow: hidden;
    font-size: $font-size-sm;
    transition: max-height 0.3s ease-in-out;

    &::before {
      top: 0;
      left: 0;
      right: 0;
      bottom: -1px;
      content: '';
      background: -webkit-gradient(linear, left top, left bottom, color-stop(90%, hsla(0, 0%, 100%, 0)), to(#fff));
      background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 90%, #fff);
      position: absolute;
    }
  }

  &__text {
    font-size: $font-size-sm;
  }

  &__date {
    opacity: 0.53;
    text-align: end;
  }
}

.swiper-pagination,
.swiper-pagination-inner {
  position: relative;
}

.swiper-pagination {
  margin-top: 2.5rem;
}

.swiper-pagination-inner {
  margin-top: 1rem;
  text-align: center;
}
</style>
