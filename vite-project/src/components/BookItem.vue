<template>
  <div>
    <ul class="list-none p-0">
      <li v-if="book" class="border border-gray-300 my-2.5 p-2.5 flex flex-col items-center">
        <p class="text-center"><strong>Title:</strong> {{ book.title }}</p>
        <p class="text-center">
          <strong>Author:</strong> {{ book.author_name ? book.author_name[0] : 'Unknown Author' }}
        </p>
        <p class="text-center">
          <strong>Year of Release:</strong> {{ book.first_publish_year || 'No overview available' }}
        </p>

        <img
          v-if="book.cover_i"
          :src="'https://covers.openlibrary.org/b/id/' + book.cover_i + '-M.jpg'"
          alt="Book Cover"
          class="mx-auto mb-2 w-32 h-auto rounded-lg"
        />
        <p v-else class="text-center text-gray-500">No cover available</p>

        <button
          @click="addToWatchlist(book)"
          class="mt-2 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800"
        >
          Add to Reading list
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  book: Object,
  addToWatchlist: Function,
})
</script>

<style scoped></style>