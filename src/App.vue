<script setup>
import Home from '@/view/home/Home.vue'
  function onSubmit (val) {
    console.log('val', val)
}
</script>

<template>
  <div>
<!--  <Home @onSubmit="onSubmit"/>-->
    <router-view class="view main-content"></router-view>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
