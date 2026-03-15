document.addEventListener('DOMContentLoaded', async () => {
    const productGrids = document.querySelectorAll('.products-grid[data-type][data-country]');
    const dataCache = new Map();
    let currentLang = 'zh-CN'; // Default

    // Initial load
    for (const grid of productGrids) {
        const type = grid.dataset.type;
        const country = grid.dataset.country;
        const cacheKey = `${type}-${country}`;

        try {
            // Show loading state
            grid.innerHTML = '<div class="loading" style="text-align: center; padding: 20px; color: #666;">加载中...</div>';

            const response = await window.fetchActivityList(1, 10, type, country);

            if (response.code === 200 && response.rows && response.rows.length > 0) {
                dataCache.set(cacheKey, response.rows);
                renderGrid(grid, response.rows, currentLang);
            } else {
                grid.innerHTML = '<div class="no-data" style="text-align: center; padding: 20px; color: #666;">暂无相关产品</div>';
            }
        } catch (error) {
            console.error(`Failed to load products for ${type} - ${country}:`, error);
            grid.innerHTML = '<div class="error" style="text-align: center; padding: 20px; color: red;">加载失败，请稍后重试</div>';
        }
    }

    // Listen for language changes
    document.addEventListener('language-changed', (e) => {
        currentLang = e.detail.lang;
        // Re-render all grids with cached data
        for (const grid of productGrids) {
            const type = grid.dataset.type;
            const country = grid.dataset.country;
            const cacheKey = `${type}-${country}`;
            const data = dataCache.get(cacheKey);
            
            if (data) {
                renderGrid(grid, data, currentLang);
            }
        }
    });
});

function renderGrid(grid, items, lang) {
    grid.innerHTML = ''; // Clear content
    items.forEach(item => {
        const card = createProductCard(item, lang);
        grid.appendChild(card);
    });
}

function createProductCard(item, lang) {
    const card = document.createElement('div');
    card.className = 'product-card';

    // Image URL handling
    let imageUrl = item.coverImage || '';
    if (imageUrl && !imageUrl.startsWith('http')) {
        // Handle cases where imageUrl might already have /dev-api prefix or not
        // activities.html logic: 
        // imageUrl = baseUrl + (imageUrl.startsWith('/dev-api') ? '' : '/dev-api') + imageUrl;
        // window.apiBaseUrl is 'http://localhost:1024'
        
        const prefix = imageUrl.startsWith('/dev-api') ? '' : '/dev-api';
        imageUrl = `${window.apiBaseUrl}${prefix}${imageUrl}`;
    }

    // Fallback image
    if (!imageUrl) {
        imageUrl = 'assets/images/productcatalog.webp'; 
    }

    // Language handling
    const title = lang === 'en' ? (item.titleEn || item.titleZh) : (item.titleZh || item.titleEn);
    
    // Description handling
    const desc = lang === 'en' ? (item.introEn || item.introZh) : (item.introZh || item.introEn);
    
    // Truncate description if needed
    const truncatedDesc = desc && desc.length > 60 ? desc.substring(0, 60) + '...' : (desc || '');

    card.innerHTML = `
        <div class="product-img">
            <img src="${imageUrl}" alt="${title}" onerror="this.src='assets/images/productcatalog.webp'">
        </div>
        <div class="product-info">
            <h4 class="product-title">${title}</h4>
            <p class="product-desc">${truncatedDesc}</p>
            <a href="product-detail.html?id=${item.id}" class="product-link">
                ${lang === 'en' ? 'Learn More' : '了解详情'} <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;

    return card;
}
