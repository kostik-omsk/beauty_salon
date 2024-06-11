<script setup lang="ts">
import AppVKPosts from '@/components/VKPosts/AppVKPosts.vue'

import SectionBlock from '@/components/SectionBlock/SectionBlock.vue'
import IntroSection from './IntroSection/IntroSection.vue'
import ServicesSection from './ServicesSection/ServicesSection.vue'
import CosmeticsSection from './CosmeticsSection/CosmeticsSection.vue'
</script>

<template>
  <IntroSection />
  <ServicesSection />
  <CosmeticsSection />
  <SectionBlock class="posts">
    <template #title>Блог</template>
    <template #content>
      <AppVKPosts />
    </template>
  </SectionBlock>
</template>

<style lang="scss">
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';
</style>
