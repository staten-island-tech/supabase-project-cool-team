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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { ref, onMounted, nextTick, watch } from 'vue'
import BookItem from '../components/BookItem.vue'
import { gsap } from 'gsap'
=======
import { ref, onMounted } from 'vue'
import BookItem from '../components/BookItem.vue'
>>>>>>> 6ceeb2f3efa473657745628b309bc031d1e9015d
=======
import { ref, onMounted } from 'vue'
import BookItem from '../components/BookItem.vue'
>>>>>>> 6ceeb2f3efa473657745628b309bc031d1e9015d
=======
import { ref, onMounted } from 'vue'
import BookItem from '../components/BookItem.vue'
>>>>>>> 6ceeb2f3efa473657745628b309bc031d1e9015d

const books = ref([])
const watchlist = ref([])
const searchQuery = ref('')

async function getData() {
  try {
    const query = searchQuery.value.trim() || 'fiction'
    const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)

    if (!res.ok) throw new Error('Failed to fetch data')
    const data = await res.json()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    books.value = data.docs

    await nextTick()

  
    gsap.from(bookItems.value, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power1.out',
    })
=======
=======
>>>>>>> 6ceeb2f3efa473657745628b309bc031d1e9015d
=======
>>>>>>> 6ceeb2f3efa473657745628b309bc031d1e9015d

    const filtered = data.docs.filter(book =>
      book.title?.toLowerCase().includes(query.toLowerCase())
    )
    books.value = filtered.length > 0 ? filtered : data.docs
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6ceeb2f3efa473657745628b309bc031d1e9015d
=======
>>>>>>> 6ceeb2f3efa473657745628b309bc031d1e9015d
=======
>>>>>>> 6ceeb2f3efa473657745628b309bc031d1e9015d
  } catch (error) {
    console.error(error)
    alert('Failed to fetch data')
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
onMounted(async () => {
  await getData()

  gsap.from(heading.value, {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  })
=======
onMounted(() => {
  getData()
>>>>>>> 6ceeb2f3efa473657745628b309bc031d1e9015d
=======
onMounted(() => {
  getData()
>>>>>>> 6ceeb2f3efa473657745628b309bc031d1e9015d
=======
onMounted(() => {
  getData()
>>>>>>> 6ceeb2f3efa473657745628b309bc031d1e9015d
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
