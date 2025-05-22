<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';

</script>

<template>
  <NavBar />
  <Transition name="fade" mode="out-in">
      <router-view />
  </Transition>
</template>

<style scoped>

html, body {

  margin: 0;
  padding: 0;
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>
