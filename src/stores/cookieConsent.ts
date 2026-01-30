import { defineStore } from 'pinia'

export const COOKIE_CONSENT_STORAGE_KEY = 'cookie-consent-v1'

type ConsentPreferences = {
  analytics: boolean
  functional: boolean
}

type StoredConsent = ConsentPreferences & {
  answered: boolean
}

export const useCookieConsentStore = defineStore('cookieConsent', {
  state: () => ({
    answered: false,
    analytics: false,
    functional: false,
    isSettingsOpen: false,
    isLoaded: false
  }),
  getters: {
    shouldShowBanner(state): boolean {
      return !state.answered
    }
  },
  actions: {
    loadFromStorage() {
      if (this.isLoaded) return
      this.isLoaded = true

      const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
      if (!raw) return

      try {
        const parsed = JSON.parse(raw) as Partial<StoredConsent>
        if (typeof parsed.answered === 'boolean') this.answered = parsed.answered
        if (typeof parsed.analytics === 'boolean') this.analytics = parsed.analytics
        if (typeof parsed.functional === 'boolean') this.functional = parsed.functional
      } catch (error) {
        console.warn('Cookie consent parse error:', error)
      }
    },
    saveToStorage() {
      const payload: StoredConsent = {
        answered: this.answered,
        analytics: this.analytics,
        functional: this.functional
      }
      localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(payload))
    },
    acceptAll() {
      this.answered = true
      this.analytics = true
      this.functional = true
      this.saveToStorage()
    },
    rejectAll() {
      this.answered = true
      this.analytics = false
      this.functional = false
      this.saveToStorage()
    },
    setPreferences(preferences: ConsentPreferences) {
      this.answered = true
      this.analytics = preferences.analytics
      this.functional = preferences.functional
      this.saveToStorage()
    },
    openSettings() {
      this.isSettingsOpen = true
    },
    closeSettings() {
      this.isSettingsOpen = false
    }
  }
})
