<template>
  <div class="pb-24 overflow-x-hidden">
    <!-- Existing Hero Section -->
    <div class="flex flex-col items-center justify-center px-6 min-h-[80dvh] lg:min-h-[100dvh]">
      <!-- Badge -->
      <div class="mb-8 text-center">
        <span class="inline-block px-6 py-2 bg-gradient-to-r from-[#f59e0b]/20 to-[#d97706]/20 border border-[#f59e0b]/30 rounded-full text-[#f59e0b] text-sm font-bold tracking-wide uppercase">
          Game tiệc tùng số #1
        </span>
      </div>

      <!-- Headline -->
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 leading-tight">
        <span class="text-white">Tiết lộ sự thật &</span><br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]">khơi gợi sự tò mò</span>
      </h2>

      <!-- Description -->
      <p class="text-gray-400 text-center max-w-md mb-12 text-base leading-relaxed">
        Khám phá những bí mật động trời và thử thách điên rồ cùng bạn bè trong tựa game thẻ bài tương tác hấp dẫn nhất.
      </p>

      <!-- CTA Button -->
      <div class="w-full max-w-md">
        <NuxtLink 
          to="/game"
          class="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white text-lg font-bold py-5 px-8 rounded-2xl shadow-2xl shadow-[#f59e0b]/30 hover:shadow-[#f59e0b]/50 hover:scale-105 transition-all duration-300 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
          </svg>
          Chơi ngay
        </NuxtLink>
      </div>
    </div>

    <!-- Category Strip (Full Width) -->
    <div class="mb-12">
      <div class="bg-[#ff9000] px-4 py-5 shadow-2xl">
        <div class="flex justify-around items-center max-w-md mx-auto uppercase tracking-[0.15em] leading-none">
          <div class="flex items-center gap-2 font-black text-[11px] text-black cursor-pointer">
            <UIcon name="i-heroicons-star-20-solid" class="w-4 h-4" />
            Thử thách
          </div>
          <div class="flex items-center gap-2 font-black text-[11px] text-black cursor-pointer">
            <UIcon name="i-heroicons-heart-20-solid" class="w-4 h-4" />
            Cặp đôi
          </div>
          <div class="flex items-center gap-2 font-black text-[11px] text-black cursor-pointer">
            <UIcon name="i-heroicons-beaker-20-solid" class="w-4 h-4" />
            Tiệc tùng
          </div>
        </div>
      </div>
    </div>

    <!-- Game List -->
    <div class="px-6 space-y-6">
      <!-- Thật Hay Thách -->
      <section class="relative bg-[#1c1c1e] border border-white/10 rounded-[40px] p-7 shadow-2xl">
        <div class="absolute top-6 right-6 w-11 h-11 bg-[#ffb700] rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(255,183,0,0.4)] border border-white/20">
          <UIcon name="i-heroicons-bolt-20-solid" class="w-7 h-7 text-black" />
        </div>
        <div class="mb-5">
          <h3 class="text-2xl font-black mb-1 text-white">Thật Hay Thách</h3>
          <p class="text-gray-400 text-xs font-medium">Hơn 1000 câu hỏi hóc búa.</p>
        </div>
        <div class="flex gap-5">
          <div class="relative w-32 shrink-0 aspect-[3/4] rounded-3xl bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4] border border-white/20 shadow-xl">
            <div class="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/20">
              <span class="text-[9px] font-bold text-white uppercase italic tracking-wider">Top 1</span>
            </div>
          </div>
          <div class="flex flex-col justify-between py-2">
            <div class="flex gap-2">
              <span class="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-black text-[#ffb700] uppercase tracking-widest border border-white/5">Truth</span>
              <span class="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-black text-[#ffb700] uppercase tracking-widest border border-white/5">Dare</span>
            </div>
            <p class="text-[11px] text-gray-300 leading-relaxed font-medium">Khám phá bí mật và thử thách cùng hội bạn thân ngay nào!</p>
            <NuxtLink to="/game/truth-or-dare" class="mt-3 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-2xl py-2.5 px-5 text-sm font-bold text-[#ffb700] hover:bg-white/10 transition-colors">
              <UIcon name="i-heroicons-play-20-solid" class="w-4 h-4" />
              Chơi Ngay
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Lật Thẻ Bài -->
      <section class="relative bg-[#1c1c1e] border border-white/10 rounded-[40px] p-7 shadow-2xl">
        <div class="absolute top-6 right-6 w-11 h-11 bg-[#2c2c2e] rounded-full flex items-center justify-center shadow-lg border border-white/10">
          <UIcon name="i-heroicons-rectangle-stack-20-solid" class="w-7 h-7 text-[#ff9000]" />
        </div>
        <div class="mb-5">
          <h3 class="text-2xl font-black mb-1 text-white">Lật Thẻ Bài</h3>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <p class="text-gray-400 text-xs font-medium">Luật chơi đơn giản</p>
          </div>
        </div>
        <div class="flex gap-5">
          <div class="relative w-32 shrink-0 aspect-[3/4] rounded-3xl bg-[#0f0f0f] border border-white/10 shadow-xl flex items-center justify-center overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
            <UIcon name="i-heroicons-question-mark-circle-20-solid" class="w-12 h-12 text-white/5" />
            <div class="absolute bottom-3 right-3 text-[#ff9000]">
              <UIcon name="i-heroicons-heart-20-solid" class="w-5 h-5" />
            </div>
          </div>
          <div class="flex flex-col justify-between py-2">
            <div class="flex gap-2">
              <span class="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-black text-gray-400 uppercase tracking-widest">Classic</span>
              <span class="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-black text-gray-400 uppercase tracking-widest">Party</span>
            </div>
            <p class="text-[11px] text-gray-300 leading-relaxed font-medium">Mỗi lá bài là một yêu cầu thú vị. Không ai biết trước điều gì sẽ xảy ra!</p>
            <NuxtLink to="/game/drinking-card" class="mt-3 flex items-center justify-center gap-2 bg-[#ff9000] rounded-2xl py-3 px-6 text-sm font-black text-black shadow-[0_8px_20px_rgba(255,144,0,0.3)] hover:brightness-110 transition-all">
               Bắt đầu lật
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Lật Thẻ 18+ -->
      <section class="relative bg-[#1c1c1e] border border-white/10 rounded-[40px] p-7 shadow-2xl overflow-hidden">
        <div class="flex justify-between items-start mb-5">
          <div class="flex items-center gap-4">
             <div class="px-3 py-1.5 bg-pink-500/20 rounded-lg border border-pink-500/30 text-[11px] font-black text-pink-500 uppercase italic leading-none tracking-wider">18+</div>
             <h3 class="text-2xl font-black text-white">Lật Thẻ 18+</h3>
          </div>
        </div>
        <div class="flex gap-6 items-center">
          <div class="flex-1">
            <p class="text-sm text-gray-400 leading-relaxed mb-6 font-medium">
              Hâm nóng bầu không khí với những thử thách táo bạo và nóng bỏng nhất.
            </p>
            <NuxtLink 
              to="/game/drinking-card-18"
              class="w-full flex items-center justify-center bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white text-xs font-black py-4 rounded-2xl shadow-[0_10px_30px_rgba(236,72,153,0.3)] active:scale-95 transition-all mb-2"
            >
              Khám phá ngay
            </NuxtLink>
          </div>
          <div class="relative w-28 aspect-[3/4] rounded-3xl bg-black border border-white/10 flex items-center justify-center rotate-6 shadow-2xl shrink-0 translate-x-2">
             <UIcon name="i-heroicons-sparkles-20-solid" class="w-14 h-14 text-pink-500 opacity-20" />
             <div class="absolute inset-0 flex items-center justify-center">
                <svg class="w-10 h-10 text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
             </div>
          </div>
        </div>
      </section>

      <!-- Chọn Ly -->
      <section class="relative bg-[#1c1c1e] border border-white/10 rounded-[40px] p-7 shadow-2xl">
        <div class="absolute top-6 right-6 w-11 h-11 bg-[#3d2a1a] rounded-full flex items-center justify-center border border-[#5d4037] shadow-lg">
          <UIcon name="i-heroicons-trophy-20-solid" class="w-7 h-7 text-[#ffb700]" />
        </div>
        <div class="mb-5">
          <h3 class="text-2xl font-black mb-1 text-white">Chọn Ly</h3>
          <p class="text-gray-400 text-xs font-medium">Thử thách nhân phẩm</p>
        </div>
        <div class="flex gap-6 items-center">
          <div class="relative w-32 shrink-0 aspect-square rounded-3xl bg-[#0f0f0f] border border-white/10 shadow-inner flex flex-col items-center justify-center gap-3">
            <UIcon name="i-heroicons-beaker-20-solid" class="w-10 h-10 text-[#ffb700] drop-shadow-[0_0_10px_rgba(255,183,0,0.3)]" />
            <div class="flex flex-col gap-1.5 items-center">
               <div class="w-6 h-0.5 bg-[#ffb700]/30 rounded-full"></div>
               <div class="w-8 h-0.5 bg-[#ffb700]/50 rounded-full"></div>
            </div>
          </div>
          <div class="flex-1 space-y-3">
            <div class="flex items-center gap-3 text-xs text-gray-300 font-bold">
               <UIcon name="i-heroicons-check-circle-20-solid" class="w-4 h-4 text-green-500" />
               1 Ly nước lọc
            </div>
            <div class="flex items-center gap-3 text-xs text-gray-300 font-bold">
               <UIcon name="i-heroicons-check-circle-20-solid" class="w-4 h-4 text-orange-500" />
               1 Ly rượu mạnh
            </div>
            <div class="flex items-center gap-3 text-xs text-gray-300 font-bold">
               <UIcon name="i-heroicons-check-circle-20-solid" class="w-4 h-4 text-red-500" />
               1 Ly bí mật...
            </div>
            <NuxtLink to="/game/choose-goblet" class="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-2xl py-3 px-5 text-sm font-bold text-white mt-2 hover:bg-white/10 transition-all">
              <UIcon name="i-heroicons-play-20-solid" class="w-4 h-4 text-white" />
              Chơi Ngay
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Unlucky Box -->
      <section class="relative bg-[#1c1c1e] border border-white/10 rounded-[40px] p-7 shadow-2xl">
        <div class="absolute top-6 right-6 w-11 h-11 bg-red-950/30 rounded-full flex items-center justify-center border border-red-500/20 shadow-lg">
          <UIcon name="i-heroicons-exclamation-triangle-20-solid" class="w-7 h-7 text-red-500" />
        </div>
        <div class="mb-5">
          <h3 class="text-2xl font-black mb-1 text-white">Unlucky Box</h3>
          <p class="text-gray-400 text-xs font-medium">Hộp quà xui xẻo</p>
        </div>
        <div class="flex gap-6 items-center">
          <div class="flex-1">
            <p class="text-[11px] text-gray-400 leading-relaxed mb-6 font-medium">
              Thử thách lòng can đảm với những hình phạt "khó đỡ" nhất. Bạn có dám thử?
            </p>
            <NuxtLink to="/game/unlucky-box" class="w-full flex items-center justify-center gap-2 bg-red-600 rounded-2xl py-3.5 px-6 text-sm font-black text-white shadow-[0_8px_20px_rgba(220,38,38,0.4)] hover:bg-red-700 transition-all">
              <UIcon name="i-heroicons-lock-open-20-solid" class="w-4 h-4" />
              Mở Hộp
            </NuxtLink>
          </div>
          <div class="relative w-32 shrink-0 aspect-square bg-[#0f0f0f] border border-white/10 rounded-3xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform overflow-hidden">
             <UIcon name="i-heroicons-cube-20-solid" class="w-16 h-16 text-red-600 drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]" />
             <div class="absolute top-0 right-0 px-2 py-1 bg-red-600 rounded-bl-xl text-[8px] font-black text-white uppercase italic tracking-tighter">Danger</div>
          </div>
        </div>
      </section>
    </div>

    <!-- Footer mimic -->
    <div class="mt-32 pt-16 border-t border-white/5 max-w-md mx-auto text-center px-6">
      <div class="flex flex-col items-center gap-5 mb-10">
        <div class="flex items-center gap-3">
          <AppLogo size="sm" />
          <span class="text-xl font-black text-white tracking-tight">Cạch Cạch</span>
        </div>
        <p class="text-gray-400 text-sm font-medium">Kết nối bạn bè qua từng thử thách.</p>
      </div>

      <div class="flex justify-center gap-8 mb-12">
        <a href="#" class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all">
          <UIcon name="i-fe-facebook" class="w-6 h-6" />
        </a>
        <a href="#" class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all">
          <UIcon name="i-heroicons-camera-20-solid" class="w-6 h-6" />
        </a>
        <a href="#" class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all">
          <UIcon name="i-heroicons-video-camera-20-solid" class="w-6 h-6" />
        </a>
      </div>

      <div class="flex flex-col gap-4 mb-14">
        <button class="flex items-center justify-center gap-3 bg-white text-black py-3.5 rounded-2xl font-black text-[13px] shadow-2xl transform active:scale-95 transition-all">
          <UIcon name="i-heroicons-device-phone-mobile-20-solid" class="w-5 h-5" />
          Download on App Store
        </button>
        <button class="flex items-center justify-center gap-3 bg-white/5 border border-white/10 text-white py-3.5 rounded-2xl font-black text-[13px] hover:bg-white/10 transition-all">
          <UIcon name="i-heroicons-shopping-bag-20-solid" class="w-5 h-5 opacity-70" />
          Get it on Google Play
        </button>
      </div>

      <div class="flex justify-center gap-8 text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-6">
        <a href="#" class="hover:text-white transition-colors">Điều khoản</a>
        <a href="#" class="hover:text-white transition-colors">Bảo mật</a>
        <a href="#" class="hover:text-white transition-colors">Liên hệ</a>
      </div>
      <p class="text-[10px] text-gray-600 uppercase font-black tracking-[0.3em] pb-10">© 2024 Cạch Cạch Games. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Cạch Cạch – Game Bài Tương Tác Tiệc Tùng Số 1 Việt Nam',
  description: 'Cạch Cạch là game bài tương tác tiệc tùng số 1 Việt Nam. Chơi cùng bạn bè, phá băng cuộc vui, không cần tải app, vào là chơi ngay.',
  ogTitle: 'Cạch Cạch – Game Bài Tương Tác Tiệc Tùng Số 1 Việt Nam',
  ogDescription: 'Cạch Cạch là game bài tương tác tiệc tùng số 1 Việt Nam. Chơi cùng bạn bè, phá băng cuộc vui, không cần tải app, vào là chơi ngay.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterImage: '/og-image.jpg',
})

</script>


<style scoped>
/* Scoped adjustments */
</style>
