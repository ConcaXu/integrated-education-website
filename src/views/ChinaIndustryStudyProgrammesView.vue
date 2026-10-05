<!-- 中国产业考察项目系列 -->
<template>
  <div class="industry-page">
    <section
      class="industry-hero"
      :style="{
        backgroundImage: `linear-gradient(92deg, rgba(7, 30, 52, 0.94) 0%, rgba(7, 30, 52, 0.6) 44%, rgba(7, 30, 52, 0.14) 100%), linear-gradient(180deg, rgba(7, 30, 52, 0.08) 60%, rgba(7, 30, 52, 0.62) 100%), url(${heroBackground})`,
      }"
    >
      <div class="industry-shell industry-hero__inner">
        <p class="industry-eyebrow">APIMTC / EXECUTIVE STUDY MISSIONS</p>
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
              ? "Executive industry study · Technology benchmarking · Business exchange · Cultural experience"
              : "高管产业考察 · 技术标杆学习 · 商务交流 · 文化体验"
          }}
        </p>
      </div>
    </section>
    <main>
      <section class="industry-intro industry-shell">
        <div class="industry-intro__copy">
          <span class="section-index">01 / PROGRAMME OVERVIEW</span>
          <h2>
            {{
              isEnglish
                ? "See China's industry in motion."
                : "走进中国领先产业的真实现场。"
            }}
          </h2>
          <p>
            {{
              isEnglish
                ? "A curated series of 7-day / 6-night executive study missions for international business leaders, manufacturing and technology ecosystems."
                : "为国际商业领袖、制造业与科技生态量身打造的一系列 7天6夜高管考察项目。"
            }}
          </p>
        </div>
        <div class="industry-pillars">
          <div
            v-for="(pillar, index) in pillars"
            :key="pillar.title"
            class="industry-pillar"
          >
            <span class="industry-pillar__icon">
              <component :is="pillar.icon" aria-hidden="true" />
            </span>
            <span class="industry-pillar__label">{{ pillar.title }}</span>
            <span class="industry-pillar__index" aria-hidden="true">{{
              String(index + 1).padStart(2, "0")
            }}</span>
          </div>
        </div>
      </section>
      <section
        class="industry-gallery industry-shell"
        aria-label="Programme experience"
      >
        <figure v-for="image in images" :key="image.src">
          <img :src="image.src" :alt="image.alt" />
          <figcaption>{{ image.alt }}</figcaption>
        </figure>
      </section>
      <section class="programme-overview">
        <div class="industry-shell">
          <div class="section-heading">
            <div>
              <span class="section-index">02 / SELECT A JOURNEY</span>
              <h2>
                {{
                  isEnglish
                    ? "Three executive industry studies"
                    : "三大产业考察项目"
                }}
              </h2>
            </div>
            <p>
              {{
                isEnglish
                  ? "Select a programme to move directly to its full study brief."
                  : "点击相关学习之旅，即可查看对应项目详情。"
              }}
            </p>
          </div>
          <div class="industry-table-wrap">
            <table
              class="industry-table"
              :class="{ 'industry-table--en': isEnglish }"
            >
              <thead>
                <tr>
                  <th>{{ isEnglish ? "Programme" : "项目" }}</th>
                  <th>{{ isEnglish ? "Route" : "路线" }}</th>
                  <th>{{ isEnglish ? "Study focus" : "重点考察领域" }}</th>
                  <th>
                    {{ isEnglish ? "Suitable industries" : "适合产业领域" }}
                  </th>
                  <th>
                    <span class="sr-only">{{
                      isEnglish ? "View details" : "查看详情"
                    }}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="programme in programmes"
                  :key="programme.id"
                  class="industry-table__row"
                  @click="scrollToProgramme(programme.id)"
                >
                  <th scope="row">
                    <button
                      :aria-label="`${isEnglish ? 'View details for ' : '查看'}${programme.title}`"
                      @click.stop="scrollToProgramme(programme.id)"
                    >
                      <component
                        :is="programme.icon"
                        aria-hidden="true"
                      /><span>{{ programme.title }}</span>
                    </button>
                  </th>
                  <td>{{ programme.route }}</td>
                  <td>{{ programme.focus }}</td>
                  <td>{{ programme.industries }}</td>
                  <td class="industry-table__action">
                    <button
                      :aria-label="`${isEnglish ? 'View details for ' : '查看'}${programme.title}`"
                      @click.stop="scrollToProgramme(programme.id)"
                    >
                      <Right aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <article
        v-for="(programme, index) in programmes"
        :id="programme.id"
        :key="programme.id"
        class="programme-detail"
        :class="`programme-detail--${index + 1}`"
      >
        <div class="industry-shell">
          <div class="programme-topline">
            <span>{{ String(index + 1).padStart(2, "0") }} / 03</span
            ><span>{{
              isEnglish
                ? "CHINA INDUSTRY STUDY PROGRAMMES"
                : "中国产业考察项目系列"
            }}</span>
          </div>
          <header class="programme-header">
            <component
              :is="programme.icon"
              class="programme-header__icon"
              aria-hidden="true"
            />
            <div>
              <p>{{ programme.kicker }}</p>
              <h2>{{ programme.detailTitle }}</h2>
              <span>{{ programme.duration }} · {{ programme.shortFocus }}</span>
            </div>
          </header>
          <figure class="programme-visual">
            <img :src="programmeImages[index]" :alt="programme.detailTitle" />
          </figure>
          <div class="programme-facts">
            <div>
              <span>{{ isEnglish ? "Route" : "考察路线" }}</span
              ><strong>{{ programme.route }}</strong>
            </div>
            <div>
              <span>{{ isEnglish ? "Duration" : "行程" }}</span
              ><strong>{{ programme.duration }}</strong>
            </div>
            <div>
              <span>{{ isEnglish ? "Core focus" : "核心重点" }}</span
              ><strong>{{ coreFocusOf(programme) }}</strong>
            </div>
          </div>
          <p class="programme-lead">{{ programme.intro }}</p>
          <div class="programme-layout">
            <section>
              <h3>{{ isEnglish ? "Programme Highlights" : "项目亮点" }}</h3>
              <ul class="check-list">
                <li v-for="item in programme.highlights" :key="item">
                  {{ item }}
                </li>
              </ul>
            </section>
            <section>
              <h3>{{ programme.pathwayTitle }}</h3>
              <p class="programme-pathway">{{ programme.pathway }}</p>
              <h3 v-if="programme.citiesTitle" class="city-list-title">
                {{ programme.citiesTitle }}
              </h3>
              <div class="city-list">
                <div v-for="city in programme.cities" :key="city.name">
                  <strong>{{ city.name }}</strong
                  ><span>{{ city.detail }}</span>
                </div>
              </div>
            </section>
          </div>
          <section
            v-if="programme.customization"
            class="programme-customization"
          >
            <h3>{{ programme.customization.title }}</h3>
            <div class="programme-customization__types">
              <span
                v-for="companyType in programme.customization.companyTypes"
                :key="companyType"
              >
                {{ companyType }}
              </span>
            </div>
            <p>{{ programme.customization.description }}</p>
            <template v-if="programme.customization.culture">
              <h3 class="programme-customization__culture-title">
                {{ programme.customization.culture.title }}
              </h3>
              <p>{{ programme.customization.culture.description }}</p>
            </template>
          </section>
          <section class="focus-section">
            <h3>{{ isEnglish ? "🏭 Four Priority Industries" : "🏭 四大重点产业" }}</h3>
            <div class="focus-grid">
              <div v-for="area in programme.areas" :key="area.title">
                <strong>{{ area.title }}</strong>
                <p>{{ area.detail }}</p>
              </div>
            </div>
          </section>
          <div class="programme-layout programme-layout--bottom">
            <section>
              <template v-if="programme.exchangeDetails">
                <h3>{{ programme.exchangeDetails.title }}</h3>
                <p class="exchange-intro">
                  {{ programme.exchangeDetails.intro }}
                </p>
                <p class="exchange-line">
                  <strong>{{ programme.exchangeDetails.flow }}</strong>
                </p>
                <p class="exchange-intro">
                  {{ programme.exchangeDetails.focusLabel }}
                </p>
                <p class="exchange-line">
                  <strong>{{ programme.exchangeDetails.focus }}</strong>
                </p>
              </template>
              <template v-else>
                <h3>
                  {{ isEnglish ? "Executive exchange" : "高管商务与技术交流" }}
                </h3>
                <p>{{ programme.exchange }}</p>
              </template>
            </section>
            <section>
              <template v-if="outcomesDetailsOf(programme)">
                <h3>{{ outcomesDetailsOf(programme)?.title }}</h3>
                <ul class="outcome-list">
                  <li
                    v-for="item in outcomesDetailsOf(programme)?.items || []"
                    :key="item"
                  >
                    {{ item }}
                  </li>
                </ul>
              </template>
              <template v-else>
                <h3>{{ isEnglish ? "🎯 Expected Outcomes" : "🎯 预期成果" }}</h3>
                <p>{{ programme.outcomes }}</p>
              </template>
            </section>
          </div>
          <section
            v-if="programme.id === 'new-energy'"
            class="programme-closing-summary"
          >
            <h3 class="programme-closing-summary__culture-title">
              {{
                isEnglish
                  ? "🌏 Business + Cultural Experience"
                  : "🌏 商务 + 文化体验"
              }}
            </h3>
            <p>
              {{
                isEnglish
                  ? "Selected cultural and ecological experiences in Chengdu and Yibin provide opportunities to experience Sichuan's regional culture, industrial development and green transformation, while creating a more relaxed setting for delegation networking, relationship building and professional exchange."
                  : "精选成都及宜宾的文化与生态体验，让代表团深入了解四川的地域文化、产业发展与绿色转型，同时为代表团成员提供更加轻松的交流联谊、关系建立及专业交流机会。"
              }}
            </p>
            <h3>
              {{
                isEnglish
                  ? "China New Energy · Battery Technology · Smart Manufacturing · Industrial Benchmarking · Business Exchange"
                  : "中国新能源 · 电池技术 · 智能制造 · 工业标杆 · 商务交流"
              }}
            </h3>
            <p>
              {{
                isEnglish
                  ? "A focused 7-day journey through Sichuan's renewable energy and battery ecosystem—connecting technology, manufacturing, industrial clusters and potential China–India cooperation."
                  : "7天聚焦四川可再生能源与电池产业生态，连接技术、制造、产业集群及潜在中印合作机会。"
              }}
            </p>
          </section>
          <section
            v-if="programme.closingSummary"
            class="programme-closing-summary"
          >
            <h3>{{ programme.closingSummary.title }}</h3>
            <p>{{ programme.closingSummary.description }}</p>
            <template v-if="programme.closingSummary.culture">
              <h3 class="programme-closing-summary__culture-title">
                {{ programme.closingSummary.culture.title }}
              </h3>
              <p>{{ programme.closingSummary.culture.description }}</p>
            </template>
            <template v-if="industryLeadersOf(programme)">
              <h3 class="programme-closing-summary__industry-title">
                {{ industryLeadersOf(programme)?.title }}
              </h3>
              <div class="programme-customization__types">
                <span
                  v-for="companyType in industryLeadersOf(programme)
                    ?.companyTypes || []"
                  :key="companyType"
                >
                  {{ companyType }}
                </span>
              </div>
              <p class="programme-closing-summary__industry-desc">
                {{ industryLeadersOf(programme)?.description }}
              </p>
            </template>
          </section>
          <p class="programme-note">{{ programme.note }}</p>
        </div>
      </article>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import {
  Camera,
  Connection,
  Cpu,
  DataAnalysis,
  Lightning,
  OfficeBuilding,
  Right,
  Share,
  Van,
} from "@element-plus/icons-vue";
import { useI18n } from "@/composables/useI18n";
import executiveIndustryStudy from "@/assets/chineseIndustryInspectionProject-images/高管产业参访.png";
import technologyBenchmarking from "@/assets/chineseIndustryInspectionProject-images/技术标杆学习.png";
import businessExchange from "@/assets/chineseIndustryInspectionProject-images/商务交流.png";
import culturalExperience from "@/assets/chineseIndustryInspectionProject-images/文化体验.png";
import heroBackground from "@/assets/chineseIndustryInspectionProject-images/中国产业考察-hero.png";
import automotiveProgrammeImage from "@/assets/chineseIndustryInspectionProject-images/中国汽车产业高管商务考察项目.png";
import newEnergyProgrammeImage from "@/assets/chineseIndustryInspectionProject-images/中国四川新能源高管产业考察与技术交流项目.png";
import aiManufacturingProgrammeImage from "@/assets/chineseIndustryInspectionProject-images/中国长三角AI与智能制造高管产业考察交流项目.png";

const { lang } = useI18n();
const isEnglish = computed(() => lang.value === "en");
const programmeImages = [
  automotiveProgrammeImage,
  newEnergyProgrammeImage,
  aiManufacturingProgrammeImage,
];
const scrollToProgramme = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", `#${id}`);
};
const images = computed(() => [
  {
    src: executiveIndustryStudy,
    alt: isEnglish.value ? "Executive industry study" : "高管产业考察",
  },
  {
    src: technologyBenchmarking,
    alt: isEnglish.value ? "Technology benchmarking" : "技术标杆学习",
  },
  {
    src: businessExchange,
    alt: isEnglish.value ? "Business exchange" : "商务交流",
  },
  {
    src: culturalExperience,
    alt: isEnglish.value ? "Cultural experience" : "文化体验",
  },
]);
// 「项目概览」右侧的 5 项能力清单。图标按语义挑选：
// 楼宇=企业/工厂参访、互联=高管与技术交流、图表=标杆学习、节点网络=商务人脉、相机=文化体验
const pillars = computed(() => [
  {
    icon: OfficeBuilding,
    title: isEnglish.value ? "Corporate & factory visits" : "企业及工厂参访",
  },
  {
    icon: Connection,
    title: isEnglish.value
      ? "Executive & technical exchange"
      : "高管及技术交流",
  },
  {
    icon: DataAnalysis,
    title: isEnglish.value ? "Industry benchmarking" : "产业及制造标杆学习",
  },
  {
    icon: Share,
    title: isEnglish.value ? "Business networking" : "国际商务交流与人脉拓展",
  },
  {
    icon: Camera,
    title: isEnglish.value
      ? "Selected cultural experiences"
      : "精选文化体验",
  },
]);

const zhProgrammes = [
  {
    id: "automotive",
    icon: Van,
    title: "汽车与先进制造产业考察",
    detailTitle: "中国汽车产业高管商务考察项目",
    kicker: "AUTOMOTIVE & ADVANCED MANUFACTURING",
    route: "成都 → 重庆 → 北京",
    duration: "7天6夜",
    shortFocus: "汽车制造 · 新能源汽车 · 智能制造 · 汽车科技",
    focus:
      "汽车制造 · 新能源汽车 · 智能工厂 · 汽车零部件 · 电池与动力系统 · 汽车研发 · 智能汽车",
    industries:
      "汽车OEM · 新能源汽车 · 零部件 · 电池与动力系统 · Tier 1 / Tier 2供应商 · 汽车科技",
    intro:
      "为国际汽车行业企业高管量身打造，深入了解中国汽车制造、新能源汽车、智能工厂及汽车科技生态。",
    highlights: [
      "汽车企业及工厂参访",
      "高管及技术交流",
      "汽车制造标杆考察",
      "新能源汽车与智能工厂体验",
      "商务交流与合作对接",
      "精选文化体验",
    ],
    customization: {
      title: "专为汽车行业领袖定制",
      companyTypes: [
        "乘用车OEM",
        "商用车制造商",
        "电动汽车企业",
        "电池与动力总成企业",
        "零部件制造商",
        "Tier 1 / Tier 2 供应商",
        "汽车科技企业",
      ],
      description:
        "可根据代表团的业务特点、技术重点及战略需求，定制相应的企业参访安排。",
      culture: {
        title: "🌏 商务 + 文化体验",
        description:
          "精选成都、重庆及北京的文化体验，让代表团深入感受中国不同地区的地域文化与城市发展，同时为代表团成员提供更加轻松的交流联谊、关系建立及专业交流机会。",
      },
    },
    pathwayTitle: "七天产业学习路径",
    pathway:
      "整车制造 → 新能源转型 → 智能工厂 → 供应链 → 汽车研发 → 智能汽车 → 全球化",
    citiesTitle: "",
    cities: [
      {
        name: "成都",
        detail: "整车制造 · 新能源汽车 · 零部件 · 智能制造 · 供应链生态",
      },
      {
        name: "重庆",
        detail: "智能工厂 · 工业4.0 · 新能源汽车 · 汽车研发 · 智能驾驶",
      },
      {
        name: "北京",
        detail: "智能汽车 · AI+汽车 · 汽车科技 · 软件与电子 · 创新生态",
      },
    ],
    areas: [
      {
        title: "新能源汽车",
        detail: "EV平台 · 动力电池 · 电驱系统 · 车辆电子 · 新能源制造",
      },
      {
        title: "智能制造",
        detail: "工业机器人 · 数字化工厂 · 自动化 · AI质检 · 智能物流",
      },
      {
        title: "汽车供应链",
        detail: "Tier 1 / Tier 2 · 本地化 · 战略采购 · 零部件制造 · 供应链协同",
      },
      {
        title: "汽车科技",
        detail: "智能驾驶 · 汽车软件 · 智能座舱 · AI · 汽车电子",
      },
    ],
    exchange:
      "企业介绍 → 技术展示 → 工厂参访 → 高管交流 → 技术问答 → 商务合作洽谈。重点探讨制造效率、新能源转型、智能制造、供应链、技术合作及全球化。",
    outcomes:
      "了解中国汽车产业生态 · 学习新能源及智能制造实践 · 考察先进汽车技术与研发 · 寻找供应链及技术合作伙伴 · 探索汽车产业合作机会。",
    closingSummary: {
      title: "中国汽车制造 · 新能源汽车转型 · 智能工厂 · 汽车技术 · 商务交流",
      description:
        "7天聚焦中国汽车产业转型的高管商务考察，连接制造、技术、供应链与潜在商务合作伙伴。",
    },
    note: "最终企业参访、工厂准入、交流嘉宾及项目内容将以接待企业实际安排及确认为准。",
  },
  {
    id: "new-energy",
    icon: Lightning,
    title: "新能源与能源科技产业考察",
    detailTitle: "中国四川新能源高管产业考察与技术交流项目",
    kicker: "NEW ENERGY & ENERGY TECHNOLOGY",
    route: "成都 → 宜宾 → 成都",
    duration: "7天6夜",
    shortFocus: "可再生能源 · 锂电池 · 先进制造 · 技术交流",
    focus:
      "光伏 · 储能 · 锂 · 电池材料 · EV电池 · 智能制造 · 绿色制造 · 产业集群",
    industries:
      "可再生能源 · 光伏 · 电池与储能 · 新能源汽车 · 锂及电池材料 · 先进制造",
    intro:
      "为印度能源及工业领域领袖定制的精选高管考察项目，实地深入了解中国可再生能源、锂电池及先进制造一体化产业生态。",
    highlights: [
      "可再生能源及光伏产业参访",
      "锂电池、电池材料及动力电池制造",
      "智能工厂与先进制造标杆学习",
      "技术及高管管理交流",
      "绿色制造与产业集群洞察",
      "专业人脉拓展",
      "精选文化与生态体验",
    ],
    customization: {
      title: "👥 适合产业领域",
      companyTypes: [
        "新能源",
        "光伏",
        "电池与储能",
        "新能源汽车",
        "锂及电池材料",
        "工业科技",
        "先进制造",
        "科研与技术机构",
      ],
      description:
        "可根据代表团的行业背景、技术重点及战略需求定制参访企业与交流内容。",
    },
    pathwayTitle: "⚡ 新能源价值链",
    pathway:
      "太阳能光伏 → 储能 → 锂电池与电池材料 → 动力电池 → 智能制造 → 绿色制造 → 产业集群",
    citiesTitle: "🏭 两大核心产业枢纽",
    cities: [
      { name: "成都", detail: "光伏 · 储能 · 锂电池 · 科技与研发 · 先进制造" },
      {
        name: "宜宾",
        detail: "动力电池 · 电池材料 · 智能工厂 · 绿色制造 · 产业集群",
      },
    ],
    areas: [
      {
        title: "光伏与可再生能源",
        detail: "高效光伏电池 · 智能生产 · 自动化 · 质量管理",
      },
      {
        title: "储能",
        detail: "储能系统 · 安全 · 热管理 · 能源管理 · 综合解决方案",
      },
      {
        title: "锂电池与电池材料",
        detail: "锂资源 · 锂化学品 · 电池级材料 · 加工 · 供应链",
      },
      {
        title: "动力电池制造",
        detail: "电芯 · 自动化 · 数字化制造 · 质量与安全 · 低碳生产",
      },
    ],
    exchange:
      "产业介绍 → 技术展示 → 工厂/设施参访 → 高管交流 → 技术问答 → 专业交流。重点探讨技术、制造、供应链、自动化、质量管理、绿色制造及产业发展。",
    exchangeDetails: {
      title: "🤝 高管技术交流",
      intro: "企业交流可结合：",
      flow: "产业介绍 → 技术展示 → 工厂/设施参访 → 高管交流 → 技术问答 → 专业交流",
      focusLabel: "重点主题包括：",
      focus: "技术 · 制造 · 供应链 · 自动化 · 质量 · 绿色制造 · 产业发展",
    },
    outcomes:
      "对标中国新能源产业生态 · 了解电池与光伏制造 · 探索智能与绿色制造 · 洞察产业链与供应链 · 发掘技术及商务合作机会 · 深化中印产业交流",
    note: "最终接待单位、工厂准入、参会人员及项目内容将以确认情况及接待企业实际安排为准。",
  },
  {
    id: "ai-manufacturing",
    icon: Cpu,
    title: "AI与智能制造产业考察",
    detailTitle: "中国长三角AI与智能制造高管产业考察项目",
    kicker: "AI & SMART MANUFACTURING",
    route: "上海 → 苏州 → 无锡 → 杭州",
    duration: "7天6夜",
    shortFocus: "先进制造 · 智能制造 · 技术交流",
    coreFocus: "先进制造 · 智能制造 · 技术与创新",
    focus:
      "AI与数字化 · 医药与医疗器械 · 新能源与光伏 · 矿业与工业装备 · 工业机器人 · 智能制造",
    industries:
      "医药与医疗器械 · 新能源 · 工业装备 · 机器人 · 自动化 · 先进制造",
    intro:
      "为印度企业及产业领域领袖定制的精选高管考察项目，实地深入了解中国先进制造、智能制造、技术及产业生态。",
    highlights: [
      "企业及工厂参访",
      "高管及技术交流",
      "智能制造标杆学习",
      "产业及供应链洞察",
      "中印商务人脉拓展",
      "精选文化体验",
    ],
    pathwayTitle: "🗺️ 四城产业之旅",
    pathway:
      "上海 → 苏州 → 无锡 → 杭州，连接国际商务、先进制造与创新科技生态。",
    citiesTitle: "",
    cities: [
      { name: "上海", detail: "国际商务 · 医药产业 · 医疗科技" },
      { name: "苏州", detail: "新能源 · 光伏 · 智能制造" },
      { name: "无锡", detail: "矿业装备 · 重工业 · 先进制造" },
      { name: "杭州", detail: "工业机器人 · 医疗器械 · 新能源 · 创新科技" },
    ],
    areas: [
      {
        title: "🧪 医药与医疗器械",
        detail: "医药研发 · CRO/CDMO · 医疗器械 · 精密制造",
      },
      {
        title: "⚡ 新能源与光伏",
        detail: "光伏制造 · 智能生产 · 数字化工厂 · 新能源技术",
      },
      {
        title: "⛏️ 矿业与工业装备",
        detail: "矿山机械 · 重型装备 · 工业电气化 · 智能装备",
      },
      {
        title: "🤖 工业机器人与智能制造",
        detail: "机器人 · 自动化 · 智能感知 · 智慧工厂",
      },
    ],
    exchange:
      "企业介绍 → 技术展示 → 工厂/研发中心参访 → 管理层交流 → 技术问答 → 商务对接。重点探讨技术合作、供应链、设备采购、本地化制造、联合研发、市场拓展及投资合作。",
    exchangeDetails: {
      title: "🤝 高管商务与技术交流",
      intro: "企业交流可结合：",
      flow: "企业介绍 → 技术展示 → 工厂/研发中心参访 → 管理层交流 → 技术问答 → 商务交流",
      focusLabel: "重点探讨主题包括：",
      focus: "技术合作 · 供应链 · 设备采购 · 本地化 · 联合研发 · 市场拓展 · 投资合作",
    },
    outcomes:
      "了解中国先进制造生态 · 探索新兴技术 · 标杆学习智能制造 · 对接供应商与合作伙伴 · 发掘中印合作机会 · 建立产业网络",
    customization: {
      title: "适合产业领域",
      companyTypes: [
        "医药与医疗器械",
        "新能源与光伏",
        "矿业与工业装备",
        "工业机器人",
        "智能制造",
        "自动化",
        "工业科技",
        "先进制造",
        "科研与技术机构",
      ],
      description:
        "可根据代表团的行业背景、技术重点及战略需求，定制参访企业、技术交流及商务对接方向。",
    },
    closingSummary: {
      title: "先进制造 · 智能制造 · 技术创新 · 商务交流 · 国际合作",
      description:
        "7天深入探索中国长三角制造生态，连接技术、产业、供应链及潜在国际合作伙伴。",
      culture: {
        title: "🌏 商务 + 文化体验",
        description:
          "精选上海、苏州及杭州文化体验，深入了解长三角的商业文化、产业发展与创新生态，同时为代表团提供轻松的交流与联谊机会。",
      },
      industryLeaders: {
        title: "👥 适合产业领域",
        companyTypes: [
          "医药与医疗器械",
          "新能源与光伏",
          "矿业与工业装备",
          "工业机器人",
          "智能制造",
          "自动化",
          "工业科技",
          "先进制造",
          "科研与技术机构",
        ],
        description:
          "可根据代表团的行业背景、技术重点及战略需求，定制参访企业、技术交流及商务对接方向。",
      },
    },
    note: "最终企业参访、工厂准入、参会人员及项目内容将根据代表团需求及接待企业确认情况确定。",
  },
];
const enProgrammeContent = [
  {
    title: "Automotive & Advanced Manufacturing Study Mission",
    detailTitle: "China Automotive Industry Executive Business Study Programme",
    route: "Chengdu → Chongqing → Beijing",
    duration: "7 Days / 6 Nights",
    shortFocus: "Automotive Manufacturing · New Energy Vehicles · Smart Manufacturing · Automotive Technology",
    focus: "Automotive Manufacturing · New Energy Vehicles · Smart Factories · Automotive Components · Batteries & Power Systems · Automotive R&D · Intelligent Vehicles",
    industries: "Automotive OEMs · New Energy Vehicles · Components · Batteries & Power Systems · Tier 1 / Tier 2 Suppliers · Automotive Technology",
    intro: "Designed for executives from the international automotive sector, this programme provides an in-depth view of China's automotive manufacturing, new energy vehicles, smart factories and automotive technology ecosystem.",
    highlights: ["Automotive company and factory visits", "Executive and technical exchanges", "Automotive manufacturing benchmarking", "New energy vehicle and smart factory experiences", "International business exchange and partnership matching", "Selected cultural experiences"],
    customization: {
      title: "Tailored for Automotive Leaders",
      companyTypes: ["Passenger Vehicle OEMs", "Commercial Vehicle Manufacturers", "EV Companies", "Battery & Powertrain Companies", "Component Manufacturers", "Tier 1 / Tier 2 Suppliers", "Automotive Technology Companies"],
      description: "Corporate visits can be customised according to the delegation's business profile, technology priorities and strategic interests.",
      culture: {
        title: "🌏 Business + Cultural Experience",
        description: "Selected cultural experiences in Chengdu, Chongqing and Beijing provide opportunities to experience China's regional culture and urban development, while creating a more relaxed setting for delegation networking, relationship building and professional exchange.",
      },
    },
    pathwayTitle: "Seven-day industry learning pathway",
    pathway: "Vehicle Manufacturing → New Energy Vehicles Transformation → Smart Factories → Supply Chain → Automotive R&D → Intelligent Vehicles → Globalisation",
    citiesTitle: "",
    cities: [
      { name: "Chengdu", detail: "Vehicle manufacturing · New energy vehicles · Components · Smart manufacturing · Supply-chain ecosystem" },
      { name: "Chongqing", detail: "Smart factories · Industry 4.0 · New energy vehicles · Automotive R&D · Intelligent driving" },
      { name: "Beijing", detail: "Intelligent vehicles · AI + automotive · Automotive technology · Software and electronics · Innovation ecosystem" },
    ],
    areas: [
      { title: "New Energy Vehicles", detail: "EV platforms · Power batteries · E-drive systems · Vehicle electronics · New energy vehicle manufacturing" },
      { title: "Smart Manufacturing", detail: "Industrial robots · Digital factories · Automation · AI quality inspection · Smart logistics" },
      { title: "Automotive Supply Chain", detail: "Tier 1 / Tier 2 · Localisation · Strategic sourcing · Component manufacturing · Supply-chain integration" },
      { title: "Automotive Technology", detail: "Intelligent driving · Automotive software · Smart cockpits · AI · Automotive electronics" },
    ],
    exchange: "Company introduction → Technology showcase → Factory visit → Executive exchange → Technical Q&A → Business cooperation discussion. Discussions focus on manufacturing efficiency, new energy transition, smart manufacturing, supply chains, technology cooperation and globalisation.",
    exchangeDetails: {
      title: "🤝 Executive Business Exchange",
      intro: "Corporate engagements may combine:",
      flow: "Company Presentation → Technology Briefing → Factory Visit → Executive Discussion → Technical Q&A → Business Exchange",
      focusLabel: "Key discussion themes include:",
      focus: "Manufacturing Excellence · NEV Transformation · Smart Manufacturing · Supply Chain · Technology Cooperation · Globalisation",
    },
    outcomes: "Understand China's automotive industry ecosystem · Learn new energy and smart manufacturing practices · Examine advanced automotive technologies and R&D · Identify supply-chain and technology partners · Explore international automotive cooperation opportunities.",
    outcomesDetails: {
      title: "🎯 Expected Outcomes",
      items: [
        "Benchmark China's Automotive Ecosystem",
        "Understand NEV & Smart Manufacturing Transformation",
        "Explore Advanced Automotive Technologies",
        "Identify Suppliers & Technology Partners",
        "Discover China–India Automotive Cooperation Opportunities",
      ],
    },
    closingSummary: {
      title: "China Automotive Manufacturing · New Energy Vehicles Transformation · Smart Factory · Automotive Technology · Business Exchange",
      description: "A focused 7-day executive journey into China's automotive transformation—connecting manufacturing, technology, supply chains and potential business partners.",
    },
    note: "Final corporate visits, factory access, meeting participants and programme content are subject to host-company availability and confirmation.",
  },
  {
    title: "New Energy & Energy Technology Study Mission",
    detailTitle: "China Sichuan New Energy Executive Industrial Study & Technology Exchange Programme",
    route: "Chengdu → Yibin → Chengdu",
    duration: "7 Days / 6 Nights",
    shortFocus: "Renewable Energy · Lithium Battery · Advanced Manufacturing · Technology Exchange",
    focus: "Solar PV · Energy Storage · Lithium · Battery Materials · EV Batteries · Smart Manufacturing · Green Manufacturing · Industrial Clusters",
    industries: "Renewable Energy · Solar PV · Batteries & Energy Storage · New Energy Vehicles · Lithium & Battery Materials · Advanced Manufacturing",
    intro: "A curated executive study mission for Indian energy and industrial leaders to gain first-hand exposure to China's integrated renewable energy, lithium battery and advanced manufacturing ecosystem.",
    highlights: ["Renewable energy & solar PV industry visits", "Lithium, battery materials & EV battery manufacturing", "Smart factory & advanced manufacturing benchmarking", "Technical and executive management exchanges", "Green manufacturing & industrial-cluster insights", "Professional networking", "Selected cultural and ecological experiences"],
    customization: {
      title: "👥 Designed for Industry Leaders",
      companyTypes: [
        "Renewable Energy",
        "Solar",
        "Battery & Energy Storage",
        "EV & Automotive",
        "Lithium & Battery Materials",
        "Industrial Technology",
        "Advanced Manufacturing",
        "R&D & Technology Organisations",
      ],
      description:
        "The programme can be tailored to the delegation's industry profile, technology priorities and strategic interests.",
    },
    pathwayTitle: "⚡ New-Energy Value Chain",
    pathway: "Solar PV → Energy Storage → Lithium & Battery Materials → EV Batteries → Smart Manufacturing → Green Manufacturing → Industrial Clusters",
    citiesTitle: "🏭 Two Key Industrial Hubs",
    cities: [
      { name: "Chengdu", detail: "Solar PV · Energy Storage · Lithium · Technology & R&D · Advanced Manufacturing" },
      { name: "Yibin", detail: "EV Batteries · Battery Materials · Smart Factories · Green Manufacturing · Industrial Clusters" },
    ],
    areas: [
      { title: "Solar PV & Renewable Energy", detail: "High-Efficiency PV Cells · Intelligent Production · Automation · Quality Management" },
      { title: "Energy Storage", detail: "Storage Systems · Safety · Thermal Management · Energy Management · Integrated Solutions" },
      { title: "Lithium & Battery Materials", detail: "Lithium Resources · Lithium Chemicals · Battery-Grade Materials · Processing · Supply Chain" },
      { title: "EV Battery Manufacturing", detail: "Battery Cells · Automation · Digital Manufacturing · Quality & Safety · Low-Carbon Production" },
    ],
    exchange: "Industry introduction → Technology showcase → Factory or facility visit → Executive exchange → Technical Q&A → Professional exchange. Discussions focus on technology, manufacturing, supply chains, automation, quality management, green manufacturing and industry development.",
    exchangeDetails: {
      title: "🤝 Executive Technology Exchange",
      intro: "Corporate engagements may combine:",
      flow: "Industry Briefing → Technology Presentation → Factory / Facility Visit → Executive Discussion → Technical Q&A → Professional Exchange",
      focusLabel: "Key themes include:",
      focus: "Technology · Manufacturing · Supply Chain · Automation · Quality · Green Manufacturing · Industrial Development",
    },
    outcomes: "Benchmark China's New-Energy Ecosystem · Understand Battery & PV Manufacturing · Explore Smart & Green Manufacturing · Gain Supply-Chain Insights · Identify Technology & Business Opportunities · Strengthen China–India Industry Exchange",
    note: "Final host organisations, factory access, meeting participants and programme content are subject to confirmation and host-company availability.",
  },
  {
    title: "AI & Smart Manufacturing Study Mission",
    detailTitle: "China Yangtze River Delta AI & Smart Manufacturing Executive Industry Study Programme",
    route: "Shanghai → Suzhou → Wuxi → Hangzhou",
    duration: "7 Days / 6 Nights",
    shortFocus: "Advanced Manufacturing · Smart Manufacturing · Technology Exchange",
    coreFocus: "Advanced Manufacturing · Smart Manufacturing · Technology & Innovation",
    focus: "AI & Digitalisation · Pharmaceuticals & Medical Devices · New Energy & Solar PV · Mining & Industrial Equipment · Industrial Robotics · Smart Manufacturing",
    industries: "Pharmaceuticals & Medical Devices · New Energy · Industrial Equipment · Robotics · Automation · Advanced Manufacturing",
    intro: "A curated executive study mission for Indian business and industry leaders to gain first-hand exposure to China's advanced manufacturing, smart manufacturing, technology and industrial ecosystem.",
    highlights: ["Corporate & factory visits", "Executive and technology exchanges", "Smart manufacturing benchmarking", "Industry and supply-chain insights", "China–India business networking", "Selected cultural experiences"],
    pathwayTitle: "🗺️ Four-City Industrial Journey",
    pathway: "Shanghai → Suzhou → Wuxi → Hangzhou, connecting international business, advanced manufacturing and innovation technology ecosystems.",
    citiesTitle: "",
    cities: [
      { name: "Shanghai", detail: "International Business · Pharmaceuticals · Medical Technology" },
      { name: "Suzhou", detail: "New Energy · Photovoltaics · Smart Manufacturing" },
      { name: "Wuxi", detail: "Mining Equipment · Heavy Industry · Advanced Manufacturing" },
      { name: "Hangzhou", detail: "Industrial Robotics · Medical Devices · New Energy · Innovation Technology" },
    ],
    areas: [
      { title: "🧪 Pharmaceuticals & Medical Devices", detail: "Pharmaceutical R&D · CRO/CDMO · Medical Devices · Precision Manufacturing" },
      { title: "⚡ New Energy & Photovoltaics", detail: "PV Manufacturing · Intelligent Production · Digital Factories · New-Energy Technology" },
      { title: "⛏️ Mining & Industrial Equipment", detail: "Mining Machinery · Heavy Equipment · Industrial Electrification · Intelligent Equipment" },
      { title: "🤖 Industrial Robotics & Smart Manufacturing", detail: "Robotics · Automation · Intelligent Perception · Smart Factories" },
    ],
    exchange: "Company introduction → Technology showcase → Factory or R&D centre visit → Management exchange → Technical Q&A → International business matching. Discussions focus on technology cooperation, supply chains, equipment procurement, localised manufacturing, joint R&D, market expansion and investment cooperation.",
    exchangeDetails: {
      title: "🤝 Executive Business & Technology Exchange",
      intro: "Corporate engagements may combine:",
      flow: "Company Presentation → Technology Briefing → Factory / R&D Visit → Management Discussion → Technical Q&A → Business Exchange",
      focusLabel: "Key discussion themes:",
      focus: "Technology Cooperation · Supply Chain · Equipment Procurement · Localisation · Joint R&D · Market Expansion · Investment Cooperation",
    },
    outcomes: "Understand China's Advanced Manufacturing Ecosystem · Explore Emerging Technologies · Benchmark Smart Manufacturing · Connect with Suppliers & Partners · Identify China–India Cooperation Opportunities · Build Industry Networks",
    customization: {
      title: "Suitable industries",
      companyTypes: [
        "Pharmaceuticals & Medical Devices",
        "New Energy & Solar PV",
        "Mining & Industrial Equipment",
        "Industrial Robotics",
        "Smart Manufacturing",
        "Automation",
        "Industrial Technology",
        "Advanced Manufacturing",
        "Research & Technical Institutions",
      ],
      description: "Company visits, technical exchanges and business-matching directions can be customised according to the delegation's industry background, technology priorities and strategic needs.",
    },
    closingSummary: {
      title: "Advanced Manufacturing · Smart Manufacturing · Technology Innovation · Business Exchange · International Cooperation",
      description: "A focused 7-day journey through China's Yangtze River Delta manufacturing ecosystem, connecting technology, industry, supply chains and potential international partners.",
      culture: {
        title: "🌏 Business + Cultural Experience",
        description: "Selected cultural experiences in Shanghai, Suzhou and Hangzhou provide opportunities to understand the Yangtze River Delta's commercial culture, industrial development and innovation ecosystem, while encouraging informal networking among delegation members.",
      },
      industryLeaders: {
        title: "👥 Designed for Industry Leaders",
        companyTypes: [
          "Pharmaceutical & Medical Device Companies",
          "New-Energy & Solar Companies",
          "Mining & Industrial Equipment Companies",
          "Robotics & Automation Companies",
          "Advanced Manufacturing Companies",
          "Industrial Technology Companies",
          "R&D & Technology Organisations",
        ],
        description: "The programme can be customised according to the delegation's industry background, technology priorities and strategic objectives, including targeted company visits, technical exchanges and business-matching opportunities.",
      },
    },
    note: "Final corporate visits, factory access, meeting participants and programme content are subject to delegation requirements and host-company confirmation.",
  },
];
const enProgrammes = zhProgrammes.map((programme, index) => ({
  ...programme,
  ...enProgrammeContent[index],
}));
const programmes = computed(() =>
  isEnglish.value ? enProgrammes : zhProgrammes,
);
/** 「预期成果」有两种呈现：结构化列表（outcomesDetails）或单段说明（outcomes）。
 *  `programme` 在模板里是联合类型，而 outcomesDetails 只声明在部分条目上，
 *  直接访问会报 TS2339。这里收口成唯一一处断言，模板侧保持声明式写法。 */
type OutcomesDetails = { title: string; items: string[] };
const outcomesDetailsOf = (programme: unknown): OutcomesDetails | undefined =>
  (programme as { outcomesDetails?: OutcomesDetails }).outcomesDetails;

/** 「Core focus / 核心重点」信息条的值。
 *  默认与标题区副行（`shortFocus`）取同一份文案，但参考稿有时会给两者不同的措辞，
 *  此时在该项目上单独写 `coreFocus` 覆盖即可（不影响副行）。 */
const coreFocusOf = (programme: unknown): string => {
  const p = programme as { coreFocus?: string; shortFocus?: string };
  return p.coreFocus ?? p.shortFocus ?? "";
};

/** 收尾区的「适合产业领域」子块（与页面中部的 `customization` 同版式，只是位置不同）。
 *  同上：`closingSummary` 在模板里是联合类型，直接访问只声明在部分条目上的
 *  `industryLeaders` 会报 TS2339，这里收口成唯一一处断言。 */
type IndustryLeaders = {
  title: string;
  companyTypes: string[];
  description: string;
};
const industryLeadersOf = (
  programme: unknown,
): IndustryLeaders | undefined => {
  const p = programme as {
    closingSummary?: { industryLeaders?: IndustryLeaders };
  };
  return p.closingSummary?.industryLeaders;
};
</script>

<style scoped>
.industry-page {
  --industry-ink: #18344c;
  --industry-navy: #153657;
  --industry-orange: #ed6d32;
  --industry-orange-dark: #c84f1d;
  --industry-soft: #f7f4ef;
  background: #fff;
  color: var(--industry-ink);
  min-height: 100vh;
  font-family: 'DM Sans', Arial, sans-serif;
}
.industry-shell {
  width: min(1180px, calc(100% - 56px));
  margin: 0 auto;
}
.industry-hero {
  min-height: 620px;
  display: grid;
  align-items: end;
  padding: 138px 0 92px;
  color: #fff;
  background-color: var(--industry-navy);
  background-position: center right;
  background-size: cover;
}
.industry-eyebrow,
.section-index {
  color: #ff9662;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  white-space: nowrap;
}
.industry-hero h1 {
  max-width: none;
  margin: 17px 0;
  font:
    600 clamp(30px, 4.4vw, 52px)/0.98 'Playfair Display', Georgia,
    serif;
  letter-spacing: 0;
  white-space: nowrap;
  text-shadow: 0 6px 28px rgba(4, 18, 32, 0.45);
}
.industry-hero p:last-child {
  max-width: none;
  margin: 0;
  color: #d7e6f1;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.7;
  letter-spacing: .06em;
  white-space: nowrap;
}
.industry-intro {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 88px;
  padding: 112px 0 118px;
}
.industry-intro h2,
.section-heading h2,
.programme-header h2 {
  font:
    600 clamp(32px, 4vw, 52px)/1.1 'Playfair Display', Georgia,
    serif;
  color: var(--industry-navy);
  letter-spacing: 0;
  white-space: nowrap;
}
.industry-intro h2 {
  margin: 13px 0 24px;
  font-size: clamp(26px, 3vw, 36px);
}
.industry-intro__copy > p {
  max-width: 650px;
  color: #566b78;
  font-size: 16px;
  line-height: 1.85;
}
/* 「项目概览」右侧能力清单：纵向 5 行卡片。
   序号 01–05 呼应左上角的「01 / PROGRAMME OVERVIEW」编号。
   刻意不写 white-space: nowrap —— 标签允许换行，窄屏（800–1100px 双栏）才不会顶出容器。 */
.industry-pillars {
  display: grid;
  gap: 9px;
  align-self: center;
}
.industry-pillar {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 11px 17px;
  border: 1px solid #ece5dd;
  border-radius: 14px;
  background: #fff;
  color: var(--industry-navy);
  font-weight: 700;
  transition:
    border-color 0.22s ease,
    box-shadow 0.22s ease,
    transform 0.22s ease;
}
.industry-pillar:hover {
  border-color: rgba(237, 109, 50, 0.42);
  box-shadow: 0 12px 24px rgba(21, 54, 87, 0.09);
  transform: translateY(-2px);
}
.industry-pillar__icon {
  display: grid;
  place-items: center;
  flex: none;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(237, 109, 50, 0.1);
  color: var(--industry-orange);
  transition:
    background-color 0.22s ease,
    color 0.22s ease;
}
.industry-pillar__icon svg {
  width: 21px;
  height: 21px;
}
.industry-pillar:hover .industry-pillar__icon {
  background: var(--industry-orange);
  color: #fff;
}
.industry-pillar__label {
  flex: 1;
  min-width: 0;
  font-size: 15px;
}
.industry-pillar__index {
  flex: none;
  color: rgba(237, 109, 50, 0.38);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.1em;
  transition: color 0.22s ease;
}
.industry-pillar:hover .industry-pillar__index {
  color: var(--industry-orange);
}
.programme-overview {
  padding: 96px 0 108px;
  background: var(--industry-soft);
  border-block: 1px solid #e7e1da;
}
.section-heading {
  display: flex;
  justify-content: space-between;
  gap: 38px;
  align-items: end;
  margin-bottom: 28px;
}
.section-heading h2 {
  margin: 10px 0 0;
  font-size: clamp(26px, 3.55vw, 43px);
}
.section-heading > p {
  max-width: none;
  margin: 0 0 7px;
  color: #507080;
  font-size: 13px;
  line-height: 1.65;
  white-space: nowrap;
}
.industry-table-wrap {
  overflow-x: auto;
  border: 1px solid #d9e0e2;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 16px 32px rgb(31 57 71 / 8%);
}
.industry-table {
  width: 100%;
  min-width: 980px;
  border-collapse: collapse;
  text-align: left;
}
.industry-table th,
.industry-table td {
  padding: 21px 18px;
  vertical-align: top;
  border-right: 1px solid #e0e5e5;
  border-bottom: 1px solid #e0e5e5;
  color: #4e616e;
  font-size: 14px;
  line-height: 1.7;
}
.industry-table tr > :last-child {
  border-right: 0;
}
.industry-table tbody tr:last-child > * {
  border-bottom: 0;
}
.industry-table thead th {
  padding-block: 14px;
  background: var(--industry-navy);
  color: #fff;
  font-size: 13px;
  letter-spacing: 0.04em;
}
.industry-table thead th:nth-child(1) {
  width: 20%;
}
.industry-table thead th:nth-child(2) {
  width: 17%;
}
.industry-table thead th:nth-child(3) {
  width: 32%;
}
.industry-table thead th:nth-child(4) {
  width: 28%;
}
.industry-table__row {
  cursor: pointer;
  transition: background-color 0.18s ease;
}
.industry-table__row:hover {
  background: #fffaf6;
}
.industry-table tbody th button {
  display: flex;
  gap: 11px;
  align-items: flex-start;
  padding: 0;
  color: var(--industry-navy);
  text-align: left;
  font: 800 15px/1.45 inherit;
  background: transparent;
  border: 0;
  cursor: pointer;
}
/* 中文项目名保持单行（表格布局会自动加宽首列）；英文标题过长，按单词自然换行 */
.industry-table:not(.industry-table--en) tbody th button span {
  white-space: nowrap;
}
.industry-table tbody th svg {
  width: 23px;
  flex: 0 0 23px;
  margin-top: 1px;
  color: var(--industry-orange);
}
.industry-table__action button {
  display: grid;
  place-items: center;
  width: 37px;
  height: 37px;
  padding: 0;
  color: #fff;
  background: var(--industry-orange);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}
.industry-table__action button:hover {
  background: var(--industry-orange-dark);
  transform: scale(1.08);
}
.industry-table__action svg {
  width: 18px;
}
.industry-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  padding: 62px 0;
}
.industry-gallery figure {
  margin: 0;
  overflow: hidden;
  background: #fff;
  border: 1px solid #e7e1da;
  border-radius: 10px;
  box-shadow: 0 8px 18px rgb(31 57 71 / 5%);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.industry-gallery figure:hover {
  box-shadow: 0 16px 32px rgb(31 57 71 / 12%);
  transform: translateY(-3px);
}
.industry-gallery img {
  display: block;
  width: 100%;
  aspect-ratio: 1.43;
  object-fit: cover;
  transition: transform 0.25s ease;
}
.industry-gallery figure:hover img {
  transform: scale(1.04);
}
.industry-gallery figcaption {
  padding: 11px 13px;
  color: #587482;
  font-size: 12px;
  white-space: nowrap;
}
.programme-detail {
  scroll-margin-top: 74px;
  padding: 96px 0 104px;
  background: var(--industry-navy);
  color: #eaf3f1;
}
.programme-detail--2 {
  background: #234e4d;
}
.programme-detail--3 {
  background: #29405f;
}
.programme-topline {
  display: flex;
  justify-content: space-between;
  padding-bottom: 19px;
  border-bottom: 1px solid rgb(255 255 255 / 28%);
  color: #c4d8d5;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  white-space: nowrap;
}
.programme-header {
  display: flex;
  gap: 22px;
  align-items: flex-start;
  padding: 38px 0 30px;
}
.programme-header__icon {
  flex: 0 0 44px;
  width: 44px;
  height: 44px;
  color: #efa569;
}
.programme-header p {
  margin: 0 0 9px;
  color: #efa569;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
  white-space: nowrap;
}
.programme-header h2 {
  margin: 0 0 10px;
  color: #fff;
  font-size: clamp(20px, 2.6vw, 30px);
  /* 标题可能很长（如「China Sichuan New Energy Executive Industrial Study &
     Technology Exchange Programme」1242px > 可用宽度），nowrap 会撑出横向滚动条。
     放开换行：短标题仍单行，长标题自动折行——与移动端既有行为一致。 */
  white-space: normal;
}
.programme-header span {
  color: #c8d8d9;
  line-height: 1.6;
  white-space: nowrap;
}
.programme-visual {
  position: relative;
  width: min(820px, 88%);
  aspect-ratio: 16 / 9;
  margin: 0 auto 38px;
  overflow: hidden;
  background: #0e2f45;
  border: 1px solid rgb(255 255 255 / 22%);
  border-radius: 12px;
  box-shadow: 0 26px 60px rgb(4 18 32 / 45%);
}
.programme-visual::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 72px;
  height: 3px;
  content: "";
  background: #ff9662;
}
.programme-visual img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}
.programme-visual:hover img {
  transform: scale(1.03);
}
.programme-facts {
  display: grid;
  grid-template-columns: 1fr 0.6fr 1.45fr;
  border-top: 1px solid rgb(255 255 255 / 23%);
  border-left: 1px solid rgb(255 255 255 / 23%);
}
.programme-facts div {
  min-height: 105px;
  padding: 19px 22px;
  display: grid;
  align-content: center;
  gap: 7px;
  border-right: 1px solid rgb(255 255 255 / 23%);
  border-bottom: 1px solid rgb(255 255 255 / 23%);
  transition: background-color 0.2s ease;
}
.programme-facts div:hover {
  background: rgb(255 255 255 / 6%);
}
.programme-facts span {
  color: #a6c3c5;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.07em;
}
.programme-facts strong {
  color: #fff;
  line-height: 1.55;
}
.programme-lead {
  max-width: 900px;
  margin: 36px 0 46px;
  color: #f4f8f7;
  font:
    500 19px/1.8 'Playfair Display', Georgia,
    serif;
}
.programme-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 58px;
}
.programme-detail h3 {
  margin: 0 0 19px;
  color: #fff;
  font:
    600 27px/1.25 'Playfair Display', Georgia,
    serif;
  white-space: nowrap;
}
.programme-layout p {
  margin: 0;
  color: #d6e3e1;
  line-height: 1.85;
}
.exchange-intro {
  margin-bottom: 3px !important;
}
.exchange-line {
  margin-bottom: 9px !important;
}
.exchange-line strong {
  color: #fff;
  font-weight: 800;
}
/* 「预期成果」列表：与左侧「高管交流」的加粗白字行保持同一强调语气。
   刻意不加 ::before 圆点 —— 参考稿里这组是纯加粗行，加圆点会和上方
   「项目亮点」的橙点列表撞风格。 */
.outcome-list {
  display: grid;
  gap: 9px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.outcome-list li {
  color: #fff;
  font-weight: 800;
  line-height: 1.55;
}
.check-list {
  display: grid;
  gap: 11px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.check-list li {
  color: #d6e3e1;
  line-height: 1.55;
}
.check-list li::before {
  content: "";
  display: inline-block;
  width: 7px;
  height: 7px;
  margin: 0 10px 2px 0;
  background: #efa569;
  border-radius: 50%;
}
.programme-pathway {
  padding: 16px 18px;
  background: rgb(255 255 255 / 8%);
  border-left: 3px solid #efa569;
}
.city-list-title {
  margin-top: 30px !important;
}
.city-list {
  display: grid;
  gap: 11px;
  margin-top: 17px;
}
.city-list div {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 12px;
  color: #d6e3e1;
  font-size: 14px;
  line-height: 1.65;
}
.city-list strong {
  color: #efa569;
}
.programme-customization {
  margin: 55px 0;
  padding: 38px 0;
  border-block: 1px solid rgb(255 255 255 / 20%);
}
.programme-customization__types {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.programme-customization__types span {
  padding: 8px 12px;
  color: #f4f8f7;
  font-size: 14px;
  line-height: 1.45;
  background: rgb(255 255 255 / 8%);
  border: 1px solid rgb(255 255 255 / 24%);
  border-radius: 999px;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}
.programme-customization__types span:hover {
  background: rgb(237 109 50 / 25%);
  border-color: rgb(255 150 98 / 60%);
}
.programme-customization p {
  max-width: 850px;
  margin: 20px 0 0;
  color: #d6e3e1;
  line-height: 1.85;
}
/* 「商务 + 文化体验」副标题：跟 closing-summary 的同名标题保持同一套小号字重，
   需要压过 .programme-detail h3（Playfair 27px），故选择器多带一层 .programme-detail */
.programme-detail .programme-customization__culture-title {
  margin: 34px 0 12px;
  font-family: inherit;
  font-size: clamp(13px, 1.35vw, 16px);
  font-weight: 600;
  line-height: 1.35;
  white-space: normal;
}
.focus-section {
  margin: 55px 0;
  padding: 41px 0;
  border-block: 1px solid rgb(255 255 255 / 20%);
}
.focus-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgb(255 255 255 / 20%);
}
.focus-grid div {
  min-height: 152px;
  padding: 22px;
  background: rgb(255 255 255 / 7%);
  transition: background-color 0.2s ease;
}
.focus-grid div:hover {
  background: rgb(255 255 255 / 13%);
}
.focus-grid strong {
  color: #efa569;
}
.focus-grid p {
  margin: 13px 0 0;
  color: #d6e3e1;
  font-size: 14px;
  line-height: 1.7;
}
.programme-layout--bottom {
  gap: 80px;
}
.programme-closing-summary {
  margin-top: 58px;
  padding: 29px 0 0;
  border-top: 1px solid rgb(255 255 255 / 20%);
}
.programme-closing-summary h3 {
  margin-bottom: 14px;
  color: #fff;
  font-size: clamp(13px, 1.35vw, 16px);
  line-height: 1.35;
  white-space: nowrap;
}
.programme-closing-summary__culture-title,
.programme-closing-summary__industry-title {
  margin-top: 32px !important;
}
/* 收尾区「适合产业领域」子块：标题下接胶囊标签（复用 customization 的标签样式），
   故描述段需要自己补上边距（`.programme-closing-summary p` 把 margin 归零了）。 */
.programme-closing-summary__industry-desc {
  margin-top: 20px !important;
}
.programme-closing-summary p {
  max-width: 980px;
  margin: 0;
  color: #d6e3e1;
  font-size: 17px;
  line-height: 1.85;
}
.programme-note {
  margin: 58px 0 0;
  padding-top: 19px;
  border-top: 1px solid rgb(255 255 255 / 20%);
  color: #aec6c8;
  font-size: 13px;
  line-height: 1.75;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}
@media (max-width: 800px) {
  .industry-shell {
    width: min(100% - 36px, 1240px);
  }
  .industry-hero {
    min-height: 440px;
    padding: 105px 0 58px;
  }
  .industry-intro {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 58px 0;
  }
  .section-heading,
  .programme-topline {
    display: grid;
    gap: 14px;
  }
  .programme-overview {
    padding: 58px 0;
  }
  .industry-gallery {
    grid-template-columns: repeat(2, 1fr);
    padding: 32px 0;
  }
  .programme-detail {
    padding: 52px 0;
  }
  .programme-header {
    padding: 28px 0;
  }
  .programme-header__icon {
    width: 33px;
    height: 33px;
    flex-basis: 33px;
  }
  .programme-visual {
    width: calc(100% - 10px);
    margin: 0 auto 32px;
    box-shadow: 10px 10px 0 rgb(239 165 105 / 18%);
  }
  .programme-facts,
  .programme-layout,
  .focus-grid {
    grid-template-columns: 1fr;
  }
  .programme-facts div {
    min-height: 0;
  }
  .programme-layout,
  .programme-layout--bottom {
    gap: 38px;
  }
  .programme-closing-summary {
    margin-top: 42px;
  }
  .programme-customization {
    margin: 40px 0;
    padding: 34px 0;
  }
  .focus-section {
    margin: 40px 0;
    padding: 34px 0;
  }
  .focus-grid {
    gap: 1px;
  }
  .focus-grid div {
    min-height: 0;
  }
  .programme-lead {
    font-size: 17px;
  }
  .industry-table th,
  .industry-table td {
    padding: 16px;
  }
  .industry-hero h1,
  .industry-hero p:last-child,
  .industry-intro h2,
  .section-heading h2,
  .section-heading > p,
  .industry-pillar,
  .industry-gallery figcaption,
  .programme-topline,
  .programme-header p,
  .programme-header h2,
  .programme-header span,
  .programme-detail h3,
  .programme-closing-summary h3 {
    white-space: normal;
  }
}
</style>
