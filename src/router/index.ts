import { createRouter, createWebHistory } from 'vue-router'
import type { ActivityType } from '@/apis/content'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/ContentPageView.vue'), meta: { activityType: 'HomePage' as ActivityType, titleZh: '首页', titleEn: 'Home' } },
  { path: '/about', component: () => import('@/views/ContentPageView.vue'), meta: { activityType: 'ABOUT_APIMTC' as ActivityType, titleZh: '关于 APIMTC', titleEn: 'About APIMTC' } },
  { path: '/mobility', component: () => import('@/views/ContentPageView.vue'), meta: { activityType: 'Education' as ActivityType, titleZh: '教育流动', titleEn: 'Education Mobility' } },
  { path: '/mice-business', component: () => import('@/views/ContentPageView.vue'), meta: { activityType: 'MICE' as ActivityType, titleZh: 'MICE 与商务', titleEn: 'MICE & Business' } },
  { path: '/partnerships', component: () => import('@/views/ContentPageView.vue'), meta: { activityType: 'International_Cooperation' as ActivityType, titleZh: '国际合作', titleEn: 'International Cooperation' } },
  { path: '/china-gateway', component: () => import('@/views/ContentPageView.vue'), meta: { activityType: 'Chine_Content' as ActivityType, titleZh: '中国门户', titleEn: 'China Gateway' } },
  { path: '/contact', component: () => import('@/views/ContentPageView.vue'), meta: { activityType: 'aboutUs' as ActivityType, titleZh: '联系我们', titleEn: 'Contact Us' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
