<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <img src="/icon.png" sizes="32x32" alt="website icon" class="logo" />
  <nav-bar />
  <RouterView />
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
