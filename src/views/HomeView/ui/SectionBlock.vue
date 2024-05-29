<script setup lang="ts"></script>

<template>
  <section>
    <div class="header" v-if="$slots.title">
      <div class="container">
        <h2 class="py-3"><slot name="title" /></h2>
      </div>
    </div>
    <slot name="content" />
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
.header {
  color: $secondary;
  background: $myprimary;
  margin-bottom: 3rem;

  h2 {
    font-weight: 800;
    text-shadow: 0px 0px 10px #000000;
  }
}
</style>
