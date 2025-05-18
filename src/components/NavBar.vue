<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About Me</router-link>
    <router-link to="/games">Hoots Games</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #333;
}
a {
  color: white;
  text-decoration: none;
}
a.router-link-active {
  font-weight: bold;
}
</style>
