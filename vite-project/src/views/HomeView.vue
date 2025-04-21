<template>
  <div>
    <h1>Lord of the Rings</h1>
    <div class="book-row">
      <BookItem v-for="(book, index) in books" :key="index" :book="book" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BookItem from '../components/BookItem.vue'

const books = ref([])

async function getData() {
  try {
    const res = await fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
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
</script>

<style scoped>
.book-row {
  display: flex;
  flex-wrap: wrap;  
  gap: 16px;
  padding: 10px 0;
  justify-content: flex-start;  
}

@media (max-width: 768px) {
  .book-row {
    justify-content: center;
  }
}
</style>
