<template>
  <div>
  <h1 class="px-100">Books</h1>
  <form @submit.prevent="getData">
    <input v-model="searchQuery" placeholder="Search books..." />
    <button type="submit">Search</button>
  </form>
    <div><BookItem v-for="(book, index) in books" :key="index" :book="book" :add-to-watchlist="addToWatchlist" /></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BookItem from '../components/BookItem.vue'

const books = ref([])
const watchlist = ref([])
<<<<<<< HEAD
const searchQuery = ref('') 

async function getData() {
  try {
    const query = searchQuery.value || 'fiction'
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`)
=======
const searchQuery = ref('')

async function getData() {
  try {
    const query = searchQuery.value.trim() || 'fiction'
    const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
>>>>>>> KImberley

    if (!res.ok) throw new Error('Failed to fetch data')
    const data = await res.json()

    // Try to filter by title relevance
    const filtered = data.docs.filter(book =>
      book.title?.toLowerCase().includes(query.toLowerCase())
    )

    // If nothing matched, show the raw results (fallback)
    books.value = filtered.length > 0 ? filtered : data.docs
  } catch (error) {
    console.error(error)
    alert('Failed to fetch data')
  }
}


onMounted(() => {
  getData()
})

const addToWatchlist = (book) => {
  if (!watchlist.value.includes(book)) {
    watchlist.value.push(book)
    console.log('Added to watchlist:', book.title)
  }
}

</script>