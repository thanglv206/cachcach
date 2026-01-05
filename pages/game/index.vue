<script setup lang="ts">
definePageMeta({
  layout: 'game'
})

useSeoMeta({
  title: 'Chơi Cạch Cạch Online | Game Bài Party Chơi Cùng Bạn Bè',
  description: 'Chơi Cạch Cạch online ngay trên trình duyệt. Game bài tiệc tùng tương tác cao, chơi càng đông càng vui, không cần tải app.',
  ogTitle: 'Chơi Cạch Cạch Online | Game Bài Party Chơi Cùng Bạn Bè',
  ogDescription: 'Chơi Cạch Cạch online ngay trên trình duyệt. Game bài tiệc tùng tương tác cao, chơi càng đông càng vui, không cần tải app.',
  ogImage: '/og-image.jpg',
  ogType: 'website',
  ogUrl: 'https://cachcach.org/game',
  twitterCard: 'summary_large_image',
  twitterImage: '/og-image.jpg',
})



const sections = [
  {
    title: 'Top game hot',
    icon: '🔥',
    games: [
      {
        title: 'Drinking card',
        subtitle: 'Thử thách táo bạo cùng bạn bè',
        link: '/game/drinking-card',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8"><path d="M14 3l7 7m-11 1L3 18l3 3 7-7M10 7l7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        color: 'bg-orange-500'
      },
      {
        title: 'Thật hay thách',
        subtitle: 'Nói thật lòng hoặc nhận hình phạt',
        link: '/game/truth-or-dare',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        color: 'bg-purple-500'
      }
    ]
  },
  {
    title: 'Dành cho nhóm bạn',
    icon: '👥',
    games: [
      {
        title: 'Drinking card',
        subtitle: 'Thử thách táo bạo cùng bạn bè',
        link: '/game/drinking-card',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8"><path d="M14 3l7 7m-11 1L3 18l3 3 7-7M10 7l7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        color: 'bg-orange-500'
      },
      {
        title: 'Chọn ly',
        subtitle: 'Tìm phần thưởng trong ly ngẫu nhiên',
        link: '/game/choose-goblet',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8"><path d="M7 2h10l1 7-8 12-8-12 1-7zM7 2v7h10V2M7 13h10" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        color: 'bg-blue-500'
      },
      {
        title: 'Unlucky box',
        subtitle: 'Thử vận may, tránh hộp rỗng',
        link: '/game/unlucky-box',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8"><path d="M21 8l-2-2H5L3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8zM3 8h18M7.5 13h9M12 8v5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        color: 'bg-emerald-500'
      }
    ]
  }
]

const coupleSection = {
  title: 'Dành cho cặp đôi',
  icon: '❤️',
  games: [
    {
      title: 'Drinking card 18+',
      subtitle: 'Hâm nóng tình cảm với những thử thách nóng bỏng.',
      link: '/game/drinking-card/18-plus',
      color: 'from-[#f43f5e] to-[#fb7185]',
      shadow: 'shadow-rose-500/10'
    },
    {
      title: 'Thật hay thách 18+',
      subtitle: 'Những câu hỏi và thử thách táo bạo dành cho đôi lứa.',
      link: '/game/truth-or-dare/18-plus',
      color: 'from-[#ef4444] to-[#b91c1c]',
      shadow: 'shadow-red-500/10'
    }
  ]
}

const carousel = useTemplateRef('carousel')
const coupleCarouselIndex = ref(0)

function onSelect(index: number) {
  coupleCarouselIndex.value = index
}

function select(index: number) {
  coupleCarouselIndex.value = index
  carousel.value?.emblaApi?.scrollTo(index)
}
</script>

<template>
  <div class="space-y-12 pb-10">
    <!-- Top game hot -->
    <section v-if="sections[0]" :key="sections[0].title" class="px-4">
      <div class="flex items-center gap-2 mb-6">
        <span class="text-xl">{{ sections[0].icon }}</span>
        <h2 class="text-xl font-bold text-white">{{ sections[0].title }}</h2>
      </div>

      <div class="overflow-x-auto -mx-4 px-4 pb-4 scrollbar-hide snap-x">
        <div class="flex gap-6 w-max">
          <div 
            v-for="(game, index) in sections[0].games" 
            :key="index" 
            class="w-[220px] bg-[#1a232e] rounded-[44px] p-5 flex flex-col items-center text-center snap-start"
          >
            <!-- Icon Circle -->
            <div 
              class="w-[88px] h-[88px] rounded-full flex items-center justify-center mb-5 shadow-lg shadow-black/20 text-white"
              :class="game.color"
              v-html="game.icon"
            ></div>

            <h3 class="text-lg font-bold text-white mb-2 leading-tight">{{ game.title }}</h3>
            <p class="text-gray-400 text-xs mb-6 line-clamp-2">{{ game.subtitle }}</p>

            <NuxtLink 
              :to="game.link" 
              class="mt-auto w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-white rounded-[20px] text-sm font-bold"
            >
              Chơi ngay
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Couple Section (Carousel) -->
    <section class="pb-4">
      <div class="px-4 flex items-center gap-2 mb-6">
        <span class="text-xl">{{ coupleSection.icon }}</span>
        <h2 class="text-xl font-bold text-white">{{ coupleSection.title }}</h2>
      </div>

      <div class="relative w-full max-w-sm mx-auto">
        <UCarousel 
          ref="carousel"
          :items="coupleSection.games" 
          class="w-full"
          :ui="{ 
            container: 'rounded-[32px]',
            item: 'basis-full'
          }"
          @select="onSelect"
        >
          <template #default="{ item }">
            <div class="px-3 w-full">
              <div 
                class="relative w-full overflow-hidden rounded-[32px] bg-gradient-to-r p-8 shadow-xl active:scale-[0.98] transition-all group shrink-0"
                :class="[item.color, item.shadow]"
              >
                <NuxtLink :to="item.link" class="absolute inset-0 z-30"></NuxtLink>
                
                <div class="relative z-10 flex flex-col items-start gap-4">
                  <span class="px-2.5 py-1 bg-black/20 backdrop-blur-md rounded-full text-[10px] font-bold text-white border border-white/10">18+</span>
                  
                  <div class="max-w-[85%]">
                    <h3 class="text-xl font-black text-white mb-2">{{ item.title }}</h3>
                    <p class="text-white/80 text-xs leading-relaxed line-clamp-2">{{ item.subtitle }}</p>
                  </div>

                  <div class="mt-2 px-5 py-2 bg-white text-rose-500 rounded-full text-xs font-bold shadow-lg group-hover:scale-105 transition-transform">
                    Khám phá
                  </div>
                </div>

                <!-- Background Decorative Icon -->
                <div class="absolute right-[-10px] bottom-[-10px] w-32 h-32 text-white/20 -rotate-12 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
              </div>
            </div>
          </template>
        </UCarousel>

        <!-- Custom Dot Navigation -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-40">
          <button 
            v-for="(game, index) in coupleSection.games" 
            :key="index"
            @click="select(index)"
            class="w-2 h-2 rounded-full transition-all duration-300 border border-white/50"
            :class="[coupleCarouselIndex === index ? 'bg-white border-white scale-125 w-4' : 'bg-transparent hover:bg-white/20']"
            :aria-label="`Go to slide ${index + 1}`"
          />
        </div>
      </div>
    </section>

    <!-- Subsequent Regular Sections ("Dành cho nhóm bạn", etc.) -->
    <section v-for="section in sections.slice(1)" :key="section.title" class="px-4">
      <div class="flex items-center gap-2 mb-6">
        <span class="text-xl">{{ section.icon }}</span>
        <h2 class="text-xl font-bold text-white">{{ section.title }}</h2>
      </div>

      <div class="overflow-x-auto -mx-4 px-4 pb-4 scrollbar-hide snap-x">
        <div class="flex gap-6 w-max">
          <div 
            v-for="(game, index) in section.games" 
            :key="index" 
            class="w-[220px] bg-[#1a232e] rounded-[44px] p-5 flex flex-col items-center text-center snap-start"
          >
            <!-- Icon Circle -->
            <div 
              class="w-[88px] h-[88px] rounded-full flex items-center justify-center mb-5 shadow-lg shadow-black/20 text-white"
              :class="game.color"
              v-html="game.icon"
            ></div>

            <h3 class="text-lg font-bold text-white mb-2 leading-tight">{{ game.title }}</h3>
            <p class="text-gray-400 text-xs mb-6 line-clamp-2">{{ game.subtitle }}</p>

            <NuxtLink 
              :to="game.link" 
              class="mt-auto w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-white rounded-[20px] text-sm font-bold"
            >
              Chơi ngay
            </NuxtLink>
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
