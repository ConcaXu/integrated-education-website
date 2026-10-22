<!-- CHINA UNLOCKED 解锁中国 · 国际青少年探索系列落地页 -->
<template>
  <div class="cu-page">
    <!-- Hero -->
    <section class="cu-hero">
      <div class="cu-shell cu-hero__grid">
        <div class="cu-hero__copy">
          <p class="cu-hero__meta">APIMTC / 2026–2030</p>
          <p class="cu-hero__eyebrow">
            {{
              isEn
                ? "INTERNATIONAL YOUTH DISCOVERY SERIES"
                : "国际青少年探索系列"
            }}
          </p>
          <h1>
            CHINA<br /><span>UNLOCKED</span>
            <em>{{ isEn ? "解锁中国" : "解锁中国" }}</em>
          </h1>
          <p class="cu-hero__sub">
            {{
              isEn
                ? "FIVE THEMES · IMMERSIVE LEARNING IN CHINA"
                : "五大主题 · 沉浸式中国学习之旅"
            }}
          </p>
          <p class="cu-hero__tagline">{{
            isEn
              ? "Explore China · Discover Possibilities · Shape Tomorrow"
              : "探索中国 · 发现可能 · 塑造未来"
          }}</p>
          <div class="cu-hero__badges">
            <span>{{
              isEn
                ? "Secondary 3–4 Students / Junior College Students / IP Students / Student Leaders / SAP School Students"
                : "适合中三至中四学生、初级学院学生、直通车课程（Integrated Programme）学生、学生领袖及特选学校（Special Assistant Plan）学生"
            }}</span>
          </div>
        </div>
        <div class="cu-hero__visual">
          <img
            :src="images.hero"
            :alt="isEn ? 'CHINA UNLOCKED' : '解锁中国 · 国际青少年探索系列'"
          />
        </div>
      </div>
    </section>

    <!-- 01 引言 -->
    <section class="cu-intro">
      <div class="cu-shell">
        <div class="cu-label">
          01 / {{ isEn ? "INTRODUCTION" : "引言" }}
        </div>
        <h2 class="cu-h2">
          {{
            isEn
              ? "More Than a Trip — Unlock a World of Possibilities"
              : "不只是一次旅行，而是一段探索当代中国的成长之旅"
          }}
        </h2>
        <div class="cu-intro__paras">
          <p>{{
            isEn
              ? "China is transforming the world of technology, sustainable development, entrepreneurship, international cooperation and cultural innovation. For Singapore's young people, discovering China offers opportunities to look beyond the classroom, broaden their perspectives and prepare for an increasingly interconnected world."
              : "中国正在科技创新、可持续发展、创业创新、国际合作及文化传承等领域快速发展。对于新加坡青少年来说，走进中国，不仅是拓展视野的机会，更是跳出课本、接触真实世界，并为未来做好准备的重要学习经历。"
          }}</p>
          <p>{{
            isEn
              ? "CHINA UNLOCKED – International Youth Discovery Series 2026–2030 brings learning to life through five immersive educational journeys across selected Chinese cities."
              : "CHINA UNLOCKED — 国际青少年中国探索系列（2026–2030） 通过五大特色主题，带领学生走进中国不同城市，开展沉浸式、体验式及跨文化学习。"
          }}</p>
          <p>{{
            isEn
              ? "Through EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE, students discover new ideas, encounter real-world applications, engage with Chinese students and communities, and gain a deeper understanding of contemporary China."
              : "项目以 EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE 为核心学习理念，让学生学习新知识、体验实际应用、探索中国发展，并与中国学生及当地社区交流互动，从而加深对当代中国的认识。"
          }}</p>
          <p>{{
            isEn
              ? "From artificial intelligence and future cities to entrepreneurship, global leadership and living cultural traditions, each camp offers a distinctive learning experience designed around students' interests, aspirations and future possibilities."
              : "从人工智能与未来城市，到创业创新、全球领导力及中华文化体验，每个营队都拥有鲜明的主题，为学生提供符合兴趣、能力发展及未来 aspirations 的学习路径。"
          }}</p>
        </div>
      </div>
    </section>

    <!-- 02 五大主题 -->
    <section class="cu-themes">
      <div class="cu-shell">
        <div class="cu-label">
          02 / {{ isEn ? "FIVE THEMES" : "五大主题" }}
        </div>
        <h2 class="cu-h2">
          {{
            isEn
              ? "FIVE THEMES · FIVE DISTINCTIVE JOURNEYS"
              : "五大主题 · 五段精彩旅程"
          }}
        </h2>
        <div class="cu-table-wrap">
          <table class="cu-table">
            <thead>
              <tr>
                <th>{{ isEn ? "No." : "编号" }}</th>
                <th>{{ isEn ? "Programme" : "营队品牌名称" }}</th>
                <th>{{ isEn ? "Theme · Learning Area" : "学习领域" }}</th>
                <th>{{ isEn ? "What Will Students Explore?" : "学生将探索什么？" }}</th>
                <th>{{ isEn ? "Duration" : "项目时长" }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="c in camps" :key="c.no">
                <td class="cu-table__no">{{ c.no }}</td>
                <td>
                  <strong class="cu-table__brand">{{ c.brandEn }}</strong>
                  <span class="cu-table__brandzh">{{ c.brandZh }}</span>
                </td>
                <td>{{ L(c.themeZh, c.themeEn) }}</td>
                <td>{{ L(c.tableExploreZh, c.tableExploreEn) }}</td>
                <td class="cu-table__dur">{{ L(c.durationShortZh, c.durationShortEn) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 03 4E 模式 -->
    <section class="cu-foure">
      <div class="cu-shell">
        <div class="cu-label">
          03 / {{ isEn ? "THE 4Es LEARNING EXPERIENCE" : "4E 学习体验模式" }}
        </div>
        <h2 class="cu-h2">
          {{
            isEn
              ? "Every Camp Follows the 4Es Learning Experience"
              : "每个营队都贯彻 4E 学习体验模式"
          }}
        </h2>
        <p class="cu-foure__sub">EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE</p>
        <div class="cu-grid cu-grid--4">
          <article
            v-for="e in fourE"
            :key="e.key"
            class="cu-card cu-card--fourE"
          >
            <h3><span class="cu-card__key">{{ e.key }}</span><span>{{ L(e.zhTitle, e.enTitle) }}</span></h3>
            <p class="cu-card__tags">{{ L(e.zhTags, e.enTags) }}</p>
            <p class="cu-card__desc">{{ L(e.zhDesc, e.enDesc) }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- 04 走进真实中国 -->
    <section class="cu-real">
      <div class="cu-shell">
        <div class="cu-label">
          04 / {{ isEn ? "REAL CHINA · REAL-WORLD LEARNING" : "真实中国 · 真实世界学习" }}
        </div>
        <h2 class="cu-h2">
          {{
            isEn
              ? "Real China · Real-World Learning"
              : "走进真实中国 · 开展真实世界学习"
          }}
        </h2>
        <div class="cu-grid cu-grid--3">
          <article
            v-for="(r, i) in realWorld"
            :key="i"
            class="cu-card"
          >
            <h3>{{ L(r.zhTitle, r.enTitle) }}</h3>
            <p class="cu-card__desc">{{ L(r.zhDesc, r.enDesc) }}</p>
          </article>
        </div>
        <p class="cu-note">
          {{
            isEn
              ? "All visits and activities are subject to access, availability, programme dates and final confirmation. Final itineraries may be adjusted according to operational arrangements."
              : "所有企业、大学、机构及其他参访活动均须视乎开放安排、接待能力、项目日期及最终确认情况而定。实际行程可能因交通、场地及运营安排而作出调整。"
          }}
        </p>
      </div>
    </section>

    <!-- 旅程横幅 -->
    <section class="cu-journey">
      <div class="cu-shell">
        <h2>{{
          isEn
            ? "Five Themes. One Journey into China."
            : "五大主题 · 一段探索中国的成长旅程"
        }}</h2>
        <p class="cu-journey__path">
          {{
            isEn
              ? "TECHNOLOGY → SUSTAINABILITY → ENTREPRENEURSHIP → LEADERSHIP → CULTURE"
              : "科技创新 → 可持续发展 → 创业实践 → 全球领导力 → 中华文化"
          }}
        </p>
        <p class="cu-journey__steps">
          {{
            isEn
              ? "Learn · Experience · Explore · Exchange · Reflect"
              : "学习 · 体验 · 探索 · 交流 · 反思"
          }}
        </p>
        <p class="cu-journey__meta">
          {{
            isEn
              ? "6–7 DAYS | 5–6 NIGHTS | FIVE DISTINCT LEARNING PATHWAYS"
              : "6 至7 天｜5 至6 晚｜五大特色学习路径"
          }}
        </p>
        <p class="cu-journey__brand">CHINA UNLOCKED</p>
        <p class="cu-journey__slogan">
          {{
            isEn
              ? "Explore China. Discover Possibilities. Shape Tomorrow."
              : "解锁中国 · 发现无限可能 · 探索中国 · 发现可能 · 塑造未来"
          }}
        </p>
      </div>
    </section>

    <!-- 五大营队 -->
    <section
      v-for="(c, idx) in camps"
      :key="c.brandEn"
      class="cu-camp"
      :class="{ 'cu-camp--alt': idx % 2 === 1 }"
    >
      <div class="cu-shell">
        <div class="cu-label">
          {{ isEn ? `CHINA UNLOCKED · CAMP ${c.no}` : `CHINA UNLOCKED · 营队 ${c.no}` }}
        </div>
        <header class="cu-camp__head">
          <h2 class="cu-camp__brand">{{ c.brandEn }}</h2>
          <p class="cu-camp__brandzh">{{ c.brandZh }}</p>
          <p class="cu-camp__theme">{{ L(c.themeZh, c.themeEn) }}</p>
          <p class="cu-camp__duration">{{ L(c.durationZh, c.durationEn) }}</p>
          <p class="cu-camp__tagline">{{ L(c.taglineZh, c.taglineEn) }}</p>
          <p class="cu-camp__audience">{{ L(c.audienceZh, c.audienceEn) }}</p>
        </header>

        <figure class="cu-camp__figure">
          <img :src="c.image" :alt="c.brandEn" loading="lazy" />
        </figure>

        <div class="cu-camp__intro">
          <h3>{{ L(c.introTitleZh, c.introTitleEn) }}</h3>
          <p class="cu-camp__question">{{ L(c.questionZh, c.questionEn) }}</p>
          <p v-for="(p, i) in c.paras" :key="i">{{ L(p.zh, p.en) }}</p>
        </div>

        <div class="cu-camp__block">
          <h4 class="cu-camp__blocktitle">
            <span class="cu-tick">✦</span>
            {{ isEn ? "Learning Experience" : "学习体验" }}
          </h4>
          <div class="cu-grid cu-grid--2">
            <article
              v-for="e in c.learn"
              :key="e.key"
              class="cu-card"
            >
              <h3>
                <span class="cu-card__key">{{ e.key }}</span
                ><span>{{ L(e.zhTitle, e.enTitle) }}</span>
              </h3>
              <p class="cu-card__tags">{{ L(e.zhTags, e.enTags) }}</p>
              <p class="cu-card__desc">{{ L(e.zhDesc, e.enDesc) }}</p>
            </article>
          </div>
        </div>

        <div class="cu-camp__block">
          <h4 class="cu-camp__blocktitle">
            <span class="cu-tick">✦</span>
            {{ L(c.itineraryTitleZh, c.itineraryTitleEn) }}
          </h4>
          <div class="cu-table-wrap">
            <table class="cu-table cu-table--itin">
              <thead>
                <tr>
                  <th class="cu-th-day">{{ isEn ? "Day" : "天数" }}</th>
                  <th>{{ isEn ? "Exploration Theme" : "探索主题" }}</th>
                  <th>{{ isEn ? "Highlights" : "主要活动" }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(d, i) in c.itinerary" :key="i">
                  <td class="cu-table__no">{{ L(d.dayZh, d.dayEn) }}</td>
                  <td class="cu-itin__theme">{{ L(d.themeZh, d.themeEn) }}</td>
                  <td>{{ L(d.actZh, d.actEn) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="cu-camp__block">
          <h4 class="cu-camp__blocktitle">
            <span class="cu-tick">✦</span>
            {{ L(c.envTitleZh, c.envTitleEn) }}
          </h4>
          <ol class="cu-envs">
            <li v-for="(env, i) in c.envs" :key="i" class="cu-env">
              <h5>
                <span class="cu-env__no">{{ i + 1 }}.</span>
                {{ L(env.nameZh, env.nameEn) }}
              </h5>
              <p class="cu-card__tags">{{ L(env.tagsZh, env.tagsEn) }}</p>
              <p class="cu-card__desc">{{ L(env.zhDesc, env.enDesc) }}</p>
            </li>
          </ol>
        </div>

        <footer class="cu-camp__closing">
          <h4>{{ L(c.closeTitleZh, c.closeTitleEn) }}</h4>
          <p class="cu-camp__steps">{{ L(c.closeStepsZh, c.closeStepsEn) }}</p>
          <p class="cu-camp__meta">{{ L(c.closeMetaZh, c.closeMetaEn) }}</p>
          <p class="cu-camp__closebrand">
            {{ c.brandEn }} · {{ L(c.brandZh, c.brandEn) }}
          </p>
          <p class="cu-camp__closeslogan">{{ L(c.closeSloganZh, c.closeSloganEn) }}</p>
          <p class="cu-note cu-note--dark">{{ L(c.closeNoteZh, c.closeNoteEn) }}</p>
        </footer>
      </div>
    </section>

    <!-- 10 结语 -->
    <section class="cu-outro">
      <div class="cu-shell">
        <div class="cu-label">
          05 / {{ isEn ? "YOUR CHINA UNLOCKED EXPERIENCE" : "开启探索之旅" }}
        </div>
        <h2 class="cu-h2">
          {{
            isEn
              ? "Your China Unlocked Experience"
              : "开启你的 CHINA UNLOCKED 探索之旅"
          }}
        </h2>
        <p class="cu-outro__sub">
          {{
            isEn
              ? "Five Themes. Five Learning Pathways. One Broader Worldview."
              : "五大主题 · 五条学习路径 · 一个更广阔的世界"
          }}
        </p>
        <p class="cu-outro__lead">
          {{
            isEn
              ? "Every journey offers a different way to discover China, connect classroom learning with real-world experiences and develop perspectives that can shape students' future choices."
              : "每一段旅程，都为学生提供一种认识中国的方式，让课堂知识与真实世界相连接，并培养有助于未来发展的视野与能力。"
          }}
        </p>
        <div class="cu-outro__list">
          <p v-for="(r, i) in camps" :key="i">
            <strong>{{ r.brandEn }} · {{ r.brandZh }}</strong>
            <span>{{ L(r.recapZh, r.recapEn) }}</span>
          </p>
        </div>
        <p class="cu-journey__path">
          {{
            isEn
              ? "TECHNOLOGY → SUSTAINABILITY → ENTREPRENEURSHIP → LEADERSHIP → CULTURE"
              : "科技创新 → 可持续发展 → 创业实践 → 全球领导力 → 中华文化"
          }}
        </p>
        <p class="cu-foure__sub">EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE</p>
        <p class="cu-outro__slogan">
          {{
            isEn
              ? "Explore China. Discover Possibilities. Shape Tomorrow."
              : "探索中国 · 发现可能 · 塑造未来"
          }}
        </p>
        <p class="cu-outro__brand">CHINA UNLOCKED</p>
        <p class="cu-outro__series">
          {{
            isEn
              ? "INTERNATIONAL YOUTH DISCOVERY SERIES 2026–2030"
              : "国际青少年中国探索系列"
          }}
        </p>
        <p class="cu-outro__host">
          {{
            isEn ? "Presented by APIMTC" : "主办单位：亚太国际智航API Eduvoyage"
          }}
        </p>
        <p class="cu-note">
          {{
            isEn
              ? "Programme destinations, visits, institutions and activities are indicative and subject to final confirmation. Actual itineraries may be adjusted according to access, availability, transport schedules and operational requirements."
              : "所有项目目的地、企业与机构参访及活动安排均为初步规划，须视乎开放情况、接待安排、交通及最终确认情况而定。实际行程可能因运营需要作出调整。"
          }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "@/composables/useI18n";
import heroImage from "@/assets/china-unlocked-images/hero-china-unlocked.webp";
import campFuturetech from "@/assets/china-unlocked-images/camp-futuretech.webp";
import campFutureCities from "@/assets/china-unlocked-images/camp-future-cities.webp";
import campStartup from "@/assets/china-unlocked-images/camp-startup.webp";
import campGlobalLeaders from "@/assets/china-unlocked-images/camp-global-leaders.webp";
import campCultureQuest from "@/assets/china-unlocked-images/camp-culture-quest.webp";

const { lang } = useI18n();
const isEn = computed(() => lang.value === "en");
const L = (zh: string, en: string) => (isEn.value ? en : zh);

const images = { hero: heroImage };

const fourE = [
  {
    key: "EDUCATE",
    zhTitle: "学习与启发",
    enTitle: "",
    zhTags: "学术知识 · 专题学习 · 引导式探索 · 未来视野",
    enTags: "Academic Learning · Subject Knowledge · Guided Discovery · Future Perspectives",
    zhDesc: "通过专题讲座、学习课程、专业工作坊及引导式讨论，建立与营队主题相关的知识基础。",
    enDesc: "Build understanding through lectures, learning sessions, specialist workshops and guided discussions connected to each camp's theme.",
  },
  {
    key: "EXPERIENCE",
    zhTitle: "亲身体验",
    enTitle: "",
    zhTags: "动手实践 · 应用学习 · 文化工作坊 · 实际任务",
    enTags: "Hands-On Activities · Applied Learning · Cultural Workshops · Practical Tasks",
    zhDesc: "走出课堂，通过科技展示、模拟活动、实地考察及体验式学习，将知识与实际情境联系起来。",
    enDesc: "Move beyond the classroom through demonstrations, simulations, fieldwork, experiential activities and theme-related assignments.",
  },
  {
    key: "EXPLORE",
    zhTitle: "探索中国",
    enTitle: "",
    zhTags: "中国城市 · 大学 · 产业 · 创新生态 · 文化遗产",
    enTags: "China's Cities · Universities · Industries · Innovation Ecosystems · Cultural Heritage",
    zhDesc: "走进中国的教育机构、企业、博物馆、生态环境及文化景点，了解中国的发展与创新。",
    enDesc: "Discover China's development through selected educational institutions, companies, museums, environmental sites and cultural destinations.",
  },
  {
    key: "EXCHANGE",
    zhTitle: "交流与互鉴",
    enTitle: "",
    zhTags: "中国学生 · 校园互动 · 团队合作 · 跨文化理解",
    enTags: "Chinese Students · School Interaction · Teamwork · Cross-Cultural Understanding",
    zhDesc: "与中国学生及当地社区交流，分享彼此的观点，在互动中建立友谊，并加深对不同文化与生活方式的理解。",
    enDesc: "Connect with Chinese students and local communities, share perspectives and develop a deeper understanding of life and learning in China.",
  },
];

const realWorld = [
  {
    zhTitle: "大学与教育机构学习",
    enTitle: "University & Institutional Learning",
    zhDesc: "探索与营队主题相关的大学、研究机构、博物馆及专业组织，拓展学生的学术视野。",
    enDesc: "Explore subject-related learning opportunities with selected universities, research institutions, museums and specialist organisations.",
  },
  {
    zhTitle: "产业与科技体验",
    enTitle: "Industry & Technology Exposure",
    zhDesc: "通过拟议中的企业参访、科技中心、创新园区及创业生态考察，了解中国科技与商业的发展。",
    enDesc: "Discover China's technology and business ecosystems through selected company visits, technology centres, innovation hubs and start-up environments.",
  },
  {
    zhTitle: "可持续发展与环境探索",
    enTitle: "Sustainability & Environmental Exploration",
    zhDesc: "通过城市规划、智慧水务、生态保护及可持续城市相关活动，认识环境管理与绿色发展的重要性。",
    enDesc: "Investigate urban development, smart water management, ecological protection and sustainable-city initiatives through selected site visits and practical activities.",
  },
  {
    zhTitle: "创业与创新实践",
    enTitle: "Entrepreneurship & Innovation",
    zhDesc: "根据营队主题，开展设计思维、问题识别、原型设计、商业模式开发、创业模拟及项目路演等活动。",
    enDesc: "Experience design thinking, problem identification, prototyping, business model development, start-up simulations and project pitching where relevant to the camp.",
  },
  {
    zhTitle: "校园与青年交流",
    enTitle: "School & Youth Exchange",
    zhDesc: "与中国学生互动，参与协作活动，交流彼此的教育经验、文化背景及对当代社会的看法。",
    enDesc: "Interact with Chinese students, participate in collaborative activities and exchange perspectives on education, culture and contemporary society.",
  },
  {
    zhTitle: "文化与历史体验",
    enTitle: "Cultural & Heritage Experiences",
    zhDesc: "探索历史遗迹、传统艺术、中国诗词、地方美食、文化工作坊及当地生活方式。",
    enDesc: "Explore historical sites, traditional arts, regional food, Chinese poetry, cultural workshops and local lifestyles.",
  },
  {
    zhTitle: "领导力与全球视野",
    enTitle: "Leadership & Global Perspectives",
    zhDesc: "通过团队任务、情境模拟、沟通协作、反思及服务学习，培养领导能力与国际视野。",
    enDesc: "Develop communication, collaboration, negotiation, reflection and leadership skills through group activities, simulations and service-learning experiences.",
  },
];

const camps = [
  {
    no: "01",
    brandEn: "FUTURETECH EXPLORERS",
    brandZh: "未来科技探索家",
    themeZh: "人工智能、机器人与新兴科技",
    themeEn: "AI, Robotics & Emerging Technologies",
    durationZh: "6天5晚 · 深圳 + 上海",
    durationEn: "6 Days / 5 Nights · Shenzhen + Shanghai",
    durationShortZh: "6天5晚",
    durationShortEn: "6 Days / 5 Nights",
    taglineZh: "探索改变未来的科技力量。",
    taglineEn: "Discover the Technologies Transforming Tomorrow.",
    audienceZh: "适合中三、中四及初级学院学生",
    audienceEn: "For Secondary 3, Secondary 4 and Junior College Students",
    tableExploreZh:
      "走进中国科技生态，了解人工智能、机器人、智能系统及数码科技如何改变产业与日常生活。",
    tableExploreEn:
      "Discover China's technology ecosystem and investigate how AI, robotics, smart systems and digital technologies are transforming industries and everyday life.",
    image: campFuturetech,
    introTitleZh: "探索人工智能 · 认识机器人 · 洞察未来科技",
    introTitleEn: "Explore AI · Discover Robotics · Understand Future Technologies",
    questionZh: "人工智能、机器人及智能科技，正在如何改变我们生活的世界？",
    questionEn:
      "How are artificial intelligence, robotics and smart technologies changing the world around us?",
    paras: [
      {
        zh: "通过 EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE 四大环节，学生将走进中国科技生态，了解新兴科技如何应用于不同产业、日常生活及未来发展。",
        en: "Through EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE, students explore China's technology ecosystem and investigate how emerging technologies are transforming the way people live, learn and work.",
      },
      {
        zh: "从深圳的科技创新与先进制造业环境，到上海的创新生态，学生将认识科技如何从概念走向实际应用，并了解科技发展与现实需求之间的联系。",
        en: "From Shenzhen's technology and manufacturing environment to Shanghai's innovation ecosystem, students gain a broader understanding of how technology is developed, applied and used to address real-world needs.",
      },
      {
        zh: "这段旅程旨在激发学生的好奇心、科学思维与创新意识，让他们更深入地认识塑造未来的科技力量。",
        en: "The journey encourages curiosity, scientific thinking and an appreciation of the technologies shaping tomorrow.",
      },
    ],
    learn: [
      {
        key: "EDUCATE",
        zhTitle: "建立科技知识基础",
        enTitle: "Build Scientific & Technological Understanding",
        zhTags: "人工智能 · 机器人 · 智能科技 · 数码转型 · 未来创新",
        enTags:
          "Artificial Intelligence · Robotics · Smart Technologies · Digital Transformation · Future Innovation",
        zhDesc: "认识新兴科技的基本概念，以及它们在不同产业和日常生活中的应用。",
        enDesc:
          "Build an understanding of emerging technologies and their applications across industries and everyday life.",
      },
      {
        key: "EXPERIENCE",
        zhTitle: "亲身了解科技应用",
        enTitle: "Discover Technology in Practice",
        zhTags: "科技展示 · 应用学习 · 产业应用 · 引导式探索",
        enTags:
          "Technology Demonstrations · Applied Learning · Industry Applications · Guided Exploration",
        zhDesc: "通过科技展示、专题学习及实际应用案例，了解科技如何解决现实问题。",
        enDesc:
          "Explore technology through demonstrations, guided learning and observation of real-world applications.",
      },
      {
        key: "EXPLORE",
        zhTitle: "探索中国科技生态",
        enTitle: "Discover China's Technology Ecosystem",
        zhTags: "深圳 · 上海 · 科技企业 · 大学 · 创新环境",
        enTags:
          "Shenzhen · Shanghai · Technology Companies · Universities · Innovation Environments",
        zhDesc: "通过拟议中的企业、大学、科学及创新相关参访，了解中国科技产业的发展与创新环境。",
        enDesc:
          "Discover China's technology landscape through selected industry, university, science and innovation learning opportunities.",
      },
      {
        key: "EXCHANGE",
        zhTitle: "跨文化学习与交流",
        enTitle: "Learn Across Cultures",
        zhTags: "中国学生 · 团队合作 · 协作学习 · 跨文化理解",
        enTags:
          "Chinese Students · Teamwork · Collaborative Learning · Cross-Cultural Understanding",
        zhDesc: "与同伴及中国学生交流观点，认识科技创新在不同社会与文化环境中的意义。",
        enDesc:
          "Share perspectives, collaborate with others and develop a broader understanding of technology and innovation in contemporary China.",
      },
    ],
    itineraryTitleZh: "六天五晚探索行程",
    itineraryTitleEn: "6-Day / 5-Night Discovery Journey",
    itinerary: [
      {
        dayZh: "第1天",
        dayEn: "DAY 1",
        themeZh: "发现深圳",
        themeEn: "Discover Shenzhen",
        actZh: "抵达深圳 · 认识深圳科技生态 · 项目介绍与行前学习",
        actEn:
          "Arrival and Orientation · Introduction to Shenzhen's Technology Ecosystem · Programme Briefing",
      },
      {
        dayZh: "第2天",
        dayEn: "DAY 2",
        themeZh: "探索科技创新",
        themeEn: "Explore Technology Innovation",
        actZh: "华为／大疆科技学习与展示 · 智能科技 · 机器人与数码创新（视乎参访安排）",
        actEn:
          "Huawei / DJI Technology Learning and Demonstrations · Smart Technologies · Robotics and Digital Innovation, subject to access",
      },
      {
        dayZh: "第3天",
        dayEn: "DAY 3",
        themeZh: "认识先进科技",
        themeEn: "Discover Advanced Technology",
        actZh: "比亚迪科技学习体验 · 大学或科技专题学习 · 产业应用探索（待确认）",
        actEn:
          "BYD Technology Learning Experience · University / Technology Learning · Industry Applications, subject to confirmation",
      },
      {
        dayZh: "第4天",
        dayEn: "DAY 4",
        themeZh: "前往上海",
        themeEn: "Connect with Shanghai",
        actZh: "前往上海 · 认识上海创新生态 · 城市探索",
        actEn:
          "Travel to Shanghai · Introduction to Shanghai's Innovation Ecosystem · City Exploration",
      },
      {
        dayZh: "第5天",
        dayEn: "DAY 5",
        themeZh: "探索人工智能与科技应用",
        themeEn: "Explore AI & Technology Applications",
        actZh: "大学学习体验 · 人工智能或科技产业接触 · 数码转型专题学习",
        actEn:
          "University Learning Experience · AI / Technology Industry Exposure · Digital Transformation",
      },
      {
        dayZh: "第6天",
        dayEn: "DAY 6",
        themeZh: "展望未来科技",
        themeEn: "Reflect on Future Technology",
        actZh: "科学、科技或城市发展主题探索 · 学习总结与反思 · 离境",
        actEn:
          "Science, Technology or Urban Development Exploration · Learning Reflection · Departure",
      },
    ],
    envTitleZh: "五大真实世界学习领域",
    envTitleEn: "Five Real-World Learning Environments",
    envs: [
      {
        nameZh: "人工智能",
        nameEn: "ARTIFICIAL INTELLIGENCE",
        tagsZh: "人工智能应用 · 智能系统 · 数码转型",
        tagsEn: "AI Applications · Intelligent Systems · Digital Transformation",
        zhDesc: "认识人工智能如何应用于智能系统、数码服务及不同产业的新兴领域。",
        enDesc:
          "Discover how AI supports intelligent systems, digital services and emerging applications across different industries.",
      },
      {
        nameZh: "机器人与智能科技",
        nameEn: "ROBOTICS & SMART TECHNOLOGIES",
        tagsZh: "机器人 · 自动化 · 智能设备 · 新兴科技",
        tagsEn: "Robotics · Automation · Smart Devices · Emerging Technologies",
        zhDesc: "了解机器人、自动化系统及智能设备如何改变工业流程与日常生活。",
        enDesc:
          "Explore how robotics, automation and smart devices are changing industrial processes and everyday experiences.",
      },
      {
        nameZh: "先进科技",
        nameEn: "ADVANCED TECHNOLOGY",
        tagsZh: "科技展示 · 工程应用 · 产业创新",
        tagsEn: "Technology Demonstrations · Engineering Applications · Industrial Innovation",
        zhDesc: "通过科技应用及工程相关学习，认识制造业、工程技术与创新之间的联系。",
        enDesc:
          "Gain exposure to technology applications and discover the relationship between engineering, manufacturing and innovation.",
      },
      {
        nameZh: "大学与应用学习",
        nameEn: "UNIVERSITY & APPLIED LEARNING",
        tagsZh: "学术体验 · 引导式学习 · 科技探索",
        tagsEn: "Academic Exposure · Guided Learning · Technology Exploration",
        zhDesc: "通过合适的大学、科学或专业学习机会，进一步拓展学生对科技领域的认识。",
        enDesc:
          "Broaden technological understanding through suitable university, science or specialist learning opportunities.",
      },
      {
        nameZh: "未来产业",
        nameEn: "FUTURE INDUSTRIES",
        tagsZh: "数码化 · 智能系统 · 科技驱动发展",
        tagsEn: "Digitalisation · Smart Systems · Technology-Driven Development",
        zhDesc: "了解科技如何推动产业转型，并为未来的学习与职业发展创造新的机会。",
        enDesc:
          "Investigate how technology is transforming industries and creating new opportunities for future study and work.",
      },
    ],
    closeTitleZh: "不只是学习之旅，更是一次未来科技探索",
    closeTitleEn: "More Than a Study Tour — A Future Technology Learning Journey",
    closeStepsZh: "学习 · 探索 · 研究 · 反思",
    closeStepsEn: "Learn · Explore · Investigate · Reflect",
    closeMetaZh: "6天5晚｜深圳 + 上海",
    closeMetaEn: "6 DAYS · 5 NIGHTS | SHENZHEN + SHANGHAI",
    closeSloganZh: "走进中国，探索科技，洞察未来。",
    closeSloganEn: "Come to China. Explore Technology. Understand the Future.",
    closeNoteZh: "企业、大学及专业机构参访均须视乎开放安排并最终确认。",
    closeNoteEn:
      "Proposed company, university and specialist visits are subject to access and final confirmation.",
    recapZh: "探索新兴科技，认识人工智能、机器人及未来产业。",
    recapEn: "to discover emerging technologies.",
  },
  {
    no: "02",
    brandEn: "FUTURE CITIES LAB",
    brandZh: "未来城市实验室",
    themeZh: "智慧城市、可持续发展与绿色创新",
    themeEn: "Smart Cities, Sustainability & Green Innovation",
    durationZh: "6天5晚 · 上海 + 苏州",
    durationEn: "6 Days / 5 Nights · Shanghai + Suzhou",
    durationShortZh: "6天5晚",
    durationShortEn: "6 Days / 5 Nights",
    taglineZh: "探索城市如何变得更智慧、更绿色、更可持续。",
    taglineEn: "Explore How Cities Can Become Smarter and More Sustainable.",
    audienceZh: "适合中三、中四及初级学院学生",
    audienceEn: "For Secondary 3, Secondary 4 and Junior College Students",
    tableExploreZh:
      "探索城市规划、绿色科技、水资源管理及生态保护，了解如何建设更智慧、更宜居、更可持续的城市。",
    tableExploreEn:
      "Explore urban planning, green technology, water management and ecological protection to understand how cities can become smarter and more sustainable.",
    image: campFutureCities,
    introTitleZh: "探索智慧城市 · 研究可持续发展 · 发现环境解决方案",
    introTitleEn:
      "Explore Smart Cities · Investigate Sustainability · Discover Environmental Solutions",
    questionZh: "什么样的城市才算智慧、宜居与可持续？",
    questionEn: "What makes a city smart, liveable and sustainable?",
    paras: [
      {
        zh: "通过 EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE 四大环节，学生将探索城市规划、绿色科技、水资源管理、电动交通及生态保护如何共同推动可持续城市发展。",
        en: "Through EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE, students investigate how urban planning, green technology, water management, electric mobility and ecological protection contribute to more sustainable cities.",
      },
      {
        zh: "从上海到苏州，学生将了解城市建设、基础设施、环境管理与生活品质之间的关系。",
        en: "Moving from Shanghai to Suzhou, students explore the relationship between urban development, environmental management and quality of life.",
      },
      {
        zh: "项目鼓励学生思考：如何通过科技、规划及环境责任，共同建设更适合未来生活的城市？",
        en: "The programme encourages students to consider how technology, planning and environmental responsibility can work together to create better places to live.",
      },
    ],
    learn: [
      {
        key: "EDUCATE",
        zhTitle: "认识可持续发展",
        enTitle: "Understand Sustainable Development",
        zhTags: "城市规划 · 气候意识 · 环境系统 · 水资源管理",
        enTags:
          "Urban Planning · Climate Awareness · Environmental Systems · Water Management",
        zhDesc: "了解可持续发展的基本概念，以及现代城市面对的环境挑战。",
        enDesc:
          "Develop an understanding of sustainable development and the environmental challenges faced by modern cities.",
      },
      {
        key: "EXPERIENCE",
        zhTitle: "体验绿色科技",
        enTitle: "Discover Green Technology",
        zhTags: "智慧水务 · 环境学习 · 水质活动 · 可持续解决方案",
        enTags:
          "Smart Water Management · Environmental Learning · Water-Quality Activities · Sustainable Solutions",
        zhDesc: "通过引导式活动与实践学习，认识环境系统及绿色科技的应用。",
        enDesc:
          "Explore environmental systems and green technology through guided activities and practical learning opportunities.",
      },
      {
        key: "EXPLORE",
        zhTitle: "探索城市与生态系统",
        enTitle: "Study Cities & Ecosystems",
        zhTags: "上海 · 苏州 · 城市发展 · 生态环境 · 可持续城市建设",
        enTags:
          "Shanghai · Suzhou · Urban Development · Ecological Sites · Sustainable-City Initiatives",
        zhDesc: "了解城市规划、基础设施及生态管理如何支持可持续发展。",
        enDesc:
          "Discover how urban planning, infrastructure and ecological management contribute to sustainable development.",
      },
      {
        key: "EXCHANGE",
        zhTitle: "交流可持续发展理念",
        enTitle: "Share Perspectives on Sustainability",
        zhTags: "中国学生 · 协作学习 · 环境意识 · 跨文化交流",
        enTags:
          "Chinese Students · Collaborative Learning · Environmental Awareness · Cross-Cultural Exchange",
        zhDesc: "分享对环境责任、可持续生活及未来城市发展的观点。",
        enDesc:
          "Exchange ideas and perspectives on environmental responsibility, sustainable living and the future of cities.",
      },
    ],
    itineraryTitleZh: "六天五晚探索行程",
    itineraryTitleEn: "6-Day / 5-Night Discovery Journey",
    itinerary: [
      {
        dayZh: "第1天",
        dayEn: "DAY 1",
        themeZh: "发现上海",
        themeEn: "Discover Shanghai",
        actZh: "抵达上海 · 认识城市发展 · 项目介绍",
        actEn:
          "Arrival and Orientation · Introduction to Urban Development · Programme Briefing",
      },
      {
        dayZh: "第2天",
        dayEn: "DAY 2",
        themeZh: "认识智慧城市",
        themeEn: "Understand Smart Cities",
        actZh: "上海城市规划展示馆 · 前滩国际商务区 · 城市规划与发展",
        actEn:
          "Shanghai Urban Planning Exhibition Hall · Qiantan International Business District · Urban Planning and Development",
      },
      {
        dayZh: "第3天",
        dayEn: "DAY 3",
        themeZh: "探索绿色科技",
        themeEn: "Explore Green Technology",
        actZh: "电动汽车／电池科技学习 · 前往苏州 · 认识苏州发展环境",
        actEn:
          "Electric Vehicle / Battery Technology Learning · Travel to Suzhou · Introduction to the Suzhou Development Environment",
      },
      {
        dayZh: "第4天",
        dayEn: "DAY 4",
        themeZh: "探索可持续基础设施",
        themeEn: "Discover Sustainable Infrastructure",
        actZh: "中新苏州工业园区 · 智慧水务学习 · 环境科技",
        actEn:
          "China–Singapore Suzhou Industrial Park · Smart Water Management Learning · Environmental Technology",
      },
      {
        dayZh: "第5天",
        dayEn: "DAY 5",
        themeZh: "研究生态与水资源系统",
        themeEn: "Investigate Ecology & Water Systems",
        actZh: "东沙湖／太湖生态探索 · 环境学习 · 水质相关活动",
        actEn:
          "Dongsha Lake / Taihu Ecological Exploration · Environmental Learning · Water-Quality Activities",
      },
      {
        dayZh: "第6天",
        dayEn: "DAY 6",
        themeZh: "展望可持续城市",
        themeEn: "Reflect on Sustainable Cities",
        actZh: "苏州文化遗产探索 · 学习总结与反思 · 离境",
        actEn: "Suzhou Heritage Exploration · Learning Reflection · Departure",
      },
    ],
    envTitleZh: "五大真实世界学习领域",
    envTitleEn: "Five Real-World Learning Environments",
    envs: [
      {
        nameZh: "智慧城市",
        nameEn: "SMART CITIES",
        tagsZh: "城市规划 · 城市发展 · 宜居环境",
        tagsEn: "Urban Planning · City Development · Liveable Environments",
        zhDesc: "探索城市规划、基础设施及城市设计如何影响人们的生活、工作与出行。",
        enDesc:
          "Explore how planning, infrastructure and urban design shape the way people live, work and travel.",
      },
      {
        nameZh: "绿色科技",
        nameEn: "GREEN TECHNOLOGY",
        tagsZh: "电动交通 · 环境创新 · 资源效率",
        tagsEn: "Electric Mobility · Environmental Innovation · Resource Efficiency",
        zhDesc: "了解绿色科技如何提高资源使用效率，并推动可持续发展。",
        enDesc:
          "Discover how green technology can support more efficient resource use and sustainable development.",
      },
      {
        nameZh: "水资源管理",
        nameEn: "WATER MANAGEMENT",
        tagsZh: "智慧水务 · 水质 · 可持续水资源",
        tagsEn: "Smart Water Systems · Water Quality · Sustainable Water Resources",
        zhDesc: "认识水资源管理、水质监测及水资源保护的重要性。",
        enDesc:
          "Investigate the importance of water management, water quality and the protection of water resources.",
      },
      {
        nameZh: "生态与生物多样性",
        nameEn: "ECOLOGY & BIODIVERSITY",
        tagsZh: "湖泊 · 湿地与生态系统 · 生态保护",
        tagsEn: "Lakes · Wetlands and Ecosystems · Ecological Protection",
        zhDesc: "探索自然生态环境，了解保护生态系统对建设可持续社区的重要意义。",
        enDesc:
          "Explore ecological environments and understand why protecting natural systems is important for sustainable communities.",
      },
      {
        nameZh: "可持续发展",
        nameEn: "SUSTAINABLE DEVELOPMENT",
        tagsZh: "环境意识 · 问题解决 · 可持续城市生活",
        tagsEn: "Environmental Awareness · Problem Solving · Sustainable Urban Living",
        zhDesc: "思考科技、城市规划及个人责任如何共同推动更可持续的城市发展。",
        enDesc:
          "Consider how technology, planning and individual responsibility can contribute to more sustainable cities.",
      },
    ],
    closeTitleZh: "不只是学习之旅，更是一次可持续城市探索",
    closeTitleEn: "More Than a Study Tour — A Sustainable Cities Learning Journey",
    closeStepsZh: "学习 · 研究 · 探索 · 反思",
    closeStepsEn: "Learn · Investigate · Explore · Reflect",
    closeMetaZh: "6天5晚｜上海 + 苏州",
    closeMetaEn: "6 DAYS · 5 NIGHTS | SHANGHAI + SUZHOU",
    closeSloganZh: "走进中国，发现绿色解决方案，构想更美好的城市。",
    closeSloganEn: "Come to China. Discover Sustainable Solutions. Imagine Better Cities.",
    closeNoteZh: "企业、机构及生态环境相关参访均须视乎开放安排并最终确认。",
    closeNoteEn:
      "Proposed company, institutional and ecological visits are subject to access and final confirmation.",
    recapZh: "研究可持续发展，探索绿色科技与未来城市。",
    recapEn: "to investigate sustainable development.",
  },
  {
    no: "03",
    brandEn: "STARTUP MAVERICKS",
    brandZh: "创业先锋",
    themeZh: "创新、创业与商业实践",
    themeEn: "Innovation, Entrepreneurship & Business Creation",
    durationZh: "7天6晚 · 杭州 + 深圳",
    durationEn: "7 Days / 6 Nights · Hangzhou + Shenzhen",
    durationShortZh: "7天6晚",
    durationShortEn: "7 Days / 6 Nights",
    taglineZh: "让大胆创意，转化为现实可能。",
    taglineEn: "Turn Bold Ideas into Real-World Possibilities.",
    audienceZh: "适合直通车课程（Integrated Programme）学校及初级学院学生",
    audienceEn:
      "For Students from Integrated Programme (IP) Schools and Junior Colleges",
    tableExploreZh:
      "通过设计思维、创业生态探索、原型设计、商业模式开发及项目路演，将创意转化为实际可行的构想。",
    tableExploreEn:
      "Turn ideas into possibilities through design thinking, start-up exposure, prototyping, business model development and pitching.",
    image: campStartup,
    introTitleZh: "探索创新 · 体验创业 · 将创意转化为机会",
    introTitleEn: "Explore Innovation · Experience Start-ups · Turn Ideas into Opportunities",
    questionZh: "一个简单的想法，如何发展成产品、服务或商业机会？",
    questionEn:
      "How does a simple idea become a product, service or business opportunity?",
    paras: [
      {
        zh: "通过 EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE 四大环节，学生将了解创业者如何识别问题、开发创意、测试解决方案，并向他人展示商业构想。",
        en: "Through EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE, students discover how entrepreneurs identify problems, develop ideas, test solutions and communicate business opportunities.",
      },
      {
        zh: "在杭州与深圳的学习旅程中，学生将探索数码经济、创业生态及创新园区，并通过设计思维、原型设计、商业模式开发和项目路演等实践活动，认识创业的基本过程。",
        en: "Across Hangzhou and Shenzhen, students explore digital business ecosystems, start-up environments and innovation hubs. Practical activities introduce design thinking, prototyping, business model development and pitching.",
      },
      {
        zh: "学生将以团队形式提出创意、分析潜在用户的需求，并通过结构化的创业挑战展示解决方案。",
        en: "Working collaboratively, students will develop ideas, consider potential users and needs, and present proposed solutions through a structured entrepreneurship challenge.",
      },
    ],
    learn: [
      {
        key: "EDUCATE",
        zhTitle: "认识创新与创业",
        enTitle: "Understand Innovation & Entrepreneurship",
        zhTags: "设计思维 · 问题识别 · 商业模式 · 创业思维",
        enTags:
          "Design Thinking · Problem Identification · Business Models · Entrepreneurial Mindset",
        zhDesc: "了解创业者如何发现机会、开发解决方案并创造价值。",
        enDesc:
          "Understand how entrepreneurs identify opportunities, develop solutions and create value.",
      },
      {
        key: "EXPERIENCE",
        zhTitle: "开发与测试创意",
        enTitle: "Develop & Test Ideas",
        zhTags: "创意构思 · 原型设计 · 实践工作坊 · 创业模拟 · 团队协作",
        enTags:
          "Ideation · Prototyping · Practical Workshops · Start-up Simulation · Team Collaboration",
        zhDesc: "通过动手实践及团队任务，将创业思维应用于创意开发与解决方案设计。",
        enDesc:
          "Apply entrepreneurial thinking through hands-on activities, collaborative tasks and the development of proposed solutions.",
      },
      {
        key: "EXPLORE",
        zhTitle: "探索中国创新生态",
        enTitle: "Discover China's Innovation Ecosystems",
        zhTags: "杭州 · 数码经济 · 创业环境 · 深圳 · 电子产业与创新生态",
        enTags:
          "Hangzhou · Digital Economy · Start-up Environments · Shenzhen · Electronics and Innovation Ecosystem",
        zhDesc: "走进相关商业、创业及创新环境，了解创意如何发展并逐步走向市场。",
        enDesc:
          "Explore selected business, start-up and innovation environments to understand how ideas can be developed and commercialised.",
      },
      {
        key: "EXCHANGE",
        zhTitle: "协作与展示创意",
        enTitle: "Collaborate & Present",
        zhTags: "团队合作 · 同伴学习 · 沟通表达 · 项目路演 · 建设性反馈",
        enTags:
          "Teamwork · Peer Learning · Communication · Pitching · Constructive Feedback",
        zhDesc: "与团队成员交流想法、完善方案，并向观众清晰地展示项目构想。",
        enDesc:
          "Work in teams, exchange ideas, refine proposals and present solutions to an audience.",
      },
    ],
    itineraryTitleZh: "七天六晚探索行程",
    itineraryTitleEn: "7-Day / 6-Night Discovery Journey",
    itinerary: [
      {
        dayZh: "第1天",
        dayEn: "DAY 1",
        themeZh: "发现杭州",
        themeEn: "Discover Hangzhou",
        actZh: "抵达杭州 · 认识中国数码经济 · 设计思维入门",
        actEn:
          "Arrival and Orientation · Introduction to China's Digital Economy · Design Thinking Introduction",
      },
      {
        dayZh: "第2天",
        dayEn: "DAY 2",
        themeZh: "探索数码商业",
        themeEn: "Explore Digital Business",
        actZh: "阿里巴巴生态 · 梦想小镇 · 问题识别 · 创意构思与创新",
        actEn:
          "Alibaba Ecosystem · Dream Town · Problem Identification · Ideation and Innovation",
      },
      {
        dayZh: "第3天",
        dayEn: "DAY 3",
        themeZh: "认识创业创新",
        themeEn: "Discover Start-up Innovation",
        actZh: "大学科技园／创业生态 · 原型设计 · 创意测试 · 创新探索",
        actEn:
          "University Science Park / Start-up Ecosystem · Prototyping · Testing Ideas · Innovation Exploration",
      },
      {
        dayZh: "第4天",
        dayEn: "DAY 4",
        themeZh: "前往深圳",
        themeEn: "Connect with Shenzhen",
        actZh: "前往深圳 · 探索华强北电子产业与创新生态 · 科技及产品探索",
        actEn:
          "Travel to Shenzhen · Explore Huaqiangbei's Electronics and Innovation Ecosystem · Technology and Product Exploration",
      },
      {
        dayZh: "第5天",
        dayEn: "DAY 5",
        themeZh: "体验创业实践",
        themeEn: "Experience Entrepreneurship",
        actZh: "创业园区／创客空间 · 商业模式开发 · 创业模拟",
        actEn:
          "Entrepreneurship Hub / Maker Space · Business Model Development · Start-up Simulation",
      },
      {
        dayZh: "第6天",
        dayEn: "DAY 6",
        themeZh: "展示创意与探索创新",
        themeEn: "Present Ideas & Explore Innovation",
        actZh: "最终项目路演 · 创新反思 · 深圳发展环境探索",
        actEn:
          "Final Pitch · Innovation Reflection · Shenzhen Development Exploration",
      },
      {
        dayZh: "第7天",
        dayEn: "DAY 7",
        themeZh: "规划下一步",
        themeEn: "Plan the Next Step",
        actZh: "行动计划 · 学习总结与反思 · 离境",
        actEn: "Action Planning · Learning Reflection · Departure",
      },
    ],
    envTitleZh: "五大真实世界学习领域",
    envTitleEn: "Five Real-World Learning Environments",
    envs: [
      {
        nameZh: "数码经济",
        nameEn: "DIGITAL ECONOMY",
        tagsZh: "数码商业 · 科技生态 · 新商业机会",
        tagsEn: "Digital Business · Technology Ecosystems · New Business Opportunities",
        zhDesc: "了解数码科技与商业模式如何创造新的产品、服务及市场机会。",
        enDesc:
          "Discover how digital technologies and business models create new products, services and market opportunities.",
      },
      {
        nameZh: "创业生态",
        nameEn: "START-UP ECOSYSTEMS",
        tagsZh: "创业发展 · 初创企业 · 创新网络",
        tagsEn: "Entrepreneurship · Start-up Development · Innovation Networks",
        zhDesc: "探索创业者、企业、教育机构及相关支持网络如何共同推动创新。",
        enDesc:
          "Explore how entrepreneurs, businesses, institutions and support networks contribute to innovation.",
      },
      {
        nameZh: "设计思维",
        nameEn: "DESIGN THINKING",
        tagsZh: "观察 · 问题识别 · 创意构思 · 方案开发",
        tagsEn: "Observation · Problem Identification · Ideation · Solution Development",
        zhDesc: "学习如何识别问题、理解用户需求，并提出回应现实挑战的创意方案。",
        enDesc:
          "Learn to identify problems, understand users' needs and develop ideas that respond to real-world challenges.",
      },
      {
        nameZh: "原型设计与测试",
        nameEn: "PROTOTYPING & TESTING",
        tagsZh: "实践实验 · 创意测试 · 方案完善 · 问题解决",
        tagsEn: "Practical Experimentation · Testing Ideas · Refinement · Problem Solving",
        zhDesc: "通过初步原型展示构想、评估方案，并根据反馈进一步完善设计。",
        enDesc:
          "Develop preliminary representations of proposed solutions, evaluate ideas and improve them through feedback.",
      },
      {
        nameZh: "商业模式与项目路演",
        nameEn: "BUSINESS & PITCHING",
        tagsZh: "商业模式 · 创业模拟 · 沟通表达 · 最终展示",
        tagsEn: "Business Models · Start-up Simulation · Communication · Final Presentation",
        zhDesc: "建立基础商业模式，并练习如何清晰、有说服力地呈现商业构想。",
        enDesc:
          "Develop a basic business model and practise presenting ideas clearly and persuasively.",
      },
    ],
    closeTitleZh: "不只是学习之旅，更是一次创新与创业实践",
    closeTitleEn: "More Than a Study Tour — An Innovation & Entrepreneurship Learning Journey",
    closeStepsZh: "观察 · 构思 · 开发 · 测试 · 展示",
    closeStepsEn: "Observe · Ideate · Build · Test · Pitch",
    closeMetaZh: "7天6晚｜杭州 + 深圳",
    closeMetaEn: "7 DAYS · 6 NIGHTS | HANGZHOU + SHENZHEN",
    closeSloganZh: "走进中国，让创意成为可能，培养未来创业思维。",
    closeSloganEn:
      "Come to China. Turn Ideas into Possibilities. Develop an Entrepreneurial Mindset.",
    closeNoteZh:
      "企业、大学、初创企业及创新园区参访均须视乎开放安排并最终确认。工作坊、原型设计及路演活动将根据最终项目安排实施。",
    closeNoteEn:
      "Proposed company, university, start-up and innovation-hub visits are subject to access and final confirmation. Workshop, prototyping and pitching activities will depend on the final programme design.",
    recapZh: "培养创新思维，将创意转化为可探索的商业构想。",
    recapEn: "to develop entrepreneurial thinking.",
  },
  {
    no: "04",
    brandEn: "NEXTGEN GLOBAL LEADERS",
    brandZh: "新世代全球领袖",
    themeZh: "中新合作与全球领导力",
    themeEn: "China–Singapore Cooperation & Global Leadership",
    durationZh: "7天6晚 · 北京",
    durationEn: "7 Days / 6 Nights · Beijing",
    durationShortZh: "7天6晚",
    durationShortEn: "7 Days / 6 Nights",
    taglineZh: "建立跨文化领导力，连接世界与未来。",
    taglineEn: "Build the Confidence to Lead Across Cultures and Borders.",
    audienceZh: "适合学生领袖、学生会成员及初级学院学生",
    audienceEn:
      "For Student Leaders, Student Council Members and Junior College Students",
    tableExploreZh:
      "培养领导力、沟通、谈判及跨文化协作能力，探索国际合作、青年交流与社会服务。",
    tableExploreEn:
      "Develop leadership, negotiation and cross-cultural communication skills while exploring international cooperation, youth engagement and service learning.",
    image: campGlobalLeaders,
    introTitleZh: "探索国际合作 · 培养领导能力 · 建立跨文化联系",
    introTitleEn:
      "Explore International Cooperation · Develop Leadership · Connect Across Cultures",
    questionZh:
      "成为一名具有责任感、国际视野及跨文化沟通能力的青年领袖，需要具备哪些素质？",
    questionEn:
      "What does it take to become a thoughtful, responsible and globally aware young leader?",
    paras: [
      {
        zh: "通过 EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE 四大环节，学生将探索中新合作、全球议题、跨文化沟通及青年领导力的意义。",
        en: "Through EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE, students explore China–Singapore cooperation, global issues, cross-cultural communication and the responsibilities of young leaders.",
      },
      {
        zh: "项目以北京为主要学习地点，结合大学学习机会、领导力工作坊、公众演讲、谈判练习、校园交流、社区服务及文化探索。",
        en: "Based in Beijing, the programme combines university learning opportunities, leadership workshops, public speaking, negotiation, school exchange, community service and cultural exploration.",
      },
      {
        zh: "学生将学习理解不同观点、有效沟通及跨文化协作，并思考如何通过领导力、合作与服务，为学校、社区及更广泛的社会作出贡献。",
        en: "Students are encouraged to consider different perspectives, communicate effectively across cultures and reflect on how leadership, collaboration and service can contribute to their schools, communities and wider society.",
      },
    ],
    learn: [
      {
        key: "EDUCATE",
        zhTitle: "理解全球议题",
        enTitle: "Understand Global Issues",
        zhTags: "国际关系 · 中新合作 · 全球公民意识 · 公民责任",
        enTags:
          "International Relations · China–Singapore Cooperation · Global Citizenship · Civic Awareness",
        zhDesc: "探索相关国际议题，认识国际合作与公民责任的重要性。",
        enDesc:
          "Explore selected global issues and develop a broader understanding of international cooperation and civic responsibility.",
      },
      {
        key: "EXPERIENCE",
        zhTitle: "实践领导能力",
        enTitle: "Practise Leadership",
        zhTags: "公众演讲 · 谈判 · 领导力工作坊 · 全球议题模拟",
        enTags:
          "Public Speaking · Negotiation · Leadership Workshops · Global Issues Simulation",
        zhDesc: "通过情境模拟、实践工作坊及团队活动，培养领导力与沟通能力。",
        enDesc:
          "Build leadership and communication skills through simulations, practical workshops and collaborative activities.",
      },
      {
        key: "EXPLORE",
        zhTitle: "认识机构与文化",
        enTitle: "Discover Institutions & Culture",
        zhTags: "北京 · 大学学习 · 国际事务 · 创新生态 · 文化遗产",
        enTags:
          "Beijing · University Learning · International Affairs · Innovation Ecosystems · Cultural Heritage",
        zhDesc: "通过教育及文化学习机会，了解中国的机构、发展环境与历史文化。",
        enDesc:
          "Discover selected aspects of China's institutions, development and history through educational and cultural learning opportunities.",
      },
      {
        key: "EXCHANGE",
        zhTitle: "建立联系与协作",
        enTitle: "Connect & Collaborate",
        zhTags: "中国校园交流 · 联合社区服务 · 青年对话 · 学生领袖峰会",
        enTags:
          "Chinese School Exchange · Joint Community Service · Youth Dialogue · Student Leaders Summit",
        zhDesc: "与中国学生交流，分享不同观点，并通过青年交流及服务学习探索合作机会。",
        enDesc:
          "Interact with Chinese students, share perspectives and explore opportunities for collaboration through student exchange and service-learning activities.",
      },
    ],
    itineraryTitleZh: "七天六晚探索行程",
    itineraryTitleEn: "7-Day / 6-Night Discovery Journey",
    itinerary: [
      {
        dayZh: "第1天",
        dayEn: "DAY 1",
        themeZh: "发现北京",
        themeEn: "Discover Beijing",
        actZh: "抵达北京 · 领导力主题介绍 · 自我认识与团队建设",
        actEn:
          "Arrival and Orientation · Leadership Introduction · Self-Awareness and Team Building",
      },
      {
        dayZh: "第2天",
        dayEn: "DAY 2",
        themeZh: "探索领导力与全球议题",
        themeEn: "Explore Leadership & Global Issues",
        actZh: "大学学习机会 · 全球议题模拟 · 公众演讲",
        actEn:
          "University Learning Opportunity · Global Issues Simulation · Public Speaking",
      },
      {
        dayZh: "第3天",
        dayEn: "DAY 3",
        themeZh: "与中国学生交流",
        themeEn: "Connect with Chinese Students",
        actZh: "中国学校交流 · 学生互动 · 联合社区服务 · 文化分享",
        actEn:
          "Chinese School Exchange · Student Interaction · Joint Community Service · Cultural Sharing",
      },
      {
        dayZh: "第4天",
        dayEn: "DAY 4",
        themeZh: "认识国际合作",
        themeEn: "Understand International Cooperation",
        actZh: "国际事务专题学习机会 · 创新生态参访 · 谈判工作坊",
        actEn:
          "International Affairs Learning Opportunity · Innovation Ecosystem Visit · Negotiation Workshop",
      },
      {
        dayZh: "第5天",
        dayEn: "DAY 5",
        themeZh: "探索中国历史与文化遗产",
        themeEn: "Discover China's History & Heritage",
        actZh: "文化遗产探索 · 历史景点及相关机构学习 · 领导力反思",
        actEn:
          "Cultural Heritage Exploration · Historical Sites and Institutions · Leadership Reflection",
      },
      {
        dayZh: "第6天",
        dayEn: "DAY 6",
        themeZh: "参与中新学生领袖峰会",
        themeEn: "Participate in the Student Leaders Summit",
        actZh: "中新学生领袖峰会 · 专题展示 · 交流观点 · 服务学习计划",
        actEn:
          "China–Singapore Student Leaders Summit · Presentations · Exchange of Ideas · Service-Learning Plans",
      },
      {
        dayZh: "第7天",
        dayEn: "DAY 7",
        themeZh: "反思与规划未来",
        themeEn: "Reflect & Plan for the Future",
        actZh: "行动计划 · 个人及团队反思 · 离境",
        actEn: "Action Planning · Personal and Group Reflection · Departure",
      },
    ],
    envTitleZh: "五大真实世界学习领域",
    envTitleEn: "Five Real-World Learning Environments",
    envs: [
      {
        nameZh: "全球议题与公民意识",
        nameEn: "GLOBAL ISSUES & CITIZENSHIP",
        tagsZh: "国际关系 · 全球视野 · 公民责任",
        tagsEn: "International Relations · Global Awareness · Civic Responsibility",
        zhDesc: "探索国际议题，并思考不同国家与社区如何共同应对挑战。",
        enDesc:
          "Explore selected international issues and consider how countries and communities respond to shared challenges.",
      },
      {
        nameZh: "领导力与沟通",
        nameEn: "LEADERSHIP & COMMUNICATION",
        tagsZh: "自我认识 · 公众演讲 · 团队合作 · 沟通表达",
        tagsEn: "Self-Awareness · Public Speaking · Teamwork · Communication",
        zhDesc: "提升表达观点、与他人合作及承担责任的信心与能力。",
        enDesc:
          "Develop confidence in communicating ideas, working with others and taking responsibility as a young leader.",
      },
      {
        nameZh: "谈判与协作",
        nameEn: "NEGOTIATION & COLLABORATION",
        tagsZh: "对话 · 问题解决 · 谈判 · 凝聚共识",
        tagsEn: "Dialogue · Problem Solving · Negotiation · Consensus Building",
        zhDesc: "练习建设性沟通，理解不同立场，并探索如何通过协作达成共同目标。",
        enDesc:
          "Practise constructive dialogue, consider different perspectives and explore ways to work towards shared goals.",
      },
      {
        nameZh: "校园与社区交流",
        nameEn: "SCHOOL & COMMUNITY EXCHANGE",
        tagsZh: "中国学生 · 校园生活 · 社区服务 · 跨文化理解",
        tagsEn:
          "Chinese Students · School Life · Community Service · Cross-Cultural Understanding",
        zhDesc: "通过与中国学生互动及参与协作活动，增进相互理解与社会责任意识。",
        enDesc:
          "Learn through interaction with Chinese peers and collaborative activities that encourage mutual understanding and social responsibility.",
      },
      {
        nameZh: "中新合作",
        nameEn: "CHINA–SINGAPORE COOPERATION",
        tagsZh: "双边理解 · 青年参与 · 共同挑战 · 未来协作",
        tagsEn:
          "Bilateral Understanding · Youth Engagement · Shared Challenges · Future Collaboration",
        zhDesc: "加深对中新关系的认识，理解跨文化及跨社区合作的价值。",
        enDesc:
          "Develop a broader understanding of China–Singapore relations and the value of cooperation across cultures and communities.",
      },
    ],
    closeTitleZh: "不只是学习之旅，更是一次全球领导力成长体验",
    closeTitleEn: "More Than a Study Tour — A Global Leadership Learning Journey",
    closeStepsZh: "理解 · 沟通 · 协作 · 领导 · 服务",
    closeStepsEn: "Understand · Communicate · Collaborate · Lead · Serve",
    closeMetaZh: "7天6晚｜北京",
    closeMetaEn: "7 DAYS · 6 NIGHTS | BEIJING",
    closeSloganZh: "走进中国，拓展全球视野，以理解与责任引领未来。",
    closeSloganEn:
      "Come to China. Build Global Perspectives. Lead with Understanding and Purpose.",
    closeNoteZh:
      "大学、学校、国际事务及其他机构相关活动均须视乎开放安排并最终确认。学生领袖峰会及相关活动将根据最终项目安排实施。",
    closeNoteEn:
      "University, school, international affairs and other institutional activities are subject to access and final confirmation. The Student Leaders Summit and associated activities will depend on the final programme arrangements.",
    recapZh: "建立领导力与全球视野，提升跨文化沟通及协作能力。",
    recapEn: "to build leadership and global perspectives.",
  },
  {
    no: "05",
    brandEn: "CHINA CULTURE QUEST",
    brandZh: "中华文化探索之旅",
    themeZh: "语言、文化遗产与生活传统",
    themeEn: "Language, Heritage & Living Traditions",
    durationZh: "7天6晚 · 西安 + 成都",
    durationEn: "7 Days / 6 Nights · Xi'an + Chengdu",
    durationShortZh: "7天6晚",
    durationShortEn: "7 Days / 6 Nights",
    taglineZh: "走出课本，亲身体验鲜活的中华文化。",
    taglineEn: "Experience Chinese Culture Beyond the Textbook.",
    audienceZh: "适合新加坡特选学校（Special Assistant Plan）学生及华文科学生",
    audienceEn:
      "For Students from Singapore Special Assistance Plan (SAP) Schools and Chinese Language Departments",
    tableExploreZh:
      "通过中国历史、唐代文化、传统艺术、地方美食及校园交流，深入体验中华文化与当代中国生活。",
    tableExploreEn:
      "Experience Chinese history, Tang culture, traditional arts, regional food and contemporary life through immersive cultural learning and student exchange.",
    image: campCultureQuest,
    introTitleZh: "探索中华文化 · 体验地方传统 · 通过语言建立联系",
    introTitleEn:
      "Discover Chinese Heritage · Experience Regional Culture · Connect Through Language",
    questionZh: "如何让学生真正走进中华文化，而不仅仅停留在课本知识？",
    questionEn:
      "How can students experience Chinese culture beyond textbooks and the classroom?",
    paras: [
      {
        zh: "通过 EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE 四大环节，学生将深入认识中国历史、传统艺术、地方文化及当代生活，展开沉浸式文化学习。",
        en: "Through EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE, students discover China's history, traditional arts, regional identities and contemporary life through immersive cultural learning.",
      },
      {
        zh: "从西安的古都文化与盛唐风华，到成都的地方传统与特色文化，学生将通过汉服体验、唐诗活动、传统工艺、美食文化、华文实践及校园交流，亲身感受中华文化的多元面貌。",
        en: "From Xi'an's ancient capital heritage and Tang culture to Chengdu's regional traditions, students experience Chinese culture through historical sites, Hanfu, poetry, traditional crafts, food culture, Chinese-language activities and school exchange.",
      },
      {
        zh: "项目鼓励学生在真实情境中运用华文，提升跨文化沟通能力，并加深对中华文化的欣赏与理解。",
        en: "The programme encourages students to use Chinese in meaningful real-world situations while developing cross-cultural communication skills and a deeper appreciation of Chinese culture.",
      },
    ],
    learn: [
      {
        key: "EDUCATE",
        zhTitle: "认识中国历史与文化",
        enTitle: "Understand Chinese History & Culture",
        zhTags: "中国历史 · 唐代文化 · 古典诗词 · 传统艺术 · 地方文化",
        enTags:
          "Chinese History · Tang Culture · Classical Poetry · Traditional Arts · Regional Culture",
        zhDesc: "通过引导式学习与文化解读，认识中国历史、文化遗产及不同地区的传统特色。",
        enDesc:
          "Explore China's history, cultural heritage and regional traditions through guided learning and cultural interpretation.",
      },
      {
        key: "EXPERIENCE",
        zhTitle: "亲身参与文化活动",
        enTitle: "Participate in Cultural Activities",
        zhTags: "汉服体验 · 文物修复 · 传统工艺 · 川菜文化 · 华文实践",
        enTags:
          "Hanfu · Cultural Heritage Restoration · Traditional Crafts · Sichuan Cuisine · Chinese-Language Tasks",
        zhDesc: "通过多元文化活动，亲身体验传统技艺、语言应用及日常文化生活。",
        enDesc:
          "Take part in cultural activities that bring traditional practices, language and everyday life to life.",
      },
      {
        key: "EXPLORE",
        zhTitle: "探索西安与成都",
        enTitle: "Discover Xi'an & Chengdu",
        zhTags: "历史古迹 · 文化机构 · 地方美食 · 传统艺术 · 当代城市生活",
        enTags:
          "Historical Sites · Cultural Institutions · Local Food Culture · Traditional Arts · Contemporary City Life",
        zhDesc: "认识西安与成都各自独特的历史背景、文化环境及地方特色。",
        enDesc:
          "Discover the distinctive histories, cultural environments and regional identities of Xi'an and Chengdu.",
      },
      {
        key: "EXCHANGE",
        zhTitle: "通过语言与文化交流",
        enTitle: "Connect Through Language & Culture",
        zhTags: "中国校园交流 · 学生互动 · 文化分享 · 联合文化演出",
        enTags:
          "Chinese School Exchange · Student Interaction · Cultural Sharing · Joint Cultural Performance",
        zhDesc: "在实际情境中运用华文，与中国学生互动，并通过协作活动分享彼此的文化体验。",
        enDesc:
          "Practise Chinese-language communication, interact with Chinese peers and share cultural experiences through collaborative activities.",
      },
    ],
    itineraryTitleZh: "七天六晚探索行程",
    itineraryTitleEn: "7-Day / 6-Night Discovery Journey",
    itinerary: [
      {
        dayZh: "第1天",
        dayEn: "DAY 1",
        themeZh: "发现西安与唐代文化",
        themeEn: "Discover Xi'an & Tang Culture",
        actZh: "抵达西安 · 认识长安与唐代文化 · 汉服体验",
        actEn:
          "Arrival in Xi'an · Introduction to Chang'an and Tang Culture · Hanfu Experience",
      },
      {
        dayZh: "第2天",
        dayEn: "DAY 2",
        themeZh: "探索文化遗产",
        themeEn: "Explore Cultural Heritage",
        actZh: "文物修复工作坊 · 秦始皇兵马俑博物馆 · 历史与文化学习",
        actEn:
          "Cultural Heritage Restoration Workshop · Terracotta Army Museum · Historical and Cultural Learning",
      },
      {
        dayZh: "第3天",
        dayEn: "DAY 3",
        themeZh: "体验华文与传统文化",
        themeEn: "Experience Chinese Language & Traditions",
        actZh: "关中书院 · 古城墙 · 唐诗活动 · 华文文化任务",
        actEn:
          "Guanzhong Academy · Ancient City Wall · Tang Poetry Activities · Chinese-Language Cultural Tasks",
      },
      {
        dayZh: "第4天",
        dayEn: "DAY 4",
        themeZh: "从西安前往成都",
        themeEn: "Travel from Xi'an to Chengdu",
        actZh: "高铁旅程 · 认识成都 · 四川饮食文化与烹饪体验",
        actEn:
          "High-Speed Train Journey · Introduction to Chengdu · Sichuan Cuisine and Cooking Experience",
      },
      {
        dayZh: "第5天",
        dayEn: "DAY 5",
        themeZh: "探索成都文化与自然",
        themeEn: "Discover Chengdu's Culture & Nature",
        actZh: "成都博物馆／皮影戏 · 大熊猫保护 · 传统工艺工作坊",
        actEn:
          "Chengdu Museum / Shadow Puppetry · Giant Panda Conservation · Traditional Craft Workshop",
      },
      {
        dayZh: "第6天",
        dayEn: "DAY 6",
        themeZh: "通过文化交流建立联系",
        themeEn: "Connect Through Cultural Exchange",
        actZh: "中国学校交流 · 学生互动 · 中新联合文化演出 · 总结活动",
        actEn:
          "Chinese School Exchange · Student Interaction · Joint China–Singapore Cultural Performance · Closing Activities",
      },
      {
        dayZh: "第7天",
        dayEn: "DAY 7",
        themeZh: "回顾文化探索之旅",
        themeEn: "Reflect on the Cultural Journey",
        actZh: "文化反思 · 学习回顾 · 离境",
        actEn: "Cultural Reflection · Learning Review · Departure",
      },
    ],
    envTitleZh: "五大真实世界学习领域",
    envTitleEn: "Five Real-World Learning Environments",
    envs: [
      {
        nameZh: "中国历史与文化遗产",
        nameEn: "CHINESE HISTORY & HERITAGE",
        tagsZh: "历史古迹 · 古都文化 · 文化保护",
        tagsEn: "Historical Sites · Ancient Capital Culture · Cultural Preservation",
        zhDesc: "探索中国历史遗产，了解保护历史文化景点及文物的重要性。",
        enDesc:
          "Explore China's historical legacy and understand the importance of protecting cultural sites and artefacts.",
      },
      {
        nameZh: "唐代文化与古典诗词",
        nameEn: "TANG CULTURE & CLASSICAL POETRY",
        tagsZh: "唐代文化 · 汉服 · 古典诗词 · 文化解读",
        tagsEn: "Tang Dynasty · Hanfu · Classical Poetry · Cultural Interpretation",
        zhDesc: "通过传统服饰、诗词及历史场景相关活动，认识唐代文化与文学传统。",
        enDesc:
          "Discover Tang-era culture through traditional dress, poetry and activities that connect literature with historical settings.",
      },
      {
        nameZh: "传统艺术与工艺",
        nameEn: "TRADITIONAL ARTS & CRAFTS",
        tagsZh: "文化遗产工作坊 · 皮影戏 · 传统工艺",
        tagsEn:
          "Cultural Heritage Workshops · Shadow Puppetry · Traditional Craft Techniques",
        zhDesc: "体验传统艺术形式，了解文化技艺及其传承与保护的意义。",
        enDesc:
          "Experience selected traditional art forms and learn about the skills and practices involved in preserving cultural traditions.",
      },
      {
        nameZh: "地方文化与饮食",
        nameEn: "REGIONAL CULTURE & FOOD",
        tagsZh: "西安 · 成都 · 地方传统 · 四川美食 · 日常生活",
        tagsEn:
          "Xi'an · Chengdu · Regional Traditions · Sichuan Cuisine · Everyday Life",
        zhDesc: "通过地方美食、文化活动及生活体验，认识两座中国城市不同的地域文化。",
        enDesc:
          "Explore regional identities through local food, cultural activities and everyday experiences in two distinctive Chinese cities.",
      },
      {
        nameZh: "华文应用与青年交流",
        nameEn: "CHINESE LANGUAGE & YOUTH EXCHANGE",
        tagsZh: "实用华文 · 文化沟通 · 校园交流 · 联合演出",
        tagsEn:
          "Practical Chinese · Cultural Communication · School Exchange · Joint Performance",
        zhDesc: "在真实情境中运用华文，并通过与中国学生交流，培养跨文化理解与沟通能力。",
        enDesc:
          "Apply Chinese-language skills in real-life contexts and build cross-cultural understanding through interaction with Chinese students.",
      },
    ],
    closeTitleZh: "不只是学习之旅，更是一次中华文化沉浸体验",
    closeTitleEn: "More Than a Study Tour — A Chinese Cultural Immersion Journey",
    closeStepsZh: "发现 · 体验 · 沟通 · 分享 · 反思",
    closeStepsEn: "Discover · Experience · Communicate · Share · Reflect",
    closeMetaZh: "7天6晚｜西安 + 成都",
    closeMetaEn: "7 DAYS · 6 NIGHTS | XI'AN + CHENGDU",
    closeSloganZh: "走进中国，体验鲜活文化，通过华文与文化建立联系。",
    closeSloganEn:
      "Come to China. Experience Living Heritage. Connect Through Chinese Language and Culture.",
    closeNoteZh:
      "文化、学校及机构相关活动均须视乎开放安排、接待条件及最终确认情况而定。具体演出、工作坊及文化遗产活动可能根据实际安排作出调整。",
    closeNoteEn:
      "All cultural, school and institutional activities are subject to availability, access requirements and final confirmation. Specific performances, workshops and heritage activities may be adjusted according to operational arrangements.",
    recapZh: "体验华文、文化遗产与生活传统，深入认识中华文化。",
    recapEn:
      "to experience Chinese language, heritage and living traditions.",
  },
];
</script>

<style scoped>
.cu-page {
  --cu-navy: #0b1f3a;
  --cu-navy-2: #122b4e;
  --cu-red: #c8102e;
  --cu-gold: #d9a441;
  --cu-ink: #1c2733;
  --cu-muted: #5c6b7a;
  --cu-line: #e3e8ee;
  --cu-bg: #f7f9fb;
  color: var(--cu-ink);
  background: #fff;
  font-family: inherit;
}

.cu-shell {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

.cu-label {
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--cu-red);
  font-weight: 700;
  margin-bottom: 14px;
}

.cu-h2 {
  font-size: clamp(24px, 3.4vw, 38px);
  line-height: 1.25;
  margin: 0 0 22px;
  color: var(--cu-navy);
  letter-spacing: 0.01em;
}

/* Hero */
.cu-hero {
  background: linear-gradient(135deg, #0b1f3a 0%, #12294c 55%, #1a3560 100%);
  color: #fff;
  overflow: hidden;
}
.cu-hero__grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 48px;
  align-items: center;
  padding-top: 72px;
  padding-bottom: 72px;
}
.cu-hero__meta {
  font-size: 12px;
  letter-spacing: 0.3em;
  color: rgba(255, 255, 255, 0.55);
  margin: 0 0 14px;
}
.cu-hero__eyebrow {
  display: inline-block;
  font-size: 13px;
  letter-spacing: 0.24em;
  color: var(--cu-gold);
  border: 1px solid rgba(217, 164, 65, 0.45);
  border-radius: 999px;
  padding: 6px 16px;
  margin: 0 0 22px;
}
.cu-hero h1 {
  margin: 0 0 18px;
  font-size: clamp(40px, 6vw, 68px);
  line-height: 1.02;
  letter-spacing: 0.02em;
}
.cu-hero h1 span {
  color: var(--cu-gold);
}
.cu-hero h1 em {
  display: block;
  font-style: normal;
  font-size: clamp(18px, 2.4vw, 26px);
  letter-spacing: 0.32em;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 14px;
}
.cu-hero__sub {
  font-size: clamp(15px, 1.6vw, 19px);
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 10px;
}
.cu-hero__tagline {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.72);
  margin: 0 0 26px;
}
.cu-hero__badges span {
  display: inline-block;
  font-size: 13px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;
  padding: 10px 16px;
  max-width: 560px;
}
.cu-hero__visual img {
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
  display: block;
}

/* 引言 */
.cu-intro {
  padding: 84px 0 70px;
  background: #fff;
}
.cu-intro__paras {
  max-width: 860px;
  display: grid;
  gap: 16px;
}
.cu-intro__paras p {
  margin: 0;
  font-size: 16px;
  line-height: 1.9;
  color: var(--cu-ink);
}

/* 主题表 */
.cu-themes {
  padding: 70px 0;
  background: var(--cu-bg);
}
.cu-table-wrap {
  overflow-x: auto;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(11, 31, 58, 0.08);
  background: #fff;
}
.cu-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 760px;
}
.cu-table th,
.cu-table td {
  padding: 16px 18px;
  text-align: left;
  font-size: 14px;
  line-height: 1.7;
  border-bottom: 1px solid var(--cu-line);
  vertical-align: top;
}
.cu-table thead th {
  background: var(--cu-navy);
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;
}
.cu-table tbody tr:last-child td {
  border-bottom: none;
}
.cu-table__no {
  font-weight: 800;
  color: var(--cu-red);
  white-space: nowrap;
}
.cu-table__brand {
  display: block;
  color: var(--cu-navy);
}
.cu-table__brandzh {
  display: block;
  font-size: 12.5px;
  color: var(--cu-muted);
  margin-top: 2px;
}
.cu-table__dur {
  white-space: nowrap;
  font-weight: 600;
}

/* 4E */
.cu-foure {
  padding: 70px 0;
  background: #fff;
}
.cu-foure__sub {
  text-align: center;
  letter-spacing: 0.3em;
  font-weight: 700;
  color: var(--cu-navy);
  margin: -6px 0 30px;
  font-size: 15px;
}
.cu-grid {
  display: grid;
  gap: 18px;
}
.cu-grid--4 {
  grid-template-columns: repeat(4, 1fr);
}
.cu-grid--3 {
  grid-template-columns: repeat(3, 1fr);
}
.cu-grid--2 {
  grid-template-columns: repeat(2, 1fr);
}
.cu-card {
  background: #fff;
  border: 1px solid var(--cu-line);
  border-radius: 16px;
  padding: 22px 22px 20px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.cu-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(11, 31, 58, 0.1);
}
.cu-card--fourE {
  background: linear-gradient(180deg, #fff 0%, var(--cu-bg) 100%);
}
.cu-card h3 {
  margin: 0 0 10px;
  font-size: 16.5px;
  color: var(--cu-navy);
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}
.cu-card__key {
  color: var(--cu-red);
  font-weight: 800;
  letter-spacing: 0.06em;
}
.cu-card__tags {
  margin: 0 0 8px;
  font-size: 12.5px;
  letter-spacing: 0.02em;
  color: var(--cu-gold);
  font-weight: 600;
}
.cu-card__desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.8;
  color: var(--cu-muted);
}

/* 真实中国 */
.cu-real {
  padding: 70px 0 56px;
  background: var(--cu-bg);
}
.cu-note {
  margin: 26px 0 0;
  font-size: 13px;
  line-height: 1.8;
  color: var(--cu-muted);
  font-style: italic;
}

/* 旅程横幅 */
.cu-journey {
  padding: 64px 0;
  background: linear-gradient(120deg, var(--cu-red) 0%, #a30d24 100%);
  color: #fff;
  text-align: center;
}
.cu-journey h2 {
  margin: 0 0 18px;
  font-size: clamp(22px, 3vw, 32px);
}
.cu-journey__path {
  font-size: clamp(14px, 1.8vw, 18px);
  font-weight: 700;
  letter-spacing: 0.06em;
  margin: 0 0 10px;
}
.cu-journey__steps {
  font-size: 15px;
  opacity: 0.92;
  margin: 0 0 8px;
}
.cu-journey__meta {
  font-size: 13px;
  letter-spacing: 0.18em;
  opacity: 0.85;
  margin: 0 0 26px;
}
.cu-journey__brand {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: 0.12em;
  margin: 0 0 6px;
}
.cu-journey__slogan {
  font-size: 14px;
  opacity: 0.85;
  margin: 0;
}

/* 营队 */
.cu-camp {
  padding: 80px 0;
  background: #fff;
}
.cu-camp--alt {
  background: var(--cu-bg);
}
.cu-camp__head {
  margin-bottom: 30px;
}
.cu-camp__brand {
  margin: 0;
  font-size: clamp(28px, 4vw, 44px);
  color: var(--cu-navy);
  letter-spacing: 0.03em;
  line-height: 1.1;
}
.cu-camp__brandzh {
  margin: 6px 0 0;
  font-size: clamp(17px, 2vw, 22px);
  color: var(--cu-red);
  font-weight: 700;
  letter-spacing: 0.2em;
}
.cu-camp__theme {
  margin: 14px 0 0;
  font-size: 15.5px;
  color: var(--cu-ink);
  font-weight: 600;
}
.cu-camp__duration {
  margin: 4px 0 0;
  font-size: 14px;
  color: var(--cu-muted);
  letter-spacing: 0.04em;
}
.cu-camp__tagline {
  margin: 14px 0 0;
  font-size: 17px;
  color: var(--cu-navy);
  font-weight: 700;
}
.cu-camp__audience {
  margin: 6px 0 0;
  font-size: 13.5px;
  color: var(--cu-muted);
}
.cu-camp__figure {
  margin: 0 0 34px;
}
.cu-camp__figure img {
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 22px 50px rgba(11, 31, 58, 0.16);
  display: block;
}
.cu-camp__intro {
  max-width: 860px;
  margin-bottom: 40px;
}
.cu-camp__intro h3 {
  font-size: clamp(19px, 2.2vw, 24px);
  color: var(--cu-navy);
  margin: 0 0 12px;
  line-height: 1.45;
}
.cu-camp__question {
  font-size: 16.5px;
  font-weight: 700;
  color: var(--cu-red);
  margin: 0 0 14px;
}
.cu-camp__intro p {
  margin: 0 0 12px;
  font-size: 15.5px;
  line-height: 1.9;
  color: var(--cu-ink);
}
.cu-camp__block {
  margin-bottom: 44px;
}
.cu-camp__blocktitle {
  font-size: clamp(18px, 2vw, 22px);
  color: var(--cu-navy);
  margin: 0 0 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.cu-tick {
  color: var(--cu-gold);
  font-size: 15px;
}
.cu-table--itin .cu-th-day {
  width: 90px;
}
.cu-itin__theme {
  font-weight: 700;
  color: var(--cu-navy);
  min-width: 150px;
}

/* 学习领域列表 */
.cu-envs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}
.cu-env {
  background: #fff;
  border: 1px solid var(--cu-line);
  border-left: 4px solid var(--cu-red);
  border-radius: 12px;
  padding: 16px 20px;
}
.cu-camp--alt .cu-env {
  background: #fff;
}
.cu-env h5 {
  margin: 0 0 6px;
  font-size: 15.5px;
  color: var(--cu-navy);
}
.cu-env__no {
  color: var(--cu-red);
  font-weight: 800;
  margin-right: 4px;
}

/* 营队结尾 */
.cu-camp__closing {
  background: var(--cu-navy);
  color: #fff;
  border-radius: 18px;
  padding: 34px 36px;
  text-align: center;
}
.cu-camp__closing h4 {
  margin: 0 0 12px;
  font-size: clamp(18px, 2.2vw, 24px);
}
.cu-camp__steps {
  margin: 0 0 6px;
  font-size: 14.5px;
  letter-spacing: 0.08em;
  color: var(--cu-gold);
  font-weight: 700;
}
.cu-camp__meta {
  margin: 0 0 18px;
  font-size: 13px;
  letter-spacing: 0.16em;
  opacity: 0.85;
}
.cu-camp__closebrand {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.06em;
}
.cu-camp__closeslogan {
  margin: 0 0 14px;
  font-size: 14.5px;
  opacity: 0.9;
}
.cu-note--dark {
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0;
}

/* 结语 */
.cu-outro {
  padding: 84px 0 72px;
  background: linear-gradient(180deg, #0b1f3a 0%, #122b4e 100%);
  color: #fff;
}
.cu-outro .cu-label {
  color: var(--cu-gold);
}
.cu-outro .cu-h2 {
  color: #fff;
}
.cu-outro__sub {
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 700;
  color: var(--cu-gold);
  margin: -8px 0 14px;
}
.cu-outro__lead {
  max-width: 860px;
  font-size: 15.5px;
  line-height: 1.9;
  opacity: 0.9;
  margin: 0 0 30px;
}
.cu-outro__list {
  display: grid;
  gap: 12px;
  margin-bottom: 34px;
}
.cu-outro__list p {
  margin: 0;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  font-size: 14.5px;
  line-height: 1.7;
}
.cu-outro__list strong {
  display: block;
  color: var(--cu-gold);
  letter-spacing: 0.04em;
}
.cu-outro__slogan {
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 700;
  margin: 18px 0 10px;
}
.cu-outro__brand {
  font-size: clamp(26px, 3.4vw, 36px);
  font-weight: 800;
  letter-spacing: 0.14em;
  margin: 6px 0 4px;
}
.cu-outro__series {
  font-size: 14px;
  letter-spacing: 0.2em;
  opacity: 0.85;
  margin: 0 0 8px;
}
.cu-outro__host {
  font-size: 14.5px;
  color: var(--cu-gold);
  font-weight: 700;
  margin: 0 0 18px;
}
.cu-outro .cu-note {
  color: rgba(255, 255, 255, 0.55);
}

/* 响应式 */
@media (max-width: 1024px) {
  .cu-grid--4 {
    grid-template-columns: repeat(2, 1fr);
  }
  .cu-grid--3 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 760px) {
  .cu-hero__grid {
    grid-template-columns: 1fr;
    padding-top: 52px;
    padding-bottom: 52px;
    gap: 32px;
  }
  .cu-grid--4,
  .cu-grid--3,
  .cu-grid--2 {
    grid-template-columns: 1fr;
  }
  .cu-camp__closing {
    padding: 26px 20px;
  }
  .cu-intro,
  .cu-themes,
  .cu-foure,
  .cu-real,
  .cu-camp,
  .cu-outro {
    padding-top: 56px;
    padding-bottom: 56px;
  }
}
</style>
