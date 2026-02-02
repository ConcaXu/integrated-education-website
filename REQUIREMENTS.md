# Integrated Education & Business Group (WanderChina.Guide) 官方网站需求文档

## 1. 项目概述
**项目名称**：Integrated Education & Business Group 官方网站 (WanderChina.Guide)
**项目性质**：静态响应式企业官网
**核心目标**：
1. 展示集团三大核心业务：研学出行、政企出海、文化旅游。
2. 为全球用户（特别是英语国家用户）提供中国旅游、研学及商务考察的一站式信息服务。
3. 通过多语言支持（中文/英文）消除信息差，传播中国文化。

## 2. 目标用户画像
*   **海外青少年/学生家长**：寻找高质量的中国研学、冬夏令营机会（如新加坡学生访华）。
*   **政府/企业客户**：寻求中国市场考察、产业园区对接、商务合作机会的海外机构。
*   **自由行游客**：对中国文化感兴趣，利用144小时过境免签政策进行短期旅行的国际游客。

## 3. 功能需求详情

### 3.1 全局功能
*   **响应式布局**：兼容 PC、平板、手机端访问。
*   **多语言切换**：
    *   支持 简体中文 (zh-CN) 和 英语 (en) 实时切换。
    *   切换时更新页面所有文本内容、HTML `lang` 属性及部分元素属性（如 placeholder）。
    *   默认语言可配置（当前默认为 zh-CN）。
*   **导航栏 (Header)**：
    *   包含 Logo 展示。
    *   菜单项：首页、产品目录（下拉菜单：研学、政企、文旅）、近期活动、关于我们。
    *   语言切换按钮。
    *   移动端汉堡菜单（支持展开/收起）。
    *   滚动吸顶效果（背景色变化）。
*   **页脚 (Footer)**：
    *   品牌简介。
    *   社交媒体链接（X/Twitter, Email, YouTube, TikTok）。
    *   快速链接（核心业务、公司信息、语言选择）。
    *   版权信息。

### 3.2 首页 (index.html)
*   **Hero 区域**：
    *   全屏背景视频播放（自动播放、静音、循环）。
    *   覆盖层标题与副标题。
    *   目的地搜索框（目前为前端交互演示，无后端搜索逻辑）。
*   **核心业务展示**：
    *   卡片式展示三大业务板块（研学出行、政企出海、文化旅游）。
    *   每个卡片包含背景图、标题、描述及“了解更多”跳转链接。
*   **政策解读 (JS动态渲染)**：
    *   介绍144小时过境免签政策。
    *   关键数据展示（54国、144小时、24口岸等）。
*   **热门城市推荐 (JS动态渲染)**：
    *   展示热门旅游城市（海口、福州、哈尔滨等）。
*   **漫游指南 (JS动态渲染)**：
    *   提供实用旅行攻略（早餐、节日、长城、高铁、支付等）。
*   **常见问题 (FAQ) (JS动态渲染)**：
    *   手风琴折叠交互，展示关于免签、支付、插座、社交媒体等常见问题。

### 3.3 产品目录页 (products.html)
*   **分类展示**：
    *   按业务线锚点定位：`#study-tour` (研学), `#business` (政企), `#culture` (文旅)。
*   **产品列表**：
    *   按地区/子类分组（如“新加坡”、“中国·北京”）。
    *   产品卡片：封面图、标题、简短描述、详情页跳转链接。
    *   **数据来源**：静态 HTML 结构，图片引用外部 Unsplash 资源。

### 3.4 产品详情页 (product-detail.html)
*   **动态渲染**：
    *   通过 URL 参数 `?id=xxx` 识别产品。
    *   读取 `js/products-data.js` 中的数据进行页面内容填充。
*   **内容板块**：
    *   **顶部 Banner**：全宽背景图、产品标题、副标题、关键标签（时长、地点）。
    *   **详情内容**：
        *   产品介绍文本。
        *   产品亮点 (Highlights)：列表形式展示。
        *   行程安排 (Itinerary)：时间轴样式展示每日行程。
    *   **侧边栏**：
        *   价格展示。
        *   咨询按钮（Contact Us）。
*   **数据模型** (见 4.1)。

### 3.5 近期活动页 (activities.html)
*   **活动列表**：
    *   卡片式展示过往或即将到来的活动。
    *   包含：活动图片、日期、标题、摘要、“阅读更多”按钮。
    *   跳转至 `activity-detail.html?id=xxx`。

### 3.6 活动详情页 (activity-detail.html)
*   **动态渲染**：
    *   通过 URL 参数 `?id=xxx` 识别活动。
    *   读取 `js/activities-data.js` 中的数据。
*   **内容板块**：
    *   顶部 Banner。
    *   活动元数据（日期、标签）。
    *   **富文本内容**：支持 HTML 格式的文章内容（多段落）。
    *   活动亮点总结。
*   **数据模型** (见 4.2)。

### 3.7 关于我们 (about.html)
*   **企业简介**：介绍 WanderChina.Guide 及所属集团背景。
*   **价值观/使命**：展示连接世界、探索可能的愿景。
*   **视频/图片展示**：增强品牌形象。

## 4. 数据结构与逻辑

### 4.1 产品数据 (products-data.js)
采用 JSON 对象存储，Key 为产品 ID。字段包括：
*   `id`: 唯一标识符 (String)
*   `title`: 产品标题 (String)
*   `subtitle`: 副标题 (String)
*   `image`: 封面图 URL (String)
*   `category`: 分类 (String)
*   `duration`: 时长 (String, 如 "7天6晚")
*   `location`: 地点 (String)
*   `description`: 详细描述 (String)
*   `highlights`: 亮点列表 (Array of Strings)
*   `itinerary`: 行程列表 (Array of Objects: `{day, title, desc}`)
*   `price`: 价格字符串 (String)

### 4.2 活动数据 (activities-data.js)
采用 JSON 对象存储，Key 为活动 ID。字段包括：
*   `id`: 唯一标识符 (String)
*   `title`: 活动标题 (String)
*   `date`: 活动日期 (String)
*   `image`: 封面图 URL (String)
*   `description`: 列表页摘要 (String)
*   `content`: 详情页富文本内容 (String, HTML)
*   `highlights`: 亮点列表 (Array of Strings)

### 4.3 多语言字典 (main.js -> translations)
*   结构：`{'zh-CN': { key: value }, 'en': { key: value }}`
*   覆盖范围：导航、Hero 文本、静态部分的标题与描述、JS 动态渲染的内容（FAQ, Guides, Policies）。
*   *注意：目前 `products-data.js` 和 `activities-data.js` 内的内容尚未完全实现多语言分离，主要以中文为主，这是后续优化的重点。*

## 5. 非功能性需求
*   **性能**：
    *   页面加载速度快（静态资源为主）。
    *   图片需进行适当压缩或使用 CDN（目前使用 Unsplash）。
*   **兼容性**：
    *   主流浏览器（Chrome, Safari, Firefox, Edge）。
    *   移动端适配良好。
*   **扩展性**：
    *   数据与视图分离（详情页模式），方便未来新增产品/活动只需更新 JS 数据文件。
*   **SEO**：
    *   每个页面需包含基础的 Meta Title 和 Description。
    *   语义化 HTML 标签使用 (header, nav, section, article, footer)。

## 6. 后续优化建议 (Todo)
1.  **数据层多语言化**：将 `products-data.js` 和 `activities-data.js` 改造为支持多语言结构，根据当前语言加载对应内容。
2.  **搜索功能实现**：前端搜索过滤产品列表。
3.  **表单交互**：增加真实的“联系我们”表单提交功能（对接后端或邮件服务）。
4.  **地图集成**：在产品详情页集成地图展示行程路线。
