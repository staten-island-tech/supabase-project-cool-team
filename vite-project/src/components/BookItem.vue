<template>
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
  </div>
</template>

<script>
export default {
  name: 'BookItem',
  props: {
    book: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.book-item-container {
  display: flex;
  overflow-x: auto;
  padding: 20px;
  gap: 20px;
}

.book-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
  padding: 15px;
  list-style-type: none;
  flex-shrink: 0; 
}

.book-image {
  margin-bottom: 15px;
}

.book-cover {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

.book-details p {
  font-size: 14px;
  color: #333;
  margin: 5px 0;
}

.book-details strong {
  font-weight: bold;
}

@media (max-width: 768px) {
  .book-item {
    width: 150px;
  }
}

@media (max-width: 480px) {
  .book-item {
    width: 120px;
  }
}
</style>