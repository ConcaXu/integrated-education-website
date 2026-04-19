import axios from 'axios'

const http = axios.create({
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
})

const PageTypeMap: Record<string, string> = {
  '首页': 'HomePage',
  '研学出行': 'studyTour',
  '政企出海': 'goingGlobalForGovernmentAndEnterprises',
  '文化旅游': 'culturalTourism',
  '近期活动': 'event',
  '关于我们': 'aboutUs'
}

export interface ActivityItem {
  id: number | string
  titleZh: string
  titleEn?: string
  introZh?: string
  introEn?: string
  contentZh?: string
  contentEn?: string
  coverImage?: string
  dateTime?: string
  type?: string
  country?: string
}

export interface ListResponse {
  code: number
  rows: ActivityItem[]
  total: number
}

export interface DetailResponse {
  code: number
  data: ActivityItem
}

export async function fetchActivityList(
  pageNum = 1,
  pageSize = 10,
  type = 'event',
  country?: string
): Promise<ListResponse> {
  const typeValue = PageTypeMap[type] || type
  let url = `/prod-api/content/activity/list?pageNum=${pageNum}&pageSize=${pageSize}&type=${typeValue}`
  if (country) url += `&country=${country}`
  const res = await http.get<ListResponse>(url)
  return res.data
}

export async function fetchActivityDetail(id: number | string): Promise<DetailResponse> {
  const res = await http.get<DetailResponse>(`/prod-api/content/activity/${id}`)
  return res.data
}
