const baseUrl = '';

const PageTypeMap = {
  '首页': 'HomePage',
  '研学出行': 'studyTour',
  '政企出海': 'goingGlobalForGovernmentAndEnterprises',
  '文化旅游': 'culturalTourism',
  '近期活动': 'event',
  '关于我们': 'aboutUs'
};

async function fetchActivityList(pageNum = 1, pageSize = 10, type = 'event', country = null) {
  const typeValue = PageTypeMap[type] || type;
  let url = `/prod-api/content/activity/list?pageNum=${pageNum}&pageSize=${pageSize}&type=${typeValue}`;
  if (country) {
    url += `&country=${country}`;
  }

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
    return await response.json();
  } catch (error) {
    console.error('获取活动列表失败:', error);
    throw error;
  }
}

async function fetchActivityDetail(id) {
  const url = `/prod-api/content/activity/${id}`;

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
    return await response.json();
  } catch (error) {
    console.error('获取活动详情失败:', error);
    throw error;
  }
}

window.fetchActivityList = fetchActivityList;
window.fetchActivityDetail = fetchActivityDetail;
window.apiBaseUrl = baseUrl;
