<!-- 新加坡未来领袖系列高中课程宣传册 -->
<template>
  <main class="senior-page">
    <section class="senior-hero">
      <img class="senior-hero__image" :src="heroImage" alt="" />
      <div class="senior-hero__veil" aria-hidden="true"></div>
      <div class="senior-shell senior-hero__content">
        <div class="senior-hero__topline">
          <p class="senior-hero__eyebrow">APIMTC / 2025-26</p>
          <p class="senior-hero__meta">
            {{
              tx(
                "SENIOR HIGH / JUNIOR COLLEGE | AGES 16-18",
                "高中 / 初级学院 | 16-18 岁",
              )
            }}
          </p>
        </div>
        <div class="senior-hero__copy">
          <span class="senior-chip">{{
            tx("SENIOR HIGH PROGRAMME", "高中课程")
          }}</span>
          <h1>
            {{ tx("Singapore Future", "新加坡未来") }}
            <em>{{ tx("Leaders", "领袖系列") }}</em>
          </h1>
          <p>
            {{
              tx(
                "SIX THEMES · 6 DAYS / 5 NIGHTS OF IMMERSIVE LEARNING",
                "六大主题 · 6 天 5 夜沉浸式学习之旅",
              )
            }}
          </p>
          <small>{{
            tx(
              "Explore Singapore · Discover Possibilities · Shape the Future",
              "探索新加坡 · 发现无限可能 · 共创未来",
            )
          }}</small>
        </div>
        <a class="senior-hero__jump" href="#themes"
          ><span>06</span>{{ tx("THEMES", "主题") }}
          <b aria-hidden="true">↓</b></a
        >
      </div>
    </section>

    <section class="senior-intro senior-shell">
      <div class="senior-intro__heading">
        <p class="senior-index">
          00 / {{ tx("PROGRAMME GUIDE", "项目宣传册") }}
        </p>
        <h2>
          {{ tx("A journey into the future.", "一场走进未来的学习之旅。") }}
        </h2>
      </div>
      <div class="senior-intro__copy">
        <p>
          {{
            tx(
              "A 6-day, 5-night themed educational experience in Singapore, specially designed for international and overseas senior high / JC students. Through Educate · Experience · Explore · Exchange, students connect academic knowledge with real-world experiences across biomedical science, space, mobility, sustainability, advanced industry, Earth systems, AI and innovation.",
              "一项为海外及国际高中 / JC 学生特别设计的6天5夜主题式教育体验。通过学习 · 体验 · 探索 · 交流，学生将课堂知识与真实世界连接起来，深入接触生物医学科学、太空科技、未来移动、可持续发展、气候创新、工业4.0、地球系统、人工智能与未来创新。",
            )
          }}
        </p>
        <div class="senior-metrics" aria-label="Programme highlights">
          <div>
            <strong>06</strong
            ><span>{{ tx("Future themes", "未来主题") }}</span>
          </div>
          <div>
            <strong>6+5</strong
            ><span>{{ tx("Days + nights", "天 + 夜") }}</span>
          </div>
          <div>
            <strong>4E</strong
            ><span>{{ tx("Learning experience", "学习体验") }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="themes" class="senior-themes">
      <div class="senior-shell">
        <div class="senior-section-heading">
          <div>
            <p class="senior-index">
              01 / {{ tx("SIX FUTURE THEMES", "六大未来主题") }}
            </p>
            <h2>
              {{
                tx(
                  "Learn with the city as your classroom.",
                  "以城市为课堂，走进真实世界。",
                )
              }}
            </h2>
          </div>
          <p>
            {{
              tx(
                "From biomedical science to artificial intelligence, every theme connects academic knowledge with Singapore’s people, places and possibilities.",
                "从生物医学科学到人工智能，每个主题都把课堂知识与新加坡的人、城市和未来连接起来。",
              )
            }}
          </p>
        </div>
        <div class="senior-theme-grid">
          <a
            v-for="(theme, index) in themes"
            :key="theme.en.title"
            class="senior-theme-card"
            :href="`#programme-${index + 1}`"
          >
            <div class="senior-theme-card__image-wrap">
              <img
                :src="theme.image"
                :alt="tx(theme.en.title, theme.zh.title)"
                loading="lazy"
              />
            </div>
            <div class="senior-theme-card__body">
              <span class="senior-theme-card__number">0{{ index + 1 }}</span>
              <p>{{ tx(theme.en.area, theme.zh.area) }}</p>
              <h3>{{ tx(theme.en.title, theme.zh.title) }}</h3>
              <span class="senior-theme-card__line"></span>
              <small>{{ tx(theme.en.detail, theme.zh.detail) }}</small>
              <div class="senior-theme-card__area-detail">
                {{ tx(theme.en.explore, theme.zh.explore) }}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="senior-framework senior-shell">
        <div class="senior-section-heading senior-section-heading--compact">
        <div>
          <p class="senior-index">
            02 / {{ tx("THE 4Es LEARNING EXPERIENCE", "4Es 学习体验") }}
          </p>
          <h2>
            {{
              tx("A learning journey with momentum.", "让学习旅程持续推进。")
            }}
          </h2>
        </div>
        <p>
          {{
            tx(
              "Every theme moves students from knowledge to action through a clear, collaborative learning pipeline.",
              "每个主题都通过清晰、协作的学习路径，让学生从知识走向行动。",
            )
          }}
        </p>
      </div>
      <div class="senior-pipeline" role="list">
        <article
          v-for="(step, index) in learningSteps"
          :key="step.en.title"
          class="senior-pipeline__step"
          role="listitem"
        >
          <div class="senior-pipeline__marker">0{{ index + 1 }}</div>
          <p>{{ tx(step.en.kicker, step.zh.kicker) }}</p>
          <h3>{{ tx(step.en.title, step.zh.title) }}</h3>
          <span>{{ tx(step.en.detail, step.zh.detail) }}</span>
        </article>
      </div>
    </section>

    <section class="senior-journey">
      <div class="senior-shell">
        <div class="senior-section-heading senior-section-heading--light">
          <div>
            <p class="senior-index">
              03 / {{ tx("DISCOVERY JOURNEY", "探索旅程") }}
            </p>
            <h2>
              {{
                tx(
                  "Six days. One future-facing story.",
                  "六天，串联一段面向未来的故事。",
                )
              }}
            </h2>
          </div>
          <p>
            {{
              tx(
                "A balanced itinerary connects Singapore's landmarks, schools, industry and communities.",
                "均衡的行程连接新加坡的地标、学校、产业与社区。",
              )
            }}
          </p>
        </div>
        <div class="senior-timeline">
          <article
            v-for="day in journey"
            :key="day.day"
            class="senior-timeline__item"
          >
            <span class="senior-timeline__day">{{ day.day }}</span>
            <div>
              <p>{{ tx(day.en.theme, day.zh.theme) }}</p>
              <h3>{{ tx(day.en.title, day.zh.title) }}</h3>
              <span>{{ tx(day.en.detail, day.zh.detail) }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="senior-proof senior-shell">
      <div class="senior-proof__lead">
        <p class="senior-index">
          04 / {{ tx("REAL-WORLD LEARNING", "真实世界学习") }}
        </p>
        <h2>
          {{
            tx(
              "Learn in the places where the future is being built.",
              "在未来正在发生的地方学习。",
            )
          }}
        </h2>
        <p>
          {{
            tx(
              "School exchange, university learning, industry experiences, themed venues and community challenges make every idea tangible.",
              "学校交流、大学学习、产业体验、主题场馆与社区挑战，让每个想法都变得真实可感。",
            )
          }}
        </p>
        <a class="senior-proof__link" href="#programme-guide"
          >{{ tx("View the complete guide", "查看完整课程宣传册") }}
          <span aria-hidden="true">↗</span></a
        >
      </div>
      <div class="senior-proof__grid">
        <div
          v-for="proof in proofPoints"
          :key="proof.en.title"
          class="senior-proof__item"
        >
          <span class="senior-proof__icon">{{ proof.icon }}</span>
          <h3>{{ tx(proof.en.title, proof.zh.title) }}</h3>
          <p>{{ tx(proof.en.detail, proof.zh.detail) }}</p>
        </div>
      </div>
    </section>

    <section id="programme-guide" class="senior-reading senior-shell">
      <div>
        <p class="senior-index">
          02 / {{ tx("FULL PROGRAMME GUIDE", "完整课程内容") }}
        </p>
        <h2>
          {{
            tx(
              "The full journey, page by page.",
              "完整课程内容，一页一页展开。",
            )
          }}
        </h2>
      </div>
      <p>
        {{
          tx(
            "Explore the complete programme guide below, including learning experiences, daily itineraries and real-world learning environments.",
            "以下保留完整课程宣传册，包含学习体验、每日行程与真实学习场景。",
          )
        }}
      </p>
    </section>

    <section class="senior-programmes">
      <article
        v-for="(programme, index) in programmes"
        :id="`programme-${index + 1}`"
        :key="programme.en.title"
        class="senior-programme"
      >
        <div class="senior-shell">
          <header class="senior-programme__header">
            <img
              class="senior-programme__image"
              :src="themes[index].image"
              :alt="tx(themes[index].en.title, themes[index].zh.title)"
              loading="lazy"
            />
            <div class="senior-programme__header-copy">
              <p class="senior-index">0{{ index + 1 }} / 06</p>
              <p class="senior-programme__series">
                {{ tx("SINGAPORE FUTURE LEADERS", "新加坡未来领袖系列") }}
              </p>
              <h2>{{ tx(programme.en.title, programme.zh.title) }}</h2>
              <p class="senior-programme__strap">
                {{ tx(programme.en.strap, programme.zh.strap) }}
              </p>
            </div>
            <span class="senior-programme__badge">{{
              tx("6 DAYS / 5 NIGHTS", "6天5夜")
            }}</span>
          </header>
          <p class="senior-programme__lead">
            {{ tx(programme.en.lead, programme.zh.lead) }}
          </p>
          <p v-if="programme.en.context" class="senior-programme__context">
            {{ tx(programme.en.context ?? "", programme.zh.context ?? "") }}
          </p>
          <div class="senior-programme__columns">
            <section>
              <p class="senior-index">
                {{ tx("LEARNING EXPERIENCE", "学习体验") }}
              </p>
              <div class="senior-programme__experiences">
                <div
                  v-for="experience in programme.experiences"
                  :key="experience.en.title"
                >
                  <strong>{{
                    tx(experience.en.title, experience.zh.title)
                  }}</strong>
                  <span>{{
                    tx(experience.en.detail, experience.zh.detail)
                  }}</span>
                </div>
              </div>
            </section>
            <section>
              <p class="senior-index">
                {{ tx("REAL-WORLD LEARNING ENVIRONMENTS", "五大真实学习环境") }}
              </p>
              <div class="senior-programme__environments">
                <div
                  v-for="environment in programme.environments"
                  :key="environment.en.title"
                >
                  <strong>{{
                    tx(environment.en.title, environment.zh.title)
                  }}</strong>
                  <span>{{
                    tx(environment.en.detail, environment.zh.detail)
                  }}</span>
                </div>
              </div>
            </section>
          </div>
          <section class="senior-programme__journey">
            <div class="senior-programme__journey-heading">
              <p class="senior-index">
                {{ tx("6-DAY / 5-NIGHT DISCOVERY JOURNEY", "6天5夜探索之旅") }}
              </p>
              <h3>
                {{
                  tx(
                    "A week of learning in Singapore",
                    "在新加坡展开一周学习旅程",
                  )
                }}
              </h3>
            </div>
            <div class="senior-programme__days">
              <div v-for="day in programme.days" :key="day.day">
                <span>{{ day.day }}</span>
                <strong>{{ tx(day.en.title, day.zh.title) }}</strong>
                <p>{{ tx(day.en.detail, day.zh.detail) }}</p>
              </div>
            </div>
          </section>
          <footer class="senior-programme__footer">
            {{ tx(programme.en.close, programme.zh.close) }}
          </footer>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "@/composables/useI18n";
import heroImage from "@/assets/images/highSchoolCurriculum/图7.png";
import image01 from "@/assets/images/highSchoolCurriculum/图1.png";
import image02 from "@/assets/images/highSchoolCurriculum/图2.png";
import image03 from "@/assets/images/highSchoolCurriculum/图3.png";
import image04 from "@/assets/images/highSchoolCurriculum/图4.png";
import image05 from "@/assets/images/highSchoolCurriculum/图5.png";
import image06 from "@/assets/images/highSchoolCurriculum/图6.png";

const { lang } = useI18n();
const isEn = computed(() => lang.value === "en");
const tx = (en: string, zh: string) => (isEn.value ? en : zh);
const experience = (
  enTitle: string,
  enDetail: string,
  zhTitle: string,
  zhDetail: string,
) => ({
  en: { title: enTitle, detail: enDetail },
  zh: { title: zhTitle, detail: zhDetail },
});
const programme = (
  en: {
    title: string;
    strap: string;
    lead: string;
    context?: string;
    close: string;
  },
  zh: {
    title: string;
    strap: string;
    lead: string;
    context?: string;
    close: string;
  },
  experiences: ReturnType<typeof experience>[],
  environments: ReturnType<typeof experience>[],
  days: Array<{
    day: string;
    en: { title: string; detail: string };
    zh: { title: string; detail: string };
  }>,
) => ({ en, zh, experiences, environments, days });

const programmeDays = (items: [string, string, string, string, string][]) =>
  items.map(([day, enTitle, enDetail, zhTitle, zhDetail]) => ({
    day,
    en: { title: enTitle, detail: enDetail },
    zh: { title: zhTitle, detail: zhDetail },
  }));

const programmes = [
  programme(
    {
      title:
        "SENIOR HIGH / Junior College #1 | BIOMEDICAL INNOVATION & FUTURE HEALTHCARE",
      strap: "Biomedical Science, Healthcare & Biotechnology",
      lead: "Explore Biomedical Science · Discover Healthcare Innovation · Imagine Future Medicine",
      context:
        "Through Learn · Experience · Explore · Exchange, students move beyond textbook biology to explore how biomedical science, biotechnology, healthcare and innovation are shaping the future of human health.",
      close: "More Than a Study Tour — A Future Healthcare Learning Journey",
    },
    {
      title: "高中 / 初级学院 #1｜生物医学创新与未来医疗",
      strap: "生物医学、医疗健康与生物科技",
      lead: "探索生物医学 · 发现医疗创新 · 想象未来医学",
      context:
        "通过学习 · 体验 · 探索 · 交流，学生将从课本中的生物学知识进一步走向真实世界，了解生物医学、生物科技、医疗健康与创新如何共同推动未来人类健康的发展。",
      close: "不只是游学 — 未来医疗探索之旅",
    },
    [
      experience(
        "LEARN | Build Scientific Understanding",
        "Human Biology · Genetics · Cells · Microbiology · Biomedical Science",
        "学习｜建立科学基础",
        "人体生物学 · 细胞 · 遗传学 · 微生物学 · 生物医学",
      ),
      experience(
        "EXPERIENCE | Applied Biomedical Learning",
        "Laboratory Activities · Scientific Investigation · Biomedical Applications · Healthcare",
        "体验｜应用生物医学知识",
        "实验活动 · 科学探究 · 生物医学应用 · 医疗科技",
      ),
      experience(
        "EXPLORE | Discover Innovation",
        "Biotechnology · Diagnostics · Medical Technology · Future Healthcare",
        "探索｜发现未来创新",
        "生物科技 · 医疗诊断 · 医疗技术 · 未来医疗",
      ),
      experience(
        "EXCHANGE | International Learning",
        "Singapore Students · School Life · Teamwork · Cross-Cultural Exchange",
        "交流｜国际学生交流",
        "新加坡学生 · 校园生活 · 团队合作 · 跨文化交流",
      ),
    ],
    [
      experience(
        "BIOMEDICAL SCIENCE",
        "Cells · Genetics · Microbiology · Human Biology",
        "生物医学科学",
        "细胞 · 遗传学 · 微生物学 · 人体生物学",
      ),
      experience(
        "HEALTHCARE",
        "Diagnostics · Health Technology · Medical Innovation · Future Healthcare",
        "医疗健康",
        "医疗诊断 · 医疗科技 · 医疗创新 · 未来医疗",
      ),
      experience(
        "BIOTECHNOLOGY",
        "Scientific Research · Biotechnology Applications · Laboratory Science",
        "生物科技",
        "科学研究 · 生物科技应用 · 实验室科学",
      ),
      experience(
        "EDUCATION",
        "Singapore Schools · Applied Learning · Peer Collaboration",
        "教育",
        "新加坡学校 · 应用学习 · 同龄人合作",
      ),
      experience(
        "COMMUNITY",
        "Healthcare · Housing · Food · Transport · Everyday Life",
        "社区",
        "医疗健康 · 住房 · 食物 · 交通 · 日常生活",
      ),
    ],
    programmeDays([
      [
        "DAY 1",
        "Discover Singapore",
        "Arrival & Orientation · Chinatown · Merlion Park · Gardens by the Bay",
        "探索新加坡",
        "抵达与迎新 · 牛车水 · 鱼尾狮公园 · 滨海湾花园",
      ],
      [
        "DAY 2",
        "Explore Biomedical Science",
        "Human Biology / Life Sciences Learning Experience · Scientific Investigation · Science Centre",
        "探索生物医学科学",
        "人体生物学 / 生命科学学习体验 · 科学探究 · 新加坡科学馆",
      ],
      [
        "DAY 3",
        "Discover Biomedical Innovation",
        "Biomedical / Life Sciences Applied Learning · Biotechnology · Cells · Genetics · Microbiology · Healthcare Applications",
        "发现生物医学创新",
        "理工学院 / 生物医学应用学习 · 生物科技 · 细胞 · 遗传学 · 微生物学 · 医疗健康应用",
      ],
      [
        "DAY 4",
        "Connect with Singapore Students",
        "Singapore Secondary School / Junior College Exchange · Student Interaction · STEM Activity · Biomedical Innovation Challenge",
        "与新加坡学生交流",
        "新加坡中学 / 初级学院学生交流 · STEM 活动 · 团队合作 · 文化交流 · 生物医学创新挑战",
      ],
      [
        "DAY 5",
        "Understand Health in Everyday Life",
        "HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · Community Exploration · Healthcare · Local Student Interaction",
        "了解日常健康与生活",
        "HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · 社区探索 · 医疗与日常生活 · 本地学生交流",
      ],
      [
        "DAY 6",
        "Experience Singapore",
        "Universal Studios Singapore · Team Activities · Singapore Farewell",
        "体验新加坡",
        "新加坡环球影城 · 团队活动 · 新加坡告别体验",
      ],
    ]),
  ),
  programme(
    {
      title:
        "SENIOR HIGH / Junior College #2 | SPACE TECHNOLOGY & FUTURE MOBILITY",
      strap: "Space Technology, Aerospace & Future Mobility",
      lead: "Explore Space · Discover Aerospace · Imagine the Future of Mobility",
      context:
        "Through Learn · Experience · Explore · Exchange, students investigate how space technology, aerospace, aviation, autonomous systems and emerging mobility technologies are transforming how humans explore and move through the world.",
      close: "More Than a Study Tour — A Future Mobility Learning Journey",
    },
    {
      title: "高中 / 初级学院 #2｜太空科技与未来交通",
      strap: "太空科技、航空航天与未来交通",
      lead: "探索太空 · 发现航空航天 · 想象未来交通",
      context:
        "通过学习 · 体验 · 探索 · 交流，学生深入了解太空科技、航空航天、航空、自主系统与新兴交通技术，探索这些技术如何改变人类探索世界以及未来出行的方式。",
      close: "不只是游学 — 未来交通探索之旅",
    },
    [
      experience(
        "LEARN | Build Technical Understanding",
        "Space Science · Aerospace · Flight · Engineering · Mobility",
        "学习｜建立科技基础",
        "太空科学 · 航空航天 · 飞行 · 工程 · 交通科技",
      ),
      experience(
        "EXPERIENCE | Applied Technology",
        "Drones · Aviation Technology · Engineering Activities · Autonomous Systems",
        "体验｜应用科技",
        "无人机 · 航空科技 · 工程实践 · 自主系统",
      ),
      experience(
        "EXPLORE | Discover Future Mobility",
        "Airports · Aerospace Systems · Smart Mobility · Future Transportation",
        "探索｜发现未来交通",
        "机场 · 航空系统 · 智慧交通 · 未来运输",
      ),
      experience(
        "EXCHANGE | International Learning",
        "Singapore Students · STEM Collaboration · Teamwork · Cultural Exchange",
        "交流｜国际学生交流",
        "新加坡学生 · STEM 合作 · 团队合作 · 跨文化交流",
      ),
    ],
    [
      experience(
        "SPACE & SCIENCE",
        "Space Science · Exploration · Satellites · Future Missions",
        "太空与科学",
        "太空科学 · 太空探索 · 卫星 · 未来任务",
      ),
      experience(
        "AEROSPACE",
        "Flight · Aircraft · Engineering · Aviation Technology",
        "航空航天",
        "飞行 · 飞机 · 工程 · 航空科技",
      ),
      experience(
        "DRONES & AUTONOMOUS SYSTEMS",
        "Sensors · Control Systems · Navigation · Autonomous Technology",
        "无人机与自主系统",
        "传感器 · 控制系统 · 导航 · 自主科技",
      ),
      experience(
        "FUTURE MOBILITY",
        "Smart Transport · Urban Mobility · Electric & Autonomous Vehicles",
        "未来交通",
        "智慧交通 · 城市移动 · 电动交通 · 自动驾驶科技",
      ),
      experience(
        "AVIATION ECOSYSTEM",
        "Airports · Operations · Technology · Global Connectivity",
        "航空生态系统",
        "机场 · 航空运营 · 科技 · 全球连接",
      ),
    ],
    programmeDays([
      [
        "DAY 1",
        "Discover Singapore",
        "Arrival & Orientation · Chinatown · Merlion Park · Gardens by the Bay",
        "探索新加坡",
        "抵达与迎新 · 牛车水 · 鱼尾狮公园 · 滨海湾花园",
      ],
      [
        "DAY 2",
        "Understand Flight & Aerospace",
        "Aviation / Drone STEM Workshop · Flight Principles · Drone Technology · Aerospace Engineering · Science Centre",
        "了解飞行与航空航天",
        "航空 / 无人机 STEM 工作坊 · 飞行原理 · 无人机科技 · 航空航天工程 · 新加坡科学馆",
      ],
      [
        "DAY 3",
        "Explore Aviation & Mobility",
        "Polytechnic Aerospace / Aviation Applied Learning · Engineering · Aviation Systems · Changi Airport",
        "探索航空与未来交通",
        "理工学院航空航天 / 航空应用学习 · 工程 · 航空系统 · 樟宜机场航空探索",
      ],
      [
        "DAY 4",
        "Connect & Create",
        "Singapore Secondary School / Junior College Exchange · STEM Activity · Student Interaction · Space / Aviation / Future Mobility Challenge",
        "交流与创造",
        "新加坡中学 / 初级学院学生交流 · STEM 活动 · 学生互动 · 太空 / 航空 / 未来交通挑战",
      ],
      [
        "DAY 5",
        "Explore Mobility in a Smart City",
        "HDB Hub · Urban Living & Transport · Community Exploration · Public Transport · Local Student Interaction",
        "探索智慧城市交通",
        "HDB Hub · 城市生活与交通 · 社区探索 · 公共交通 · 本地学生交流 · 未来交通观察挑战",
      ],
      [
        "DAY 6",
        "Experience Singapore",
        "Universal Studios Singapore · Team Activities · Singapore Farewell",
        "体验新加坡",
        "新加坡环球影城 · 团队活动 · 新加坡告别体验",
      ],
    ]),
  ),
  programme(
    {
      title:
        "SENIOR HIGH / Junior College #3 | SUSTAINABLE CITIES & CLIMATE INNOVATION",
      strap: "Sustainable Cities, Climate Science & Green Technology",
      lead: "Understand Climate · Explore Innovation · Design Sustainable Cities",
      context:
        "Through Learn · Experience · Explore · Exchange, students examine how climate science, urban systems, water management, biodiversity and green technology can work together to address the challenges facing future cities.",
      close:
        "More Than a Study Tour — A Future Sustainability Learning Journey",
    },
    {
      title: "高中 / 初级学院 #3｜可持续城市与气候创新",
      strap: "可持续城市、气候科学与绿色科技",
      lead: "理解气候 · 探索创新 · 设计可持续城市",
      context:
        "通过学习 · 体验 · 探索 · 交流，学生研究气候科学、城市系统、水资源管理、生物多样性与绿色科技如何相互结合，应对未来城市所面对的环境与气候挑战。",
      close: "不只是游学 — 未来可持续发展探索之旅",
    },
    [
      experience(
        "LEARN | Understand Climate & Earth Systems",
        "Climate Science · Environmental Systems · Sustainability · Water",
        "学习｜了解气候与地球系统",
        "气候科学 · 环境系统 · 可持续发展 · 水资源",
      ),
      experience(
        "EXPERIENCE | Applied Green Technology",
        "Sustainable Technology · Environmental Engineering · Water Management · Urban Solutions",
        "体验｜应用绿色科技",
        "可持续科技 · 环境工程 · 水资源管理 · 城市解决方案",
      ),
      experience(
        "EXPLORE | Study Singapore as a Living Laboratory",
        "Urban Planning · Green Spaces · Biodiversity · Climate Resilience",
        "探索｜把新加坡作为“城市实验室”",
        "城市规划 · 绿色空间 · 生物多样性 · 气候韧性",
      ),
      experience(
        "EXCHANGE | International Learning",
        "Singapore Students · Sustainability Projects · Teamwork · Cross-Cultural Exchange",
        "交流｜国际学生交流",
        "新加坡学生 · 可持续发展项目 · 团队合作 · 跨文化交流",
      ),
    ],
    [
      experience(
        "CLIMATE SCIENCE",
        "Climate Systems · Environmental Change · Resilience · Sustainability",
        "气候科学",
        "气候系统 · 环境变化 · 气候韧性 · 可持续发展",
      ),
      experience(
        "GREEN TECHNOLOGY",
        "Renewable Energy · Resource Efficiency · Environmental Technology",
        "绿色科技",
        "可再生能源 · 资源效率 · 环境科技",
      ),
      experience(
        "WATER SYSTEMS",
        "Water Management · Water Security · Treatment · Sustainable Resources",
        "水资源系统",
        "水资源管理 · 水安全 · 水处理 · 可持续资源",
      ),
      experience(
        "URBAN SYSTEMS",
        "Urban Planning · Housing · Transport · Green Infrastructure",
        "城市系统",
        "城市规划 · 住房 · 交通 · 绿色基础设施",
      ),
      experience(
        "BIODIVERSITY",
        "Ecosystems · Wetlands · Conservation · Nature-Based Solutions",
        "生物多样性",
        "生态系统 · 湿地 · 保护 · 基于自然的解决方案",
      ),
    ],
    programmeDays([
      [
        "DAY 1",
        "Discover Singapore",
        "Arrival & Orientation · Chinatown · Merlion Park · Gardens by the Bay",
        "探索新加坡",
        "抵达与迎新 · 牛车水 · 鱼尾狮公园 · 滨海湾花园",
      ],
      [
        "DAY 2",
        "Understand Sustainable Cities",
        "Sustainability & Green Technology Applied Learning · Urban Systems · Green Technology · Gardens by the Bay",
        "了解可持续城市",
        "可持续发展与绿色科技应用学习 · 城市系统 · 绿色科技 · 滨海湾花园",
      ],
      [
        "DAY 3",
        "Explore Climate & Water Systems",
        "Sustainable Singapore / Water Management Learning Experience · Water Technology · Sungei Buloh Wetland Reserve · Climate Resilience",
        "探索气候与水资源系统",
        "可持续新加坡 / 水资源管理学习体验 · 水科技 · 双溪布洛湿地保护区 · 生态系统与气候韧性",
      ],
      [
        "DAY 4",
        "Connect & Design",
        "Singapore Secondary School / Junior College Exchange · Environmental STEM Activity · Future Green City Design Challenge",
        "交流与城市设计",
        "新加坡中学 / 初级学院学生交流 · 环境 STEM 活动 · 学生互动 · “未来绿色城市”设计挑战",
      ],
      [
        "DAY 5",
        "Experience Sustainable Urban Living",
        "HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · Sustainable Housing · Urban Planning · Community Exploration",
        "体验可持续城市生活",
        "HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · 可持续住宅 · 城市规划 · 社区探索",
      ],
      [
        "DAY 6",
        "Experience Singapore",
        "Universal Studios Singapore · Team Activities · Singapore Farewell",
        "体验新加坡",
        "新加坡环球影城 · 团队活动 · 新加坡告别体验",
      ],
    ]),
  ),
  programme(
    {
      title:
        "SENIOR HIGH / Junior College #4 | SINGAPORE INDUSTRY 4.0 & INNOVATION",
      strap: "Smart Manufacturing, Robotics & Future Industry",
      lead: "Explore Industry 4.0 · Discover Smart Manufacturing · Imagine Future Industry",
      context:
        "Through Learn · Experience · Explore · Exchange, students discover how robotics, automation, digitalisation, artificial intelligence and advanced manufacturing are transforming the way products are designed, made and delivered.",
      close: "More Than a Study Tour — A Future Industry Learning Journey",
    },
    {
      title: "高中 / 初级学院 #4｜新加坡工业4.0与创新",
      strap: "智能制造与未来产业",
      lead: "探索工业4.0 · 体验智能制造 · 发现未来产业",
      context:
        "通过4E：教育（Educate）·体验（Experience）·探索（Explore）·交流（Exchange），学生了解机器人、自动化、数字制造、人工智能与智能工厂如何改变现代工业，并思考未来产业需要怎样的人才与技能。",
      close: "不只是一次参访，而是一场未来产业学习之旅",
    },
    [
      experience(
        "LEARN | Understand Industry 4.0",
        "Smart Manufacturing · Robotics · Automation · Digitalisation · Industry 4.0",
        "学习｜建立未来产业知识",
        "工业4.0 · 智能制造 · 自动化 · 机器人 · 数字技术",
      ),
      experience(
        "EXPERIENCE | Applied Technology",
        "3D Printing · Robotics · Engineering · Prototyping · Manufacturing Technology",
        "体验｜接触真实工业",
        "3D打印 · 工程实践 · 智能工厂 · 制造技术 · 企业参访",
      ),
      experience(
        "EXPLORE | Discover Future Industry",
        "Smart Factories · Electric Vehicles · Automation · Digital Production",
        "探索｜主动探索创新",
        "制造流程 · 自动化系统 · 产品创新 · 工业问题解决",
      ),
      experience(
        "EXCHANGE | International Learning",
        "Singapore Students · STEM Collaboration · Teamwork · Cross-Cultural Exchange",
        "交流｜国际学生交流",
        "新加坡学生 · 校园体验 · 团队合作 · 跨文化交流",
      ),
    ],
    [
      experience(
        "ADVANCED MANUFACTURING",
        "Smart Factories · Digital Production · Industry 4.0",
        "智能制造",
        "智能工厂 · 自动化 · 机器人 · 数字制造",
      ),
      experience(
        "ROBOTICS & AUTOMATION",
        "Robotic Systems · Sensors · Automation · Human-Machine Interaction",
        "机器人与自动化",
        "机器人系统 · 传感器 · 自动化 · 人机互动",
      ),
      experience(
        "DIGITAL FABRICATION",
        "3D Printing · CAD · Prototyping · Additive Manufacturing",
        "数字制造",
        "3D打印 · CAD · 原型设计 · 增材制造",
      ),
      experience(
        "FUTURE MOBILITY",
        "Electric Vehicles · Smart Manufacturing · Connected Technologies",
        "未来移动",
        "电动车 · 智能制造 · 互联技术",
      ),
      experience(
        "INNOVATION",
        "Design Thinking · Problem Solving · Product Development · Entrepreneurship",
        "创新",
        "设计思维 · 问题解决 · 产品开发 · 创业",
      ),
    ],
    programmeDays([
      [
        "DAY 1",
        "Discover Singapore",
        "Arrival & Orientation · Chinatown · Merlion Park · Gardens by the Bay",
        "认识新加坡",
        "抵达与迎新 · Chinatown · Merlion Park · Gardens by the Bay",
      ],
      [
        "DAY 2",
        "Build & Prototype",
        "3D Printing & Digital Fabrication Workshop · Digital Design · Prototyping · Additive Manufacturing",
        "从创意到产品",
        "3D打印与数字制造工作坊 · 数字设计 · 快速原型 · 制造创新",
      ],
      [
        "DAY 3",
        "Experience Smart Manufacturing",
        "Polytechnic Industry 4.0 / Engineering Applied Learning · Robotics · Automation · Hyundai Motor Group Innovation Center Singapore (HMGICS)",
        "体验智能制造",
        "工业4.0 / 机器人 / 工程应用学习 · Hyundai Motor Group Innovation Center Singapore（HMGICS）· 智能工厂 · 自动化 · 电动车与未来移动",
      ],
      [
        "DAY 4",
        "Connect & Innovate",
        "Singapore Secondary School / Junior College Exchange · Student Interaction · Engineering / STEM Activity · Industry 4.0 Innovation Challenge",
        "与新加坡学生交流",
        "中学交流 · STEM / 工程活动 · 学生互动 · 工业4.0创新挑战",
      ],
      [
        "DAY 5",
        "Understand Technology in Everyday Life",
        "HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · Smart Living · Urban Technology · Treasure Hunt · Show & Tell",
        "发现日常生活中的创新",
        "HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · 社区探索 · 本地学生互动 · Treasure Hunt · Show & Tell",
      ],
      [
        "DAY 6",
        "Experience Singapore",
        "Universal Studios Singapore · Team Activities · Singapore Farewell",
        "欢乐与探索",
        "Universal Studios Singapore · 团队活动 · 新加坡告别",
      ],
    ]),
  ),
  programme(
    {
      title:
        "SENIOR HIGH / Junior College #5 | PLANETARY SCIENCE & EARTH SYSTEMS",
      strap: "Planetary Science, Earth Systems & Climate",
      lead: "Understand Earth · Explore Planetary Systems · Investigate Our Future",
      context:
        "Through Learn · Experience · Explore · Exchange, students investigate how Earth's atmosphere, oceans, geology, ecosystems and climate interact, while exploring the broader scientific questions that connect Earth to planetary science and the future of our planet.",
      close: "More Than a Study Tour — A Planetary Science Learning Journey",
    },
    {
      title: "高中 / 初级学院 #5｜行星科学与地球系统",
      strap: "地球科学、自然系统与环境未来",
      lead: "探索地球 · 理解自然 · 守护未来",
      context:
        "通过4E：教育（Educate）·体验（Experience）·探索（Explore）·交流（Exchange），学生从地球科学、自然历史、生态系统、海洋与气候等角度，理解地球如何运作，以及人类如何利用科学应对环境挑战。",
      close: "不只是一次旅行，而是一场探索地球的学习之旅",
    },
    [
      experience(
        "LEARN | Understand Earth & Planetary Systems",
        "Earth Science · Geology · Atmosphere · Oceans · Climate · Planetary Science",
        "学习｜建立地球科学知识",
        "地球科学 · 地质 · 自然历史 · 生态系统 · 气候",
      ),
      experience(
        "EXPERIENCE | Scientific Investigation",
        "Field Observation · Environmental Science · Natural History · Data & Evidence",
        "体验｜走进真实科学环境",
        "自然历史博物馆 · 湿地 · 海洋科学 · 环境学习",
      ),
      experience(
        "EXPLORE | Discover Earth Systems",
        "Biodiversity · Ecosystems · Wetlands · Marine Systems · Climate Change",
        "探索｜主动研究我们的星球",
        "生物多样性 · 生态观察 · 海洋 · 气候变化 · 保育",
      ),
      experience(
        "EXCHANGE | International Learning",
        "Singapore Students · Environmental Projects · Teamwork · Cross-Cultural Exchange",
        "交流｜国际学生交流",
        "新加坡学生 · 校园体验 · 团队合作 · 跨文化分享",
      ),
    ],
    [
      experience(
        "EARTH SCIENCE",
        "Geology · Earth Systems · Natural Processes · Scientific Observation",
        "地球科学",
        "地球系统 · 地质 · 自然历史 · 气候",
      ),
      experience(
        "PLANETARY SCIENCE",
        "Planetary Systems · Space Environment · Comparative Planetary Science",
        "行星科学",
        "行星系统 · 太空环境 · 比较行星科学",
      ),
      experience(
        "CLIMATE SCIENCE",
        "Atmosphere · Climate Systems · Climate Change · Resilience",
        "气候科学",
        "大气 · 气候系统 · 气候变化 · 韧性",
      ),
      experience(
        "OCEAN & ECOSYSTEMS",
        "Marine Science · Wetlands · Biodiversity · Conservation",
        "海洋与生态系统",
        "海洋科学 · 湿地 · 生物多样性 · 保育",
      ),
      experience(
        "RESEARCH & FIELD SCIENCE",
        "Observation · Evidence · Data · Investigation · Scientific Thinking",
        "研究与野外科学",
        "观察 · 证据 · 数据 · 探究 · 科学思维",
      ),
    ],
    programmeDays([
      [
        "DAY 1",
        "Discover Singapore",
        "Arrival & Orientation · Chinatown · Merlion Park · Gardens by the Bay",
        "认识新加坡",
        "抵达与迎新 · Chinatown · Merlion Park · Gardens by the Bay",
      ],
      [
        "DAY 2",
        "Understand Earth Systems",
        "Earth / Environmental Science Learning Experience · Science Centre Singapore · Earth Systems · Environment and Climate",
        "认识我们的地球",
        "Earth / Environmental Science Workshop · Science Centre Singapore · 地球科学 · 环境与气候探索",
      ],
      [
        "DAY 3",
        "Explore Earth's History",
        "Lee Kong Chian Natural History Museum, NUS · Evolution · Biodiversity · Geology / Natural History · Sungei Buloh Wetland Reserve",
        "探索地球生命历史",
        "Lee Kong Chian Natural History Museum, NUS · 生物多样性 · 进化 · 自然历史 · Sungei Buloh Wetland Reserve",
      ],
      [
        "DAY 4",
        "Investigate Oceans & Climate",
        "Singapore Secondary School / Junior College Exchange · Environmental STEM Activity · Singapore Oceanarium · Marine Conservation Challenge",
        "探索海洋与未来",
        "新加坡中学学生交流 · Singapore Oceanarium · 海洋生态系统 · 海洋科学 · 生物多样性 · 海洋保育挑战",
      ],
      [
        "DAY 5",
        "Study Human–Earth Systems",
        "HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · Sustainable Urban Living · Community Exploration",
        "探索可持续生活",
        "HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · 社区探索 · 本地学生互动 · Sustainability Treasure Hunt · Show & Tell",
      ],
      [
        "DAY 6",
        "Experience Singapore",
        "Universal Studios Singapore · Team Activities · Singapore Farewell",
        "欢乐与探索",
        "Universal Studios Singapore · 团队活动 · 新加坡告别",
      ],
    ]),
  ),
  programme(
    {
      title:
        "SENIOR HIGH / Junior College #6 | GENERATIVE AI & FUTURE INNOVATION",
      strap: "Generative AI, Digital Innovation & Future Business",
      lead: "Understand AI · Create with Technology · Innovate for the Future",
      context:
        "Through Learn · Experience · Explore · Exchange, students explore how Generative AI, machine learning, digital technologies and human creativity are transforming education, business, industry and society. The programme connects AI literacy with innovation, design thinking, entrepreneurship and responsible technology, encouraging students to move from understanding AI to creating meaningful solutions.",
      close: "More Than a Study Tour — A Future Innovation Learning Journey",
    },
    {
      title: "高中 / 初级学院 #6｜生成式AI与未来创新",
      strap: "人工智能、数字创新与未来社会",
      lead: "探索AI · 创造未来 · 负责任地创新",
      context:
        "通过4E：教育（Educate）·体验（Experience）·探索（Explore）·交流（Exchange），学生认识人工智能、机器学习、生成式AI与智能系统，并进一步学习如何将AI应用于真实问题、创新项目与未来商业。",
      close: "不只是学习AI，而是学习如何用AI创造未来",
    },
    [
      experience(
        "LEARN | Understand Artificial Intelligence",
        "Generative AI · Machine Learning · Large Language Models · AI Applications",
        "学习｜建立AI与数字科技基础",
        "人工智能 · 机器学习 · 生成式AI · 数据 · 数字技术",
      ),
      experience(
        "EXPERIENCE | Create with AI",
        "Prompting · AI-Assisted Creation · Digital Prototyping · AI Workflows",
        "体验｜接触真实AI应用",
        "AI工作坊 · 数字创新 · AI应用案例 · 智能系统",
      ),
      experience(
        "EXPLORE | Discover Future Innovation",
        "AI in Business · Smart Cities · Industry · Education · Healthcare",
        "探索｜从问题走向创新",
        "Prompting · AI创意 · Design Thinking · 原型设计 · 创新挑战",
      ),
      experience(
        "EXCHANGE | International Learning",
        "Singapore Students · Collaborative Projects · Teamwork · Cross-Cultural Exchange",
        "交流｜国际学生交流",
        "新加坡学生 · 校园体验 · 团队合作 · 跨文化交流",
      ),
    ],
    [
      experience(
        "ARTIFICIAL INTELLIGENCE",
        "Machine Learning · Generative AI · Computer Vision · AI Applications",
        "人工智能",
        "AI · Machine Learning · Computer Vision · Generative AI",
      ),
      experience(
        "DIGITAL TECHNOLOGY",
        "Data · Automation · Digital Transformation · Smart Systems",
        "数字创新",
        "数据 · 数字技术 · 智能系统 · 数字化转型",
      ),
      experience(
        "CREATIVE TECHNOLOGY",
        "Prompting · AI-Assisted Creation · Digital Content · Prototyping",
        "创意科技",
        "Prompting · AI辅助创作 · 数字内容 · 原型设计",
      ),
      experience(
        "INNOVATION & ENTREPRENEURSHIP",
        "Design Thinking · Problem Solving · Ideation · Future Business",
        "创新与创业",
        "Design Thinking · 原型设计 · 问题解决 · Future Business",
      ),
      experience(
        "RESPONSIBLE AI",
        "Privacy · Bias · Accuracy · Human Oversight · Responsible Innovation",
        "负责任的AI",
        "隐私 · 偏见 · 准确性 · 人类监督 · 负责任创新",
      ),
    ],
    programmeDays([
      [
        "DAY 1",
        "Discover Singapore",
        "Arrival & Orientation · Chinatown · Merlion Park · Gardens by the Bay · Smart City Observation",
        "认识智慧新加坡",
        "抵达与迎新 · Chinatown · Merlion Park · Gardens by the Bay · 智慧城市观察",
      ],
      [
        "DAY 2",
        "Understand AI & Digital Technology",
        "AI Discovery Workshop · Machine Learning · Computer Vision · AI Applications · Digital Transformation",
        "认识人工智能",
        "AI Discovery Workshop · Machine Learning · Computer Vision · AI应用与案例",
      ],
      [
        "DAY 3",
        "Create with Generative AI",
        "Generative AI / Future Innovation Workshop · Prompting · AI-Assisted Creation · Responsible AI · Smart Factory",
        "AI如何进入真实世界？",
        "AI / Digital Technology Applied Learning · Hyundai Motor Group Innovation Center Singapore（HMGICS）· 智能工厂 · 智能农场 · 机器人与未来移动",
      ],
      [
        "DAY 4",
        "Connect & Innovate",
        "Singapore Secondary School / Junior College Exchange · Student Interaction · AI / STEM Activity · Team Innovation Project",
        "与AI一起创造",
        "新加坡中学学生交流 · Generative AI Creative Workshop · Prompting · AI创意 · Responsible AI · 团队创新项目",
      ],
      [
        "DAY 5",
        "Explore AI in Everyday Life",
        "HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · Smart Living · Digital Services · Smart Community Treasure Hunt · Show & Tell",
        "探索智慧生活",
        "HDB Hub · HDB LIVINGSPACE Gallery + MyNiceHome Gallery · 智慧社区 · 本地学生互动 · Digital / Smart Community Treasure Hunt · Show & Tell",
      ],
      [
        "DAY 6",
        "Experience Singapore",
        "Universal Studios Singapore · Team Activities · Singapore Farewell",
        "欢乐与探索",
        "Universal Studios Singapore · 团队活动 · 新加坡告别",
      ],
    ]),
  ),
];

const themes = [
  {
    image: image01,
      en: {
        title: "Biomedical Innovation & Future Healthcare",
        area: "LIFE / HEALTH / BIOMEDICAL SCIENCE",
        detail:
          "Human biology, biotechnology, biomedical innovation and healthcare.",
        explore:
          "Explore human biology, biotechnology, biomedical innovation and healthcare, and discover how science and technology are transforming the future of medicine.",
      },
      zh: {
        title: "生物医学创新与未来医疗",
        area: "生命 / 健康 / 生物医学科学",
        detail: "人体生物学、生物科技、生物医学创新与医疗健康。",
        explore:
          "探索人体生物学、生物科技、生物医学创新及医疗，了解科学与科技如何推动未来医疗的发展。",
      },
  },
  {
    image: image02,
      en: {
        title: "Space Technology & Future Mobility",
        area: "SPACE / AEROSPACE / AVIATION",
        detail:
          "Space technology, autonomous systems, aviation and emerging mobility.",
        explore:
          "Explore space technology, drones, aerospace and aviation, and discover how autonomous systems, electric vehicles and emerging technologies are shaping future mobility.",
      },
    zh: {
        title: "太空科技与未来移动",
        area: "太空 / 航空航天 / 航空",
        detail: "太空科技、自主系统、航空与新兴交通技术。",
        explore:
          "探索太空科技、无人机、航空航天及航空业，了解自动化系统、电动车及新兴科技如何塑造未来交通。",
    },
  },
  {
    image: image03,
      en: {
      title: "Sustainable Cities & Climate Innovation",
      area: "SUSTAINABILITY / CLIMATE / GREEN TECH",
        detail:
          "Climate resilience, water, biodiversity and liveable city solutions.",
        explore:
          "Investigate urban sustainability, climate resilience, water, green technology and biodiversity, and explore how cities can become more sustainable and liveable.",
    },
    zh: {
      title: "可持续城市与气候创新",
      area: "可持续发展 / 气候 / 绿色科技",
        detail: "气候韧性、水资源、生物多样性与宜居城市方案。",
        explore:
          "探索城市可持续发展、气候韧性、水资源、绿色科技及生物多样性，了解如何建设更可持续、更宜居的城市。",
    },
  },
  {
    image: image04,
      en: {
      title: "Industry 4.0 & Future Innovation",
      area: "ADVANCED INDUSTRY / ROBOTICS",
        detail:
          "3D printing, robotics, automation, smart factories and digital making.",
        explore:
          "Experience 3D printing, robotics, automation, smart factories, electric vehicles and digital manufacturing, and examine how technology is transforming industry.",
    },
    zh: {
      title: "工业4.0与未来创新",
      area: "先进制造 / 机器人 / 未来产业",
        detail: "3D 打印、机器人、自动化、智能工厂与数字制造。",
        explore:
          "体验3D打印、机器人、自动化、智能工厂、电动车及数字制造，了解科技如何改变制造业及未来产业。",
    },
  },
  {
    image: image05,
      en: {
      title: "Planetary Science & Earth Systems",
      area: "EARTH / NATURE / ENVIRONMENT",
        detail: "Earth systems, natural history, ecosystems, oceans and climate.",
        explore:
          "Investigate Earth systems, natural history, oceans, ecosystems and climate, and explore how scientific knowledge helps us understand and protect our planet.",
    },
    zh: {
      title: "行星科学与地球系统",
      area: "地球 / 自然 / 环境",
        detail: "地球系统、自然历史、生态系统、海洋与气候。",
        explore:
          "探索地球系统、自然历史、海洋、生态系统及气候，了解科学如何帮助我们认识并保护地球。",
    },
  },
  {
    image: image06,
      en: {
      title: "AI, Digital Innovation & Future Society",
      area: "AI / DIGITAL TECHNOLOGY / INNOVATION",
        detail:
          "Artificial intelligence, machine learning, generative AI and smart systems.",
        explore:
          "Explore Generative AI, machine learning, digital transformation and responsible AI, and discover how intelligent technologies can create new solutions, industries and opportunities.",
    },
    zh: {
      title: "人工智能、数字创新与未来社会",
      area: "人工智能 / 数字科技 / 创新",
        detail: "人工智能、机器学习、生成式 AI 与智慧系统。",
        explore:
          "探索生成式AI、机器学习、数字转型及负责任AI，了解智能科技如何创造新的解决方案、产业及机会。",
    },
  },
];

const learningSteps = [
  {
    en: {
      kicker: "EDUCATE",
      title: "Build understanding",
      detail: "Academic learning · STEM · Future knowledge",
    },
    zh: {
      kicker: "学习 EDUCATE",
      title: "建立科学理解",
      detail: "学术学习 · STEM · 未来知识",
    },
  },
  {
    en: {
      kicker: "EXPERIENCE",
      title: "Apply ideas",
      detail: "Hands-on workshops · Applied learning · Technology",
    },
    zh: {
      kicker: "体验 EXPERIENCE",
      title: "动手应用想法",
      detail: "实践工作坊 · 应用学习 · 科技体验",
    },
  },
  {
    en: {
      kicker: "EXPLORE",
      title: "Connect to Singapore",
      detail: "Research · Innovation · Nature · Industries",
    },
    zh: {
      kicker: "探索 EXPLORE",
      title: "连接真实新加坡",
      detail: "研究 · 创新 · 自然 · 产业",
    },
  },
  {
    en: {
      kicker: "EXCHANGE",
      title: "Learn together",
      detail: "Singapore students · Teamwork · Cross-cultural experiences",
    },
    zh: {
      kicker: "交流 EXCHANGE",
      title: "与伙伴共同成长",
      detail: "新加坡学生 · 团队协作 · 跨文化体验",
    },
  },
];

const journey = [
  {
    day: "01",
    en: {
      theme: "DISCOVER SINGAPORE",
      title: "Arrival & orientation",
      detail: "Chinatown · Merlion Park · Gardens by the Bay",
    },
    zh: {
      theme: "发现新加坡",
      title: "抵达与城市导览",
      detail: "牛车水 · 鱼尾狮公园 · 滨海湾花园",
    },
  },
  {
    day: "02",
    en: {
      theme: "LEARN",
      title: "Explore the theme",
      detail: "Themed learning experience · Scientific investigation",
    },
    zh: {
      theme: "学习主题",
      title: "进入主题现场",
      detail: "主题学习体验 · 科学探究",
    },
  },
  {
    day: "03",
    en: {
      theme: "EXPERIENCE",
      title: "Discover innovation",
      detail: "Applied learning · Technology · Industry",
    },
    zh: {
      theme: "体验创新",
      title: "发现创新实践",
      detail: "应用学习 · 科技 · 产业",
    },
  },
  {
    day: "04",
    en: {
      theme: "EXCHANGE",
      title: "Connect with students",
      detail: "School exchange · STEM activity · Teamwork",
    },
    zh: {
      theme: "交流合作",
      title: "与新加坡学生交流",
      detail: "学校交流 · STEM 活动 · 团队协作",
    },
  },
  {
    day: "05",
    en: {
      theme: "EXPLORE",
      title: "Understand everyday life",
      detail: "HDB · Community exploration · Local student interaction",
    },
    zh: {
      theme: "探索社区",
      title: "理解日常城市生活",
      detail: "组屋 · 社区探索 · 与本地学生互动",
    },
  },
  {
    day: "06",
    en: {
      theme: "CREATE",
      title: "Experience Singapore",
      detail: "Universal Studios Singapore · Team activities · Farewell",
    },
    zh: {
      theme: "创造回忆",
      title: "体验新加坡",
      detail: "新加坡环球影城 · 团队活动 · 告别新加坡",
    },
  },
];

const proofPoints = [
  {
    icon: "01",
    en: {
      title: "School exchange",
      detail:
        "Learn, interact and collaborate with Singapore secondary school students.",
    },
    zh: { title: "学校交流", detail: "与新加坡中学生学习、互动与协作。" },
  },
  {
    icon: "02",
    en: {
      title: "University & applied learning",
      detail:
        "Experience Singapore universities and polytechnics through selected learning.",
    },
    zh: {
      title: "大学与应用学习",
      detail: "通过精选学习体验走进新加坡大学与理工学院。",
    },
  },
  {
    icon: "03",
    en: {
      title: "Industry experiences",
      detail:
        "See real-world applications across technology, manufacturing and science.",
    },
    zh: { title: "产业体验", detail: "了解科技、制造与科学领域的真实应用。" },
  },
  {
    icon: "04",
    en: {
      title: "Innovation challenges",
      detail: "Design thinking, STEM challenges, prototyping and pitching.",
    },
    zh: {
      title: "创新挑战",
      detail: "设计思维、STEM 挑战、原型制作与成果展示。",
    },
  },
  {
    icon: "05",
    en: {
      title: "Themed learning venues",
      detail: "Science, research, technology, space, aviation, industry, AI and environment.",
    },
    zh: {
      title: "主题学习场景",
      detail: "科学 · 科研 · 科技 · 太空 · 航空 · 工业 · AI · 环境。",
    },
  },
  {
    icon: "06",
    en: {
      title: "Community experiences",
      detail: "HDB, neighbourhoods, markets, hawker centres, public transport and community facilities.",
    },
    zh: {
      title: "社区体验",
      detail: "HDB公共住宅 · 社区 · 巴刹 · 熟食中心 · 公共交通 · 社区设施。",
    },
  },
  {
    icon: "07",
    en: {
      title: "Future & career exploration",
      detail: "Connect learning experiences with future study pathways, emerging industries, careers and personal aspirations.",
    },
    zh: {
      title: "未来与职业探索",
      detail: "将学习体验与未来升学方向、新兴产业、职业发展及个人目标连接起来。",
    },
  },
  {
    icon: "08",
    en: {
      title: "Fun experiences",
      detail: "Universal Studios Singapore.",
    },
    zh: { title: "休闲体验", detail: "新加坡环球影城。" },
  },
];
</script>

<style scoped>
.senior-page {
  --navy: #153657;
  --navy-deep: #102f4b;
  --orange: #ed6d32;
  --orange-dark: #c84f1d;
  --ink: #18344c;
  --muted: #5a6c78;
  --mist: #f7f4ef;
  color: var(--ink);
  background: #fff;
  font-family: "DM Sans", Arial, sans-serif;
}
.senior-shell {
  width: min(1180px, calc(100% - 56px));
  margin: 0 auto;
}
.senior-hero {
  position: relative;
  min-height: 650px;
  overflow: hidden;
  color: #fff;
  background: var(--navy-deep);
}
.senior-hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.senior-hero__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(10, 40, 67, 0.94) 0%,
    rgba(10, 40, 67, 0.7) 46%,
    rgba(10, 40, 67, 0.12)
  );
}
.senior-hero__content {
  position: relative;
  z-index: 1;
  min-height: 650px;
  padding: 133px 0 72px;
  box-sizing: border-box;
}
.senior-hero__topline {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 24px;
}
.senior-hero__eyebrow,
.senior-index {
  margin: 0;
  color: var(--orange);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.16em;
}
.senior-hero__meta {
  position: absolute;
  top: 136px;
  right: 0;
  max-width: 300px;
  margin: 0;
  color: #e6f0f4;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-align: right;
}
.senior-hero__copy {
  max-width: 730px;
  margin-top: 77px;
  padding-top: 0;
}
.senior-chip {
  display: inline-block;
  padding: 7px 12px;
  border: 1px solid rgba(255, 255, 255, 0.46);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
}
.senior-hero h1 {
  max-width: 650px;
  margin: 17px 0;
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(50px, 7vw, 92px);
  font-weight: 600;
  line-height: 0.93;
  letter-spacing: 0;
}
.senior-hero h1 em {
  color: #ff9b69;
  font-style: normal;
}
.senior-hero__copy > p {
  margin: 0;
  color: #f4fbfc;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.08em;
}
.senior-hero__copy small {
  display: block;
  margin-top: 17px;
  color: #d7e6f1;
  font-size: 14px;
}
.senior-hero__jump {
  position: absolute;
  right: 0;
  bottom: 72px;
  display: flex;
  align-items: center;
  gap: 9px;
  color: #fff;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 42px;
}
.senior-hero__jump span {
  color: var(--orange);
  font-family: "DM Sans", Arial, sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
}
.senior-hero__jump b {
  display: none;
}
.senior-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  padding-top: 118px;
  padding-bottom: 112px;
}
.senior-intro h2,
.senior-section-heading h2,
.senior-reading h2 {
  max-width: 680px;
  margin: 13px 0 0;
  color: var(--navy);
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0;
}
.senior-intro__copy {
  padding-top: 38px;
}
.senior-intro__copy > p {
  max-width: 420px;
  margin: 0;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.8;
}
.senior-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin-top: 48px;
  background: #d9e3e5;
}
.senior-metrics div {
  min-height: 106px;
  padding: 18px 16px;
  background: #fff;
}
.senior-metrics strong {
  display: block;
  color: var(--orange);
  font-family: "Playfair Display", Georgia, serif;
  font-size: 31px;
  font-weight: 600;
}
.senior-metrics span {
  display: block;
  margin-top: 4px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.senior-themes {
  padding: 96px 0 110px;
  background: var(--mist);
}
.senior-section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 40px;
  margin-bottom: 42px;
}
.senior-section-heading > p {
  max-width: 340px;
  margin: 0 0 6px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.7;
}
.senior-theme-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
.senior-theme-card {
  display: grid;
  grid-template-columns: 42% 1fr;
  overflow: hidden;
  background: #fff;
  border: 1px solid #e7e1da;
  color: inherit;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}
.senior-theme-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 38px rgba(20, 56, 76, 0.13);
}
.senior-theme-card:focus-visible {
  outline: 3px solid var(--orange);
  outline-offset: 4px;
}
.senior-theme-card__image-wrap {
  min-height: 190px;
  overflow: hidden;
  background: #dbe8ea;
}
.senior-theme-card img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.45s ease;
}
.senior-theme-card:hover img {
  transform: scale(1.04);
}
.senior-theme-card__body {
  position: relative;
  min-height: 190px;
  padding: 22px 22px 25px;
}
.senior-theme-card__number {
  position: absolute;
  top: 19px;
  right: 20px;
  color: #d4e1e3;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 31px;
}
.senior-theme-card__body p {
  margin: 0;
  max-width: 76%;
  color: var(--orange);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 1.45;
}
.senior-theme-card h3 {
  max-width: 86%;
  margin: 12px 0 13px;
  color: var(--navy);
  font-size: 19px;
  line-height: 1.28;
}
.senior-theme-card__line {
  display: block;
  width: 34px;
  height: 2px;
  margin-bottom: 13px;
  background: var(--orange);
}
.senior-theme-card small {
  display: block;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.6;
}
.senior-theme-card__area-detail {
  margin-top: 10px;
  color: var(--ink);
  font-size: 13px;
  line-height: 1.6;
}
.senior-reading {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 80px;
  align-items: end;
  padding-top: 116px;
  padding-bottom: 50px;
}
.senior-reading > p {
  max-width: 370px;
  margin: 0 0 4px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.8;
}
@media (max-width: 900px) {
  .senior-theme-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .senior-reading {
    gap: 40px;
  }
}
@media (max-width: 760px) {
  .senior-shell {
    width: min(100% - 34px, 560px);
  }
  .senior-hero,
  .senior-hero__content {
    min-height: 600px;
  }
  .senior-hero__content {
    padding-top: 120px;
  }
  .senior-hero__topline {
    display: block;
  }
  .senior-hero__meta {
    top: 88px;
    right: 0;
    max-width: 160px;
    margin: 0;
    text-align: right;
    line-height: 1.5;
  }
  .senior-hero__copy {
    margin-top: 66px;
  }
  .senior-hero h1 {
    font-size: 50px;
  }
  .senior-hero__copy > p {
    font-size: 12px;
    line-height: 1.6;
  }
  .senior-hero__jump {
    right: 0;
    bottom: 44px;
  }
  .senior-intro,
  .senior-reading {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .senior-intro {
    padding-top: 72px;
    padding-bottom: 72px;
  }
  .senior-intro__copy {
    padding-top: 0;
  }
  .senior-metrics {
    margin-top: 32px;
  }
  .senior-themes {
    padding: 70px 0;
  }
  .senior-section-heading {
    display: block;
    margin-bottom: 30px;
  }
  .senior-section-heading > p {
    margin-top: 18px;
  }
  .senior-theme-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .senior-theme-card {
    grid-template-columns: 1fr;
  }
  .senior-theme-card__image-wrap {
    min-height: 0;
    aspect-ratio: 1.58;
  }
  .senior-theme-card__body {
    min-height: 0;
  }
  .senior-reading {
    padding-top: 72px;
    padding-bottom: 35px;
  }
}

/* Editorial refinements for the programme guide. */
.senior-page {
  --line: #d9e3e5;
  background: #fbfcfb;
}

.senior-hero {
  min-height: 680px;
  isolation: isolate;
}

.senior-hero::after {
  position: absolute;
  inset: auto 0 0;
  z-index: 0;
  height: 34%;
  content: "";
  background: linear-gradient(0deg, rgba(8, 31, 49, 0.44), transparent);
  pointer-events: none;
}

.senior-hero__image {
  filter: saturate(0.86) contrast(1.04);
}
.senior-hero__veil {
  background: linear-gradient(
    90deg,
    rgba(7, 31, 51, 0.95) 0%,
    rgba(10, 40, 67, 0.72) 43%,
    rgba(10, 40, 67, 0.16) 100%
  );
}
.senior-hero__content {
  min-height: 680px;
  padding-top: 145px;
}
.senior-hero__copy {
  max-width: 780px;
  margin-top: 88px;
}
.senior-hero h1 {
  max-width: 760px;
  font-size: clamp(54px, 7.5vw, 104px);
  line-height: 0.91;
}
.senior-hero__copy > p {
  max-width: 560px;
  line-height: 1.6;
}
.senior-hero__jump {
  padding: 10px 0 10px 18px;
  border-left: 1px solid rgba(255, 255, 255, 0.42);
}
.senior-hero__jump b {
  display: inline;
  color: #ff9b69;
  font-family: "DM Sans", Arial, sans-serif;
  font-size: 22px;
  font-weight: 400;
}

.senior-intro {
  position: relative;
  gap: clamp(50px, 8vw, 120px);
  padding-top: 132px;
  padding-bottom: 126px;
}
.senior-intro::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 68px;
  height: 4px;
  content: "";
  background: var(--orange);
}
.senior-intro__heading h2 {
  max-width: 520px;
  font-size: clamp(36px, 4.5vw, 60px);
}
.senior-intro__copy {
  padding-top: 45px;
}
.senior-intro__copy > p {
  max-width: 460px;
  font-size: 18px;
  line-height: 1.75;
}
.senior-metrics {
  margin-top: 52px;
  border: 1px solid var(--line);
  background: var(--line);
}
.senior-metrics div {
  min-height: 118px;
  padding: 22px 19px;
}
.senior-metrics strong {
  font-size: 36px;
}

.senior-themes {
  padding: 112px 0 126px;
  background: #f2f5f3;
}
.senior-section-heading {
  margin-bottom: 52px;
}
.senior-section-heading h2 {
  max-width: 610px;
  font-size: clamp(35px, 4.4vw, 56px);
}
.senior-section-heading > p {
  max-width: 390px;
  font-size: 15px;
  line-height: 1.8;
}
.senior-theme-grid {
  gap: 18px;
}
.senior-theme-card {
  grid-template-columns: 39% 1fr;
  border-color: #dbe4e2;
  box-shadow: 0 5px 18px rgba(25, 61, 71, 0.035);
}
.senior-theme-card__image-wrap {
  min-height: 218px;
}
.senior-theme-card__body {
  min-height: 218px;
  padding: 27px 25px 27px;
}
.senior-theme-card__body p {
  font-size: 10px;
  letter-spacing: 0.12em;
}
.senior-theme-card h3 {
  margin-top: 15px;
  font-size: 21px;
  line-height: 1.23;
}
.senior-theme-card small {
  font-size: 13.5px;
  line-height: 1.65;
}
.senior-theme-card__number {
  top: 22px;
  right: 23px;
  font-size: 35px;
}

.senior-reading {
  position: relative;
  padding-top: 132px;
  padding-bottom: 58px;
}
.senior-reading::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 68px;
  height: 4px;
  content: "";
  background: var(--orange);
}
.senior-reading h2 {
  font-size: clamp(35px, 4.4vw, 56px);
}
.senior-reading > p {
  max-width: 410px;
  font-size: 16px;
  line-height: 1.85;
}

@media (max-width: 760px) {
  .senior-hero,
  .senior-hero__content {
    min-height: 620px;
  }
  .senior-hero__content {
    padding-top: 120px;
  }
  .senior-hero__copy {
    margin-top: 71px;
  }
  .senior-hero h1 {
    font-size: 52px;
    line-height: 0.96;
  }
  .senior-hero__jump {
    padding-left: 12px;
    font-size: 34px;
  }
  .senior-intro {
    padding-top: 88px;
    padding-bottom: 86px;
  }
  .senior-intro__copy {
    padding-top: 0;
  }
  .senior-intro__copy > p {
    font-size: 16px;
  }
  .senior-metrics {
    margin-top: 34px;
  }
  .senior-metrics div {
    min-height: 102px;
    padding: 17px 13px;
  }
  .senior-metrics strong {
    font-size: 29px;
  }
  .senior-metrics span {
    font-size: 10px;
    line-height: 1.35;
  }
  .senior-themes {
    padding: 82px 0 88px;
  }
  .senior-section-heading {
    margin-bottom: 34px;
  }
  .senior-section-heading h2 {
    font-size: 37px;
  }
  .senior-theme-card {
    box-shadow: 0 5px 16px rgba(25, 61, 71, 0.05);
  }
  .senior-theme-card__image-wrap {
    aspect-ratio: 1.7;
  }
  .senior-theme-card__body {
    padding: 22px 20px 24px;
  }
  .senior-theme-card h3 {
    font-size: 20px;
  }
  .senior-reading {
    padding-top: 90px;
    padding-bottom: 39px;
  }
  .senior-reading h2 {
    font-size: 37px;
  }
}

/* Structured showcase layers */
.senior-framework {
  padding: 116px 0 126px;
}
.senior-section-heading--compact {
  margin-bottom: 50px;
}
.senior-pipeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid var(--line);
  background: #fff;
}
.senior-pipeline__step {
  position: relative;
  min-height: 238px;
  padding: 27px 24px 24px;
  border-right: 1px solid var(--line);
}
.senior-pipeline__step:last-child {
  border-right: 0;
}
.senior-pipeline__step::after {
  position: absolute;
  top: 45px;
  right: -7px;
  z-index: 2;
  width: 12px;
  height: 12px;
  border: 3px solid #fff;
  border-radius: 50%;
  content: "";
  background: var(--orange);
}
.senior-pipeline__step:last-child::after {
  display: none;
}
.senior-pipeline__marker {
  color: var(--orange);
  font-family: "Playfair Display", Georgia, serif;
  font-size: 35px;
}
.senior-pipeline__step p,
.senior-proof__item h3 {
  margin: 17px 0 9px;
  color: var(--navy);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.senior-pipeline__step h3 {
  max-width: 170px;
  margin: 0 0 12px;
  color: var(--navy);
  font-size: 22px;
  line-height: 1.15;
}
.senior-pipeline__step span,
.senior-proof__item p {
  display: block;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.65;
}
.senior-journey {
  padding: 112px 0 120px;
  color: #fff;
  background: var(--navy-deep);
}
.senior-section-heading--light h2 {
  color: #fff;
}
.senior-section-heading--light > p {
  color: #b8cdd6;
}
.senior-timeline {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin-top: 52px;
  background: rgba(255, 255, 255, 0.19);
}
.senior-timeline__item {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 17px;
  min-height: 162px;
  padding: 24px 20px;
  background: #143b59;
}
.senior-timeline__day {
  color: #ff9b69;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.1em;
}
.senior-timeline__item p {
  margin: 0 0 8px;
  color: #ff9b69;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
}
.senior-timeline__item h3 {
  margin: 0 0 11px;
  color: #fff;
  font-size: 19px;
  line-height: 1.25;
}
.senior-timeline__item span {
  color: #b8cdd6;
  font-size: 12px;
  line-height: 1.55;
}
.senior-proof {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 90px;
  padding-top: 124px;
  padding-bottom: 126px;
}
.senior-proof__lead h2 {
  max-width: 510px;
  margin: 15px 0 20px;
  color: var(--navy);
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(35px, 4vw, 54px);
  line-height: 1.08;
}
.senior-proof__lead > p:not(.senior-index) {
  max-width: 430px;
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.8;
}
.senior-proof__link {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  margin-top: 28px;
  color: var(--orange-dark);
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
}
.senior-proof__link span {
  font-size: 20px;
}
.senior-proof__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  align-self: center;
  background: var(--line);
}
.senior-proof__item {
  min-height: 174px;
  padding: 25px 23px;
  background: #f6f8f7;
}
.senior-proof__icon {
  display: inline-grid;
  place-items: center;
  width: 29px;
  height: 29px;
  color: #fff;
  background: var(--orange);
  font-size: 10px;
  font-weight: 800;
}
.senior-proof__item h3 {
  margin-top: 18px;
  letter-spacing: 0;
  text-transform: none;
}
.senior-proof__item p {
  margin: 0;
}
.senior-programmes {
  border-top: 1px solid var(--line);
  background: #edf2f0;
}
.senior-programme {
  padding: 108px 0 116px;
  border-bottom: 1px solid #d4dfdc;
  scroll-margin-top: 96px;
}
.senior-programme:nth-child(even) {
  background: #f8faf8;
}
.senior-programme__header {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr) auto;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  padding-bottom: 34px;
  border-bottom: 1px solid var(--line);
}
.senior-programme__image {
  width: 220px;
  aspect-ratio: 1.18;
  display: block;
  object-fit: cover;
}
.senior-programme__series {
  margin: 14px 0 8px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
}
.senior-programme h2 {
  max-width: 820px;
  margin: 0;
  color: var(--navy);
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(32px, 4vw, 58px);
  line-height: 1.05;
}
.senior-programme__strap {
  margin: 14px 0 0;
  color: var(--orange-dark);
  font-size: 14px;
  font-weight: 700;
}
.senior-programme__badge {
  flex: none;
  padding: 10px 13px;
  color: #fff;
  background: var(--navy);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.1em;
}
.senior-programme__lead {
  max-width: 760px;
  margin: 30px 0 48px;
  color: var(--ink);
  font-size: 21px;
  font-weight: 700;
  line-height: 1.45;
}
.senior-programme__context {
  max-width: 840px;
  margin: -24px 0 48px;
  color: var(--muted);
  line-height: 1.75;
}
.senior-programme__columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.senior-programme__columns > section {
  padding: 28px 28px 30px;
  background: #fff;
  border: 1px solid var(--line);
}
.senior-programme__experiences,
.senior-programme__environments {
  display: grid;
  gap: 19px;
  margin-top: 24px;
}
.senior-programme__experiences > div,
.senior-programme__environments > div {
  display: grid;
  gap: 5px;
}
.senior-programme__experiences strong,
.senior-programme__environments strong {
  color: var(--navy);
  font-size: 14px;
}
.senior-programme__experiences span,
.senior-programme__environments span {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.65;
}
.senior-programme__journey {
  margin-top: 24px;
  padding: 31px 28px 0;
  background: var(--navy-deep);
}
.senior-programme__journey-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 30px;
}
.senior-programme__journey-heading .senior-index {
  margin-bottom: 9px;
}
.senior-programme__journey h3 {
  margin: 0;
  color: #fff;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 31px;
  font-weight: 600;
}
.senior-programme__days {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin-top: 27px;
  background: rgba(255, 255, 255, 0.18);
}
.senior-programme__days > div {
  min-height: 155px;
  padding: 19px 18px 22px;
  background: #143b59;
}
.senior-programme__days span {
  display: block;
  color: #ff9b69;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
}
.senior-programme__days strong {
  display: block;
  margin: 13px 0 8px;
  color: #fff;
  font-size: 16px;
  line-height: 1.3;
}
.senior-programme__days p {
  margin: 0;
  color: #b8cdd6;
  font-size: 12px;
  line-height: 1.6;
}
.senior-programme__footer {
  padding: 28px 0 0;
  color: var(--orange-dark);
  font-size: 14px;
  font-weight: 800;
}
@media (max-width: 900px) {
  .senior-pipeline {
    grid-template-columns: repeat(2, 1fr);
  }
  .senior-pipeline__step:nth-child(2) {
    border-right: 0;
  }
  .senior-pipeline__step:nth-child(-n + 2) {
    border-bottom: 1px solid var(--line);
  }
  .senior-pipeline__step:nth-child(2)::after,
  .senior-pipeline__step:nth-child(4)::after {
    display: none;
  }
  .senior-timeline {
    grid-template-columns: repeat(2, 1fr);
  }
  .senior-proof {
    gap: 45px;
  }
  .senior-programme__days {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 760px) {
  .senior-framework {
    padding: 84px 0 90px;
  }
  .senior-pipeline,
  .senior-timeline,
  .senior-proof {
    grid-template-columns: 1fr;
  }
  .senior-pipeline__step {
    min-height: 0;
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }
  .senior-pipeline__step:last-child {
    border-bottom: 0;
  }
  .senior-pipeline__step::after {
    top: auto;
    right: auto;
    bottom: -7px;
    left: 29px;
  }
  .senior-pipeline__step:nth-child(2)::after,
  .senior-pipeline__step:nth-child(4)::after {
    display: block;
  }
  .senior-pipeline__step:last-child::after {
    display: none;
  }
  .senior-journey {
    padding: 84px 0 90px;
  }
  .senior-timeline {
    margin-top: 35px;
  }
  .senior-proof {
    gap: 48px;
    padding-top: 88px;
    padding-bottom: 90px;
  }
  .senior-proof__grid {
    grid-template-columns: 1fr;
  }
  .senior-programme {
    padding: 78px 0 84px;
  }
  .senior-programme__header,
  .senior-programme__journey-heading {
    display: block;
  }
  .senior-programme__image {
    width: 100%;
    aspect-ratio: 1.7;
    margin-bottom: 25px;
  }
  .senior-programme__badge {
    display: inline-block;
    margin-top: 20px;
  }
  .senior-programme__lead {
    margin: 25px 0 34px;
    font-size: 18px;
  }
  .senior-programme__columns,
  .senior-programme__days {
    grid-template-columns: 1fr;
  }
  .senior-programme__columns > section,
  .senior-programme__journey {
    padding-left: 20px;
    padding-right: 20px;
  }
  .senior-programme__journey h3 {
    font-size: 27px;
  }
}
</style>
