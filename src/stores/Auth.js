import { defineStore } from "pinia";

export const useAuth = defineStore("Auth", {
  state: () => ({
    userForm: {
      username: "",
      password: "",
    },
    remember: true,
  }),
  actions: {},
  getters: {},
});
