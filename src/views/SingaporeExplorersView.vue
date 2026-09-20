<!-- 新加坡未来探索系列 -->
<template>
  <div class="explorers-page">
    <section class="explorers-hero">
      <img
        class="hero-destination"
        :src="heroDestination"
        :alt="isEn ? 'Singapore discovery destination' : '新加坡未来探索目的地'"
      />
      <div class="hero-grid">
        <p class="hero-index">APIMTC / 2025–26</p>
        <p class="hero-meta">
          {{ isEn ? "PRIMARY 4–6 / AGES 9–12" : "小学四至六年级 / 9–12岁" }}
        </p>
        <div class="hero-copy">
          <p class="eyebrow">
            {{
              isEn ? "SINGAPORE FUTURE DISCOVERY SERIES" : "新加坡未来探索系列"
            }}
          </p>
          <h1>
            Singapore<br /><span>Discovery Series</span>
          </h1>
          <p class="hero-sub">
            {{
              isEn
                ? "SIX THEMES · 6 DAYS / 5 NIGHTS OF IMMERSIVE LEARNING"
                : "六大主题 · 6天5夜沉浸式学习之旅"
            }}
          </p>
          <p class="hero-en">
            Explore Singapore · Discover the World · Imagine the Future
          </p>
        </div>
        <div class="hero-stamp" aria-hidden="true">
          06<br /><small>THEMES</small>
        </div>
      </div>
    </section>
    <main>
      <section id="overview" class="overview section-shell">
        <div class="section-label">00 / INTRODUCTION</div>
        <div class="overview-grid">
          <h2>
            {{ isEn ? "More Than a Trip —" : "不只是一次旅行，" }}<br /><em>{{
              isEn
                ? "An Exploration of the Real World"
                : "而是一场走进真实世界的探索"
            }}</em>
          </h2>
          <div class="overview-copy">
            <p>
              {{
                isEn
                  ? "A 6-day, 5-night themed educational experience in Singapore, specially designed for international and overseas primary school students."
                  : "专为国际及海外小学学生设计的 6天5夜新加坡主题教育体验项目。"
              }}
            </p>
            <p>
              {{
                isEn
                  ? "Through Educate · Experience · Explore · Exchange, students learn and discover through real-world experiences in Singapore, exploring science, technology, health, nature, sustainability and the industries of tomorrow."
                  : "通过 Educate · Experience · Explore · Exchange，孩子将在真实的新加坡环境中探索科学、科技、健康、自然、可持续发展与未来产业。"
              }}
            </p>
          </div>
        </div>
        <div class="destination-mosaic">
          <img :src="overviewImage01" /><img :src="overviewImage02" />
        </div>
        <section class="theme-overview" aria-labelledby="theme-overview-title">
          <div class="section-shell">
            <div class="theme-overview-heading">
              <div class="section-label">01 / SIX THEMES</div>
              <h3 id="theme-overview-title">
                {{
                  isEn ? "Six Future Exploration Themes" : "六大未来探索主题"
                }}
              </h3>
              <p>
                {{
                  isEn
                    ? "A complete view of every theme, learning area and discovery focus."
                    : "一览六大主题、学习领域与孩子将探索的内容。"
                }}
              </p>
            </div>
            <div class="theme-table-wrap">
              <table class="theme-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>{{ isEn ? "Theme" : "主题" }}</th>
                    <th>{{ isEn ? "Learning Area" : "学习领域" }}</th>
                    <th>
                      {{
                        isEn
                          ? "What Will Students Explore?"
                          : "孩子将探索什么？"
                      }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in themeOverview"
                    :key="item.no"
                    class="theme-table-row"
                    role="link"
                    tabindex="0"
                    :aria-label="
                      isEn
                        ? `Explore ${item.enTitle}`
                        : `查看${item.zhTitle}主题详情`
                    "
                    @click="scrollToTheme(index)"
                    @keydown.enter.prevent="scrollToTheme(index)"
                    @keydown.space.prevent="scrollToTheme(index)"
                  >
                    <td>
                      <span class="theme-no">{{ item.no }}</span
                      ><component
                        :is="item.icon"
                        class="theme-symbol"
                        aria-hidden="true"
                      />
                    </td>
                    <td>
                      <strong>{{ isEn ? item.enTitle : item.zhTitle }}</strong>
                    </td>
                    <td>
                      <strong>{{
                        isEn ? item.enCategory : item.zhCategory
                      }}</strong>
                    </td>
                    <td>
                      <p>{{ isEn ? item.enExplore : item.zhExplore }}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <div class="overview-ribbon">
          <span
            ><i class="info-icon">06</i
            >{{
              isEn ? "SIX FUTURE EXPLORATION THEMES" : "六大未来探索主题"
            }}</span
          ><span
            ><i class="info-icon">4E</i
            >{{
              isEn
                ? "Every Theme Includes the 4Es Learning Experience"
                : "每个主题都包含 4Es 学习体验"
            }}</span
          ><strong>EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE</strong>
        </div>
        <div class="four-es">
          <div v-for="(item, i) in fourEs" :key="item.en">
            <b
              ><i class="info-icon">0{{ i + 1 }}</i
              >{{ isEn ? item.en : item.zh }}</b
            ><span>{{ isEn ? item.enDesc : item.zhDesc }}</span>
          </div>
        </div>
        <div class="real-singapore">
          <div>
            <div class="section-label">
              REAL SINGAPORE / REAL-WORLD LEARNING
            </div>
            <h3>
              <i class="info-icon">SG</i
              >{{
                isEn
                  ? "Real Singapore · Real-World Learning"
                  : "真实的新加坡 · 真实的学习"
              }}
            </h3>
          </div>
          <div class="real-list">
            <p v-for="item in realLearning" :key="item.en">
              <b>{{ isEn ? item.en : item.zh }}</b
              >{{ isEn ? item.enDesc : item.zhDesc }}
            </p>
          </div>
        </div>
        <div class="overview-close">
          <span
            ><i class="info-icon">06</i
            >{{
              isEn
                ? "Six Themes. One Journey into the Future."
                : "六大主题，一段探索未来的旅程"
            }}</span
          ><b>Learn · Experience · Explore · Exchange</b
          ><small>6 DAYS · 5 NIGHTS | PRIMARY 4–6 | AGES 9–12</small
          ><strong
            >Come to Singapore. Explore the Future.<br />来新加坡，探索未来。</strong
          >
        </div>
      </section>
      <article
        v-for="(theme, index) in themes"
        :id="theme.id"
        :key="theme.id"
        class="theme"
        :class="`theme--${index + 1}`"
      >
        <div class="theme-shell">
          <div class="theme-topline">
            <span>{{ String(index + 1).padStart(2, "0") }} / 06</span
            ><span>{{
              isEn ? "SINGAPORE FUTURE DISCOVERY SERIES" : "新加坡未来探索系列"
            }}</span>
          </div>
          <header class="theme-header">
            <p class="theme-kicker">
              <component
                :is="themeIcons[index]"
                class="theme-icon"
                aria-hidden="true"
              />{{
                isEn
                  ? `PRIMARY SCHOOL #${index + 1}｜${theme.enTitle}`
                  : `小学 #${index + 1}｜${theme.zhTitle}`
              }}
            </p>
            <h2>{{ theme.enTitle }}</h2>
            <p class="theme-category">
              {{ isEn ? theme.enCategory : theme.zhCategory }} ·
              {{ isEn ? "6 Days / 5 Nights" : "6天5夜" }}
            </p>
            <p class="theme-tagline">{{ theme.tagline }}</p>
            <p class="theme-age">
              {{ isEn ? "Primary 4–6 | Ages 9–12" : "小学四至六年级｜9–12岁" }}
            </p>
          </header>
          <div class="theme-visual">
            <img
              :src="themeImages[index]"
              :alt="isEn ? theme.enTitle : theme.zhTitle"
            />
          </div>
          <div class="theme-intro">
            <p class="theme-lead">
              <component
                :is="themeIcons[index]"
                class="theme-icon"
                aria-hidden="true"
              /><strong>{{ isEn ? theme.enLead : theme.zhLead }}</strong>
            </p>
            <p class="theme-intro-copy">
              <span class="theme-intro-prefix">{{ isEn ? "Through" : "通过" }}</span>
              <b>4Es: Educate · Experience · Explore · Exchange</b>
              <span>{{ isEn ? theme.enIntroAfter4Es : theme.zhIntroAfter4Es }}</span>
            </p>
            <p v-if="theme.note">{{ isEn ? theme.note.en : theme.note.zh }}</p>
          </div>
          <section class="theme-block">
            <div class="section-label">04 ES / LEARNING EXPERIENCE</div>
            <h3>
              <i class="info-icon">4E</i
              >{{ isEn ? "4Es Learning Experience" : "4Es 学习体验" }}
            </h3>
            <div class="es-list">
              <p v-for="item in theme.es" :key="item.en">
                <span class="es-heading">
                  <b>{{ item.labelEn }}</b><i aria-hidden="true">|</i
                  ><strong>{{ isEn ? item.actionEn : item.actionZh }}</strong>
                </span>
                <span class="es-detail">{{ isEn ? item.en : item.zh }}</span>
              </p>
            </div>
          </section>
          <section class="theme-block journey">
            <div class="section-label">06 DAYS / 05 NIGHTS</div>
            <h3>
              <i class="info-icon">06</i
              >{{
                isEn ? "6-Day / 5-Night Discovery Journey" : "6天5夜探索之旅"
              }}
            </h3>
            <div class="schedule-list">
              <div class="schedule-heading">
                <span>{{ isEn ? "Day" : "日程" }}</span>
                <span>{{ isEn ? "Exploration Theme" : "探索主题" }}</span>
                <span>{{ isEn ? "Highlights" : "精彩体验" }}</span>
              </div>
              <p v-for="day in theme.schedule" :key="day.day">
                <b>{{ day.day }}</b>
                <span>{{ isEn ? day.enTheme : day.zhTheme }}</span>
                <span>{{ isEn ? day.enHighlights : day.zhHighlights }}</span>
              </p>
            </div>
            <p class="journey-title">
              <component
                :is="themeIcons[index]"
                class="info-icon"
                aria-hidden="true"
              />{{ isEn ? theme.journeyTitle.en : theme.journeyTitle.zh }}
            </p>
            <div class="journey-list">
              <p v-for="(line, li) in theme.journey" :key="line.en">
                <i class="journey-icon">{{ String(li + 1).padStart(2, "0") }}</i
                >{{ isEn ? line.en : line.zh }}
              </p>
            </div>
          </section>
          <footer class="theme-footer">
            <strong>{{ isEn ? theme.close.en : theme.close.zh }}</strong
            ><span>{{ theme.close.enSub }}</span
            ><small>6 DAYS · 5 NIGHTS | PRIMARY 4–6 | AGES 9–12</small>
          </footer>
        </div>
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  FirstAidKit,
  Promotion,
  Sunny,
  Cpu,
  MapLocation,
  MagicStick,
} from "@element-plus/icons-vue";
import { useI18n } from "@/composables/useI18n";
import theme01 from "@/assets/exploreSingapore/探索新加坡-03.png";
import theme02 from "@/assets/exploreSingapore/探索新加坡-04.png";
import theme03 from "@/assets/exploreSingapore/探索新加坡-05.png";
import theme04 from "@/assets/exploreSingapore/探索新加坡-06.png";
import theme05 from "@/assets/exploreSingapore/探索新加坡-07.png";
import theme06 from "@/assets/exploreSingapore/探索新加坡-08.png";
import heroDestination from "@/assets/exploreSingapore/探索新加坡-01.png";
import overviewImage01 from "@/assets/exploreSingapore/探索新加坡-02.png";
import overviewImage02 from "@/assets/exploreSingapore/探索新加坡-03.png";

const themeImages = [theme01, theme02, theme03, theme04, theme05, theme06];
const { lang } = useI18n();
const isEn = computed(() => lang.value === "en");
const scrollToTheme = (index: number) => {
  const theme = themes[index];
  if (!theme) return;

  document.getElementById(theme.id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  window.history.replaceState(null, "", `#${theme.id}`);
};
type Theme = {
  id: string;
  zhTitle: string;
  enTitle: string;
  zhCategory: string;
  enCategory: string;
  tagline: string;
  zhLead: string;
  enLead: string;
  zhIntroAfter4Es: string;
  enIntroAfter4Es: string;
  note?: { zh: string; en: string };
  es: {
    labelEn: string;
    actionZh: string;
    actionEn: string;
    zh: string;
    en: string;
  }[];
  journeyTitle: { zh: string; en: string };
  journey: { zh: string; en: string }[];
  schedule: {
    day: string;
    zhTheme: string;
    enTheme: string;
    zhHighlights: string;
    enHighlights: string;
  }[];
  close: { zh: string; en: string; enSub: string };
};
const themeIcons = [
  FirstAidKit,
  Promotion,
  Sunny,
  Cpu,
  MapLocation,
  MagicStick,
];
const themeOverview = [
  {
    no: "01",
    icon: FirstAidKit,
    zhTitle: "奇妙生命",
    enTitle: "Amazing Life",
    zhCategory: "生命与健康",
    enCategory: "Life & Health",
    zhExplore: "探索人体、生命科学与健康生活，发现身体如何运作。",
    enExplore:
      "Explore the human body, life sciences and healthy living, and discover how our bodies work.",
  },
  {
    no: "02",
    icon: Promotion,
    zhTitle: "小小太空探索家",
    enTitle: "Young Space Explorers",
    zhCategory: "太空与航空",
    enCategory: "Space & Aviation",
    zhExplore: "从飞机飞行到太空探索，挑战未来的月球／火星任务。",
    enExplore:
      "From the science of flight to space exploration, take on future Moon and Mars mission challenges.",
  },
  {
    no: "03",
    icon: Sunny,
    zhTitle: "绿色新加坡",
    enTitle: "Green Singapore",
    zhCategory: "可持续发展",
    enCategory: "Sustainability",
    zhExplore: "探索水、能源、自然与城市规划，设计未来绿色城市。",
    enExplore:
      "Explore water, energy, nature and urban planning, and design the green cities of the future.",
  },
  {
    no: "04",
    icon: Cpu,
    zhTitle: "未来新加坡",
    enTitle: "Future Singapore",
    zhCategory: "新兴产业",
    enCategory: "Emerging Industries",
    zhExplore: "探索机器人、3D打印、智能制造、电动车与未来产业。",
    enExplore:
      "Discover robotics, 3D printing, smart manufacturing, electric vehicles and the industries of tomorrow.",
  },
  {
    no: "05",
    icon: MapLocation,
    zhTitle: "神奇的地球",
    enTitle: "Amazing Planet Earth",
    zhCategory: "地球科学与自然世界",
    enCategory: "Earth Science & the Natural World",
    zhExplore: "探索地球、野生动物、海洋与湿地，发现自然世界的联系。",
    enExplore:
      "Explore the Earth, wildlife, oceans and wetlands, and discover the connections within our natural world.",
  },
  {
    no: "06",
    icon: MagicStick,
    zhTitle: "AI小小创新家",
    enTitle: "AI for Young Innovators",
    zhCategory: "AI与新兴科技",
    enCategory: "AI & Emerging Technology",
    zhExplore: "探索AI、机器人、3D打印与生成式AI，把创意变成作品。",
    enExplore:
      "Explore AI, robotics, 3D printing and Generative AI, and turn creative ideas into real-world creations.",
  },
];
const fourEs = [
  {
    zh: "学习",
    en: "LEARN",
    zhDesc: "科学 · STEM · 未来知识",
    enDesc: "Science · STEM · Future Knowledge",
  },
  {
    zh: "实践",
    en: "EXPERIENCE",
    zhDesc: "实验 · 制作 · 挑战 · 创作",
    enDesc: "Experiments · Making · Challenges · Creativity",
  },
  {
    zh: "探索",
    en: "EXPLORE",
    zhDesc: "城市 · 自然 · 产业 · 社区",
    enDesc: "City · Nature · Industries · Communities",
  },
  {
    zh: "交流",
    en: "EXCHANGE",
    zhDesc: "新加坡学生 · 当地社区 · 跨文化体验",
    enDesc:
      "Singapore Students · Local Communities · Cross-Cultural Experiences",
  },
];
const realLearning = [
  {
    zh: "学校交流",
    en: "School Exchange",
    zhDesc: "与新加坡小学生学习、互动与分享",
    enDesc:
      "Learn, interact and share experiences with Singapore primary school students.",
  },
  {
    zh: "城市探索",
    en: "City Exploration",
    zhDesc: "牛车水 · 鱼尾狮公园 · 滨海湾花园",
    enDesc: "Chinatown · Merlion Park · Gardens by the Bay",
  },
  {
    zh: "社区体验",
    en: "Community Experiences",
    zhDesc: "HDB · 市场 · 熟食中心 · 公共交通 · 社区设施",
    enDesc:
      "HDB · Markets · Hawker Centres · Public Transport · Community Facilities",
  },
  {
    zh: "主题场馆",
    en: "Themed Learning Venues",
    zhDesc: "科学 · 科技 · 自然 · 文化 · 产业",
    enDesc: "Science · Technology · Nature · Culture · Industry",
  },
  {
    zh: "团队挑战",
    en: "Team Challenges",
    zhDesc: "寻宝 · STEM挑战 · 创意任务 · Show & Tell",
    enDesc: "Treasure Hunts · STEM Challenges · Creative Tasks · Show & Tell",
  },
  {
    zh: "欢乐体验",
    en: "Fun Experiences",
    zhDesc: "新加坡环球影城",
    enDesc: "Universal Studios Singapore",
  },
];
const esActions = {
  EDUCATE: { zh: "启发学习", en: "Inspire Learning" },
  EXPERIENCE: { zh: "真实体验", en: "Real-World Experience" },
  EXPLORE: { zh: "主动探索", en: "Active Discovery" },
  EXCHANGE: { zh: "国际交流", en: "International Exchange" },
} as const;
const baseEs = (rows: [string, string, string, string][]) =>
  rows.map(([, labelEn, zh, en]) => {
    const action = esActions[labelEn as keyof typeof esActions];
    return {
      labelEn,
      actionZh: action.zh,
      actionEn: action.en,
      zh: zh.replace(action.zh, ""),
      en: en.replace(`${action.en}s`, "").replace(action.en, ""),
    };
  });
const splitSchedule = (entry: string) => {
  const [theme, ...highlights] = entry.split(" · ");
  return { theme, highlights: highlights.join(" · ") };
};
const schedules = (rows: [string, string, string][]) =>
  rows.map(([day, zh, en]) => {
    const zhSchedule = splitSchedule(zh);
    const enSchedule = splitSchedule(en);

    return {
      day,
      zhTheme: zhSchedule.theme,
      enTheme: enSchedule.theme,
      zhHighlights: zhSchedule.highlights,
      enHighlights: enSchedule.highlights,
    };
  });
const themes: Theme[] = [
  {
    id: "amazing-life",
    zhTitle: "奇妙生命",
    enTitle: "AMAZING LIFE",
    zhCategory: "生命与健康",
    enCategory: "Life & Health",
    tagline: "Explore Life · Discover Health · Experience Singapore",
    zhLead: "探索生命 · 发现健康 · 认识真实的新加坡",
    enLead: "Explore Life · Discover Health · Experience the Real Singapore",
    zhIntroAfter4Es: "，孩子将在科学、健康、教育、社区与文化的真实场景中学习与探索。",
    enIntroAfter4Es:
      ", students will learn and explore through real-world experiences across science, health, education, community and culture.",
    es: baseEs([
      [
        "学习",
        "EDUCATE",
        "启发学习生命科学 · 健康 · 新加坡生活",
        "Inspire LearningLife Sciences · Health · Singapore Life",
      ],
      [
        "实践",
        "EXPERIENCE",
        "真实体验科学实验 · 校园 · 企业 · 社区",
        "Real-World ExperienceScience Experiments · School Life · Industry · Community",
      ],
      [
        "探索",
        "EXPLORE",
        "主动探索科学挑战 · 城市探索 · 社区寻宝",
        "Active DiscoveryScience Challenges · City Exploration · Community Treasure Hunt",
      ],
      [
        "交流",
        "EXCHANGE",
        "国际交流新加坡学生 · 当地社区 · 团队合作",
        "International ExchangeSingapore Students · Local Communities · Teamwork",
      ],
    ]),
    journeyTitle: {
      zh: "五大真实学习场景",
      en: "Five Real-World Learning Environments",
    },
    journey: [
      {
        zh: "科学　生命科学 · 动手实验",
        en: "SCIENCE Life Sciences · Hands-On Experiments",
      },
      {
        zh: "健康　营养 · 运动 · 身心健康",
        en: "HEALTH Nutrition · Physical Activity · Physical & Mental Well-Being",
      },
      {
        zh: "教育　新加坡小学 · 同龄人交流",
        en: "EDUCATION Singapore Primary Schools · Peer Interaction",
      },
      {
        zh: "社区　住房 · 食物 · 交通 · 医疗 · 日常生活",
        en: "COMMUNITY Housing · Food · Transport · Healthcare · Everyday Life",
      },
      {
        zh: "文化　城市探索 · 跨文化交流 · 团队合作",
        en: "CULTURE City Exploration · Cross-Cultural Exchange · Teamwork",
      },
    ],
    schedule: schedules([
      [
        "DAY 1",
        "认识新加坡 · 牛车水 · 鱼尾狮公园 · 滨海湾花园",
        "Discover Singapore · Chinatown · Merlion Park · Gardens by the Bay",
      ],
      [
        "DAY 2",
        "探索人体奥秘 · 科学馆 · 生命科学实验 · 科学挑战",
        "Explore the Human Body · Science Centre · Life Sciences Experiments · Science Challenge",
      ],
      [
        "DAY 3",
        "科学与健康生活 · 生命科学工作坊 · 健康生活体验 · 健康挑战",
        "Science & Healthy Living · Life Sciences Workshop · Healthy Living Experience · Healthy Living Challenge",
      ],
      [
        "DAY 4",
        "与新加坡学生交流 · 小学校园交流 · 学生互动 · 企业/科学体验",
        "Exchange with Singapore Students · Primary School Exchange · Student Interaction · Industry / Science Experience",
      ],
      [
        "DAY 5",
        "走进新加坡社区 · HDB · 当地学生互动 · 社区寻宝 · Show & Tell",
        "Discover Singapore's Communities · HDB · Local Student Interaction · Community Treasure Hunt · Show & Tell",
      ],
      [
        "DAY 6",
        "欢乐探索 · 新加坡环球影城 · 团队活动 · 告别新加坡",
        "Fun & Discovery · Universal Studios Singapore · Team Activities · Singapore Farewell",
      ],
    ]),
    close: {
      zh: "不只是旅行，而是一场真实世界的学习之旅",
      en: "More Than a Trip — A Real-World Learning Journey",
      enSub: "Learn · Explore · Connect · Grow",
    },
  },
  {
    id: "young-space",
    zhTitle: "小小太空探索家",
    enTitle: "YOUNG SPACE EXPLORERS",
    zhCategory: "太空与航空",
    enCategory: "Space & Aviation",
    tagline: "Explore Flight · Discover Space · Imagine the Future",
    zhLead: "从飞机起飞，到探索太空",
    enLead: "From Taking Flight to Exploring Space",
    zhIntroAfter4Es: "，孩子将探索飞行原理、航空科技、太空科学，并亲手完成未来太空任务挑战。",
    enIntroAfter4Es:
      ", students will discover the principles of flight, aviation technology and space science, while taking on hands-on challenges inspired by future space missions.",
    es: baseEs([
      [
        "学习",
        "EDUCATE",
        "启发学习飞行原理 · 太空科学 · 航空科技",
        "Inspire LearningPrinciples of Flight · Space Science · Aviation Technology",
      ],
      [
        "实践",
        "EXPERIENCE",
        "真实体验STEM实践 · 航空探索 · 科学馆 · 机场",
        "Real-World ExperienceHands-On STEM · Aviation Exploration · Science Centre · Airport",
      ],
      [
        "探索",
        "EXPLORE",
        "主动探索飞机设计 · 太空挑战 · 月球/火星任务",
        "Active DiscoveryAircraft Design · Space Challenges · Moon / Mars Missions",
      ],
      [
        "交流",
        "EXCHANGE",
        "国际交流新加坡学生 · 当地社区 · 团队合作",
        "International ExchangeSingapore Students · Local Communities · Teamwork",
      ],
    ]),
    journeyTitle: {
      zh: "从飞行科学到未来太空任务",
      en: "From the Science of Flight to Future Space Missions",
    },
    journey: [
      {
        zh: "Flight　升力 · 推力 · 阻力 · 重力",
        en: "FLIGHT Lift · Thrust · Drag · Gravity",
      },
      {
        zh: "Space　太阳系 · 行星 · 月球 · 太空探索",
        en: "SPACE Solar System · Planets · Moon · Space Exploration",
      },
      {
        zh: "STEM　设计 · 建造 · 实验 · 解决问题",
        en: "STEM Design · Build · Experiment · Problem-Solving",
      },
      {
        zh: "Technology　航空 · 卫星 · 太空科技",
        en: "TECHNOLOGY Aviation · Satellites · Space Technology",
      },
      {
        zh: "Exchange　新加坡学生 · 跨文化交流 · 团队合作",
        en: "EXCHANGE Singapore Students · Cross-Cultural Exchange · Teamwork",
      },
    ],
    schedule: [],
    close: {
      zh: "不只是仰望星空，而是亲手探索未来",
      en: "Don't Just Look Up at the Stars — Explore the Future with Your Own Hands",
      enSub: "Learn · Build · Explore · Imagine",
    },
  },
  {
    id: "green-singapore",
    zhTitle: "绿色新加坡",
    enTitle: "GREEN SINGAPORE",
    zhCategory: "可持续发展",
    enCategory: "Sustainability",
    tagline: "Discover Sustainability · Build a Greener Future",
    zhLead: "一座城市，如何变得更绿色、更宜居？",
    enLead: "How can a city become greener and more liveable?",
    zhIntroAfter4Es:
      "，孩子将探索新加坡如何利用科学、科技、自然与城市规划，建设一个更绿色、更可持续的未来。",
    enIntroAfter4Es:
      ", students will discover how Singapore harnesses science, technology, nature and urban planning to build a greener and more sustainable future.",
    es: baseEs([
      [
        "学习",
        "EDUCATE",
        "启发学习可持续发展 · 环境 · 城市规划",
        "Inspire LearningSustainability · Environment · Urban Planning",
      ],
      [
        "实践",
        "EXPERIENCE",
        "真实体验STEM实践 · 绿色城市 · 湿地生态",
        "Real-World ExperiencesHands-on STEM · Green Cities · Wetland Ecosystems",
      ],
      [
        "探索",
        "EXPLORE",
        "主动探索水资源 · 能源 · 生物多样性 · 循环经济",
        "Active DiscoveryWater Resources · Energy · Biodiversity · Circular Economy",
      ],
      [
        "交流",
        "EXCHANGE",
        "国际交流新加坡学生 · 社区探索 · 团队合作",
        "International ExchangeSingapore Students · Community Exploration · Teamwork",
      ],
    ]),
    journeyTitle: {
      zh: "探索绿色未来的五大主题",
      en: "Five Key Themes for Exploring a Greener Future",
    },
    journey: [
      {
        zh: "水资源　珍惜水资源 · 水循环 · 气候韧性",
        en: "Water Resources Water Conservation · Water Cycle · Climate Resilience",
      },
      {
        zh: "能源　可再生能源 · 节能科技",
        en: "Energy Renewable Energy · Energy-Saving Technologies",
      },
      {
        zh: "循环经济　减少浪费 · 回收 · 可持续生活",
        en: "Circular Economy Waste Reduction · Recycling · Sustainable Living",
      },
      {
        zh: "自然生态　生物多样性 · 湿地 · 自然保护",
        en: "Nature & Ecosystems Biodiversity · Wetlands · Nature Conservation",
      },
      {
        zh: "绿色城市　建筑 · 交通 · 社区 · 城市规划",
        en: "Green Cities Buildings · Transport · Communities · Urban Planning",
      },
    ],
    schedule: [],
    close: {
      zh: "从发现问题，到设计未来",
      en: "From Discovering Problems to Designing the Future",
      enSub: "Explore · Think · Design · Build",
    },
  },
  {
    id: "future-singapore",
    zhTitle: "未来新加坡",
    enTitle: "FUTURE SINGAPORE",
    zhCategory: "新兴产业",
    enCategory: "Emerging Industries",
    tagline: "Discover Tomorrow · Create the Future",
    zhLead: "科技，将如何改变未来的新加坡？",
    enLead: "How will technology transform the Singapore of tomorrow?",
    zhIntroAfter4Es:
      "，孩子将探索机器人、AI与自动化、3D打印、电动车、智能制造及食品科技，发现科技如何从创意变成真实应用。",
    enIntroAfter4Es:
      ", students will explore robotics, AI and automation, 3D printing, electric vehicles, smart manufacturing and food technology, discovering how technology turns ideas into real-world applications.",
    es: baseEs([
      [
        "学习",
        "EDUCATE",
        "启发学习机器人 · 工程 · 智能制造 · 新兴产业",
        "Inspire LearningRobotics · Engineering · Smart Manufacturing · Emerging Industries",
      ],
      [
        "实践",
        "EXPERIENCE",
        "真实体验STEM实践 · 3D打印 · 企业参访 · 科技探索",
        "Real-World ExperiencesHands-on STEM · 3D Printing · Industry Visits · Technology Exploration",
      ],
      [
        "探索",
        "EXPLORE",
        "主动探索设计 · 编程 · 制造 · 自动化 · 未来交通",
        "Active DiscoveryDesign · Coding · Manufacturing · Automation · Future Mobility",
      ],
      [
        "交流",
        "EXCHANGE",
        "国际交流新加坡学生 · 社区探索 · 团队合作",
        "International ExchangeSingapore Students · Community Exploration · Teamwork",
      ],
    ]),
    journeyTitle: {
      zh: "探索未来产业",
      en: "Explore the Industries of the Future",
    },
    journey: [
      {
        zh: "Robotics　机器人 · 编程 · 自动化",
        en: "Robotics Robotics · Coding · Automation",
      },
      {
        zh: "Digital Making　3D打印 · 数码设计 · 快速原型",
        en: "Digital Making 3D Printing · Digital Design · Rapid Prototyping",
      },
      {
        zh: "Smart Mobility　电动车 · 智能交通",
        en: "Smart Mobility Electric Vehicles · Smart Transportation",
      },
      {
        zh: "Smart Manufacturing　智能工厂 · 先进制造",
        en: "Smart Manufacturing Smart Factories · Advanced Manufacturing",
      },
      {
        zh: "Food Technology　食品科技 · 自动化生产",
        en: "Food Technology Food Technology · Automated Production",
      },
    ],
    schedule: [],
    close: {
      zh: "从“想法”到“现实”",
      en: "From “Idea” to Reality",
      enSub: "Imagine · Build · Test · Innovate",
    },
  },
  {
    id: "amazing-earth",
    zhTitle: "神奇的地球",
    enTitle: "AMAZING PLANET EARTH",
    zhCategory: "地球科学与自然世界",
    enCategory: "Earth Science & the Natural World",
    tagline: "Discover Earth · Explore Life · Protect Our Planet",
    zhLead: "我们的地球是如何运作的？",
    enLead: "How does our planet work?",
    zhIntroAfter4Es:
      "，孩子将从地球科学到野生动物、从海洋到湿地，亲身探索地球、生命与自然世界的奇妙联系。",
    enIntroAfter4Es:
      ", students will discover firsthand the fascinating connections between Earth, life and the natural world, from Earth science and wildlife to oceans and wetlands.",
    es: baseEs([
      [
        "学习",
        "EDUCATE",
        "启发学习地球科学 · 自然历史 · 生态系统",
        "Inspire LearningEarth Science · Natural History · Ecosystems",
      ],
      [
        "实践",
        "EXPERIENCE",
        "真实体验博物馆 · 野生动物 · 海洋 · 户外考察",
        "Real-World ExperiencesMuseums · Wildlife · Oceans · Outdoor Field Exploration",
      ],
      [
        "探索",
        "EXPLORE",
        "主动探索观察 · 记录 · 分析 · 发现",
        "Active DiscoveryObserve · Record · Analyse · Discover",
      ],
      [
        "交流",
        "EXCHANGE",
        "国际交流新加坡学生 · 自然探索 · 社区互动",
        "International ExchangeSingapore Students · Nature Exploration · Community Interaction",
      ],
    ]),
    journeyTitle: {
      zh: "一路探索地球的奇妙联系",
      en: "Discover the Amazing Connections Across Our Planet",
    },
    journey: [
      {
        zh: "Earth　地球科学 · 自然历史",
        en: "Earth Earth Science · Natural History",
      },
      {
        zh: "Life　生物多样性 · 动物适应",
        en: "Life Biodiversity · Animal Adaptations",
      },
      {
        zh: "Habitats　森林 · 湿地 · 栖息地",
        en: "Habitats Forests · Wetlands · Habitats",
      },
      {
        zh: "Ocean　海洋生态 · 海洋保育",
        en: "Ocean Marine Ecosystems · Ocean Conservation",
      },
      {
        zh: "Science　观察 · 探究 · 发现",
        en: "Science Observation · Inquiry · Discovery",
      },
      {
        zh: "People　城市 · 社区 · 人与自然",
        en: "People Cities · Communities · People & Nature",
      },
    ],
    schedule: [],
    close: {
      zh: "从发现自然，到学会守护地球",
      en: "From Discovering Nature to Learning to Protect Our Planet",
      enSub: "Observe · Discover · Understand · Protect",
    },
  },
  {
    id: "ai-innovators",
    zhTitle: "AI小小创新家",
    enTitle: "AI FOR YOUNG INNOVATORS",
    zhCategory: "人工智能 · 机器人 · 3D打印 · 新兴科技",
    enCategory:
      "Artificial Intelligence · Robotics · 3D Printing · Emerging Technology",
    tagline: "Explore AI · Create with Technology · Innovate for Tomorrow",
    zhLead: "AI，不只是未来科技，更是创造未来的工具",
    enLead:
      "AI Is More Than Future Technology — It’s a Tool for Creating the Future",
    zhIntroAfter4Es:
      "，孩子将探索人工智能、机器人、3D打印与智能科技，并亲手把创意变成作品。",
    enIntroAfter4Es:
      ", students discover Artificial Intelligence, robotics, 3D printing and smart technologies, while turning their ideas into real creations through hands-on experiences.",
    note: {
      zh: "无需编程或AI经验 · 无需自带电脑",
      en: "No prior coding or AI experience required · No personal laptops required",
    },
    es: baseEs([
      [
        "学习",
        "EDUCATE",
        "启发学习AI · 机器人 · 数字制造 · 新兴科技",
        "Inspire & LearnAI · Robotics · Digital Fabrication · Emerging Technology",
      ],
      [
        "实践",
        "EXPERIENCE",
        "真实体验3D打印 · 科学馆 · 智能工厂 · AI实践",
        "Experience Technology in the Real World3D Printing · Science Centre · Smart Factory · Hands-On AI",
      ],
      [
        "探索",
        "EXPLORE",
        "主动探索感知 · 数据 · 自动化 · AI创作",
        "Discover Through ExplorationSensing · Data · Automation · AI Creativity",
      ],
      [
        "交流",
        "EXCHANGE",
        "国际交流新加坡学生 · 社区探索 · 团队创新",
        "Connect & CollaborateSingapore Students · Community Exploration · Team Innovation",
      ],
    ]),
    journeyTitle: {
      zh: "探索未来科技",
      en: "Explore the Technologies of Tomorrow",
    },
    journey: [
      {
        zh: "AI & Robotics　人工智能 · 机器人 · 自动化",
        en: "AI & Robotics Artificial Intelligence · Robotics · Automation",
      },
      {
        zh: "Digital Making　3D打印 · 数字设计 · 创客科技",
        en: "Digital Making 3D Printing · Digital Design · Maker Technology",
      },
      {
        zh: "Generative AI　创意 · 故事 · 图像 · 构思",
        en: "Generative AI Creativity · Storytelling · Image Creation · Ideation",
      },
      {
        zh: "Smart Technology　智能制造 · 智慧农业 · 未来出行",
        en: "Smart Technology Smart Manufacturing · Smart Farming · Future Mobility",
      },
      {
        zh: "Responsible AI　AI伦理 · 事实核查 · 数据与数字安全",
        en: "Responsible AI AI Ethics · Fact-Checking · Data & Digital Safety",
      },
    ],
    schedule: [],
    close: {
      zh: "从动手制作，到创造未来",
      en: "From Making with Our Hands to Creating the Future",
      enSub: "Make · Explore · Create · Innovate",
    },
  },
];
const scheduleRows: [string, string, string][][] = [
  [
    [
      "DAY 1",
      "认识新加坡 · 牛车水 · 鱼尾狮公园 · 滨海湾花园",
      "Discover Singapore · Chinatown · Merlion Park · Gardens by the Bay",
    ],
    [
      "DAY 2",
      "探索人体奥秘 · 科学馆 · 生命科学实验 · 科学挑战",
      "Explore the Human Body · Science Centre · Life Sciences Experiments · Science Challenge",
    ],
    [
      "DAY 3",
      "科学与健康生活 · 生命科学工作坊 · 健康生活体验 · 健康挑战",
      "Science & Healthy Living · Life Sciences Workshop · Healthy Living Experience · Healthy Living Challenge",
    ],
    [
      "DAY 4",
      "与新加坡学生交流 · 小学校园交流 · 学生互动 · 企业/科学体验",
      "Exchange with Singapore Students · Primary School Exchange · Student Interaction · Industry / Science Experience",
    ],
    [
      "DAY 5",
      "走进新加坡社区 · HDB · 当地学生互动 · 社区寻宝 · Show & Tell",
      "Discover Singapore's Communities · HDB · Local Student Interaction · Community Treasure Hunt · Show & Tell",
    ],
    [
      "DAY 6",
      "欢乐探索 · 新加坡环球影城 · 团队活动 · 告别新加坡",
      "Fun & Discovery · Universal Studios Singapore · Team Activities · Singapore Farewell",
    ],
  ],
  [
    [
      "DAY 1",
      "认识新加坡 · 牛车水 · 鱼尾狮公园 · 滨海湾花园",
      "Discover Singapore · Chinatown · Merlion Park · Gardens by the Bay",
    ],
    [
      "DAY 2",
      "动手造飞机 · 探索太空 · 航空STEM · 飞行器设计 · 科学馆 · 太空探索",
      "Build & Fly · Explore Space · Aviation STEM · Aircraft Design · Science Centre · Space Exploration",
    ],
    [
      "DAY 3",
      "体验航空 · 航空学习之旅 · 樟宜机场 · 航空科技",
      "Experience Aviation · Aviation Learning Journey · Changi Airport · Aviation Technology",
    ],
    [
      "DAY 4",
      "学习 · 创造 · 挑战 · 新加坡小学交流 · 太空任务工作坊 · 月球/火星任务",
      "Learn · Create · Challenge · Singapore Primary School Exchange · Space Mission Workshop · Moon / Mars Mission",
    ],
    [
      "DAY 5",
      "探索 · 欢乐时光 · 新加坡环球影城 · 团队互动 · 欢乐体验",
      "Explore · Have Fun · Universal Studios Singapore · Team Interaction · Fun & Adventure",
    ],
    [
      "DAY 6",
      "探索真实社区 · HDB · 本地学生互动 · 社区寻宝 · Show & Tell",
      "Experience Real Singapore Life · HDB · Local Student Interaction · Community Treasure Hunt · Show & Tell",
    ],
  ],
  [
    [
      "DAY 1",
      "认识绿色城市 · 牛车水 · 鱼尾狮公园 · URA City Gallery",
      "Discover a Green City · Chinatown · Merlion Park · URA Singapore City Gallery",
    ],
    [
      "DAY 2",
      "绿色创新 · 可持续发展STEM · 滨海湾花园 · 生态与科技",
      "Green Innovation · Sustainability STEM · Gardens by the Bay · Ecology & Technology",
    ],
    [
      "DAY 3",
      "水资源 · 湿地生态 · Sustainable Singapore Gallery · 水资源探索 · 双溪布洛湿地",
      "Water Resources · Wetland Ecology · Sustainable Singapore Gallery · Water Exploration · Sungei Buloh Wetland Reserve",
    ],
    [
      "DAY 4",
      "学习 · 创造绿色未来 · 新加坡小学交流 · 绿色城市设计挑战",
      "Learn · Create a Green Future · Singapore Primary School Exchange · Green City Design Challenge",
    ],
    [
      "DAY 5",
      "探索 · 欢乐时光 · 新加坡环球影城 · 团队互动 · 欢乐体验",
      "Explore · Have Fun · Universal Studios Singapore · Team Interaction · Fun Experiences",
    ],
    [
      "DAY 6",
      "发现可持续社区 · HDB · 本地学生互动 · 绿色社区寻宝 · Show & Tell",
      "Discover Sustainable Communities · HDB · Interaction with Local Students · Green Neighbourhood Treasure Hunt · Show & Tell",
    ],
  ],
  [
    [
      "DAY 1",
      "认识未来城市 · 牛车水 · 鱼尾狮公园 · 滨海湾花园",
      "Discover the City of Tomorrow · Chinatown · Merlion Park · Gardens by the Bay",
    ],
    [
      "DAY 2",
      "探索机器人与科技 · LEGO机器人STEM · 编程 · 科学馆",
      "Explore Robotics & Technology · LEGO Robotics STEM · Coding · Science Centre Singapore",
    ],
    [
      "DAY 3",
      "创客 · 制造 · 智能交通 · 3D打印 · 数码制造 · 智能制造 · 电动车",
      "Makers · Manufacturing · Smart Mobility · 3D Printing · Digital Fabrication · Smart Manufacturing · Electric Vehicles",
    ],
    [
      "DAY 4",
      "学习 · 连接 · 发现 · 新加坡小学交流 · 食品科技 · 自动化",
      "Learn · Connect · Discover · Singapore Primary School Exchange · Food Technology · Automation",
    ],
    [
      "DAY 5",
      "探索 · 欢乐时光 · 新加坡环球影城 · 团队互动 · 欢乐体验",
      "Explore · Have Fun · Universal Studios Singapore · Team Interaction · Fun Experiences",
    ],
    [
      "DAY 6",
      "未来社区 · HDB · 本地学生互动 · Future Community寻宝 · Show & Tell",
      "Future Communities · HDB · Interaction with Local Students · Future Community Treasure Hunt · Show & Tell",
    ],
  ],
  [
    [
      "DAY 1",
      "认识新加坡 · 牛车水 · 鱼尾狮公园 · 滨海湾花园",
      "Discover Singapore · Chinatown · Merlion Park · Gardens by the Bay",
    ],
    [
      "DAY 2",
      "地球 · 自然历史 · 李光前自然历史博物馆 · 生物多样性 · 科学馆",
      "Earth · Natural History · Lee Kong Chian Natural History Museum · Biodiversity · Science Centre Singapore",
    ],
    [
      "DAY 3",
      "野生动物 · 海洋 · 万态野生动物世界 · 动物保育 · 新加坡海洋馆",
      "Wildlife · Oceans · Mandai Wildlife Reserve · Wildlife Conservation · Singapore Oceanarium",
    ],
    [
      "DAY 4",
      "湿地 · 自然探索 · 新加坡小学交流 · 双溪布洛湿地 · 生态观察",
      "Wetlands · Nature Exploration · Singapore Primary School Exchange · Sungei Buloh Wetland Reserve · Ecological Observation",
    ],
    [
      "DAY 5",
      "探索 · 欢乐时光 · 新加坡环球影城 · 团队互动 · 欢乐体验",
      "Explore · Have Fun · Universal Studios Singapore · Team Interaction · Fun Experiences",
    ],
    [
      "DAY 6",
      "地球 · 人类 · 社区 · HDB · 本地学生互动 · 社区探索 · Show & Tell",
      "Earth · People · Communities · HDB · Interaction with Local Students · Community Exploration · Show & Tell",
    ],
  ],
  [
    [
      "DAY 1",
      "探索新加坡 · 牛车水 · 鱼尾狮公园 · 滨海湾花园",
      "Explore Singapore · Chinatown · Merlion Park · Gardens by the Bay",
    ],
    [
      "DAY 2",
      "动手制作 · 创造 · 3D打印 · 数字制造 · 科学馆 · 机器人",
      "Make & Create · 3D Printing · Digital Fabrication · Science Centre · Robotics",
    ],
    [
      "DAY 3",
      "AI走进现实世界 · AI探索 · 智能工厂 · 机器人 · 智慧农业",
      "AI in the Real World · AI Discovery · Smart Factory · Robotics · Smart Farming",
    ],
    [
      "DAY 4",
      "AI小小创新家 · 新加坡小学交流 · Generative AI创作 · 创新挑战",
      "Young AI Innovators · Singapore Primary School Exchange · Generative AI Creativity · Innovation Challenge",
    ],
    [
      "DAY 5",
      "探索 · 欢乐时光 · 新加坡环球影城 · 团队互动 · 欢乐体验",
      "Explore & Have Fun · Universal Studios Singapore · Team Activities · Fun Experiences",
    ],
    [
      "DAY 6",
      "探索智慧社区 · HDB · 本地学生互动 · 智慧社区寻宝 · Show & Tell",
      "Discover Smart Communities · HDB · Local Student Interaction · Smart Community Treasure Hunt · Show & Tell",
    ],
  ],
];
themes.forEach((theme, index) => {
  theme.schedule = schedules(scheduleRows[index]);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap");
.explorers-page {
  --black: #111113;
  --paper: #f7f7f5;
  --line: #d8d8d3;
  --muted: #666661;
  background: var(--paper);
  color: var(--black);
  font-family: "DM Sans", Arial, sans-serif;
}
.explorers-hero {
  background: var(--black);
  color: #f7f7f5;
  min-height: 680px;
  padding: 124px 6vw 70px;
}
.hero-grid {
  max-width: 1320px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  min-height: 480px;
  border-top: 1px solid #454549;
  padding-top: 18px;
  position: relative;
}
.hero-index,
.hero-meta,
.eyebrow,
.section-label,
.theme-topline,
.hero-en,
.theme-age,
.theme-category,
.theme-footer small,
.explorers-index {
  font-family: "Space Mono", monospace;
  letter-spacing: 0.06em;
}
.hero-meta {
  justify-self: end;
}
.hero-index,
.hero-meta {
  font-size: 18px;
}
.hero-copy {
  align-self: end;
}
.eyebrow {
  color: #d6ff45;
  font-size: 13px;
  margin-bottom: 30px;
}
.hero-copy h1 {
  font-family: "Space Mono", monospace;
  font-size: clamp(42px, 6.5vw, 96px);
  line-height: 0.87;
  letter-spacing: -0.07em;
  margin: 0 0 30px;
}
.hero-copy h1 span {
  color: #d6ff45;
}
.hero-sub {
  font-size: 20px;
  margin: 0 0 8px;
}
.hero-en {
  color: #aaa;
  font-size: 13px;
}
.hero-stamp {
  position: absolute;
  right: 0;
  bottom: 0;
  border: 1px solid #666;
  padding: 18px 22px;
  text-align: center;
  font: 700 38px "Space Mono";
}
.hero-stamp small {
  font-size: 10px;
  color: #aaa;
}
.explorers-index {
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  gap: 25px;
  overflow: auto;
  white-space: nowrap;
  background: #fff;
  border-bottom: 1px solid var(--line);
  padding: 18px 6vw;
  font-size: 11px;
}
.explorers-index a:hover {
  color: #739000;
}
.section-shell,
.theme-shell {
  max-width: 1180px;
  margin: auto;
  padding: 100px 6vw;
}
.section-label {
  font-size: 11px;
  color: var(--muted);
  margin-bottom: 28px;
}
.overview {
  padding-bottom: 70px;
}
.overview-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 9vw;
}
.overview h2 {
  font:
    400 clamp(32px, 5vw, 68px)/1.05 "Space Mono",
    monospace;
  letter-spacing: -0.06em;
  margin: 0;
}
.overview h2 em {
  font-style: normal;
  color: #697700;
}
.overview-copy {
  font-size: 18px;
  line-height: 1.8;
  max-width: 460px;
}
.overview-ribbon {
  border-top: 1px solid var(--black);
  border-bottom: 1px solid var(--black);
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
  margin: 85px 0 0;
  flex-wrap: wrap;
}
.overview-ribbon strong {
  margin-left: auto;
  font: 12px "Space Mono";
}
.four-es {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid var(--line);
}
.four-es div {
  padding: 28px 15px 35px 0;
  border-right: 1px solid var(--line);
}
.four-es div + div {
  padding-left: 20px;
}
.four-es div:last-child {
  border: 0;
}
.four-es b,
.four-es span {
  display: block;
}
.four-es b {
  font-size: 18px;
  margin-bottom: 12px;
}
.four-es span {
  color: var(--muted);
  line-height: 1.5;
}
.real-singapore {
  padding: 90px 0 30px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 6vw;
}
.real-singapore h3 {
  font: 400 30px "Space Mono";
  margin: 0;
}
.real-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 30px;
}
.real-list p {
  margin: 0;
  border-top: 1px solid var(--line);
  padding-top: 12px;
  line-height: 1.5;
}
.real-list b {
  display: block;
  font-family: "Space Mono";
  font-size: 13px;
  margin-bottom: 6px;
}
.overview-close {
  text-align: center;
  border-top: 1px solid var(--black);
  padding: 55px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
}
.overview-close span {
  font-size: 22px;
}
.overview-close b {
  font: 16px "Space Mono";
}
.overview-close small {
  font: 11px "Space Mono";
  color: var(--muted);
}
.overview-close strong {
  font: 700 24px "Space Mono";
}
.theme {
  scroll-margin-top: 24px;
  border-top: 1px solid #fff;
  background: #151518;
  color: #f7f7f5;
}
.theme--2 {
  background: #202331;
}
.theme--3 {
  background: #17352d;
}
.theme--4 {
  background: #2c273b;
}
.theme--5 {
  background: #253735;
}
.theme--6 {
  background: #1b2e48;
}
.theme-shell {
  padding-top: 70px;
  padding-bottom: 80px;
}
.theme-topline {
  display: flex;
  justify-content: space-between;
  color: #aaa;
  font-size: 11px;
  border-bottom: 1px solid #ffffff33;
  padding-bottom: 18px;
}
.theme-header {
  padding: 75px 0 55px;
  max-width: 900px;
}
.theme-kicker {
  font: 16px "Space Mono";
  color: #d6ff45;
}
.theme-header h2 {
  font: 700 clamp(42px, 8vw, 104px)/0.95 "Space Mono";
  letter-spacing: -0.08em;
  margin: 20px 0;
}
.theme-category {
  font-size: 14px;
  color: #d3d3d0;
}
.theme-tagline {
  font: 18px "Space Mono";
  margin: 28px 0 0;
}
.theme-age {
  font-size: 16px;
  color: #aaa;
  margin-top: 25px;
}
.theme-intro {
  border-left: 4px solid #d6ff45;
  padding: 28px 34px;
  max-width: 1040px;
  font-size: 20px;
  line-height: 1.75;
}
.theme-intro p {
  white-space: pre-line;
}
.theme-lead {
  display: flex;
  align-items: center;
  gap: 14px;
  font: 700 clamp(26px, 3vw, 36px)/1.35 "DM Sans", Arial, sans-serif;
  margin: 0 0 14px;
}
.theme-lead .theme-icon {
  margin-right: 0;
}
.theme-intro-copy {
  margin: 0;
  color: #e8eef1;
}
.theme-intro-copy b {
  color: #d5ff5b;
  font-family: "Space Mono", monospace;
  font-size: 0.92em;
}
.theme-intro-prefix {
  margin-right: 0.35em;
}
.theme-block {
  margin-top: 95px;
}
.theme-block h3 {
  font: 700 clamp(28px, 3vw, 38px) "DM Sans", Arial, sans-serif;
  margin: 0 0 30px;
}
.es-list {
  border-top: 1px solid #ffffff44;
  max-width: 1040px;
}
.es-list p {
  display: block;
  border-bottom: 1px solid #ffffff22;
  padding: 27px 0 25px;
  margin: 0;
}
.es-heading {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0 16px;
  line-height: 1.2;
}
.es-list b {
  font: 700 clamp(24px, 3vw, 34px) "Space Mono", monospace;
  color: #d6ff45;
}
.es-heading i {
  color: #b9c6ce;
  font-size: clamp(22px, 2.5vw, 30px);
  font-style: normal;
  font-weight: 300;
}
.es-heading strong {
  color: #fff;
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 700;
}
.es-detail {
  display: block;
  margin-top: 10px;
  color: #d4dee3;
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.55;
}
.journey-title {
  font: 700 18px "Space Mono";
  color: #d6ff45;
}
.journey-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 40px;
  border-top: 1px solid #ffffff44;
}
.journey-list p {
  padding: 18px 0;
  border-bottom: 1px solid #ffffff22;
  margin: 0;
  line-height: 1.6;
}
.theme-footer {
  margin-top: 100px;
  border-top: 1px solid #ffffff55;
  padding-top: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  text-align: center;
}
.theme-footer strong {
  font: 700 25px "Space Mono";
}
.theme-footer span {
  font: 17px "Space Mono";
  color: #d6ff45;
}
.theme-footer small {
  font-size: 11px;
  color: #aaa;
}
@media (max-width: 700px) {
  .explorers-hero {
    min-height: 600px;
    padding: 100px 22px 50px;
  }
  .hero-grid {
    min-height: 450px;
  }
  .hero-meta {
    font-size: 12px;
  }
  .hero-index {
    font-size: 12px;
  }
  .hero-copy h1 {
    font-size: clamp(38px, 12vw, 64px);
  }
  .hero-sub {
    font-size: 15px;
  }
  .hero-stamp {
    font-size: 25px;
    padding: 10px 12px;
  }
  .explorers-index {
    padding: 15px 22px;
    gap: 18px;
  }
  .section-shell,
  .theme-shell {
    padding-left: 22px;
    padding-right: 22px;
    padding-top: 65px;
  }
  .overview-grid,
  .real-singapore {
    grid-template-columns: 1fr;
    gap: 35px;
  }
  .overview-copy {
    font-size: 16px;
  }
  .overview-ribbon {
    margin-top: 55px;
    display: block;
  }
  .overview-ribbon span,
  .overview-ribbon strong {
    display: block;
    margin: 0 0 12px;
  }
  .four-es {
    grid-template-columns: 1fr 1fr;
  }
  .four-es div {
    border-bottom: 1px solid var(--line);
  }
  .four-es div:nth-child(2) {
    border-right: 0;
  }
  .real-list {
    grid-template-columns: 1fr;
  }
  .theme-header {
    padding: 55px 0 38px;
  }
  .theme-header h2 {
    font-size: clamp(36px, 12vw, 72px);
  }
  .theme-intro {
    padding: 22px 20px;
    font-size: 16px;
  }
  .theme-age {
    font-size: 14px;
  }
  .theme-lead {
    font-size: 24px;
  }
  .es-list p {
    padding: 21px 0;
  }
  .es-heading {
    gap: 0 10px;
  }
  .es-heading strong {
    font-size: 25px;
  }
  .es-detail {
    font-size: 17px;
  }
  .journey-list {
    grid-template-columns: 1fr;
  }
  .theme-footer strong {
    font-size: 20px;
  }
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  .explorers-index {
    position: relative;
  }
}

/* Aurora travel direction: imagery leads each chapter while the original copy remains untouched. */
.explorers-page {
  --paper: #f6f8f3;
  --black: #102238;
  --line: #c8d9d2;
  --muted: #466375;
  background: var(--paper);
}
.explorers-hero {
  isolation: isolate;
  position: relative;
  overflow: hidden;
  min-height: 720px;
  background: #102238;
  padding: 142px 6vw 90px;
}
.explorers-hero::before,
.explorers-hero::after {
  content: "";
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  filter: blur(18px);
  opacity: 0.78;
  pointer-events: none;
}
.explorers-hero::before {
  width: 72vw;
  height: 60vw;
  right: -20vw;
  top: -22vw;
  background: radial-gradient(
    ellipse,
    #6df2c0 0%,
    #18a9b8 38%,
    transparent 70%
  );
  transform: rotate(-18deg);
}
.explorers-hero::after {
  width: 62vw;
  height: 50vw;
  left: -24vw;
  bottom: -30vw;
  background: radial-gradient(
    ellipse,
    #b3ee55 0%,
    #5b66db 48%,
    transparent 72%
  );
}
.hero-destination {
  position: absolute;
  z-index: -2;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.28;
  mix-blend-mode: screen;
}
.hero-grid {
  min-height: 490px;
  border-top-color: #b8e9dc;
}
.hero-copy h1 {
  font-size: clamp(42px, 6vw, 92px);
  text-shadow: 0 10px 35px #07142566;
}
.hero-copy h1 span,
.eyebrow {
  color: #d5ff5b;
}
.hero-sub {
  font-weight: 700;
}
.hero-stamp {
  border-color: #b8e9dc;
  background: #10223899;
  backdrop-filter: blur(10px);
}
.explorers-index {
  box-shadow: 0 10px 30px #24485c12;
  color: #244c60;
}
.explorers-index a:hover {
  color: #079c85;
}
.overview {
  background: linear-gradient(145deg, #f6f8f3, #e9f3ec);
}
.overview h2 em {
  color: #008f7a;
}
.overview-ribbon {
  border-color: #0e8e7e;
  background: #dff6ed;
  padding: 22px 20px;
}
.four-es {
  border-color: #bdd9d0;
}
.four-es div {
  border-color: #bdd9d0;
}
.real-singapore {
  position: relative;
}
.real-singapore::after {
  content: "";
  position: absolute;
  right: 0;
  top: 70px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: linear-gradient(135deg, #c5f46e, #24c5b0);
  opacity: 0.45;
  filter: blur(1px);
  z-index: 0;
}
.real-singapore > * {
  position: relative;
  z-index: 1;
}
.overview-close {
  border-color: #167d73;
}
.overview-close strong {
  color: #0b786e;
}
.destination-mosaic {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 18px;
  margin: 66px 0 12px;
}
.destination-mosaic img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 20px 40px #1b51531f;
}
.destination-mosaic img + img {
  margin-top: 52px;
}
.theme {
  position: relative;
  overflow: hidden;
  background: #123d50;
}
.theme::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.12;
  background:
    radial-gradient(circle at 85% 12%, #b8ff55, transparent 30%),
    radial-gradient(circle at 10% 70%, #42e6d4, transparent 34%);
  pointer-events: none;
}
.theme--2 {
  background: #172d59;
}
.theme--3 {
  background: #145244;
}
.theme--4 {
  background: #3c2b68;
}
.theme--5 {
  background: #24595b;
}
.theme--6 {
  background: #173d68;
}
.theme-shell {
  position: relative;
  z-index: 1;
}
.theme-visual {
  width: 100%;
  height: clamp(220px, 34vw, 430px);
  overflow: hidden;
  border-radius: 22px;
  margin: 0 0 52px;
  box-shadow: 0 24px 60px #061b2d55;
}
.theme-visual img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.theme-visual:hover img {
  transform: scale(1.035);
}
.theme-intro {
  border-left-color: #d5ff5b;
  background: #ffffff0d;
  padding-right: 28px;
  border-radius: 0 10px 10px 0;
}
.theme-kicker,
.journey-title,
.es-list b,
.theme-footer span {
  color: #d5ff5b;
}
.es-list,
.journey-list {
  border-color: #ffffff55;
}
.es-list p,
.journey-list p {
  border-color: #ffffff2e;
}
.theme-footer strong {
  font-size: clamp(20px, 2.3vw, 29px);
}
@media (max-width: 700px) {
  .explorers-hero {
    min-height: 650px;
    padding-top: 112px;
  }
  .hero-destination {
    opacity: 0.2;
  }
  .destination-mosaic {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 45px;
  }
  .destination-mosaic img,
  .destination-mosaic img + img {
    height: 190px;
    margin-top: 0;
  }
  .theme-visual {
    height: 220px;
    border-radius: 14px;
    margin-bottom: 35px;
  }
  .theme-intro {
    padding-left: 18px;
    padding-right: 16px;
  }
  .real-singapore::after {
    width: 80px;
    height: 80px;
    top: 35px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .theme-visual img {
    transition: none;
  }
}

/* Unified editorial icon treatment keeps the brochure information scannable. */
.info-icon,
.theme-icon,
.journey-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  font-style: normal;
  font-family: "Space Mono", monospace;
  font-weight: 700;
  letter-spacing: 0;
  border: 1px solid currentColor;
  border-radius: 50%;
  vertical-align: middle;
}
.info-icon {
  width: 28px;
  height: 28px;
  margin-right: 10px;
  font-size: 9px;
  color: #087f73;
}
.four-es .info-icon {
  margin-right: 8px;
  color: #087f73;
}
.theme-icon {
  width: 42px;
  height: 42px;
  margin-right: 12px;
  font-size: 10px;
  color: #d5ff5b;
  border-radius: 10px;
}
.journey-icon {
  width: 28px;
  height: 28px;
  margin-right: 12px;
  font-size: 9px;
  color: #d5ff5b;
  border-radius: 8px;
}
.overview-ribbon span,
.overview-ribbon strong,
.four-es b,
.theme-category,
.theme-age,
.hero-sub {
  white-space: nowrap;
}
.overview-ribbon span {
  display: inline-flex;
  align-items: center;
}
.real-singapore h3 {
  display: flex;
  align-items: center;
  gap: 2px;
}
.journey-list p {
  display: flex;
  align-items: center;
  min-width: 0;
}
.journey-list p {
  white-space: nowrap;
}
.theme-header h2 {
  max-width: 100%;
  white-space: nowrap;
}
@media (max-width: 700px) {
  .theme-header h2 {
    white-space: normal;
  }
  .journey-list p {
    white-space: normal;
  }
  .overview-ribbon span,
  .overview-ribbon strong {
    white-space: normal;
  }
  .info-icon {
    width: 24px;
    height: 24px;
  }
}
.schedule-list {
  margin-top: 0;
  border-top: 1px solid #ffffff44;
}
.journey h3 {
  margin-bottom: 0;
}
.schedule-heading,
.schedule-list p {
  display: grid;
  grid-template-columns: minmax(62px, 0.55fr) minmax(130px, 1.25fr) minmax(0, 3fr);
  gap: 18px;
  margin: 0;
}
.schedule-heading {
  padding: 12px 0;
  color: #d5ff5b;
  font: 700 11px "Space Mono";
  border-bottom: 1px solid #ffffff22;
}
.schedule-list p {
  padding: 14px 0;
  border-bottom: 1px solid #ffffff22;
  line-height: 1.5;
}
.schedule-list b {
  font: 700 11px "Space Mono";
  color: #d5ff5b;
}
.schedule-list span {
  font-size: 14px;
  min-width: 0;
}
.schedule-list + .journey-title {
  margin-top: 34px;
}
.theme-overview {
  background: transparent;
  border-top: 1px solid #b8d8ce;
  border-bottom: 1px solid #b8d8ce;
}
.theme-overview .section-shell {
  padding-top: 75px;
  padding-bottom: 85px;
  /* Match the overview content width; the parent section already owns the gutters. */
  padding-left: 0;
  padding-right: 0;
}
.theme-overview-heading {
  display: flex;
  align-items: baseline;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}
.theme-overview-heading .section-label {
  margin: 0;
}
.theme-overview-heading h3 {
  font: 700 32px/1.1 "Space Mono";
  margin: 0;
  color: #155d57;
}
.theme-overview-heading p {
  margin: 0;
  color: #54716d;
}
.theme-table-wrap {
  overflow-x: auto;
}
.theme-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 760px;
  background: transparent;
}
.theme-table th,
.theme-table td {
  border: 1px solid #c8ddd7;
  padding: 18px 16px;
  vertical-align: top;
  text-align: left;
}
.theme-table th {
  background: #126d65;
  color: #fff;
  font: 12px "Space Mono";
  letter-spacing: 0.04em;
}
.theme-table th:first-child {
  width: 70px;
  text-align: center;
}
.theme-table th:nth-child(2) {
  width: 24%;
}
.theme-table th:nth-child(3) {
  width: 22%;
}
.theme-table tbody tr:nth-child(even) {
  background: #f1f8f5;
}
.theme-table tbody tr {
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}
.theme-table tbody tr:focus-visible {
  outline: 3px solid #d6ff45;
  outline-offset: -3px;
}
.theme-table tbody tr:hover {
  background: #e4f3ed;
  transform: translateX(2px);
}
.theme-table td:first-child {
  text-align: center;
}
.theme-no {
  display: block;
  font: 700 18px "Space Mono";
  color: #126d65;
}
.theme-symbol {
  display: block;
  width: 28px;
  height: 28px;
  margin: 10px auto 0;
  color: #0b8b7d;
  stroke-width: 1.8;
}
.theme-table td strong {
  display: block;
  font-size: 18px;
  line-height: 1.35;
  color: #173f3b;
}
.theme-table td p {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: #234944;
}
@media (max-width: 700px) {
  .theme-overview .section-shell {
    padding-top: 55px;
    padding-bottom: 60px;
  }
  .theme-overview-heading {
    display: block;
  }
  .theme-overview-heading h3 {
    font-size: 24px;
    margin: 8px 0;
  }
  .theme-overview-heading p {
    font-size: 14px;
  }
  .theme-table th,
  .theme-table td {
    padding: 14px 12px;
  }
  .theme-table td strong {
    font-size: 16px;
  }
  .theme-table td p {
    font-size: 14px;
  }
  .theme-symbol {
    width: 24px;
    height: 24px;
  }
}
/* Keep the overview table fully visible without horizontal scrolling. */
.theme-table-wrap {
  overflow: visible;
  width: 100%;
}
.theme-table {
  width: 100%;
  min-width: 0;
  table-layout: fixed;
}
.theme-table th,
.theme-table td {
  overflow-wrap: anywhere;
}
.theme-table th:nth-child(4) {
  width: auto;
}
@media (max-width: 700px) {
  .theme-table {
    table-layout: auto;
  }
  .theme-table th,
  .theme-table td {
    padding: 14px 10px;
  }
  .theme-table th:first-child {
    width: 52px;
  }
  .theme-table th:nth-child(2),
  .theme-table th:nth-child(3) {
    width: 22%;
  }
}

/* Keep chapter titles compact and consistent across viewport sizes. */
.theme-header h2 {
  font-size: 32px;
}
</style>
