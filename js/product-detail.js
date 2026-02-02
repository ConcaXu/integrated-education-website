$(document).ready(function() {
    // 1. Parse URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const container = $('#product-detail-container');

    // 2. Check if product exists
    if (productId && productsData[productId]) {
        const product = productsData[productId];
        renderProduct(product);
    } else {
        renderError();
    }

    function renderProduct(product) {
        // Update Page Title
        document.title = `${product.title} - WanderChina.Guide`;

        // Render HTML
        let highlightsHtml = '';
        if (product.highlights && product.highlights.length > 0) {
            highlightsHtml = `<ul class="highlights-list">
                ${product.highlights.map(item => `<li><i class="fas fa-check-circle"></i> <span>${item}</span></li>`).join('')}
            </ul>`;
        }

        let itineraryHtml = '';
        if (product.itinerary && product.itinerary.length > 0) {
            itineraryHtml = `<div class="itinerary-timeline">
                ${product.itinerary.map(item => `
                    <div class="timeline-item">
                        <span class="day-tag">${item.day}</span>
                        <h4 class="day-title">${item.title}</h4>
                        <p class="day-desc">${item.desc}</p>
                    </div>
                `).join('')}
            </div>`;
        }

        const html = `
            <!-- Hero Section -->
            <section class="detail-banner" style="background-image: url('${product.image}');">
                <div class="container banner-content">
                    <div class="product-meta">
                        <div class="meta-item"><i class="fas fa-map-marker-alt"></i> ${product.location}</div>
                        <div class="meta-item"><i class="fas fa-clock"></i> ${product.duration}</div>
                        <div class="meta-item"><i class="fas fa-tag"></i> ${product.category}</div>
                    </div>
                    <h1 class="detail-title">${product.title}</h1>
                    <p class="detail-subtitle">${product.subtitle}</p>
                </div>
            </section>

            <!-- Main Content -->
            <section class="detail-content">
                <div class="container">
                    <div class="content-grid">
                        <!-- Left Column -->
                        <div class="left-col">
                            <div class="section-box">
                                <h3 class="section-title">项目概况</h3>
                                <p class="text-content">${product.description}</p>
                            </div>

                            <div class="section-box">
                                <h3 class="section-title">项目亮点</h3>
                                ${highlightsHtml}
                            </div>

                            <div class="section-box">
                                <h3 class="section-title">行程安排</h3>
                                ${itineraryHtml}
                            </div>
                        </div>

                        <!-- Right Column (Sidebar) -->
                        <div class="right-col">
                            <div class="sidebar-card">
                                <div style="margin-bottom: 20px; text-align: center;">
                                    <h4 style="font-size: 1.2rem; color: #333; margin-bottom: 10px;">感兴趣这个项目？</h4>
                                    <p style="font-size: 0.9rem; color: #666;">立即咨询，定制您的专属行程</p>
                                </div>
                                <a href="about.html#contact" class="contact-consult"><i class="fas fa-comment-alt"></i> 立即咨询</a>
                                
                                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;">
                                
                                <div style="font-size: 0.9rem; color: #666;">
                                    <p style="margin-bottom: 10px;"><i class="fas fa-check" style="color: green; margin-right: 5px;"></i> 专业向导陪同</p>
                                    <p style="margin-bottom: 10px;"><i class="fas fa-check" style="color: green; margin-right: 5px;"></i> 全程无强制购物</p>
                                    <p><i class="fas fa-check" style="color: green; margin-right: 5px;"></i> 正规旅行社资质</p>
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
                <h2>未找到相关产品</h2>
                <p>抱歉，您访问的产品页面不存在或已被移除。</p>
                <a href="products.html" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background: #d43030; color: #fff; border-radius: 5px;">返回产品目录</a>
            </div>
        `);
    }
});
