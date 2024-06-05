import { defineStore } from 'pinia'
import type { WallWallpostFull } from '@vkontakte/api-schema-typescript'

export const useVkPostsStore = defineStore({
  id: 'vkPosts',
  state: () => ({
    posts: [] as WallWallpostFull[],
    offset: 0, // добавляем offset в state
    isLoading: false, // флаг для предотвращения множественных запросов
    hasMore: true // флаг, указывающий на наличие дополнительных постов
  }),
  actions: {
    async loadPosts() {
      if (this.isLoading || !this.hasMore) return

      this.isLoading = true
      try {
        const response = await fetch(`vkpost.php?offset=${this.offset}`)
        const data = await response.json()

        if (data.response.items.length > 0) {
          this.posts.push(...(data.response.items as WallWallpostFull[]))
          this.offset += data.response.items.length
        } else {
          this.hasMore = false // если больше нет постов, устанавливаем флаг в false
        }
      } catch (error) {
        console.error('Error loading VK posts:', error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
