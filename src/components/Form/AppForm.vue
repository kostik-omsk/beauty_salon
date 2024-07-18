<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useServicesStore } from '@/stores/ListServices'

const ListServices = useServicesStore()
const { getListServices } = storeToRefs(ListServices)

const name = ref<string>('')
const phone = ref<string>('')
const theme = ref<string>('')
const agree = ref<boolean>(false)
const isLoading = ref<boolean>(false)

interface AlertMessage {
  text: string
  category: 'success' | 'error' | 'warning'
  isShow: boolean
}

const alertMessage = reactive<AlertMessage>({ text: '', category: 'warning', isShow: false })

const isNameValid = computed(() => name.value.length > 0)
const isPhoneValid = computed(() => phone.value.length === 18)
const isThemeValid = computed(() => theme.value.length > 0)

const isValidFields = (): boolean => {
  return name.value.length > 0 && phone.value.length === 18 && theme.value.length > 0 && agree.value
}

const maskPhone = (event: KeyboardEvent): void => {
  const target = event.target as HTMLInputElement | null
  if (!target) return

  const key = event.key
  const value = target.value
  const isNumber = /^\d$/.test(key)

  if (isNumber || key === 'Backspace') {
    if (key !== 'Backspace') {
      if (value.length < 4 || value === '') {
        target.value = '+7 ('
      }
      if (value.length === 7) {
        target.value += ') '
      }
      if (value.length === 12 || value.length === 15) {
        target.value += '-'
      }
    }
  } else {
    event.preventDefault()
  }
}

const addPrefix = (event: FocusEvent): void => {
  const target = event.target as HTMLInputElement | null
  if (!target) return

  if (target.value === '') {
    target.value = '+7 ('
  }
}

const showAlert = (text: string, category: 'success' | 'error' | 'warning'): void => {
  alertMessage.text = text
  alertMessage.category = category
  alertMessage.isShow = true

  if (category === 'success') {
    setTimeout(() => {
      alertMessage.isShow = false
    }, 5000)
  }
}

const handleSubmit = async (): Promise<void> => {
  if (!isValidFields()) {
    if (phone.value.length !== 18) {
      showAlert('Номер телефона должен содержать 11 цифр!', 'warning')
      return
    } else if (!agree.value) {
      showAlert(
        'Согласие на обработку персональных данных обязательно! Мы не храним ваши данные и не передаем их третьим лицам, а используем только для связи с вами!',
        'warning'
      )
      return
    }
  }

  isLoading.value = true
  alertMessage.isShow = false

  const fullMessage = `Имя: ${name.value}\nНомер: ${phone.value}\nТема: ${theme.value}\n`

  try {
    const response = await fetch('send-message.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: fullMessage })
    })

    const data = await response.json()

    if (data.success) {
      showAlert('Сообщение успешно отправлено!', 'success')
    }
  } catch (error) {
    console.error('Ошибка:', error)
    showAlert('Произошла ошибка при отправке сообщения.', 'error')
  } finally {
    name.value = ''
    phone.value = ''
    theme.value = ''
    agree.value = false
    isLoading.value = false
  }
}
</script>

<template>
  <div class="contact">
    <h3 class="contact__title">Запись в Chloe</h3>
    <p class="contact__subtitle">
      Напишите нам в
      <a class="contact__link" href="https://api.whatsapp.com/send?phone=79133851386" target="_blank">WhatsApp</a> или
      заполните форму ниже и мы с вами свяжемся.
    </p>
    <form class="contact__form form" @submit.prevent="handleSubmit">
      <div class="form__fields fields">
        <div class="fields__group">
          <input
            :class="['fields__input', { 'fields__input--valid': isNameValid }]"
            v-model="name"
            id="name"
            name="name"
            type="text"
            maxlength="25"
            required
          />
          <label class="fields__label" for="name">Имя <span>*</span></label>
        </div>
        <div class="fields__group">
          <input
            :class="['fields__input', { 'fields__input--valid': isPhoneValid }]"
            v-model="phone"
            @keydown="maskPhone"
            @focus="addPrefix"
            maxlength="18"
            id="phone"
            name="phone"
            type="tel"
            required
          /><label class="fields__label" for="phone">Телефон <span>*</span></label>
        </div>
        <div class="fields__group">
          <select
            :class="['fields__select', { 'fields__select--valid': isThemeValid }]"
            v-model="theme"
            id="theme"
            name="theme"
            required
          >
            <option selected disabled></option>
            <option v-for="(service, index) in getListServices" :key="index" :value="service">
              {{ service }}
            </option>
            <option value="Консультация">Консультация</option>
            <option value="Другое">Другое</option>
          </select>
          <label for="theme" class="fields__label">Выбрать услугу <span>*</span></label>
        </div>
      </div>
      <div class="form__checkbox checkbox">
        <label class="checkbox__container">
          <input class="checkbox__custom" v-model="agree" id="checkbox" type="checkbox" />
          <span class="checkbox__checkmark"></span>
          <span class="checkbox__text"
            >Согласие на обработку персональных данных в соответствии с Федеральным законом от 27.07.2006 года
            №152-ФЗ.*</span
          >
        </label>
      </div>
      <button class="form__submit btn primary-btn" type="submit" :disabled="isLoading">
        <span v-if="isLoading" class="spinner-border spinner-border-sm" aria-hidden="true"></span>
        <span v-else>Записаться</span>
      </button>
    </form>
    <Transition name="message">
      <div v-if="alertMessage.isShow" :class="['message', `message--${alertMessage.category}`]">
        <p class="message__text">{{ alertMessage.text }}</p>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/var.scss';
@import '@/assets/style/mixins.scss';

.contact {
  padding: clamp(1rem, -0.866rem + 5.97vw, 2rem);
  overflow: hidden;
  border-radius: 1rem;
  @include boxShadow;
  @include myBorder;

  &__title {
    color: $myprimary;
    font-size: $font-size-xxxl;
    margin-bottom: 1rem;

    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: $font-size-xxl;
    }
  }

  &__subtitle {
    color: $myprimary;
    font-size: $font-size-lg;
    margin-bottom: 2rem;

    @media screen and (max-width: 768px) {
      font-size: $font-size-md;
      text-align: center;
    }
  }

  &__link {
    color: $mygreen-dark;
    text-decoration: solid underline $mygreen-dark;
  }
}

.fields {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.7rem;
  max-width: 100%;
  @media screen and (max-width: 1250px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }

  &__group {
    flex: 0 1 33%;
    position: relative;
    will-change: transform;

    @media screen and (max-width: 1250px) {
      flex: 1 1 33%;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    & :is(select:focus, select:valid) ~ label {
      transform: translateY(-50%) scale(0.9);
      margin: 0em;
      margin-left: 1.3em;
      padding: 0.3em 0.5em;
      background-color: white;
    }

    & :is(input:focus, input:valid) ~ label {
      transform: translateY(-50%) scale(0.9);
      margin: 0em;
      margin-left: 1.3em;
      padding: 0.3em 0.5em;
      background-color: white;
    }

    & :is(input:focus) {
      border-color: $mygreen-dark;
    }
  }

  &__input {
    font-size: 100%;
    padding: 0.8em;
    outline: none;
    border: 2px solid $myprimary;
    background-color: transparent;
    border-radius: 20px;
    width: 100%;
    color: $myprimary;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  &__label {
    font-size: 100%;
    position: absolute;
    left: 0;
    top: 0px;
    padding: 0.5em;
    margin-left: 0.5em;
    pointer-events: none;
    transition: all 0.3s ease;
    color: $myprimary;

    @media screen and (max-width: 576px) {
      top: 4px;
    }
    & span {
      color: $warning;
      font-size: $font-size-md;
    }
  }

  &__select {
    height: 53px;
    font-size: 100%;
    padding: 0.8em;
    outline: none;
    border: 2px solid $myprimary;
    border-radius: 20px;
    width: 100%;
    color: $myprimary;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
    &:focus {
      border-color: $mygreen-dark;
    }
  }

  input:-webkit-autofill {
    color: $myprimary;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: $myprimary;
    box-shadow: 0 0 0px 1000px white inset;
  }

  input:autofill {
    color: $myprimary;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: $myprimary;
    box-shadow: 0 0 0px 1000px white inset;
  }

  input:-internal-autofill-selected {
    background-color: transparent !important;
  }
}

.form__submit {
  @media screen and (max-width: 576px) {
    width: 100%;
  }
}

.checkbox {
  margin-bottom: 1.5rem;
  will-change: transform;

  @media screen and (max-width: 768px) {
  }
  &__container {
    display: inline-block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    user-select: none;
  }

  &__custom {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkbox__checkmark:after {
      display: block;
    }

    &:checked ~ .checkbox__checkmark:after {
      animation: checkAnim 0.2s forwards;
    }

    &:checked ~ .checkbox__checkmark {
      background-color: $mygreen;
    }
  }

  &__checkmark {
    position: absolute;
    top: 0px;
    left: 0;
    height: 25px;
    width: 25px;
    border: 1px solid $myprimary;
    border-radius: 4px;
    transition: background-color 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 768px) {
      float: left;
    }
    &::after {
      content: '';
      position: absolute;
      display: none;
      left: 10px;
      top: 7px;
      width: 5px;
      height: 10px;
      border: solid $myprimary;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }

  @keyframes checkAnim {
    0% {
      height: 0;
    }

    100% {
      height: 10px;
    }
  }

  &__text {
    color: $myprimary;
  }
}

.message {
  padding: 15px;
  border-radius: 5px;
  margin-top: 15px;
  max-width: 100%;
}

.message__text {
  margin: 0;
}

.message--success {
  background-color: #d4edda;
  color: #155724;
}

.message--error {
  background-color: #f8d7da;
  color: #721c24;
}

.message--warning {
  background-color: #fff3cd;
  color: #856404;
}

.message-enter-active {
  transition: all 0.3s ease-out;
}

.message-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.message-enter-from,
.message-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fields__input--valid,
.fields__select--valid {
  border-color: $myprimary;
}
</style>
