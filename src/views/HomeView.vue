<template>
  <div class="landing-page">
    <section class="hero hero-home" :style="{ '--home-hero-image': `url(${homeBanner})` }">
      <div class="hero-media"></div>
      <div class="site-shell hero-content">
        <span class="eyebrow">APIMTC · SINGAPORE</span>
        <h1>
          <span class="hero-line">Singapore-Based</span>
          <span class="hero-line">Globally-Connected</span>
        </h1>
        <p class="hero-lead">
          {{
            tx(
              "Connecting people, education, skills and business across borders.",
              "让人才、教育、技能与商务跨越国界，实现交流与合作。",
            )
          }}
        </p>
        <div class="actions">
          <router-link class="button button-light" to="/mobility">{{
            tx("Explore education mobility", "探索教育流动")
          }}</router-link
          ><router-link class="button button-outline" to="/contact">{{
            tx("Start a conversation", "开始洽谈")
          }}</router-link>
        </div>
      </div>
    </section>
    <section class="section intro-band">
      <div class="site-shell split">
        <div>
          <span class="eyebrow">WHO WE ARE</span>
          <h2>
            {{
              tx(
                "Connecting people, cities, education, industry and opportunity.",
                "连接人才、城市、教育、产业与机遇。",
              )
            }}
          </h2>
        </div>
        <div class="prose">
          <p>
            {{
              tx(
                "APIMTC (Asia Pacific International MICE & Travel Centre) is an international platform headquartered in Singapore. Our work has expanded from MICE and destination management into education mobility, skills development and cross-border exchange.",
                "APIMTC（亚太国际会议会展中心）是总部设于新加坡的国际化平台，业务从会展旅游延伸至国际教育流动、技能发展与跨境交流。",
              )
            }}
          </p>
          <p>
            {{
              tx(
                "API EduVoyage is our Chengdu-based China gateway. Together, Singapore and Chengdu connect talents, institutions and enterprises across China and the world.",
                "API EduVoyage 亚太国际智航是我们位于成都的中国门户。新加坡与成都协同，打通中国与全球的人才、院校和企业资源。",
              )
            }}
          </p>
          <strong>{{
            tx(
              "We do not merely arrange travel — we build connections.",
              "我们不止是出行，而是搭建连接。",
            )
          }}</strong>
        </div>
      </div>
    </section>
    <ActivityPromo activity-type="HomePage" show-all-link />
    <section class="section">
      <div class="site-shell">
        <div class="section-heading">
          <span class="eyebrow">TWO-WAY MOBILITY</span>
          <h2>
            {{ tx("Movement in both directions.", "双向流动，连接世界。") }}
          </h2>
        </div>
        <div class="content-grid mobility-grid">
          <article v-for="item in mobility" :key="item.num" class="info-block">
            <span class="block-number">{{ item.num }}</span>
            <h3>{{ tx(item.enTitle, item.zhTitle) }}</h3>
            <p>{{ tx(item.en, item.zh) }}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="section dark-section">
      <div class="site-shell">
        <div class="section-heading">
          <span class="eyebrow">WHY APIMTC</span>
          <h2>
            {{ tx("Built for meaningful exchange.", "为有意义的交流而生。") }}
          </h2>
        </div>
        <div class="content-grid advantages-grid">
          <article
            v-for="item in advantages"
            :key="item.num"
            class="info-block"
          >
            <span class="block-number">{{ item.num }}</span>
            <h3>{{ tx(item.enTitle, item.zhTitle) }}</h3>
            <p>{{ tx(item.en, item.zh) }}</p>
          </article>
        </div>
      </div>
    </section>
    <section class="section cta-band">
      <div class="site-shell split">
        <div>
          <span class="eyebrow">WHAT WE DO</span>
          <h2>
            {{
              tx(
                "Educate · Experience · Explore · Exchange.",
                "学习 · 体验 · 探索 · 交流。",
              )
            }}
          </h2>
          <p>
            {{
              tx(
                "Our programmes follow the 4E model and combine academic learning, industry exposure, cultural immersion and international peer exchange.",
                "我们的项目遵循 4E 模型，融合学术学习、产业体验、文化探索与国际同伴交流。",
              )
            }}
          </p>
        </div>
        <div class="actions">
          <router-link class="button button-dark" to="/mobility">{{
            tx("Education Mobility", "教育流动")
          }}</router-link
          ><router-link class="button button-dark" to="/mice-business">{{
            tx("MICE & Business", "MICE 与商务")
          }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "@/composables/useI18n";
import ActivityPromo from '@/components/ActivityPromo.vue'
import homeBanner from "@/assets/images/新加坡-图3.png";
const { lang } = useI18n();
const tx = (en: string, zh: string) => (lang.value === "en" ? en : zh);
const mobility = [
  {
    num: "01",
    enTitle: "China Beyond the Classroom",
    zhTitle: "中国课堂之外",
    en: "Immersive China programmes for Singapore students and schools.",
    zh: "面向新加坡师生的沉浸式中国教育项目。",
  },
  {
    num: "02",
    enTitle: "Singapore Future Explorers",
    zhTitle: "新加坡未来探索者",
    en: "Immersive Singapore programmes for global youth.",
    zh: "面向全球青少年的新加坡主题研学营。",
  },
  {
    num: "03",
    enTitle: "API EduVoyage · Chengdu",
    zhTitle: "亚太国际智航 · 成都",
    en: "A China-focused platform for education mobility and global exchange.",
    zh: "中国国际教育流动与全球交流平台。",
  },
];
const advantages = [
  {
    num: "01",
    enTitle: "Singapore-based",
    zhTitle: "新加坡总部背景",
    en: "International perspective and regional connectivity.",
    zh: "拥有国际化视野与成熟的区域链接能力。",
  },
  {
    num: "02",
    enTitle: "China access",
    zhTitle: "中国专属运营门户",
    en: "Dedicated local operation team based in Chengdu.",
    zh: "成都本土团队，深度对接中国教育与产业资源。",
  },
  {
    num: "03",
    enTitle: "Global partnerships",
    zhTitle: "全球合作网络",
    en: "Schools, universities, enterprises and organisations.",
    zh: "联动海内外学校、高校、企业与机构。",
  },
  {
    num: "04",
    enTitle: "Education + industry",
    zhTitle: "教育 + 产业融合",
    en: "Bridge classroom knowledge with real-world exposure.",
    zh: "把课堂知识和真实产业场景相结合。",
  },
  {
    num: "05",
    enTitle: "End-to-end delivery",
    zhTitle: "全链路项目落地",
    en: "Design, coordination, management and execution.",
    zh: "项目设计、合作对接、人员管理与跨境执行一站式交付。",
  },
  {
    num: "06",
    enTitle: "Customised programmes",
    zhTitle: "高度定制化服务",
    en: "Tailored for age groups, objectives and institutions.",
    zh: "匹配不同年龄、院校目标与机构需求定制方案。",
  },
];
</script>
