import axios from 'axios'
import { defineStore } from 'pinia'

const phpUrl = 'dikidi_reviews.php'

export const useReviewsStore = defineStore('reviews', {
  state: () => ({
    html: '', // Все отзывы в формате HTML
    allReviews: [],
    offset: 0, // Текущий offset
    isLoading: false, // Состояние загрузки
    hasMore: true // Флаг наличия дополнительных отзывов
  }),
  getters: {
    getHtml(state) {
      return state.html
    }
  },
  actions: {
    // Метод для загрузки отзывов
    async loadReviews(initial = false) {
      if (this.isLoading || !this.hasMore) return // Предотвращаем повторные запросы
      this.isLoading = true

      try {
        // Если это начальная загрузка, сбрасываем offset и html
        if (initial) {
          this.offset = 0
          this.html = ''
          this.hasMore = true // Сбрасываем флаг наличия отзывов
        }

        // Отправляем запрос с текущим offset
        const response = await axios.get(phpUrl, {
          params: {
            offset: this.offset
          }
        })

        // Проверяем наличие данных
        const reviewsHtml = response.data.html || ''
        this.hasMore = isShowMore(reviewsHtml)
        this.html += cleanReviewsHtml(reviewsHtml)
        this.offset += 5 // Увеличиваем offset для следующей загрузки
      } catch (error) {
        console.error('Ошибка загрузки отзывов:', error)
      } finally {
        this.isLoading = false
      }
    }
  }
})

function cleanReviewsHtml(reviewsHtml: string): string {
  // Создаем временный контейнер для парсинга строки HTML
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = reviewsHtml

  // Удаляем все элементы, не относящиеся к .review
  Array.from(tempDiv.children).forEach((child) => {
    if (!child.classList.contains('review')) {
      child.remove()
    }
  })

  // Удаляем все элементы с классом .response
  tempDiv.querySelectorAll('.response').forEach((response) => response.remove())

  // Удаляем пустые отзывы
  tempDiv.querySelectorAll('.review').forEach((review) => {
    const text = review.querySelector('.text > div')
    if (!text || text.innerHTML.trim() === '') {
      review.remove()
    }
  })

  // Убираем блоки с классом .show-more
  tempDiv.querySelectorAll('.show-more').forEach((showMore) => showMore.remove())

  // Заменяем ссылки на изображения
  tempDiv.innerHTML = tempDiv.innerHTML.replace(/\/assets\/images\/profile\/client\.png/g, '/assets/img/client.png')

  return tempDiv.innerHTML
}

function isShowMore(html: string): boolean {
  return /<div class="show-more">/.test(html)
}
