<template>
  <div>
    <AppHeader />
    <main>
      <router-view></router-view>
      <ActivityPromo v-if="activityType" :activity-type="activityType" />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import ActivityPromo from '@/components/ActivityPromo.vue'
import type { ActivityType } from '@/apis/content'

const route = useRoute()
const pageActivityTypes: Record<string, ActivityType> = {
  '/about': 'ABOUT_APIMTC',
  '/mobility': 'Educationtype',
  '/mice-business': 'MICE',
  '/partnerships': 'International_Cooperation',
  '/china-gateway': 'Chine_Content',
}
const activityType = computed(() => pageActivityTypes[route.path])
</script>

<style lang="scss">
/* 非首页的内容需要 padding-top 避开 fixed header */
main > *:not(.hero-section-wrapper) {
  /* 由各页面自行处理 */
}
</style>
