<template>
  <footer class="footer-new">
    <div class="container">
      <div class="footer-top">
        <div class="footer-col brand-col">
          <img src="/images/logo.webp" alt="WanderChina Logo" class="footer-logo" />
          <div class="footer-slogan" style="margin-bottom: 15px;">
            <h4 style="color: var(--primary-color); font-size: 1.1rem; margin-bottom: 5px; font-weight: 700;">{{ t('footer_slogan_title') }}</h4>
            <p style="font-size: 0.9rem; color: #666;">{{ t('footer_slogan_desc') }}</p>
          </div>
          <p class="footer-desc">{{ t('footer_desc') }}</p>
          <div class="social-icons">
            <a href="#" class="icon-x">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="x-icon">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#"><i class="fas fa-envelope"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-tiktok"></i></a>
          </div>
        </div>

        <div class="footer-links-group">
          <div class="footer-col">
            <h4 class="footer-title">{{ t('footer_core_biz') }}</h4>
            <ul>
              <li><router-link to="/products#study-tour">{{ t('nav_study_tour') }}</router-link></li>
              <li><router-link to="/products#business">{{ t('nav_business') }}</router-link></li>
              <li><router-link to="/products#culture">{{ t('nav_culture') }}</router-link></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-title">{{ t('footer_company') }}</h4>
            <ul>
              <li><router-link to="/about">{{ t('nav_about') }}</router-link></li>
              <li><router-link to="/activities">{{ t('nav_tools') }}</router-link></li>
              <li><a href="#">{{ t('footer_privacy') }}</a></li>
              <li><a href="#">{{ t('footer_feedback') }}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 class="footer-title">{{ t('footer_contact') }}</h4>
            <ul class="footer-contact-info">
              <li style="margin-bottom: 10px; color: #666; font-size: 0.85rem; display: flex; gap: 10px;">
                <span style="font-weight: 600; white-space: nowrap; color: #333;">{{ t('footer_tel') }}:</span>
                <span>+65 6618 6503</span>
              </li>
              <li style="margin-bottom: 10px; color: #666; font-size: 0.85rem; display: flex; gap: 10px;">
                <span style="font-weight: 600; white-space: nowrap; color: #333;">{{ t('footer_email') }}:</span>
                <span>info@apimtravel.com</span>
              </li>
              <li style="color: #666; font-size: 0.85rem; display: flex; gap: 10px; line-height: 1.4;">
                <span style="font-weight: 600; white-space: nowrap; color: #333;">{{ t('footer_addr') }}:</span>
                <span>10 Anson Road #33-01 International Plaza Singapore 079903</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-closing">
        <h3>{{ t('footer_closing_title') }}</h3>
        <p class="footer-closing-desc">{{ t('footer_closing_desc') }}</p>
      </div>

      <div class="footer-bottom">
        <p>Copyright © 2026 Wander China Guide All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>

<style scoped>
.footer-closing {
  text-align: center;
  margin: 40px 0 20px;
  padding-top: 30px;
  border-top: 1px solid var(--border-color);
}
.footer-closing h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 8px;
  font-weight: 600;
}
.footer-closing-desc {
  color: var(--primary-color);
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 1rem;
}
.logo-img {
  height: 40px;
  width: auto;
}
</style>
