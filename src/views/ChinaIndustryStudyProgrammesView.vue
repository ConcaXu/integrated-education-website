<!-- 中国产业考察项目系列 -->
<template>
  <div class="industry-page">
    <section
      class="industry-hero"
      :style="{
        backgroundImage: `linear-gradient(90deg, rgba(8, 48, 78, .78), rgba(8, 48, 78, .28)), url(${heroBackground})`,
      }"
    >
      <div class="industry-shell industry-hero__inner">
        <p class="industry-eyebrow">APIMTC · MICE &amp; BUSINESS</p>
        <h1>
          {{
            isEnglish
              ? "China Industry Study Programmes"
              : "中国产业考察项目系列"
          }}
        </h1>
        <p>
          {{
            isEnglish
              ? "Executive Industrial Study · Technology Benchmarking · Business Exchange · Cultural Experience"
              : "高管产业考察 · 技术标杆学习 · 商务交流 · 文化体验"
          }}
        </p>
      </div>
    </section>
    <main class="industry-shell industry-main">
      <div class="industry-toolbar">
        <div>
          <span class="industry-label">{{
            isEnglish ? "PROGRAMME BROCHURE" : "项目宣传册"
          }}</span
          ><span>{{
            isEnglish ? "Complete programme content" : "完整项目内容"
          }}</span>
        </div>
      </div>
      <div class="industry-gallery">
        <figure v-for="image in images" :key="image.src">
          <img :src="image.src" :alt="image.alt" />
          <figcaption>{{ image.alt }}</figcaption>
        </figure>
      </div>
      <article class="industry-document">
        <template v-for="(block, index) in content" :key="index">
          <h2
            v-if="block.type === 'heading'"
            class="industry-document__heading"
          >
            <component
              v-if="block.icon"
              :is="block.icon"
              class="industry-document__icon"
              aria-hidden="true"
            />
            <span>{{ block.text }}</span>
          </h2>
          <p v-else class="industry-document__paragraph">
            <component
              v-if="block.icon"
              :is="block.icon"
              class="industry-document__inline-icon"
              aria-hidden="true"
            />
            <span>{{ block.text }}</span>
          </p>
        </template>
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  Connection,
  Cpu,
  DataAnalysis,
  Lightning,
  Location as Globe,
  Promotion as Rocket,
  Van,
} from "@element-plus/icons-vue";
import { useI18n } from "@/composables/useI18n";
import image00 from "@/assets/chineseIndustryInspectionProject-images/图片-00.png";
import image01 from "@/assets/chineseIndustryInspectionProject-images/图片-01.png";
import image02 from "@/assets/chineseIndustryInspectionProject-images/图片-02.png";
import image03 from "@/assets/chineseIndustryInspectionProject-images/图片-03.png";
import heroBackground from "@/assets/chineseIndustryInspectionProject-images/bj.png";

const { lang } = useI18n();
const isEnglish = computed(() => lang.value === "en");
const images = computed(() =>
  isEnglish.value
    ? [
        { src: image00, alt: "China industry study programme" },
        { src: image01, alt: "Executive industry visit" },
        { src: image02, alt: "Technology benchmarking" },
        { src: image03, alt: "Business exchange" },
      ]
    : [
        { src: image00, alt: "中国产业考察项目" },
        { src: image01, alt: "高管产业参访" },
        { src: image02, alt: "技术标杆学习" },
        { src: image03, alt: "商务交流体验" },
      ],
);

const zh = [
  ["heading", "中国产业考察项目系列"],
  ["p", "高管产业考察 · 技术标杆学习 · 商务交流 · 文化体验"],
  [
    "p",
    "为国际企业家、产业高管及专业代表团精心设计的7天6夜高端产业考察项目，深入了解中国领先的产业、制造及科技生态，并通过企业参访与专业交流，探索潜在合作机会。",
  ],
  ["heading", "项目亮点", Rocket],
  [
    "p",
    "每项考察项目均结合：企业及工厂参访；高管及技术交流；产业及制造标杆学习；国际商务交流与人脉拓展；精选文化体验。",
  ],
  ["heading", "三大产业考察项目", DataAnalysis],
  [
    "p",
    "汽车与先进制造产业考察｜成都 → 重庆 → 北京｜汽车制造 · 新能源汽车 · 智能工厂 · 汽车零部件 · 电池与动力系统 · 汽车研发 · 智能汽车",
    Van,
  ],
  [
    "p",
    "新能源与能源科技产业考察｜成都 → 宜宾｜光伏 · 储能 · 锂资源 · 电池材料 · 动力电池 · 智能制造 · 绿色制造 · 新能源产业集群",
    Lightning,
  ],
  [
    "p",
    "AI与智能制造产业考察｜上海 → 苏州 → 无锡 → 杭州｜人工智能与数字化 · 医药与医疗器械 · 新能源与光伏 · 矿业与工业设备 · 机器人 · 智能制造",
    Cpu,
  ],
  ["heading", "参与者将获得", Connection],
  [
    "p",
    "产业洞察 · 技术标杆学习 · 制造最佳实践 · 供应商与合作伙伴连接 · 商业机会 · 专业人脉拓展",
  ],
  ["heading", "商务 + 文化体验", Globe],
  [
    "p",
    "精选文化体验为产业项目增添深度，帮助参与者更全面地了解中国的营商环境、区域发展与商业文化，同时创造非正式交流和关系建立的机会。",
  ],
  ["heading", "三大项目 · 一个目标"],
  ["p", "了解中国 · 对标产业 · 探索技术 · 连接伙伴 · 拓展全球商业机会"],
  ["p", "最终企业参访、接待机构及项目内容将根据代表团需求及接待企业确认。"],
];
const en = [
  ["heading", "CHINA INDUSTRY STUDY PROGRAMMES"],
  [
    "p",
    "Executive Industrial Study · Technology Benchmarking · Business Exchange · Cultural Experience",
  ],
  [
    "p",
    "A curated series of 7-day / 6-night executive study missions for international business leaders, industry executives and professional delegations seeking first-hand exposure to China’s leading industrial, manufacturing and technology ecosystems.",
  ],
  ["heading", "Programme Highlights", Rocket],
  [
    "p",
    "Each programme combines: Corporate & factory visits; Executive & technology exchanges; Industry and manufacturing benchmarking; International business networking; Selected cultural experiences.",
  ],
  ["heading", "Three Executive Industry Studies", DataAnalysis],
  [
    "p",
    "Automotive & Advanced Manufacturing｜Chengdu → Chongqing → Beijing｜Automotive Manufacturing · NEVs · Smart Factories · Components · Batteries & Powertrain · Automotive R&D · Intelligent Vehicles",
    Van,
  ],
  [
    "p",
    "New Energy & Energy Technology｜Chengdu → Yibin｜Solar PV · Energy Storage · Lithium · Battery Materials · EV Batteries · Smart Manufacturing · Green Manufacturing · Industrial Clusters",
    Lightning,
  ],
  [
    "p",
    "AI & Smart Manufacturing｜Shanghai → Suzhou → Wuxi → Hangzhou｜AI & Digitalisation · Pharmaceuticals & Medical Devices · New Energy & PV · Mining & Industrial Equipment · Robotics · Smart Manufacturing",
    Cpu,
  ],
  ["heading", "What Participants Gain", Connection],
  [
    "p",
    "Industrial Insights · Technology Benchmarking · Manufacturing Best Practices · Supplier & Partner Connections · Business Opportunities · Professional Networking",
  ],
  ["heading", "Business + Cultural Experience", Globe],
  [
    "p",
    "Selected cultural experiences complement the industrial programme, providing participants with a broader understanding of China’s business environment, regional development and commercial culture, while creating opportunities for informal networking and relationship building.",
  ],
  ["heading", "THREE PROGRAMMES · ONE OBJECTIVE"],
  [
    "p",
    "Understand China · Benchmark Industry · Discover Technology · Connect with Partners · Explore Global Business Opportunities",
  ],
  [
    "p",
    "Final corporate visits, host organisations and programme content are subject to delegation requirements and host-company confirmation.",
  ],
];
const content = computed(() =>
  (isEnglish.value ? en : zh).map(([type, text, icon]) => ({
    type,
    text,
    icon,
  })),
);
</script>

<style scoped>
.industry-page {
  background: #f5f8fb;
  color: #18324a;
  min-height: 100vh;
}
.industry-shell {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;
}
.industry-hero {
  padding: 150px 0 100px;
  background: linear-gradient(135deg, #123b5d, #1d6d86);
  color: #fff;
}
.industry-eyebrow,
.industry-label {
  letter-spacing: 0.16em;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}
.industry-hero h1 {
  font:
    600 clamp(42px, 7vw, 82px)/1.02 "Playfair Display",
    Georgia,
    serif;
  margin: 20px 0;
}
.industry-hero p:last-child {
  font-size: 17px;
  max-width: 650px;
}
.industry-main {
  padding-top: 42px;
  padding-bottom: 100px;
}
.industry-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 22px;
  background: #fff;
  border: 1px solid #d8e7f2;
  box-shadow: 0 16px 40px rgba(24, 56, 80, 0.08);
}
.industry-toolbar div {
  display: flex;
  gap: 16px;
  align-items: center;
}
.industry-toolbar span:last-child {
  color: #7390a7;
}
.industry-language {
  border: 0;
  background: #ff8249;
  color: #fff;
  padding: 11px 18px;
  border-radius: 5px;
  font-weight: 800;
  cursor: pointer;
}
.industry-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 26px 0 36px;
}
.industry-gallery figure {
  margin: 0;
  background: #fff;
  border: 1px solid #d8e7f2;
  box-shadow: 0 10px 24px rgba(24, 56, 80, 0.08);
}
.industry-gallery img {
  display: block;
  width: 100%;
  aspect-ratio: 1.55;
  object-fit: cover;
}
.industry-gallery figcaption {
  padding: 10px 12px;
  font-size: 12px;
  color: #67839a;
}
.industry-document {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid #d8e7f2;
  padding: 42px 48px;
  box-shadow: 0 18px 50px rgba(24, 56, 80, 0.08);
}
.industry-document h2 {
  font:
    600 28px/1.2 "Playfair Display",
    Georgia,
    serif;
  color: #123b5d;
  margin: 28px 0 12px;
}
.industry-document h2:first-child {
  margin-top: 0;
}
.industry-document p {
  white-space: pre-line;
  line-height: 1.85;
  margin: 0 0 14px;
  color: #49677e;
}
@media (max-width: 760px) {
  .industry-shell {
    padding: 0 18px;
  }
  .industry-hero {
    padding: 120px 0 72px;
  }
  .industry-toolbar div {
    display: block;
  }
  .industry-toolbar span {
    display: block;
  }
  .industry-toolbar span:last-child {
    margin-top: 5px;
  }
  .industry-gallery {
    grid-template-columns: repeat(2, 1fr);
  }
  .industry-document {
    padding: 28px 22px;
  }
  .industry-document h2 {
    font-size: 23px;
  }
}
/* Keep decorative Element Plus icons subordinate to the document text. */
.industry-document h2 {
  display: flex;
  align-items: center;
  gap: 10px;
}
.industry-document__icon {
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  color: #e06f3d;
}
.industry-document p {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.industry-document__inline-icon {
  width: 15px;
  height: 15px;
  flex: 0 0 15px;
  margin-top: 0.4em;
  color: #e06f3d;
}
@media (max-width: 760px) {
  .industry-document h2 {
    gap: 8px;
  }
  .industry-document__icon {
    width: 18px;
    height: 18px;
    flex-basis: 18px;
  }
  .industry-document__inline-icon {
    width: 14px;
    height: 14px;
    flex-basis: 14px;
  }
}
</style>
