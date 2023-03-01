import { createApp } from "vue";
import "@/assets/styles/styles.scss";
import App from "./App.vue";
import router from "./router/index.js";
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);

app.use(router, pinia);
app.mount("#app");
