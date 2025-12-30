<template>
  <section class="py-12 md:py-20 px-6 lg:px-12 max-w-7xl mx-auto">
    <h2 class="text-2xl md:text-3xl font-black text-white mb-8">Tiêu Điểm Hôm Nay</h2>
    <div :class="[
      'relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row min-h-[400px] transition-all duration-500',
      activeGame.bgClass
    ]">
      <!-- Left Section -->
      <div class="flex-1 p-8 md:p-12 flex flex-col justify-center relative z-10">
        <div class="mb-4">
          <span :class="[
            'inline-flex items-center gap-1.5 px-3 py-1 border rounded-lg text-[10px] font-black uppercase tracking-wider',
            activeGame.badgeClass
          ]">
             <UIcon :name="activeGame.badgeIcon" class="w-3.5 h-3.5" />
             {{ activeGame.badgeText }}
          </span>
        </div>
        <h3 class="text-3xl md:text-4xl font-black text-white mb-4">{{ activeGame.title }}</h3>
        <p class="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md font-medium">
          {{ activeGame.description }}
        </p>
        <div class="flex flex-wrap gap-4">
          <NuxtLink 
            :to="activeGame.link"
            :class="[
              'w-full md:w-auto flex items-center justify-center gap-2 text-white text-sm font-black py-4 px-10 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl',
              activeGame.buttonClass
            ]"
          >
            <UIcon name="i-heroicons-play-20-solid" class="w-5 h-5" />
            {{ activeGame.buttonText }}
          </NuxtLink>
        </div>
      </div>
      <!-- Right Section (Image) -->
      <div class="flex-1 relative">
        <NuxtImg 
          :src="activeGame.image" 
          :alt="activeGame.title" 
          class="w-full h-full object-cover"
          format="webp"
        />
        <div :class="[
          'absolute inset-0 hidden md:block',
          activeGame.overlayClassDesktop
        ]"></div>
        <div :class="[
          'absolute inset-0 md:hidden',
          activeGame.overlayClassMobile
        ]"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface GameSpotlight {
  id: 'drinking-card-18' | 'truth-or-dare' | 'drinking-card';
  title: string;
  description: string;
  image: string;
  link: string;
  badgeText: string;
  badgeIcon: string;
  badgeClass: string;
  bgClass: string;
  buttonClass: string;
  buttonText: string;
  overlayClassDesktop: string;
  overlayClassMobile: string;
}

const props = defineProps<{
  gameId?: 'drinking-card-18' | 'truth-or-dare' | 'drinking-card'
}>()

const games: Record<string, GameSpotlight> = {
  'drinking-card-18': {
    id: 'drinking-card-18',
    title: 'Lật thẻ bài 18+',
    description: 'Phiên bản táo bạo dành cho người trưởng thành. Những thử thách "nóng bỏng" và những bí mật thầm kín sẽ được hé lộ. Bạn có dám thử?',
    image: '/images/spotlight_poker_neon.png',
    link: '/game/drinking-card-18',
    badgeText: '18+ Content',
    badgeIcon: 'i-heroicons-shield-exclamation-20-solid',
    badgeClass: 'bg-red-500/10 border-red-500/20 text-red-500',
    bgClass: 'bg-[#2d1b0e]',
    buttonClass: 'bg-[#e11d48] hover:bg-[#be123c]',
    buttonText: 'Chơi ngay',
    overlayClassDesktop: 'bg-gradient-to-r from-[#2d1b0e] via-transparent to-transparent',
    overlayClassMobile: 'bg-gradient-to-t from-[#2d1b0e] via-transparent to-transparent'
  },
  'truth-or-dare': {
    id: 'truth-or-dare',
    title: 'Thật Hay Thách',
    description: 'Hơn 1000 câu hỏi hóc búa. Khám phá bí mật và thử thách cùng hội bạn thân ngay nào! Game "hot" nhất cho mọi cuộc vui.',
    image: '/images/truth_or_dare_spotlight_v2.png',
    link: '/game/truth-or-dare',
    badgeText: 'Hot Game',
    badgeIcon: 'i-heroicons-bolt-20-solid',
    badgeClass: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    bgClass: 'bg-[#1a122e]',
    buttonClass: 'bg-[#7c3aed] hover:bg-[#6d28d9]',
    buttonText: 'Thử ngay',
    overlayClassDesktop: 'bg-gradient-to-r from-[#1a122e] via-transparent to-transparent',
    overlayClassMobile: 'bg-gradient-to-t from-[#1a122e] via-transparent to-transparent'
  },
  'drinking-card': {
    id: 'drinking-card',
    title: 'Lật Thẻ Bài',
    description: 'Mỗi lá bài là một yêu cầu thú vị. Không ai biết trước điều gì sẽ xảy ra! Trò chơi kinh điển cho mọi cuộc vui.',
    image: '/images/drinking_card_classic_spotlight.png',
    link: '/game/drinking-card',
    badgeText: 'Classic Game',
    badgeIcon: 'i-heroicons-rectangle-stack-20-solid',
    badgeClass: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    bgClass: 'bg-[#0f172a]',
    buttonClass: 'bg-[#1d4ed8] hover:bg-[#1e40af]',
    buttonText: 'Bắt đầu',
    overlayClassDesktop: 'bg-gradient-to-r from-[#0f172a] via-transparent to-transparent',
    overlayClassMobile: 'bg-gradient-to-t from-[#0f172a] via-transparent to-transparent'
  }
}

const defaultGameId = 'drinking-card-18'

const activeGame = computed((): GameSpotlight => {
  const id = props.gameId || defaultGameId
  return games[id] as GameSpotlight || games[defaultGameId] as GameSpotlight
})
</script>
