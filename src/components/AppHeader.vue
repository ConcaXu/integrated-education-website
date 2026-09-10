<template>
  <header class="site-header" :class="{ 'site-header--en': lang === 'en' }">
    <div class="site-shell header-inner">
      <router-link class="brand" to="/"
        ><img :src="siteLogo" alt="APIMTC" /></router-link
      ><button class="menu-toggle" @click="open = !open">☰</button>
      <nav :class="{ open }">
        <router-link to="/" exact-active-class="is-active">{{ tx("Home", "首页") }}</router-link
        ><router-link to="/about" exact-active-class="is-active">{{
          tx("About APIMTC", "关于 APIMTC")
        }}</router-link
        ><router-link to="/mobility" exact-active-class="is-active">{{
          tx("Education Mobility", "教育流动")
        }}</router-link
        ><router-link to="/mice-business" exact-active-class="is-active">{{
          tx("MICE & Business", "MICE 与商务")
        }}</router-link
        ><router-link to="/partnerships" exact-active-class="is-active">{{
          tx("Partnerships", "国际合作")
        }}</router-link
        ><router-link to="/china-gateway" exact-active-class="is-active">{{
          tx("China Gateway", "中国门户")
        }}</router-link
        ><router-link class="header-cta" to="/contact" exact-active-class="is-active">{{
          tx("Contact Us", "联系我们")
        }}</router-link
        ><button class="lang-button" @click="toggleLang">
          {{ lang === "zh-CN" ? "EN" : "中" }}
        </button>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "@/composables/useI18n";
import siteLogo from "@/assets/images/logo.webp";
const { lang, toggleLang } = useI18n();
const open = ref(false);
const tx = (en: string, zh: string) => (lang.value === "en" ? en : zh);
</script>
