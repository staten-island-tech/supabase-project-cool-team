// src/stores/authStore.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false, // Assuming false initially, this could come from your authentication system
  }),
  actions: {
    logIn() {
      this.isLoggedIn = true
    },
    logOut() {
      this.isLoggedIn = false
    }
  }
})
