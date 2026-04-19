<template>
  <div>
    <!-- Page Banner -->
    <section class="page-banner" style="background-image: url('/images/recentactivities.webp'); padding-top: 70px; height: 470px;">
      <div class="banner-overlay">
        <h1 class="banner-title">{{ t('activities_banner_title') }}</h1>
        <p style="font-size: 1.2rem;">{{ t('activities_banner_subtitle') }}</p>
      </div>
    </section>

    <!-- Activities List -->
    <section class="activities-section">
      <div class="container">
        <div v-if="loading" class="status-msg">{{ t('loading') }}</div>
        <div v-else-if="error" class="status-msg error">{{ t('load_failed') }}</div>
        <div v-else-if="!activities.length" class="status-msg">{{ t('no_activities') }}</div>
        <template v-else>
          <div v-for="item in activities" :key="item.id" class="activity-card">
            <div class="activity-img">
              <img :src="getImageUrl(item.coverImage)" :alt="item.titleZh" @error="onImgError" />
            </div>
            <div class="activity-content">
              <div class="activity-date">{{ formatDate(item.dateTime) }}</div>
              <h3 class="activity-title">{{ lang === 'en' ? (item.titleEn || item.titleZh) : item.titleZh }}</h3>
              <p class="activity-desc">{{ lang === 'en' ? (item.introEn || item.introZh) : item.introZh }}</p>
              <router-link :to="`/activities/${item.id}`" class="read-more-btn">{{ t('read_more') }}</router-link>
            </div>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { fetchActivityList, type ActivityItem } from '@/apis/content'
import { useI18n } from '@/composables/useI18n'

const { lang, t } = useI18n()
const activities = ref<ActivityItem[]>([])
const loading = ref(true)
const error = ref(false)

const getImageUrl = (img?: string) => {
  if (!img) return '/images/recentactivities.webp'
  if (img.startsWith('http')) return img
  return img
}

const onImgError = (e: Event) => {
  (e.target as HTMLImageElement).src = '/images/recentactivities.webp'
}

const formatDate = (dateStr?: string) => {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return `${d.getFullYear()}年 ${d.getMonth() + 1}月 ${d.getDate()}日`
}

onMounted(async () => {
  try {
    const res = await fetchActivityList(1, 10, '近期活动')
    if (res.code === 200 && res.rows) {
      activities.value = res.rows
    }
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.page-banner {
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
}
.banner-overlay {
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.banner-title { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: #fff; }
.activities-section { padding: 60px 0; }
.status-msg { text-align: center; padding: 40px 0; color: #666; }
.status-msg.error { color: red; }
.activity-card {
  display: flex;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  margin-bottom: 30px;
  transition: transform 0.3s;
}
.activity-card:hover { transform: translateY(-5px); }
.activity-img { width: 40%; min-height: 250px; }
.activity-img img { width: 100%; height: 100%; object-fit: cover; }
.activity-content {
  width: 60%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.activity-date { color: #215198; font-weight: 600; margin-bottom: 10px; font-size: 0.9rem; }
.activity-title { font-size: 1.5rem; font-weight: 700; margin-bottom: 15px; color: #333; }
.activity-desc { color: #666; line-height: 1.6; margin-bottom: 20px; }
.read-more-btn {
  display: inline-block;
  padding: 10px 25px;
  background: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 30px;
  align-self: flex-start;
  transition: background 0.3s;
}
.read-more-btn:hover { background: #215198; }
@media (max-width: 768px) {
  .activity-card { flex-direction: column; }
  .activity-img { width: 100%; height: 200px; min-height: auto; }
  .activity-content { width: 100%; }
}
</style>
