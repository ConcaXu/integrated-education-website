import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue') },
  { path: '/products', name: 'Products', component: () => import('@/views/ProductsView.vue') },
  { path: '/products/:id', name: 'ProductDetail', component: () => import('@/views/ProductDetailView.vue') },
  { path: '/activities', name: 'Activities', component: () => import('@/views/ActivitiesView.vue') },
  { path: '/activities/:id', name: 'ActivityDetail', component: () => import('@/views/ActivityDetailView.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/AboutView.vue') },
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
