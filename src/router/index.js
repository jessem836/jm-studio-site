import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EarthbornView from '../views/EarthbornView.vue'
import PersonalView from '../views/PersonalView.vue'
import CodexView from '../views/CodexView.vue'

const routes = [
  { path: '/',          name: 'home',      component: HomeView },
  { path: '/earthborn', name: 'earthborn', component: EarthbornView },
  { path: '/personal',  name: 'personal',  component: PersonalView },
  { path: '/codex',      name: 'codex',      component: CodexView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return savedPosition || { top: 0 }
  }
})

export default router
