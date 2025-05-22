<template>
  <nav>
    <div class="logo-container">
      <router-link to="/"><img src="/icon/navbaricon.png" alt="Logo" class="logo" /></router-link>
      
    </div>
    <div class="nav-links">
      <router-link to="/about">About Me</router-link>
      <router-link to="/games">Hoots Games</router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #333;
  padding: 0em 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  margin: 0;
}

.logo {
  height: 70px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-top: 5px;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

a {
  color: white;
  text-decoration: none;
  font-weight: normal;
}

a.router-link-active {
  font-weight: bold;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #171d8aaa);
}

</style>

