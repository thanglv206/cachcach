<template>
  <div class="home-page">
    <h1>Welcome to Cheerup Game</h1>
    <p>This is the starting point of your Nuxt 3 application.</p>
    <div class="navigation">
      <NuxtLink to="/game/flip-card" class="game-link">Lật thẻ</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page logic here
</script>

<style scoped>
.home-page {
  text-align: center;
  margin-top: 2rem;
  margin-top: 2rem;
}

.navigation {
  margin-top: 1.5rem;
}

.game-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #00dc82;
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  font-weight: bold;
}

.game-link:hover {
  background-color: #00c16e;
}
</style>
