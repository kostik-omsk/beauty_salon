import { defineStore } from 'pinia'
import type { WallWallpostFull } from '@vkontakte/api-schema-typescript'

export const useVkPostsStore = defineStore({
  id: 'vkPosts',
  state: () => ({
    posts: [] as WallWallpostFull[],
    offset: 0,
    isLoading: false,
    hasMore: true,
    totalLoaded: 0,
    maxPosts: 50
  }),
  actions: {
    async loadPosts() {
      if (this.isLoading || !this.hasMore) return

      this.isLoading = true
      try {
        const count = 10
        const response = await fetch(`vkpost.php?offset=${this.offset}&count=${count}`)
        const data = await response.json()

        if (data.response.items.length > 0) {
          const isFirstLoad = this.posts.length === 10
          if (isFirstLoad) {
            this.posts.pop()
          }

          this.posts.push(...(data.response.items as WallWallpostFull[]))
          this.offset += data.response.items.length
          this.totalLoaded += data.response.items.length

          if (this.totalLoaded >= this.maxPosts) {
            this.hasMore = false
          }
        } else {
          this.hasMore = false
        }
      } catch (error) {
        console.error('Error loading VK posts:', error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
