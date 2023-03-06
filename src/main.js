import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import moment from "moment";
const pinia = createPinia();
import "@/assets/styles/styles.scss";
const app = createApp(App);

app.use(router);
app.use(moment);
app.use(pinia);
app.use(Antd);
app.mount("#app");
