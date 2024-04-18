<template>
  <div class="cosmetics__brands mb-4">
    <img class="img-fluid" v-for="(url, index) in CosmeticsImg" :key="index" :src="`${url}`" alt="logo brand" />
  </div>
</template>

<script setup lang="ts">
const CosmeticsImg = [
  'assets/logo/city.svg',
  'assets/logo/evasion.svg',
  'assets/logo/gigi.svg',
  'assets/logo/Isov.svg',
  'assets/logo/storyderm.svg',
  'assets/logo/uton.svg'
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
