import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition){
    return savedPosition ? savedPosition : {top:0}
  },
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
    },
    {
      path: '/new',
      name: 'new-content',
      component: ()=>import('../views/SubmitContentView.vue')
    },
    {
      path:'/subscribe',
      name: 'subscribe',
      component: ()=>import('../views/SubscribeView.vue')
    }
  ]
})

export default router
