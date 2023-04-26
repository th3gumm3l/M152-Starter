import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aufgabe_12_2 from '../views/Pages/aufgabe_12_2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aufgabe12-2',
      name: 'Aufgabe 12-2',
      component: aufgabe_12_2,
    }
  ]
})

export default router
