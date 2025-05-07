// stores/readlistStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useReadlistStore = defineStore('readlist', () => {
  const readlist = ref([])

  const addToReadlist = (book) => {
    if (!readlist.value.find(b => b.key === book.key)) {
      readlist.value.push(book)
    }
  }

  return { readlist, addToReadlist }
})
