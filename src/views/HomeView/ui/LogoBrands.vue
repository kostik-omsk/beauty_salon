<template>
  <div class="cosmetics__brands mb-4">
    <img class="img-fluid" v-for="(url, index) in CosmeticsImg" :key="index" :src="`${url}`" alt="logo brand" />
  </div>
</template>

<script setup lang="ts">
const CosmeticsImg = [
  new URL('@/assets/logo/city.svg', import.meta.url),
  new URL('@/assets/logo/evasion.svg', import.meta.url),
  new URL('@/assets/logo/gigi.svg', import.meta.url),
  new URL('@/assets/logo/Isov.svg', import.meta.url),
  new URL('@/assets/logo/storyderm.svg', import.meta.url),
  new URL('@/assets/logo/uton.svg', import.meta.url)
]
</script>

<style lang="scss" scoped>
.cosmetics__brands {
  display: grid;
  grid-template-columns: repeat(auto-fit, 130px);
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 462px) {
    justify-content: space-around;
  }
}
</style>
