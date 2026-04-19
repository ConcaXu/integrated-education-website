<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <div class="header-left">
          <div class="logo">
            <router-link to="/">
              <img src="/images/logo.webp" alt="WanderChina Logo" class="logo-img" />
            </router-link>
          </div>
          <nav class="navbar" :class="{ active: mobileMenuOpen }">
            <ul>
              <li>
                <router-link to="/" :class="{ active: route.path === '/' }">{{ t('nav_home') }}</router-link>
              </li>
              <li class="dropdown" :class="{ active: dropdownOpen }">
                <router-link to="/products" :class="{ active: route.path.startsWith('/products') }">
                  {{ t('nav_discover') }}
                </router-link>
                <i class="fas fa-chevron-down nav-arrow" @click.prevent="toggleDropdown"></i>
                <ul class="dropdown-menu">
                  <li><router-link to="/products#study-tour">{{ t('nav_study_tour') }}</router-link></li>
                  <li><router-link to="/products#business">{{ t('nav_business') }}</router-link></li>
                  <li><router-link to="/products#culture">{{ t('nav_culture') }}</router-link></li>
                </ul>
              </li>
              <li>
                <router-link to="/activities" :class="{ active: route.path === '/activities' }">{{ t('nav_tools') }}</router-link>
              </li>
              <li>
                <router-link to="/about" :class="{ active: route.path === '/about' }">{{ t('nav_about') }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header-actions">
          <div class="lang-switch-pill" @click="toggleLang">
            <i class="fas fa-globe"></i>
            <span class="current-lang-text">{{ lang === 'zh-CN' ? 'CN 简体中文' : 'EN English' }}</span>
          </div>
          <div class="mobile-menu-btn" @click="toggleMobileMenu">
            <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '@/composables/useI18n'

const route = useRoute()
const { lang, t, toggleLang } = useI18n()

const mobileMenuOpen = ref(false)
const dropdownOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}
</script>

<style scoped>
.logo-img {
  height: 40px;
  width: auto;
  display: block;
}
</style>
