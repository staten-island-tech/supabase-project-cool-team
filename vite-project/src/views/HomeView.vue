<template>
  <div>
  <h1 class="px-100">Lord of the Rings</h1>
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
const searchQuery = ref('') 

async function getData() {
  try {
    let res = await fetch('https://openlibrary.org/search.json?q=${query}')
    
    if (!res.ok) throw new Error('Failed to fetch data')
    let data = await res.json()
    
    books.value = data.docs
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

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 20px 0;
  justify-content: flex-start;
}

@media (max-width: 768px) {
  ul {
    justify-content: center;
  }
}
</style>

