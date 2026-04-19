<!-- 近期活动 -->
<template>
  <div>
    <div v-if="loading" class="loading-screen"><p>{{ t('loading') }}</p></div>
    <div v-else-if="!activity" class="error-screen">
      <h2>{{ t('no_activity') }}</h2>
      <p>抱歉，您访问的活动页面不存在或已被移除。</p>
      <router-link to="/activities" class="back-btn">{{ t('back_to_activities') }}</router-link>
    </div>
    <template v-else>
      <!-- Hero Banner -->
      <section class="detail-banner" :style="`background-image: url('${getImageUrl(getCoverImage(activity))}')`">
        <div class="container banner-content">
          <div class="activity-meta">
            <div class="meta-item"><i class="fas fa-calendar-alt"></i> {{ formatDate(activity.dateTime) }}</div>
          </div>
          <h1 class="detail-title">{{ lang === 'en' ? (activity.titleEn || activity.titleZh) : activity.titleZh }}</h1>
        </div>
      </section>

      <!-- Main Content -->
      <section class="detail-content">
        <div class="container">
          <div class="content-grid">
            <div class="left-col">
              <div class="section-box">
                <div class="text-content api-rich-text" v-html="getContent()"></div>
              </div>
            </div>
            <div class="right-col">
              <div class="sidebar-card">
                <div class="info-item">
                  <span class="info-label">{{ t('activity_date') }}</span>
                  <span class="info-value">{{ formatDate(activity.dateTime) }}</span>
                </div>
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;" />
                <router-link to="/about" class="contact-consult">
                  <i class="fas fa-envelope"></i> {{ t('contact_us') }}
                </router-link>
                <div style="margin-top: 20px; font-size: 0.9rem; color: #666;">
                  <p>{{ t('contact_desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchActivityList, type ActivityItem } from '@/apis/content'
import { useI18n } from '@/composables/useI18n'

const route = useRoute()
const { lang, t } = useI18n()
const activity = ref<ActivityItem | null>(null)
const loading = ref(true)

const getImageUrl = (img?: string) => {
  if (!img) return '/images/recentactivities.webp'
  if (img.startsWith('http')) return img
  return `/prod-api${img}`
}

const getCoverImage = (item: ActivityItem) => {
  const img = item.coverImage || item.cover_image || item.coverImg || item.cover_img || item.image || item.img || item.thumbnail
  if (!img && import.meta.env.DEV) {
    console.warn('[ActivityDetailView] No coverImage found for item:', item.id, Object.keys(item))
  }
  return img as string | undefined
}

const formatDate = (dateStr?: string) => {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return `${d.getFullYear()}年 ${d.getMonth() + 1}月 ${d.getDate()}日`
}

const getContent = () => {
  if (!activity.value) return ''
  return lang.value === 'en'
    ? (activity.value.contentEn || activity.value.contentZh || '')
    : (activity.value.contentZh || activity.value.contentEn || '')
}

onMounted(async () => {
  const id = route.params.id as string
  if (!id) { loading.value = false; return }
  try {
    const res = await fetchActivityList(1, 100, '近期活动')
    if (res.code === 200 && res.rows) {
      activity.value = res.rows.find(item => String(item.id) === id) || null
    }
  } catch {
    activity.value = null
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.loading-screen, .error-screen {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.back-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #215198;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
}
.detail-banner {
  height: 470px;
  padding-top: 70px;
  background-size: cover;
  background-position: center;
  position: relative;
  color: #fff;
  display: flex;
  align-items: center;
}
.detail-banner::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
}
.banner-content { position: relative; z-index: 1; width: 100%; padding: 0 20px; }
.activity-meta { display: flex; gap: 20px; margin-bottom: 20px; }
.meta-item {
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(5px);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
}
.detail-title { font-size: 3rem; margin-bottom: 15px; color: #fff; }
.detail-content { padding: 60px 0; }
.content-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 50px; }
.section-box { margin-bottom: 50px; }
.text-content { font-size: 1.05rem; color: #555; line-height: 1.8; }
:deep(.api-rich-text img) { max-width: 100%; height: auto; border-radius: 8px; margin: 15px 0; }
:deep(.api-rich-text video) { max-width: 100%; border-radius: 8px; margin: 15px 0; }
.sidebar-card {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  position: sticky;
  top: 100px;
  border: 1px solid #eee;
}
.info-item { margin-bottom: 20px; }
.info-label { font-size: 0.9rem; color: #999; margin-bottom: 5px; display: block; }
.info-value { font-size: 1.1rem; color: #333; font-weight: 600; }
.contact-consult {
  display: block;
  width: 100%;
  padding: 15px;
  background: #215198;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}
.contact-consult:hover { background: #1a3f7a; }
@media (max-width: 768px) {
  .content-grid { grid-template-columns: 1fr; }
  .detail-title { font-size: 2rem; }
}
</style>
