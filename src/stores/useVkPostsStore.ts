import { defineStore } from 'pinia'
import type { WallWallpostFull } from '@vkontakte/api-schema-typescript'

export const useVkPostsStore = defineStore({
  id: 'vkPosts',
  state: () => ({
    posts: [] as WallWallpostFull[]
  }),
  actions: {
    async loadPosts() {
      try {
        const response = await fetch('vkpost.php')
        const data = await response.json()
        this.posts = data.response.items as WallWallpostFull[]
      } catch (error) {
        console.error('Error loading VK posts:', error)
      }
    }
  }
})
