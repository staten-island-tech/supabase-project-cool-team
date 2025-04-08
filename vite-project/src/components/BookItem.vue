<template>
  <div>
    <li v-if="book">
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
    </li>
  </div>
</template>

<script setup>
defineProps({
  book: {
    type: Object,
  },
})
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid #ddd;
  margin: 10px 0;
  padding: 10px;
}

p {
  margin: 5px 0;
  color: rgb(168, 0, 22);
  font-size: 18px;
}

h1 {
  color: rgb(133, 0, 11);
  font-size: 36px;
}

h3 {
  color: rgb(133, 0, 11);
}

img {
  width: 100px;
  height: auto;
}
</style>
