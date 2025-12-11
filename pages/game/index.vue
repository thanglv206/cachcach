<script setup lang="ts">
definePageMeta({
  layout: 'game'
})

const topGames = [
  {
    title: 'Chọn ly',
    subtitle: 'Tìm phần thưởng trong các ly ngẫu nhiên',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2670&auto=format&fit=crop',
    link: '/game/choose-goblet'
  },
  {
    title: 'Unlucky Box',
    subtitle: 'Đừng chọn phải ô không may mắn',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2670&auto=format&fit=crop',
    link: '/game/unlucky-box'
  },
  {
    title: 'Drinking card',
    subtitle: 'Thử thách vui vẻ cho đôi lứa',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop',
    link: '/game/drinking-card'
  },
  {
    title: 'Thật hay thách',
    subtitle: 'Khám phá bí mật bạn bè',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2532&auto=format&fit=crop',
    link: '/game/truth-or-dare'
  }
]

const coupleGames = [
  {
    title: 'Drinking card',
    subtitle: 'Thử thách vui vẻ cho đôi lứa',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop',
    link: '/game/drinking-card'
  },
  {
    title: 'Lật thẻ bài 18+',
    subtitle: 'Sắp ra mắt',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2574&auto=format&fit=crop',
    link: '/game/flip-card-18'
  }
]
</script>

<template>
  <div class="space-y-8 pb-4">
    <!-- Top Game Hot Section -->
    <section>
      <h2 class="text-xl font-black text-white mb-3 px-2">Top game hot</h2>
      <div class="overflow-x-auto overflow-y-hidden -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
        <div class="flex gap-4 pb-2 pr-6">
          <div 
            v-for="(game, index) in topGames" 
            :key="index" 
            class="relative flex-shrink-0 w-[70vw] max-w-[320px] aspect-[3/4] rounded-3xl overflow-hidden group snap-center"
          >
            <NuxtLink :to="game.link" class="absolute inset-0 z-20"></NuxtLink>
            <!-- Background Image -->
            <img :src="game.image" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Game cover" />
            
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>

            <!-- Content -->
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <h3 class="text-xl font-black text-white mb-1">{{ game.title }}</h3>
              <p class="text-gray-300 text-xs">{{ game.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dành cho cặp đôi Section -->
    <section>
      <h2 class="text-xl font-black text-white mb-3 px-2">Dành cho cặp đôi</h2>
      <div class="overflow-x-auto overflow-y-hidden -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
        <div class="flex gap-4 pb-2 pr-6">
          <div 
            v-for="(game, index) in coupleGames" 
            :key="index" 
            class="relative flex-shrink-0 w-[70vw] max-w-[320px] aspect-[3/4] rounded-3xl overflow-hidden group snap-center"
          >
            <NuxtLink :to="game.link" class="absolute inset-0 z-20"></NuxtLink>
            <!-- Background Image -->
            <img :src="game.image" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Game cover" />
            
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>

            <!-- Content -->
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <h3 class="text-xl font-black text-white mb-1">{{ game.title }}</h3>
              <p class="text-gray-300 text-xs">{{ game.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
