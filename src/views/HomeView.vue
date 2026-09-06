<template>
  <div>
    <section class="hero hero-home">
      <div class="hero-media"></div>
      <div class="site-shell hero-content">
        <span class="eyebrow">APIMTC DIGITAL ART · 2026</span>
        <h1>Art that<br />lives online.</h1>
        <p>
          {{
            tx(
              "A curated NFT gallery for collectors, artists and curious minds.",
              "为收藏家、艺术家与好奇者打造的精选 NFT 数字画廊。",
            )
          }}
        </p>
        <div class="actions">
          <router-link class="button button-light" to="/mobility">{{
            tx("Explore collection", "探索藏品")
          }}</router-link
          ><router-link class="button button-outline" to="/contact">{{
            tx("Become a collector", "成为收藏家")
          }}</router-link>
        </div>
      </div>
    </section>
    <section class="section intro-band">
      <div class="site-shell split">
        <div>
          <span class="eyebrow">CURATED / 01</span>
          <h2>
            {{
              tx(
                "A slower way to discover digital art.",
                "以更从容的方式，发现数字艺术。",
              )
            }}
          </h2>
        </div>
        <p>
          {{
            tx(
              "We bring together artists working across generative systems, moving image and digital sculpture. Every drop is small, considered and made to be lived with.",
              "我们汇聚生成艺术、动态影像与数字雕塑创作者。每次发布都克制、精选，并值得长期欣赏。",
            )
          }}
        </p>
      </div>
    </section>
    <section class="section">
      <div class="site-shell">
        <div class="section-heading">
          <span class="eyebrow">FEATURED WORKS</span>
          <h2>{{ tx("The current exhibition.", "正在展出的作品。") }}</h2>
        </div>
        <div class="feature-grid">
          <router-link
            v-for="item in features"
            :key="item.to"
            class="feature-card"
            :to="item.to"
            ><div
              class="feature-image"
              :style="{ backgroundImage: `url(${item.image})` }"
            ></div>
            <div class="feature-copy">
              <span class="card-kicker">{{ item.kicker }}</span>
              <h3>{{ tx(item.en, item.zh) }}</h3>
              <p>{{ tx(item.descEn, item.descZh) }}</p>
              <span class="text-link">{{
                tx("View work →", "查看作品 →")
              }}</span>
            </div></router-link
          >
        </div>
      </div>
    </section>
    <section class="section dark-section">
      <div class="site-shell platform">
        <div>
          <span class="eyebrow">THE GALLERY</span>
          <h2>
            {{tx('One gallery.<br />Many points of view.','一个画廊。多种观看方式。')}}
          </h2>
        </div>
        <div class="platform-steps">
          <div>
            <strong>01</strong><b>{{ tx("Collect", "收藏") }}</b
            ><span>{{
              tx("Own a piece of the story", "拥有故事的一部分")
            }}</span>
          </div>
          <div>
            <strong>02</strong><b>{{ tx("Meet artists", "认识艺术家") }}</b
            ><span>{{ tx("Follow the process", "追踪创作过程") }}</span>
          </div>
          <div>
            <strong>03</strong><b>{{ tx("Join drops", "参与发行") }}</b
            ><span>{{
              tx("Exhibitions, live and online", "线上线下展览")
            }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="section cta-band">
      <div class="site-shell split">
        <h2>
          {{ tx("The next piece could be yours.", "下一件作品，或许属于你。") }}
        </h2>
        <router-link class="button button-dark" to="/contact">{{
          tx("Enter the mint room", "进入铸造空间")
        }}</router-link>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "@/composables/useI18n";
const { lang } = useI18n();
const tx = (en: string, zh: string) => (lang.value === "en" ? en : zh);
const features = [
  {
    to: "/mobility",
    kicker: "SERIES 01 · 1/12",
    en: "Soft Geometry",
    zh: "柔性几何",
    descEn: "A study in light, rhythm and imperfect symmetry.",
    descZh: "关于光线、节奏与不完美对称的研究。",
    image: "/images/gaotie.webp",
  },
  {
    to: "/mice-business",
    kicker: "SERIES 02 · 1/08",
    en: "Transit / Memory",
    zh: "迁徙与记忆",
    descEn: "Moving through places that refuse to stay still.",
    descZh: "穿行于拒绝静止的地点之间。",
    image: "/images/enterprise_img01.webp",
  },
  {
    to: "/partnerships",
    kicker: "SERIES 03 · 1/05",
    en: "Common Ground",
    zh: "共同之地",
    descEn: "Where culture, code and human hands meet.",
    descZh: "文化、代码与人的双手相遇之处。",
    image: "/images/partnerLogo3.webp",
  },
];
</script>
