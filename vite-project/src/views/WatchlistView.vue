<template>
  <div class="about">
    <h1>Watchlist</h1>
    <ul>
      <li v-for="(book, index) in watchlist" :key="index" class="border p-2 my-2">
        <p><strong>Title:</strong> {{ book.title }}</p>
        <p><strong>Author:</strong> {{ book.author_name ? book.author_name[0] : 'Unknown Author' }}</p>
        <p><strong>Year:</strong> {{ book.first_publish_year || 'Unknown Year' }}</p>
      </li>
    </ul>
    <router-link to="/">
      <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go Back to Search</button>
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const watchlist = route.query.watchlist || []; 
</script>
