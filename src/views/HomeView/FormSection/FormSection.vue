<script setup lang="ts">
import SectionBlock from '@/components/SectionBlock/SectionBlock.vue'
import AppForm from '@/components/Form/AppForm.vue'
</script>

<template>
  <SectionBlock class="cosmetics my-5">
    <template #content>
      <div class="container">
        <AppForm id="form" />
      </div>
    </template>
  </SectionBlock>
</template>

<style lang="scss" scoped></style>
