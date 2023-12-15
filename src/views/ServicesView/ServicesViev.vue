<template>
  <div class="container">
    <Breadcrumb />
    <div class="services">
      <aside class="menu-scroll">
        <Sidebar />
      </aside>
      <section class="service">
        <RouterView />
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from '@/components/Sidebar/AppSidebar.vue'
import Breadcrumb from '@/components/Breadcrumb/AppBreadcrumb.vue'
</script>

<style lang="scss" scoped>
.services {
  display: grid;
  grid-template-columns: 280px auto;
  gap: 1.1rem;
}
.menu-scroll {
  flex: 1 0 25%;
}
.service {
  flex: 1 0 75%;
}
</style>
