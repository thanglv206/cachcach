<template>
  <div class="container mx-auto min-h-screen flex flex-col">
    <header class="p-4 bg-gray-100 dark:bg-gray-800">
      <nav>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/game">Game</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main class="flex-1 p-4">
      <slot />
    </main>
    <footer class="p-4 bg-gray-100 dark:bg-gray-800 text-center">
      <p>&copy; 2024 Cạch Cạch</p>
    </footer>
  </div>
</template>

