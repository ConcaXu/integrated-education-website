/**
 * API 请求统一配置
 */
const baseUrl = 'http://localhost:1024';

/**
 * 页面类型映射字典
 * 根据不同的页面，传入对应的类型键值
 */
const PageTypeMap = {
  '首页': 'HomePage',
  '研学出行': 'studyTour',
  '政企出海': 'goingGlobalForGovernmentAndEnterprises',
  '文化旅游': 'culturalTourism',
  '近期活动': 'event',
  '关于我们': 'aboutUs'
};

/**
 * 获取活动列表接口
 * @param {number} pageNum - 当前页码
 * @param {number} pageSize - 每页条数
 * @param {string} type - 页面类型（可以传中文键名或者直接传对应的英文字段）
 * @returns {Promise<any>} 返回包含活动列表数据的 Promise 对象
 */
async function fetchActivityList(pageNum = 1, pageSize = 10, type = 'event') {
  // 兼容处理：如果传入的是中文，则转换为对应的英文键值
  const typeValue = PageTypeMap[type] || type;
  
  // 构建 URL 和查询参数
  const url = new URL(`${baseUrl}/dev-api/content/activity/list`);
  url.searchParams.append('pageNum', pageNum);
  url.searchParams.append('pageSize', pageSize);
  url.searchParams.append('type', typeValue);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`网络请求错误，状态码: ${response.status}`);
    }

    const res = await response.json();
    return res;
  } catch (error) {
    console.error('获取活动列表失败:', error);
    throw error;
  }
}
