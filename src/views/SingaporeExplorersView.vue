<!-- 新加坡未来探索系列 -->
<template>
  <div class="explorers-page">
    <section class="explorers-hero">
      <img class="hero-destination" :src="heroDestination" alt="新加坡未来探索目的地" />
      <div class="hero-grid">
        <p class="hero-index">APIMTC / 2025–26</p>
        <p class="hero-meta">PRIMARY 4–6 / AGES 9–12</p>
        <div class="hero-copy">
          <p class="eyebrow">新加坡未来探索系列</p>
          <h1>SINGAPORE<br /><span>FUTURE</span><br />EXPLORERS</h1>
          <p class="hero-sub">六大主题 · 6天5夜沉浸式学习之旅</p>
          <p class="hero-en">Explore Singapore · Discover the World · Imagine the Future</p>
        </div>
        <div class="hero-stamp" aria-hidden="true">06<br /><small>THEMES</small></div>
      </div>
    </section>

    <main>
      <section id="overview" class="overview section-shell">
        <div class="section-label">00 / INTRODUCTION</div>
        <div class="overview-grid">
          <h2>不只是一次旅行，<br /><em>而是一场走进真实世界的探索</em></h2>
          <div class="overview-copy">
            <p>专为国际及海外小学学生设计的&nbsp;6天5夜新加坡主题教育体验项目。</p>
            <p>通过&nbsp;Educate · Experience · Explore · Exchange，孩子将在真实的新加坡环境中探索科学、科技、健康、自然、可持续发展与未来产业。</p>
          </div>
        </div>
        <div class="destination-mosaic" aria-label="新加坡探索目的地图片">
          <img :src="overviewImage01" alt="新加坡探索场景" />
          <img :src="overviewImage02" alt="新加坡学习体验" />
        </div>
        <div class="overview-ribbon">
          <span><i class="info-icon">06</i>六大未来探索主题</span>
          <span><i class="info-icon">4E</i>每个主题都包含 4Es 学习体验</span>
          <strong>EDUCATE · EXPERIENCE · EXPLORE · EXCHANGE</strong>
        </div>
        <div class="four-es">
          <div><b><i class="info-icon">01</i>学习</b><span>科学 · STEM · 未来知识</span></div>
          <div><b><i class="info-icon">02</i>实践</b><span>实验 · 制作 · 挑战 · 创作</span></div>
          <div><b><i class="info-icon">03</i>探索</b><span>城市 · 自然 · 产业 · 社区</span></div>
          <div><b><i class="info-icon">04</i>交流</b><span>新加坡学生 · 当地社区 · 跨文化体验</span></div>
        </div>
        <div class="real-singapore">
          <div class="section-label">REAL SINGAPORE / REAL LEARNING</div>
          <h3><i class="info-icon">SG</i>真实的新加坡 · 真实的学习</h3>
          <div class="real-list">
            <p><b>学校交流</b> 与新加坡小学生学习、互动与分享</p>
            <p><b>城市探索</b> 牛车水 · 鱼尾狮公园 · 滨海湾花园</p>
            <p><b>社区体验</b> HDB · 市场 · 熟食中心 · 公共交通 · 社区设施</p>
            <p><b>主题场馆</b> 科学 · 科技 · 自然 · 文化 · 产业</p>
            <p><b>团队挑战</b> 寻宝 · STEM挑战 · 创意任务 · Show & Tell</p>
            <p><b>欢乐体验</b> 新加坡环球影城</p>
          </div>
        </div>
        <div class="overview-close"><span><i class="info-icon">06</i>六大主题，一段探索未来的旅程</span><b>Learn · Experience · Explore · Exchange</b><small>6 DAYS · 5 NIGHTS | PRIMARY 4–6 | AGES 9–12</small><strong>Come to Singapore. Explore the Future.<br />来新加坡，探索未来。</strong></div>
      </section>

      <article v-for="(theme, index) in themes" :id="theme.id" :key="theme.id" class="theme" :class="`theme--${index + 1}`">
        <div class="theme-shell">
          <div class="theme-topline"><span>{{ String(index + 1).padStart(2, '0') }} / 06</span><span>新加坡未来探索系列</span></div>
          <header class="theme-header">
            <p class="theme-kicker"><i class="theme-icon">{{ themeIcons[index] }}</i>小学 #{{ index + 1 }}｜{{ theme.title }}</p>
            <h2>{{ theme.english }}</h2>
            <p class="theme-category">{{ theme.category }} · 6天5夜</p>
            <p class="theme-tagline">{{ theme.tagline }}</p>
            <p class="theme-age">小学四至六年级｜9–12岁</p>
          </header>
          <div class="theme-visual"><img :src="themeImages[index]" :alt="theme.title" /></div>
          <div class="theme-intro"><p class="theme-lead"><i class="theme-icon">{{ themeIcons[index] }}</i>{{ cleanText(theme.lead) }}</p><p>{{ theme.intro }}</p></div>
          <section class="theme-block">
            <div class="section-label">04 ES / LEARNING EXPERIENCE</div><h3><i class="info-icon">4E</i>4Es 学习体验</h3>
            <div class="es-list"><p v-for="line in theme.es" :key="line"><b>{{ line.split('｜')[0] }}</b><span>{{ line.split('｜')[1] }}</span></p></div>
          </section>
          <section class="theme-block journey"><div class="section-label">06 DAYS / 05 NIGHTS</div><h3><i class="info-icon">06</i>6天5夜探索之旅</h3><p class="journey-title"><i class="info-icon">{{ themeIcons[index] }}</i>{{ cleanText(theme.journeyTitle) }}</p><div class="journey-list"><p v-for="(line, lineIndex) in theme.journey" :key="line"><i class="journey-icon">{{ String(lineIndex + 1).padStart(2, '0') }}</i>{{ cleanText(line) }}</p></div></section>
          <footer class="theme-footer"><strong>{{ cleanText(theme.close) }}</strong><span>{{ theme.closeEn }}</span><small>6 DAYS · 5 NIGHTS | PRIMARY 4–6 | AGES 9–12</small></footer>
        </div>
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
import theme01 from '@/assets/exploreSingapore/探索新加坡-03.png'
import theme02 from '@/assets/exploreSingapore/探索新加坡-04.png'
import theme03 from '@/assets/exploreSingapore/探索新加坡-05.png'
import theme04 from '@/assets/exploreSingapore/探索新加坡-06.png'
import theme05 from '@/assets/exploreSingapore/探索新加坡-07.png'
import theme06 from '@/assets/exploreSingapore/探索新加坡-08.png'
import heroDestination from '@/assets/exploreSingapore/探索新加坡-01.png'
import overviewImage01 from '@/assets/exploreSingapore/探索新加坡-02.png'
import overviewImage02 from '@/assets/exploreSingapore/探索新加坡-03.png'

const themeImages = [theme01, theme02, theme03, theme04, theme05, theme06]
type Theme = { id: string; short: string; title: string; english: string; category: string; tagline: string; lead: string; intro: string; es: string[]; journeyTitle: string; journey: string[]; close: string; closeEn: string }
const cleanText = (text: string) => text.replace(/^\p{Extended_Pictographic}(?:\uFE0F)?\s*/u, '')
const themeIcons = ['BIO', 'AIR', 'ECO', 'TECH', 'EARTH', 'AI']
const themes: Theme[] = [
  { id: 'amazing-life', short: 'LIFE', title: '奇妙生命', english: 'AMAZING LIFE', category: '生命与健康', tagline: 'Explore Life · Discover Health · Experience Singapore', lead: '🧬 探索生命 · 发现健康 · 认识真实的新加坡', intro: '通过 4Es：Educate · Experience · Explore · Exchange，孩子将在科学、健康、教育、社区与文化的真实场景中学习与探索。', es: ['EDUCATE｜启发学习生命科学 · 健康 · 新加坡生活', 'EXPERIENCE｜真实体验科学实验 · 校园 · 企业 · 社区', 'EXPLORE｜主动探索科学挑战 · 城市探索 · 社区寻宝', 'EXCHANGE｜国际交流新加坡学生 · 当地社区 · 团队合作'], journeyTitle: '🔬 五大真实学习场景', journey: ['科学　生命科学 · 动手实验', '健康　营养 · 运动 · 身心健康', '教育　新加坡小学 · 同龄人交流', '社区　住房 · 食物 · 交通 · 医疗 · 日常生活', '文化　城市探索 · 跨文化交流 · 团队合作'], close: '✨ 不只是旅行，而是一场真实世界的学习之旅', closeEn: 'Learn · Explore · Connect · Grow' },
  { id: 'young-space', short: 'SPACE', title: '小小太空探索家', english: 'YOUNG SPACE EXPLORERS', category: '太空与航空', tagline: 'Explore Flight · Discover Space · Imagine the Future', lead: '🚀 从飞机起飞，到探索太空', intro: '通过 4Es：Educate · Experience · Explore · Exchange，孩子将探索飞行原理、航空科技、太空科学，并亲手完成未来太空任务挑战。', es: ['EDUCATE｜启发学习飞行原理 · 太空科学 · 航空科技', 'EXPERIENCE｜真实体验STEM实践 · 航空探索 · 科学馆 · 机场', 'EXPLORE｜主动探索飞机设计 · 太空挑战 · 月球/火星任务', 'EXCHANGE｜国际交流新加坡学生 · 当地社区 · 团队合作'], journeyTitle: '🌌 从飞行科学到未来太空任务', journey: ['✈️ Flight　升力 · 推力 · 阻力 · 重力', '🚀 Space　太阳系 · 行星 · 月球 · 太空探索', '🔧 STEM　设计 · 建造 · 实验 · 解决问题', '🛰️ Technology　航空 · 卫星 · 太空科技', '🤝 Exchange　新加坡学生 · 跨文化交流 · 团队合作'], close: '✨ 不只是仰望星空，而是亲手探索未来', closeEn: 'Learn · Build · Explore · Imagine' },
  { id: 'green-singapore', short: 'GREEN', title: '绿色新加坡', english: 'GREEN SINGAPORE', category: '可持续发展', tagline: 'Discover Sustainability · Build a Greener Future', lead: '🌱 一座城市，如何变得更绿色、更宜居？', intro: '通过 4Es：Educate · Experience · Explore · Exchange，孩子将探索新加坡如何利用科学、科技、自然与城市规划，建设一个更绿色、更可持续的未来。', es: ['EDUCATE｜启发学习可持续发展 · 环境 · 城市规划', 'EXPERIENCE｜真实体验STEM实践 · 绿色城市 · 湿地生态', 'EXPLORE｜主动探索水资源 · 能源 · 生物多样性 · 循环经济', 'EXCHANGE｜国际交流新加坡学生 · 社区探索 · 团队合作'], journeyTitle: '🌍 探索绿色未来的五大主题', journey: ['💧 水资源　珍惜水资源 · 水循环 · 气候韧性', '⚡ 能源　可再生能源 · 节能科技', '♻️ 循环经济　减少浪费 · 回收 · 可持续生活', '🌿 自然生态　生物多样性 · 湿地 · 自然保护', '🏙️ 绿色城市　建筑 · 交通 · 社区 · 城市规划'], close: '✨ 从发现问题，到设计未来', closeEn: 'Explore · Think · Design · Build' },
  { id: 'future-singapore', short: 'FUTURE', title: '未来新加坡', english: 'FUTURE SINGAPORE', category: '新兴产业', tagline: 'Discover Tomorrow · Create the Future', lead: '🤖 科技，将如何改变未来的新加坡？', intro: '通过 4Es：Educate · Experience · Explore · Exchange，孩子将探索机器人、AI与自动化、3D打印、电动车、智能制造及食品科技，发现科技如何从创意变成真实应用。', es: ['EDUCATE｜启发学习机器人 · 工程 · 智能制造 · 新兴产业', 'EXPERIENCE｜真实体验STEM实践 · 3D打印 · 企业参访 · 科技探索', 'EXPLORE｜主动探索设计 · 编程 · 制造 · 自动化 · 未来交通', 'EXCHANGE｜国际交流新加坡学生 · 社区探索 · 团队合作'], journeyTitle: '⚙️ 探索未来产业', journey: ['🤖 Robotics　机器人 · 编程 · 自动化', '🖨️ Digital Making　3D打印 · 数码设计 · 快速原型', '🚗 Smart Mobility　电动车 · 智能交通', '🏭 Smart Manufacturing　智能工厂 · 先进制造', '🍽️ Food Technology　食品科技 · 自动化生产'], close: '✨ 从“想法”到“现实”', closeEn: 'Imagine · Build · Test · Innovate' },
  { id: 'amazing-earth', short: 'EARTH', title: '神奇的地球', english: 'AMAZING PLANET EARTH', category: '地球科学与自然世界', tagline: 'Discover Earth · Explore Life · Protect Our Planet', lead: '🌏 我们的地球是如何运作的？', intro: '从地球科学到野生动物，从海洋到湿地，孩子将通过 4Es：Educate · Experience · Explore · Exchange，亲身探索地球、生命与自然世界的奇妙联系。', es: ['EDUCATE｜启发学习地球科学 · 自然历史 · 生态系统', 'EXPERIENCE｜真实体验博物馆 · 野生动物 · 海洋 · 户外考察', 'EXPLORE｜主动探索观察 · 记录 · 分析 · 发现', 'EXCHANGE｜国际交流新加坡学生 · 自然探索 · 社区互动'], journeyTitle: '🔎 一路探索地球的奇妙联系', journey: ['🌍 Earth　地球科学 · 自然历史', '🦋 Life　生物多样性 · 动物适应', '🌳 Habitats　森林 · 湿地 · 栖息地', '🌊 Ocean　海洋生态 · 海洋保育', '🔬 Science　观察 · 探究 · 发现', '🏙️ People　城市 · 社区 · 人与自然'], close: '✨ 从发现自然，到学会守护地球', closeEn: 'Observe · Discover · Understand · Protect' },
  { id: 'ai-innovators', short: 'AI', title: 'AI小小创新家', english: 'AI FOR YOUNG INNOVATORS', category: '人工智能 · 机器人 · 3D打印 · 新兴科技', tagline: 'Explore AI · Create with Technology · Innovate for Tomorrow', lead: '🤖 AI，不只是未来科技，更是创造未来的工具', intro: '孩子将通过 4Es：Educate · Experience · Explore · Exchange，探索人工智能、机器人、3D打印与智能科技，并亲手把创意变成作品。\n无需编程或AI经验 · 无需自带电脑', es: ['EDUCATE｜启发学习AI · 机器人 · 数字制造 · 新兴科技', 'EXPERIENCE｜真实体验3D打印 · 科学馆 · 智能工厂 · AI实践', 'EXPLORE｜主动探索感知 · 数据 · 自动化 · AI创作', 'EXCHANGE｜国际交流新加坡学生 · 社区探索 · 团队创新'], journeyTitle: '🚀 探索未来科技', journey: ['🤖 AI & Robotics　人工智能 · 机器人 · 自动化', '🖨️ Digital Making　3D打印 · 数字设计 · 创客科技', '🧠 Generative AI　创意 · 故事 · 图像 · 构思', '🏭 Smart Technology　智能制造 · 智慧农业 · 未来出行', '🔐 Responsible AI　AI伦理 · 事实核查 · 数据与数字安全'], close: '✨ 从动手制作，到创造未来', closeEn: 'Make · Explore · Create · Innovate' }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap');
.explorers-page{--black:#111113;--paper:#f7f7f5;--line:#d8d8d3;--muted:#666661;background:var(--paper);color:var(--black);font-family:'DM Sans',Arial,sans-serif}.explorers-hero{background:var(--black);color:#f7f7f5;min-height:680px;padding:124px 6vw 70px}.hero-grid{max-width:1320px;margin:auto;display:grid;grid-template-columns:1fr auto;grid-template-rows:auto 1fr;min-height:480px;border-top:1px solid #454549;padding-top:18px;position:relative}.hero-index,.hero-meta,.eyebrow,.section-label,.theme-topline,.hero-en,.theme-age,.theme-category,.theme-footer small,.explorers-index{font-family:'Space Mono',monospace;letter-spacing:.06em}.hero-meta{justify-self:end}.hero-copy{align-self:end}.eyebrow{color:#d6ff45;font-size:13px;margin-bottom:30px}.hero-copy h1{font-family:'Space Mono',monospace;font-size:clamp(52px,10vw,150px);line-height:.87;letter-spacing:-.07em;margin:0 0 30px}.hero-copy h1 span{color:#d6ff45}.hero-sub{font-size:20px;margin:0 0 8px}.hero-en{color:#aaa;font-size:13px}.hero-stamp{position:absolute;right:0;bottom:0;border:1px solid #666;padding:18px 22px;text-align:center;font:700 38px 'Space Mono'}.hero-stamp small{font-size:10px;color:#aaa}.explorers-index{position:sticky;top:0;z-index:5;display:flex;gap:25px;overflow:auto;white-space:nowrap;background:#fff;border-bottom:1px solid var(--line);padding:18px 6vw;font-size:11px}.explorers-index a:hover{color:#739000}.section-shell,.theme-shell{max-width:1180px;margin:auto;padding:100px 6vw}.section-label{font-size:11px;color:var(--muted);margin-bottom:28px}.overview{padding-bottom:70px}.overview-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:9vw}.overview h2{font:400 clamp(32px,5vw,68px)/1.05 'Space Mono',monospace;letter-spacing:-.06em;margin:0}.overview h2 em{font-style:normal;color:#697700}.overview-copy{font-size:18px;line-height:1.8;max-width:460px}.overview-ribbon{border-top:1px solid var(--black);border-bottom:1px solid var(--black);display:flex;align-items:center;gap:30px;padding:20px 0;margin:85px 0 0;flex-wrap:wrap}.overview-ribbon strong{margin-left:auto;font:12px 'Space Mono'}.four-es{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid var(--line)}.four-es div{padding:28px 15px 35px 0;border-right:1px solid var(--line)}.four-es div+div{padding-left:20px}.four-es div:last-child{border:0}.four-es b,.four-es span{display:block}.four-es b{font-size:18px;margin-bottom:12px}.four-es span{color:var(--muted);line-height:1.5}.real-singapore{padding:90px 0 30px;display:grid;grid-template-columns:1fr 1.5fr;gap:6vw}.real-singapore h3{font:400 30px 'Space Mono';margin:0}.real-list{display:grid;grid-template-columns:1fr 1fr;gap:16px 30px}.real-list p{margin:0;border-top:1px solid var(--line);padding-top:12px;line-height:1.5}.real-list b{display:block;font-family:'Space Mono';font-size:13px;margin-bottom:6px}.overview-close{text-align:center;border-top:1px solid var(--black);padding:55px 0 15px;display:flex;flex-direction:column;gap:13px}.overview-close span{font-size:22px}.overview-close b{font:16px 'Space Mono'}.overview-close small{font:11px 'Space Mono';color:var(--muted)}.overview-close strong{font:700 24px 'Space Mono'}.theme{border-top:1px solid #fff;background:#151518;color:#f7f7f5}.theme--2{background:#202331}.theme--3{background:#17352d}.theme--4{background:#2c273b}.theme--5{background:#253735}.theme--6{background:#1b2e48}.theme-shell{padding-top:70px;padding-bottom:80px}.theme-topline{display:flex;justify-content:space-between;color:#aaa;font-size:11px;border-bottom:1px solid #ffffff33;padding-bottom:18px}.theme-header{padding:75px 0 55px;max-width:900px}.theme-kicker{font:16px 'Space Mono';color:#d6ff45}.theme-header h2{font:700 clamp(42px,8vw,104px)/.95 'Space Mono';letter-spacing:-.08em;margin:20px 0}.theme-category{font-size:14px;color:#d3d3d0}.theme-tagline{font:18px 'Space Mono';margin:28px 0 0}.theme-age{font-size:11px;color:#aaa;margin-top:25px}.theme-intro{border-left:3px solid #d6ff45;padding:10px 0 10px 25px;max-width:790px;font-size:18px;line-height:1.8}.theme-intro p{white-space:pre-line}.theme-lead{font:700 25px/1.4 'Space Mono';margin-top:0}.theme-block{margin-top:95px}.theme-block h3{font:700 28px 'Space Mono';margin:0 0 30px}.es-list{border-top:1px solid #ffffff44}.es-list p{display:grid;grid-template-columns:220px 1fr;gap:30px;border-bottom:1px solid #ffffff22;padding:18px 0;margin:0;line-height:1.6}.es-list b{font:13px 'Space Mono';color:#d6ff45}.journey-title{font:700 18px 'Space Mono';color:#d6ff45}.journey-list{display:grid;grid-template-columns:repeat(2,1fr);gap:0 40px;border-top:1px solid #ffffff44}.journey-list p{padding:18px 0;border-bottom:1px solid #ffffff22;margin:0;line-height:1.6}.theme-footer{margin-top:100px;border-top:1px solid #ffffff55;padding-top:30px;display:flex;align-items:flex-start;gap:20px;flex-direction:column}.theme-footer strong{font:700 25px 'Space Mono'}.theme-footer span{font:17px 'Space Mono';color:#d6ff45}.theme-footer small{font-size:11px;color:#aaa}@media(max-width:700px){.explorers-hero{min-height:600px;padding:100px 22px 50px}.hero-grid{min-height:450px}.hero-meta{font-size:9px}.hero-copy h1{font-size:clamp(44px,14vw,80px)}.hero-sub{font-size:15px}.hero-stamp{font-size:25px;padding:10px 12px}.explorers-index{padding:15px 22px;gap:18px}.section-shell,.theme-shell{padding-left:22px;padding-right:22px;padding-top:65px}.overview-grid,.real-singapore{grid-template-columns:1fr;gap:35px}.overview-copy{font-size:16px}.overview-ribbon{margin-top:55px;display:block}.overview-ribbon span,.overview-ribbon strong{display:block;margin:0 0 12px}.four-es{grid-template-columns:1fr 1fr}.four-es div{border-bottom:1px solid var(--line)}.four-es div:nth-child(2){border-right:0}.real-list{grid-template-columns:1fr}.theme-header{padding:55px 0 38px}.theme-header h2{font-size:clamp(36px,12vw,72px)}.theme-intro{font-size:16px}.theme-lead{font-size:20px}.es-list p{grid-template-columns:1fr;gap:5px}.journey-list{grid-template-columns:1fr}.theme-footer strong{font-size:20px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.explorers-index{position:relative}}

/* Aurora travel direction: imagery leads each chapter while the original copy remains untouched. */
.explorers-page{--paper:#f6f8f3;--black:#102238;--line:#c8d9d2;--muted:#466375;background:var(--paper)}
.explorers-hero{isolation:isolate;position:relative;overflow:hidden;min-height:720px;background:#102238;padding:142px 6vw 90px}
.explorers-hero::before,.explorers-hero::after{content:"";position:absolute;z-index:-1;border-radius:50%;filter:blur(18px);opacity:.78;pointer-events:none}.explorers-hero::before{width:72vw;height:60vw;right:-20vw;top:-22vw;background:radial-gradient(ellipse,#6df2c0 0%,#18a9b8 38%,transparent 70%);transform:rotate(-18deg)}.explorers-hero::after{width:62vw;height:50vw;left:-24vw;bottom:-30vw;background:radial-gradient(ellipse,#b3ee55 0%,#5b66db 48%,transparent 72%)}
.hero-destination{position:absolute;z-index:-2;inset:0;width:100%;height:100%;object-fit:cover;opacity:.28;mix-blend-mode:screen}.hero-grid{min-height:490px;border-top-color:#b8e9dc}.hero-copy h1{font-size:clamp(50px,9.6vw,145px);text-shadow:0 10px 35px #07142566}.hero-copy h1 span,.eyebrow{color:#d5ff5b}.hero-sub{font-weight:700}.hero-stamp{border-color:#b8e9dc;background:#10223899;backdrop-filter:blur(10px)}
.explorers-index{box-shadow:0 10px 30px #24485c12;color:#244c60}.explorers-index a:hover{color:#079c85}.overview{background:linear-gradient(145deg,#f6f8f3,#e9f3ec)}.overview h2 em{color:#008f7a}.overview-ribbon{border-color:#0e8e7e;background:#dff6ed;padding:22px 20px}.four-es{border-color:#bdd9d0}.four-es div{border-color:#bdd9d0}.real-singapore{position:relative}.real-singapore::after{content:"";position:absolute;right:0;top:70px;width:130px;height:130px;border-radius:50%;background:linear-gradient(135deg,#c5f46e,#24c5b0);opacity:.45;filter:blur(1px);z-index:0}.real-singapore>*{position:relative;z-index:1}.overview-close{border-color:#167d73}.overview-close strong{color:#0b786e}
.destination-mosaic{display:grid;grid-template-columns:1.25fr .75fr;gap:18px;margin:66px 0 12px}.destination-mosaic img{width:100%;height:250px;object-fit:cover;border-radius:18px;box-shadow:0 20px 40px #1b51531f}.destination-mosaic img+img{margin-top:52px}
.theme{position:relative;overflow:hidden;background:#123d50}.theme::before{content:"";position:absolute;inset:0;opacity:.12;background:radial-gradient(circle at 85% 12%,#b8ff55,transparent 30%),radial-gradient(circle at 10% 70%,#42e6d4,transparent 34%);pointer-events:none}.theme--2{background:#172d59}.theme--3{background:#145244}.theme--4{background:#3c2b68}.theme--5{background:#24595b}.theme--6{background:#173d68}.theme-shell{position:relative;z-index:1}.theme-visual{width:100%;height:clamp(220px,34vw,430px);overflow:hidden;border-radius:22px;margin:0 0 52px;box-shadow:0 24px 60px #061b2d55}.theme-visual img{display:block;width:100%;height:100%;object-fit:cover;transition:transform .5s ease}.theme-visual:hover img{transform:scale(1.035)}.theme-intro{border-left-color:#d5ff5b;background:#ffffff0d;padding-right:28px;border-radius:0 10px 10px 0}.theme-kicker,.journey-title,.es-list b,.theme-footer span{color:#d5ff5b}.es-list,.journey-list{border-color:#ffffff55}.es-list p,.journey-list p{border-color:#ffffff2e}.theme-footer strong{font-size:clamp(20px,2.3vw,29px)}
@media(max-width:700px){.explorers-hero{min-height:650px;padding-top:112px}.hero-destination{opacity:.2}.destination-mosaic{grid-template-columns:1fr;gap:12px;margin-top:45px}.destination-mosaic img,.destination-mosaic img+img{height:190px;margin-top:0}.theme-visual{height:220px;border-radius:14px;margin-bottom:35px}.theme-intro{padding-left:18px;padding-right:16px}.real-singapore::after{width:80px;height:80px;top:35px}}
@media(prefers-reduced-motion:reduce){.theme-visual img{transition:none}}

/* Unified editorial icon treatment keeps the brochure information scannable. */
.info-icon,.theme-icon,.journey-icon{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;font-style:normal;font-family:'Space Mono',monospace;font-weight:700;letter-spacing:0;border:1px solid currentColor;border-radius:50%;vertical-align:middle}
.info-icon{width:28px;height:28px;margin-right:10px;font-size:9px;color:#087f73}
.four-es .info-icon{margin-right:8px;color:#087f73}
.theme-icon{width:42px;height:42px;margin-right:12px;font-size:10px;color:#d5ff5b;border-radius:10px}
.journey-icon{width:28px;height:28px;margin-right:12px;font-size:9px;color:#d5ff5b;border-radius:8px}
.overview-ribbon span,.overview-ribbon strong,.four-es b,.theme-category,.theme-age,.hero-sub{white-space:nowrap}
.overview-ribbon span{display:inline-flex;align-items:center}
.real-singapore h3{display:flex;align-items:center;gap:2px}
.journey-list p{display:flex;align-items:center;min-width:0}
.journey-list p{white-space:nowrap}
.theme-header h2{max-width:100%;white-space:nowrap}
@media(max-width:700px){.theme-header h2{white-space:normal}.journey-list p{white-space:normal}.overview-ribbon span,.overview-ribbon strong{white-space:normal}.info-icon{width:24px;height:24px}}
</style>
