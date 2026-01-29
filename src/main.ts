import '@/assets/style/main.scss'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useCookieConsentStore } from '@/stores/cookieConsent'
import { loadDikidiWidget, loadYandexMetrika } from '@/utils/consentScripts'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

const consentStore = useCookieConsentStore(pinia)
consentStore.loadFromStorage()

watch(
  () => [consentStore.analytics, consentStore.functional],
  () => {
    if (consentStore.analytics) loadYandexMetrika()
    if (consentStore.functional) loadDikidiWidget()
  },
  { immediate: true }
)

app.mount('#app')
