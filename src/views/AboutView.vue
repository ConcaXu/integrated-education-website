<template>
  <div>
    <!-- Page Banner -->
    <section class="page-banner">
      <div class="container">
        <h1 class="banner-title">{{ t('nav_about') }}</h1>
        <p class="banner-subtitle">{{ t('about_banner_subtitle') }}</p>
      </div>
    </section>

    <!-- 1. 企业简介 -->
    <section class="intro-section" id="profile">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content">
            <h2>{{ t('about_profile_title') }}</h2>
            <p>{{ t('about_profile_desc') }}</p>
            <p>{{ t('about_profile_auth') }}</p>
          </div>
          <div class="intro-image">
            <img src="/images/enterprise_img01.webp" alt="Company Profile Image" />
          </div>
        </div>
      </div>
    </section>

    <!-- 2. 服务宗旨与核心理念 -->
    <section class="vision-strategy-section" id="vision">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('about_vision_title') }}</h2>
        </div>
        <div class="vision-content">
          <div class="vision-text-block">
            <span class="vision-accent-quote">"Your Dream, We Deliver"</span>
            <div class="vision-grid">
              <div class="vision-item">
                <h4>{{ t('about_vision_tenet') }}</h4>
                <p>{{ t('about_vision_tenet_desc') }}</p>
              </div>
              <div class="vision-item">
                <h4>{{ t('about_vision_concept') }}</h4>
                <p>{{ t('about_vision_concept_desc') }}</p>
              </div>
              <div class="vision-item">
                <h4>{{ t('about_vision_values') }}</h4>
                <p>{{ t('about_vision_values_desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 组织框架 -->
    <section class="team-structure-section" id="structure">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('about_structure_title') }}</h2>
        </div>
        <div class="team-list">
          <div v-for="dept in depts" :key="dept.label" class="team-item">
            <div class="team-desc-box">{{ t(dept.desc) }}</div>
            <div class="team-connector-line"></div>
            <div class="team-dept-box">
              <span class="dept-label">{{ t(dept.label) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. 核心业务介绍 -->
    <section class="plates-section" id="business">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('about_business_title') }}</h2>
        </div>
        <div class="plates-grid">
          <div class="plate-card">
            <div class="plate-icon"><i class="fas fa-graduation-cap"></i></div>
            <h3 class="plate-title">{{ t('about_business_item1') }}</h3>
            <p>{{ t('about_business_item1_desc') }}</p>
          </div>
          <div class="plate-card">
            <div class="plate-icon"><i class="fas fa-briefcase"></i></div>
            <h3 class="plate-title">{{ t('about_business_item2') }}</h3>
            <p>{{ t('about_business_item2_desc') }}</p>
          </div>
          <div class="plate-card" style="grid-column: span 2;">
            <div class="plate-icon"><i class="fas fa-users-cog"></i></div>
            <h3 class="plate-title">{{ t('about_business_item3') }}</h3>
            <p>{{ t('about_business_item3_desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. 为何选择我们 -->
    <section class="why-choose-us-section" id="why-us">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('about_why_title') }}</h2>
        </div>
        <div class="advantage-grid">
          <div v-for="item in whyItems" :key="item.num" class="advantage-card">
            <div class="adv-num">{{ item.num }}</div>
            <div class="adv-content">
              <h3>{{ t(item.title) }}</h3>
              <p>{{ t(item.desc) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. 合作伙伴 -->
    <section class="partners-section" id="partners">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('about_partners_title') }}</h2>
        </div>
        <div class="partner-sub-section">
          <h3 class="partner-sub-title">{{ t('about_partners_clients') }}</h3>
          <div class="logo-box-container">
            <div class="logo-grid">
              <div v-for="n in 9" :key="n" class="logo-item">
                <img :src="`/images/partnerLogo${n}.webp`" :alt="`Partner ${n}`" />
              </div>
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

const depts = [
  { desc: 'about_structure_mgmt', label: 'about_structure_mgmt_label' },
  { desc: 'about_structure_dept1', label: 'about_structure_dept1_label' },
  { desc: 'about_structure_dept2', label: 'about_structure_dept2_label' },
  { desc: 'about_structure_dept3', label: 'about_structure_dept3_label' },
  { desc: 'about_structure_dept4', label: 'about_structure_dept4_label' }
]

const whyItems = [
  { num: '01', title: 'about_why_item1', desc: 'about_why_item1_desc' },
  { num: '02', title: 'about_why_item2', desc: 'about_why_item2_desc' },
  { num: '03', title: 'about_why_item3', desc: 'about_why_item3_desc' },
  { num: '04', title: 'about_why_item4', desc: 'about_why_item4_desc' },
  { num: '05', title: 'about_why_item5', desc: 'about_why_item5_desc' }
]
</script>

<style scoped>
.page-banner {
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/aboutus.webp');
  background-size: cover;
  background-position: center;
  height: 470px;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
}
.banner-title { font-size: 3.5rem; font-weight: 700; margin-bottom: 1rem; letter-spacing: 2px; color: #fff; }
.banner-subtitle { font-size: 1.25rem; opacity: 0.9; color: #fff; }
/* About 页面的 section-header 覆盖全局 */
.section-header { text-align: center; margin-bottom: 60px; }
.section-title {
  font-size: 2.5rem !important;
  color: #215198 !important;
  position: relative;
  padding-bottom: 15px;
  display: inline-block;
}
.section-title::after {
  content: '';
  position: absolute;
  bottom: 0; left: 50%;
  transform: translateX(-50%);
  width: 60px; height: 3px;
  background: #F4D03F;
}
.intro-section { padding: 100px 0; background: #fff; }
.intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.intro-content h2 { font-size: 2rem; color: #215198; margin-bottom: 25px; }
.intro-content p { font-size: 1.1rem; line-height: 1.8; color: #666; margin-bottom: 20px; text-align: justify; }
.intro-image { border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
.intro-image img { width: 100%; display: block; }
.vision-strategy-section { padding: 80px 0; background: #f8fbf9; }
.vision-content { max-width: 1000px; margin: 0 auto; }
.vision-text-block {
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.05);
  border-left: 6px solid #215198;
}
.vision-accent-quote {
  font-family: 'Playfair Display', serif;
  color: #215198;
  font-size: 1.5rem;
  font-weight: 600;
  font-style: italic;
  margin-bottom: 20px;
  display: block;
}
.vision-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 30px; }
.vision-item h4 { color: #215198; margin-bottom: 10px; font-size: 1.2rem; border-bottom: 2px solid #F4D03F; display: inline-block; padding-bottom: 5px; }
.vision-item p { font-size: 1rem; color: #666; }
.team-structure-section { padding: 80px 0; background: #fff; }
.team-list { max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 25px; }
.team-item { display: grid; grid-template-columns: 1fr 120px 1fr; align-items: center; gap: 15px; }
.team-desc-box {
  background: #215198;
  color: #fff;
  padding: 15px 25px;
  border-radius: 4px;
  text-align: center;
  font-weight: 500;
  font-size: 1.1rem;
}
.team-connector-line { height: 2px; border-top: 2px dashed #215198; opacity: 0.4; }
.team-dept-box {
  background: #f4f7f5;
  border: 1px solid #e0e7e1;
  padding: 12px 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 8px solid #215198;
}
.dept-label { font-size: 1.1rem; font-weight: 600; color: #215198; }
.plates-section { padding: 100px 0; background: #f8fbf9; }
.plates-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
.plate-card {
  background: #fff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s;
  border-top: 5px solid #215198;
}
.plate-card:hover { transform: translateY(-10px); }
.plate-icon { font-size: 3rem; color: #215198; margin-bottom: 25px; }
.plate-title { font-size: 1.5rem; margin-bottom: 15px; color: #215198; }
.why-choose-us-section { padding: 80px 0; background: #fff; }
.advantage-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.advantage-card {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #eee;
  transition: 0.3s;
  display: flex;
  gap: 20px;
}
.advantage-card:hover { box-shadow: 0 15px 35px rgba(0,0,0,0.08); border-color: #215198; }
.adv-num { font-size: 2.5rem; font-weight: 800; color: rgba(46,80,56,0.1); line-height: 1; flex-shrink: 0; }
.adv-content h3 { font-size: 1.25rem; margin-bottom: 10px; color: #215198; }
.adv-content p { color: #666; font-size: 0.95rem; line-height: 1.6; }
.partners-section { padding: 80px 0; background: #fff; }
.partner-sub-section { margin-bottom: 60px; }
.partner-sub-title { font-size: 1.8rem; color: #215198; margin-bottom: 30px; display: inline-block; border-bottom: 3px solid #215198; padding-bottom: 8px; }
.logo-box-container { border: 1px solid #e0e7f1; border-radius: 20px; padding: 40px; background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
.logo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; align-items: center; justify-items: center; margin-top: 40px; }
.logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background: #fff;
  border-radius: 12px;
  transition: all 0.4s;
  width: 100%;
  height: 140px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  border: 1px solid #f0f0f0;
}
.logo-item img { max-width: 100%; max-height: 100%; object-fit: contain; }
.logo-item:hover { transform: translateY(-5px); box-shadow: 0 12px 24px rgba(0,0,0,0.08); border-color: #215198; }
@media (max-width: 992px) {
  .plates-grid { grid-template-columns: 1fr; }
  .plates-grid .plate-card[style*="span 2"] { grid-column: span 1; }
}
@media (max-width: 768px) {
  .intro-grid { grid-template-columns: 1fr; }
  .banner-title { font-size: 2.5rem; }
  .team-item { grid-template-columns: 1fr; gap: 10px; }
  .team-connector-line { display: none; }
  .logo-grid { grid-template-columns: repeat(2, 1fr); }
  .plates-grid { grid-template-columns: 1fr; }
}
</style>
