<template>
  <div
    v-if="book"
    class="bg-white shadow-md rounded-xl border border-gray-200 p-4 flex flex-col items-center space-y-2"
  >
    <p class="text-center"><strong>Title:</strong> {{ book.title }}</p>
    <p class="text-center"><strong>Author:</strong> {{ getAuthorName(book) }}</p>
    <p class="text-center">
      <strong>Year of Release:</strong>
      {{ book.first_publish_year || 'No overview available' }}
    </p>
    <img
      v-if="book.cover_i"
      :src="`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`"
      alt="Book Cover"
      class="mx-auto mb-2 w-32 h-auto rounded-lg"
    />
    <p v-else class="text-center text-gray-500">No cover available</p>

    <button
      ref="addBtn"
      @click="handleAddToReadlist(book)"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      class="mt-2 px-4 py-2 bg-red-700 text-white rounded"
    >
      Add to Readlist
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import gsap from 'gsap'
import { useReadingListStore } from '../stores/readlistStore'

const props = defineProps({
  book: Object,
})

const readlistStore = useReadingListStore()
const addBtn = ref(null)

function getAuthorName(book) {
  if (!book || !book.author_name?.length) {
    return 'Unknown Author'
  }
  return book.author_name[0]
}

function handleAddToReadlist(book) {
  readlistStore.addItem(book.title, getAuthorName(book))
}

function handleMouseEnter() {
  if (!addBtn.value) return
  gsap.to(addBtn.value, {
    boxShadow: '0 0 20px rgba(255, 0, 0, 0.8)',
    duration: 0.3,
    ease: 'power2.out',
  })
}

function handleMouseLeave() {
  if (!addBtn.value) return
  gsap.to(addBtn.value, {
    boxShadow: 'none',
    duration: 0.3,
    ease: 'power2.out',
  })
}
</script>
