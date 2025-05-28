<template>
  <div>
    <h1 class="px-100">Books</h1>
    <form @submit.prevent="getData">
      <input v-model="searchQuery" placeholder="Search books..." />
      <button type="submit">Search</button>
    </form>
    <div>
      <BookItem
        v-for="(book, index) in books"
        :key="index"
        :book="book"
        :add-to-watchlist="addToWatchlist"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BookItem from '../components/BookItem.vue'
import { gsap } from 'gsap'
import { onMounted, ref, nextTick } from 'vue'


const books = ref([])
const watchlist = ref([])
const searchQuery = ref('') 

async function getData() {
  try {
    const query = searchQuery.value || 'fiction' 
    const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)

    if (!res.ok) throw new Error('Failed to fetch data')
    const data = await res.json()
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
  if (!watchlist.value.some((b) => b.key === book.key)) {
    watchlist.value.push(book)
    console.log('Added to watchlist:', book.title)
  }
}
</script>

<style scoped>
form {
  margin: 1rem 0;
}
input {
  padding: 0.5rem;
  width: 250px;
}
button {
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
}
</style>