<template>
  <div>
    <h1>Lord of the Rings</h1>
    <ul>
      <li v-for="(book, index) in books" :key="index">
        <p><strong>Title:</strong> {{ book.title }} ({{ book.publish_year ? book.publish_year[0] : 'Unknown Year' }})</p>
        <p><strong>Author:</strong> {{ book.author_name ? book.author_name[0] : 'Unknown Author' }}</p>
        <p><strong>Overview:</strong> {{ book.first_sentence ? book.first_sentence[0] : 'No overview available' }}</p>
        
        <img :src="'https://covers.openlibrary.org/b/id/' + book.cover_i + '-M.jpg'" alt="Book Cover" width="150"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const books = ref([]);


async function getData() {
  try {
    let res = await fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
    
    if (!res.ok) throw new Error("Failed to fetch data");
    let data = await res.json();
    
    books.value = data.docs;
  } catch (error) {
    console.error(error);
    alert("Failed to fetch data");
  }
}

onMounted(() => {
  getData();
});
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
