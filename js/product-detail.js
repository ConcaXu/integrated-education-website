$(document).ready(async function() {
    // 1. Parse URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const container = $('#product-detail-container');

    // 2. Check if product exists in local data
    if (productId) {
        // Prioritize API fetch for detail page to ensure fresh data
        // Only fallback to local if API fails or if productId looks like a local string key
        
        const isLocalKey = isNaN(productId); // Assuming API IDs are numbers, local keys are strings like 'singapore-school-visit'

        if (isLocalKey && typeof productsData !== 'undefined' && productsData[productId]) {
             // Found in local data
            const product = productsData[productId];
            renderProduct(product, true);
        } else {
             // Try fetching from API
            try {
                // Show loading
                container.html('<div style="height: 100vh; display: flex; align-items: center; justify-content: center;"><p>正在加载产品信息...</p></div>');
                
                // Try fetchActivityDetail if available
                if (window.fetchActivityDetail) {
                    const response = await window.fetchActivityDetail(productId);
                    if (response.code === 200 && response.data) {
                        renderProduct(response.data, false);
                        return;
                    }
                }
                
                // If API fetch fails or returns no data
                 if (typeof productsData !== 'undefined' && productsData[productId]) {
                     const product = productsData[productId];
                     renderProduct(product, true);
                 } else {
                     renderError();
                 }
            } catch (error) {
                console.error('Failed to load product detail:', error);
                 if (typeof productsData !== 'undefined' && productsData[productId]) {
                     const product = productsData[productId];
                     renderProduct(product, true);
                 } else {
                    renderError();
                 }
            }
        }
    } else {
        renderError();
    }

    function renderProduct(product, isLocal) {
        // Handle Multilingual & Field Mapping
        const lang = 'zh-CN'; // Can be dynamic
        
        const title = product.title || (lang === 'en' ? product.titleEn : product.titleZh);
        // API intro is usually short text, content is HTML
        const subtitle = product.subtitle || (lang === 'en' ? product.introEn : product.introZh);
        
        let image = product.image || product.coverImage || '';
        if (image && !image.startsWith('http') && window.apiBaseUrl) {
             const prefix = image.startsWith('/dev-api') ? '' : '/dev-api';
             image = `${window.apiBaseUrl}${prefix}${image}`;
        }
        if (!image) image = 'assets/images/productcatalog.webp';

        const category = product.category || product.type; // Map type code to name if needed
        const location = product.location || '';
        const duration = product.duration || ''; 
        
        // API contentZh/En is HTML
        // Important: Replace relative image paths in content with absolute paths
        let description = product.description || (lang === 'en' ? product.contentEn : product.contentZh) || '';
        
        if (!isLocal && description) {
            // Regex to find img src attributes that are relative (don't start with http or //)
            description = description.replace(/<img[^>]+src="([^">]+)"/g, function(match, src) {
                if (src && !src.startsWith('http') && !src.startsWith('//') && !src.startsWith('data:')) {
                    const prefix = src.startsWith('/dev-api') ? '' : '/dev-api';
                    const newSrc = `${window.apiBaseUrl}${prefix}${src}`;
                    return match.replace(src, newSrc);
                }
                return match;
            });
        }

        // Highlights & Itinerary - API might return JSON string or different structure
        let highlights = product.highlights || [];
        if (typeof highlights === 'string') {
            try { highlights = JSON.parse(highlights); } catch(e) {}
        }

        let itinerary = product.itinerary || [];
        if (typeof itinerary === 'string') {
            try { itinerary = JSON.parse(itinerary); } catch(e) {}
        }

        // Get content title from backend or fallback to default
        const contentTitle = product.contentTitle || (lang === 'en' ? product.contentTitleEn : product.contentTitleZh) || '项目概况';

        // Update Page Title
        document.title = `${title} - WanderChina.Guide`;

        // Render HTML
        let highlightsHtml = '';
        if (highlights && highlights.length > 0) {
            highlightsHtml = `<ul class="highlights-list">
                ${highlights.map(item => `<li><i class="fas fa-check-circle"></i> <span>${item}</span></li>`).join('')}
            </ul>`;
        }

        let itineraryHtml = '';
        if (itinerary && itinerary.length > 0) {
            itineraryHtml = `<div class="itinerary-timeline">
                ${itinerary.map(item => `
                    <div class="timeline-item">
                        <span class="day-tag">${item.day || ''}</span>
                        <h4 class="day-title">${item.title || ''}</h4>
                        <p class="day-desc">${item.desc || ''}</p>
                    </div>
                `).join('')}
            </div>`;
        }

        // If description is HTML (from API), render directly. If plain text, wrap in p.
        const descHtml = description; 

        const html = `
            <!-- Hero Section -->
            <section class="detail-banner" style="background-image: url('${image}');">
                <div class="container banner-content">
                    <div class="product-meta">
                        <div class="meta-item"><i class="fas fa-map-marker-alt"></i> ${location}</div>
                        <div class="meta-item"><i class="fas fa-clock"></i> ${duration}</div>
                        <div class="meta-item"><i class="fas fa-tag"></i> ${category}</div>
                    </div>
                    <h1 class="detail-title">${title}</h1>
                    <p class="detail-subtitle">${subtitle || ''}</p>
                </div>
            </section>

            <!-- Main Content -->
            <section class="detail-content">
                <div class="container">
                    <div class="content-grid">
                        <!-- Left Column -->
                        <div class="left-col">
                            <div class="section-box">
                                <div class="text-content">${descHtml}</div>
                            </div>

                            <div class="section-box" style="${highlights && highlights.length > 0 ? '' : 'display:none'}">
                                <h3 class="section-title">项目亮点</h3>
                                ${highlightsHtml}
                            </div>

                            <div class="section-box" style="${itinerary && itinerary.length > 0 ? '' : 'display:none'}">
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
                <a href="products.html" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background: #215198; color: #fff; border-radius: 5px;">返回产品目录</a>
            </div>
        `);
    }
});
