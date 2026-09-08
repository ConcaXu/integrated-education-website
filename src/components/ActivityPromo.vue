<template>
  <section class="activity-promo section"><div class="site-shell">
    <div class="section-heading"><span class="eyebrow">{{ tx('LATEST ACTIVITIES', '近期活动') }}</span><h2>{{ tx('What is happening now.', '关注我们的最新动态。') }}</h2></div>
    <div v-if="loading" class="promo-status">{{ tx('Loading...', '加载中...') }}</div>
    <div v-else-if="error" class="promo-status">{{ tx('Unable to load activities.', '活动加载失败。') }}</div>
    <div v-else-if="!items.length" class="promo-status">{{ tx('No recent activities.', '暂无近期活动。') }}</div>
    <div v-else class="promo-grid"><article v-for="item in items" :key="item.id" class="promo-item"><div class="promo-date">{{ formatDate(item.dateTime) }}</div><h3>{{ lang === 'en' ? item.titleEn || item.titleZh : item.titleZh || item.titleEn }}</h3><p>{{ lang === 'en' ? item.introEn || item.introZh : item.introZh || item.introEn }}</p><router-link class="promo-link" :to="`/activities/${item.id}`">{{ tx('Read more', '查看详情') }} <span aria-hidden="true">→</span></router-link></article></div>
    <router-link v-if="showAllLink" class="button button-dark promo-all" to="/activities">{{ tx('View all activities', '查看全部活动') }}</router-link>
  </div></section>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchActivityList, type ActivityItem, type ActivityType } from '@/apis/content'
import { useI18n } from '@/composables/useI18n'
const props = withDefaults(defineProps<{ activityType?: ActivityType; showAllLink?: boolean }>(), { showAllLink: false })
const { lang } = useI18n(); const items = ref<ActivityItem[]>([]); const loading = ref(true); const error = ref(false)
const tx = (en: string, zh: string) => lang.value === 'en' ? en : zh
const formatDate = (value?: string) => value ? value.slice(0, 10).replace(/-/g, '.') : ''
onMounted(async () => { try { const response = await fetchActivityList(1, 3, props.activityType); if (response.code === 200) items.value = response.rows || [] } catch { error.value = true } finally { loading.value = false } })
</script>
<style scoped>
.activity-promo { background: #f4f1eb; }.promo-status { color: #777; padding: 20px 0; }.promo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }.promo-item { border-top: 2px solid #d45d43; padding-top: 18px; }.promo-date { color: #b35b45; font-size: .8rem; letter-spacing: .08em; margin-bottom: 12px; }.promo-item h3 { color: #1f252b; font-size: 1.25rem; margin-bottom: 10px; }.promo-item p { color: #646464; min-height: 48px; line-height: 1.6; }.promo-link { display: inline-block; margin-top: 14px; color: #1f252b; font-size: .9rem; }.promo-all { margin-top: 34px; }@media (max-width: 768px) {.promo-grid { grid-template-columns: 1fr; gap: 24px; }}
</style>
