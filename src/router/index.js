import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/allfilms',
      name: 'allfilms',
      component: () => import('../views/AllFilms.vue')
    },
    {
      path: '/detail/:id',
      name: 'detailfilm',
      component: () => import('../views/DetailFilm.vue')
    }
  ]
})

export default router
