import { defineStore } from "pinia";
export const useStore = defineStore("Store", {
  state: () => ({
    movies: [
      {
        id: 1,
        name: "Spider-Man",
      },
      {
        id: 2,
        name: "Spider-Man",
      },
    ],
  }),
});
