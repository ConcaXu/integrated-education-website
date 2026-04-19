<template>
  <div class="products-grid">
    <div v-if="loading" class="status-msg">{{ t('loading') }}</div>
    <div v-else-if="error" class="status-msg error">{{ t('load_failed') }}</div>
    <div v-else-if="!items.length" class="status-msg">{{ t('no_data') }}</div>
    <div v-else v-for="item in items" :key="item.id" class="product-card">
      <div class="product-img">
        <img :src="getImageUrl(item.coverImage)" :alt="getTitle(item)" @error="onImgError" />
      </div>
      <div class="product-info">
        <h4 class="product-title">{{ getTitle(item) }}</h4>
        <p class="product-desc">{{ truncate(getDesc(item)) }}</p>
        <router-link :to="`/products/${item.id}`" class="product-link">
          {{ t('learn_more_detail') }} <i class="fas fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { fetchActivityList, type ActivityItem } from '@/apis/content'
import { useI18n, type Lang } from '@/composables/useI18n'

const props = defineProps<{ type: string; country: string; lang: Lang }>()
const { t } = useI18n()

const items = ref<ActivityItem[]>([])
const loading = ref(true)
const error = ref(false)

const getImageUrl = (img?: string) => {
  if (!img) return '/images/productcatalog.webp'
  if (img.startsWith('http')) return img
  return img
}

const onImgError = (e: Event) => {
  (e.target as HTMLImageElement).src = '/images/productcatalog.webp'
}

const getTitle = (item: ActivityItem) =>
  props.lang === 'en' ? (item.titleEn || item.titleZh) : (item.titleZh || item.titleEn || '')

const getDesc = (item: ActivityItem) =>
  props.lang === 'en' ? (item.introEn || item.introZh) : (item.introZh || item.introEn || '')

const truncate = (str?: string) =>
  str && str.length > 60 ? str.substring(0, 60) + '...' : (str || '')

const load = async () => {
  loading.value = true
  error.value = false
  try {
    const res = await fetchActivityList(1, 10, props.type, props.country)
    if (res.code === 200 && res.rows) {
      items.value = res.rows
    } else {
      items.value = []
    }
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(load)
watch(() => props.type + props.country, load)
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}
.status-msg {
  text-align: center;
  padding: 20px;
  color: #666;
  grid-column: 1 / -1;
}
.status-msg.error { color: red; }
.product-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: transform 0.3s;
}
.product-card:hover { transform: translateY(-5px); }
.product-img { height: 200px; overflow: hidden; }
.product-img img { width: 100%; height: 100%; object-fit: cover; }
.product-info { padding: 20px; }
.product-title { font-size: 1.2rem; font-weight: 600; margin-bottom: 10px; }
.product-desc { font-size: 0.9rem; color: #666; line-height: 1.5; margin-bottom: 15px; }
.product-link { display: inline-block; color: #215198; font-weight: 500; text-decoration: none; }
.product-link:hover { text-decoration: underline; }
</style>
