<template>
  <div>
    <!-- Page Banner -->
    <section class="page-banner" style="background-image: url('/images/productcatalog.webp'); padding-top: 70px; height: 470px;">
      <div class="banner-overlay">
        <h1 class="banner-title">{{ t('nav_discover') }}</h1>
        <p style="font-size: 1.2rem;">{{ t('products_banner_subtitle') }}</p>
      </div>
    </section>

    <!-- Study Tours -->
    <section id="study-tour" class="product-category-section">
      <div class="container">
        <div class="category-header">
          <h2 class="category-title">{{ t('study_tour_title') }}</h2>
          <p class="category-subtitle">{{ t('study_tour_subtitle') }}</p>
        </div>
        <div class="region-group">
          <h3 class="region-title">{{ t('singapore_label') }}</h3>
          <ProductGrid type="studyTour" country="singapore" :lang="lang" />
        </div>
        <div class="region-group">
          <h3 class="region-title">{{ t('china_label') }}</h3>
          <ProductGrid type="studyTour" country="CN" :lang="lang" />
        </div>
        <div class="region-group">
          <h3 class="region-title">{{ t('other_countries_label') }}</h3>
          <ProductGrid type="studyTour" country="otherCountries" :lang="lang" />
        </div>
      </div>
    </section>

    <!-- Business Overseas -->
    <section id="business" class="product-category-section bg-light">
      <div class="container">
        <div class="category-header">
          <h2 class="category-title">{{ t('business_title') }}</h2>
          <p class="category-subtitle">{{ t('business_subtitle') }}</p>
        </div>
        <div class="region-group">
          <h3 class="region-title">{{ t('sea_label') }}</h3>
          <ProductGrid type="goingGlobalForGovernmentAndEnterprises" country="singapore" :lang="lang" />
        </div>
        <div class="region-group">
          <h3 class="region-title">{{ t('china_market_label') }}</h3>
          <ProductGrid type="goingGlobalForGovernmentAndEnterprises" country="CN" :lang="lang" />
        </div>
      </div>
    </section>

    <!-- Cultural Tourism -->
    <section id="culture" class="product-category-section">
      <div class="container">
        <div class="category-header">
          <h2 class="category-title">{{ t('culture_title') }}</h2>
          <p class="category-subtitle">{{ t('culture_subtitle') }}</p>
        </div>
        <div class="region-group">
          <h3 class="region-title">{{ t('singapore_label') }}</h3>
          <ProductGrid type="culturalTourism" country="singapore" :lang="lang" />
        </div>
        <div class="region-group">
          <h3 class="region-title">{{ t('china_culture_label') }}</h3>
          <ProductGrid type="culturalTourism" country="CN" :lang="lang" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from '@/composables/useI18n'
import ProductGrid from '@/components/ProductGrid.vue'

const { lang, t } = useI18n()
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
.banner-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
}
.product-category-section { padding: 60px 0; }
.category-header { margin-bottom: 40px; text-align: center; }
.category-title { font-size: 2rem; font-weight: 700; color: #333; margin-bottom: 10px; }
.category-subtitle { color: #666; font-size: 1.1rem; }
.region-group { margin-bottom: 40px; }
.region-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: 4px solid #215198;
}
</style>
