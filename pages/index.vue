<template>
  <div class="overflow-x-hidden bg-[#1a120b] min-h-screen text-white">
    <!-- New Hero Section -->
    <div class="relative pt-6 md:pt-16 pb-10 md:pb-24 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      <!-- Left Content -->
      <div class="flex-1 text-left order-1">
        <!-- Badge -->
        <div class="mb-6">
          <span class="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#f59e0b] text-[10px] font-bold tracking-tight uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]"></span>
            NEW RELEASE 2.0
          </span>
        </div>

        <!-- Headline -->
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
          Khuấy động cuộc vui<br>
          <span class="text-[#f59e0b]">cùng Cạch Cạch!</span>
        </h1>

        <!-- Description -->
        <p class="text-gray-400 max-w-lg mb-10 text-base md:text-lg leading-relaxed font-medium">
          Nền tảng boardgame online cực 'cháy' cho nhóm bạn. Kết nối, thử thách và tạo nên những khoảnh khắc khó quên ngay trên trình duyệt của bạn.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 mb-16">
          <NuxtLink 
            to="/game"
            class="flex items-center gap-3 bg-[#f59e0b] text-black text-base font-black py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 active:scale-95 shadow-[0_8px_25px_rgba(245,158,11,0.3)]"
          >
            <UIcon name="i-heroicons-play-circle-20-solid" class="w-6 h-6" />
            Chơi ngay
          </NuxtLink>
          <NuxtLink 
            to="/contact"
            class="flex items-center gap-3 bg-white/5 border border-white/10 text-white text-base font-black py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 active:scale-95"
          >
            <UIcon name="i-heroicons-chat-bubble-left-right-20-solid" class="w-6 h-6" />
            Liên hệ
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div class="flex items-center gap-6 md:gap-10 border-t border-white/10 pt-10">
          <div>
            <div class="text-2xl md:text-3xl font-black text-white">50K+</div>
            <div class="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Người chơi</div>
          </div>
          <div class="w-px h-10 bg-white/10"></div>
          <div>
            <div class="text-2xl md:text-3xl font-black text-white">100+</div>
            <div class="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Thử thách</div>
          </div>
          <div class="w-px h-10 bg-white/10"></div>
          <div>
            <div class="text-2xl md:text-3xl font-black text-white">1K+</div>
            <div class="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Lượt truy cập</div>
          </div>
        </div>
      </div>

      <!-- Right Content (Image) -->
      <div class="flex-1 relative order-2">
        <div class="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
          <NuxtImg 
            src="/images/hero_people_playing.png" 
            alt="Friends playing games" 
            class="w-full h-auto object-cover aspect-[4/3] lg:aspect-square xl:aspect-[4/3]"
            format="webp"
            loading="eager"
          />
        </div>
        
        <!-- Subtle glow background -->
        <div class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f59e0b]/10 blur-[100px] rounded-full"></div>
      </div>
    </div>

    <!-- Feature Strip -->
    <div class="bg-[#241a12] border-y border-white/5 py-8 md:py-12 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        <div class="flex flex-col items-center gap-4 group">
          <div class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#f59e0b]/10 group-hover:border-[#f59e0b]/30 transition-all duration-300">
            <UIcon name="i-heroicons-device-phone-mobile" class="w-7 h-7 text-[#4a90e2]" />
          </div>
          <span class="text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">Đa nền tảng</span>
        </div>
        <div class="flex flex-col items-center gap-4 group">
          <div class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#f59e0b]/10 group-hover:border-[#f59e0b]/30 transition-all duration-300">
            <UIcon name="i-heroicons-bolt-20-solid" class="w-7 h-7 text-[#a855f7]" />
          </div>
          <span class="text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">Không cần cài đặt</span>
        </div>
        <div class="flex flex-col items-center gap-4 group">
          <div class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#f59e0b]/10 group-hover:border-[#f59e0b]/30 transition-all duration-300">
            <UIcon name="i-heroicons-user-group-20-solid" class="w-7 h-7 text-[#22c55e]" />
          </div>
          <span class="text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">Chơi cùng bạn bè</span>
        </div>
        <div class="flex flex-col items-center gap-4 group">
          <div class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#f59e0b]/10 group-hover:border-[#f59e0b]/30 transition-all duration-300">
            <UIcon name="i-heroicons-squares-2x2-20-solid" class="w-7 h-7 text-[#ef4444]" />
          </div>
          <span class="text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">Game đa dạng</span>
        </div>
      </div>
    </div>

    <!-- Weekly Spotlight -->
    <GameWeeklySpotlight :game-id="randomGameId" />

    <!-- Game List -->
    <section class="py-12 md:py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-14">
        <div>
          <h2 class="text-3xl md:text-4xl font-black text-white mb-3">Kho Game Độc Đáo</h2>
          <p class="text-gray-500 font-bold text-base md:text-lg">Tuyển tập những game "gây nghiện" nhất cho hội bạn thân</p>
        </div>
        <NuxtLink to="/game" class="flex items-center gap-2 text-[#f59e0b] font-black text-sm uppercase tracking-widest hover:underline group px-4 py-2 bg-white/5 rounded-full border border-white/5">
          Xem tất cả
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        <!-- Thật Hay Thách -->
        <section class="bg-[#241a12] rounded-[32px] md:rounded-[40px] p-6 md:p-8 flex flex-col sm:flex-row gap-6 md:gap-8 hover:bg-[#2d2118] transition-all border border-white/5 hover:border-[#f59e0b]/20 group">
          <!-- Card Illustration -->
          <div class="w-full sm:w-40 aspect-square sm:aspect-[3/4] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#80316d] to-[#4e1b41] flex items-center justify-center relative shrink-0 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
             <NuxtImg src="/images/games/truth-or-dare.png" alt="Thật Hay Thách" class="absolute inset-0 w-full h-full object-cover" />
             <div class="absolute top-4 right-4 px-2.5 py-1 bg-[#f43f5e] rounded-lg text-[9px] font-black text-white italic tracking-tighter">HOT</div>
          </div>
          <!-- Card Content -->
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start mb-1">
                 <h3 class="text-2xl font-black text-white group-hover:text-[#f59e0b] transition-colors">Thật Hay Thách</h3>
                 <div class="w-9 h-9 rounded-full bg-[#f43f5e]/10 flex items-center justify-center border border-[#f43f5e]/20">
                    <UIcon name="i-heroicons-bolt-20-solid" class="w-5 h-5 text-[#f43f5e]" />
                 </div>
              </div>
              <p class="text-gray-500 text-xs font-bold mb-3 md:mb-5 tracking-tight">Hơn 1000 câu hỏi hóc búa.</p>
              <div class="flex gap-2 mb-4 md:mb-6">
                 <span class="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-black text-[#f43f5e] uppercase tracking-wider border border-white/5">Truth</span>
                 <span class="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-black text-[#f59e0b] uppercase tracking-wider border border-white/5">Dare</span>
              </div>
              <p class="text-sm text-gray-400 leading-relaxed mb-6 md:mb-8 font-medium">Khám phá bí mật và thử thách cùng hội bạn thân ngay nào!</p>
            </div>
            <NuxtLink to="/game/truth-or-dare" class="w-full flex items-center justify-center gap-3 bg-[#a855f7] rounded-2xl py-3.5 text-sm font-black text-white shadow-[0_8px_25px_rgba(168,85,247,0.2)] hover:scale-105 transition-all active:scale-95">
               <UIcon name="i-heroicons-play-20-solid" class="w-5 h-5" />
               Chơi Ngay
            </NuxtLink>
          </div>
        </section>

        <!-- Drinking Card -->
        <section class="bg-[#241a12] rounded-[32px] md:rounded-[40px] p-6 md:p-8 flex flex-col sm:flex-row gap-6 md:gap-8 hover:bg-[#2d2118] transition-all border border-white/5 hover:border-[#4a90e2]/20 group">
          <!-- Card Illustration -->
          <div class="w-full sm:w-40 aspect-square sm:aspect-[3/4] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center relative shrink-0 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
             <NuxtImg src="/images/games/drinking-card.png" alt="Drinking Card" class="absolute inset-0 w-full h-full object-cover" />
          </div>
          <!-- Card Content -->
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start mb-1">
                 <h3 class="text-2xl font-black text-white group-hover:text-[#4a90e2] transition-colors">Drinking Card</h3>
                 <div class="w-9 h-9 rounded-full bg-[#4a90e2]/10 flex items-center justify-center border border-[#4a90e2]/20">
                    <UIcon name="i-heroicons-rectangle-stack-20-solid" class="w-5 h-5 text-[#4a90e2]" />
                 </div>
              </div>
              <div class="flex items-center gap-2 mb-3 md:mb-5">
                <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                <p class="text-gray-500 text-xs font-bold tracking-tight">Luật chơi đơn giản</p>
              </div>
              <div class="flex gap-2 mb-4 md:mb-6">
                 <span class="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-black text-gray-400 uppercase tracking-wider border border-white/5">Classic</span>
                 <span class="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-black text-gray-400 uppercase tracking-wider border border-white/5">Party</span>
              </div>
              <p class="text-sm text-gray-400 leading-relaxed mb-6 md:mb-8 font-medium">Mỗi lá bài là một yêu cầu thú vị. Không ai biết trước điều gì sẽ xảy ra!</p>
            </div>
            <NuxtLink to="/game/drinking-card" class="w-full flex items-center justify-center gap-3 bg-[#1d4ed8] rounded-2xl py-4 text-sm font-black text-white shadow-[0_8px_25px_rgba(29,78,216,0.2)] hover:scale-105 transition-all active:scale-95">
               <UIcon name="i-heroicons-play-20-solid" class="w-5 h-5" />
               Bắt đầu lật
            </NuxtLink>
          </div>
        </section>

        <!-- Chọn Ly -->
        <section class="bg-[#241a12] rounded-[32px] md:rounded-[40px] p-6 md:p-8 flex flex-col sm:flex-row gap-6 md:gap-8 hover:bg-[#2d2118] transition-all border border-white/5 hover:border-[#f59e0b]/20 group">
          <!-- Card Illustration -->
          <div class="w-full sm:w-40 aspect-square sm:aspect-[3/4] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#4b3621] to-[#2c1d10] flex items-center justify-center relative shrink-0 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
             <NuxtImg src="/images/games/choose-goblet.png" alt="Chọn Ly" class="absolute inset-0 w-full h-full object-cover" />
          </div>
          <!-- Card Content -->
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start mb-1">
                 <h3 class="text-2xl font-black text-white group-hover:text-[#f59e0b] transition-colors">Chọn Ly</h3>
                 <div class="w-9 h-9 rounded-full bg-[#f59e0b]/10 flex items-center justify-center border border-[#f59e0b]/20">
                    <UIcon name="i-heroicons-trophy-20-solid" class="w-5 h-5 text-[#f59e0b]" />
                 </div>
              </div>
              <p class="text-gray-500 text-xs font-bold mb-3 md:mb-5 tracking-tight">Thử thách nhân phẩm</p>
              <div class="space-y-2 mb-4 md:mb-6">
                <div class="flex items-center gap-3 text-[11px] text-gray-400 font-bold">
                   <UIcon name="i-heroicons-check-circle-20-solid" class="w-4 h-4 text-green-500" />
                   1 ly
                </div>
                <div class="flex items-center gap-3 text-[11px] text-gray-400 font-bold">
                   <UIcon name="i-heroicons-check-circle-20-solid" class="w-4 h-4 text-orange-500" />
                   2 ly
                </div>
                <div class="flex items-center gap-3 text-[11px] text-gray-400 font-bold">
                   <UIcon name="i-heroicons-check-circle-20-solid" class="w-4 h-4 text-red-500" />
                   3 ly
                </div>
              </div>
            </div>
            <NuxtLink to="/game/choose-goblet" class="w-full flex items-center justify-center gap-3 bg-[#92400e] rounded-2xl py-3.5 text-sm font-black text-white shadow-[0_8px_25px_rgba(146,64,14,0.2)] hover:scale-105 transition-all active:scale-95">
               <UIcon name="i-heroicons-play-20-solid" class="w-5 h-5" />
               Chơi Ngay
            </NuxtLink>
          </div>
        </section>

        <!-- Unlucky Box -->
        <section class="bg-[#241a12] rounded-[32px] md:rounded-[40px] p-6 md:p-8 flex flex-col sm:flex-row gap-6 md:gap-8 hover:bg-[#2d2118] transition-all border border-white/5 hover:border-[#ef4444]/20 group">
          <!-- Card Illustration -->
          <div class="w-full sm:w-40 aspect-square sm:aspect-[3/4] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#450a0a] to-[#000000] flex flex-col items-center justify-center relative shrink-0 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
             <NuxtImg src="/images/games/unlucky-box.png" alt="Unlucky Box" class="absolute inset-0 w-full h-full object-cover" />
             <div class="absolute top-4 right-4 px-2 py-0.5 bg-[#ef4444] rounded text-[8px] font-black text-white tracking-tighter">DANGER</div>
          </div>
          <!-- Card Content -->
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start mb-1">
                 <h3 class="text-2xl font-black text-white group-hover:text-[#ef4444] transition-colors">Unlucky Box</h3>
                 <div class="w-9 h-9 rounded-full bg-[#ef4444]/10 flex items-center justify-center border border-[#ef4444]/20">
                    <UIcon name="i-heroicons-exclamation-triangle-20-solid" class="w-5 h-5 text-[#ef4444]" />
                 </div>
              </div>
              <p class="text-gray-500 text-xs font-bold mb-2 md:mb-5 tracking-tight">Hộp quà xui xẻo</p>
              <div class="py-2 md:py-6 min-h-[10px] md:min-h-[40px]"></div>
              <p class="text-sm text-gray-400 leading-relaxed mb-4 md:mb-8 font-medium">Thử thách lòng can đảm với những hình phạt "khó đỡ" nhất. Bạn có dám thử?</p>
            </div>
            <NuxtLink to="/game/unlucky-box" class="w-full flex items-center justify-center gap-3 bg-[#b91c1c] rounded-2xl py-4 text-sm font-black text-white shadow-[0_8px_25px_rgba(185,28,28,0.2)] hover:scale-105 transition-all active:scale-95">
               <UIcon name="i-heroicons-lock-closed-20-solid" class="w-5 h-5" />
               Mở Hộp
            </NuxtLink>
          </div>
        </section>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 md:py-24 bg-[#241a12]/50 border-y border-white/5">
      <div class="px-6 lg:px-12 max-w-7xl mx-auto">
        <div class="text-center mb-12 md:mb-18">
          <h2 class="text-3xl md:text-4xl font-black text-white mb-4">Người dùng nói về Cạch Cạch</h2>
          <div class="w-16 h-1 bg-[#f59e0b] mx-auto rounded-full"></div>
        </div>

        <div class="relative max-w-6xl mx-auto">
          <UCarousel
            ref="testimonialCarousel"
            v-slot="{ item }"
            :items="testimonials"
            class="w-full"
            :ui="{ 
              item: 'basis-full md:basis-1/3 px-3 md:px-4'
            }"
            @select="onTestimonialSelect"
          >
            <div class="bg-[#2d2118] rounded-[32px] p-8 h-full border border-white/5 hover:border-[#f59e0b]/20 transition-all group shadow-xl">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-[#f59e0b]/20 bg-[#1a120b]">
                  <NuxtImg :src="item.avatar" :alt="item.name" class="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 class="font-black text-white text-lg">{{ item.name }}</h4>
                  <div class="flex gap-0.5 mt-1">
                    <UIcon v-for="i in 5" :key="i" name="i-heroicons-star-20-solid" class="w-4 h-4 text-[#f59e0b]" />
                  </div>
                </div>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed font-medium italic">
                "{{ item.message }}"
              </p>
            </div>
          </UCarousel>

          <!-- Custom Dot Navigation -->
          <div class="flex justify-center gap-2 mt-10 md:mt-14">
            <button 
              v-for="(_, index) in testimonials" 
              :key="index"
              @click="selectTestimonial(index)"
              class="h-1.5 rounded-full transition-all duration-300"
              :class="[currentTestimonialIndex === index ? 'bg-[#f59e0b] w-8' : 'bg-white/10 w-2 hover:bg-white/20']"
              :aria-label="`Go to testimonial ${index + 1}`"
            />
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const spotlightGames = ['drinking-card-18', 'truth-or-dare', 'drinking-card'] as const

// Get a deterministic index based on the current date to ensure it changes daily 
// and doesn't repeat the previous day's game (cycles through the list)
const randomGameId = computed(() => {
  const now = new Date()
  const dayIndex = Math.floor(now.getTime() / (1000 * 60 * 60 * 24))
  return spotlightGames[dayIndex % spotlightGames.length]
})

useHead({
  link: [{ rel: 'canonical', href: config.public.siteUrl as string }]
})

useSeoMeta({
  title: 'Cạch Cạch – Game Bài Tương Tác Tiệc Tùng Số 1 Việt Nam',
  description: 'Cạch Cạch là game bài tương tác tiệc tùng số 1 Việt Nam. Chơi cùng bạn bè, phá băng cuộc vui, không cần tải app, vào là chơi ngay.',
  ogTitle: 'Cạch Cạch – Game Bài Tương Tác Tiệc Tùng Số 1 Việt Nam',
  ogDescription: 'Cạch Cạch là game bài tương tác tiệc tùng số 1 Việt Nam. Chơi cùng bạn bè, phá băng cuộc vui, không cần tải app, vào là chơi ngay.',
  ogImage: '/og-image.jpg',
  ogType: 'website',
  ogUrl: config.public.siteUrl as string,
  twitterCard: 'summary_large_image',
  twitterImage: '/og-image.jpg',
})

const testimonials = [
  {
    name: 'Hoàng Anh',
    message: 'Nền tảng tuyệt vời để gắn kết bạn bè! Game Thật Hay Thách rất nhiều câu hỏi thú vị, giao diện lại mượt mà.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HoangAnh'
  },
  {
    name: 'Khánh Linh',
    message: 'Thích nhất là không cần tải app. Mở link trên điện thoại là cả đám chơi được luôn. Rất tiện lợi!',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhanhLinh'
  },
  {
    name: 'Tuấn Minh',
    message: 'Game Chọn Ly làm mấy buổi nhậu của bọn mình vui hơn hẳn. Hồi hộp cực kỳ, 10 điểm cho sự sáng tạo.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanMinh'
  },
  {
    name: 'Minh Thư',
    message: 'Giao diện dark mode nhìn cực kỳ premium. Các hiệu ứng chuyển động mượt mà, cảm giác chơi rất thích.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhThu'
  },
  {
    name: 'Đức Huy',
    message: 'Drinking Card 18+ thực sự là cứu cánh cho những buổi hẹn hò cần thêm chút "nhiệt". Rất đáng thử!',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucHuy'
  },
  {
    name: 'Bảo Ngọc',
    message: 'Mình rất thích cách team nội dung biên soạn câu hỏi. Vừa hài hước lại vừa có chiều sâu, không bị nhàm chán.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoNgoc'
  },
  {
    name: 'Thanh Tùng',
    message: 'Unlucky Box đúng là thử thách nhân phẩm. Cả nhóm mình đã có những trận cười ra nước mắt với cái hộp này.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThanhTung'
  },
  {
    name: 'Lan Hương',
    message: 'Màu sắc và font chữ được lựa chọn rất tinh tế. Tổng thể website nhìn rất hiện đại và chuyên nghiệp.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanHuong'
  },
  {
    name: 'Quốc Bảo',
    message: 'Đã chơi qua nhiều web game nhưng Cạch Cạch vẫn là chân ái vì cộng đồng và nội dung thuần Việt.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuocBao'
  },
  {
    name: 'Mai Phương',
    message: 'Hệ thống blog chia sẻ mẹo chơi cũng rất hay. Giúp mình biết cách "phá băng" hiệu quả hơn trong các bữa tiệc.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiPhuong'
  },
  {
    name: 'Hữu Phước',
    message: 'Mong website sớm ra thêm nhiều game mới nữa. Hiện tại các game này đã quá đủ để "cháy" hết mình rồi!',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuuPhuoc'
  },
  {
    name: 'Thu Trà',
    message: 'Mỗi lần buồn chán là lại rủ bạn bè vào làm vài ván Thật Hay Thách. Stress bay biến luôn trong một nốt nhạc.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThuTra'
  }
]

const testimonialCarousel = useTemplateRef('testimonialCarousel')
const currentTestimonialIndex = ref(0)

function onTestimonialSelect(index: number) {
  currentTestimonialIndex.value = index
}

function selectTestimonial(index: number) {
  currentTestimonialIndex.value = index
  testimonialCarousel.value?.emblaApi?.scrollTo(index)
}

let autoplayTimer: any = null

onMounted(() => {
  autoplayTimer = setInterval(() => {
    if (!testimonialCarousel.value) return
    const nextIndex = (currentTestimonialIndex.value + 1) % testimonials.length
    selectTestimonial(nextIndex)
  }, 6000)
})

onUnmounted(() => {
  if (autoplayTimer) clearInterval(autoplayTimer)
})
</script>


<style scoped>
/* Scoped adjustments */
</style>
