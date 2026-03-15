$(document).ready(function() {
    // 1. Parse URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const activityId = urlParams.get('id');
    const container = $('#activity-detail-container');

    // 2. Fetch data from API
    if (activityId) {
        // We fetch the list and find the corresponding activity, 
        // since the list data contains the full content as per the user's description.
        // Alternatively, if there is a detail endpoint, it could be used. 
        // Here we use fetchActivityList to get the data.
        fetchActivityList(1, 100, '近期活动')
            .then(data => {
                if (data && data.rows) {
                    const activity = data.rows.find(item => item.id == activityId);
                    if (activity) {
                        renderActivity(activity);
                    } else {
                        renderError();
                    }
                } else {
                    renderError();
                }
            })
            .catch(error => {
                console.error('获取详情失败:', error);
                renderError();
            });
    } else {
        renderError();
    }

    function renderActivity(activity) {
        // Format date from "2026-03-15" or "2026-03-15 11:36:05" to "2026年 5月 20日" format
        let formattedDate = activity.dateTime;
        if (formattedDate) {
            const d = new Date(formattedDate);
            if (!isNaN(d.getTime())) {
                formattedDate = `${d.getFullYear()}年 ${d.getMonth() + 1}月 ${d.getDate()}日`;
            }
        } else {
            formattedDate = '';
        }

        // Format image url
        let imageUrl = activity.coverImage || '';
        if (imageUrl && !imageUrl.startsWith('http')) {
            imageUrl = baseUrl + (imageUrl.startsWith('/dev-api') ? '' : '/dev-api') + imageUrl;
        }

        // Update Page Title
        document.title = `${activity.titleZh} - WanderChina.Guide`;

        // Render HTML
        // The contentZh from the API already contains the HTML for Activity Review and Highlights.
        // So we can just use activity.contentZh.
        
        let richTextHtml = activity.contentZh || activity.contentEn || '';
        // Replace relative image and video paths in rich text with absolute URLs using baseUrl
        richTextHtml = richTextHtml.replace(/src="(\/dev-api\/[^"]+)"/g, 'src="' + baseUrl + '$1"');
        richTextHtml = richTextHtml.replace(/src="(\/profile\/[^"]+)"/g, 'src="' + baseUrl + '/dev-api$1"');

        const html = `
            <!-- Hero Section -->
            <section class="detail-banner" style="background-image: url('${imageUrl}');">
                <div class="container banner-content">
                    <div class="activity-meta">
                        <div class="meta-item"><i class="fas fa-calendar-alt"></i> ${formattedDate}</div>
                    </div>
                    <h1 class="detail-title">${activity.titleZh}</h1>
                </div>
            </section>

            <!-- Main Content -->
            <section class="detail-content">
                <div class="container">
                    <div class="content-grid">
                        <!-- Left Column -->
                        <div class="left-col">
                            <div class="section-box">
                                <div class="text-content api-rich-text">${richTextHtml}</div>
                            </div>
                        </div>

                        <!-- Right Column (Sidebar) -->
                        <div class="right-col">
                            <div class="sidebar-card">
                                <div class="info-item">
                                    <span class="info-label lang-text" data-key="activity_date">活动日期</span>
                                    <span class="info-value">${formattedDate}</span>
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
                <a href="activities.html" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background: #215198; color: #fff; border-radius: 5px;">返回活动列表</a>
            </div>
        `);
    }
});
