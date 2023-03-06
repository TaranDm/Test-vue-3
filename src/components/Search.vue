<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input
      type="text"
      class="search-input"
      placeholder="input movie"
      v-model="searchMovie"
    />
  </form>
  <Loader v-if="searchStore.loader" />
  <div v-else>
    <movie-component
      :isSearch="true"
      v-for="movie of searchStore.movies"
      :key="movie.id"
      :movie="movie"
    />
  </div>
  {{ counter }}

  {{ name }}
  <button @click="add(2)">click</button>
  <button @click="resetStore()">click</button>
</template>

<script setup>
import Loader from "@/components/Loader.vue";
import MovieComponent from "@/components/Movie.vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useSearchStore } from "@/stores/SearchStore";

const searchStore = useSearchStore();
const searchMovie = ref("");
const { counter } = storeToRefs(searchStore);
const { name } = storeToRefs(searchStore);
function add(number) {
  searchStore.$patch((state) => {
    state.counter += number;
  });
}
function resetStore() {
  searchStore.$state = { counter: 0 };
}
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
