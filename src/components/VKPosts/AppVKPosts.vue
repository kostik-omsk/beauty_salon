<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useVkPostsStore } from '@/stores/useVkPostsStore'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Keyboard } from 'swiper/modules'
import AppModal from '@/components/Modal/AppModal.vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Modules = [Pagination, Navigation, Keyboard]
const store = useVkPostsStore()
const { posts, loadPosts, isLoading, hasMore } = store

const isDialogOpen = ref<boolean>(false)
const typeDialog = ref<'photo' | 'video' | ''>('')
const urlPhoto = ref<string>('')
const urlVideo = ref<string>('')
const showSwipeMove = ref<boolean>(true)

const getData = (data: number) => {
  return new Date(data * 1000).toLocaleDateString()
}

const handleMouseEnter = (event: Event) => {
  const target = event.target as HTMLElement
  const block = target.querySelector('.post__info') as HTMLElement | null
  const text = target.querySelector('.post__text') as HTMLElement | null

  if (text && block) {
    const height = text.offsetHeight
    if (height > 168) {
      block.classList.add('post__text--active')
      block.style.height = `${height}px`
    }
  }
}

const handleMouseLeave = (event: Event) => {
  const target = event.target as HTMLElement
  const block = target.querySelector('.post__info') as HTMLElement | null

  if (block) {
    block.style.height = ''
  }
}

const openDialog = (postIndex: number, mediaIndex: number, type: string) => {
  const post = posts[postIndex]
  const attachment = post?.attachments?.[mediaIndex]
  if (attachment && type === 'photo' && attachment.type === 'photo' && attachment.photo && attachment.photo.sizes) {
    typeDialog.value = type
    urlPhoto.value = attachment.photo.sizes[3]?.url || ''
    isDialogOpen.value = true
  } else if (attachment && type === 'video' && attachment.type === 'video' && attachment.video) {
    typeDialog.value = type
    urlVideo.value = `https://vk.com/video_ext.php?oid=${attachment.video.owner_id}&id=${attachment.video.id}&hash=${attachment.video.access_key}`
    isDialogOpen.value = true
  } else {
    isDialogOpen.value = false
    return
  }
}

const closeDialog = () => {
  isDialogOpen.value = false
}

const hideSwipeMove = () => {
  showSwipeMove.value = false
}

const loadMorePosts = () => {
  if (hasMore && !isLoading) {
    loadPosts()
  }
}

// onMounted(async () => {
//   await loadPosts()
// })
</script>

<template>
  <div class="post">
    <div v-if="posts" class="post__swipe-move" :class="{ hidden: !showSwipeMove }">
      <img src="/assets/img/swipe.png" alt="" />
    </div>
    <swiper
      :modules="Modules"
      :pagination="{
        el: '.swiper-pagination',
        dynamicBullets: true
      }"
      :keyboard="{ enabled: true }"
      :slidesPerView="'auto'"
      :centeredSlides="true"
      :style="{
        '--swiper-pagination-color': '#5aa900'
      }"
      :space-between="50"
      @slideChange="hideSwipeMove"
      @reachEnd="loadMorePosts"
    >
      <swiper-slide
        class="post__content"
        v-for="(post, inPost) in posts"
        :key="post.id"
        @mouseenter="handleMouseEnter($event)"
        @mouseleave="handleMouseLeave($event)"
      >
        <div
          class="post__media"
          :class="{ 'full-height': !post.text }"
          v-if="post.attachments && post.attachments.length"
        >
          <swiper
            :modules="Modules"
            :navigation="true"
            :space-between="50"
            :style="{
              '--swiper-navigation-color': '#5aa900'
            }"
          >
            <template v-for="(attachment, index) in post.attachments" :key="index">
              <swiper-slide
                v-if="attachment.type === 'photo' && attachment.photo && attachment.photo.sizes"
                @click="openDialog(inPost, index, 'photo')"
              >
                <div class="post__photo">
                  <img class="post__photo--background" :src="attachment.photo.sizes[3].url" alt="Photo" />
                  <img :src="attachment.photo.sizes[3].url" :alt="`Photo ${index}`" loading="lazy" />
                </div>
              </swiper-slide>
              <swiper-slide v-if="attachment.type == 'video' && attachment.video && attachment.video.image">
                <div class="post__video-preview">
                  <img :src="attachment.video.image[3].url" :alt="`Photo ${index}`" loading="lazy" />
                  <button class="post__video-btn" @click="openDialog(inPost, index, 'video')">
                    <i class="bi bi-play"></i>
                  </button>
                </div>
              </swiper-slide>
            </template>
          </swiper>
        </div>
        <div class="post__info mt-4" v-if="post.text">
          <p class="post__text">{{ post.text }}</p>
        </div>
        <p class="post__date mt-3 mb-0" v-if="post.date">{{ getData(post.date) }}</p>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
    <AppModal :isOpen="isDialogOpen" @close-dialog="closeDialog">
      <template #foto v-if="typeDialog === 'photo'">
        <img class="post__photo--dialog" :src="urlPhoto" alt="Photo" />
      </template>
      <template #video v-if="typeDialog === 'video'">
        <iframe class="post__video" :src="urlVideo" frameborder="0" allowfullscreen></iframe>
      </template>
    </AppModal>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';

.post {
  position: relative;
  margin-bottom: 4rem;
  user-select: none;

  &__swipe-move {
    position: absolute;
    top: -28px;
    left: 49%;
    width: 32px;
    height: 32px;
    margin: 0 auto;
    animation: call 2s infinite;
    transition: opacity 0.7s;
    z-index: 10;
    &.hidden {
      opacity: 0;
    }

    @media screen and (max-width: 768px) {
      left: 44%;
    }

    @keyframes call {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(10px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  &__content {
    width: clamp(21.875rem, 15.883rem + 16.588vw, 26.25rem);
    min-height: clamp(32.125rem, 20.483rem + 32.227vw, 41rem);
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    overflow: hidden;
    background-color: white;
    cursor: move;
    @include boxShadow;

    &:hover .post__info::before {
      background: none;
    }
  }

  &__media {
    &.full-height {
      height: clamp(31.688rem, 25.353rem + 17.536vw, 36.213rem);

      .post__photo {
        height: clamp(31.688rem, 25.353rem + 17.536vw, 36.213rem);

        img {
          height: 100%;
          aspect-ratio: auto;
          object-fit: contain;
        }
      }
    }
  }

  &__photo {
    width: 100%;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;

    .post__photo--background {
      position: absolute;
      inset: 0;
      object-fit: cover;
      filter: blur(30px);
    }

    img {
      position: relative;
      width: 100%;
      height: auto;
      object-fit: contain;
      aspect-ratio: 1 / 1;
      background: transparent;
      z-index: 2;
    }
  }

  &__video-preview {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
      object-fit: cover;
    }
  }

  &__video {
    width: 100%;
    height: 100%;
    aspect-ratio: 9/ 16;
  }

  &__video-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    cursor: pointer;

    i {
      display: block;
      position: relative;
      top: 4%;
      left: 3%;
      transform: scale(2.5);
      transition: all 0.3s ease-in-out;
    }

    &:hover i {
      transform: scale(3);
    }
  }

  &__info {
    position: relative;
    height: 165px;
    overflow: hidden;
    font-size: $font-size-sm;
    transition: height 0.3s ease-in-out;

    &::before {
      top: 0;
      left: 0;
      right: 0;
      bottom: -1px;
      content: '';
      background: -webkit-gradient(linear, left top, left bottom, color-stop(90%, hsla(0, 0%, 100%, 0)), to(#fff));
      background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 90%, #fff);
      position: absolute;

      @media only screen and (max-width: 910px) {
        background: -webkit-gradient(linear, left top, left bottom, color-stop(75%, hsla(0, 0%, 100%, 0)), to(#fff));
        background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 75%, #fff);
      }

      @media only screen and (max-width: 576px) {
        background: -webkit-gradient(linear, left top, left bottom, color-stop(83%, hsla(0, 0%, 100%, 0)), to(#fff));
        background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 83%, #fff);
      }
    }
  }

  &__text {
    font-size: $font-size-sm;
  }

  &__date {
    opacity: 0.53;
    text-align: end;
  }

  &__photo--dialog {
    width: 100%;
    max-height: 650px;
    object-fit: contain;
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
