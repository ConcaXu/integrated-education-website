<template>
  <div
    class="portal-page"
    :class="{ 'portal-page--home': key === '首页' }"
    :style="{ '--model-bg': `url(${modelBackground})` }"
  >
    <section
      class="portal-hero"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="portal-shell portal-hero__copy">
        <p class="hero-kicker">{{ tx(page.kicker, page.kickerEn || page.kicker) }}</p>
        <h1>{{ tx(page.title, page.titleEn) }}</h1>
        <p class="hero-lead">{{ tx(page.lead, page.leadEn) }}</p>
        <p v-if="page.description" class="hero-description">
          {{ tx(page.description, page.descriptionEn || page.description) }}
        </p>
        <div v-if="page.action || page.secondaryAction" class="hero-actions">
          <router-link v-if="page.action" class="hero-action" to="/contact">{{
            tx(page.action, page.actionEn || page.action)
          }}</router-link>
          <router-link v-if="page.secondaryAction" class="hero-action" to="/contact">{{
            tx(page.secondaryAction, page.secondaryActionEn || page.secondaryAction)
          }}</router-link>
        </div>
      </div>
    </section>
    <main class="portal-main">
      <section
        v-for="section in page.sections"
        :key="section.title"
        class="portal-section"
        :class="[
          section.variant,
          {
            'portal-section--business':
              key === '首页' && section.title === '我们的业务',
            'portal-section--four-e':
              ['首页', '教育流动'].includes(key) && section.title === 'APIMTC 4E 模型',
            'portal-section--why':
              key === '首页' && section.title === '为什么选择 APIMTC？',
          },
        ]"
        v-show="!(key === '首页' && section.title === 'APIMTC')"
      >
        <div class="portal-shell">
          <div
            v-if="key === '首页' && section.title === '为什么选择 APIMTC？'"
            class="why-layout"
          >
            <div class="why-layout__copy">
              <p class="section-kicker">WHY APIMTC</p>
              <h2>{{ tx(section.title, section.titleEn) }}</h2>
              <p class="why-layout__intro">
                {{ tx(section.intro || '', section.introEn || section.intro || '') }}
              </p>
              <div class="why-layout__rules" aria-label="APIMTC platform strengths">
                <span>{{ tx('新加坡总部', 'Singapore base') }}</span>
                <span>{{ tx('中国门户', 'China gateway') }}</span>
                <span>{{ tx('全球网络', 'Global network') }}</span>
              </div>
              <router-link class="why-layout__action" to="/contact">
                {{ tx('与我们合作', 'Partner with us') }}
                <span aria-hidden="true">→</span>
              </router-link>
            </div>
            <div class="why-layout__visual">
              <img :src="home02" :alt="tx('APIMTC 国际连接场景', 'APIMTC global connections')" />
              <p class="why-layout__caption">Singapore · Chengdu · World</p>
            </div>
          </div>
          <div v-else class="portal-heading">
            <p v-if="section.kicker" class="section-kicker">
              {{ section.kicker }}
            </p>
            <h2>{{ tx(section.title, section.titleEn) }}</h2>
            <p v-if="section.intro" class="section-intro">
              {{ tx(section.intro, section.introEn || section.intro) }}
            </p>
          </div>
          <div v-if="section.feature" class="feature-panel">
            <img :src="section.feature.image" :alt="section.feature.title" />
            <div class="feature-panel__copy">
              <p class="section-kicker">{{
                tx(
                  section.feature.kicker,
                  section.feature.kickerEn || section.feature.kicker,
                )
              }}</p>
              <h3>
                {{
                  tx(
                    section.feature.title,
                    section.feature.titleEn || section.feature.title,
                  )
                }}
              </h3>
              <p>
                {{
                  tx(
                    section.feature.text,
                    section.feature.textEn || section.feature.text,
                  )
                }}
              </p>
              <router-link
                v-if="section.feature.action"
                to="/contact"
                class="text-link"
                >{{
                  tx(
                    section.feature.action,
                    section.feature.actionEn || section.feature.action,
                  )
                }} <span>+</span></router-link
              >
            </div>
          </div>
          <div
            v-if="section.cards?.length"
            class="portal-grid"
            :class="`portal-grid--${section.columns || 3}`"
          >
            <template v-for="card in section.cards" :key="card.title">
              <div
                v-if="key === '首页' && section.title === 'APIMTC 4E 模型'"
                class="four-e-message"
              >
                <h3>{{ tx(card.title, card.titleEn || card.title) }}</h3>
              </div>
              <article
                v-else
                class="portal-card"
                :class="{
                  'portal-card--image': card.image,
                  'portal-card--platform': card.platform,
                }"
              >
              <img v-if="card.image" :src="card.image" :alt="card.title" />
              <div class="portal-card__body">
                <i
                  v-if="card.icon"
                  class="portal-card__icon"
                  :class="getCardIcon(card.title)"
                  aria-hidden="true"
                ></i>
                <h3>{{ tx(card.title, card.titleEn || card.title) }}</h3>
                <p v-if="card.text">{{ tx(card.text, card.textEn || card.text) }}</p>
                <router-link v-if="card.action" to="/contact" class="card-more"
                  >+</router-link
                >
              </div>
              <i
                v-if="
                  card.icon &&
                  !card.platform &&
                  !(key === '首页' && ['我们的业务', '双向国际流动'].includes(section.title))
                "
                class="portal-card__side-icon"
                :class="getCardIcon(card.title)"
                aria-hidden="true"
              ></i>
              </article>
            </template>
          </div>
          <div v-if="section.steps?.length" class="step-row">
            <template
              v-for="(step, index) in lang === 'en' ? section.stepsEn || section.steps : section.steps"
              :key="step"
              ><span>{{ step }}</span
              ><b v-if="index < section.steps.length - 1">→</b></template
            >
          </div>
          <router-link
            v-if="section.action"
            class="hero-action"
            :class="{
              'portal-section__action--centered':
                (key === '教育流动' && section.action === '探索教育项目') ||
                (key === 'MICE 与商务' && section.action === '与 APIMTC 合作') ||
                (key === '国际合作' && section.action === '联系 APIMTC') ||
                (key === '联系我们' && section.title === '与我们联系'),
            }"
            to="/contact"
          >{{
            tx(section.action, section.actionEn || section.action)
          }}</router-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "@/composables/useI18n";
import aboutHero from "@/assets/images/关于 APIMTC.png";
import chinaHero from "@/assets/images/中国门户.png";
import contactHero from "@/assets/images/联系我们.png";
import homeHero from "@/assets/images/首页.png";
import intlHero from "@/assets/images/国际合作.png";
import miceHero from "@/assets/images/MICE 与商务.png";
import mobilityHero from "@/assets/images/教育流动.png";
import home01 from "@/assets/content-images/首页-01.jpeg";
import homeEducationMobility from "@/assets/content-images/首页-教育流动.png";
import home02 from "@/assets/images/首页-内容图/首页-新加坡01.png";
import homeContent03 from "@/assets/images/首页-内容图/首页-03.png";
import homeContent05 from "@/assets/images/首页-内容图/首页-05.png";
import homeContent06 from "@/assets/images/首页-内容图/首页-06.png";
import platformSingapore from "@/assets/images/首页-内容图/首页-新加坡.png";
import platformChengdu from "@/assets/images/首页-内容图/首页-成都.png";
import platformWorld from "@/assets/images/首页-内容图/首页-世界.png";
import mobility01 from "@/assets/content-images/教育流动-01.jpeg";
import mobility02 from "@/assets/content-images/教育流动-02.jpeg";
import mobility03 from "@/assets/content-images/教育流动-03.jpeg";
import mice01 from "@/assets/images/首页-内容图/首页-商务.png";
import mice02 from "@/assets/content-images/MICE 与商务-02.jpeg";
import intl01 from "@/assets/content-images/国际合作-01.jpeg";
import china01 from "@/assets/content-images/中国门户-01.jpeg";
import china06 from "@/assets/content-images/中国门户-06.jpeg";
import contact01 from "@/assets/content-images/联系我们-01.jpeg";
import cityShanghai from "@/assets/city-images/上海.webp";
import cityShenzhen from "@/assets/city-images/深圳.webp";
import cityHangzhou from "@/assets/city-images/杭州.png";
import citySuzhou from "@/assets/city-images/苏州.png";
import cityBeijing from "@/assets/city-images/北京.png";
import cityXiAn from "@/assets/city-images/西安.png";
import cityChengdu from "@/assets/city-images/成都.png";
import cityGuangzhou from "@/assets/city-images/广州.png";
import modelBackground from "@/assets/images/细长横图.png";
type Card = {
  title: string;
  text: string;
  icon?: string;
  image?: string;
  platform?: boolean;
  action?: string;
  actionEn?: string;
  titleEn?: string;
  textEn?: string;
};
type Feature = {
  kicker: string;
  kickerEn?: string;
  title: string;
  text: string;
  image: string;
  action?: string;
  actionEn?: string;
  titleEn?: string;
  textEn?: string;
};
type Section = {
  title: string;
  titleEn: string;
  kicker?: string;
  intro?: string;
  introEn?: string;
  cards?: Card[];
  columns?: number;
  feature?: Feature;
  steps?: string[];
  stepsEn?: string[];
  variant?: string;
  action?: string;
  actionEn?: string;
};
type Page = {
  kicker: string;
  kickerEn?: string;
  title: string;
  titleEn: string;
  lead: string;
  leadEn: string;
  description?: string;
  descriptionEn?: string;
  action?: string;
  actionEn?: string;
  secondaryAction?: string;
  secondaryActionEn?: string;
  sections: Section[];
};
const route = useRoute();
const { lang } = useI18n();
const tx = (zh: string, en: string) => (lang.value === "en" ? en : zh);
const pages: Record<string, Page> = {
  首页: {
    kicker: "APIMTC",
    title: "立足新加坡 · 连接全球",
    titleEn: "Singapore-based · Globally connected",
    lead: "教育 · 技能 · 流动 · 交流 · 商务",
    leadEn: "Education · Skills · Mobility · Exchange · Business",
    description: "连接人才、教育与全球发展机遇。",
    descriptionEn:
      "Connecting people, education and opportunity across borders.",
    action: "探索项目",
    actionEn: "Explore",
    secondaryAction: "与我们合作",
    secondaryActionEn: "Partner with us",
    sections: [
      {
        title: "超越国界 · 超越课堂",
        titleEn: "Beyond borders. Beyond the classroom.",
        intro: "连接人才 · 教育 · 产业 · 商务的国际项目平台。",
        introEn:
          "International programmes connecting people · education · industry · business.",
        feature: {
          kicker: "国际项目平台",
          kickerEn: "International programme platform",
          title: "从新加坡出发，连接真实世界",
          titleEn: "From Singapore, into the real world",
          text: "我们把学习、交流与产业体验带到课堂之外，连接中国、亚洲与全球机会。",
          textEn:
            "We take learning, exchange and industry experience beyond the classroom, connecting China, Asia and global opportunities.",
          image: homeContent03,
        },
      },
      {
        title: "我们的业务",
        titleEn: "What we do",
        cards: [
          {
            title: "国际教育流动",
            titleEn: "Education mobility",
            text: "走出课堂，探索真实世界。",
            textEn: "Learn beyond the classroom.",
            icon: "◎",
            image: homeEducationMobility,
          },
          {
            title: "MICE 与商务",
            titleEn: "MICE & business",
            text: "连接产业、人才与商业机会。",
            textEn: "Connect with industry and opportunity.",
            icon: "▦",
            image: mice01,
          },
          {
            title: "国际合作",
            titleEn: "International partnerships",
            text: "与全球伙伴建立有意义的连接。",
            textEn: "Build meaningful connections across borders.",
            icon: "↗",
            image: intl01,
          },
        ],
        columns: 3,
      },
      {
        title: "双向国际流动",
        titleEn: "Two-way mobility",
        cards: [
          {
            title: "新加坡 → 中国",
            titleEn: "Singapore → China",
            text: "中国课堂之外\n学习 · 体验 · 探索中国",
            textEn: "China beyond the classroom\nLearn. Experience. Explore China.",
            icon: "◎",
            image: homeContent05,
          },
          {
            title: "中国及全球 → 新加坡",
            titleEn: "China & the world → Singapore",
            text: "新加坡未来探索者\n学习 · 体验 · 探索新加坡",
            textEn:
              "Singapore future explorers\nLearn. Experience. Discover Singapore.",
            icon: "◎",
            image: homeContent06,
          },
        ],
        columns: 2,
      },
      {
        title: "APIMTC 4E 模型",
        titleEn: "Our 4E model",
        intro: "学习 · 体验 · 探索 · 交流",
        introEn: "Educate · Experience · Explore · Exchange",
        cards: [
          {
            title: "不只是参观。更要真正连接。",
            titleEn: "Don't just visit. Connect.",
            text: "",
            textEn: "",
            icon: "⌁",
          },
        ],
        columns: 1,
        variant: "portal-section--tint",
      },
      {
        title: "我们的国际平台",
        titleEn: "Our platform",
        cards: [
          {
            title: "新加坡",
            titleEn: "Singapore",
            text: "我们的总部",
            textEn: "Our home",
            icon: "◎",
            image: platformSingapore,
            platform: true,
          },
          {
            title: "成都",
            titleEn: "Chengdu",
            text: "我们的中国门户",
            textEn: "Our China gateway",
            icon: "◎",
            image: platformChengdu,
            platform: true,
          },
          {
            title: "世界",
            titleEn: "The world",
            text: "我们的全球网络",
            textEn: "Our global network",
            icon: "◎",
            image: platformWorld,
            platform: true,
          },
        ],
        columns: 3,
      },
      {
        title: "为什么选择 APIMTC？",
        titleEn: "Why APIMTC?",
        intro: "立足新加坡 · 连接中国 · 面向全球\n教育 + 产业 · 一站式项目执行",
        introEn:
          "Singapore-based · China-connected · Globally networked\nEducation + Industry · End-to-end delivery",
      },
      {
        title: "APIMTC",
        titleEn: "APIMTC",
        intro: "立足新加坡 · 连接全球",
        introEn: "Singapore-based. Globally connected.",
        action: "与我们合作",
        actionEn: "Partner with us",
      },
    ],
  },
  "关于 APIMTC": {
    kicker: "关于 APIMTC",
    kickerEn: "ABOUT APIMTC",
    title: "连接人才 · 连接世界",
    titleEn: "Connecting people. Connecting worlds.",
    lead:
      "APIMTC 是一家立足新加坡的国际化平台，连接教育、技能、人才流动、MICE 与商务，推动跨境交流与合作。",
    leadEn:
      "APIMTC is a Singapore-based international platform connecting education, skills, mobility, MICE and business across borders.",
    sections: [
      {
        title: "新加坡是我们的根基",
        titleEn: "Singapore is our home.",
        feature: {
          kicker: "新加坡是我们的根基",
          kickerEn: "Singapore is our home.",
          title: "从新加坡出发",
          titleEn: "From Singapore",
          text:
            "新加坡是我们的企业总部，也是连接亚洲与全球的国际平台。\n从新加坡出发，我们连接中国、亚洲及世界。",
          textEn:
            "Singapore is our corporate base and international platform.\nFrom Singapore, we connect partners across China, Asia and the world.",
          image: home01,
        },
      },
      {
        title: "从 MICE 与旅游，走向教育与国际流动",
        titleEn: "From MICE & travel to education & mobility",
        cards: [
          {
            title: "国际平台",
            titleEn: "International platform",
            text: "凭借多年旅游、MICE 及目的地管理经验，我们不断拓展国际业务。",
            textEn:
              "Our experience in travel, MICE and destination management has evolved into a broader international platform.",
            icon: "◌",
          },
          {
            title: "今天，我们连接：",
            titleEn: "Today, we connect:",
            text: "教育 · 技能 · 人才 · 产业 · 商务",
            textEn: "Education · Skills · People · Industry · Business",
            icon: "◇",
          },
        ],
        columns: 2,
      },
      {
        title: "我们的品牌架构",
        titleEn: "Our brand structure",
        cards: [
          {
            title: "APIMTC",
            text: "新加坡\n我们的母公司及国际化平台。\nMICE · 旅游 · 教育 · 商务\n",
            textEn:
              "Singapore\nOur parent company and international platform.\nMICE · Travel · Education · Business\n",
            icon: "◈",
          },
          {
            title: "API EduVoyage",
            text: "中国 · 成都\n我们的中国教育流动平台。\n教育 · 技能 · 学生流动 · 国际交流\n",
            textEn:
              "Chengdu, China\nOur China education mobility platform.\nEducation · Skills · Student Mobility · Exchange\n",
            icon: "▣",
          },
          {
            title: "全球合作网络",
            titleEn: "Global partner network",
            text: "学校 · 大学 · 教育机构 · 企业 · 国际组织",
            textEn:
              "Schools · Universities · Institutions · Businesses · Organisations",
            icon: "◎",
          },
        ],
        columns: 3,
        variant: "portal-section--tint",
      },
      {
        title: "双向国际连接",
        titleEn: "Two-way connections",
        cards: [
          {
            title: "新加坡 → 中国及世界",
            titleEn: "Singapore → China & the world",
            text: "国际学习、学生交流及商务合作。",
            textEn: "International learning, exchange and business opportunities.",
            icon: "◎",
          },
          {
            title: "中国及世界 → 新加坡",
            titleEn: "China & the world → Singapore",
            text: "教育、技能、文化及产业体验。",
            textEn: "Education, skills, culture and industry experiences.",
            icon: "◎",
          },
        ],
        columns: 2,
      },
      {
        title: "我们相信",
        titleEn: "What we believe",
        intro: "学习，应该走得更远。\n超越课堂。超越国界。超越期待。",
        introEn:
          "Learning should go further.\nBeyond the classroom. Beyond borders. Beyond expectations.",
        feature: {
          kicker: "我们的使命",
          kickerEn: "Our purpose",
          title: "连接，创造更多可能",
          titleEn: "Connection creates opportunity.",
          text: "让人才、机构与产业相互连接，创造真正有价值的国际体验。",
          textEn:
            "We bring people, institutions and industry together to create meaningful international experiences.",
          image: home02,
        },
      },
      {
        title: "我们的使命",
        titleEn: "Our purpose",
        intro:
          "连接人才、城市、教育、产业与机会。\n新加坡是我们的根基。成都是我们的中国门户。世界是我们的合作网络。",
        introEn:
          "Connecting people, places, education, industry and opportunity.\nSingapore is our home. Chengdu is our China gateway. The world is our network.",
      },
      {
        title: "APIMTC",
        titleEn: "APIMTC",
        intro: "立足新加坡 · 连接全球",
        introEn: "Singapore-based. Globally connected.",
      },
    ],
  },
  教育流动: {
    kicker: "教育流动",
    kickerEn: "Education mobility",
    title: "超越国界 · 超越课堂",
    titleEn: "Beyond borders. Beyond the classroom.",
    lead: "让学习走出课堂，走进大学、产业、科技、文化与真实世界。",
    leadEn:
      "Take learning beyond the classroom — into universities, industry, technology, culture and the real world.",
    description:
      "APIMTC 打造具有国际视野的沉浸式教育项目，连接学生、学校、教育机构与产业。",
    descriptionEn:
      "APIMTC creates immersive international education programmes connecting students, schools, institutions and industry.",
    sections: [
      {
        title: "我们的两大教育项目",
        titleEn: "Our two signature programmes",
        cards: [
          {
            title: "新加坡未来探索者",
            titleEn: "Singapore future explorers",
            text:
              "中国及全球 → 新加坡\n探索新加坡的教育、科技、产业、文化与未来发展。\n生命与健康 · 太空与航空 · 可持续发展 · 人工智能 · 新兴产业\n探索新加坡",
            textEn:
              "China & the world → Singapore\nDiscover Singapore through education, technology, industry, culture and future-focused experiences.\nLife & Health · Space & Aviation · Sustainability · AI · Emerging Industries\nExplore Singapore",
            image: mobility01,
            action: "探索新加坡",
            actionEn: "Explore Singapore",
          },
          {
            title: "中国课堂之外",
            titleEn: "China beyond the classroom",
            text:
              "新加坡 → 中国\n走进中国的城市、大学、企业、科技与文化，体验真实的中国。\n人工智能 · 创新创业 · 智慧城市 · 可持续发展 · 中新合作\n探索中国",
            textEn:
              "Singapore → China\nExperience China's cities, universities, technology, industries and culture beyond the classroom.\nAI · Innovation · Smart Cities · Sustainability · China–Singapore Cooperation\nExplore China",
            image: mobility02,
            action: "探索中国",
            actionEn: "Explore China",
          },
        ],
        columns: 2,
      },
      {
        title: "APIMTC 4E 模型",
        titleEn: "The APIMTC 4E model",
        cards: [
          {
            title: "EDUCATE · 学习",
            titleEn: "Educate · Learn",
            text: "从大学、专家及专业机构获得知识。",
            textEn: "Learn from universities, experts and specialist institutions.",
            icon: "♡",
          },
          {
            title: "EXPERIENCE · 体验",
            titleEn: "Experience · Experience",
            text: "走进企业、实验室及真实产业环境。",
            textEn: "See technology, industry and innovation in action.",
            icon: "↗",
          },
          {
            title: "EXPLORE · 探索",
            titleEn: "Explore · Discover",
            text: "了解城市、文化、社会与环境。",
            textEn: "Explore cities, cultures, communities and environments.",
            icon: "◌",
          },
          {
            title: "EXCHANGE · 交流",
            titleEn: "Exchange · Connect",
            text: "与不同国家的学生及伙伴共同学习。",
            textEn: "Learn and collaborate with students from around the world.",
            icon: "☼",
          },
        ],
        columns: 4,
        variant: "portal-section--tint",
      },
      {
        title: "不只是游学",
        titleEn: "More than a study tour",
        intro: "不只是参观。 不只是学习。 不只是交流。",
        introEn: "Not just travel. Not just study. Not just exchange.",
        cards: [
          {
            title: "学习 · 体验 · 探索 · 交流",
            titleEn: "Learn · Experience · Explore · Exchange",
            text: "",
            textEn: "",
            icon: "⌁",
          },
        ],
        columns: 1,
      },
      {
        title: "为不同年龄而设计",
        titleEn: "Designed for every age",
        cards: [
          {
            title: "小学",
            titleEn: "Primary",
            text: "激发好奇心，探索科学、科技与世界。",
            textEn: "Discover science, technology and the world.",
            icon: "○",
          },
          {
            title: "初中 / 中学",
            titleEn: "Junior high / secondary",
            text: "连接学术、产业、科技与全球议题。",
            textEn:
              "Connect learning with industry, technology and global issues.",
            icon: "◇",
          },
          {
            title: "高中 / JC",
            titleEn: "Senior high / JC",
            text: "聚焦未来、创新、领导力与新兴产业。",
            textEn:
              "Explore innovation, leadership, future industries and deeper learning.",
            icon: "◈",
          },
        ],
        columns: 3,
        feature: {
          kicker: "定制项目",
          kickerEn: "Custom programmes",
          title: "定制你的国际学习之旅",
          titleEn: "Build your international learning journey",
          text: "根据年龄、学习目标、主题及学校需求，打造适合每一个团队的国际项目。",
          textEn:
            "Every programme can be tailored around age, learning objectives, themes and school requirements.",
          image: mobility03,
          action: "定制项目",
          actionEn: "Request a custom programme",
        },
        action: "探索教育项目",
        actionEn: "Explore programmes",
      },
    ],
  },
  "MICE 与商务": {
    kicker: "MICE 与商务",
    kickerEn: "MICE & business",
    title: "让商务连接真实体验",
    titleEn: "Connecting business with experience.",
    lead:
      "APIMTC 结合 MICE 专业能力、目的地经验及国际合作网络，打造有价值的商务与专业交流项目。",
    leadEn:
      "APIMTC combines MICE expertise, destination knowledge and international networks to create meaningful business and professional experiences.",
    sections: [
      {
        title: "我们提供",
        titleEn: "What we do",
        cards: [
          {
            title: "MICE",
            text:
              "会议 · 奖励旅游 · 大型会议 · 活动\n覆盖新加坡、中国及国际目的地的专业活动与项目执行。",
            textEn:
              "Meetings · Incentives · Conferences · Events\nProfessional events and experiences across Singapore, China and international destinations.",
            icon: "▣",
          },
          {
            title: "专业学习",
            titleEn: "Professional learning",
            text: "让商务之旅成为真正的学习体验。",
            textEn: "Turn business travel into meaningful learning experiences.",
            icon: "◇",
          },
          {
            title: "高管项目",
            titleEn: "Executive programmes",
            text: "为企业领导者及专业人士打造定制化学习与交流。",
            textEn:
              "Purpose-built learning and engagement for leaders and professionals.",
            icon: "●",
          },
          {
            title: "商务代表团",
            titleEn: "Business delegations",
            text: "连接企业、机构、市场及潜在合作伙伴。",
            textEn: "Connect with companies, institutions, markets and potential partners.",
            icon: "♟",
          },
          {
            title: "产业参访",
            titleEn: "Industry visits",
            text: "走进科技、创新与产业现场。",
            textEn: "See technology, innovation and industry in action.",
            icon: "▥",
          },
          {
            title: "标杆考察",
            titleEn: "Benchmarking",
            text: "了解领先企业与优秀实践。",
            textEn: "Learn from leading organisations and best practices.",
            icon: "◎",
          },
          {
            title: "商务交流",
            titleEn: "Business exchange",
            text: "建立关系、交流观点、探索合作机会。",
            textEn: "Build relationships, exchange ideas and explore opportunities.",
            icon: "▱",
          },
        ],
        columns: 4,
      },
      {
        title: "不只是一次商务之旅",
        titleEn: "More than a business trip",
        intro: "学习 · 连接 · 体验",
        introEn: "Learn · Connect · Experience",
        feature: {
          kicker: "APIMTC",
          title: "连接人才、产业、机构与思想",
          titleEn: "We bring together people, industry, institutions and ideas",
          text: "打造有目标的国际交流项目。",
          textEn: "to create purposeful international programmes.",
          image: mice01,
        },
        cards: [
          {
            title: "目的地专业能力",
            titleEn: "Destination expertise",
            text: "深入了解目的地及当地资源。",
            textEn: "Deep knowledge of destinations and local environments.",
            icon: "◌",
          },
          {
            title: "MICE 项目能力",
            titleEn: "MICE capability",
            text: "专业策划与项目执行。",
            textEn: "Professional programme planning and execution.",
            icon: "◇",
          },
          {
            title: "国际合作网络",
            titleEn: "International networks",
            text: "连接教育、商务及产业伙伴。",
            textEn: "Connections across education, business and industry.",
            icon: "◎",
          },
          {
            title: "一站式执行",
            titleEn: "End-to-end delivery",
            text: "从项目策划、协调到落地执行。",
            textEn: "From concept and coordination to on-the-ground execution.",
            icon: "▣",
          },
        ],
        columns: 4,
        variant: "portal-section--tint",
      },
      {
        title: "我们服务的伙伴",
        titleEn: "Who we work with",
        intro: "企业 · 政府 · 教育机构 · 行业协会 · 国际组织",
        introEn:
          "Corporations · Governments · Education Institutions · Industry Associations · Organisations",
        feature: {
          kicker: "APIMTC",
          title: "有项目想法？",
          titleEn: "Have a project in mind?",
          text: "让我们将您的目标，转化为真正有价值的国际体验。",
          textEn: "Let us turn your objectives into a meaningful international experience.",
          image: mice02,
          action: "与我们洽谈",
          actionEn: "Discuss your project",
        },
        action: "与 APIMTC 合作",
        actionEn: "Partner with APIMTC",
      },
    ],
  },
  国际合作: {
    kicker: "国际合作",
    kickerEn: "International partnerships",
    title: "携手打造国际项目",
    titleEn: "Build international programmes together.",
    lead: "我们与教育、商务、政府及产业伙伴合作，共同打造有价值的跨境交流项目。",
    leadEn:
      "We work with organisations across education, business, government and industry to create meaningful cross-border programmes.",
    sections: [
      {
        title: "我们的合作伙伴",
        titleEn: "Who we partner with",
        cards: [
          {
            title: "学校",
            titleEn: "Schools",
            text: "国际学习、学生流动与交流项目。",
            textEn: "International learning, student mobility and exchange.",
            icon: "▣",
          },
          {
            title: "大学",
            titleEn: "Universities",
            text: "学术合作、学生交流与产业互动。",
            textEn: "Academic collaboration, exchange and industry engagement.",
            icon: "◇",
          },
          {
            title: "职业院校",
            titleEn: "Vocational institutions",
            text: "技能发展、科技与产业体验。",
            textEn: "Skills development, technology and industry exposure.",
            icon: "▤",
          },
          {
            title: "政府及机构",
            titleEn: "Governments & organisations",
            text: "国际交流、代表团及标杆考察。",
            textEn: "International exchange, delegations and benchmarking.",
            icon: "▥",
          },
          {
            title: "企业与产业伙伴",
            titleEn: "Companies & industry",
            text: "商务交流、专业学习与人才发展。",
            textEn: "Business exchange, professional learning and talent development.",
            icon: "▦",
          },
          {
            title: "教育及培训机构",
            titleEn: "Education & training providers",
            text: "跨市场、跨教育体系的合作项目。",
            textEn:
              "Collaborative programmes across markets and education systems.",
            icon: "◎",
          },
        ],
        columns: 6,
      },
      {
        title: "我们可以共同打造",
        titleEn: "What we can build",
        cards: [
          {
            title: "学生国际流动",
            titleEn: "Student mobility",
            text: "国际学习与交流。",
            textEn: "International learning and exchange.",
            icon: "◉",
          },
          {
            title: "院校及机构交流",
            titleEn: "Institutional exchange",
            text: "连接学校、大学与国际机构。",
            textEn: "Connect schools, universities and organisations.",
            icon: "↗",
          },
          {
            title: "专业学习",
            titleEn: "Professional learning",
            text: "考察、研学、高管及技能发展项目。",
            textEn: "Study visits, executive programmes and skills development.",
            icon: "▣",
          },
          {
            title: "产业交流",
            titleEn: "Industry engagement",
            text: "企业参访、创新及真实产业体验。",
            textEn: "Company visits, innovation and real-world experiences.",
            icon: "♧",
          },
          {
            title: "国际代表团",
            titleEn: "International delegations",
            text: "教育、商务及机构交流项目。",
            textEn: "Education, business and institutional programmes.",
            icon: "✳",
          },
          {
            title: "MICE 与国际活动",
            titleEn: "MICE & events",
            text: "会议、大型活动及国际交流。",
            textEn: "Meetings, conferences and international events.",
            icon: "▤",
          },
        ],
        columns: 6,
        variant: "portal-section--tint",
      },
      {
        title: "从想法到落地",
        titleEn: "From idea to delivery",
        steps: [
          "了解 · 明确您的目标。",
          "设计 · 打造合适的项目。",
          "连接 · 匹配合适的国际伙伴。",
          "执行 · 协调并落地整个项目。",
        ],
        stepsEn: [
          "Discover · Understand your goals.",
          "Design · Build the right programme.",
          "Connect · Bring the right partners together.",
          "Deliver · Coordinate the experience.",
        ],
      },
      {
        title: "为什么选择 APIMTC？",
        titleEn: "Why APIMTC?",
        cards: [
          {
            title: "立足新加坡",
            titleEn: "Singapore-based",
            text: "连接亚洲与世界的国际平台。",
            textEn: "An international platform connecting Asia and the world.",
            icon: "◌",
          },
          {
            title: "连接中国",
            titleEn: "China access",
            text: "成都中国教育流动平台。",
            textEn: "A dedicated Chengdu education mobility platform.",
            icon: "◇",
          },
          {
            title: "全球网络",
            titleEn: "Global network",
            text: "学校、大学、机构、企业及国际组织。",
            textEn: "Schools, universities, institutions, businesses and organisations.",
            icon: "◎",
          },
          {
            title: "一站式支持",
            titleEn: "End-to-end support",
            text: "从项目构思到落地执行。",
            textEn: "From concept to programme delivery.",
            icon: "▣",
          },
        ],
        columns: 4,
        feature: {
          kicker: "APIMTC",
          title: "携手，共创国际未来",
          titleEn: "Let's build something together.",
          text: "有项目、合作或国际交流想法？",
          textEn: "Have an idea, programme or partnership in mind?",
          image: intl01,
          action: "开始洽谈",
          actionEn: "Start a conversation",
        },
        action: "联系 APIMTC",
        actionEn: "Contact APIMTC",
      },
    ],
  },
  中国门户: {
    kicker: "中国门户",
    kickerEn: "China gateway",
    title: "成都 · 连接中国",
    titleEn: "Chengdu · Connecting China",
    lead: "成都，是 APIMTC 连接中国的重要门户。",
    leadEn: "Chengdu is APIMTC’s gateway to China.",
    description:
      "通过位于成都的 API EduVoyage 亚太国际智航，我们连接中国的教育、技能、产业、文化与国际合作资源。",
    descriptionEn:
      "Through API EduVoyage, our Chengdu-based China platform, we connect education, skills, industry, culture and international opportunities.",
    sections: [
      {
        title: "API EDUVOYAGE",
        titleEn: "API EduVoyage",
        intro:
          "亚太国际智航\n中国 · 成都\nAPIMTC 在中国的教育流动平台\n专注于：\n教育流动 · 技能发展 · 学生交流 · 院校合作 · 国际交流",
        introEn:
          "Asia Pacific International EduVoyage\nChengdu, China\nAPIMTC’s China education mobility platform.\nEducation · Skills · Student Mobility · Institutional Exchange",
        feature: {
          kicker: "从新加坡，连接中国",
          kickerEn: "From Singapore to China",
          title: "从新加坡，连接中国",
          titleEn: "From Singapore to China",
          text: "我们将新加坡的国际视野与中国不断发展的教育及产业资源连接起来。",
          textEn:
            "We connect Singapore’s international perspective with China’s education, industry and innovation ecosystems.",
          image: china01,
        },
        steps: ["新加坡", "成都", "中国各地", "世界"],
        stepsEn: ["Singapore", "Chengdu", "China", "The World"],
      },
      {
        title: "中国 · 不只是目的地",
        titleEn: "China · Beyond the destination",
        intro:
          "每一座城市，都是一间课堂。\n我们将中国不同城市转化为具有主题和学习价值的教育目的地。",
        introEn:
          "Every city is a classroom.\nWe turn China’s cities into meaningful learning environments.",
        cards: [
          {
            title: "上海",
            titleEn: "Shanghai",
            text: "AI · 金融 · 创新",
            textEn: "AI · Finance · Innovation",
            image: cityShanghai,
          },
          {
            title: "深圳",
            titleEn: "Shenzhen",
            text: "科技 · 机器人 · 创新",
            textEn: "Technology · Robotics · Innovation",
            image: cityShenzhen,
          },
          {
            title: "杭州",
            titleEn: "Hangzhou",
            text: "数字经济 · 创业",
            textEn: "Digital Economy · Entrepreneurship",
            image: cityHangzhou,
          },
          {
            title: "苏州",
            titleEn: "Suzhou",
            text: "智慧城市 · 中新合作",
            textEn: "Smart Cities · China–Singapore Cooperation",
            image: citySuzhou,
          },
          {
            title: "北京",
            titleEn: "Beijing",
            text: "领导力 · 文化 · 历史",
            textEn: "Leadership · Culture · History",
            image: cityBeijing,
          },
          {
            title: "西安",
            titleEn: "Xi’an",
            text: "STEM · 丝绸之路 · 文化遗产",
            textEn: "STEM · Silk Road · Heritage",
            image: cityXiAn,
          },
          {
            title: "成都",
            titleEn: "Chengdu",
            text: "可持续发展 · 四川文化 · 熊猫保护",
            textEn: "Sustainability · Sichuan Culture · Conservation",
            image: cityChengdu,
          },
          {
            title: "广州",
            titleEn: "Guangzhou",
            text: "国际贸易 · 大湾区",
            textEn: "International Trade · Greater Bay Area",
            image: cityGuangzhou,
          },
        ],
        columns: 4,
      },
      {
        title: "CHINA BEYOND THE CLASSROOM",
        titleEn: "China beyond the classroom",
        intro: "走进真实的中国",
        introEn: "Experience the real China.",
        feature: {
          kicker: "走进真实的中国",
          kickerEn: "Experience the real China.",
          title: "探索中国项目",
          titleEn: "Explore China programmes",
          text:
            "面向新加坡学校及学生，打造融合学习、科技、产业、文化与交流的沉浸式中国教育项目。",
          textEn:
            "Immersive programmes combining learning, technology, industry, culture and exchange for Singapore schools and students.",
          image: china06,
          action: "探索中国项目",
          actionEn: "Explore China programmes",
        },
        variant: "portal-section--tint",
      },
      {
        title: "中国与世界",
        titleEn: "China to the world",
        intro:
          "API EduVoyage 连接中国与全球教育伙伴，共同推动：\n学生流动 · 技能发展 · 院校交流 · 专业学习 · 国际合作\n新加坡是我们的家。成都是我们的中国门户。世界是我们的合作网络。",
        introEn:
          "API EduVoyage connects Chinese education partners with international opportunities through:\nStudent Mobility · Skills Development · Institutional Exchange · Professional Learning · Global Partnerships\nSingapore is our home.\nChengdu is our China gateway.\nThe world is our network.",
        action: "与我们合作",
        actionEn: "Partner with us",
      },
    ],
  },
  联系我们: {
    kicker: "联系我们",
    kickerEn: "Contact",
    title: "让我们连接世界",
    titleEn: "Let's connect the world.",
    lead: "无论您正在寻找国际教育项目、学生交流、商务交流、MICE 服务，还是国际合作机会，我们都期待与您交流。",
    leadEn:
      "Whether you are looking for an international education programme, student exchange, business experience, MICE services or partnership opportunities, we would love to hear from you.",
    sections: [
      {
        title: "您想探索什么？",
        titleEn: "What are you looking for?",
        cards: [
          {
            title: "教育流动",
            titleEn: "Education mobility",
            text: "国际学生项目、学校交流及沉浸式学习。",
            textEn: "Student programmes, school exchange and immersive learning.",
            icon: "◇",
          },
          {
            title: "MICE 与商务",
            titleEn: "MICE & business",
            text: "会议、活动、商务代表团及产业参访。",
            textEn: "Meetings, events, business delegations and industry visits.",
            icon: "▣",
          },
          {
            title: "国际合作",
            titleEn: "International partnerships",
            text: "院校、企业、政府及机构合作。",
            textEn:
              "Collaboration with schools, institutions, companies and organisations.",
            icon: "♧",
          },
          {
            title: "中国项目",
            titleEn: "China programmes",
            text: "通过成都平台连接中国教育与产业资源。",
            textEn: "Connect with China through our Chengdu platform.",
            icon: "▤",
          },
        ],
        columns: 4,
      },
      {
        title: "与我们联系",
        titleEn: "Our platforms",
        cards: [
          {
            title: "APIMTC",
            text:
              "Asia Pacific International MICE & Travel Centre\nSingapore\n亚太国际会议会展中心\n新加坡\n我们的企业总部及国际平台",
            textEn:
              "Asia Pacific International MICE & Travel Centre Pte Ltd\nSingapore\nOur corporate headquarters and international platform.",
            icon: "◎",
          },
          {
            title: "API EduVoyage",
            titleEn: "API EduVoyage",
            text:
              "Asia Pacific International EduVoyage\nChengdu, China\n亚太国际智航\n中国 · 成都\n我们的中国教育流动平台。",
            textEn:
              "Asia Pacific International EduVoyage\nChengdu, China\nOur China education mobility platform.",
            icon: "◇",
          },
        ],
        columns: 2,
        feature: {
          kicker: "有一个想法？",
          kickerEn: "Have an idea?",
          title: "让我们一起把它变成现实。",
          titleEn: "Let's build it together.",
          text: "告诉我们您希望实现的目标，我们的团队将与您一起探索合适的项目、合作伙伴与发展机会。",
          textEn:
            "Tell us what you want to achieve. We will explore the right programme, partners and opportunities with you.",
          image: contact01,
          action: "提交咨询",
          actionEn: "Send an enquiry",
        },
        action: "与我们合作",
        actionEn: "Partner with us",
        variant: "portal-section--tint",
      },
    ],
  },
};
const getCardIcon = (title: string) => {
  const iconMap: Array<[string, string]> = [
    ["教育", "fa-graduation-cap"],
    ["学习", "fa-book-open"],
    ["小学", "fa-child"],
    ["初中", "fa-users"],
    ["高中", "fa-user-graduate"],
    ["MICE", "fa-calendar-days"],
    ["商务", "fa-briefcase"],
    ["高管", "fa-user-tie"],
    ["代表团", "fa-users"],
    ["产业", "fa-industry"],
    ["标杆", "fa-award"],
    ["合作", "fa-handshake"],
    ["伙伴", "fa-handshake"],
    ["学校", "fa-school"],
    ["大学", "fa-university"],
    ["职业院校", "fa-building-columns"],
    ["政府", "fa-landmark"],
    ["企业", "fa-building"],
    ["健康", "fa-heart-pulse"],
    ["航空", "fa-rocket"],
    ["太空", "fa-rocket"],
    ["可持续", "fa-leaf"],
    ["人工智能", "fa-brain"],
    ["新兴", "fa-lightbulb"],
    ["中国", "fa-map-location-dot"],
    ["APIMTC", "fa-globe"],
    ["API EduVoyage", "fa-route"],
    ["交流", "fa-comments"],
    ["探索", "fa-compass"],
    ["体验", "fa-suitcase-rolling"],
    ["连接", "fa-network-wired"],
  ];
  const match = iconMap.find(([keyword]) => title.includes(keyword));
  return ["fas", match?.[1] || "fa-sitemap"];
};
const key = computed(() => String(route.meta.titleZh || "首页"));
const page = computed(() => pages[key.value] || pages.首页);
const heroImages: Record<string, string> = {
  首页: homeHero,
  "关于 APIMTC": aboutHero,
  教育流动: mobilityHero,
  "MICE 与商务": miceHero,
  国际合作: intlHero,
  中国门户: chinaHero,
  联系我们: contactHero,
};
const heroImage = computed(() => heroImages[key.value] || homeHero);
</script>

<style scoped>
.portal-page {
  --blue-900: #073b66;
  --blue-700: #0d63a5;
  --blue-500: #1597e5;
  --cyan: #24c4c8;
  --lime: #b9e769;
  --orange: #ff8a4c;
  color: #103f67;
  background: #f6f9fc;
}
.portal-shell {
  width: min(1360px, calc(100% - 64px));
  margin: 0 auto;
}
.portal-main {
  background: #f6f9fc;
}
.portal-section {
  position: relative;
  padding: 74px 0;
}
.portal-section:nth-child(even) {
  background: #eef5fb;
}
.portal-section--tint {
  isolation: isolate;
  overflow: hidden;
  background: #0b426f !important;
  color: #fff;
}
.portal-section--tint > .portal-shell {
  position: relative;
  z-index: 1;
}
.portal-section--tint::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    linear-gradient(105deg, rgba(4, 46, 91, 0.88), rgba(8, 89, 153, 0.72)),
    var(--model-bg) center / cover no-repeat;
  opacity: 0.98;
}
.portal-section--tint::after {
  content: "";
  position: absolute;
  top: -120px;
  right: -9%;
  width: 56%;
  height: 260px;
  z-index: -1;
  border-radius: 50%;
  border-top: 1px solid rgba(91, 207, 255, 0.22);
  transform: rotate(-10deg);
  pointer-events: none;
}
.portal-section--tint .portal-heading h2,
.portal-section--tint .section-intro {
  color: #fff;
}
.portal-section--tint .portal-heading h2 {
  position: relative;
  display: inline-block;
  padding-bottom: 12px;
}
.portal-section--tint .portal-heading h2::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 34px;
  height: 2px;
  background: #37d8e3;
  box-shadow: 0 0 12px rgba(55, 216, 227, 0.65);
}
.portal-section--tint .section-intro {
  opacity: 0.78;
}
.portal-hero {
  box-sizing: border-box;
  min-height: 470px;
  padding: 118px 0 54px;
  display: flex;
  align-items: flex-end;
  background-position: center;
  background-size: cover;
  color: #fff;
  position: relative;
  isolation: isolate;
  overflow: hidden;
}
.portal-hero__copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
}
.portal-hero:before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(3, 41, 85, 0.92),
    rgba(5, 51, 99, 0.55) 48%,
    rgba(4, 35, 78, 0.12)
  );
  z-index: -1;
}
.portal-hero .hero-kicker,
.section-kicker {
  margin: 0 0 10px;
  color: var(--cyan);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.16em;
  line-height: 1.4;
}
.portal-hero h1 {
  max-width: 880px;
  margin: 0 0 16px;
  color: #fff;
  font-size: 56px;
  line-height: 1.2;
  font-weight: 700;
}
.hero-lead {
  max-width: min(1040px, 100%);
  margin: 0 0 12px;
  color: rgba(255, 255, 255, 0.94);
  font-size: 20px;
  font-weight: 600;
  line-height: 1.6;
  overflow-wrap: break-word;
  text-wrap: pretty;
}
.hero-description {
  max-width: 820px;
  margin: 0 0 24px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 16px;
  line-height: 1.65;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.hero-action {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 122px;
  height: 42px;
  padding: 0 20px;
  border-radius: 8px;
  background: var(--orange);
  box-shadow: 0 8px 20px rgba(255, 138, 76, 0.28);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.hero-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(255, 138, 76, 0.36);
}
.portal-section__action--centered {
  display: flex;
  width: fit-content;
  margin: 32px auto 0;
}
.portal-heading {
  max-width: 760px;
  margin-bottom: 30px;
}
.portal-heading h2 {
  margin: 0;
  color: var(--blue-900);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 800;
  line-height: 1.16;
  letter-spacing: -0.01em;
}
.section-intro {
  margin: 10px 0 0;
  color: #5c7690;
  font-size: 14px;
  line-height: 1.75;
}
.feature-panel {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(280px, 0.92fr);
  align-items: stretch;
  margin-bottom: 28px;
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.68);
  box-shadow: 0 18px 45px rgba(15, 76, 122, 0.13);
  backdrop-filter: blur(14px);
  overflow: hidden;
}
.portal-section--tint .feature-panel {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 18px 45px rgba(0, 24, 51, 0.2);
}
.feature-panel img {
  width: 100%;
  height: 248px;
  object-fit: cover;
  display: block;
}
.feature-panel__copy {
  padding: 31px 32px;
  align-self: center;
}
.feature-panel__copy h3 {
  margin: 0 0 11px;
  color: var(--blue-900);
  font-size: 22px;
  font-weight: 800;
}
.portal-section--tint .feature-panel__copy h3,
.portal-section--tint .feature-panel__copy p:not(.section-kicker) {
  color: #fff;
}
.feature-panel__copy p:not(.section-kicker) {
  margin: 0;
  color: #53718e;
  font-size: 13px;
  line-height: 1.8;
  white-space: pre-line;
}
.text-link {
  display: inline-flex;
  gap: 10px;
  margin-top: 20px;
  color: var(--blue-700);
  font-size: 12px;
  font-weight: 800;
}
.portal-section--tint .text-link {
  color: var(--lime);
}
.portal-grid {
  display: grid;
  gap: 16px;
}
.portal-grid--2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.portal-grid--3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.portal-grid--4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.portal-grid--5 {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
.portal-grid--6 {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}
.portal-card {
  position: relative;
  min-width: 0;
  min-height: 148px;
  border: 1px solid rgba(111, 166, 207, 0.28);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 10px 30px rgba(15, 76, 122, 0.08);
  backdrop-filter: blur(12px);
  overflow: hidden;
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;
}
.portal-card:hover {
  transform: translateY(-5px);
  border-color: rgba(21, 151, 229, 0.52);
  box-shadow: 0 18px 34px rgba(15, 76, 122, 0.15);
}
.portal-section--tint .portal-card {
  min-height: 154px;
  border-color: rgba(131, 211, 255, 0.42);
  border-radius: 10px;
  background: linear-gradient(145deg, rgba(49, 132, 194, 0.46), rgba(14, 84, 143, 0.48));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14), 0 14px 28px rgba(0, 24, 51, 0.2);
}
.portal-section--tint .portal-card:hover {
  border-color: rgba(93, 230, 238, 0.82);
  background: linear-gradient(145deg, rgba(57, 151, 213, 0.55), rgba(18, 98, 164, 0.58));
}

/* Homepage business cards follow the lighter, illustrated reference layout. */
.portal-section--business {
  padding: 68px 0 76px;
  background:
    radial-gradient(circle at 8% 35%, rgba(194, 228, 255, 0.35), transparent 34%),
    #f5f9fd !important;
}
.portal-section--business .portal-heading {
  margin-bottom: 31px;
}
.portal-section--business .portal-heading h2 {
  position: relative;
  display: inline-block;
  padding-bottom: 14px;
  color: #083d6b;
  font-size: clamp(28px, 3vw, 36px);
  letter-spacing: 0;
}
.portal-section--business .portal-heading h2::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 34px;
  height: 3px;
  border-radius: 2px;
  background: #168fe5;
}
.portal-section--business .portal-grid {
  gap: 19px;
}
.portal-section--business .portal-card {
  min-height: 162px;
  border: 1px solid rgba(126, 188, 234, 0.34);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 14px 31px rgba(34, 110, 163, 0.1);
}
.portal-section--business .portal-card::after {
  position: absolute;
  right: -10px;
  top: 14px;
  color: rgba(90, 190, 229, 0.11);
  font-size: 92px;
  line-height: 1;
  pointer-events: none;
}
.portal-section--business .portal-card::before {
  content: "›";
  position: absolute;
  right: 24px;
  bottom: 17px;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 27px;
  height: 27px;
  border: 1px solid #91c8ef;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.45);
  color: #178fdf;
  font-size: 21px;
  line-height: 1;
  pointer-events: none;
}
.portal-section--business .portal-card:nth-child(1)::after {
  content: "\f19d";
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
}
.portal-section--business .portal-card:nth-child(2)::after {
  content: "\f2b5";
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  color: rgba(155, 126, 233, 0.11);
}
.portal-section--business .portal-card:nth-child(3)::after {
  content: "\f0ac";
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
}
.portal-section--business .portal-card__body {
  position: relative;
  z-index: 1;
  padding: 18px 30px;
}
.portal-section--business .portal-card__icon {
  width: 58px;
  height: 58px;
  margin-bottom: 11px;
  border: 0;
  border-radius: 50%;
  background: linear-gradient(145deg, #52b9ff, #268de7);
  color: #fff;
  font-size: 24px;
  box-shadow: 0 7px 14px rgba(39, 144, 229, 0.25);
}
.portal-section--business .portal-card:nth-child(2) .portal-card__icon {
  background: linear-gradient(145deg, #9d87f6, #735de0);
  box-shadow: 0 7px 14px rgba(122, 96, 225, 0.23);
}
.portal-section--business .portal-card:nth-child(3) .portal-card__icon {
  background: linear-gradient(145deg, #32c6c8, #0aa4ad);
  box-shadow: 0 7px 14px rgba(10, 164, 173, 0.23);
}
.portal-section--business .portal-card h3 {
  margin: 0 0 5px;
  font-size: 16px;
  color: #073b66;
}
.portal-section--business .portal-card p {
  color: #7290aa;
  font-size: 12px;
}
.portal-section--business .card-more {
  right: 24px;
  bottom: 17px;
  width: 27px;
  height: 27px;
  border-color: #91c8ef;
  color: #178fdf;
  line-height: 24px;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.45);
}
.portal-section--business .card-more:hover {
  background: #168fe5;
  color: #fff;
}
.portal-card__body {
  padding: 21px;
}
.portal-card__icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  margin-bottom: 16px;
  border-radius: 10px;
  background: #e5f5ff;
  color: var(--blue-700);
  font-size: 20px;
  line-height: 1;
}
.portal-section--tint .portal-card__icon {
  background: rgba(185, 231, 105, 0.17);
  color: var(--lime);
}
.portal-card h3 {
  margin: 0 0 8px;
  color: var(--blue-900);
  font-size: 15px;
  font-weight: 800;
  line-height: 1.35;
}
.portal-section--tint .portal-card h3 {
  color: #fff;
}
.portal-card p {
  margin: 0;
  color: #65819c;
  font-size: 12px;
  line-height: 1.7;
  white-space: pre-line;
}
.portal-section--tint .portal-card p {
  color: rgba(255, 255, 255, 0.76);
}
.portal-card--image {
  background: rgba(255, 255, 255, 0.88);
  min-height: 0;
}
.portal-card--image img {
  display: block;
  width: 100%;
  height: 148px;
  object-fit: cover;
  transition: transform 0.35s ease;
}
.portal-card--image:hover img {
  transform: scale(1.04);
}
.portal-card--image .portal-card__body {
  padding: 15px 16px 18px;
}
.card-more {
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 24px;
  height: 24px;
  border: 1px solid #9dc4ed;
  border-radius: 50%;
  color: var(--blue-700);
  line-height: 21px;
  text-align: center;
  font-size: 17px;
  transition:
    background 0.2s,
    color 0.2s;
}
.card-more:hover {
  background: var(--blue-500);
  color: #fff;
}
.step-row {
  --step-accent: #168fe5;
  --step-accent-soft: #e9f6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  min-height: 86px;
  padding: 16px 24px;
  border: 1px solid rgba(53, 157, 221, 0.24);
  border-radius: 16px;
  background: linear-gradient(110deg, #fafdff 0%, #eef8ff 100%);
  box-shadow:
    0 14px 30px rgba(26, 104, 158, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
  color: #0d5f9f;
  font-size: 14px;
  font-weight: 700;
}
.step-row span {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 18px 0 48px;
  border: 1px solid rgba(28, 142, 215, 0.18);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: 0 5px 12px rgba(23, 116, 174, 0.07);
  white-space: nowrap;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}
.step-row span::before {
  content: counter(step-index, decimal-leading-zero);
  counter-increment: step-index;
  position: absolute;
  left: 12px;
  display: grid;
  place-items: center;
  width: 27px;
  height: 27px;
  border-radius: 8px;
  background: var(--step-accent-soft);
  color: var(--step-accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.04em;
}
.step-row span:hover {
  transform: translateY(-2px);
  border-color: rgba(22, 143, 229, 0.42);
  box-shadow: 0 9px 18px rgba(23, 116, 174, 0.13);
}
.step-row b {
  display: grid;
  place-items: center;
  width: 24px;
  color: #22b9c6;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
}
.step-row {
  counter-reset: step-index;
}
@media (max-width: 1000px) {
  .portal-grid--5,
  .portal-grid--6 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .portal-shell {
    width: min(100% - 40px, 1360px);
  }
  .portal-section {
    padding: 60px 0;
  }
}
@media (max-width: 720px) {
  .portal-hero {
    min-height: 420px;
    padding: 104px 0 44px;
  }
  .portal-hero h1 {
    font-size: 42px;
    line-height: 1.2;
  }
  .hero-lead {
    font-size: 18px;
    white-space: normal;
  }
  .feature-panel {
    grid-template-columns: 1fr;
  }
  .feature-panel img {
    height: 210px;
  }
  .feature-panel__copy {
    padding: 25px;
  }
  .portal-grid--3,
  .portal-grid--4,
  .portal-grid--5,
  .portal-grid--6 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .portal-heading {
    margin-bottom: 24px;
  }
}
@media (max-width: 480px) {
  .portal-shell {
    width: min(100% - 28px, 1360px);
  }
  .portal-section {
    padding: 44px 0;
  }
  .portal-grid--2,
  .portal-grid--3,
  .portal-grid--4,
  .portal-grid--5,
  .portal-grid--6 {
    grid-template-columns: 1fr;
  }
  .portal-hero h1 {
    font-size: 34px;
  }
  .hero-lead {
    font-size: 16px;
  }
  .portal-hero .hero-kicker {
    font-size: 12px;
  }
  .hero-description {
    font-size: 15px;
  }
  .feature-panel img {
    height: 180px;
  }
  .feature-panel__copy {
    padding: 22px;
  }
  .portal-card {
    min-height: 0;
  }
  .portal-card__body {
    padding: 18px;
  }
  .step-row {
    align-items: stretch;
    flex-direction: column;
    gap: 6px;
    padding: 14px;
  }
  .step-row span {
    width: 100%;
  }
  .step-row b {
    width: 100%;
    height: 13px;
    transform: rotate(90deg);
  }
}
.portal-card__icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  margin-bottom: 16px;
  border: 1px solid rgba(21, 151, 229, 0.2);
  border-radius: 13px;
  background: linear-gradient(145deg, #eaf8ff, #d8efff);
  color: var(--blue-700);
  font-size: 18px;
  line-height: 1;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.9),
    0 7px 14px rgba(21, 151, 229, 0.13);
  transition:
    transform 0.22s ease,
    background 0.22s ease,
    color 0.22s ease;
}
.portal-card:hover .portal-card__icon {
  transform: translateY(-2px) rotate(-4deg);
  background: linear-gradient(145deg, #dff8f3, #ccefff);
  color: #0879c5;
}
.portal-section--tint .portal-card__icon {
  width: 44px;
  height: 44px;
  margin-bottom: 13px;
  border: 1px solid rgba(168, 255, 219, 0.36);
  border-radius: 50%;
  background: linear-gradient(145deg, #37c9b8, #2388c1);
  color: #eaffbd;
  font-size: 18px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 7px 14px rgba(0, 24, 51, 0.24);
}
.portal-section--tint .portal-card:hover .portal-card__icon {
  background: linear-gradient(145deg, #4fe0c2, #2ca1d7);
  color: #fff;
}

/* Shared information-card treatment: the same polished visual language is
   used across business, education, cooperation and partner sections. */
.portal-card:not(.portal-card--image) {
  min-height: 162px;
  border: 1px solid rgba(126, 188, 234, 0.34);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 14px 31px rgba(34, 110, 163, 0.1);
}
.portal-card:not(.portal-card--image)::before {
  content: "›";
  position: absolute;
  right: 24px;
  bottom: 17px;
  z-index: 2;
  display: grid;
  place-items: center;
  width: 27px;
  height: 27px;
  border: 1px solid #91c8ef;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.55);
  color: #178fdf;
  font-size: 21px;
  line-height: 1;
  pointer-events: none;
}
.portal-card:not(.portal-card--image)::after {
  position: absolute;
  right: -10px;
  top: 14px;
  color: rgba(90, 190, 229, 0.1);
  font-size: 92px;
  line-height: 1;
  pointer-events: none;
}
.portal-card:not(.portal-card--image):nth-child(1)::after {
  content: "\\f19d";
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
}
.portal-card:not(.portal-card--image):nth-child(2)::after {
  content: "\\f2b5";
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  color: rgba(155, 126, 233, 0.1);
}
.portal-card:not(.portal-card--image):nth-child(3)::after {
  content: "\\f0ac";
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
}
.portal-card:not(.portal-card--image) .portal-card__body {
  position: relative;
  z-index: 1;
  padding: 18px 82px 18px 30px;
}
.portal-card:not(.portal-card--image) .portal-card__icon {
  width: 58px;
  height: 58px;
  margin-bottom: 11px;
  border: 0;
  border-radius: 50%;
  background: linear-gradient(145deg, #52b9ff, #268de7);
  color: #fff;
  font-size: 24px;
  box-shadow: 0 7px 14px rgba(39, 144, 229, 0.25);
}
.portal-card:not(.portal-card--image) .portal-card__side-icon {
  position: absolute;
  right: 26px;
  top: 50%;
  z-index: 0;
  color: rgba(71, 173, 231, 0.12);
  font-size: 82px;
  line-height: 1;
  transform: translateY(-42%);
  pointer-events: none;
}
.portal-card:not(.portal-card--image):nth-child(2) .portal-card__icon {
  background: linear-gradient(145deg, #9d87f6, #735de0);
  box-shadow: 0 7px 14px rgba(122, 96, 225, 0.23);
}
.portal-card:not(.portal-card--image):nth-child(3) .portal-card__icon {
  background: linear-gradient(145deg, #32c6c8, #0aa4ad);
  box-shadow: 0 7px 14px rgba(10, 164, 173, 0.23);
}
.portal-card:not(.portal-card--image) h3 {
  margin: 0 0 5px;
  color: #073b66;
  font-size: 16px;
}
.portal-card:not(.portal-card--image) p {
  color: #7290aa;
  font-size: 12px;
}
.portal-card:not(.portal-card--image):hover {
  border-color: rgba(21, 151, 229, 0.62);
  box-shadow: 0 18px 34px rgba(15, 76, 122, 0.15);
}
/* Keep cards clean: remove the oversized decorative glyphs behind the copy. */
.portal-card::after {
  content: none !important;
  display: none;
}
.portal-section--tint .portal-card:not(.portal-card--image) {
  background: rgba(255, 255, 255, 0.1);
}
.portal-section--tint .portal-card:not(.portal-card--image) h3 {
  color: #fff;
}
.portal-section--tint .portal-card:not(.portal-card--image) p {
  color: rgba(255, 255, 255, 0.76);
}
.portal-section--tint .portal-card:not(.portal-card--image) .portal-card__side-icon {
  color: rgba(177, 237, 255, 0.14);
}
.portal-section:not(.portal-section--business) .portal-heading h2 {
  position: relative;
  display: inline-block;
  padding-bottom: 14px;
}
.portal-section:not(.portal-section--business) .portal-heading h2::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 34px;
  height: 3px;
  border-radius: 2px;
  background: #168fe5;
}

/* Homepage middle content: a compact, trust-led product showcase. The hero and
   final CTA retain their existing treatment through the scoped exclusions below. */
.portal-page--home {
  --home-ink: #123b5d;
  --home-blue: #1676b8;
  --home-blue-soft: #eaf4fb;
  --home-teal: #0f8b78;
  --home-line: #c9deed;
  --home-muted: #506f88;
}
.portal-page--home .portal-main {
  background: #f7fafc;
}
.portal-page--home .portal-section:not(:last-child) {
  padding: 88px 0;
  background: #fff;
}
.portal-page--home .portal-section:not(:last-child):nth-child(even) {
  background: #f2f7fb;
}
.portal-page--home .portal-section:not(:last-child) .portal-heading {
  max-width: 820px;
  margin-bottom: 36px;
}
.portal-page--home .portal-section:not(:last-child) .portal-heading h2 {
  padding-bottom: 15px;
  color: var(--home-ink);
  font-size: clamp(28px, 3.2vw, 42px);
  letter-spacing: 0;
}
.portal-page--home .portal-section:not(:last-child) .portal-heading h2::after {
  width: 44px;
  height: 3px;
  border-radius: 0;
  background: var(--home-teal);
}
.portal-page--home .portal-section:not(:last-child) .section-intro {
  max-width: 700px;
  margin-top: 16px;
  color: var(--home-muted);
  font-size: 16px;
  line-height: 1.75;
  white-space: pre-line;
}
.portal-page--home .portal-section:first-child {
  padding: 96px 0 88px;
  background: #f7fafc;
}
.portal-page--home .portal-section:first-child .portal-heading {
  max-width: 760px;
  margin-bottom: 0;
}
.portal-page--home .portal-section:first-child .portal-heading h2 {
  max-width: 650px;
  font-size: clamp(32px, 3.8vw, 48px);
}
.portal-page--home .portal-section--business {
  padding: 84px 0 88px !important;
  background: #fff !important;
}
.portal-page--home .portal-section--business .portal-grid {
  gap: 20px;
}
.portal-page--home .portal-section:not(:last-child) .portal-card,
.portal-page--home .portal-section--business .portal-card,
.portal-page--home .portal-section:not(:last-child) .portal-card:not(.portal-card--image) {
  min-height: 192px;
  border: 1px solid var(--home-line);
  border-radius: 8px;
  background: #fff;
  box-shadow: none;
  overflow: visible;
}
.portal-page--home .portal-section:not(:last-child) .portal-card::before,
.portal-page--home .portal-section--business .portal-card::before {
  right: 20px;
  bottom: 20px;
  width: 30px;
  height: 30px;
  border-color: #a8c8df;
  border-radius: 50%;
  background: #fff;
  color: var(--home-blue);
}
.portal-page--home .portal-section:not(:last-child) .portal-card:hover {
  transform: translateY(-4px);
  border-color: var(--home-blue);
  box-shadow: 0 12px 24px rgba(18, 59, 93, 0.1);
}
.portal-page--home .portal-section:not(:last-child) .portal-card__body,
.portal-page--home .portal-section:not(:last-child) .portal-card:not(.portal-card--image) .portal-card__body,
.portal-page--home .portal-section--business .portal-card__body {
  padding: 26px 60px 26px 26px;
}
.portal-page--home .portal-section:not(:last-child) .portal-card__icon,
.portal-page--home .portal-section:not(:last-child) .portal-card:not(.portal-card--image) .portal-card__icon,
.portal-page--home .portal-section--business .portal-card__icon {
  width: 44px;
  height: 44px;
  margin-bottom: 18px;
  border: 1px solid #abd1e8;
  border-radius: 8px;
  background: var(--home-blue-soft);
  box-shadow: none;
  color: var(--home-blue);
  font-size: 19px;
}
.portal-page--home .portal-section:not(:last-child) .portal-card h3,
.portal-page--home .portal-section--business .portal-card h3,
.portal-page--home .portal-section:not(:last-child) .portal-card:not(.portal-card--image) h3 {
  margin-bottom: 8px;
  /* color: var(--home-ink); */
  font-size: 17px;
  line-height: 1.35;
}
.portal-page--home .portal-section:not(:last-child) .portal-card p,
.portal-page--home .portal-section--business .portal-card p,
.portal-page--home .portal-section:not(:last-child) .portal-card:not(.portal-card--image) p {
  /* color: var(--home-muted); */
  font-size: 13px;
  line-height: 1.7;
}
.portal-page--home .portal-section:nth-child(3) .portal-card {
  border-top: 3px solid var(--home-blue);
}
.portal-page--home .portal-section:nth-child(3) .portal-card:nth-child(2) {
  border-top-color: var(--home-teal);
}
.portal-page--home .portal-section:nth-child(4) {
  padding: 84px 0 !important;
  background: #123b5d !important;
  color: #fff;
}

.portal-page--home .portal-section:nth-child(4) .portal-heading h2,
.portal-page--home .portal-section:nth-child(4) .section-intro,
.portal-page--home .portal-section:nth-child(4) .portal-card h3 {
  color: #fff;
}
.portal-page--home .portal-section:nth-child(4) .portal-heading h2::after {
  background: #55d1bb;
}
.portal-page--home .portal-section:nth-child(4) .section-intro,
.portal-page--home .portal-section:nth-child(4) .portal-card p {
  color: rgba(255, 255, 255, 0.82);
}
.portal-page--home .portal-section:nth-child(4) .portal-card,
.portal-page--home .portal-section:nth-child(4) .portal-card:not(.portal-card--image) {
  min-height: 212px;
  border-color: rgba(192, 228, 243, 0.4);
  background: rgba(255, 255, 255, 0.1);
}
.portal-page--home .portal-section:nth-child(4) .portal-card__icon,
.portal-page--home .portal-section:nth-child(4) .portal-card:not(.portal-card--image) .portal-card__icon {
  border-color: rgba(126, 224, 204, 0.65);
  background: rgba(15, 139, 120, 0.25);
  color: #9af0dd;
}

/* Keep the homepage and education 4E model sections aligned on desktop. */
.portal-section--four-e {
  min-height: 504px;
}

/* The homepage 4E model is one concise message, without a card container. */
.portal-page--home .portal-section.portal-section--four-e .portal-grid {
  display: block;
}
.portal-page--home .portal-section.portal-section--four-e .four-e-message {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  padding: 26px 24px;
  text-align: center;
}
.portal-page--home .portal-section.portal-section--four-e .four-e-message h3 {
  max-width: 920px;
  margin: 0;
  color: #e6fffa;
  font-size: clamp(34px, 4vw, 56px);
  font-weight: 800;
  line-height: 1.32;
  text-shadow: 0 3px 20px rgba(2, 34, 72, 0.38);
}
@media (max-width: 720px) {
  .portal-section--four-e {
    min-height: 0;
  }

  .portal-page--home .portal-section.portal-section--four-e .four-e-message {
    min-height: 140px;
    padding: 22px 18px;
  }
  .portal-page--home .portal-section.portal-section--four-e .four-e-message h3 {
    font-size: clamp(28px, 8vw, 40px);
  }
}
.portal-page--home .portal-section:nth-child(5) .portal-grid {
  position: relative;
  gap: 0;
  padding: 20px 0;
}
.portal-page--home .portal-section:nth-child(5) .portal-grid::before {
  content: "";
  position: absolute;
  top: 50%;
  right: 11%;
  left: 11%;
  height: 2px;
  background: #bad4e5;
}
.portal-page--home .portal-section:nth-child(5) .portal-card {
  z-index: 1;
  min-height: 206px;
  margin: 0 10px;
  border-top: 3px solid var(--home-blue);
}
.portal-page--home .portal-section:nth-child(5) .portal-card:nth-child(2) {
  border-top-color: var(--home-teal);
}
.portal-page--home .portal-section:nth-child(5) .portal-card:nth-child(3) {
  border-top-color: #5479a3;
}
.portal-page--home .portal-section:nth-child(5) .portal-card--platform {
  overflow: hidden;
  isolation: isolate;
}
.portal-page--home .portal-section:nth-child(5) .portal-card--platform > img {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  width: 62%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 25%, #000 54%);
  mask-image: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 25%, #000 54%);
}
.portal-page--home .portal-section:nth-child(5) .portal-card--platform .portal-card__body {
  position: relative;
  z-index: 1;
  max-width: 64%;
}
.portal-page--home .portal-section:nth-child(5) .portal-card--platform:hover > img {
  transform: scale(1.04);
}
.portal-page--home .portal-section--why {
  padding: 96px 0 !important;
  overflow: hidden;
  background: #eaf2f8 !important;
}
.portal-page--home .portal-section--why::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 51%;
  width: 1px;
  background: rgba(18, 59, 93, 0.13);
}
.why-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.94fr) minmax(360px, 1.06fr);
  gap: clamp(44px, 7vw, 112px);
  align-items: center;
}
.why-layout__copy {
  position: relative;
  z-index: 1;
  max-width: 520px;
}
.why-layout__copy .section-kicker {
  margin-bottom: 15px;
  color: var(--home-teal);
}
.why-layout__copy h2 {
  position: relative;
  margin: 0;
  padding-bottom: 18px;
  color: var(--home-ink);
  font-size: clamp(36px, 4vw, 56px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: 0;
}
.why-layout__copy h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 48px;
  height: 3px;
  background: var(--home-teal);
}
.why-layout__intro {
  max-width: 430px;
  margin: 25px 0 0;
  color: var(--home-muted);
  font-size: 17px;
  line-height: 1.85;
  white-space: pre-line;
}
.why-layout__rules {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 18px;
  margin-top: 27px;
}
.why-layout__rules span {
  position: relative;
  padding-left: 14px;
  color: #234f70;
  font-size: 13px;
  font-weight: 700;
}
.why-layout__rules span::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--home-teal);
  transform: translateY(-50%);
}
.why-layout__action {
  display: inline-flex;
  align-items: center;
  gap: 22px;
  min-height: 48px;
  margin-top: 34px;
  padding: 0 20px 0 22px;
  border: 1px solid #0f8b78;
  background: #0f8b78;
  color: #fff;
  font-size: 13px;
  font-weight: 800;
  transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}
.why-layout__action span {
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
}
.why-layout__action:hover {
  background: #0b7566;
  box-shadow: 0 12px 24px rgba(15, 139, 120, 0.2);
  transform: translateY(-2px);
}
.why-layout__visual {
  position: relative;
  min-height: 420px;
  padding: 24px 0 20px 34px;
}
.why-layout__visual::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid rgba(23, 101, 144, 0.24);
  background: #d8e8f2;
}
.why-layout__visual img {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 376px;
  object-fit: cover;
  object-position: center;
  filter: saturate(0.86) contrast(1.03);
}
.why-layout__marker {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 13px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 10px 22px rgba(18, 59, 93, 0.14);
  color: #174a6e;
  font-size: 12px;
  font-weight: 700;
}
.why-layout__marker b {
  color: var(--home-teal);
  font-size: 11px;
  letter-spacing: 0.08em;
}
.why-layout__marker--top {
  top: 48px;
  left: 0;
}
.why-layout__marker--bottom {
  right: 20px;
  bottom: 0;
}
.why-layout__caption {
  position: absolute;
  z-index: 2;
  right: 22px;
  bottom: 48px;
  margin: 0;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-shadow: 0 1px 8px rgba(1, 32, 58, 0.65);
}
.portal-page--home .hero-action:focus-visible,
.portal-page--home .text-link:focus-visible,
.portal-page--home .card-more:focus-visible {
  outline: 3px solid #4bc4c4;
  outline-offset: 3px;
}
@media (max-width: 720px) {
  .portal-page--home .portal-section:not(:last-child),
  .portal-page--home .portal-section:first-child,
  .portal-page--home .portal-section--business,
  .portal-page--home .portal-section:nth-child(4) {
    padding: 60px 0 !important;
  }
  .portal-page--home .portal-section:not(:last-child) .portal-card,
  .portal-page--home .portal-section:not(:last-child) .portal-card:not(.portal-card--image) {
    min-height: 176px;
  }
  .portal-page--home .portal-section:nth-child(5) .portal-grid {
    gap: 14px;
    padding: 0;
  }
  .portal-page--home .portal-section:nth-child(5) .portal-grid::before {
    display: none;
  }
  .portal-page--home .portal-section:nth-child(5) .portal-card {
    margin: 0;
  }
  .portal-page--home .portal-section:nth-child(5) .portal-card--platform > img {
    width: 58%;
  }
  .portal-page--home .portal-section:nth-child(5) .portal-card--platform .portal-card__body {
    max-width: 69%;
  }
  .portal-page--home .portal-section--why {
    padding: 68px 0 !important;
  }
  .portal-page--home .portal-section--why::before {
    display: none;
  }
  .why-layout {
    grid-template-columns: 1fr;
    gap: 42px;
  }
  .why-layout__copy {
    max-width: 620px;
  }
}
@media (max-width: 480px) {
  .portal-page--home .portal-section:not(:last-child) .portal-heading h2 {
    font-size: 28px;
  }
  .portal-page--home .portal-section:not(:last-child) .section-intro {
    font-size: 15px;
  }
  .portal-page--home .portal-section:not(:last-child) .portal-card__body,
  .portal-page--home .portal-section:not(:last-child) .portal-card:not(.portal-card--image) .portal-card__body {
    padding: 22px 54px 22px 22px;
  }
  .portal-page--home .portal-section--why {
    padding: 52px 0 !important;
  }
  .why-layout__copy h2 {
    font-size: 32px;
  }
  .why-layout__intro {
    font-size: 15px;
  }
  .why-layout__visual {
    min-height: 290px;
    padding: 18px 0 16px 18px;
  }
  .why-layout__visual img {
    height: 256px;
  }
  .why-layout__marker {
    padding: 8px 10px;
    font-size: 11px;
  }
  .why-layout__marker--top {
    top: 36px;
  }
  .why-layout__marker--bottom {
    right: 12px;
  }
  .why-layout__caption {
    right: 14px;
    bottom: 36px;
    font-size: 9px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .portal-page--home .portal-card,
  .portal-page--home .portal-card__icon {
    transition: none;
  }
  .portal-page--home .portal-card:hover {
    transform: none;
  }
}
</style>
