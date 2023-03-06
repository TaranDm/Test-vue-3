import { defineStore } from "pinia";
import { useStore } from "./Store";
import { ref } from "vue";
const url =
  "https:api.themoviedb.org/3/search/movie?api_key=71e1f7a7658034c8eb4f4c6e6f1aadff&query=";
// options API
export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    movies: [],
    loader: false,
    counter: 0,
    name: "Dima",
  }),
  actions: {
    async getMovies(search) {
      this.loader = true;
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      this.movies = data.results;
      this.loader = false;
    },
    addToUserMovies(object) {
      const movieStore = useStore();
      movieStore.movies.push({ ...object, isWatched: false });
      movieStore.activeTab = 1;
    },
  },
  getters: {},
});
//composition Api
// export const useSearchStore = defineStore("searchStore", () => {
//   //srate
//   const loader = ref(false);
//   const movies = ref([]);
//   const counter = ref(1);
//   //actions
//   const getMovies = async (search) => {
//     loader.value = true;
//     const res = await fetch(`${url}${search}`);
//     const data = await res.json();
//     movies.value = data.results;
//     loader.value = false;
//   };
//   const addToUserMovies = (object) => {
//     const movieStore = useStore();
//     movieStore.movies.push({ ...object, isWatched: false });
//     movieStore.activeTab = 1;
//   };
//   return {
//     loader,
//     movies,
//     counter,
//     getMovies,
//     addToUserMovies,
//   };
// });
