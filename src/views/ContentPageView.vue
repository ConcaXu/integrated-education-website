<template>
  <div class="content-page">
    <section class="content-hero">
      <div class="site-shell">
        <span class="eyebrow">APIMTC</span>
        <h1>{{ pageTitle }}</h1>
        <p>{{ pageSubtitle }}</p>
      </div>
    </section>

    <section class="section content-section">
      <div class="site-shell">
        <div v-if="loading" class="page-status">{{ tx('Loading...', '加载中...') }}</div>
        <div v-else-if="error" class="page-status">
          <p>{{ tx('Unable to load content. Please try again later.', '内容加载失败，请稍后重试。') }}</p>
          <button class="button button-dark" type="button" @click="loadList">{{ tx('Retry', '重新加载') }}</button>
        </div>
        <div v-else-if="selectedItem" class="content-detail">
          <button class="back-button" type="button" @click="selectedItem = null">
            {{ tx('Back to list', '返回列表') }}
          </button>
          <div v-if="detailLoading" class="page-status">{{ tx('Loading...', '加载中...') }}</div>
          <div v-else-if="detailError" class="page-status">
            <p>{{ tx('Unable to load details. Please try again later.', '详情加载失败，请稍后重试。') }}</p>
            <button class="button button-dark" type="button" @click="loadDetail(selectedItem.id)">{{ tx('Retry', '重新加载') }}</button>
          </div>
          <article v-else class="detail-article">
            <p v-if="formatDate(selectedItem.dateTime)" class="content-date">{{ formatDate(selectedItem.dateTime) }}</p>
            <h2>{{ itemTitle(selectedItem) }}</h2>
            <div class="rich-content" v-html="itemContent(selectedItem)" />
          </article>
        </div>
        <div v-else-if="!items.length" class="page-status">{{ tx('No content is available yet.', '暂无内容。') }}</div>
        <div v-else class="content-list">
          <article v-for="item in items" :key="item.id" class="content-card">
            <p v-if="formatDate(item.dateTime)" class="content-date">{{ formatDate(item.dateTime) }}</p>
            <h2>{{ itemTitle(item) }}</h2>
            <p class="content-summary">{{ itemSummary(item) }}</p>
            <button class="text-button" type="button" @click="loadDetail(item.id)">{{ tx('Read more', '查看详情') }}</button>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { fetchActivityDetail, fetchActivityList, type ActivityItem, type ActivityType } from '@/apis/content'
import { useI18n } from '@/composables/useI18n'

const route = useRoute()
const { lang } = useI18n()
const items = ref<ActivityItem[]>([])
const selectedItem = ref<ActivityItem | null>(null)
const loading = ref(true)
const detailLoading = ref(false)
const error = ref(false)
const detailError = ref(false)

const activityType = computed(() => route.meta.activityType as ActivityType)
const pageTitle = computed(() => lang.value === 'en' ? route.meta.titleEn : route.meta.titleZh)
const pageSubtitle = computed(() => lang.value === 'en' ? 'Explore our latest information and services.' : '了解我们的最新资讯与服务内容。')
const tx = (en: string, zh: string) => lang.value === 'en' ? en : zh

const itemTitle = (item: ActivityItem) => lang.value === 'en'
  ? item.titleEn || item.titleZh
  : item.titleZh || item.titleEn || ''
const stripHtml = (value: string) => value
  .replace(/<[^>]*>/g, ' ')
  .replace(/&nbsp;/gi, ' ')
  .replace(/&amp;/gi, '&')
  .replace(/&lt;/gi, '<')
  .replace(/&gt;/gi, '>')
  .replace(/\s+/g, ' ')
  .trim()
const itemSummary = (item: ActivityItem) => {
  const content = lang.value === 'en'
    ? item.introEn || item.introZh || item.contentEn || item.contentZh || ''
    : item.introZh || item.introEn || item.contentZh || item.contentEn || ''
  const summary = stripHtml(content)
  return summary.length > 150 ? `${summary.slice(0, 150)}...` : summary
}
const itemContent = (item: ActivityItem) => lang.value === 'en'
  ? item.contentEn || item.contentZh || item.introEn || item.introZh || ''
  : item.contentZh || item.contentEn || item.introZh || item.introEn || ''
const formatDate = (value?: string) => value?.slice(0, 10).replace(/-/g, '.') || ''

async function loadList() {
  loading.value = true
  error.value = false
  selectedItem.value = null
  try {
    const response = await fetchActivityList(1, 100, activityType.value)
    if (response.code === 200) items.value = response.rows || []
    else error.value = true
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

async function loadDetail(id: ActivityItem['id']) {
  detailLoading.value = true
  detailError.value = false
  selectedItem.value = items.value.find(item => item.id === id) || null
  try {
    const response = await fetchActivityDetail(id)
    if (response.code === 200 && response.data) selectedItem.value = response.data
    else detailError.value = true
  } catch {
    detailError.value = true
  } finally {
    detailLoading.value = false
  }
}

watch(activityType, loadList, { immediate: true })
</script>

<style scoped>
.content-hero { background: #16243a; color: #fff; padding: 150px 0 84px; }
.content-hero h1 { color: #fff; font-size: clamp(2.2rem, 5vw, 4.25rem); margin: 14px 0; }
.content-hero p { color: #d8e0ea; font-size: 1.1rem; }
.content-section { min-height: 48vh; }
.page-status { color: #667085; text-align: center; padding: 52px 20px; }
.page-status .button { margin-top: 14px; }
.content-list { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.content-card { border-top: 3px solid #d45d43; padding: 22px 4px 8px; display: flex; flex-direction: column; min-height: 230px; }
.content-card h2, .detail-article h2 { color: #1f2937; font-size: 1.45rem; line-height: 1.35; margin: 8px 0 14px; }
.content-card p { color: #667085; line-height: 1.7; margin: 0; white-space: pre-line; }
.content-summary { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4; overflow: hidden; }
.content-date { color: #a64735 !important; font-size: .83rem; letter-spacing: .06em; }
.text-button, .back-button { background: transparent; border: 0; color: #215198; cursor: pointer; font: inherit; font-weight: 600; padding: 0; text-align: left; }
.text-button { margin-top: auto; padding-top: 20px; }
.back-button { margin-bottom: 30px; }
.detail-article { max-width: 880px; }
.rich-content { color: #4b5563; font-size: 1.05rem; line-height: 1.85; white-space: pre-line; }
:deep(.rich-content img), :deep(.rich-content video) { display: block; height: auto; margin: 20px 0; max-width: 100%; }
@media (max-width: 800px) { .content-hero { padding: 120px 0 60px; }.content-list { grid-template-columns: 1fr; gap: 10px; }.content-card { min-height: 180px; } }
</style>
