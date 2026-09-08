import axios from 'axios'

const http = axios.create({
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
})

http.interceptors.request.use((config) => {
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null
  if (token) config.headers.Authorization = token.startsWith('Bearer ') ? token : `Bearer ${token}`
  return config
})

export interface ActivityItem {
  id: number | string
  activityType?: ActivityType
  titleZh: string
  titleEn?: string
  introZh?: string
  introEn?: string
  contentZh?: string
  contentEn?: string
  coverImage?: string
  cover_image?: string
  coverImg?: string
  cover_img?: string
  image?: string
  img?: string
  thumbnail?: string
  activityId?: number | string
  activityTitle?: string
  activityDesc?: string
  startDate?: string
  endDate?: string
  dateTime?: string
  date_time?: string
  type?: string
  _country?: string
  [key: string]: unknown
}

export type ActivityType =
  | 'MICE'
  | 'International_Cooperation'
  | 'Chine_Content'
  | 'HomePage'
  | 'ABOUT_APIMTC'
  | 'Educationtype'
  | 'aboutUs'

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
  activityType?: ActivityType | string,
  _legacyCountry?: string
): Promise<ListResponse> {
  const params: Record<string, string | number> = { pageNum, pageSize }
  if (isActivityType(activityType)) params.activityType = activityType
  const res = await http.get<ListResponse>('/prod-api/content/activity/list', { params })
  const payload = res.data as ListResponse
  return { ...payload, rows: (payload.rows || []).map(normalizeActivity) }
}

function isActivityType(value?: string): value is ActivityType {
  return [
    'MICE',
    'International_Cooperation',
    'Chine_Content',
    'HomePage',
    'ABOUT_APIMTC',
    'Educationtype',
    'aboutUs',
  ].includes(value as ActivityType)
}

export async function fetchActivityDetail(id: number | string): Promise<DetailResponse> {
  const res = await http.get<DetailResponse>(`/prod-api/content/activity/${id}`)
  const payload = res.data as DetailResponse
  return { ...payload, data: payload.data ? normalizeActivity(payload.data) : payload.data }
}

function normalizeActivity(item: ActivityItem): ActivityItem {
  const source = item as ActivityItem & Record<string, unknown>
  return {
    ...item,
    id: source.id ?? source.activityId ?? '',
    activityType: source.activityType as ActivityType | undefined,
    titleZh: String(source.titleZh ?? source.activityTitle ?? ''),
    introZh: String(source.introZh ?? source.activityDesc ?? ''),
    contentZh: String(source.contentZh ?? source.activityDesc ?? ''),
    dateTime: String(source.dateTime ?? source.startDate ?? ''),
    titleEn: String(source.titleEn ?? source.activityTitleEn ?? ''),
    introEn: String(source.introEn ?? source.activityDescEn ?? ''),
    contentEn: String(source.contentEn ?? source.activityDescEn ?? ''),
  }
}
