<template>
  <div>
    <h1 class="px-100">Books</h1>
    <form @submit.prevent="getData">
      <input v-model="searchQuery" placeholder="Search books..." />
      <button type="submit">Search</button>
    </form>
    <div>
      <BookItem
        v-for="book in books"
        :key="book.key || book.cover_edition_key || book.title"
        :book="book"
        :add-to-watchlist="addToWatchlist"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BookItem from '../components/BookItem.vue'

const books = ref([])
const watchlist = ref([])
const searchQuery = ref('')

async function getData() {
  try {
    const query = searchQuery.value
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`)

    if (!res.ok) throw new Error('Failed to fetch data')

    const data = await res.json()
    books.value = data.docs
  } catch (error) {
    console.error('Error fetching books:', error)
  }
}

const addToWatchlist = (book) => {
  if (!watchlist.value.some((b) => b.key === book.key)) {
    watchlist.value.push(book)
    console.log('Added to watchlist:', book.title)
  }
}

onMounted(() => {
  getData()
})
</script>

<style scoped>
</style>
