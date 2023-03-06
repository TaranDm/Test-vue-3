import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
export const useStore = defineStore("Store", {
  state: () => ({
    movies: [],
    activeTab: 2,
  }),
  actions: {
    setActiveTab(id) {
      this.activeTab = id;
    },
    toggleWatched(id) {
      const idx = this.movies.findIndex((el) => el.id === id);
      this.movies[idx].isWatched = !this.movies[idx].isWatched;
    },
    deleteMovie(id) {
      this.movies = this.movies.filter((el) => el.id !== id);
    },
  },
  getters: {
    watchMovies(state) {
      return state.movies.filter((el) => el.isWatched);
    },
    totalCountMovies(state) {
      return state.movies.length;
    },
  },
});
// export const useStore = defineStore("Store", () => {
//   const movies = ref([]);
//   const activeTab = ref(2);
//   const moviesInLocalStorage = localStorage.getItem("movies");
//   if (moviesInLocalStorage) {
//     movies.value = JSON.parse(moviesInLocalStorage)._value;
//   }
//   //actions
//   const setActiveTab = (id) => {
//     activeTab.value = id;
//   };
//   const toggleWatched = (id) => {
//     const idx = movies.value.findIndex((el) => el.id === id);
//     movies.value[idx].isWatched = !movies.value[idx].isWatched;
//   };
//   const deleteMovie = (id) => {
//     movies.value = movies.value.filter((el) => el.id !== id);
//   };
//   //getters
//   const watchMovies = computed(() => movies.value.filter((el) => el.isWatched));
//   const totalCountMovies = computed(() => movies.value.length);
//   watch(
//     () => movies,
//     (state) => {
//       localStorage.setItem("movies", JSON.stringify(state));
//     },
//     { deep: true }
//   );
//   return {
//     movies,
//     activeTab,
//     setActiveTab,
//     toggleWatched,
//     deleteMovie,
//     watchMovies,
//     totalCountMovies,
//   };
// });
