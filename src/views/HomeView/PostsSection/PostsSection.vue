<script setup lang="ts">
import SectionBlock from '@/components/SectionBlock/SectionBlock.vue'
import AppVKPosts from './ui/VKPosts/AppVKPosts.vue'
</script>

<template>
  <SectionBlock class="posts">
    <template #title>Блог</template>
    <template #content>
      <AppVKPosts />
    </template>
  </SectionBlock>
</template>

<style lang="scss" scoped></style>
