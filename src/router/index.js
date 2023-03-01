import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/view/home/Home.vue'

const routes= [
    {
    path: "/",
    name: "home",
    component: Home,
  },];

const router = new createRouter({
 history: createWebHistory(),
  routes,
});



export default router;
