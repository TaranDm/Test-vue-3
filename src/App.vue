<template>
  <main>
    <header class="header">
      <img src="/vite.svg" class="header-logo" />
      <h2>My favorit movies</h2>
    </header>
    <div class="tabs">
      <button
        :class="['btn', { btn_green: movieStore.activeTab === 1 }]"
        @click="setTab(1)"
      >
        Favorite
      </button>
      <button
        :class="['btn', { btn_green: movieStore.activeTab === 2 }]"
        @click="setTab(2)"
      >
        Search
      </button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <div>
        <h3>Watched movies</h3>
        count: {{ movieStore.watchMovies.length }}
        <movie-component
          v-for="item of movieStore.watchMovies"
          :key="item.id"
          :movie="item"
        />
      </div>
      All movies count: {{ movieStore.totalCountMovies }}
      <div>
        <h3>All movies</h3>
        <movie-component
          v-for="item of movieStore.movies"
          :key="item.id"
          :movie="item"
        />
      </div>
    </div>
    <div class="search">Search</div>
  </main>

  <!--        <router-view class="view main-content"></router-view>-->
</template>

<script setup>
import MovieComponent from "@/components/Movie.vue";
import { useStore } from "./stores/Store.js";

const movieStore = useStore();
const setTab = (id) => movieStore.setActiveTab(id);
function onSubmit(val) {
  console.log("val", val);
}
</script>

<style lang="css">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_green {
  background: #37df5c;
}
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
