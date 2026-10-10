<!-- 新加坡未来探索者系列初中项目宣传册 -->
<template>
  <div class="junior-page">
    <section class="junior-hero">
      <img class="junior-hero__image" :src="heroImage" alt="" />
      <div class="junior-shell junior-hero__content">
        <p class="junior-hero__eyebrow">APIMTC / 2025-26</p>
        <p class="junior-hero__meta">{{ tx('JUNIOR HIGH / SECONDARY | AGES 13-15', '初中 / 中学生｜13-15 岁') }}</p>
        <div class="junior-hero__copy">
          <span class="junior-chip">{{ tx('JUNIOR HIGH PROGRAMME', '初中项目') }}</span>
          <h1>{{ tx('Singapore Future', '新加坡未来') }} <em>{{ tx('Explorers', '探索者系列') }}</em></h1>
          <p>{{ tx('SIX THEMES · 6 DAYS / 5 NIGHTS OF IMMERSIVE LEARNING', '六大主题 · 6 天 5 夜沉浸式学习之旅') }}</p>
          <small>Explore Singapore · Discover the World · Imagine the Future</small>
          <div class="hero-programme-actions">
            <router-link class="hero-programme-link" to="/singapore-explorers">{{ tx('Primary School Programmes', '小学项目') }}</router-link>
            <router-link class="hero-programme-link" to="/singapore-future-leaders-senior-high">{{ tx('Senior High School Programmes', '高中项目') }}</router-link>
          </div>
        </div>
        <a class="junior-hero__jump" href="#themes">06 <span>{{ tx('THEMES', '主题') }}</span></a>
      </div>
    </section>

    <main>
      <section class="junior-intro junior-shell">
        <div>
          <p class="junior-index">00 / {{ tx('INTRODUCTION', '项目介绍') }}</p>
          <h2>{{ tx('More Than a Trip -', '不只是一次旅行，') }}<br /><em>{{ tx('An Exploration of the Real World', '而是一场真实世界的探索之旅') }}</em></h2>
        </div>
        <div class="junior-intro__copy">
          <p>{{ tx('A 6-day, 5-night themed educational experience in Singapore, specially designed for international and overseas junior high / secondary school students.', '一个为国际及海外初中学生特别设计的 6 天 5 夜主题式教育体验。') }}</p>
          <p>{{ tx('Through Educate · Experience · Explore · Exchange, students learn through real-world experiences across science, technology, health, space, sustainability, industry, AI and the natural world.', '通过 Educate · Experience · Explore · Exchange 学习 · 体验 · 探索 · 交流，学生走出课本，走进真实的新加坡，在科学、科技、健康、太空、可持续发展、工业、人工智能与自然科学等领域展开探索。') }}</p>
        </div>
      </section>

      <section id="themes" class="junior-themes">
        <div class="junior-shell">
          <div class="junior-section-heading">
            <div><p class="junior-index">01 / {{ tx('SIX THEMES', '六大主题') }}</p><h2>{{ tx('Six future exploration themes', '六大未来探索主题') }}</h2></div>
            <p>{{ tx('A complete view of every theme, learning area and discovery focus.', '一览六大主题、学习领域与学生将探索的内容。') }}</p>
          </div>
          <div class="theme-grid">
            <a v-for="(theme, index) in themes" :key="theme.id" :href="`#${theme.id}`" class="theme-card">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <div><i class="theme-card__icon"><svg class="junior-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="themeIcons[theme.id]" /></i><strong>{{ tx(theme.en.title, theme.zh.title) }}</strong><small>{{ tx(theme.en.area, theme.zh.area) }}</small><p>{{ tx(theme.en.explore, theme.zh.explore) }}</p></div>
              <b aria-hidden="true">→</b>
            </a>
          </div>
        </div>
      </section>

      <section class="junior-four-es junior-shell">
        <div class="junior-four-es__heading"><p class="junior-index">02 / 4Es</p><h2>{{ tx('Every Theme Includes the 4Es Learning Experience', '每个主题都融入 4Es 学习体验') }}</h2><p>EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE</p></div>
        <div class="junior-four-es__grid">
          <div v-for="item in overviewEs" :key="item.mark"><b>{{ item.mark }}</b><em>{{ item.es }}</em><strong v-if="item.en.name">{{ tx(item.en.name, item.zh.name) }}</strong><span>{{ tx(item.en.detail, item.zh.detail) }}</span></div>
        </div>
      </section>

      <section class="junior-real"><div class="junior-shell"><p class="junior-index">03 / REAL-WORLD LEARNING</p><h2>{{ tx('Real Singapore · Real-World Learning', '真实新加坡 · 真实世界学习') }}</h2><div class="junior-real__grid"><div v-for="item in realLearning" :key="item.en.title"><strong>{{ tx(item.en.title, item.zh.title) }}</strong><p>{{ tx(item.en.detail, item.zh.detail) }}</p></div></div></div></section>

      <article v-for="(theme, index) in themes" :id="theme.id" :key="theme.id" class="junior-detail" :class="`junior-detail--${index + 1}`">
        <div class="junior-shell">
          <div class="junior-detail__top"><span>{{ String(index + 1).padStart(2, '0') }} / 06</span><span>{{ tx('SINGAPORE FUTURE EXPLORERS', '新加坡未来探索系列') }}</span></div>
          <header class="junior-detail__header"><p><svg class="junior-svg junior-svg--lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="themeIcons[theme.id]" /><span>{{ tx(`JUNIOR HIGH / SECONDARY SCHOOL #${index + 1}`, `初中 / 中学 #${index + 1}`) }}</span></p><h2>{{ tx(theme.en.title, theme.zh.title) }}</h2><strong>{{ tx(theme.en.category, theme.zh.category) }} · {{ tx('6 Days / 5 Nights', '6 天 5 夜') }}</strong><span>{{ tx(theme.en.tagline, theme.zh.tagline) }}</span><small>{{ tx('Junior High / Secondary | Ages 13-15', '初中 / 中学生｜13-15 岁') }}</small></header>
          <img class="junior-detail__image" :src="themeImages[index]" :alt="tx(theme.en.title, theme.zh.title)" />
          <div class="junior-detail__lead"><strong>{{ tx(theme.en.lead, theme.zh.lead) }}</strong><p>{{ tx(theme.en.intro, theme.zh.intro) }}</p></div>
          <section class="junior-detail__section"><p class="junior-index">04 / 4Es LEARNING EXPERIENCE</p><h3>4Es {{ tx('Learning Experience', '学习体验') }}</h3><div class="detail-es"><div v-for="item in theme.es" :key="item.key"><strong>{{ item.key }} <i>|</i> {{ tx(item.en.action, item.zh.action) }}</strong><span>{{ tx(item.en.detail, item.zh.detail) }}</span></div></div></section>
          <section class="junior-detail__section"><p class="junior-index">05 / 6 DAYS / 5 NIGHTS</p><h3>{{ tx('6-Day / 5-Night Discovery Journey', '6 天 5 夜探索之旅') }}</h3><div class="journey-table"><div class="journey-table__head"><span>Day</span><span>{{ tx('Exploration Theme', '探索主题') }}</span><span>{{ tx('Highlights', '主要体验') }}</span></div><div v-for="day in theme.days" :key="day.day"><b>{{ day.day }}</b><strong>{{ tx(day.en.theme, day.zh.theme) }}</strong><span>{{ tx(day.en.highlight, day.zh.highlight) }}</span></div></div></section>
          <section class="junior-detail__section"><p class="junior-index">06 / LEARNING ENVIRONMENTS</p><h3 class="junior-detail__env-title"><svg class="junior-svg junior-svg--lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="themeIcons[theme.id]" />{{ tx('Five Real-World Learning Environments', '五大真实学习环境') }}</h3><div class="learning-grid"><p v-for="place in theme.environments" :key="place.en.title"><strong>{{ tx(place.en.title, place.zh.title) }}</strong><span>{{ tx(place.en.detail, place.zh.detail) }}</span></p></div></section>
          <footer class="junior-detail__footer"><strong>{{ tx('More Than a Trip - A Real-World Learning Journey', '不只是一次旅行 · 一场真实世界的学习之旅') }}</strong><span>{{ tx(theme.en.close, theme.zh.close) }}</span><small>{{ tx('6 DAYS · 5 NIGHTS | JUNIOR HIGH / SECONDARY | AGES 13-15', '6 天 5 夜｜初中 / 中学生｜13-15 岁') }}</small></footer>
        </div>
      </article>

      <section class="junior-summary">
        <div class="junior-shell">
          <h2 class="junior-summary__title"><span class="junior-summary__spark" aria-hidden="true">✨</span>{{ tx('Six Themes. One Journey into the Future.', '六大主题 · 一场通往未来的学习之旅') }}</h2>
          <p class="junior-summary__chain">{{ tx('LIFE → SPACE → CITY → INDUSTRY → PLANET → AI', '生命 → 太空 → 城市 → 工业 → 地球 → AI') }}</p>
          <p class="junior-summary__es">{{ tx('Learn · Experience · Explore · Exchange', '学习 · 体验 · 探索 · 交流') }}</p>
          <p class="junior-summary__meta">{{ tx('6 DAYS · 5 NIGHTS | JUNIOR HIGH / SECONDARY | AGES 13–16', '6 天 5 夜 | 初中 / 中学生 | 13–16 岁') }}</p>
          <p class="junior-summary__close">{{ tx('Come to Singapore. Explore the Future.', '来新加坡，探索未来。') }}</p>
          <p v-if="!isEn" class="junior-summary__close-en">Come to Singapore. Explore the Future.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import heroImage from '@/assets/junior-images/hero-marina.webp'
import image01 from '@/assets/junior-images/theme-biomedical.webp'
import image02 from '@/assets/junior-images/theme-aviation.webp'
import image03 from '@/assets/junior-images/theme-sustainable.webp'
import image04 from '@/assets/junior-images/theme-industry.webp'
import image05 from '@/assets/junior-images/theme-ocean.webp'
import image06 from '@/assets/junior-images/theme-ai.webp'

const { lang } = useI18n()
const isEn = computed(() => lang.value === 'en')
const tx = (en: string, zh: string) => isEn.value ? en : zh
const themeImages = [image01, image02, image03, image04, image05, image06]
/* 六大主题矢量图标（线性风格，继承 accent 颜色） */
const themeIcons: Record<string, string> = {
  'young-biomedical-scientists': '<path d="M8 3c0 4.5 8 4.5 8 9s-8 4.5-8 9"/><path d="M16 3c0 4.5-8 4.5-8 9s8 4.5 8 9"/><path d="M9.2 6.6h5.6M9.2 17.4h5.6M8.3 12h7.4"/>',
  'space-aviation-future-mobility': '<path d="M12 2.5c2.8 1.9 4 5.2 4 8.2l-1.3 5.8H9.3L8 10.7c0-3 1.2-6.3 4-8.2z"/><circle cx="12" cy="9" r="1.7"/><path d="M8.2 12.5 5.6 16.4l3-.5M15.8 12.5l2.6 3.9-3-.5M10.3 19.2c.5.9 1 1.5 1.7 2 .7-.5 1.2-1.1 1.7-2"/>',
  'smart-sustainable-singapore': '<path d="M5.5 19.5C5.5 10 12.5 4.5 20 4.5c0 8.5-4.5 15-13 15h-1.5z"/><path d="M5.5 19.5c3-5.5 7-9.5 11-11.5"/>',
  'industry-4-singapore': '<rect x="5" y="8.5" width="14" height="10" rx="2"/><path d="M12 8.5V5.9"/><circle cx="12" cy="4.3" r="1.3"/><circle cx="9.3" cy="12.6" r="1.1"/><circle cx="14.7" cy="12.6" r="1.1"/><path d="M9.5 15.9h5M3 12.5v2.5M21 12.5V15"/>',
  'earth-ocean-climate': '<circle cx="12" cy="12" r="8.8"/><path d="M3.2 12h17.6"/><path d="M12 3.2c2.8 2.4 2.8 15.2 0 17.6M12 3.2c-2.8 2.4-2.8 15.2 0 17.6"/>',
  'ai-robotics-smart-nation': '<rect x="7" y="7" width="10" height="10" rx="2"/><rect x="10.4" y="10.4" width="3.2" height="3.2" rx=".6"/><path d="M9.5 7V4.2M14.5 7V4.2M9.5 19.8V17M14.5 19.8V17M7 9.5H4.2M7 14.5H4.2M19.8 9.5H17M19.8 14.5H17"/>',
}
const pair = (action: string, detail: string) => ({ action, detail })
const entry = (enTitle: string, enDetail: string, zhTitle: string, zhDetail: string) => ({ en: { title: enTitle, detail: enDetail }, zh: { title: zhTitle, detail: zhDetail } })
const day = (day: string, enTheme: string, enHighlight: string, zhTheme: string, zhHighlight: string) => ({ day, en: { theme: enTheme, highlight: enHighlight }, zh: { theme: zhTheme, highlight: zhHighlight } })
const overviewEs = [
  { mark: '01', es: 'Educate', en: { name: '', detail: 'STEM · Science · Technology · Future Knowledge' }, zh: { name: '', detail: 'STEM · 科学 · 科技 · 未来知识' } },
  { mark: '02', es: 'Explore', en: { name: '', detail: 'Singapore · Nature · Technology · Industries · Communities' }, zh: { name: '', detail: '新加坡 · 自然 · 科技 · 产业 · 社区' } },
  { mark: '03', es: 'Explore', en: { name: '', detail: 'Experiments · Workshops · Applied Learning · Industry' }, zh: { name: '', detail: '科学实验 · 专题工作坊 · 应用型学习 · 产业体验' } },
  { mark: '04', es: 'Exchange', en: { name: 'EXCHANGE', detail: 'Singapore Students · School Life · Teamwork · Cross-Cultural Experiences' }, zh: { name: '交流', detail: '新加坡学生 · 校园生活 · 团队合作 · 跨文化交流' } },
]
const realLearning = [
  entry('School Exchange', 'Learn, interact and collaborate with Singapore secondary school students.', '学校交流', '与新加坡中学生互动、合作，体验当地校园生活。'),
  entry('Applied Learning', 'Experience Singapore’s polytechnics through hands-on lessons and technology-based learning.', '应用型学习', '走进新加坡理工学院，通过实践课程接触真实的科技与专业学习环境。'),
  entry('Industry Experiences', 'Discover real-world applications through selected technology, manufacturing, aviation and other industry visits.', '产业体验', '通过精选的科技、智能制造、航空及其他产业参访，了解科技如何应用于真实行业。'),
  entry('Themed Learning Venues', 'Science · Technology · Nature · Space · Aviation · Industry · AI', '主题学习场景', '科学 · 科技 · 自然 · 太空 · 航空 · 工业 · AI'),
  entry('Community Experiences', 'HDB · Neighbourhoods · Markets · Hawker Centres · Public Transport · Community Facilities', '社区体验', 'HDB · 邻里社区 · 菜市场 · 熟食中心 · 公共交通 · 社区设施'),
  entry('Team Challenges', 'STEM Challenges · Innovation Tasks · Problem Solving · Design Challenges · Show & Tell', '团队挑战', 'STEM 挑战 · 创新任务 · 问题解决 · 设计挑战 · Show & Tell'),
  entry('Fun Experiences', 'Universal Studios Singapore', '趣味体验', 'Universal Studios Singapore 新加坡环球影城'),
]
const baseDays = [
  day('DAY 1', 'Discover Singapore', 'Chinatown · Merlion Park · Gardens by the Bay', '探索新加坡', '牛车水 · 鱼尾狮公园 · 滨海湾花园'),
]
const themes = [
  {
    id: 'young-biomedical-scientists', icon: '🧬', en: { title: 'YOUNG BIOMEDICAL SCIENTISTS', area: 'Life, Health & Biomedical Science', explore: 'Explore human biology, cells, DNA, microbiology and health, and discover how science is applied to biomedical and healthcare challenges.', category: 'Life, Health & Biomedical Science', tagline: 'Explore Life · Discover Science · Experience Singapore', lead: 'Explore Life · Discover Biomedical Science · Experience the Real Singapore', intro: 'Through the 4Es: Educate · Experience · Explore · Exchange, students discover how biology, health and biomedical science connect with real-world science, education, healthcare and everyday life.', close: 'Learn · Explore · Connect · Create' }, zh: { title: '青年生物医学科学家', area: '生命、健康与生物医学', explore: '探索人体、细胞、DNA、微生物与健康，了解科学如何应用于生物医学及健康领域。', category: '生命 · 健康 · 生物医学科学', tagline: '探索生命 · 发现科学 · 体验新加坡', lead: '探索生命 · 发现生物医学 · 体验真实新加坡', intro: '通过 4Es：学习 · 体验 · 探索 · 交流，学生走出课本，探索人体、生物学、健康与生物医学科学，了解科学如何与医疗、教育及日常生活连接。', close: '学习 · 探索 · 交流 · 创造' },
    es: [{ key: 'EDUCATE', en: pair('Build Scientific Understanding', 'Human Biology · Cells · DNA · Microbiology · Health'), zh: pair('科学学习', '人体生物学 · 细胞 · DNA · 微生物 · 健康') }, { key: 'EXPERIENCE', en: pair('Real-World Science', 'Science Experiments · Biomedical Learning · Applied Education'), zh: pair('真实科学体验', '科学实验 · 生物医学 · 应用型学习 · 健康科学') }, { key: 'EXPLORE', en: pair('Active Discovery', 'Microscopy · Microbiology · Science Challenges · Investigation'), zh: pair('主动探索', '显微观察 · 微生物 · 科学挑战 · 生物医学探究') }, { key: 'EXCHANGE', en: pair('International Exchange', 'Singapore Students · School Life · Teamwork · Cultural Sharing'), zh: pair('国际交流', '新加坡学生 · 校园生活 · 团队合作 · 跨文化交流') }],
    days: [...baseDays, day('DAY 2', 'Explore the Human Body', 'Human Biology / Life Sciences Workshop · Science Centre Singapore · Science Challenge', '探索人体', '人体生物学 / 生命科学工作坊 · 新加坡科学馆 · 科学挑战'), day('DAY 3', 'Discover Biomedical Science', 'Young Biomedical Scientists Workshop · Cells · DNA · Microbiology · Hands-On Experiments', '发现生物医学科学', '青年生物医学科学家工作坊 · 细胞 · DNA · 微生物 · 动手实验'), day('DAY 4', 'Exchange with Singapore Students', 'Secondary School Exchange · Student Interaction · Teamwork · Cultural Sharing', '与新加坡学生交流', '新加坡中学交流 · 学生互动 · 团队合作 · 文化分享'), day('DAY 5', 'Discover Everyday Singapore', 'HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · Local Student Interaction · Community Treasure Hunt · Show & Tell', '发现真实新加坡', 'HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · 当地学生互动 · 社区探索 · Show & Tell'), day('DAY 6', 'Fun & Discovery', 'Universal Studios Singapore · Team Activities · Singapore Farewell', '欢乐与探索', '新加坡环球影城 · 团队活动 · 新加坡告别')],
    environments: [entry('SCIENCE', 'Human Biology · Cells · DNA · Microbiology', '科学', '人体生物学 · 细胞 · DNA · 微生物'), entry('BIOMEDICAL', 'Health Science · Biomedical Science · Healthcare', '生物医学', '健康科学 · 生物医学 · 医疗健康'), entry('EDUCATION', 'Singapore Secondary Schools · Peer Interaction', '教育', '新加坡中学 · 应用型学习 · 学生交流'), entry('COMMUNITY', 'Housing · Food · Transport · Healthcare · Everyday Life', '社区', '住房 · 食物 · 交通 · 医疗 · 日常生活'), entry('CULTURE', 'City Exploration · Cross-Cultural Exchange · Teamwork', '文化', '城市探索 · 跨文化交流 · 团队合作')],
  },
  {
    id: 'space-aviation-future-mobility', icon: '🚀', en: { title: 'SPACE, AVIATION & FUTURE MOBILITY', area: 'Space, Aviation & Future Mobility', explore: 'Explore flight, drones, aerospace and aviation, and discover how autonomous systems and new technologies are shaping future mobility.', category: 'Space, Aviation & Future Mobility', tagline: 'Explore Flight · Discover Space · Experience the Future', lead: 'Explore Flight · Discover Aerospace · Experience Future Mobility', intro: 'Through the 4Es: Educate · Experience · Explore · Exchange, students discover how flight, drones, aerospace, aviation and intelligent mobility are shaping the future.', close: 'Learn · Explore · Connect · Create' }, zh: { title: '太空、航空与未来交通', area: '太空、航空与未来交通', explore: '探索飞行、无人机、航空航天与航空科技，了解自主系统及新技术如何塑造未来交通。', category: '太空 · 航空 · 无人机 · 未来交通', tagline: '探索飞行 · 发现太空 · 驾驭未来', lead: '探索太空 · 发现航空 · 体验未来交通', intro: '通过 4Es：学习 · 体验 · 探索 · 交流，学生从飞行原理与无人机出发，进一步了解航空航天、自动化系统及未来交通科技。', close: '学习 · 体验 · 探索 · 交流' },
    es: [{ key: 'EDUCATE', en: pair('Build Scientific Understanding', 'Flight · Aerospace · Drones · Aviation · Autonomous Systems'), zh: pair('建立航空航天知识', '飞行原理 · 航空 · 航天 · 无人机 · 未来交通') }, { key: 'EXPERIENCE', en: pair('Real-World Technology', 'STEM Workshops · Polytechnic Learning · Aviation · Future Mobility'), zh: pair('真实科技体验', 'STEM 工作坊 · 无人机挑战 · 理工学院应用型学习 · 航空体验') }, { key: 'EXPLORE', en: pair('Active Discovery', 'Drone Challenges · Space & Aerospace · Airport Operations · Technology'), zh: pair('主动探索', '无人机 · 自动系统 · 航空科技 · 未来交通 · 工程挑战') }, { key: 'EXCHANGE', en: pair('International Exchange', 'Singapore Students · School Life · Teamwork · Cultural Sharing'), zh: pair('国际交流', '新加坡学生 · 校园生活 · 团队合作 · 跨文化交流') }],
    days: [...baseDays, day('DAY 2', 'Discover Flight & Drones', 'Aviation & Drone STEM Workshop · Drone Technology · Hands-On Flight Challenge', '探索飞行与无人机', '航空与无人机 STEM 工作坊 · 飞行原理 · 无人机系统 · 传感器 · 编程 · 飞行挑战'), day('DAY 3', 'Explore Aerospace & Aviation', 'Polytechnic Aerospace / Aviation Learning · Changi Airport Aviation Discovery', '体验航空与未来交通', '理工学院航空 / 航天学习体验 · 航空工程 · 航空科技 · 樟宜机场航空探索'), day('DAY 4', 'Exchange with Singapore Students', 'Secondary School Exchange · Student Interaction · Space / Aviation Hands-On Challenge', '与新加坡学生交流', '新加坡中学交流 · 学生互动 · 团队活动 · 太空 / 航空主题挑战'), day('DAY 5', 'Discover Everyday Singapore', 'HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · Local Student Interaction · Community Treasure Hunt · Show & Tell', '发现真实新加坡', 'HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · 当地学生互动 · 社区探索 · Show & Tell'), day('DAY 6', 'Fun & Discovery', 'Universal Studios Singapore · Team Activities · Singapore Farewell', '欢乐与探索', '新加坡环球影城 · 团队活动 · 新加坡告别')],
    environments: [entry('SPACE & AEROSPACE', 'Satellites · Rockets · Space Technology · Exploration', '飞行科学', '飞行原理 · 飞机 · 空气动力学'), entry('AVIATION', 'Flight · Aircraft · Airports · Aviation Careers', '无人机科技', '传感器 · 控制系统 · 编程 · 自主飞行'), entry('DRONES & ROBOTICS', 'Sensors · Autonomous Systems · Programming · Control', '航空航天', '航空工程 · 航天科技 · 工程应用'), entry('EDUCATION', 'Singapore Polytechnics · Secondary Schools · Applied Learning', '未来交通', '自动化 · 智能交通 · 无人系统 · 未来出行'), entry('MOBILITY', 'Smart Transportation · Future Mobility · Innovation', '航空产业', '机场运营 · 航空科技 · 职业探索')],
  },
  {
    id: 'smart-sustainable-singapore', icon: '🌱', en: { title: 'SMART & SUSTAINABLE SINGAPORE', area: 'Sustainable Cities, Climate & Environment', explore: 'Discover how Singapore manages urban development, water, climate, biodiversity and green technology to build a liveable future city.', category: 'Sustainable Cities, Climate & Environment', tagline: 'Explore the City · Discover Sustainability · Design the Future', lead: 'Explore Singapore · Discover Sustainability · Experience a Living Laboratory', intro: 'Through the 4Es: Educate · Experience · Explore · Exchange, students discover how urban planning, green technology, water, biodiversity and community development come together to create a liveable and sustainable city.', close: 'Learn · Explore · Connect · Create' }, zh: { title: '智慧与可持续新加坡', area: '可持续城市、气候与环境', explore: '探索新加坡如何管理城市发展、水资源、气候、生物多样性及绿色科技，建设宜居的未来城市。', category: '可持续城市 · 气候 · 环境', tagline: '探索城市 · 发现绿色科技 · 设计未来', lead: '探索城市 · 发现可持续发展 · 体验真实新加坡', intro: '通过 4Es：学习 · 体验 · 探索 · 交流，学生以新加坡为“活的实验室”，了解城市规划、绿色科技、水资源、气候、生物多样性与社区发展如何共同打造宜居城市。', close: '学习 · 探索 · 交流 · 创造' },
    es: [{ key: 'EDUCATE', en: pair('Build Sustainability Knowledge', 'Urban Planning · Climate · Water · Green Technology · Biodiversity'), zh: pair('建立可持续发展知识', '城市规划 · 气候 · 水资源 · 绿色科技 · 生物多样性') }, { key: 'EXPERIENCE', en: pair('Real-World Sustainability', 'Polytechnic Learning · Gardens by the Bay · Water & Wetland Experiences'), zh: pair('真实世界体验', '理工学院学习 · 滨海湾花园 · 水资源与湿地生态') }, { key: 'EXPLORE', en: pair('Active Discovery', 'City Exploration · Ecosystem Discovery · Green City Challenge'), zh: pair('主动探索', '城市探索 · 生态考察 · 绿色城市设计挑战') }, { key: 'EXCHANGE', en: pair('International Exchange', 'Singapore Students · School Life · Teamwork · Cultural Sharing'), zh: pair('国际交流', '新加坡学生 · 校园生活 · 团队合作 · 跨文化交流') }],
    days: [day('DAY 1', 'Discover Singapore', 'Chinatown · Merlion Park · URA Singapore City Gallery', '探索新加坡', '牛车水 · 鱼尾狮公园 · 新加坡城市规划展览馆（URA Singapore City Gallery）'), day('DAY 2', 'Discover Green Technology', 'Sustainability / Green Technology Workshop · Gardens by the Bay', '探索绿色科技', '可持续发展 / 绿色科技工作坊 · 新加坡理工学院 / 共和理工学院 / 淡马锡理工学院 · 滨海湾花园'), day('DAY 3', 'Explore Resources & Nature', 'Sustainable Singapore Gallery @ Marina Barrage · Sungei Buloh Wetland Reserve', '探索资源与自然', '滨海堤坝可持续新加坡展馆 · 水资源与气候韧性 · 双溪布洛湿地保护区'), day('DAY 4', 'Exchange & Create the Future', 'Secondary School Exchange · Green City Design Challenge', '交流与创造未来', '新加坡中学交流 · 学生互动 · 绿色城市设计挑战'), day('DAY 5', 'Discover Sustainable Communities', 'HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · Local Student Interaction · Community Treasure Hunt · Show & Tell', '发现可持续社区', 'HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · 当地学生互动 · 社区探索 · Show & Tell'), day('DAY 6', 'Fun & Discovery', 'Universal Studios Singapore · Team Activities · Singapore Farewell', '欢乐与探索', '新加坡环球影城 · 团队活动 · 新加坡告别')],
    environments: [entry('URBAN PLANNING', 'City Planning · Liveability · Sustainable Development', '城市规划', '城市发展 · 宜居城市 · 可持续规划'), entry('GREEN TECHNOLOGY', 'Renewable Energy · Green Design · Urban Solutions', '绿色科技', '可再生能源 · 绿色设计 · 城市解决方案'), entry('WATER & CLIMATE', 'Water Security · Resource Management · Climate Resilience', '水资源与气候', '水资源管理 · 气候韧性 · 资源保护'), entry('NATURE & BIODIVERSITY', 'Wetlands · Mangroves · Ecosystems · Conservation', '自然与生物多样性', '湿地 · 红树林 · 生态系统 · 保育'), entry('COMMUNITY', 'Housing · Transport · Neighbourhoods · Everyday Sustainable Living', '社区', '住房 · 交通 · 邻里 · 可持续生活')],
  },
  {
    id: 'industry-4-singapore', icon: '🤖', en: { title: 'INDUSTRY 4.0 SINGAPORE', area: 'Smart Manufacturing & Future Industry', explore: 'Experience 3D printing, robotics, automation, smart manufacturing, electric vehicles and the technologies transforming industry.', category: 'Smart Manufacturing, Robotics & Future Industry', tagline: 'Make · Build · Automate · Experience the Future', lead: 'Explore Technology · Experience Industry · Build the Future', intro: 'Through the 4Es: Educate · Experience · Explore · Exchange, students discover how 3D printing, robotics, automation, smart manufacturing and future mobility are transforming the industries of tomorrow.', close: 'Learn · Make · Explore · Innovate' }, zh: { title: '工业 4.0 新加坡', area: '智能制造与未来产业', explore: '体验 3D 打印、机器人、自动化、智能制造、电动车及正在改变未来产业的新技术。', category: '智能制造 · 机器人 · 自动化 · 未来产业', tagline: '动手制造 · 探索工业 · 体验未来', lead: '探索科技 · 体验产业 · 走进未来工厂', intro: '通过 4Es：学习 · 体验 · 探索 · 交流，学生从 3D 打印与数字制造出发，进一步了解机器人、自动化、智能制造、电动车及未来交通如何改变产业。', close: '学习 · 动手 · 探索 · 创新' },
    es: [{ key: 'EDUCATE', en: pair('Build Technology Skills', 'Digital Fabrication · Robotics · Automation · Smart Manufacturing'), zh: pair('建立工业科技知识', '3D 打印 · 数字制造 · 机器人 · 自动化 · 智能制造') }, { key: 'EXPERIENCE', en: pair('Real-World Industry', '3D Printing Workshop · Polytechnic Learning · Smart Factory · Future Mobility'), zh: pair('真实产业体验', '3D 打印工作坊 · 理工学院应用型学习 · 智能工厂 · 未来交通') }, { key: 'EXPLORE', en: pair('Active Discovery', 'Robotics · Digital Manufacturing · EV Technology · Innovation Challenges'), zh: pair('主动探索', '机器人 · 电动车 · 自动化系统 · 智能制造 · 创新挑战') }, { key: 'EXCHANGE', en: pair('International Exchange', 'Singapore Students · School Life · Teamwork · Cultural Sharing'), zh: pair('国际交流', '新加坡学生 · 校园生活 · 团队合作 · 跨文化交流') }],
    days: [...baseDays, day('DAY 2', 'Make & Build', '3D Printing & Digital Fabrication Workshop · Science Centre Singapore · Engineering & Emerging Technology', '动手制造', '3D 打印与数字制造工作坊 · 新加坡科学馆 · 工程与新兴科技探索'), day('DAY 3', 'Experience Industry 4.0', 'Robotics / Emerging Technology Workshop · Hyundai Motor Group Innovation Center Singapore (HMGICS) · Smart Manufacturing · Robotics · Future Mobility', '体验工业 4.0', '机器人 / 新兴科技工作坊 · Hyundai Motor Group Innovation Center Singapore（HMGICS）· 智能制造 · 机器人 · 未来交通'), day('DAY 4', 'Exchange & Innovate', 'Secondary School Exchange · Student Interaction · Future Industries Innovation Challenge', '交流与创新', '新加坡中学交流 · 学生互动 · 未来产业创新挑战'), day('DAY 5', 'Discover Everyday Singapore', 'HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · Local Student Interaction · Community Treasure Hunt · Show & Tell', '发现真实新加坡', 'HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · 当地学生互动 · 社区探索 · Show & Tell'), day('DAY 6', 'Fun & Discovery', 'Universal Studios Singapore · Team Activities · Singapore Farewell', '欢乐与探索', '新加坡环球影城 · 团队活动 · 新加坡告别')],
    environments: [entry('DIGITAL FABRICATION', '3D Printing · Digital Design · Making', '数字制造', '3D 打印 · 数字设计 · 创客科技'), entry('ROBOTICS & AUTOMATION', 'Robots · Sensors · Control Systems · Automation', '机器人与自动化', '机器人 · 传感器 · 控制系统 · 自动化'), entry('SMART MANUFACTURING', 'Smart Factory · Digital Manufacturing · Industry 4.0', '智能制造', '智能工厂 · 数字制造 · 工业 4.0'), entry('FUTURE MOBILITY', 'Electric Vehicles · Autonomous Technology · Intelligent Mobility', '未来交通', '电动车 · 智能系统 · 自动驾驶 · 未来出行'), entry('INNOVATION & EDUCATION', 'Polytechnic Learning · Industry Exposure · Student Innovation', '创新与产业', '理工学院 · 企业参访 · 创新挑战')],
  },
  {
    id: 'earth-ocean-climate', icon: '🌏', en: { title: 'EARTH, OCEAN & CLIMATE', area: 'Earth Science, Oceans & Biodiversity', explore: 'Investigate Earth systems, oceans, wildlife, ecosystems and climate, and explore how science supports conservation and a healthier planet.', category: 'Earth Science, Oceans, Climate & Biodiversity', tagline: 'Explore Earth · Discover Oceans · Protect Our Planet', lead: 'Explore Earth · Discover Nature · Understand Our Planet', intro: 'Through the 4Es: Educate · Experience · Explore · Exchange, students investigate how Earth systems, oceans, climate, ecosystems and biodiversity are connected - and why protecting our planet matters.', close: 'Learn · Explore · Connect · Protect' }, zh: { title: '地球、海洋与气候', area: '地球科学、海洋与生物多样性', explore: '探索地球系统、海洋、野生动物、生态系统与气候，了解科学如何帮助保护我们的地球。', category: '地球科学 · 海洋 · 气候 · 生物多样性', tagline: '探索地球 · 发现海洋 · 守护我们的星球', lead: '探索地球 · 发现自然 · 了解我们的星球', intro: '通过 4Es：学习 · 体验 · 探索 · 交流，学生从真实的自然环境与科学场景出发，探索地球系统、海洋、气候、生态系统、生物多样性与野生动物保育之间的联系。', close: '学习 · 探索 · 交流 · 守护' },
    es: [{ key: 'EDUCATE', en: pair('Build Earth & Climate Knowledge', 'Earth Science · Climate · Oceans · Ecosystems · Biodiversity'), zh: pair('建立地球科学知识', '地球科学 · 气候 · 海洋 · 生态系统 · 生物多样性') }, { key: 'EXPERIENCE', en: pair('Real-World Science', 'Natural History · Marine Science · Wildlife · Conservation'), zh: pair('真实科学体验', '自然历史 · 海洋科学 · 野生动物 · 生态保育') }, { key: 'EXPLORE', en: pair('Active Discovery', 'Field Learning · Ecosystem Investigation · Marine Exploration · Conservation Challenges'), zh: pair('主动探索', '自然考察 · 生态观察 · 海洋探索 · 保育挑战') }, { key: 'EXCHANGE', en: pair('International Exchange', 'Singapore Students · School Life · Teamwork · Cultural Sharing'), zh: pair('国际交流', '新加坡学生 · 校园生活 · 团队合作 · 跨文化交流') }],
    days: [...baseDays, day('DAY 2', 'Discover Wildlife & Conservation', 'Mandai Wildlife Reserve · Wildlife Science & Conservation Experience · Animal Adaptations & Biodiversity', '探索野生动物与保育', 'Mandai Wildlife Reserve · 野生动物科学与保育体验 · 动物适应性 · 生物多样性'), day('DAY 3', 'Explore Oceans & Marine Science', 'Singapore Oceanarium · Marine Ecosystems · Ocean Science · Animal Adaptations & Conservation', '探索海洋与海洋科学', 'Singapore Oceanarium · 海洋生态系统 · 海洋科学 · 动物适应性 · 海洋保育'), day('DAY 4', 'Exchange & Explore Nature', 'Secondary School Exchange · Student Interaction · Earth / Environment Team Challenge', '交流与探索自然', '新加坡中学交流 · 学生互动 · 地球 / 环境主题团队挑战'), day('DAY 5', 'Discover Everyday Singapore', 'HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · Local Student Interaction · Community Treasure Hunt · Show & Tell', '发现真实新加坡', 'HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · 当地学生互动 · 社区探索 · Show & Tell'), day('DAY 6', 'Fun & Discovery', 'Universal Studios Singapore · Team Activities · Singapore Farewell', '欢乐与探索', '新加坡环球影城 · 团队活动 · 新加坡告别')],
    environments: [entry('EARTH SCIENCE', 'Earth Systems · Natural History · Geology · Climate', '地球科学', '地球系统 · 自然历史 · 地质 · 气候'), entry('OCEAN SCIENCE', 'Marine Ecosystems · Ocean Life · Conservation', '海洋科学', '海洋生态系统 · 海洋生物 · 海洋保育'), entry('BIODIVERSITY', 'Wildlife · Adaptations · Ecosystems · Species Diversity', '生物多样性', '野生动物 · 动物适应性 · 生态系统 · 物种多样性'), entry('CONSERVATION', 'Habitat Protection · Wildlife Science · Environmental Stewardship', '自然保育', '栖息地保护 · 野生动物科学 · 环境保护'), entry('COMMUNITY', 'Housing · Food · Transport · Everyday Life · Sustainable Communities', '社区', '住房 · 食物 · 交通 · 日常生活 · 可持续社区')],
  },
  {
    id: 'ai-robotics-smart-nation', icon: '🤖', en: { title: 'AI, ROBOTICS & SMART NATION', area: 'AI & Digital Technology', explore: 'Explore AI, machine learning, computer vision, robotics and Generative AI, and examine how intelligent technologies are shaping society.', category: 'Artificial Intelligence, Robotics & Digital Technology', tagline: 'Explore AI · Build with Technology · Create the Future', lead: 'Explore AI · Discover Robotics · Experience the Smart Nation', intro: 'Through the 4Es: Educate · Experience · Explore · Exchange, students discover how AI, robotics, automation and digital technologies are transforming the way people live, learn and work.', close: 'Learn · Explore · Create · Innovate' }, zh: { title: 'AI、机器人与智慧国家', area: '人工智能与数字科技', explore: '探索 AI、机器学习、计算机视觉、机器人及生成式 AI，了解智能科技如何改变未来社会。', category: '人工智能 · 机器人 · 数字科技', tagline: '探索 AI · 驾驭科技 · 创造未来', lead: '探索 AI · 发现机器人 · 体验智慧新加坡', intro: '通过 4Es：学习 · 体验 · 探索 · 交流，学生从人工智能基础出发，探索机器学习、计算机视觉、机器人、生成式 AI 及智慧科技如何改变产业、城市与未来生活。', close: '学习 · 探索 · 创造 · 创新' },
    es: [{ key: 'EDUCATE', en: pair('Build AI & Technology Knowledge', 'AI · Machine Learning · Computer Vision · Robotics · Generative AI'), zh: pair('建立 AI 科技知识', '人工智能 · 机器学习 · 计算机视觉 · 机器人 · 生成式 AI') }, { key: 'EXPERIENCE', en: pair('Real-World Technology', 'AI Workshops · Robotics · Smart Factory · Smart Farm · Future Mobility'), zh: pair('真实科技体验', 'AI 工作坊 · 3D 打印 · 机器人 · 智能工厂 · 智慧农业 · 未来交通') }, { key: 'EXPLORE', en: pair('Active Discovery', 'AI Challenges · Robot Systems · Generative AI · Smart Technologies'), zh: pair('主动探索', 'AI 挑战 · 机器人系统 · 生成式 AI 创作 · 智慧科技') }, { key: 'EXCHANGE', en: pair('International Exchange', 'Singapore Students · School Life · Teamwork · Cultural Sharing'), zh: pair('国际交流', '新加坡学生 · 校园生活 · 团队合作 · 跨文化交流') }],
    days: [...baseDays, day('DAY 2', 'Make & Build', '3D Printing & Digital Fabrication Workshop · Science Centre Singapore · Robotics & Digital Technology', '动手制造与科技探索', '3D 打印与数字制造工作坊 · 新加坡科学馆 · 机器人与数字科技'), day('DAY 3', 'AI in the Real World', 'AI Discovery Workshop · Machine Learning · Computer Vision · Responsible AI · HMGICS Smart Factory + Smart Farm + Robotics + Future Mobility', '探索真实世界的 AI', 'AI 探索工作坊 · 机器学习 · 计算机视觉 · 负责任的 AI · HMGICS 智能工厂 + 智慧农场 + 机器人 + 未来交通'), day('DAY 4', 'Exchange & Innovate', 'Secondary School Exchange · Student Interaction · Generative AI Creative Workshop · AI Innovation Challenge', '交流与 AI 创新', '新加坡中学交流 · 学生互动 · 生成式 AI 创意工作坊 · AI 创新挑战'), day('DAY 5', 'Discover Everyday Singapore', 'HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · Local Student Interaction · Community Treasure Hunt · Show & Tell', '发现真实新加坡', 'HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · 当地学生互动 · 社区探索 · Show & Tell'), day('DAY 6', 'Fun & Discovery', 'Universal Studios Singapore · Team Activities · Singapore Farewell', '欢乐与探索', '新加坡环球影城 · 团队活动 · 新加坡告别')],
    environments: [entry('ARTIFICIAL INTELLIGENCE', 'Machine Learning · Computer Vision · Generative AI', '人工智能', '机器学习 · 计算机视觉 · 生成式 AI'), entry('ROBOTICS', 'Sensors · Automation · Robot Systems · Programming', '机器人', '传感器 · 自动化 · 机器人系统 · 编程'), entry('DIGITAL TECHNOLOGY', '3D Printing · Digital Fabrication · Smart Technologies', '数字科技', '3D 打印 · 数字制造 · 智慧科技'), entry('SMART INDUSTRY', 'Smart Factory · Smart Farm · Future Mobility', '智慧产业', '智能工厂 · 智慧农场 · 未来交通'), entry('SMART NATION', 'Digital Services · Intelligent Systems · Technology & Society', '智慧国家', '数字服务 · 智能系统 · 科技与社会')],
  },
]
</script>

<style scoped>
.junior-page { --orange: #ed6d32; --orange-dark: #c84f1d; --navy: #153657; --soft: #f7f4ef; color: #18344c; background: #fff; font-family: 'DM Sans', Arial, sans-serif; }
.junior-shell { width: min(1180px, calc(100% - 56px)); margin: 0 auto; }
.junior-hero { position: relative; min-height: 650px; overflow: hidden; background: #173d5f; color: #fff; }
.junior-hero::after { position: absolute; inset: 0; content: ''; background: linear-gradient(90deg, rgba(9, 36, 61, .95) 0%, rgba(9, 36, 61, .72) 46%, rgba(9, 36, 61, .1)), radial-gradient(52% 68% at 88% 18%, rgba(237, 109, 50, .28), transparent 70%), linear-gradient(0deg, rgba(6, 24, 42, .55) 0%, transparent 32%); }
.junior-hero__image { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
.junior-hero__content { position: relative; z-index: 1; min-height: 650px; padding: 133px 0 72px; }
.junior-hero__eyebrow, .junior-index { margin: 0; color: var(--orange); font-size: 12px; font-weight: 700; letter-spacing: .16em; }
.junior-hero__meta { position: absolute; top: 136px; right: 0; margin: 0; font-size: 12px; font-weight: 700; letter-spacing: .1em; }
.junior-hero__copy { max-width: 730px; margin-top: 77px; }
.junior-chip { display: inline-flex; align-items: center; gap: 9px; padding: 8px 14px; border: 1px solid rgba(255, 255, 255, .38); background: rgba(255, 255, 255, .07); backdrop-filter: blur(4px); font-size: 12px; font-weight: 700; letter-spacing: .1em; }
.junior-chip::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: #ff9662; box-shadow: 0 0 10px rgba(255, 150, 98, .9); }
.junior-hero h1 { margin: 17px 0; font-family: 'Playfair Display', Georgia, serif; font-size: clamp(38px, 4.4vw, 54px); font-weight: 600; line-height: .93; letter-spacing: 0; }
.junior-hero h1 em, .junior-intro h2 em { color: #ff9662; font-style: normal; }
.junior-hero__copy > p { margin: 0; font-size: 15px; font-weight: 700; letter-spacing: .08em; }
.junior-hero__copy small { display: block; margin-top: 17px; color: #d7e6f1; font-size: 14px; }
.junior-hero__jump { position: absolute; right: 0; bottom: 72px; display: flex; align-items: center; gap: 9px; color: #fff; font-family: 'Playfair Display', Georgia, serif; font-size: 42px; text-decoration: none; transition: color .25s ease, transform .25s ease; }
.junior-hero__jump:hover { color: #ff9662; transform: translateY(-3px); }
.junior-hero__jump::after { content: ''; position: absolute; left: 0; right: 0; bottom: -10px; height: 2px; background: linear-gradient(90deg, #ed6d32, transparent); transform: scaleX(.35); transform-origin: left; transition: transform .3s ease; }
.junior-hero__jump:hover::after { transform: scaleX(1); }
.junior-hero__jump span { font-family: 'DM Sans', Arial, sans-serif; font-size: 11px; font-weight: 700; letter-spacing: .14em; }
/* Hero 双 CTA：小学项目 / 高中项目，样式与「新加坡未来学习系列」页保持一致 */
.hero-programme-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px; }
.hero-programme-link { display: inline-flex; align-items: center; min-height: 42px; padding: 11px 20px; border-radius: 8px; background: #ff8147; box-shadow: 0 12px 23px rgba(255, 129, 71, .26); color: #fff; font-size: 14px; font-weight: 700; line-height: 1; text-decoration: none; transition: transform .2s ease, background .2s ease, box-shadow .2s ease; }
.hero-programme-link:hover { background: #ee6c33; box-shadow: 0 15px 26px rgba(255, 129, 71, .34); transform: translateY(-2px); }
.hero-programme-link:focus-visible { outline: 3px solid #ffbd9e; outline-offset: 3px; }
.junior-intro { display: grid; grid-template-columns: 1.15fr .85fr; gap: 90px; padding-top: 118px; padding-bottom: 112px; }
.junior-intro h2, .junior-section-heading h2, .junior-four-es h2, .junior-real h2 { margin: 13px 0 0; color: var(--navy); font-family: 'Playfair Display', Georgia, serif; font-size: clamp(32px, 4vw, 52px); font-weight: 600; line-height: 1.1; letter-spacing: 0; }
.junior-intro h2 { font-size: clamp(22px, 2.6vw, 37px); }
.junior-four-es h2 { font-size: clamp(30px, 3.6vw, 45px); }
.junior-intro__copy { padding-top: 38px; font-size: 17px; line-height: 1.8; }
.junior-intro__copy p { margin: 0 0 22px; }
.junior-themes { padding: 96px 0 110px; background: var(--soft); }
.junior-section-heading { display: flex; justify-content: space-between; gap: 40px; align-items: end; margin-bottom: 42px; }
.junior-section-heading h2 { font-size: clamp(30px, 3.7vw, 48px); }
.junior-section-heading > p { max-width: 340px; margin: 0 0 6px; color: #5a6c78; font-size: 14px; line-height: 1.7; }
.theme-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.theme-card { --accent: #e2683c; position: relative; display: grid; grid-template-columns: 47px 1fr 24px; gap: 16px; min-height: 175px; padding: 23px; border: 1px solid #e7e1da; border-top: 3px solid var(--accent); background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 5%, #fff), #fff 58%); color: var(--navy); transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
.theme-card:nth-child(6n + 2) { --accent: #2f6fb0; }
.theme-card:nth-child(6n + 3) { --accent: #2e8b6e; }
.theme-card:nth-child(6n + 4) { --accent: #7a5aa6; }
.theme-card:nth-child(6n + 5) { --accent: #b98a2f; }
.theme-card:nth-child(6n + 6) { --accent: #1f7fa6; }
.theme-card:hover { border-color: var(--accent); box-shadow: 0 16px 30px color-mix(in srgb, var(--accent) 20%, rgba(31, 57, 71, .08)); transform: translateY(-3px); }
.theme-card > span { color: var(--accent); font-size: 15px; font-weight: 800; opacity: .9; }
.theme-card__icon { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; margin-right: 12px; border-radius: 12px; background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 16%, #fff), color-mix(in srgb, var(--accent) 7%, #fff)); box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--accent) 22%, transparent); color: var(--accent); font-style: normal; vertical-align: -4px; }
.junior-svg { width: 24px; height: 24px; display: block; }
.theme-card__icon .junior-svg { width: 24px; height: 24px; }
.junior-svg--lead { display: inline-block; width: 20px; height: 20px; vertical-align: -4px; margin-right: 8px; }
.theme-card strong { font-size: 18px; line-height: 1.25; }
.theme-card small { display: block; margin-top: 8px; color: var(--accent); font-size: 13px; font-weight: 700; }
.theme-card p { margin: 8px 0 0; color: #566b78; font-size: 13px; line-height: 1.55; }
.theme-card > b { align-self: center; color: var(--accent); font-size: 21px; transition: transform .2s ease; }
.theme-card:hover > b { transform: translateX(4px); }
.junior-four-es { display: grid; grid-template-columns: 1fr; gap: 48px; padding-top: 116px; padding-bottom: 118px; }
.junior-four-es__heading > p:last-child { margin: 22px 0 0; color: var(--orange-dark); font-size: 12px; font-weight: 700; letter-spacing: .1em; }
.junior-four-es__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: #d9e0e2; }
.junior-four-es__grid div { --accent: #e2683c; min-height: 160px; padding: 22px; border-top: 3px solid var(--accent); background: #fff; transition: transform .25s ease, box-shadow .25s ease; }
.junior-four-es__grid div:hover { transform: translateY(-4px); box-shadow: 0 18px 38px color-mix(in srgb, var(--accent) 16%, rgba(21, 54, 87, .1)); }
.junior-four-es__grid div:nth-child(2) { --accent: #2f6fb0; }
.junior-four-es__grid div:nth-child(3) { --accent: #2e8b6e; }
.junior-four-es__grid div:nth-child(4) { --accent: #7a5aa6; }
.junior-four-es__grid b { display: block; color: var(--accent); font-size: 12px; letter-spacing: .1em; }
.junior-four-es__grid em { display: block; margin: 14px 0 0; color: var(--accent); font-family: 'Playfair Display', Georgia, serif; font-size: 22px; font-weight: 600; font-style: italic; line-height: 1; }
.junior-four-es__grid strong { display: block; margin: 14px 0 8px; color: var(--navy); font-size: 15px; }
.junior-four-es__grid span { color: #5b6a74; font-size: 13px; line-height: 1.55; }
.junior-four-es__grid em + span { display: block; margin-top: 14px; }
.junior-real { padding: 105px 0 112px; background: #163d5e; color: #fff; }
.junior-real h2 { color: #fff; }
.junior-real__grid { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 50px; border-top: 1px solid rgba(255,255,255,.24); border-left: 1px solid rgba(255,255,255,.24); }
.junior-real__grid div { min-height: 143px; padding: 20px 23px; border-right: 1px solid rgba(255,255,255,.24); border-bottom: 1px solid rgba(255,255,255,.24); transition: background .2s ease; }
.junior-real__grid div:hover { background: rgba(255,255,255,.07); }
.junior-real__grid strong::before { content: ''; display: inline-block; width: 18px; height: 3px; margin-right: 9px; vertical-align: 3px; background: #ff9b6c; }
.junior-real__grid strong { color: #ff9b6c; font-size: 14px; }
.junior-real__grid p { margin: 11px 0 0; color: #e1ecf2; font-size: 13px; line-height: 1.55; }
.junior-detail { padding: 95px 0 0; background: #fff; }
.junior-detail:nth-of-type(even) { background: var(--soft); }
.junior-detail__top { display: flex; justify-content: space-between; padding-bottom: 18px; border-bottom: 1px solid #ced9df; color: #5b6c75; font-size: 11px; font-weight: 700; letter-spacing: .1em; }
.junior-detail__top span:first-child { color: var(--orange); }
.junior-detail__header { padding: 61px 0 38px; max-width: 840px; }
.junior-detail__header p { display: flex; align-items: center; gap: 8px; margin: 0; color: var(--orange-dark); font-size: 13px; font-weight: 700; letter-spacing: .06em; }
.junior-detail__env-title { display: flex; align-items: center; gap: 10px; }
.junior-detail__env-title .junior-svg--lead { color: var(--orange); }
.junior-detail__header h2 { margin: 13px 0 11px; color: var(--navy); font-family: 'Playfair Display', Georgia, serif; font-size: clamp(26px, 3.2vw, 38px); font-weight: 600; line-height: 1.04; letter-spacing: 0; }
.junior-detail__header strong { color: #3c566a; font-size: 15px; }
.junior-detail__header span, .junior-detail__header small { display: block; }
.junior-detail__header span { margin-top: 19px; color: var(--orange-dark); font-size: 15px; font-weight: 700; }
.junior-detail__header small { margin-top: 9px; color: #64747f; font-size: 13px; font-weight: 700; }
.junior-detail__image { display: block; width: 100%; height: min(43vw, 450px); object-fit: cover; border-radius: 20px; box-shadow: 0 26px 60px rgba(21, 54, 87, .22); }
.junior-detail__lead { display: grid; grid-template-columns: .68fr 1.32fr; gap: 50px; padding: 35px 0 71px; border-bottom: 1px solid #ced9df; }
.junior-detail__lead strong { grid-column: 1 / -1; color: var(--navy); font-size: 21px; line-height: 1.45; }
.junior-detail__lead p { grid-column: 1 / -1; margin: 0; font-size: 16px; line-height: 1.8; }
.junior-detail__section { padding: 62px 0 0; }
.junior-detail__section h3 { margin: 14px 0 27px; color: var(--navy); font-family: 'Playfair Display', Georgia, serif; font-size: 30px; font-weight: 600; letter-spacing: 0; }
.detail-es { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: #d8dfe1; }
.detail-es div { --accent: #e2683c; min-height: 128px; padding: 20px 23px; border-top: 3px solid var(--accent); background: #fff; transition: transform .25s ease, box-shadow .25s ease; }
.detail-es div:hover { transform: translateY(-4px); box-shadow: 0 18px 38px color-mix(in srgb, var(--accent) 16%, rgba(21, 54, 87, .1)); }
.detail-es div:nth-child(4n + 2) { --accent: #2f6fb0; }
.detail-es div:nth-child(4n + 3) { --accent: #2e8b6e; }
.detail-es div:nth-child(4n + 4) { --accent: #7a5aa6; }
.detail-es strong { display: block; color: var(--accent); font-size: 13px; }
.detail-es i { padding: 0 5px; font-style: normal; }
.detail-es span { display: block; margin-top: 10px; color: #334e61; font-size: 14px; line-height: 1.55; }
.journey-table { border-top: 2px solid var(--navy); }
.journey-table > div { display: grid; grid-template-columns: 110px minmax(180px, .85fr) minmax(300px, 1.65fr); gap: 20px; padding: 18px; border-bottom: 1px solid #d6dde0; transition: background .2s ease; }
.journey-table > div:not(.journey-table__head):hover { background: #f6f9fa; }
.journey-table b { justify-self: start; padding: 5px 11px; border-radius: 999px; background: rgba(237, 109, 50, .1); color: var(--orange-dark); font-size: 12px; letter-spacing: .04em; white-space: nowrap; }
.journey-table__head { background: #eaf0f1; color: #355366; font-size: 12px; font-weight: 700; }
.journey-table__head b { padding: 0; background: none; border-radius: 0; }
.journey-table strong { color: var(--navy); font-size: 14px; }
.journey-table span { color: #4e616e; font-size: 14px; line-height: 1.5; }
.learning-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1px; background: #d8dfe1; }
.learning-grid p { --accent: #e2683c; min-height: 138px; margin: 0; padding: 21px 17px; border-top: 3px solid var(--accent); background: #fff; }
.learning-grid p:nth-child(5n + 2) { --accent: #2f6fb0; }
.learning-grid p:nth-child(5n + 3) { --accent: #2e8b6e; }
.learning-grid p:nth-child(5n + 4) { --accent: #7a5aa6; }
.learning-grid p:nth-child(5n + 5) { --accent: #b98a2f; }
.learning-grid strong { display: block; color: var(--accent); font-size: 12px; letter-spacing: .02em; }
.learning-grid span { display: block; margin-top: 12px; color: #40596a; font-size: 13px; line-height: 1.55; }
.junior-detail__footer { display: flex; flex-direction: column; align-items: center; margin-top: 83px; padding: 53px 20px; background: linear-gradient(150deg, #1b4266, #132f4b 68%); border-top: 4px solid #ed6d32; color: #fff; text-align: center; }
.junior-detail__footer strong { color: #ff9b6c; font-family: 'Playfair Display', Georgia, serif; font-size: 24px; font-weight: 600; }
.junior-detail__footer span { margin: 16px 0; font-size: 15px; font-weight: 700; }
.junior-detail__footer small { color: #d7e5eb; font-size: 11px; font-weight: 700; letter-spacing: .07em; }
.junior-detail:last-of-type { padding-bottom: 100px; }

/* 收尾总结板块：六大主题 · 一场通往未来的学习之旅 */
.junior-summary { position: relative; overflow: hidden; padding: 104px 0 112px; background: var(--soft); }
.junior-summary::before { position: absolute; top: 0; left: 0; right: 0; height: 4px; content: ''; background: linear-gradient(90deg, #ed6d32, #ffb27f 45%, transparent); }
.junior-summary .junior-shell { position: relative; }
.junior-summary__title { margin: 0; max-width: 980px; color: var(--navy); font-family: 'Playfair Display', Georgia, serif; font-size: clamp(28px, 3.6vw, 46px); font-weight: 600; line-height: 1.2; letter-spacing: 0; }
.junior-summary__spark { margin-right: 10px; }
.junior-summary__chain { margin: 32px 0 0; color: var(--orange-dark); font-size: clamp(14px, 1.4vw, 18px); font-weight: 700; letter-spacing: .08em; }
.junior-summary__es { margin: 16px 0 0; color: var(--navy); font-size: 15px; font-weight: 700; letter-spacing: .06em; }
.junior-summary__meta { margin: 16px 0 0; color: #6b7c88; font-size: 12px; font-weight: 700; letter-spacing: .12em; }
.junior-summary__close { margin: 48px 0 0; padding-top: 36px; border-top: 1px solid rgba(21, 54, 87, .16); color: var(--navy); font-family: 'Playfair Display', Georgia, serif; font-size: clamp(24px, 3vw, 38px); font-weight: 600; line-height: 1.2; }
.junior-summary__close-en { margin: 14px 0 0; color: #6b7c88; font-size: 13px; font-weight: 700; letter-spacing: .08em; }

/* 桌面端：所有板块大标题（h1/h2/h3）与“一句话”短句保持单行不折行 */
@media (min-width: 761px) {
  .junior-hero h1,
  .junior-hero__eyebrow,
  .junior-hero__meta,
  .junior-chip,
  .junior-hero__copy > p,
  .junior-hero__copy small,
  .junior-index,
  .junior-intro h2,
  .junior-section-heading h2,
  .junior-four-es h2,
  .junior-real h2,
  .junior-detail__header p,
  .junior-detail__header h2,
  .junior-detail__header strong,
  .junior-detail__header span,
  .junior-detail__header small,
  .junior-detail__lead strong,
  .junior-detail__section h3,
  .junior-detail__footer strong,
  .junior-detail__footer span,
  .junior-detail__footer small,
  .theme-card strong,
  .theme-card small,
  .junior-four-es__grid strong,
  .junior-real__grid strong,
  .detail-es strong,
  .learning-grid strong {
    white-space: nowrap;
  }
}
@media (max-width: 760px) { .junior-shell { width: min(100% - 34px, 560px); } .junior-hero, .junior-hero__content { min-height: 600px; } .junior-hero__content { padding-top: 120px; } .junior-hero__meta { top: 88px; right: 0; max-width: 160px; text-align: right; line-height: 1.5; } .junior-hero__copy { margin-top: 66px; } .junior-hero h1 { font-size: 50px; } .junior-hero__copy > p { font-size: 12px; line-height: 1.6; } .junior-hero__jump { bottom: 44px; } .junior-intro, .junior-four-es, .junior-detail__lead { grid-template-columns: 1fr; gap: 24px; } .junior-intro { padding: 72px 0; } .junior-intro__copy { padding: 0; font-size: 15px; } .junior-themes { padding: 70px 0; } .junior-section-heading { display: block; } .junior-section-heading > p { margin-top: 18px; } .theme-grid, .detail-es { grid-template-columns: 1fr; } .theme-card { min-height: 0; } .junior-four-es { padding: 72px 0; } .junior-four-es__grid { margin-top: 12px; } .junior-real { padding: 72px 0; } .junior-real__grid { grid-template-columns: 1fr; margin-top: 35px; } .junior-real__grid div { min-height: 0; } .junior-detail { padding-top: 65px; } .junior-detail__header { padding: 38px 0 25px; } .junior-detail__image { height: 240px; } .junior-detail__lead { padding: 27px 0 48px; } .junior-detail__section { padding-top: 48px; } .junior-detail__section h3 { font-size: 26px; } .journey-table > .journey-table__head { display: none; } .journey-table > div { grid-template-columns: 1fr; gap: 7px; padding: 15px 4px; } .journey-table strong { font-size: 15px; } .learning-grid { grid-template-columns: 1fr; } .learning-grid p { min-height: 0; } .junior-detail__image { border-radius: 14px; } .junior-detail__footer { margin-top: 58px; padding: 40px 18px; }   .junior-detail__footer strong { font-size: 21px; } }
/* 移动端：为右下角「06 主题」跳转留出空间，避免与双 CTA 按钮重叠 */
@media (max-width: 760px) { .junior-hero__content { padding-bottom: 120px; } .junior-summary { padding: 72px 0 80px; } .junior-summary__chain { letter-spacing: .04em; } }
</style>
