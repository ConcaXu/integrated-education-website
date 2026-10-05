<!-- 新加坡未来学习系列 Singapore Future Learning Series -->
<template>
  <div class="sfls-page">
    <!-- Hero -->
    <section class="sfls-hero">
      <div class="sfls-shell sfls-hero__grid">
        <div class="sfls-hero__copy">
          <p class="sfls-hero__meta">APIMTC / 2025–26</p>
          <p class="sfls-hero__eyebrow">{{
            isEn ? "SINGAPORE FUTURE LEARNING SERIES" : "新加坡未来学习系列"
          }}</p>
          <h1>
            {{ isEn ? "Singapore" : "新加坡" }}<br /><span>{{
              isEn ? "Future Learning Series" : "未来学习系列"
            }}</span>
          </h1>
          <p class="sfls-hero__sub">{{
            isEn
              ? "3 Age Groups · 3 Learning Journeys · 1 Singapore Experience"
              : "三个年龄层 · 三段学习旅程 · 一个新加坡体验"
          }}</p>
          <p class="sfls-hero__tagline">{{
            isEn
              ? "Explore Singapore · Discover the World · Imagine the Future"
              : "探索新加坡 · 发现世界 · 想象未来"
          }}</p>
          <div class="sfls-hero__badges">
            <span>{{ isEn ? "6 Days · 5 Nights" : "6天5夜" }}</span>
            <span>{{
              isEn ? "International & Overseas Schools" : "国际及海外学校"
            }}</span>
          </div>
        </div>
        <div class="sfls-hero__visual">
          <img
            :src="heroImage"
            :alt="isEn ? 'Singapore Future Learning Series' : '新加坡未来学习系列'"
          />
          <div class="sfls-hero__chip" aria-hidden="true">
            <strong>{{ isEn ? "6D 5N" : "6天5夜" }}</strong>
            <small>{{
              isEn ? "Immersive Learning" : "沉浸式学习之旅"
            }}</small>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="sfls-intro">
      <div class="sfls-shell sfls-intro__grid">
        <div>
          <div class="sfls-label">00 / {{ isEn ? "INTRODUCTION" : "介绍" }}</div>
          <h2 class="sfls-display">EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE</h2>
          <p class="sfls-intro__alt" v-if="!isEn">学习 · 体验 · 探索 · 交流</p>
        </div>
        <div class="sfls-intro__copy">
          <p>
            {{
              isEn
                ? "A progressive educational journey designed to connect students with science, technology, nature, innovation, industry and Singapore society through:"
                : "一段连接 科学、科技、自然、创新、产业与新加坡社会 的沉浸式教育之旅。通过："
            }}
          </p>
          <p>
            {{
              isEn
                ? "Students step beyond the classroom to learn through real places, real people, real technologies and real-world challenges."
                : "让学生走出课堂，在真实的场景、真实的人、真实的科技与真实的挑战中学习。"
            }}
          </p>
        </div>
      </div>
      <div class="sfls-shell sfls-intro__mosaic">
        <figure class="sfls-mosaic__main">
          <img :src="introImage01" alt="" loading="lazy" />
        </figure>
        <figure class="sfls-mosaic__side">
          <img :src="introImage02" alt="" loading="lazy" />
        </figure>
      </div>
    </section>

    <!-- Three programmes overview -->
    <section class="sfls-programmes">
      <div class="sfls-shell">
        <div class="sfls-label">
          01 / {{ isEn ? "THREE PROGRAMMES FOR DIFFERENT AGES" : "三大项目 · 针对不同年龄" }}
        </div>
        <h2 class="sfls-h2">
          {{
            isEn
              ? "THREE PROGRAMMES FOR DIFFERENT AGES"
              : "三大项目 · 针对不同年龄"
          }}
        </h2>
        <div class="sfls-table-wrap">
          <table class="sfls-table sfls-table--programmes">
            <thead>
              <tr>
                <th scope="col"><span class="sfls-visually-hidden">Item</span></th>
                <th scope="col">
                  <router-link
                    class="sfls-th-link"
                    :to="programmeLinks.primary"
                    :aria-label="isEn ? 'View Primary programme details' : '查看小学课程详情'"
                    >🌟 {{ isEn ? "PRIMARY" : "小学" }}</router-link
                  >
                </th>
                <th scope="col">
                  <router-link
                    class="sfls-th-link"
                    :to="programmeLinks.secondary"
                    :aria-label="isEn ? 'View Junior High programme details' : '查看初中课程详情'"
                    >🚀 {{ isEn ? "SECONDARY" : "中学" }}</router-link
                  >
                </th>
                <th scope="col">
                  <router-link
                    class="sfls-th-link"
                    :to="programmeLinks.high"
                    :aria-label="isEn ? 'View Senior High programme details' : '查看高中课程详情'"
                    >💡 {{ isEn ? "HIGH SCHOOL / JC" : "高中 / 初级学院" }}</router-link
                  >
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in programmesTable" :key="row.labelEn">
                <th scope="row">{{ isEn ? row.labelEn : row.labelZh }}</th>
                <td :data-label="isEn ? 'Primary' : '小学'" class="sfls-cell--link">
                  <router-link
                    class="sfls-cell-link"
                    :to="programmeLinks.primary"
                    :aria-label="isEn ? 'View Primary programme details' : '查看小学课程详情'"
                  >
                    <strong>{{ isEn ? row.primaryEn : row.primaryZh }}</strong>
                    <span class="sfls-cell-link__arrow" aria-hidden="true">→</span>
                  </router-link>
                </td>
                <td :data-label="isEn ? 'Secondary' : '中学'" class="sfls-cell--link">
                  <router-link
                    class="sfls-cell-link"
                    :to="programmeLinks.secondary"
                    :aria-label="isEn ? 'View Junior High programme details' : '查看初中课程详情'"
                  >
                    <strong>{{ isEn ? row.secondaryEn : row.secondaryZh }}</strong>
                    <span class="sfls-cell-link__arrow" aria-hidden="true">→</span>
                  </router-link>
                </td>
                <td :data-label="isEn ? 'High School / JC' : '高中 / 初级学院'" class="sfls-cell--link">
                  <router-link
                    class="sfls-cell-link"
                    :to="programmeLinks.high"
                    :aria-label="isEn ? 'View Senior High programme details' : '查看高中课程详情'"
                  >
                    <strong>{{ isEn ? row.highEn : row.highZh }}</strong>
                    <span class="sfls-cell-link__arrow" aria-hidden="true">→</span>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Age group sections -->
    <article
      v-for="(group, gi) in ageGroups"
      :key="group.key"
      class="sfls-group"
      :class="`sfls-group--${gi + 1}`"
    >
      <div class="sfls-shell">
        <div class="sfls-group__topline">
          <span>{{ String(gi + 1).padStart(2, "0") }} / 03</span>
          <span>{{
            isEn ? "SINGAPORE FUTURE LEARNING SERIES" : "新加坡未来学习系列"
          }}</span>
        </div>
        <div class="sfls-group__head">
          <header class="sfls-group__header">
            <p class="sfls-group__kicker">{{ isEn ? group.kickerEn : group.kickerZh }}</p>
            <h2>{{ isEn ? group.titleEn : group.titleZh }}</h2>
            <p class="sfls-group__tagline">{{ isEn ? group.taglineEn : group.taglineZh }}</p>
            <router-link class="sfls-group__link" :to="group.link">
              {{ isEn ? group.linkEn : group.linkZh }}
            </router-link>
          </header>
          <div class="sfls-group__visual">
            <img :src="group.image" :alt="isEn ? group.titleEn : group.titleZh" loading="lazy" />
          </div>
        </div>
        <div class="sfls-group__panel">
          <div class="sfls-table-wrap">
            <table class="sfls-table sfls-table--themes">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{{ isEn ? "Theme" : "主题" }}</th>
                  <th scope="col">{{ isEn ? "Students Explore" : "学生将探索" }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="theme in group.themes" :key="theme.no">
                  <td class="sfls-theme-no" :aria-label="theme.no">
                    <span>{{ theme.no }}</span>
                    <em aria-hidden="true">{{ theme.emoji }}</em>
                  </td>
                  <td :data-label="isEn ? 'Theme' : '主题'"><strong>{{ isEn ? theme.themeEn : theme.themeZh }}</strong></td>
                  <td :data-label="isEn ? 'Students Explore' : '学生将探索'">{{ isEn ? theme.exploreEn : theme.exploreZh }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="sfls-group__experience">
            <h3>{{ isEn ? "Students Experience" : "学生体验" }}</h3>
            <p>{{ isEn ? group.experienceEn : group.experienceZh }}</p>
          </div>
        </div>
      </div>
    </article>

    <!-- Real Singapore -->
    <section class="sfls-real">
      <div class="sfls-shell">
        <div class="sfls-label">
          05 / {{ isEn ? "REAL SINGAPORE · REAL-WORLD LEARNING" : "真实新加坡 · 真实世界学习" }}
        </div>
        <div class="sfls-real__head">
          <h2 class="sfls-h2">
            {{ isEn ? "REAL SINGAPORE · REAL-WORLD LEARNING" : "真实新加坡 · 真实世界学习" }}
          </h2>
          <p class="sfls-real__lead">
            {{
              isEn
                ? "Across the three programmes, students experience Singapore through:"
                : "三大项目都将带领学生从不同年龄层的视角认识新加坡："
            }}
          </p>
        </div>
        <div class="sfls-real__grid">
          <div
            v-for="cell in realSingapore"
            :key="cell.titleEn"
            class="sfls-real__cell"
          >
            <h3>{{ isEn ? cell.titleEn : cell.titleZh }}</h3>
            <p>{{ isEn ? cell.textEn : cell.textZh }}</p>
          </div>
        </div>
        <figure class="sfls-real__visual">
          <img :src="realImage" alt="" loading="lazy" />
        </figure>
      </div>
    </section>

    <!-- The Learning Journey -->
    <section class="sfls-journey">
      <div class="sfls-shell">
        <div class="sfls-label">
          06 / {{ isEn ? "THE LEARNING JOURNEY" : "三个年龄层 · 三段学习旅程" }}
        </div>
        <h2 class="sfls-h2">
          {{ isEn ? "THE LEARNING JOURNEY" : "三个年龄层 · 三段学习旅程" }}
        </h2>
        <ol class="sfls-journey__grid">
          <li v-for="(step, i) in learningJourney" :key="step.stageEn" class="sfls-journey__card">
            <span class="sfls-journey__index" aria-hidden="true">{{
              String(i + 1).padStart(2, "0")
            }}</span>
            <p class="sfls-journey__stage">{{ isEn ? step.stageEn : step.stageZh }}</p>
            <p class="sfls-journey__verb">{{ isEn ? step.verbEn : step.verbZh }}</p>
            <p class="sfls-journey__path">{{ isEn ? step.pathEn : step.pathZh }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- Closing -->
    <section class="sfls-close">
      <img class="sfls-close__bg" :src="closeImage" alt="" loading="lazy" />
      <div class="sfls-close__inner">
        <h2>{{ isEn ? "ONE DESTINATION. THREE LEARNING JOURNEYS." : "一个目的地 · 三段成长旅程" }}</h2>
        <p class="sfls-close__chain">
          <span>{{ isEn ? "From" : "从：" }}</span>
          <strong>{{ isEn ? "Life → Space → Cities → Industry → Earth → AI" : "生命 → 太空 → 城市 → 工业 → 地球 → AI" }}</strong>
        </p>
        <p class="sfls-close__copy">
          {{
            isEn
              ? "Students learn, experience, explore and exchange — at a level designed for their age and stage of development."
              : "学生将在适合自己年龄与学习阶段的环境中：学习 · 体验 · 探索 · 交流 · 创造"
          }}
        </p>
        <p class="sfls-close__cta">
          {{ isEn ? "COME TO SINGAPORE." : "来新加坡，探索未来。" }}
          <span v-if="isEn">EXPLORE THE FUTURE.</span>
        </p>
        <p class="sfls-close__meta">
          <strong>{{ isEn ? "6 DAYS · 5 NIGHTS" : "6天5夜" }}</strong>
          <span>{{
            isEn
              ? "Learn · Experience · Explore · Exchange · Create"
              : "国际及海外学校教育体验项目"
          }}</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "@/composables/useI18n";
import heroImage from "@/assets/sfls-images/hero-singapore.webp";
import introImage01 from "@/assets/sfls-images/intro-exploration.webp";
import introImage02 from "@/assets/sfls-images/intro-stem-hands.webp";
import primaryImage from "@/assets/sfls-images/group-primary.webp";
import secondaryImage from "@/assets/sfls-images/group-secondary.webp";
import highImage from "@/assets/sfls-images/group-highschool.webp";
import realImage from "@/assets/sfls-images/real-singapore.webp";
import closeImage from "@/assets/sfls-images/closing-skyline.webp";

const { lang } = useI18n();
const isEn = computed(() => lang.value === "en");

const programmesTable = [
  {
    labelEn: "Programme",
    labelZh: "项目",
    primaryEn: "Singapore Future Explorers",
    primaryZh: "新加坡未来探索",
    secondaryEn: "Singapore Future Explorers",
    secondaryZh: "新加坡未来探索者",
    highEn: "Singapore Future Leaders",
    highZh: "新加坡未来领袖",
  },
  {
    labelEn: "Age",
    labelZh: "年龄",
    primaryEn: "10–12",
    primaryZh: "10至12岁",
    secondaryEn: "13–16",
    secondaryZh: "13–16岁",
    highEn: "16–18",
    highZh: "16–18岁",
  },
  {
    labelEn: "Focus",
    labelZh: "核心方向",
    primaryEn: "Discover",
    primaryZh: "发现",
    secondaryEn: "Explore & Apply",
    secondaryZh: "探索与应用",
    highEn: "Create & Connect",
    highZh: "创造与连接",
  },
  {
    labelEn: "Learning",
    labelZh: "学习重点",
    primaryEn: "Science · STEM · Nature · Technology",
    primaryZh: "科学 · STEM · 自然 · 科技",
    secondaryEn: "Science · Technology · Industry · AI",
    secondaryZh: "科学 · 科技 · 产业 · AI",
    highEn: "Research · Innovation · Industry · Future Careers",
    highZh: "科研 · 创新 · 产业 · 未来发展",
  },
  {
    labelEn: "Experience",
    labelZh: "体验方式",
    primaryEn: "Hands-on discovery",
    primaryZh: "动手探索",
    secondaryEn: "Applied learning & challenges",
    secondaryZh: "应用学习与挑战",
    highEn: "Innovation, prototyping & pathways",
    highZh: "创新、原型设计与未来路径",
  },
];

type ThemeRow = {
  no: string;
  emoji: string;
  themeEn: string;
  themeZh: string;
  exploreEn: string;
  exploreZh: string;
};

const primaryThemes: ThemeRow[] = [
  { no: "01", emoji: "🧬", themeEn: "Amazing Life", themeZh: "奇妙生命", exploreEn: "Human body · Life science · Health", exploreZh: "人体 · 生命科学 · 健康" },
  { no: "02", emoji: "🚀", themeEn: "Young Space Explorers", themeZh: "小小太空探索家", exploreEn: "Flight · Space · Moon / Mars missions", exploreZh: "飞行 · 太空 · 月球 / 火星任务" },
  { no: "03", emoji: "🌱", themeEn: "Green Singapore", themeZh: "绿色新加坡", exploreEn: "Water · Energy · Nature · Green cities", exploreZh: "水资源 · 能源 · 自然 · 绿色城市" },
  { no: "04", emoji: "🤖", themeEn: "Future Singapore", themeZh: "未来新加坡", exploreEn: "Robotics · 3D printing · Smart manufacturing", exploreZh: "机器人 · 3D打印 · 智能制造" },
  { no: "05", emoji: "🌏", themeEn: "Amazing Planet Earth", themeZh: "神奇的地球", exploreEn: "Earth · Wildlife · Oceans · Wetlands", exploreZh: "地球 · 野生动物 · 海洋 · 湿地" },
  { no: "06", emoji: "💡", themeEn: "AI for Young Innovators", themeZh: "AI小小创新家", exploreEn: "AI · Robotics · 3D printing · Generative AI", exploreZh: "AI · 机器人 · 3D打印 · 生成式AI" },
];

const secondaryThemes: ThemeRow[] = [
  { no: "01", emoji: "🧬", themeEn: "Young Biomedical Scientists", themeZh: "青年生物医学科学家", exploreEn: "Cells · DNA · Microbiology · Biomedical science", exploreZh: "细胞 · DNA · 微生物 · 生物医学" },
  { no: "02", emoji: "🚀", themeEn: "Space, Aviation & Future Mobility", themeZh: "太空、航空与未来交通", exploreEn: "Aerospace · Drones · Autonomous systems · Future transport", exploreZh: "航空航天 · 无人机 · 自主系统 · 未来交通" },
  { no: "03", emoji: "🌱", themeEn: "Smart & Sustainable Singapore", themeZh: "智慧与可持续新加坡", exploreEn: "Cities · Water · Climate · Biodiversity · Green technology", exploreZh: "城市 · 水资源 · 气候 · 生物多样性 · 绿色科技" },
  { no: "04", emoji: "🤖", themeEn: "Industry 4.0 Singapore", themeZh: "工业4.0新加坡", exploreEn: "Robotics · Automation · 3D printing · Smart manufacturing", exploreZh: "机器人 · 自动化 · 3D打印 · 智能制造" },
  { no: "05", emoji: "🌏", themeEn: "Earth, Oceans & Climate", themeZh: "地球、海洋与气候", exploreEn: "Earth systems · Oceans · Ecosystems · Climate", exploreZh: "地球系统 · 海洋 · 生态系统 · 气候" },
  { no: "06", emoji: "💡", themeEn: "AI, Robotics & Smart Nation", themeZh: "AI、机器人与智慧国家", exploreEn: "AI · Machine learning · Computer vision · Generative AI", exploreZh: "AI · 机器学习 · 计算机视觉 · 生成式AI" },
];

const highThemes: ThemeRow[] = [
  { no: "01", emoji: "🧬", themeEn: "Biomedical Innovation & Future Healthcare", themeZh: "生物医学创新与未来医疗", exploreEn: "Biotechnology · Biomedical innovation · Healthcare", exploreZh: "生物科技 · 生物医学创新 · 医疗" },
  { no: "02", emoji: "🚀", themeEn: "Space Technology & Future Mobility", themeZh: "太空科技与未来移动", exploreEn: "Space · Aerospace · Aviation · Autonomous systems", exploreZh: "太空 · 航空航天 · 航空 · 自主系统" },
  { no: "03", emoji: "🌱", themeEn: "Sustainable Cities & Climate Innovation", themeZh: "可持续城市与气候创新", exploreEn: "Climate · Water · Green technology · Biodiversity", exploreZh: "气候 · 水资源 · 绿色科技 · 生物多样性" },
  { no: "04", emoji: "🤖", themeEn: "Industry 4.0 & Innovation", themeZh: "工业4.0与创新", exploreEn: "Smart factories · Robotics · Automation · Digital manufacturing", exploreZh: "智能工厂 · 机器人 · 自动化 · 数字制造" },
  { no: "05", emoji: "🌏", themeEn: "Planetary Science & Earth Systems", themeZh: "行星科学与地球系统", exploreEn: "Earth · Oceans · Climate · Environmental systems", exploreZh: "地球 · 海洋 · 气候 · 环境系统" },
  { no: "06", emoji: "💡", themeEn: "Generative AI & Future Innovation", themeZh: "生成式AI与未来创新", exploreEn: "GenAI · Machine learning · Digital transformation · Responsible AI", exploreZh: "生成式AI · 机器学习 · 数字转型 · 负责任AI" },
];

const ageGroups = [
  {
    key: "primary",
    kickerEn: "🧬 PRIMARY · AGES 10 TO 12",
    kickerZh: "🧬 小学 · 10至12岁",
    titleEn: "SINGAPORE FUTURE EXPLORERS",
    titleZh: "新加坡未来探索",
    taglineEn: "Discover the World · Imagine the Future",
    taglineZh: "发现世界 · 想象未来",
    experienceEn:
      "School Exchange · STEM Activities · City & Community Exploration · Team Challenges · Show & Tell · Universal Studios Singapore",
    experienceZh:
      "学校交流 · STEM活动 · 城市与社区探索 · 团队挑战 · Show & Tell · 新加坡环球影城",
    themes: primaryThemes,
    image: primaryImage,
    link: "/singapore-explorers",
    linkEn: "Primary Courses",
    linkZh: "小学课程",
  },
  {
    key: "secondary",
    kickerEn: "🚀 SECONDARY · AGES 13–16",
    kickerZh: "🚀 中学 · 13–16岁",
    titleEn: "SINGAPORE FUTURE EXPLORERS",
    titleZh: "新加坡未来探索",
    taglineEn: "Explore Technology · Understand the Real World",
    taglineZh: "探索科技 · 理解真实世界",
    experienceEn:
      "School Exchange · Polytechnic Applied Learning · Technology Workshops · Industry Exposure · Design Challenges · Community Exploration · Universal Studios Singapore",
    experienceZh:
      "学校交流 · 理工学院应用学习 · 科技工作坊 · 产业体验 · 设计挑战 · 社区探索 · 新加坡环球影城",
    themes: secondaryThemes,
    image: secondaryImage,
    link: "/singapore-explorers-junior-high",
    linkEn: "Junior High Courses",
    linkZh: "初中课程",
  },
  {
    key: "high",
    kickerEn: "💡 HIGH SCHOOL / JC · AGES 16–18",
    kickerZh: "💡 高中 / 初级学院 · 16–18岁",
    titleEn: "SINGAPORE FUTURE LEADERS",
    titleZh: "新加坡未来领袖",
    taglineEn: "Connect Knowledge · Create Possibilities",
    taglineZh: "连接知识 · 创造可能",
    experienceEn:
      "School Exchange · University & Polytechnic Exposure · Research & Technology Experiences · Industry Visits · Design Thinking · Prototyping · Future Study & Career Exploration · Universal Studios",
    experienceZh:
      "学校交流 · 大学与理工学院体验 · 科研与科技体验 · 产业参访 · 设计思维 · 原型设计 · 升学与职业探索 · 新加坡环球影城",
    themes: highThemes,
    image: highImage,
    link: "/singapore-future-leaders-senior-high",
    linkEn: "Senior High Courses",
    linkZh: "高中课程",
  },
];

// 三大项目表格中，每个年龄层栏目都指向对应的详情页（复用 ageGroups 的 link，避免路由写两遍）
const programmeLinks = {
  primary: ageGroups.find((group) => group.key === "primary")?.link ?? "/",
  secondary: ageGroups.find((group) => group.key === "secondary")?.link ?? "/",
  high: ageGroups.find((group) => group.key === "high")?.link ?? "/",
};

const realSingapore = [
  {
    titleEn: "🏫 Education",
    titleZh: "🏫 教育",
    textEn: "School exchange · Student interaction · Campus experience",
    textZh: "学校交流 · 学生互动 · 校园体验",
  },
  {
    titleEn: "🔬 Science & Technology",
    titleZh: "🔬 科学与科技",
    textEn: "STEM · AI · Robotics · Biomedical · Aerospace",
    textZh: "STEM · AI · 机器人 · 生物医学 · 航空航天",
  },
  {
    titleEn: "🏭 Industry",
    titleZh: "🏭 产业",
    textEn: "Manufacturing · Technology · Innovation · Future industries",
    textZh: "制造 · 科技 · 创新 · 未来产业",
  },
  {
    titleEn: "🌱 Environment",
    titleZh: "🌱 环境",
    textEn: "Nature · Biodiversity · Water · Sustainability",
    textZh: "自然 · 生物多样性 · 水资源 · 可持续发展",
  },
  {
    titleEn: "🏙️ Community & City",
    titleZh: "🏙️ 社区与城市",
    textEn: "HDB · Markets · Hawker centres · Public transport",
    textZh: "HDB · 巴刹 · 熟食中心 · 公共交通",
  },
  {
    titleEn: "🎯 Challenges",
    titleZh: "🎯 团队挑战",
    textEn: "STEM challenges · Design thinking · Problem solving · Projects",
    textZh: "STEM挑战 · 设计思维 · 问题解决 · 项目展示",
  },
];

const learningJourney = [
  {
    stageEn: "PRIMARY",
    stageZh: "小学",
    verbEn: "DISCOVER",
    verbZh: "发现 DISCOVER",
    pathEn: "Curiosity → Experience → Imagination",
    pathZh: "好奇 → 体验 → 想象",
  },
  {
    stageEn: "SECONDARY",
    stageZh: "中学",
    verbEn: "EXPLORE",
    verbZh: "探索 EXPLORE",
    pathEn: "Knowledge → Application → Problem Solving",
    pathZh: "知识 → 应用 → 解决问题",
  },
  {
    stageEn: "HIGH SCHOOL / JC",
    stageZh: "高中 / 初级学院",
    verbEn: "CREATE",
    verbZh: "创造 CREATE",
    pathEn: "Research → Innovation → Future Pathways",
    pathZh: "科研 → 创新 → 未来发展",
  },
];
</script>

<style scoped>
.sfls-page {
  --sfls-ink: #12262e;
  --sfls-ink-soft: #3d5560;
  --sfls-muted: #5b7280;
  --sfls-paper: #f7faf8;
  --sfls-card: #ffffff;
  --sfls-line: #dbe7e1;
  --sfls-brand: #0b6e5f;
  --sfls-accent: #0aa88f;
  --sfls-lime: #d8f56a;
  --sfls-radius: 20px;
  --sfls-shadow: 0 18px 44px rgba(11, 62, 52, 0.10);
  --sfls-font: -apple-system, BlinkMacSystemFont, "SF Pro Display", "PingFang SC",
    "Helvetica Neue", "Microsoft YaHei", sans-serif;
  --sfls-mono: "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace;

  background: var(--sfls-paper);
  color: var(--sfls-ink);
  font-family: var(--sfls-font);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.sfls-page :focus-visible {
  outline: 3px solid var(--sfls-accent);
  outline-offset: 3px;
  border-radius: 6px;
}

.sfls-shell {
  max-width: 1180px;
  margin: auto;
  padding: 0 6vw;
}

.sfls-visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.sfls-label {
  font-family: var(--sfls-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--sfls-brand);
  margin-bottom: 22px;
}

.sfls-h2,
.sfls-display {
  font-family: var(--sfls-font);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.08;
  color: var(--sfls-ink);
  margin: 0 0 34px;
}
.sfls-h2 {
  font-size: clamp(14px, 3.4vw, 42px); /* 最长 EN 22.3em，全宽 1007px 内可容纳 */
  white-space: nowrap;
}
.sfls-display {
  font-size: clamp(15px, 1.5vw, 22px); /* EN 41 字符 ≈ 24em，按加宽后的左列适配 */
  white-space: nowrap;
}

/* ---------- Hero ---------- */
.sfls-hero {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(900px 480px at 88% -10%, rgba(10, 168, 143, 0.35), transparent 60%),
    radial-gradient(700px 420px at -6% 110%, rgba(10, 168, 143, 0.18), transparent 55%),
    #0d2430;
  color: #f2faf7;
  padding: clamp(88px, 10vw, 130px) 0 clamp(64px, 7vw, 96px);
}
.sfls-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(36px, 5vw, 72px);
  align-items: center;
}
.sfls-hero__meta {
  font-family: var(--sfls-mono);
  font-size: 13px;
  letter-spacing: 0.12em;
  color: #9fc9bd;
  margin: 0 0 56px;
}
.sfls-hero__eyebrow {
  font-family: var(--sfls-mono);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  white-space: nowrap;
  color: var(--sfls-lime);
  margin: 0 0 20px;
}
.sfls-hero h1 {
  font-size: clamp(27px, 2.9vw, 42px);
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: -0.045em;
  white-space: nowrap;
  margin: 0 0 24px;
  color: #ffffff;
}
.sfls-hero h1 span {
  color: var(--sfls-lime);
}
.sfls-hero__sub {
  font-size: clamp(13px, 1.05vw, 15px); /* EN 约 30.7em，按左列 ~490px 适配 */
  font-weight: 700;
  white-space: nowrap;
  color: #eafaf4;
  margin: 0 0 12px;
}
.sfls-hero__tagline {
  font-family: var(--sfls-mono);
  font-size: clamp(12px, 0.95vw + 3px, 13px); /* EN mono 约 37em，紧贴列宽 */
  letter-spacing: 0.02em;
  white-space: nowrap;
  color: #b9dcd2;
  margin: 0 0 34px;
}
.sfls-hero__badges {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.sfls-hero__badges span {
  border: 1px solid rgba(216, 245, 106, 0.4);
  border-radius: 999px;
  padding: 9px 20px;
  font-family: var(--sfls-mono);
  font-size: 12px;
  font-weight: 600;
  color: var(--sfls-lime);
  background: rgba(255, 255, 255, 0.06);
}
.sfls-hero__visual {
  position: relative;
}
.sfls-hero__visual img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--sfls-radius);
  box-shadow: 0 32px 70px rgba(2, 18, 14, 0.5);
  display: block;
}
.sfls-hero__chip {
  position: absolute;
  left: -18px;
  bottom: 26px;
  background: var(--sfls-lime);
  color: #14332b;
  border-radius: 16px;
  padding: 14px 20px;
  box-shadow: 0 16px 36px rgba(2, 18, 14, 0.35);
}
.sfls-hero__chip strong {
  display: block;
  font-family: var(--sfls-mono);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.02em;
}
.sfls-hero__chip small {
  font-size: 12px;
  font-weight: 600;
}

/* ---------- Intro ---------- */
.sfls-intro {
  padding: clamp(80px, 9vw, 110px) 0;
  background: linear-gradient(165deg, #f7faf8 0%, #e9f4ee 100%);
}
.sfls-intro__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr; /* 左列加宽，保证 EDUCATE·EXPERIENCE·EXPLORE·EXCHANGE 一行 */
  gap: clamp(32px, 5vw, 72px);
  align-items: start;
}
.sfls-intro__grid .sfls-display {
  color: var(--sfls-brand);
  margin-bottom: 0;
}
.sfls-intro__alt {
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  color: var(--sfls-ink-soft);
  margin: 16px 0 0;
}
.sfls-intro__copy p {
  font-size: 17px;
  line-height: 1.85;
  color: var(--sfls-ink-soft);
  margin: 0 0 18px;
  max-width: 56ch;
}
.sfls-intro__copy p:first-child {
  border-top: 3px solid var(--sfls-accent);
  padding-top: 22px;
}
.sfls-intro__mosaic {
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 20px;
  margin-top: clamp(44px, 6vw, 72px);
}
.sfls-intro__mosaic figure {
  margin: 0;
  border-radius: var(--sfls-radius);
  overflow: hidden;
  box-shadow: var(--sfls-shadow);
}
.sfls-mosaic__main img {
  width: 100%;
  height: clamp(240px, 30vw, 360px);
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.sfls-mosaic__side {
  margin-top: 44px;
}
.sfls-mosaic__side img {
  width: 100%;
  height: clamp(200px, 24vw, 300px);
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.sfls-mosaic__main:hover img,
.sfls-mosaic__side:hover img {
  transform: scale(1.04);
}

/* ---------- Tables (light card, always high contrast, never scrolls) ---------- */
.sfls-table-wrap {
  border-radius: 16px;
  box-shadow: var(--sfls-shadow);
}
.sfls-table {
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
  background: var(--sfls-card);
  color: var(--sfls-ink);
  font-size: 15px;
}
.sfls-table thead th {
  background: #0e3c34;
  color: #ffffff;
  text-align: left;
  font-family: var(--sfls-mono);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 16px 18px;
}
.sfls-table tbody th[scope="row"],
.sfls-table tbody td {
  padding: 15px 18px;
  border-bottom: 1px solid var(--sfls-line);
  text-align: left;
  vertical-align: top;
  line-height: 1.6;
  color: var(--sfls-ink);
  overflow-wrap: break-word;
}
.sfls-table tbody th[scope="row"] {
  background: #f0f7f3;
  font-weight: 700;
  color: #0e3c34;
}
.sfls-table tbody td strong {
  color: #0b6e5f;
  font-weight: 700;
}
.sfls-table tbody tr:last-child th,
.sfls-table tbody tr:last-child td {
  border-bottom: 0;
}
.sfls-table tbody tr {
  transition: background 0.2s ease;
}
.sfls-table tbody tr:hover {
  background: #f4faf7;
}

/* ---------- 三大项目表格：年龄层栏目整格可点击，跳转对应详情页 ---------- */
.sfls-table--programmes thead th .sfls-th-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  color: inherit;
  text-decoration: none;
  outline-offset: 3px;
  transition: color 0.2s ease;
}
.sfls-table--programmes thead th .sfls-th-link:hover,
.sfls-table--programmes thead th .sfls-th-link:focus-visible {
  color: var(--sfls-lime);
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* 单元格内边距交给链接，使整个格子成为可点击区域 */
.sfls-table--programmes tbody td.sfls-cell--link {
  padding: 0;
}
.sfls-cell-link {
  display: block;
  height: 100%;
  padding: 15px 18px;
  color: inherit;
  text-decoration: none;
  outline-offset: -3px;
  transition: background 0.2s ease;
}
.sfls-cell-link strong {
  transition: color 0.2s ease;
}
.sfls-cell-link__arrow {
  display: inline-block;
  margin-left: 7px;
  color: #0b6e5f;
  font-weight: 700;
  opacity: 0;
  transform: translateX(-5px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.sfls-cell-link:hover strong,
.sfls-cell-link:focus-visible strong {
  color: #0e3c34;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.sfls-cell-link:hover .sfls-cell-link__arrow,
.sfls-cell-link:focus-visible .sfls-cell-link__arrow {
  opacity: 1;
  transform: translateX(0);
}
/* :has() 让悬停底色铺满整格，而不只是文字那一小块 */
.sfls-table--programmes tbody td.sfls-cell--link:has(.sfls-cell-link:hover),
.sfls-table--programmes tbody td.sfls-cell--link:has(.sfls-cell-link:focus-visible) {
  background: #e6f5ee;
}
/* 触屏设备无 hover，箭头常显以示可点 */
@media (hover: none) {
  .sfls-cell-link__arrow {
    opacity: 1;
    transform: none;
  }
}

/* ---------- Programmes overview ---------- */
.sfls-programmes {
  padding: clamp(80px, 9vw, 108px) 0;
  border-top: 1px solid var(--sfls-line);
}

/* ---------- Age groups ---------- */
.sfls-group {
  position: relative;
  overflow: hidden;
  color: #eef8f4;
  padding: clamp(64px, 8vw, 96px) 0;
}
.sfls-group--1 {
  background: linear-gradient(160deg, #0f4a3c 0%, #0b352c 100%);
}
.sfls-group--2 {
  background: linear-gradient(160deg, #123047 0%, #0c2233 100%);
}
.sfls-group--3 {
  background: linear-gradient(160deg, #2c2450 0%, #1c1838 100%);
}
.sfls-group__topline {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-family: var(--sfls-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: #a9cdbf;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  padding-bottom: 16px;
}
.sfls-group__kicker {
  font-family: var(--sfls-mono);
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  color: var(--sfls-lime);
  margin: 0 0 16px;
}
.sfls-group__header h2 {
  font-size: clamp(18px, 2.4vw, 34px); /* 最长 EN "SINGAPORE FUTURE EXPLORERS" ≈ 16.1em，左列 ~551px */
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  white-space: nowrap;
  color: #ffffff;
  margin: 0 0 16px;
}
.sfls-group__tagline {
  font-size: clamp(15px, 1.5vw, 18px); /* 最长 EN 约 23.9em，按左列宽度适配 */
  font-weight: 600;
  white-space: nowrap;
  color: #d7ece5;
  margin: 0 0 26px;
}
.sfls-group__link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 2px solid var(--sfls-lime);
  color: var(--sfls-lime);
  border-radius: 999px;
  padding: 11px 26px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
}
.sfls-group__link:hover {
  background: var(--sfls-lime);
  color: #14332b;
  transform: translateY(-2px);
}
.sfls-group__head {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 400px);
  gap: clamp(28px, 4vw, 56px);
  align-items: center;
  padding-bottom: clamp(32px, 4vw, 48px);
}
.sfls-group__header {
  max-width: 640px;
}
.sfls-group__kicker {
  font-family: var(--sfls-mono);
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  color: var(--sfls-lime);
  margin: 0 0 16px;
}
.sfls-group__header h2 {
  font-size: clamp(18px, 2.4vw, 34px); /* 最长 EN "SINGAPORE FUTURE EXPLORERS" ≈ 16.1em，左列 ~551px */
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
  white-space: nowrap;
  color: #ffffff;
  margin: 0 0 16px;
}
.sfls-group__tagline {
  font-size: clamp(15px, 1.5vw, 18px); /* 最长 EN 约 23.9em，按左列宽度适配 */
  font-weight: 600;
  white-space: nowrap;
  color: #d7ece5;
  margin: 0 0 26px;
}
.sfls-group__link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 2px solid var(--sfls-lime);
  color: var(--sfls-lime);
  border-radius: 999px;
  padding: 11px 26px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
}
.sfls-group__link:hover {
  background: var(--sfls-lime);
  color: #14332b;
  transform: translateY(-2px);
}
.sfls-group__visual {
  border-radius: var(--sfls-radius);
  overflow: hidden;
  box-shadow: 0 26px 60px rgba(2, 18, 14, 0.45);
}
.sfls-group__visual img {
  width: 100%;
  height: clamp(220px, 24vw, 300px);
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.sfls-group__visual:hover img {
  transform: scale(1.04);
}
.sfls-group__panel {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.sfls-group__panel .sfls-table-wrap {
  box-shadow: 0 20px 48px rgba(2, 18, 14, 0.35);
}
.sfls-theme-no {
  white-space: nowrap;
}
.sfls-theme-no span {
  font-family: var(--sfls-mono);
  font-weight: 700;
  color: #0b6e5f;
  margin-right: 8px;
}
.sfls-theme-no em {
  font-style: normal;
}
.sfls-group__experience {
  border-left: 5px solid var(--sfls-lime);
  background: rgba(255, 255, 255, 0.92);
  color: var(--sfls-ink);
  border-radius: 0 16px 16px 0;
  padding: 24px 30px;
  box-shadow: 0 16px 40px rgba(2, 18, 14, 0.28);
}
.sfls-group__experience h3 {
  font-family: var(--sfls-mono);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 10px;
  color: #0b6e5f;
}
.sfls-group__experience p {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.8;
  color: var(--sfls-ink);
}

/* ---------- Real Singapore ---------- */
.sfls-real {
  padding: clamp(80px, 9vw, 108px) 0;
  border-top: 1px solid var(--sfls-line);
}
.sfls-real__head {
  display: grid;
  grid-template-columns: 1fr; /* 标题与 lead 各占整行，保证各自一行显示 */
  gap: 14px;
  align-items: start;
  margin-bottom: 40px;
}
.sfls-real__head .sfls-h2 {
  margin-bottom: 0;
}
.sfls-real__lead {
  font-size: clamp(13px, 2.5vw, 17px); /* EN 约 35.4em（>30em），随视口缩放 */
  line-height: 1.7;
  white-space: nowrap;
  color: var(--sfls-ink-soft);
  margin: 0;
}
.sfls-real__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 44px;
}
.sfls-real__cell {
  background: var(--sfls-card);
  border: 1px solid var(--sfls-line);
  border-top: 4px solid var(--sfls-accent);
  border-radius: 16px;
  padding: 26px 24px;
  box-shadow: var(--sfls-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.sfls-real__cell:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 52px rgba(11, 62, 52, 0.16);
}
.sfls-real__cell h3 {
  font-size: 17px;
  font-weight: 800;
  color: var(--sfls-ink);
  margin: 0 0 10px;
}
.sfls-real__cell p {
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--sfls-ink-soft);
}
.sfls-real__visual {
  margin: 0;
  border-radius: var(--sfls-radius);
  overflow: hidden;
  box-shadow: var(--sfls-shadow);
}
.sfls-real__visual img {
  width: 100%;
  height: clamp(220px, 30vw, 380px);
  object-fit: cover;
  display: block;
}

/* ---------- Learning journey ---------- */
.sfls-journey {
  padding: clamp(80px, 9vw, 108px) 0;
  border-top: 1px solid var(--sfls-line);
  background: linear-gradient(165deg, #f7faf8 0%, #e9f4ee 100%);
}
.sfls-journey__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.sfls-journey__card {
  position: relative;
  background: var(--sfls-card);
  border: 1px solid var(--sfls-line);
  border-radius: var(--sfls-radius);
  padding: 34px 28px 30px;
  box-shadow: var(--sfls-shadow);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.sfls-journey__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 52px rgba(11, 62, 52, 0.16);
}
.sfls-journey__card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--sfls-accent), var(--sfls-lime));
}
.sfls-journey__index {
  font-family: var(--sfls-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--sfls-accent);
  letter-spacing: 0.1em;
}
.sfls-journey__stage {
  font-family: var(--sfls-mono);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  color: var(--sfls-muted);
  margin: 12px 0 8px;
}
.sfls-journey__verb {
  font-size: clamp(22px, 2.4vw, 28px);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #0b6e5f;
  margin: 0 0 12px;
}
.sfls-journey__path {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.7;
  color: var(--sfls-ink);
}

/* ---------- Closing ---------- */
.sfls-close {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  text-align: center;
  padding: clamp(96px, 12vw, 150px) 6vw;
}
.sfls-close__bg {
  position: absolute;
  z-index: -2;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sfls-close::after {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background: linear-gradient(180deg, rgba(8, 22, 30, 0.82), rgba(8, 22, 30, 0.62) 45%, rgba(8, 22, 30, 0.88));
}
.sfls-close__inner {
  max-width: 880px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.sfls-close__inner h2 {
  font-size: clamp(13px, 2.4vw, 34px); /* EN 41 字符 ≈ 24em（含字距），max-width 880px 内一行 */
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.1;
  white-space: nowrap;
  color: #ffffff;
  margin: 0;
}
.sfls-close__chain {
  margin: 0;
  font-size: 16px;
  color: #cfe6de;
}
.sfls-close__chain strong {
  display: block;
  margin-top: 8px;
  font-family: var(--sfls-mono);
  font-size: clamp(15px, 2vw, 20px);
  font-weight: 700;
  color: var(--sfls-lime);
}
.sfls-close__copy {
  margin: 0;
  font-size: 16px;
  line-height: 1.8;
  color: #e4f2ec;
  max-width: 62ch;
  margin-inline: auto;
}
.sfls-close__cta {
  font-size: clamp(22px, 3vw, 34px);
  font-weight: 800;
  letter-spacing: -0.02em;
  white-space: nowrap;
  color: var(--sfls-lime);
  margin: 10px 0 0;
}
.sfls-close__cta span {
  display: block;
}
.sfls-close__meta {
  margin: 14px 0 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.sfls-close__meta strong {
  font-family: var(--sfls-mono);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #ffffff;
}
.sfls-close__meta span {
  font-size: 14px;
  color: #cfe6de;
}

@media (prefers-reduced-motion: reduce) {
  .sfls-page *,
  .sfls-page *::before,
  .sfls-page *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}

/* ---------- Mobile: tables become stacked cards (no horizontal scroll ever) ---------- */
@media (max-width: 720px) {
  .sfls-shell {
    padding: 0 5vw;
  }
  .sfls-table {
    font-size: 14px;
  }
  .sfls-table--programmes thead,
  .sfls-table--themes thead {
    display: none;
  }
  .sfls-table--programmes tbody tr,
  .sfls-table--themes tbody tr {
    display: block;
    border-bottom: 1px solid var(--sfls-line);
    padding: 6px 0;
  }
  .sfls-table--programmes tbody tr:last-child,
  .sfls-table--themes tbody tr:last-child {
    border-bottom: 0;
  }
  .sfls-table--programmes tbody th[scope="row"],
  .sfls-table--programmes tbody td,
  .sfls-table--themes tbody td {
    display: block;
    width: 100%;
    padding: 7px 16px;
    border-bottom: 0;
    background: transparent;
  }
  /* 移动端卡片式布局下，内边距同样交给链接，并保证 44px 触控高度 */
  .sfls-table--programmes tbody td.sfls-cell--link {
    padding: 0;
  }
  .sfls-cell-link {
    padding: 11px 16px;
  }
  /* 窄屏多为触屏，箭头常显以示可点 */
  .sfls-cell-link__arrow {
    opacity: 1;
    transform: none;
  }
  .sfls-table--programmes tbody th[scope="row"] {
    padding-bottom: 2px;
  }
  .sfls-table--programmes tbody td::before,
  .sfls-table--themes tbody td:last-child::before {
    content: attr(data-label);
    display: block;
    font-family: var(--sfls-mono);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--sfls-muted);
    margin-bottom: 3px;
  }
  .sfls-table--themes .sfls-theme-no {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 0;
  }
  .sfls-table--themes .sfls-theme-no + td {
    padding-top: 4px;
  }
}

/* ---------- Tiny screens: 超长英文短句（>30em）在 360px 下即使 12px 也放不下，允许换行 ---------- */
@media (max-width: 480px) {
  .sfls-hero__sub,
  .sfls-hero__tagline,
  .sfls-real__lead {
    white-space: normal;
  }
  .sfls-display {
    font-size: 13px;
  }
  .sfls-group__tagline {
    font-size: 13px;
  }
}

@media (max-width: 960px) {
  .sfls-hero__grid {
    grid-template-columns: 1fr;
  }
  .sfls-hero__chip {
    left: 14px;
  }
  .sfls-intro__grid,
  .sfls-real__head {
    grid-template-columns: 1fr;
    gap: 26px;
  }
  .sfls-group__head {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .sfls-group__visual img {
    height: clamp(200px, 42vw, 320px);
  }
  .sfls-real__grid,
  .sfls-journey__grid {
    grid-template-columns: 1fr;
  }
  .sfls-intro__mosaic {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .sfls-mosaic__side {
    margin-top: 0;
  }
}
</style>
