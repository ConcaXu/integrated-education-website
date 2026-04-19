<template>
  <div>
    <div class="products-grid">
      <div v-if="loading" class="status-msg">{{ t('loading') }}</div>
      <div v-else-if="error" class="status-msg error">{{ t('load_failed') }}</div>
      <div v-else-if="!items.length" class="status-msg">{{ t('no_data') }}</div>
      <template v-else>
        <div v-for="item in items" :key="item.id" class="product-card">
          <div class="product-img">
            <img :src="getImageUrl(getCoverImage(item))" :alt="getTitle(item)" @error="onImgError" />
          </div>
          <div class="product-info">
            <h4 class="product-title">{{ getTitle(item) }}</h4>
            <p class="product-desc">{{ truncate(getDesc(item)) }}</p>
            <router-link :to="`/products/${item.id}`" class="product-link">
              {{ t('learn_more_detail') }} <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </template>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="pagination">
      <button
        class="page-btn"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >&lsaquo;</button>
      <button
        v-for="p in totalPages"
        :key="p"
        class="page-btn"
        :class="{ active: p === currentPage }"
        @click="goToPage(p)"
      >{{ p }}</button>
      <button
        class="page-btn"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
      >&rsaquo;</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import { fetchActivityList, type ActivityItem } from '@/apis/content'
import { useI18n, type Lang } from '@/composables/useI18n'

const props = defineProps<{ type: string; country: string; lang: Lang }>()
const { t } = useI18n()

const PAGE_SIZE = 3

const items = ref<ActivityItem[]>([])
const loading = ref(true)
const error = ref(false)
const currentPage = ref(1)
const total = ref(0)

const totalPages = computed(() => Math.ceil(total.value / PAGE_SIZE))

const getImageUrl = (img?: string) => {
  const src = img || ''
  if (!src) return '/images/productcatalog.webp'
  if (src.startsWith('http')) return src
  return `/prod-api${src}`
}

const getCoverImage = (item: ActivityItem) => {
  const img = item.coverImage || item.cover_image || item.coverImg || item.cover_img || item.image || item.img || item.thumbnail
  if (!img && import.meta.env.DEV) {
    console.warn('[ProductGrid] No coverImage found for item:', item.id, Object.keys(item))
  }
  return img as string | undefined
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

const load = async (page = 1) => {
  loading.value = true
  error.value = false
  try {
    const res = await fetchActivityList(page, PAGE_SIZE, props.type, props.country)
    if (res.code === 200 && res.rows) {
      items.value = res.rows
      total.value = res.total ?? 0
    } else {
      items.value = []
      total.value = 0
    }
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

const goToPage = (page: number) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  load(page)
}

onMounted(() => load(1))
watch(() => props.type + props.country, () => {
  currentPage.value = 1
  load(1)
})
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  min-height: 100px;
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

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 24px;
}
.page-btn {
  min-width: 36px;
  height: 36px;
  padding: 0 10px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95rem;
  color: #333;
  transition: all 0.2s;
}
.page-btn:hover:not(:disabled) {
  border-color: #215198;
  color: #215198;
}
.page-btn.active {
  background: #215198;
  border-color: #215198;
  color: #fff;
  font-weight: 600;
}
.page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
