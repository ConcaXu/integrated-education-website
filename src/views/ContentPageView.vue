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
        <p class="hero-kicker">{{ page.kicker }}</p>
        <h1>{{ tx(page.title, page.titleEn) }}</h1>
        <p class="hero-lead">{{ tx(page.lead, page.leadEn) }}</p>
        <p v-if="page.description" class="hero-description">
          {{ tx(page.description, page.descriptionEn || page.description) }}
        </p>
        <router-link class="hero-action" to="/contact">{{
          tx(page.action || "了解更多", page.actionEn || "Learn more")
        }}</router-link>
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
          },
        ]"
      >
        <div class="portal-shell">
          <div class="portal-heading">
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
              <p class="section-kicker">{{ section.feature.kicker }}</p>
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
                >{{ section.feature.action }} <span>+</span></router-link
              >
            </div>
          </div>
          <div
            v-if="section.cards?.length"
            class="portal-grid"
            :class="`portal-grid--${section.columns || 3}`"
          >
            <article
              v-for="card in section.cards"
              :key="card.title"
              class="portal-card"
              :class="{ 'portal-card--image': card.image }"
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
                <p>{{ tx(card.text, card.textEn || card.text) }}</p>
                <router-link v-if="card.action" to="/contact" class="card-more"
                  >+</router-link
                >
              </div>
              <i
                v-if="card.icon"
                class="portal-card__side-icon"
                :class="getCardIcon(card.title)"
                aria-hidden="true"
              ></i>
            </article>
          </div>
          <div v-if="section.steps?.length" class="step-row">
            <template v-for="(step, index) in section.steps" :key="step"
              ><span>{{ step }}</span
              ><b v-if="index < section.steps.length - 1">→</b></template
            >
          </div>
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
import home02 from "@/assets/content-images/首页-02.jpeg";
import mobility01 from "@/assets/content-images/教育流动-01.jpeg";
import mobility02 from "@/assets/content-images/教育流动-02.jpeg";
import mobility03 from "@/assets/content-images/教育流动-03.jpeg";
import mice01 from "@/assets/content-images/MICE 与商务-01.jpeg";
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
import modelBackground from "@/assets/images/bj-01.png";
type Card = {
  title: string;
  text: string;
  icon?: string;
  image?: string;
  action?: string;
  titleEn?: string;
  textEn?: string;
};
type Feature = {
  kicker: string;
  title: string;
  text: string;
  image: string;
  action?: string;
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
  variant?: string;
};
type Page = {
  kicker: string;
  title: string;
  titleEn: string;
  lead: string;
  leadEn: string;
  description?: string;
  descriptionEn?: string;
  action?: string;
  actionEn?: string;
  sections: Section[];
};
const route = useRoute();
const { lang } = useI18n();
const tx = (zh: string, en: string) => (lang.value === "en" ? en : zh);
const card = (title: string, text: string, icon?: string): Card => ({
  title,
  text,
  icon,
});
const pages: Record<string, Page> = {
  首页: {
    kicker: "APIMTC · HOME",
    title: "立足新加坡 · 连接全球",
    titleEn: "Singapore-based · Globally connected",
    lead: "教育 · 技能 · 流动 · 交流 · 商务",
    leadEn: "Education · Skills · Mobility · Exchange · Business",
    description: "连接人才、教育与全球发展机遇。",
    descriptionEn:
      "Connecting people, education and opportunity across borders.",
    action: "探索项目",
    actionEn: "Explore projects",
    sections: [
      {
        title: "我们的业务",
        titleEn: "What we do",
        cards: [
          card("国际教育流动", "走出课堂，探索真实世界。", "◎"),
          card("MICE 与商务", "连接产业、人才与商业机会。", "▦"),
          card("国际合作", "与全球伙伴建立有意义的连接。", "↗"),
        ],
        columns: 3,
      },
      {
        title: "超越国界 · 超越课堂",
        titleEn: "Beyond borders · Beyond classrooms",
        intro: "连接人才、教育、产业、商务的国际项目平台。",
        feature: {
          kicker: "INTERNATIONAL PLATFORM",
          title: "双向国际流动",
          text: "新加坡 → 中国及世界；中国及全球 → 新加坡。学习、体验、探索真实世界。",
          image: home01,
        },
        cards: [
          {
            title: "新加坡未来探索者",
            text: "学习 · 体验 · 探索新加坡",
            image: mobility01,
            action: "探索",
          },
          {
            title: "中国课堂之外",
            text: "学习 · 体验 · 探索中国",
            image: mobility02,
            action: "探索",
          },
        ],
        columns: 2,
      },
      {
        title: "APIMTC 4E 模型",
        titleEn: "The APIMTC 4E model",
        intro: "不只是参观。更要真正连接。",
        cards: [
          card("学习", "从大学、专家及专业机构获得知识。", "◈"),
          card("体验", "走进企业、实验室及真实产业环境。", "◉"),
          card("探索", "了解城市、文化、社会与环境。", "◌"),
          card("交流", "与不同国家的学生及伙伴共同学习。", "⌁"),
        ],
        columns: 4,
        variant: "portal-section--tint",
      },
    ],
  },
  "关于 APIMTC": {
    kicker: "ABOUT APIMTC",
    title: "连接人才 · 连接世界",
    titleEn: "Connecting people · Connecting worlds",
    lead: "APIMTC 是一家立足新加坡的国际化平台，连接教育、技能、人才流动、MICE 与商务。",
    leadEn: "An international platform based in Singapore.",
    action: "了解更多",
    actionEn: "Learn more",
    sections: [
      {
        title: "新加坡是我们的根基",
        titleEn: "Singapore is our foundation",
        feature: {
          kicker: "OUR ROOTS",
          title: "从新加坡出发",
          text: "新加坡是我们的企业总部，也是连接亚洲与全球的国际平台。我们连接中国、亚洲及世界。",
          image: home01,
        },
        cards: [
          card("MICE 与旅游", "凭借多年目的地管理经验，连接国际项目。", "◌"),
          card("教育与国际流动", "连接教育、技能、人才与产业。", "◇"),
          card("全球合作网络", "学校、大学、机构、企业与国际组织。", "⌘"),
        ],
        columns: 3,
      },
      {
        title: "我们的品牌架构",
        titleEn: "Our brand architecture",
        cards: [
          card(
            "APIMTC",
            "新加坡。母公司及国际化平台。MICE · 旅游 · 教育 · 商务",
            "◈",
          ),
          card(
            "API EduVoyage",
            "中国 · 成都。中国教育流动平台。教育 · 技能 · 学生流动",
            "▣",
          ),
          card("全球合作网络", "学校 · 大学 · 教育机构 · 企业 · 国际组织", "◎"),
        ],
        columns: 3,
        variant: "portal-section--tint",
      },
      {
        title: "我们相信",
        titleEn: "What we believe",
        intro: "学习，应该走得更远。超越课堂，超越国界，超越期待。",
        feature: {
          kicker: "OUR MISSION",
          title: "连接，创造更多可能",
          text: "连接人才、城市、教育、产业与机会。新加坡是我们的根基，成都是我们的中国门户。",
          image: home02,
        },
      },
    ],
  },
  教育流动: {
    kicker: "EDUCATION MOBILITY",
    title: "超越国界 · 超越课堂",
    titleEn: "Beyond borders · Beyond classrooms",
    lead: "让学习走出课堂，走进大学、产业、科技、文化与真实世界。",
    leadEn: "Learning beyond the classroom and into the real world.",
    description: "打造具有国际视野的沉浸式教育项目。",
    descriptionEn: "Immersive programmes with an international perspective.",
    action: "探索教育项目",
    actionEn: "Explore programmes",
    sections: [
      {
        title: "我们的两大教育项目",
        titleEn: "Our two flagship programmes",
        cards: [
          {
            title: "新加坡未来探索者",
            text: "中国及全球 → 新加坡。探索教育、科技、产业、文化与未来发展。",
            image: mobility01,
            action: "探索新加坡",
          },
          {
            title: "中国课堂之外",
            text: "新加坡 → 中国。走进城市、大学、企业、科技与文化。",
            image: mobility02,
            action: "探索中国",
          },
        ],
        columns: 2,
      },
      {
        title: "APIMTC 4E 模型",
        titleEn: "The APIMTC 4E model",
        cards: [
          card("生命与健康", "走近科技、医学与未来生活。", "♡"),
          card("太空与航空", "探索前沿科技与工程实践。", "↗"),
          card("可持续发展", "理解人与自然的长期关系。", "◌"),
          card("人工智能", "体验数字技术与未来产业。", "☼"),
          card("新兴产业", "走进真实的创新现场。", "✳"),
        ],
        columns: 5,
        variant: "portal-section--tint",
      },
      {
        title: "为不同年龄而设计",
        titleEn: "Designed for every age",
        cards: [
          card("小学", "激发好奇心，探索科学、科技与世界。", "○"),
          card("初中 / 中学", "连接学术、产业、科技与全球议题。", "◇"),
          card("高中 / JC", "聚焦未来、创新、领导力与新兴产业。", "◈"),
        ],
        columns: 3,
        feature: {
          kicker: "CUSTOM PROGRAMMES",
          title: "定制你的国际学习之旅",
          text: "根据年龄、学习目标、主题及学校需求，打造适合每一个团队的国际项目。",
          image: mobility03,
          action: "定制项目",
        },
      },
    ],
  },
  "MICE 与商务": {
    kicker: "MICE & BUSINESS",
    title: "让商务连接真实体验",
    titleEn: "Connecting business with real experience",
    lead: "APIMTC 结合 MICE 专业能力、目的地经验及国际合作网络。",
    leadEn:
      "MICE expertise, destination knowledge and international connections.",
    description: "打造有价值的商务与专业交流项目。",
    descriptionEn: "Purposeful business and professional exchange programmes.",
    action: "了解更多",
    actionEn: "Learn more",
    sections: [
      {
        title: "我们提供",
        titleEn: "What we provide",
        cards: [
          card("MICE", "会议 · 奖励旅游 · 大型会议 · 活动", "▣"),
          card("专业学习", "让商务之旅成为真正的学习体验。", "◇"),
          card("高管项目", "为企业领导者及专业人士打造定制项目。", "●"),
          card("商务代表团", "连接企业、机构、市场及潜在伙伴。", "♟"),
          card("产业参访", "走进科技、创新与产业现场。", "▥"),
          card("标杆考察", "了解领先企业与优秀实践。", "◎"),
          card("商务交流", "建立关系、交流观点、探索合作机会。", "▱"),
        ],
        columns: 4,
      },
      {
        title: "不只是一次商务之旅",
        titleEn: "More than a business trip",
        intro: "学习 · 连接 · 体验",
        feature: {
          kicker: "APIMTC",
          title: "让交流产生价值",
          text: "连接人才、产业、机构与思想，打造有目标的国际交流项目。",
          image: mice01,
        },
        cards: [
          card("目的地专业能力", "深入了解目的地及当地资源。", "◌"),
          card("MICE 项目能力", "专业策划与项目执行。", "◇"),
          card("国际合作网络", "连接教育、商务及产业伙伴。", "◎"),
          card("一站式执行", "从项目策划、协调到落地执行。", "▣"),
        ],
        columns: 4,
        variant: "portal-section--tint",
      },
      {
        title: "有项目想法？",
        titleEn: "Have a project in mind?",
        intro: "让我们将您的目标，转化为真正有价值的国际体验。",
        feature: {
          kicker: "CONNECT",
          title: "企业 · 政府 · 教育机构 · 行业协会 · 国际组织",
          text: "与 APIMTC 一起打造专业、有价值的国际交流。",
          image: mice02,
          action: "与我们洽谈",
        },
      },
    ],
  },
  国际合作: {
    kicker: "INTERNATIONAL COOPERATION",
    title: "携手打造国际项目",
    titleEn: "Building international projects together",
    lead: "我们与教育、商务、政府及产业伙伴合作，共同打造有价值的跨境交流项目。",
    leadEn:
      "Cross-border programmes built with education, business, government and industry partners.",
    action: "了解更多",
    actionEn: "Learn more",
    sections: [
      {
        title: "我们的合作伙伴",
        titleEn: "Our partners",
        cards: [
          card("学校", "国际学习、学生流动与交流项目。", "▣"),
          card("大学", "学术合作、学生交流与产业互动。", "◇"),
          card("职业院校", "技能发展、科技与产业体验。", "▤"),
          card("政府及机构", "国际交流、代表团及标杆考察。", "▥"),
          card("企业与产业伙伴", "商务交流、专业学习与人才发展。", "▦"),
          card("教育及培训机构", "跨市场、跨教育体系的合作项目。", "◎"),
        ],
        columns: 6,
      },
      {
        title: "我们可以共同打造",
        titleEn: "What we can build together",
        cards: [
          card("学生国际流动", "国际学习与交流。", "◉"),
          card("院校及机构交流", "连接学校、大学与国际机构。", "↗"),
          card("专业学习", "考察、研学、高管及技能发展项目。", "▣"),
          card("产业交流", "企业参访、创新及真实产业体验。", "♧"),
          card("国际代表团", "教育、商务及机构交流项目。", "✳"),
          card("MICE 与国际活动", "会议、大型活动及国际交流。", "▤"),
        ],
        columns: 6,
        variant: "portal-section--tint",
      },
      {
        title: "从想法到落地",
        titleEn: "From idea to delivery",
        steps: ["了解", "设计", "连接", "执行"],
        feature: {
          kicker: "PARTNER WITH US",
          title: "携手，共创国际未来",
          text: "有项目、合作或国际交流想法？我们从项目构思到落地执行，为您提供一站式支持。",
          image: intl01,
          action: "开始洽谈",
        },
      },
    ],
  },
  中国门户: {
    kicker: "CHINA GATEWAY",
    title: "成都 · 连接中国",
    titleEn: "Chengdu · Connecting China",
    lead: "通过位于成都的 API EduVoyage，连接中国的教育、技能、产业、文化与国际合作资源。",
    leadEn: "Our Chengdu gateway connects China with the world.",
    action: "了解更多",
    actionEn: "Learn more",
    sections: [
      {
        title: "API EDUVOYAGE",
        titleEn: "API EduVoyage",
        intro: "亚太国际智航 · 中国 · 成都。APIMTC 在中国的教育流动平台。",
        feature: {
          kicker: "CHINA GATEWAY",
          title: "从新加坡，连接中国",
          text: "我们将新加坡的国际视野与中国不断发展的教育及产业资源连接起来。",
          image: china01,
        },
        steps: ["新加坡", "成都", "中国各地", "世界"],
      },
      {
        title: "中国 · 不只是目的地",
        titleEn: "China beyond the destination",
        intro: "每一座城市，都是一间课堂。",
        cards: [
          { title: "上海", text: "AI · 金融 · 创新", image: cityShanghai },
          { title: "深圳", text: "科技 · 机器人 · 创新", image: cityShenzhen },
          { title: "杭州", text: "数字经济 · 创业", image: cityHangzhou },
          { title: "苏州", text: "智慧城市 · 中新合作", image: citySuzhou },
          { title: "北京", text: "领导力 · 文化 · 历史", image: cityBeijing },
          {
            title: "西安",
            text: "STEM · 丝绸之路 · 文化遗产",
            image: cityXiAn,
          },
          { title: "成都", text: "可持续发展 · 四川文化", image: cityChengdu },
          { title: "广州", text: "国际贸易 · 大湾区", image: cityGuangzhou },
        ],
        columns: 4,
      },
      {
        title: "走进真实的中国",
        titleEn: "China beyond the classroom",
        intro:
          "面向新加坡学校及学生，打造融合学习、科技、产业、文化与交流的沉浸式中国教育项目。",
        feature: {
          kicker: "CHINA BEYOND THE CLASSROOM",
          title: "中国与世界",
          text: "学生流动 · 技能发展 · 院校交流 · 专业学习 · 国际合作",
          image: china06,
          action: "探索中国项目",
        },
        variant: "portal-section--tint",
      },
    ],
  },
  联系我们: {
    kicker: "CONTACT APIMTC",
    title: "让我们连接世界",
    titleEn: "Let us connect the world",
    lead: "无论您正在寻找国际教育项目、学生交流、商务交流、MICE 服务，还是国际合作机会，我们都期待与您交流。",
    leadEn: "Tell us what you want to build across borders.",
    action: "开始洽谈",
    actionEn: "Start a conversation",
    sections: [
      {
        title: "您想探索什么？",
        titleEn: "What are you exploring?",
        cards: [
          card("教育流动", "国际学生项目、学校交流及沉浸式学习。", "◇"),
          card("MICE 与商务", "会议、活动、商务代表团及产业参访。", "▣"),
          card("国际合作", "院校、企业、政府及机构合作。", "♧"),
          card("中国项目", "通过成都平台连接中国教育与产业资源。", "▤"),
        ],
        columns: 4,
      },
      {
        title: "与我们联系",
        titleEn: "Connect with us",
        cards: [
          card(
            "APIMTC",
            "Asia Pacific International MICE & Travel Centre\nSingapore\n我们的企业总部及国际平台",
            "◎",
          ),
          card(
            "API EduVoyage",
            "Asia Pacific International EduVoyage\nChengdu, China\n我们的中国教育流动平台",
            "◇",
          ),
        ],
        columns: 2,
        feature: {
          kicker: "LET’S CONNECT",
          title: "有一个想法？",
          text: "告诉我们您希望实现的目标，我们的团队将与您一起探索合适的项目、合作伙伴与发展机会。",
          image: contact01,
          action: "提交咨询",
        },
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
.portal-section--tint::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
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
  min-height: 446px;
  padding: 126px 0 52px;
  display: flex;
  align-items: flex-end;
  background-position: center;
  background-size: cover;
  color: #fff;
  position: relative;
  isolation: isolate;
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
.hero-kicker,
.section-kicker {
  margin: 0 0 10px;
  color: var(--cyan);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.16em;
}
.portal-hero h1 {
  margin: 0 0 12px;
  color: #fff;
  font-size: clamp(33px, 4vw, 55px);
  line-height: 1.1;
  font-weight: 700;
}
.hero-lead {
  max-width: 630px;
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.45;
  color: #fff;
}
.hero-description {
  max-width: 650px;
  margin: 0 0 23px;
  color: rgba(255, 255, 255, 0.89);
  font-size: 14px;
  line-height: 1.7;
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
    min-height: 390px;
    padding: 110px 0 42px;
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
    font-size: 32px;
  }
  .hero-lead {
    font-size: 16px;
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
</style>
