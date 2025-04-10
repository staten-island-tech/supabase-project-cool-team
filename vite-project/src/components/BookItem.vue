<template>
  <div class="book-card">
    <img
      v-if="book.cover_i"
      :src="`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`"
      alt="Book Cover"
      class="book-image"
    />
    <p v-else class="no-cover">No cover available</p>

    <div class="book-info">
      <p><strong>Title:</strong> {{ book.title }}</p>
      <p><strong>Author:</strong> {{ book.author_name?.[0] || 'Unknown' }}</p>
      <p><strong>Year:</strong> {{ book.first_publish_year || 'N/A' }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  book: Object
})
</script>

<style scoped>
.book-card {
  width: 180px;
  flex-shrink: 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-image {
  width: 100px;
  height: auto;
  margin-bottom: 8px;
}

.no-cover {
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
  text-align: center;
}

.book-info p {
  margin: 2px 0;
  text-align: center;
}
</style>
