import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>import ('../views/HomeView.vue')
    },
    {
      path: '/addannancontent',
      name: 'add-content',
      component: () =>import('../views/AddContentView.vue')
    }
  ]
})

export default router
