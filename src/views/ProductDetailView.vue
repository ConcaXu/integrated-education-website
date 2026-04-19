<template>
  <div>
    <div v-if="loading" class="loading-screen">
      <p>{{ t('loading') }}</p>
    </div>
    <div v-else-if="!product" class="error-screen">
      <h2>{{ t('no_product') }}</h2>
      <p>抱歉，您访问的产品页面不存在或已被移除。</p>
      <router-link to="/products" class="back-btn">{{ t('back_to_products') }}</router-link>
    </div>
    <template v-else>
      <!-- Hero Banner -->
      <section class="detail-banner" :style="`background-image: url('${getImageUrl(getCoverImage(product))}')`">
        <div class="container banner-content">
          <div class="product-meta">
            <div v-if="product.type" class="meta-item">
              <i class="fas fa-tag"></i> {{ product.type }}
            </div>
          </div>
          <h1 class="detail-title">{{ getTitle() }}</h1>
          <p class="detail-subtitle">{{ getIntro() }}</p>
        </div>
      </section>

      <!-- Main Content -->
      <section class="detail-content">
        <div class="container">
          <div class="content-grid">
            <div class="left-col">
              <div class="section-box">
                <div class="text-content" v-html="getContent()"></div>
              </div>
            </div>
            <div class="right-col">
              <div class="sidebar-card">
                <div style="margin-bottom: 20px; text-align: center;">
                  <h4 style="font-size: 1.2rem; color: #333; margin-bottom: 10px;">感兴趣这个项目？</h4>
                  <p style="font-size: 0.9rem; color: #666;">立即咨询，定制您的专属行程</p>
                </div>
                <router-link to="/about" class="contact-consult">
                  <i class="fas fa-comment-alt"></i> {{ t('consult_now') }}
                </router-link>
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;" />
                <div style="font-size: 0.9rem; color: #666;">
                  <p style="margin-bottom: 10px;"><i class="fas fa-check" style="color: green; margin-right: 5px;"></i> 专业向导陪同</p>
                  <p style="margin-bottom: 10px;"><i class="fas fa-check" style="color: green; margin-right: 5px;"></i> 全程无强制购物</p>
                  <p><i class="fas fa-check" style="color: green; margin-right: 5px;"></i> 正规旅行社资质</p>
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
import { fetchActivityDetail, type ActivityItem } from '@/apis/content'
import { useI18n } from '@/composables/useI18n'

const route = useRoute()
const { lang, t } = useI18n()

const product = ref<ActivityItem | null>(null)
const loading = ref(true)

const getImageUrl = (img?: string) => {
  if (!img) return '/images/productcatalog.webp'
  if (img.startsWith('http')) return img
  return `/prod-api${img}`
}

const getCoverImage = (item: ActivityItem | null) => {
  if (!item) return undefined
  const img = item.coverImage || item.cover_image || item.coverImg || item.cover_img || item.image || item.img || item.thumbnail
  if (!img && import.meta.env.DEV) {
    console.warn('[ProductDetailView] No coverImage found for item:', item.id, Object.keys(item))
  }
  return img as string | undefined
}

const getTitle = () => {
  if (!product.value) return ''
  return lang.value === 'en'
    ? (product.value.titleEn || product.value.titleZh || '')
    : (product.value.titleZh || product.value.titleEn || '')
}

const getIntro = () => {
  if (!product.value) return ''
  return lang.value === 'en'
    ? (product.value.introEn || product.value.introZh || '')
    : (product.value.introZh || product.value.introEn || '')
}

const getContent = () => {
  if (!product.value) return ''
  return lang.value === 'en'
    ? (product.value.contentEn || product.value.contentZh || '')
    : (product.value.contentZh || product.value.contentEn || '')
}

onMounted(async () => {
  const id = route.params.id as string
  if (!id) { loading.value = false; return }
  try {
    const res = await fetchActivityDetail(id)
    if (res.code === 200 && res.data) {
      product.value = res.data
    }
  } catch {
    product.value = null
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
.product-meta { display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap; }
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
.detail-subtitle { font-size: 1.2rem; opacity: 0.9; max-width: 800px; }
.detail-content { padding: 60px 0; }
.content-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 50px; }
.section-box { margin-bottom: 50px; }
.text-content { font-size: 1.05rem; color: #555; line-height: 1.8; }
.sidebar-card {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  position: sticky;
  top: 100px;
  border: 1px solid #eee;
}
.contact-consult {
  display: block;
  width: 100%;
  padding: 15px;
  background: #215198;
  color: #fff;
  text-align: center;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: 0.3s;
}
.contact-consult:hover { background: #1a3f7a; transform: translateY(-2px); }
@media (max-width: 900px) {
  .content-grid { grid-template-columns: 1fr; }
  .sidebar-card { position: static; margin-top: 40px; }
  .detail-title { font-size: 2rem; }
}
</style>
