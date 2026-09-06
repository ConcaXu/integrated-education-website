import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue') },
  { path: '/about', component: () => import('@/views/BrandPageView.vue') },
  { path: '/mobility', component: () => import('@/views/BrandPageView.vue') },
  { path: '/mice-business', component: () => import('@/views/BrandPageView.vue') },
  { path: '/partnerships', component: () => import('@/views/BrandPageView.vue') },
  { path: '/china-gateway', component: () => import('@/views/BrandPageView.vue') },
  { path: '/contact', component: () => import('@/views/ContactView.vue') },
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
