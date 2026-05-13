import { createApp } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import App from './App.vue'
import router from './router/index.js'
import './style.css'

const app = createApp(App)
app.use(router)
app.component('RouterLink', RouterLink)
app.component('RouterView', RouterView)
app.mount('#app')
