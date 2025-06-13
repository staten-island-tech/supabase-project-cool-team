import { defineStore } from 'pinia'
import { supabase } from './supabase'
import { useAuthStore } from './authStore'

export const useReadingListStore = defineStore('readingList', {
  state: () => ({
    items: [],
  }),
  actions: {
    async loadReadingList() {
      const authStore = useAuthStore()
      if (!authStore.isLoggedIn) {
        this.items = []
        return
      }

      const { data: { user }, error: userError } = await supabase.auth.getUser()
      if (userError || !user) {
        console.error('Error fetching user:', userError)
        this.items = []
        return
      }

      const { data, error } = await supabase
        .from('reading_lists')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true })

      if (error) {
        console.error('Error loading reading list:', error)
        this.items = []
      } else {
        this.items = data
      }
    },

    async addItem(title, author) {
      const { data: { user }, error: userError } = await supabase.auth.getUser()
      if (userError || !user) {
        console.error('Error fetching user:', userError)
        return
      }

      const { data, error } = await supabase
        .from('reading_lists')
        .insert([{ user_id: user.id, title, author }])
        .select()

      if (error) {
        console.error('Error adding item:', error)
      } else {
        this.items.push(data[0])
      }
    },

    async removeItem(id) {
      const { error } = await supabase
        .from('reading_lists')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Error removing item:', error)
      } else {
        this.items = this.items.filter((item) => item.id !== id)
      }
    },

    clearList() {
      this.items = []
    },
  },
})