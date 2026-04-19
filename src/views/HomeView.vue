<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg">
        <video autoplay muted loop playsinline class="hero-video">
          <source src="/videos/promotionalVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="video-overlay"></div>
      </div>
      <div class="hero-inner">
        <div class="hero-content">
          <h1 class="hero-title">{{ t('hero_title') }}</h1>
          <p class="hero-subtitle">{{ t('hero_subtitle') }}</p>
        </div>
        <div class="hero-search-bar wide">
          <div class="search-inputs">
            <div class="input-group">
              <span class="label">{{ t('search_dest_label') }}</span>
              <input type="text" :placeholder="t('search_dest_ph')" />
            </div>
            <button class="search-btn">{{ t('search_btn') }}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Business Section -->
    <section class="section-padding bg-light">
      <div class="container">
        <div class="section-header center">
          <h2 class="section-title">{{ t('core_business_title') }}</h2>
          <div class="section-subtitle">{{ t('core_business_subtitle') }}</div>
        </div>
        <div class="core-business-grid">
          <div class="core-business-card">
            <div class="core-business-bg" style="background-image: url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');"></div>
            <div class="core-business-overlay"></div>
            <div class="core-business-content">
              <h3 class="core-business-title">{{ t('biz_study_title') }}</h3>
              <p class="core-business-desc">{{ t('biz_study_desc') }}</p>
              <router-link to="/products#study-tour" class="core-business-btn">{{ t('learn_more') }}</router-link>
            </div>
          </div>
          <div class="core-business-card">
            <div class="core-business-bg" style="background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');"></div>
            <div class="core-business-overlay"></div>
            <div class="core-business-content">
              <h3 class="core-business-title">{{ t('biz_gov_title') }}</h3>
              <p class="core-business-desc">{{ t('biz_gov_desc') }}</p>
              <router-link to="/products#business" class="core-business-btn">{{ t('learn_more') }}</router-link>
            </div>
          </div>
          <div class="core-business-card">
            <div class="core-business-bg" style="background-image: url('/images/productcatalog.webp');"></div>
            <div class="core-business-overlay"></div>
            <div class="core-business-content">
              <h3 class="core-business-title">{{ t('biz_culture_title') }}</h3>
              <p class="core-business-desc">{{ t('biz_culture_desc') }}</p>
              <router-link to="/products#culture" class="core-business-btn">{{ t('learn_more') }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>

<style scoped>
/* hero-inner 用 flex 布局，内容视觉居中时补偿 header 高度 */
.hero-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 70px 20px 0; /* 补偿 header 70px，让内容视觉居中 */
  width: 100%;
}
</style>
