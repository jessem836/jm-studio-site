<template>
  <div class="games">
    <h1>Hoots Games | Current Projects</h1>
      <div v-for="game in games" :key="game.title">
        <h2>{{ game.title }}</h2>
        <p>{{ game.description }}</p>
        <a :href="game.link" target="_blank">Learn More</a>
      </div>
  </div>
</template>

<script setup>
const games = [
  { title: "Earthborn Evo", description: "A top-down arcade rogue-like space-shooter", link: "https://www.instagram.com/hoots.games/" },
]
</script>
