<template>
  <div class="industry-page">
    <section
      class="industry-hero"
      :style="{
        backgroundImage: `linear-gradient(90deg, rgba(7, 37, 61, .9), rgba(7, 37, 61, .38)), url(${heroBackground})`,
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
                ? "Curated 7-day / 6-night executive missions for business leaders and professional delegations. Each journey combines company visits, technical exchange and on-the-ground industry insight to explore meaningful commercial connections."
                : "为国际企业家、产业高管及专业代表团精心设计的 7天6夜高端产业考察项目。通过企业参访、专业交流与产业标杆学习，深入了解中国领先的产业、制造及科技生态，探索潜在合作机会。"
            }}
          </p>
        </div>
        <div class="industry-pillars">
          <div
            v-for="pillar in pillars"
            :key="pillar.title"
            class="industry-pillar"
          >
            <component :is="pillar.icon" aria-hidden="true" /><span>{{
              pillar.title
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
            <table class="industry-table">
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
              <span>{{ isEnglish ? "Core theme" : "核心主题" }}</span
              ><strong>{{ programme.shortFocus }}</strong>
            </div>
          </div>
          <p class="programme-lead">{{ programme.intro }}</p>
          <div class="programme-layout">
            <section>
              <h3>{{ isEnglish ? "Programme highlights" : "项目亮点" }}</h3>
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
          </section>
          <section class="focus-section">
            <h3>{{ isEnglish ? "Key study areas" : "重点考察领域" }}</h3>
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
              <h3>{{ isEnglish ? "Expected outcomes" : "预期成果" }}</h3>
              <p>{{ programme.outcomes }}</p>
            </section>
          </div>
          <section
            v-if="programme.id === 'new-energy'"
            class="programme-closing-summary"
          >
            <h3>
              {{
                isEnglish
                  ? "China's New Energy · Battery Technology · Smart Manufacturing · Industry Benchmarking · Technical Exchange"
                  : "中国新能源 · 电池技术 · 智能制造 · 产业标杆 · 技术交流"
              }}
            </h3>
            <p>
              {{
                isEnglish
                  ? "A seven-day immersion in Sichuan's new-energy heartland, connecting advanced technology, scaled manufacturing, industrial clusters and potential China-India collaboration opportunities."
                  : "7天深入四川新能源产业腹地，连接先进技术、规模化制造、产业集群及潜在中印合作机会。"
              }}
            </p>
            <h3 class="programme-closing-summary__culture-title">
              {{ isEnglish ? "Business + Cultural Experience" : "🌐 商务 + 文化体验" }}
            </h3>
            <p>
              {{
                isEnglish
                  ? "Selected cultural and ecological experiences in Chengdu and Yibin offer insight into Sichuan's local culture, industrial development and green transition, while creating relaxed opportunities for networking, relationship building and professional exchange."
                  : "精选成都及宜宾的文化与生态体验，让代表团深入了解四川的地域文化、产业发展与绿色转型，同时为代表团成员提供更加轻松的交流联谊、关系建立及专业交流机会。"
              }}
            </p>
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
  Connection,
  Cpu,
  DataAnalysis,
  Lightning,
  Promotion as Rocket,
  Right,
  Van,
} from "@element-plus/icons-vue";
import { useI18n } from "@/composables/useI18n";
import executiveIndustryStudy from "@/assets/chineseIndustryInspectionProject-images/高管产业参访.png";
import technologyBenchmarking from "@/assets/chineseIndustryInspectionProject-images/技术标杆学习.png";
import businessExchange from "@/assets/chineseIndustryInspectionProject-images/商务交流.png";
import culturalExperience from "@/assets/chineseIndustryInspectionProject-images/文化体验.png";
import heroBackground from "@/assets/chineseIndustryInspectionProject-images/bj.png";
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
const pillars = computed(() => [
  {
    icon: Van,
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
    icon: Rocket,
    title: isEnglish.value ? "Business networking" : "国际商务交流与人脉拓展",
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
      "为印度汽车行业企业高管量身打造，深入了解中国汽车制造、新能源汽车、智能工厂及汽车科技生态。",
    highlights: [
      "汽车企业及工厂参访",
      "高管及技术交流",
      "汽车制造标杆考察",
      "新能源汽车与智能工厂体验",
      "中印商务交流与合作对接",
      "精选文化体验",
    ],
    customization: {
      title: "可按企业类型定制",
      companyTypes: [
        "乘用车OEM",
        "商用车制造商",
        "新能源汽车企业",
        "电池/电驱企业",
        "汽车零部件企业",
        "Tier 1 / Tier 2",
        "汽车科技企业",
      ],
      description:
        "根据代表团的业务重点，可针对性安排相应的企业参访与商务交流。",
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
      "了解中国汽车产业生态 · 学习新能源及智能制造实践 · 考察先进汽车技术与研发 · 寻找供应链及技术合作伙伴 · 探索中印汽车产业合作机会。",
    note: "最终参访企业、工厂安排、交流嘉宾及具体内容将根据代表团行业背景、战略重点及企业实际接待情况确认。",
  },
  {
    id: "new-energy",
    icon: Lightning,
    title: "新能源与能源科技产业考察",
    detailTitle: "中国四川新能源高管产业考察与技术交流项目",
    kicker: "NEW ENERGY & ENERGY TECHNOLOGY",
    route: "成都 → 宜宾 → 成都",
    duration: "7天6夜",
    shortFocus: "新能源 · 锂电池 · 先进制造 · 技术交流",
    focus:
      "光伏 · 储能 · 锂资源 · 电池材料 · 动力电池 · 智能制造 · 绿色制造 · 新能源产业集群",
    industries:
      "可再生能源 · 光伏 · 电池与储能 · 新能源汽车 · 锂及电池材料 · 先进制造",
    intro:
      "为印度能源及工业领域企业高管量身打造，深入了解中国新能源、锂电池及先进制造产业生态。",
    highlights: [
      "新能源及光伏企业参访",
      "锂资源、电池材料及动力电池制造考察",
      "智能工厂与先进制造标杆学习",
      "技术及高管交流",
      "绿色制造与产业集群考察",
      "专业交流与商务对接",
    ],
    pathwayTitle: "新能源产业链",
    pathway:
      "太阳能光伏 → 储能 → 锂资源与电池材料 → 动力电池 → 智能制造 → 绿色制造 → 产业集群",
    citiesTitle: "🏭 两大产业城市",
    cities: [
      { name: "成都", detail: "光伏 · 储能 · 锂资源 · 科技研发 · 先进制造" },
      {
        name: "宜宾",
        detail: "动力电池 · 电池材料 · 智能工厂 · 绿色制造 · 新能源产业集群",
      },
    ],
    areas: [
      {
        title: "光伏与新能源",
        detail: "高效光伏电池 · 智能生产 · 自动化 · 质量管理",
      },
      {
        title: "储能技术",
        detail: "储能系统 · 安全技术 · 热管理 · 能源管理 · 综合解决方案",
      },
      {
        title: "锂资源与电池材料",
        detail: "锂资源 · 锂化学品 · 电池级材料 · 加工技术 · 产业链",
      },
      {
        title: "动力电池制造",
        detail: "电芯生产 · 自动化 · 数字化制造 · 质量与安全 · 低碳生产",
      },
    ],
    exchange:
      "产业介绍 → 技术展示 → 工厂/设施参访 → 高管交流 → 技术问答 → 专业交流。重点探讨技术、制造、供应链、自动化、质量管理、绿色制造及产业发展。",
    exchangeDetails: {
      title: "🤝 高管商务交流",
      intro: "每次企业交流可结合：",
      flow: "企业介绍 → 技术展示 → 工厂参访 → 高管交流 → 技术问答 → 商务合作洽谈",
      focusLabel: "重点探讨：",
      focus: "制造效率 · 新能源转型 · 智能制造 · 供应链 · 技术合作 · 全球化",
    },
    outcomes:
      "了解中国新能源产业生态 · 学习光伏及电池制造 · 考察智能与绿色制造 · 深入了解产业链与供应链 · 发掘技术及商务合作机会。",
    note: "最终参访企业、工厂安排、交流嘉宾及具体内容将根据企业接待情况及代表团需求确认。",
  },
  {
    id: "ai-manufacturing",
    icon: Cpu,
    title: "AI与智能制造产业考察",
    detailTitle: "中国长三角AI与智能制造高管产业考察交流项目",
    kicker: "AI & SMART MANUFACTURING",
    route: "上海 → 苏州 → 无锡 → 杭州",
    duration: "7天6夜",
    shortFocus: "先进制造 · 智能制造 · 技术交流 · 商务交流",
    focus:
      "AI与数字化 · 医药与医疗器械 · 新能源与光伏 · 矿业与工业装备 · 工业机器人 · 智能制造",
    industries:
      "医药与医疗器械 · 新能源 · 工业装备 · 机器人 · 自动化 · 先进制造",
    intro:
      "为印度企业及产业领域高管量身打造，深入了解中国先进制造、智能制造、科技创新及产业生态。",
    highlights: [
      "企业及工厂参访",
      "高管及技术交流",
      "智能制造标杆学习",
      "产业及供应链考察",
      "中印商务交流与合作对接",
      "精选文化体验",
    ],
    pathwayTitle: "四城产业考察",
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
        title: "医药与医疗器械",
        detail: "医药研发 · CRO/CDMO · 医疗器械 · 精密制造",
      },
      {
        title: "新能源与光伏",
        detail: "光伏制造 · 智能生产 · 数字化工厂 · 新能源技术",
      },
      {
        title: "矿业与工业装备",
        detail: "矿山机械 · 重型装备 · 工业电气化 · 智能装备",
      },
      {
        title: "工业机器人与智能制造",
        detail: "机器人 · 自动化 · 智能感知 · 智慧工厂",
      },
    ],
    exchange:
      "企业介绍 → 技术展示 → 工厂/研发中心参访 → 管理层交流 → 技术问答 → 中印商务对接。重点探讨技术合作、供应链、设备采购、本地化制造、联合研发、市场拓展及投资合作。",
    outcomes:
      "了解中国先进制造生态 · 探索前沿技术 · 标杆学习智能制造 · 对接供应商与合作伙伴 · 发掘中印合作机会 · 建立产业商务网络。",
    note: "最终参访企业、工厂安排、交流嘉宾及具体内容将根据代表团需求及企业实际接待情况确认。",
  },
];
const enProgrammeContent = [
  {
    title: "Automotive & Advanced Manufacturing Study Mission",
    detailTitle: "China Automotive Industry Executive Study Mission",
    route: "Chengdu → Chongqing → Beijing",
    duration: "7 Days / 6 Nights",
    shortFocus: "Automotive Manufacturing · New Energy Vehicles · Smart Manufacturing · Automotive Technology",
    focus: "Automotive Manufacturing · New Energy Vehicles · Smart Factories · Automotive Components · Batteries & Power Systems · Automotive R&D · Intelligent Vehicles",
    industries: "Automotive OEMs · New Energy Vehicles · Components · Batteries & Power Systems · Tier 1 / Tier 2 Suppliers · Automotive Technology",
    intro: "Designed for executives from India's automotive sector, this programme provides an in-depth view of China's automotive manufacturing, new energy vehicles, smart factories and automotive technology ecosystem.",
    highlights: ["Automotive company and factory visits", "Executive and technical exchanges", "Automotive manufacturing benchmarking", "New energy vehicle and smart factory experiences", "China-India business exchange and partnership matching", "Selected cultural experiences"],
    customization: {
      title: "Customisable by company type",
      companyTypes: ["Passenger vehicle OEMs", "Commercial vehicle manufacturers", "New energy vehicle companies", "Battery and e-drive companies", "Automotive component companies", "Tier 1 / Tier 2 suppliers", "Automotive technology companies"],
      description: "Company visits and business exchanges can be tailored to the delegation's business priorities.",
    },
    pathwayTitle: "Seven-day industry learning pathway",
    pathway: "Vehicle Manufacturing → New Energy Transition → Smart Factories → Supply Chain → Automotive R&D → Intelligent Vehicles → Globalisation",
    citiesTitle: "",
    cities: [
      { name: "Chengdu", detail: "Vehicle manufacturing · New energy vehicles · Components · Smart manufacturing · Supply-chain ecosystem" },
      { name: "Chongqing", detail: "Smart factories · Industry 4.0 · New energy vehicles · Automotive R&D · Intelligent driving" },
      { name: "Beijing", detail: "Intelligent vehicles · AI + automotive · Automotive technology · Software and electronics · Innovation ecosystem" },
    ],
    areas: [
      { title: "New Energy Vehicles", detail: "EV platforms · Power batteries · E-drive systems · Vehicle electronics · New energy manufacturing" },
      { title: "Smart Manufacturing", detail: "Industrial robots · Digital factories · Automation · AI quality inspection · Smart logistics" },
      { title: "Automotive Supply Chain", detail: "Tier 1 / Tier 2 · Localisation · Strategic sourcing · Component manufacturing · Supply-chain collaboration" },
      { title: "Automotive Technology", detail: "Intelligent driving · Automotive software · Smart cockpits · AI · Automotive electronics" },
    ],
    exchange: "Company introduction → Technology showcase → Factory visit → Executive exchange → Technical Q&A → Business cooperation discussion. Discussions focus on manufacturing efficiency, new energy transition, smart manufacturing, supply chains, technology cooperation and globalisation.",
    outcomes: "Understand China's automotive industry ecosystem · Learn new energy and smart manufacturing practices · Examine advanced automotive technologies and R&D · Identify supply-chain and technology partners · Explore China-India automotive cooperation opportunities.",
    note: "Final company and factory visits, exchange speakers and detailed arrangements will be confirmed according to the delegation's industry background, strategic priorities and host-company availability.",
  },
  {
    title: "New Energy & Energy Technology Study Mission",
    detailTitle: "Sichuan New Energy Executive Study Mission & Technical Exchange",
    route: "Chengdu → Yibin → Chengdu",
    duration: "7 Days / 6 Nights",
    shortFocus: "New Energy · Lithium Batteries · Advanced Manufacturing · Technical Exchange",
    focus: "Solar PV · Energy Storage · Lithium Resources · Battery Materials · Power Batteries · Smart Manufacturing · Green Manufacturing · New Energy Industry Clusters",
    industries: "Renewable Energy · Solar PV · Batteries & Energy Storage · New Energy Vehicles · Lithium & Battery Materials · Advanced Manufacturing",
    intro: "Designed for executives in India's energy and industrial sectors, this programme provides an in-depth view of China's new energy, lithium battery and advanced manufacturing ecosystem.",
    highlights: ["New energy and solar PV company visits", "Lithium resources, battery materials and power-battery manufacturing visits", "Smart factory and advanced manufacturing benchmarking", "Technical and executive exchanges", "Green manufacturing and industry-cluster study", "Professional exchange and business matching"],
    pathwayTitle: "New energy industry value chain",
    pathway: "Solar PV → Energy Storage → Lithium Resources & Battery Materials → Power Batteries → Smart Manufacturing → Green Manufacturing → Industry Clusters",
    citiesTitle: "🏭 Two industry cities",
    cities: [
      { name: "Chengdu", detail: "Solar PV · Energy storage · Lithium resources · Technology R&D · Advanced manufacturing" },
      { name: "Yibin", detail: "Power batteries · Battery materials · Smart factories · Green manufacturing · New energy industry clusters" },
    ],
    areas: [
      { title: "Solar PV & New Energy", detail: "High-efficiency PV cells · Smart production · Automation · Quality management" },
      { title: "Energy Storage Technology", detail: "Energy storage systems · Safety technology · Thermal management · Energy management · Integrated solutions" },
      { title: "Lithium Resources & Battery Materials", detail: "Lithium resources · Lithium chemicals · Battery-grade materials · Processing technology · Value chain" },
      { title: "Power Battery Manufacturing", detail: "Cell production · Automation · Digital manufacturing · Quality and safety · Low-carbon production" },
    ],
    exchange: "Industry introduction → Technology showcase → Factory or facility visit → Executive exchange → Technical Q&A → Professional exchange. Discussions focus on technology, manufacturing, supply chains, automation, quality management, green manufacturing and industry development.",
    exchangeDetails: {
      title: "🤝 Executive business exchange",
      intro: "Each company exchange can include:",
      flow: "Company introduction → Technology showcase → Factory visit → Executive exchange → Technical Q&A → Business cooperation discussion",
      focusLabel: "Key discussion areas:",
      focus: "Manufacturing efficiency · New energy transition · Smart manufacturing · Supply chains · Technology cooperation · Globalisation",
    },
    outcomes: "Understand China's new energy ecosystem · Learn about solar PV and battery manufacturing · Examine smart and green manufacturing · Gain insight into industry and supply chains · Identify technology and business cooperation opportunities.",
    note: "Final company and factory visits, exchange speakers and detailed arrangements will be confirmed according to host-company availability and delegation requirements.",
  },
  {
    title: "AI & Smart Manufacturing Study Mission",
    detailTitle: "Yangtze River Delta AI & Smart Manufacturing Executive Study Mission",
    route: "Shanghai → Suzhou → Wuxi → Hangzhou",
    duration: "7 Days / 6 Nights",
    shortFocus: "Advanced Manufacturing · Smart Manufacturing · Technical Exchange · Business Exchange",
    focus: "AI & Digitalisation · Pharmaceuticals & Medical Devices · New Energy & Solar PV · Mining & Industrial Equipment · Industrial Robotics · Smart Manufacturing",
    industries: "Pharmaceuticals & Medical Devices · New Energy · Industrial Equipment · Robotics · Automation · Advanced Manufacturing",
    intro: "Designed for executives from Indian companies and industry sectors, this programme provides an in-depth view of China's advanced manufacturing, smart manufacturing, technology innovation and industry ecosystem.",
    highlights: ["Company and factory visits", "Executive and technical exchanges", "Smart manufacturing benchmarking", "Industry and supply-chain study", "China-India business exchange and partnership matching", "Selected cultural experiences"],
    pathwayTitle: "Four-city industry study",
    pathway: "Shanghai → Suzhou → Wuxi → Hangzhou, connecting international business, advanced manufacturing and innovation technology ecosystems.",
    citiesTitle: "",
    cities: [
      { name: "Shanghai", detail: "International business · Pharmaceutical industry · Medical technology" },
      { name: "Suzhou", detail: "New energy · Solar PV · Smart manufacturing" },
      { name: "Wuxi", detail: "Mining equipment · Heavy industry · Advanced manufacturing" },
      { name: "Hangzhou", detail: "Industrial robotics · Medical devices · New energy · Innovation technology" },
    ],
    areas: [
      { title: "Pharmaceuticals & Medical Devices", detail: "Pharmaceutical R&D · CRO/CDMO · Medical devices · Precision manufacturing" },
      { title: "New Energy & Solar PV", detail: "Solar PV manufacturing · Smart production · Digital factories · New energy technology" },
      { title: "Mining & Industrial Equipment", detail: "Mining machinery · Heavy equipment · Industrial electrification · Intelligent equipment" },
      { title: "Industrial Robotics & Smart Manufacturing", detail: "Robotics · Automation · Intelligent sensing · Smart factories" },
    ],
    exchange: "Company introduction → Technology showcase → Factory or R&D centre visit → Management exchange → Technical Q&A → China-India business matching. Discussions focus on technology cooperation, supply chains, equipment procurement, localised manufacturing, joint R&D, market expansion and investment cooperation.",
    outcomes: "Understand China's advanced manufacturing ecosystem · Explore frontier technologies · Benchmark smart manufacturing · Connect with suppliers and partners · Identify China-India cooperation opportunities · Build an industry and business network.",
    note: "Final company and factory visits, exchange speakers and detailed arrangements will be confirmed according to delegation requirements and host-company availability.",
  },
];
const enProgrammes = zhProgrammes.map((programme, index) => ({
  ...programme,
  ...enProgrammeContent[index],
}));
const programmes = computed(() =>
  isEnglish.value ? enProgrammes : zhProgrammes,
);
</script>

<style scoped>
.industry-page {
  background: #f4f7f4;
  color: #19394b;
  min-height: 100vh;
}
.industry-shell {
  width: min(1240px, calc(100% - 48px));
  margin: 0 auto;
}
.industry-hero {
  min-height: 530px;
  display: grid;
  align-items: end;
  padding: 130px 0 84px;
  color: #fff;
  background-color: #173f58;
  background-position: center;
  background-size: cover;
}
.industry-eyebrow,
.section-index {
  color: #e89a58;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
}
.industry-hero h1 {
  max-width: 900px;
  margin: 15px 0 17px;
  font:
    600 clamp(42px, 6vw, 76px)/1.08 Georgia,
    serif;
}
.industry-hero p:last-child {
  max-width: 620px;
  margin: 0;
  font-size: 17px;
  line-height: 1.7;
}
.industry-intro {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 72px;
  padding: 90px 0;
}
.industry-intro h2,
.section-heading h2,
.programme-header h2 {
  font:
    600 clamp(30px, 4vw, 48px)/1.18 Georgia,
    serif;
  color: #153c56;
}
.industry-intro h2 {
  margin: 13px 0 20px;
}
.industry-intro__copy > p {
  max-width: 650px;
  color: #507080;
  font-size: 16px;
  line-height: 1.95;
}
.industry-pillars {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #cbd9d4;
  border-left: 1px solid #cbd9d4;
  align-self: center;
}
.industry-pillar {
  min-height: 124px;
  padding: 22px;
  display: grid;
  align-content: center;
  gap: 12px;
  border-right: 1px solid #cbd9d4;
  border-bottom: 1px solid #cbd9d4;
  background: #fff;
  font-weight: 700;
}
.industry-pillar svg {
  width: 23px;
  color: #db7443;
}
.programme-overview {
  padding: 82px 0 92px;
  background: #e6efed;
  border-block: 1px solid #cadbd8;
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
}
.section-heading > p {
  max-width: 320px;
  margin: 0 0 7px;
  color: #507080;
  line-height: 1.65;
}
.industry-table-wrap {
  overflow-x: auto;
  border: 1px solid #b9cfcc;
  background: #fff;
  box-shadow: 0 18px 35px rgb(21 60 86 / 8%);
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
  border-right: 1px solid #d9e5e1;
  border-bottom: 1px solid #d9e5e1;
  color: #476776;
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
  background: #153c56;
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
  background: #f0f7f5;
}
.industry-table tbody th button {
  display: flex;
  gap: 11px;
  align-items: flex-start;
  padding: 0;
  color: #153c56;
  text-align: left;
  font: 800 16px/1.45 inherit;
  background: transparent;
  border: 0;
  cursor: pointer;
}
.industry-table tbody th svg {
  width: 23px;
  flex: 0 0 23px;
  margin-top: 1px;
  color: #dd7946;
}
.industry-table__action button {
  display: grid;
  place-items: center;
  width: 37px;
  height: 37px;
  padding: 0;
  color: #fff;
  background: #d87142;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
}
.industry-table__action svg {
  width: 18px;
}
.industry-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 54px 0;
}
.industry-gallery figure {
  margin: 0;
  overflow: hidden;
  background: #fff;
  border: 1px solid #d2e0dc;
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
}
.programme-detail {
  scroll-margin-top: 74px;
  padding: 76px 0 82px;
  background: #173f58;
  color: #eaf3f1;
}
.programme-detail--2 {
  background: #244d45;
}
.programme-detail--3 {
  background: #263e60;
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
}
.programme-header h2 {
  margin: 0 0 10px;
  color: #fff;
}
.programme-header span {
  color: #c8d8d9;
  line-height: 1.6;
}
.programme-visual {
  position: relative;
  width: min(700px, 72%);
  aspect-ratio: 16 / 9;
  margin: 0 auto 38px;
  overflow: hidden;
  background: #0e2f45;
  border: 1px solid rgb(255 255 255 / 28%);
  box-shadow: 14px 14px 0 rgb(239 165 105 / 18%);
}
.programme-visual::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 72px;
  height: 3px;
  content: "";
  background: #efa569;
}
.programme-visual img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
    500 19px/1.8 Georgia,
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
    600 25px/1.25 Georgia,
    serif;
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
  border: 1px solid rgb(255 255 255 / 20%);
}
.programme-customization p {
  max-width: 850px;
  margin: 20px 0 0;
  color: #d6e3e1;
  line-height: 1.85;
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
  font-size: clamp(24px, 3vw, 36px);
  line-height: 1.35;
}
.programme-closing-summary__culture-title {
  margin-top: 32px !important;
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
}
</style>
