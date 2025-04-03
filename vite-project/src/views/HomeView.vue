<template>
  <div>
    <h1>Popular Movies</h1>
    <h3>Contains data from 2019 to 2024</h3>
    <ul>
      <li v-for="(movie, index) in movies" :key="index">
        <p><strong>Title:</strong> {{ movie.title }} ({{ movie.year }})</p>
        <p><strong>Overview:</strong> {{ movie.overview }}</p>
        <img :src="movie.poster" alt="Movie poster" width="150"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const movies = ref([]);

// Fetch movie data from the Trakt API
async function getData() {
  try {
    let res = await fetch("https://api.trakt.tv/movies/popular", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-key": "YOUR_TRAKT_API_KEY", // Replace with your actual API key
      },
    });

    if (!res.ok) throw new Error("Failed to fetch data");
    let data = await res.json();
    // Assuming the response contains a list of movies, assign it to movies
    movies.value = data;
  } catch (error) {
    console.error(error);
    alert("Failed to fetch data");
  }
}

// Fetch movie data when the component is mounted
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
