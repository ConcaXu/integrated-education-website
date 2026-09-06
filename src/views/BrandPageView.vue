<template><div class="brand-page"><section class="page-hero"><div class="site-shell"><span class="eyebrow">APIMTC</span><h1>{{data.title}}</h1><p>{{data.lead}}</p></div></section><section class="section"><div class="site-shell"><div class="section-heading"><span class="eyebrow">{{data.kicker}}</span><h2>{{data.heading}}</h2></div><div class="content-grid"><article v-for="item in data.items" :key="item.num" class="info-block"><span class="block-number">{{item.num}}</span><h3>{{item.title}}</h3><p>{{item.text}}</p></article></div></div></section><section class="section dark-section"><div class="site-shell split"><div><span class="eyebrow">{{tx('OUR PURPOSE','我们的使命')}}</span><h2>{{tx('Connecting people, places, education, industry and opportunity.','连接人才、城市、教育、产业与机会。')}}</h2></div><router-link class="button button-light" to="/contact">{{tx('Start a conversation','开始洽谈')}}</router-link></div></section></div></template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '@/composables/useI18n'

type LocalizedText = { en: string; zh: string }
type BrandItem = { num: string; title: LocalizedText; text: LocalizedText }
type BrandPage = {
  title: LocalizedText
  lead: LocalizedText
  kicker: LocalizedText
  heading: LocalizedText
  items: BrandItem[]
}

const route = useRoute()
const { lang } = useI18n()
const tx = (en: string, zh: string) => lang.value === 'en' ? en : zh

const sets: Record<string, BrandPage> = {
  about: {
    title: { en: 'About APIMTC', zh: '关于 APIMTC' },
    lead: { en: 'Connecting people. Connecting worlds.', zh: '连接人才 · 连接世界' },
    kicker: { en: 'OUR STORY', zh: '我们的故事' },
    heading: { en: 'Singapore is our home.', zh: '新加坡是我们的根基。' },
    items: [
      { num: '01', title: { en: 'From MICE & travel to education & mobility', zh: '从 MICE 与旅游，走向教育与国际流动' }, text: { en: 'Our experience has evolved into a broader international platform connecting education, skills, people, industry and business.', zh: '凭借多年旅游、MICE 及目的地管理经验，我们不断拓展国际业务，连接教育、技能、人才、产业与商务。' } },
      { num: '02', title: { en: 'Our brand structure', zh: '我们的品牌架构' }, text: { en: 'APIMTC Singapore is our parent company and international platform. API EduVoyage Chengdu is our China education mobility platform.', zh: 'APIMTC 新加坡是我们的母公司及国际化平台。API EduVoyage 成都是我们的中国教育流动平台。' } },
      { num: '03', title: { en: 'Two-way international connections', zh: '双向国际连接' }, text: { en: 'Singapore → China and the world. China and the world → Singapore. Meaningful exchange in both directions.', zh: '新加坡 → 中国及世界；中国及世界 → 新加坡，推动双向而有意义的交流。' } }
    ]
  },
  mobility: {
    title: { en: 'Education Mobility', zh: '教育流动' },
    lead: { en: 'Beyond borders. Beyond the classroom.', zh: '超越国界 · 超越课堂' },
    kicker: { en: 'THE 4E MODEL', zh: 'APIMTC 4E 模型' },
    heading: { en: 'Learn. Experience. Explore. Exchange.', zh: '学习 · 体验 · 探索 · 交流' },
    items: [
      { num: '01', title: { en: 'Singapore Future Explorers', zh: '新加坡未来探索者' }, text: { en: 'Discover Singapore through life and health, space and aviation, sustainability, AI and emerging industries.', zh: '探索新加坡的教育、科技、产业、文化与未来发展。' } },
      { num: '02', title: { en: 'China Beyond the Classroom', zh: '中国课堂之外' }, text: { en: "Experience China's universities, technology, innovation, smart cities and culture.", zh: '走进中国的城市、大学、企业、科技与文化，体验真实的中国。' } },
      { num: '03', title: { en: 'Designed for every age', zh: '为不同年龄而设计' }, text: { en: 'Primary, junior high and senior high programmes shaped around age, learning objectives and school needs.', zh: '根据年龄、学习目标及学校需求，打造小学、初中 / 中学和高中 / JC 项目。' } }
    ]
  },
  'mice-business': {
    title: { en: 'MICE & Business', zh: 'MICE 与商务' },
    lead: { en: 'Connecting business with experience.', zh: '让商务连接真实体验' },
    kicker: { en: 'WHAT WE DO', zh: '我们提供' },
    heading: { en: 'Professional experiences with purpose.', zh: '打造有价值的商务与专业体验。' },
    items: [
      { num: '01', title: { en: 'MICE', zh: 'MICE' }, text: { en: 'Meetings, incentives, conferences and events across Singapore, China and international destinations.', zh: '会议、奖励旅游、大型会议及活动，覆盖新加坡、中国及国际目的地。' } },
      { num: '02', title: { en: 'Professional learning', zh: '专业学习' }, text: { en: 'Executive programmes, business delegations, industry visits, benchmarking and business exchange.', zh: '让商务之旅成为真正的学习体验，涵盖高管项目、商务代表团、产业参访、标杆考察与商务交流。' } },
      { num: '03', title: { en: 'End-to-end delivery', zh: '一站式执行' }, text: { en: 'Destination expertise, international networks and professional programme execution.', zh: '结合目的地专业能力与国际合作网络，提供从项目策划、协调到落地执行的一站式服务。' } }
    ]
  },
  partnerships: {
    title: { en: 'International Partnerships', zh: '国际合作' },
    lead: { en: 'Build international programmes together.', zh: '携手打造国际项目' },
    kicker: { en: 'WHO WE PARTNER WITH', zh: '我们的合作伙伴' },
    heading: { en: 'From idea to delivery.', zh: '从想法到落地。' },
    items: [
      { num: '01', title: { en: 'Schools and universities', zh: '学校与大学' }, text: { en: 'International learning, student mobility, academic collaboration and exchange.', zh: '国际学习、学生流动、学术合作与交流。' } },
      { num: '02', title: { en: 'Governments and organisations', zh: '政府及机构' }, text: { en: 'Delegations, benchmarking and purposeful international exchange.', zh: '国际交流、代表团及标杆考察。' } },
      { num: '03', title: { en: 'Companies and industry', zh: '企业与产业伙伴' }, text: { en: 'Professional learning, innovation, talent development and real-world engagement.', zh: '商务交流、专业学习、创新、人才发展与真实产业体验。' } }
    ]
  },
  'china-gateway': {
    title: { en: 'Chengdu · Connecting China', zh: '成都 · 连接中国' },
    lead: { en: 'API EduVoyage · Our China gateway.', zh: 'API EduVoyage · 我们的中国门户' },
    kicker: { en: 'CHINA GATEWAY', zh: '中国门户' },
    heading: { en: 'China beyond the destination.', zh: '中国，不止于目的地。' },
    items: [
      { num: '01', title: { en: 'API EduVoyage', zh: 'API EduVoyage' }, text: { en: 'APIMTC’s Chengdu-based education mobility platform connecting education, skills, student mobility and institutional exchange.', zh: 'APIMTC 位于成都的中国教育流动平台，连接教育、技能、学生流动与机构交流。' } },
      { num: '02', title: { en: 'Singapore → Chengdu → China → The World', zh: '新加坡 → 成都 → 中国 → 世界' }, text: { en: "We connect Singapore's international perspective with China's education, industry and innovation ecosystems.", zh: '将新加坡的国际视野与中国的教育、产业及创新生态连接起来。' } },
      { num: '03', title: { en: 'Every city is a classroom', zh: '每座城市都是一间课堂' }, text: { en: 'Shanghai · Shenzhen · Hangzhou · Suzhou · Beijing · Xi’an · Chengdu · Guangzhou.', zh: '上海 · 深圳 · 杭州 · 苏州 · 北京 · 西安 · 成都 · 广州。' } }
    ]
  }
}

const data = computed(() => {
  const key = route.path.slice(1) || 'about'
  const page = sets[key] || sets.about
  return {
    title: tx(page.title.en, page.title.zh),
    lead: tx(page.lead.en, page.lead.zh),
    kicker: tx(page.kicker.en, page.kicker.zh),
    heading: tx(page.heading.en, page.heading.zh),
    items: page.items.map(item => ({
      num: item.num,
      title: tx(item.title.en, item.title.zh),
      text: tx(item.text.en, item.text.zh)
    }))
  }
})
</script>
