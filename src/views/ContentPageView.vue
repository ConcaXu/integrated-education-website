<template>
  <div class="content-page">
    <section class="content-hero" :style="{ backgroundImage: `url(${heroImage})` }">
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
            <div v-if="coverImage(selectedItem) && !imageErrors[String(selectedItem.id)]" class="detail-cover">
              <img :src="imageUrl(coverImage(selectedItem))" :alt="itemTitle(selectedItem)" @error="markImageError(selectedItem.id)">
            </div>
            <header class="detail-header">
              <p v-if="formatDate(selectedItem.dateTime)" class="content-date">{{ formatDate(selectedItem.dateTime) }}</p>
              <h2>{{ itemTitle(selectedItem) }}</h2>
            </header>
            <div class="rich-content" v-html="itemContent(selectedItem)" />
          </article>
        </div>
        <div v-else-if="!items.length" class="page-status">{{ tx('No content is available yet.', '暂无内容。') }}</div>
        <div v-else class="content-list">
          <article v-for="item in items" :key="item.id" class="content-card">
            <button class="content-card-trigger" type="button" @click="loadDetail(item.id)">
              <div v-if="coverImage(item) && !imageErrors[String(item.id)]" class="content-cover">
                <img :src="imageUrl(coverImage(item))" :alt="itemTitle(item)" loading="lazy" @error="markImageError(item.id)">
              </div>
              <div v-else class="content-cover content-cover-placeholder" aria-hidden="true" />
              <div class="content-card-body">
                <p v-if="formatDate(item.dateTime)" class="content-date">{{ formatDate(item.dateTime) }}</p>
                <h2>{{ itemTitle(item) }}</h2>
                <p class="content-summary">{{ itemSummary(item) }}</p>
                <span class="text-button">{{ tx('Read more', '查看详情') }}</span>
              </div>
            </button>
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
import aboutApimtcHero from '@/assets/images/关于 APIMTC.png'
import chinaGatewayHero from '@/assets/images/中国门户.png'
import contactHero from '@/assets/images/联系我们.png'
import homeHero from '@/assets/images/首页.png'
import internationalCooperationHero from '@/assets/images/国际合作.png'
import miceBusinessHero from '@/assets/images/MICE 与商务.png'
import educationMobilityHero from '@/assets/images/教育流动.png'

const route = useRoute()
const { lang } = useI18n()
const items = ref<ActivityItem[]>([])
const selectedItem = ref<ActivityItem | null>(null)
const loading = ref(true)
const detailLoading = ref(false)
const error = ref(false)
const detailError = ref(false)
const imageErrors = ref<Record<string, boolean>>({})

const activityType = computed(() => route.meta.activityType as ActivityType)
const pageTitle = computed(() => lang.value === 'en' ? route.meta.titleEn : route.meta.titleZh)
const pageSubtitle = computed(() => lang.value === 'en' ? 'Explore our latest information and services.' : '了解我们的最新资讯与服务内容。')
const heroImages: Record<string, string> = {
  '首页': homeHero,
  '关于 APIMTC': aboutApimtcHero,
  '教育流动': educationMobilityHero,
  'MICE 与商务': miceBusinessHero,
  '国际合作': internationalCooperationHero,
  '中国门户': chinaGatewayHero,
  '联系我们': contactHero,
}
const heroImage = computed(() => heroImages[route.meta.titleZh as string] || homeHero)
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
const coverImage = (item: ActivityItem) => item.coverImage || item.cover_image || item.coverImg || item.cover_img || item.image || item.img || item.thumbnail
const imageUrl = (image?: string) => {
  if (!image || image.startsWith('http') || image.startsWith('data:')) return image || ''
  return `/prod-api${image}`
}
const markImageError = (id: ActivityItem['id']) => { imageErrors.value[String(id)] = true }

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
    if (response.code === 200 && response.data) selectedItem.value = { ...selectedItem.value, ...response.data }
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
.content-hero { background-color: #16243a; background-position: center; background-repeat: no-repeat; background-size: cover; color: #fff; min-height: 329px; padding: 110px 0 56px; position: relative; }
.content-hero::before { background: rgba(10, 23, 42, .7); content: ''; inset: 0; position: absolute; }
.content-hero .site-shell { position: relative; z-index: 1; }
.content-hero h1 { color: #fff; font-size: clamp(2.2rem, 5vw, 4.25rem); margin: 14px 0; }
.content-hero p { color: #d8e0ea; font-size: 1.1rem; }
.content-section { min-height: 48vh; }
.page-status { color: #667085; text-align: center; padding: 52px 20px; }
.page-status .button { margin-top: 14px; }
.content-list { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px 24px; }
.content-card { min-width: 0; }
.content-card-trigger { appearance: none; background: transparent; border: 0; color: inherit; cursor: pointer; display: block; padding: 0; text-align: left; width: 100%; }
.content-cover { aspect-ratio: 4 / 3; background: #e2ddd4; overflow: hidden; position: relative; }
.content-cover::after { background: linear-gradient(180deg, transparent 62%, rgba(23, 23, 23, .16)); content: ''; inset: 0; opacity: 0; position: absolute; transition: opacity .24s ease; }
.content-cover img { display: block; height: 100%; object-fit: cover; transition: transform .45s ease; width: 100%; }
.content-cover-placeholder { background: linear-gradient(135deg, #ded8ce 0%, #f0ece4 48%, #c5c2b9 100%); }
.content-card-body { border-top: 2px solid #d45d43; padding: 16px 4px 6px; }
.content-card h2, .detail-article h2 { color: #1f2937; font-family: 'Playfair Display', Georgia, serif; font-size: clamp(1.45rem, 2.2vw, 1.85rem); font-weight: 600; line-height: 1.2; margin: 8px 0 14px; overflow-wrap: anywhere; }
.content-card p { color: #667085; line-height: 1.7; margin: 0; white-space: pre-line; }
.content-summary { -webkit-box-orient: vertical; -webkit-line-clamp: 3; display: -webkit-box; overflow: hidden; }
.content-date { color: #a64735 !important; font-size: .83rem; letter-spacing: .06em; }
.text-button, .back-button { background: transparent; border: 0; color: #215198; cursor: pointer; font: inherit; font-weight: 700; padding: 0; text-align: left; }
.text-button { display: inline-block; margin-top: 20px; }
.content-card-trigger:hover .content-cover img, .content-card-trigger:focus-visible .content-cover img { transform: scale(1.035); }
.content-card-trigger:hover .content-cover::after, .content-card-trigger:focus-visible .content-cover::after { opacity: 1; }
.content-card-trigger:focus-visible, .back-button:focus-visible { outline: 2px solid #215198; outline-offset: 5px; }
.back-button { margin-bottom: 30px; min-height: 44px; }
.detail-article { margin: 0 auto; max-width: 900px; }
.detail-cover { aspect-ratio: 16 / 9; background: #e2ddd4; margin-bottom: 34px; overflow: hidden; }
.detail-cover img { display: block; height: 100%; object-fit: cover; width: 100%; }
.detail-header { border-bottom: 1px solid #d9d2c7; margin-bottom: 30px; padding-bottom: 26px; }
.detail-header h2 { font-size: clamp(2rem, 4vw, 3.4rem); margin-bottom: 0; max-width: 15ch; }
.rich-content { color: #4b5563; font-size: 1.05rem; line-height: 1.85; max-width: 70ch; overflow-wrap: anywhere; white-space: pre-line; }
:deep(.rich-content img), :deep(.rich-content video) { display: block; height: auto; margin: 28px 0; max-width: 100%; }
@media (max-width: 900px) { .content-list { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 600px) { .content-hero { min-height: 270px; padding: 105px 0 48px; }.content-list { grid-template-columns: 1fr; gap: 28px; }.detail-cover { margin-bottom: 24px; }.detail-header { margin-bottom: 22px; padding-bottom: 20px; } }
@media (prefers-reduced-motion: reduce) { .content-cover::after, .content-cover img { transition: none; } }
</style>
