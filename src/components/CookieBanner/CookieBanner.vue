<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCookieConsentStore } from '@/stores/cookieConsent'

const consentStore = useCookieConsentStore()

const analytics = ref(false)
const functional = ref(false)

const syncSettings = () => {
  analytics.value = consentStore.analytics
  functional.value = consentStore.functional
}

const handleAcceptAll = () => {
  consentStore.acceptAll()
  consentStore.closeSettings()
}

const handleRejectAll = () => {
  consentStore.rejectAll()
  consentStore.closeSettings()
}

const handleOpenSettings = () => {
  syncSettings()
  consentStore.openSettings()
}

const handleSaveSettings = () => {
  consentStore.setPreferences({
    analytics: analytics.value,
    functional: functional.value
  })
  consentStore.closeSettings()
}

watch(
  () => consentStore.isSettingsOpen,
  (isOpen) => {
    if (isOpen) syncSettings()
  }
)
</script>

<template>
  <div v-if="consentStore.shouldShowBanner" class="cookie-banner" role="dialog" aria-live="polite">
    <div class="cookie-banner__content">
      <p class="cookie-banner__text">Мы используем cookie, чтобы сайт работал корректно и мы могли улучшать сервис.</p>

      <div class="cookie-banner__actions">
        <button class="btn cookie-btn" type="button" @click="handleAcceptAll">Принять все</button>
        <button class="btn cookie-btn" type="button" @click="handleRejectAll">Отклонить все</button>
        <button class="btn cookie-btn" type="button" @click="handleOpenSettings">Настроить</button>
      </div>
      <router-link class="cookie-banner__link" to="/privacy-policy">Политика обработки данных и cookie</router-link>
    </div>
  </div>

  <teleport to="body">
    <div v-if="consentStore.isSettingsOpen" class="cookie-modal">
      <div class="cookie-modal__backdrop" @click="consentStore.closeSettings"></div>
      <div class="cookie-modal__dialog" role="dialog" aria-modal="true">
        <button
          class="cookie-modal__close"
          type="button"
          @click="consentStore.closeSettings"
          aria-label="Закрыть"
        ></button>
        <h3 class="cookie-modal__title">Настройки cookie</h3>
        <p class="cookie-modal__text">
          Вы можете включить или отключить категории. Обязательные cookie не отключаются.
        </p>
        <div class="cookie-modal__options">
          <label class="cookie-option">
            <span class="cookie-option__label">Аналитические (Яндекс.Метрика)</span>
            <input class="cookie-option__toggle" type="checkbox" v-model="analytics" />
          </label>
          <label class="cookie-option">
            <span class="cookie-option__label">Функциональные (Карта, онлайн запись "DIKIDI")</span>
            <input class="cookie-option__toggle" type="checkbox" v-model="functional" />
          </label>
          <label class="cookie-option">
            <span class="cookie-option__label">Технические (обязательные)</span>
            <input class="cookie-option__toggle" type="checkbox" checked disabled />
          </label>
        </div>
        <div class="cookie-modal__actions">
          <button class="btn cookie-btn" type="button" @click="handleSaveSettings">Сохранить</button>
          <button class="btn cookie-btn" type="button" @click="handleRejectAll">Отклонить все</button>
          <button class="btn cookie-btn" type="button" @click="handleAcceptAll">Принять все</button>
        </div>
        <a class="cookie-modal__policy" href="/privacy-policy">Политика обработки данных и cookie</a>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';

.cookie-banner {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: $dark;
  color: $highlightAccent;
  padding: 1rem 1.5rem;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
}

.cookie-banner__content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem 1.5rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.cookie-banner__text {
  margin: 0;
  font-size: $font-size-base;
  line-height: 1.4;
}

.cookie-banner__link {
  color: $highlightAccent;
  text-decoration: underline;
}

.cookie-banner__actions {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.cookie-btn {
  border-radius: 999px;
  padding: 0.5rem 1rem;
  font-size: $font-size-sm;
  border: 1px solid $highlightAccent;
  background: transparent;
  color: $highlightAccent;
  @include myTransitionAll;

  &:hover {
    color: $dark;
    background: $highlightAccent;
  }

  &.outline {
    background: transparent;
  }
}

.cookie-modal {
  position: fixed;
  inset: 0;
  z-index: 1100;
}

.cookie-modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.cookie-modal__dialog {
  position: relative;
  z-index: 1;
  max-width: 520px;
  margin: 8vh auto;
  background: $backgroundLight;
  color: $dark;
  border-radius: 1rem;
  padding: 2.5rem 2rem 2rem;
  @include boxShadow;
}

.cookie-modal__close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  cursor: pointer;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 2px;
    background: $dark;
  }

  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}

.cookie-modal__title {
  margin: 0 0 0.75rem;
  font-size: $font-size-xxl;
}

.cookie-modal__text {
  margin: 0 0 1.5rem;
  font-size: $font-size-base;
}

.cookie-modal__options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.cookie-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
}

.cookie-option__label {
  font-size: $font-size-base;
}

.cookie-option__toggle {
  flex: 0 0 44px;
  width: 44px;
  height: 22px;
  accent-color: $primaryAccent;
}

.cookie-modal__actions {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.cookie-modal__policy {
  color: $dark;
  text-decoration: underline;
}

@media screen and (max-width: 600px) {
  .cookie-modal__dialog {
    margin: 10vh 1rem 0;
  }
}
</style>
