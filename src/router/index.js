import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Views/Home.vue'
import Gallery from '../Views/Gallery.vue'
import Games from '../Views/HootsGames.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/games', name: 'Games', component: Games },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

