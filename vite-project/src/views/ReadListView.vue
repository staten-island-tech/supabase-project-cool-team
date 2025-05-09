<template>
  <div>
    <h1 class="text-center text-2xl mb-4">Read List</h1>
    <ul class="space-y-4">
      <li
        v-for="book in readlist"
        :key="book.key"
        class="bg-white shadow rounded p-4 flex flex-col items-center space-y-2"
      >
        <p><strong>Title:</strong> {{ book.title }}</p>
        <p><strong>Author:</strong> {{ book.author_name?.[0] || 'Unknown Author' }}</p>
        <p>
          <strong>Year:</strong>
          {{ book.first_publish_year || 'No info' }}
        </p>

        <img
          v-if="book.cover_i"
          :src="'https://covers.openlibrary.org/b/id/' + book.cover_i + '-M.jpg'"
          alt="Book Cover"
          class="w-32 h-auto rounded-lg"
        />
        <p v-else class="text-gray-500">No cover available</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useReadlistStore } from '../stores/readlistStore'

const { readlist } = useReadlistStore()
</script>
