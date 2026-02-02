$(document).ready(function() {
    // 1. Parse URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const activityId = urlParams.get('id');
    const container = $('#activity-detail-container');

    // 2. Check if activity exists
    if (activityId && activitiesData[activityId]) {
        const activity = activitiesData[activityId];
        renderActivity(activity);
    } else {
        renderError();
    }

    function renderActivity(activity) {
        // Update Page Title
        document.title = `${activity.title} - WanderChina.Guide`;

        // Render HTML
        let highlightsHtml = '';
        if (activity.highlights && activity.highlights.length > 0) {
            highlightsHtml = `<ul class="highlights-list">
                ${activity.highlights.map(item => `<li><i class="fas fa-check-circle"></i> <span>${item}</span></li>`).join('')}
            </ul>`;
        }

        const html = `
            <!-- Hero Section -->
            <section class="detail-banner" style="background-image: url('${activity.image}');">
                <div class="container banner-content">
                    <div class="activity-meta">
                        <div class="meta-item"><i class="fas fa-calendar-alt"></i> ${activity.date}</div>
                    </div>
                    <h1 class="detail-title">${activity.title}</h1>
                </div>
            </section>

            <!-- Main Content -->
            <section class="detail-content">
                <div class="container">
                    <div class="content-grid">
                        <!-- Left Column -->
                        <div class="left-col">
                            <div class="section-box">
                                <h3 class="section-title lang-text" data-key="activity_recap">活动回顾</h3>
                                <div class="text-content">${activity.content}</div>
                            </div>

                            <div class="section-box">
                                <h3 class="section-title lang-text" data-key="activity_highlights">精彩亮点</h3>
                                ${highlightsHtml}
                            </div>
                        </div>

                        <!-- Right Column (Sidebar) -->
                        <div class="right-col">
                            <div class="sidebar-card">
                                <div class="info-item">
                                    <span class="info-label lang-text" data-key="activity_date">活动日期</span>
                                    <span class="info-value">${activity.date}</span>
                                </div>
                                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;">
                                <a href="about.html#contact" class="contact-consult lang-text" data-key="contact_us"><i class="fas fa-envelope"></i> 联系我们</a>
                                
                                <div style="margin-top: 20px; font-size: 0.9rem; color: #666;">
                                    <p style="margin-bottom: 10px;" class="lang-text" data-key="contact_desc">想要了解更多活动信息？或者定制您的专属行程？欢迎随时联系我们。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        container.html(html);
    }

    function renderError() {
        container.html(`
            <div style="padding: 100px 0; text-align: center;">
                <h2>未找到相关活动</h2>
                <p>抱歉，您访问的活动页面不存在或已被移除。</p>
                <a href="activities.html" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background: #d43030; color: #fff; border-radius: 5px;">返回活动列表</a>
            </div>
        `);
    }
});
