const fs = require('fs');
const path = require('path');

// 获取当前时间戳作为版本号
const version = new Date().toISOString().replace(/[-:T.Z]/g, '').slice(0, 14);
const projectRoot = path.resolve(__dirname, '..');

// 扫描根目录下的所有 HTML 文件
const htmlFiles = fs.readdirSync(projectRoot).filter(file => file.endsWith('.html'));

htmlFiles.forEach(file => {
    const filePath = path.join(projectRoot, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 匹配并更新 JS 引用（支持带或不带已有版本号的情况）
    content = content.replace(/(js\/[a-zA-Z0-9.-]+\.js)(\?v=[a-zA-Z0-9]+)?/g, `$1?v=${version}`);

    // 匹配并更新 CSS 引用
    content = content.replace(/(css\/[a-zA-Z0-9.-]+\.css)(\?v=[a-zA-Z0-9]+)?/g, `$1?v=${version}`);

    fs.writeFileSync(filePath, content);
    console.log(`[Build] Updated version for ${file} to ${version}`);
});

console.log('[Build] Successfully completed resource versioning.');
