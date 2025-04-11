<template>
  <div>
    <ul class="list-none p-0">
    <li v-if="book" class="border border-gray-300 my-2.5 p-2.5">
      <p><strong>Title:</strong> {{ book.title }}</p>
      <p>
        <strong>Author:</strong> {{ book.author_name ? book.author_name[0] : 'Unknown Author' }}
      </p>
      <p>
        <strong>Year of Release:</strong> {{ book.first_publish_year || 'No overview available' }}
      </p>

      <img
        v-if="book.cover_i"
        :src="'https://covers.openlibrary.org/b/id/' + book.cover_i + '-M.jpg'"
        alt="Book Cover"
        width="150"
      />
      <p v-else>No cover available</p>
      <button @click="addToWatchlist(book)" class="mt-2 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800"
      >Add to Watchlist</button>
      <button type="submit">Search</button>
  <div class="book-item-container">
    <li v-if="book" class="book-item">
      <div class="book-image">
        <img
          v-if="book.cover_i"
          :src="'https://covers.openlibrary.org/b/id/' + book.cover_i + '-M.jpg'"
          alt="Book Cover"
          class="book-cover"
        />
        <p v-else>No cover available</p>
      </div>
      <div class="book-details">
        <p><strong>Title:</strong> {{ book.title }}</p>
        <p><strong>Author:</strong> {{ book.author_name ? book.author_name[0] : 'Unknown Author' }}</p>
        <p><strong>Year of Release:</strong> {{ book.first_publish_year || 'No overview available' }}</p>
      </div>
    </li>
  </ul>
  </div>
</template>

<script setup>
defineProps({
  book: Object
})

</script>

<style scoped>

</style>
