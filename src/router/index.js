import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Views/Home.vue'
import About from '../Views/About.vue'
import Games from '../Views/HootsGames.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/games', name: 'Games', component: Games },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

