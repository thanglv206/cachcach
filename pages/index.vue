<template>
  <div class="flex flex-col items-center justify-center px-6 pb-20 min-h-[calc(100vh-80px)]">
    <!-- Badge -->
    <div class="mb-8">
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
</template>

<script setup lang="ts">
// Home page
</script>
