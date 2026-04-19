<template>
  <div>
    <AppHeader />
    <main>
      <router-view></router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style lang="scss">
/* 非首页的内容需要 padding-top 避开 fixed header */
main > *:not(.hero-section-wrapper) {
  /* 由各页面自行处理 */
}
</style>
