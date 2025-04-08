<template>
  <div>
    <h1>Lord of the Rings</h1>
    <BookItem v-for="(book, index) in books" :key="index" :book="book" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BookItem from '../components/BookItem.vue'

const books = ref([])

async function getData() {
  try {
    let res = await fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings')

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
</script>

<style scoped></style>
