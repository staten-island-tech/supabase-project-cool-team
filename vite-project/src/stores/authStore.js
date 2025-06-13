import { defineStore } from 'pinia'   
import { useReadingListStore } from './readlistStore'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
  }),
  actions: {
    async logIn() {
      this.isLoggedIn = true
      const readingListStore = useReadingListStore()
      await readingListStore.loadReadingList()
    },
    logOut() {
      this.isLoggedIn = false
      const readingListStore = useReadingListStore()
      readingListStore.clearList()
    },
  },
})
