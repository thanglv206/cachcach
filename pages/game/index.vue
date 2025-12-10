<script setup lang="ts">
definePageMeta({
  layout: 'game'
})

const games = [
  {
    title: 'Lật thẻ',
    subtitle: 'Rèn luyện trí nhớ của bạn',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop', // Cards/Gaming related
    link: '/game/flip-card'
  },
  {
    title: 'Thật hay thách',
    subtitle: 'Khám phá bí mật bạn bè',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2532&auto=format&fit=crop',
    link: '/game/truth-or-dare'
  }
]
</script>

<template>
  <div class="overflow-x-auto overflow-y-hidden -mx-6 px-6 snap-x snap-mandatory scrollbar-hide py-4">
    <div class="flex gap-4 pb-2">
      <div 
        v-for="(game, index) in games" 
        :key="index" 
        class="relative flex-shrink-0 w-[75vw] aspect-[4/5] rounded-[2.5rem] overflow-hidden group snap-center"
      >
        <NuxtLink :to="game.link" class="absolute inset-0 z-20"></NuxtLink>
        <!-- Background Image -->
        <img :src="game.image" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Game cover" />
        
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>

        <!-- Content -->
        <div class="absolute inset-0 flex flex-col justify-end items-center pb-12 px-6 text-center pointer-events-none">
          <h2 class="text-4xl font-black text-white mb-2 drop-shadow-md">{{ game.title }}</h2>
          <p class="text-gray-200 text-lg mb-8 font-medium drop-shadow-sm">{{ game.subtitle }}</p>
          
          <UButton 
            size="xl"
            class="rounded-full px-8 py-3 bg-primary hover:bg-[#e68200] text-white font-bold text-lg shadow-[0_4px_14px_0_rgba(255,144,0,0.39)] transition ease-in-out hover:scale-105 duration-200 pointer-events-auto"
            :to="game.link"
          >
            Chơi Ngay <UIcon name="i-heroicons-play-20-solid" class="ml-1" />
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
