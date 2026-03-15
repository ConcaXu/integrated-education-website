# Project Skills Configuration

This project utilizes a specialized collection of AI agent skills located in `.agent/skills/`.
These skills provide authoritative guidance on code style, best practices, and framework-specific patterns.

## 🧠 Skill Usage Protocol

1.  **Context-Aware Activation**: You MUST check the relevant `SKILL.md` when your task involves specific technologies or patterns listed below.
2.  **Source of Truth**: The patterns defined in these skills (e.g., `shallowRef` preference, `script setup` syntax) override general knowledge.
3.  **Cross-Reference**: Complex tasks often require multiple skills (e.g., a new feature might need `Vue`, `Pinia`, and `UnoCSS` skills simultaneously).

---

## 📚 Skill Index

### 🟢 Core Frameworks

| Skill      | Description                                                       | Triggers / Keywords                                                   | Path                                      |
| ---------- | ----------------------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------- |
| **Vue**    | Vue 3 Composition API, script setup macros, reactivity system.    | `vue`, `component`, `ref`, `reactive`, `watch`, `computed`, `sfc`     | `.agent/skills/vue/SKILL.md`              |
| **Nuxt**   | Nuxt full-stack framework, SSR, auto-imports, file-based routing. | `nuxt`, `ssr`, `server route`, `middleware`, `useFetch`, `app.config` | `.agent/skills/nuxt/SKILL.md`             |
| **VueUse** | Collection of essential Vue Composition Utilities.                | `vueuse`, `useStorage`, `useMouse`, `useDark`, `composables`          | `.agent/skills/vueuse-functions/SKILL.md` |

### 🔵 State & Routing

| Skill          | Description                                      | Triggers / Keywords                                          | Path                                               |
| -------------- | ------------------------------------------------ | ------------------------------------------------------------ | -------------------------------------------------- |
| **Pinia**      | Official Vue state management, type-safe stores. | `pinia`, `store`, `state`, `action`, `getter`, `defineStore` | `.agent/skills/pinia/SKILL.md`                     |
| **Vue Router** | Routing for Vue.js applications.                 | `router`, `route`, `navigation`, `guard`, `params`, `query`  | `.agent/skills/vue-router-best-practices/SKILL.md` |

### 🟠 Build & Tooling

| Skill            | Description                                      | Triggers / Keywords                                      | Path                               |
| ---------------- | ------------------------------------------------ | -------------------------------------------------------- | ---------------------------------- |
| **Vite**         | Vite build tool configuration, plugins, and SSR. | `vite`, `build`, `config`, `plugin`, `hmr`, `bundle`     | `.agent/skills/vite/SKILL.md`      |
| **PNPM**         | Fast, disk space efficient package manager.      | `pnpm`, `dependency`, `workspace`, `monorepo`, `install` | `.agent/skills/pnpm/SKILL.md`      |
| **Turborepo**    | High-performance build system for monorepos.     | `turbo`, `monorepo`, `cache`, `pipeline`, `workspace`    | `.agent/skills/turborepo/SKILL.md` |
| **Antfu Config** | Anthony Fu's opinionated tooling (ESLint, etc).  | `eslint`, `lint`, `prettier`, `config`, `style guide`    | `.agent/skills/antfu/SKILL.md`     |

### 🟣 UI & Design

| Skill          | Description                                   | Triggers / Keywords                                             | Path                                           |
| -------------- | --------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------- |
| **UnoCSS**     | Instant on-demand atomic CSS engine.          | `unocss`, `tailwind`, `css`, `style`, `utility class`, `preset` | `.agent/skills/unocss/SKILL.md`                |
| **Web Design** | Guidelines for building beautiful interfaces. | `design`, `ui`, `ux`, `layout`, `color`, `typography`           | `.agent/skills/web-design-guidelines/SKILL.md` |
| **Slidev**     | Presentation slides for developers.           | `slidev`, `presentation`, `slides`, `markdown`                  | `.agent/skills/slidev/SKILL.md`                |

### 🔴 Testing & Documentation

| Skill           | Description                                | Triggers / Keywords                                     | Path                                                |
| --------------- | ------------------------------------------ | ------------------------------------------------------- | --------------------------------------------------- |
| **Vitest**      | Blazing fast unit test framework.          | `test`, `spec`, `vitest`, `expect`, `mock`, `assertion` | `.agent/skills/vitest/SKILL.md`                     |
| **Vue Testing** | Best practices for testing Vue components. | `mount`, `wrapper`, `find`, `trigger`, `component test` | `.agent/skills/vue-testing-best-practices/SKILL.md` |
| **VitePress**   | Static site generator powered by Vite.     | `vitepress`, `docs`, `documentation`, `markdown`        | `.agent/skills/vitepress/SKILL.md`                  |

### ✨ Best Practices (High Priority)

| Skill                  | Description                                                                 | Triggers / Keywords                                               | Path                                        |
| ---------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------- |
| **Vue Best Practices** | **CRITICAL**: Common gotchas, perf optimization, Composition API standards. | `ref vs reactive`, `performance`, `optimization`, `best practice` | `.agent/skills/vue-best-practices/SKILL.md` |
