import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Popover } from 'bootstrap' // Import only the Bootstrap components we need

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover)
})
