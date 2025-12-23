<template>
  <div class="min-h-screen bg-[#1a120b] flex flex-col text-white">
    <!-- Header -->
    <header class="w-full border-b border-white/5 bg-[#1a120b]/80 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <!-- Logo and Brand -->
        <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <AppLogo size="md" />
          <h1 class="text-xl md:text-2xl font-black text-white tracking-tight text-nowrap">Cạch Cạch</h1>
        </NuxtLink>

        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink to="/" class="text-sm font-black text-white hover:text-[#f59e0b] transition-colors uppercase tracking-widest">Trang chủ</NuxtLink>
          <NuxtLink to="/discover" class="text-sm font-black text-white hover:text-[#f59e0b] transition-colors uppercase tracking-widest">Khám phá</NuxtLink>
          <NuxtLink to="/contact" class="text-sm font-black text-white hover:text-[#f59e0b] transition-colors uppercase tracking-widest">Liên hệ</NuxtLink>
        </nav>

        <!-- CTA Button -->
        <div class="flex items-center">
          <NuxtLink to="/game" class="bg-[#f59e0b] text-black px-8 py-2.5 rounded-full text-sm font-black hover:scale-105 transition-all active:scale-95 shadow-[0_4px_15px_rgba(245,158,11,0.2)]">
             Chơi ngay
          </NuxtLink>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-[#140e09] border-t border-white/5 pt-20 pb-10 px-6 lg:px-12 w-full">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <!-- Col 1: Brand -->
          <div class="lg:col-span-2 max-w-sm">
            <div class="flex items-center gap-3 mb-6">
              <AppLogo size="sm" />
              <span class="text-xl font-black text-white tracking-tight">Cạch Cạch</span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed font-medium">
              Cạch Cạch là nền tảng chơi boardgame online hàng đầu, giúp bạn kết nối và tạo nên những tiếng cười sảng khoái cùng bạn bè mọi lúc, mọi nơi.
            </p>
          </div>

          <!-- Col 2: Discover -->
          <div>
            <h4 class="text-white font-black mb-6">Khám phá</h4>
            <ul class="space-y-4 text-sm text-gray-500 font-bold">
              <li><NuxtLink to="/discover" class="hover:text-white transition-colors">Tất cả Game</NuxtLink></li>
              <li><a href="#" class="hover:text-white transition-colors">Tin tức</a></li>
            </ul>
          </div>

          <!-- Col 3: Support -->
          <div>
            <h4 class="text-white font-black mb-6">Hỗ trợ</h4>
            <ul class="space-y-4 text-sm text-gray-500 font-bold">
              <li><a href="#" class="hover:text-white transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Liên hệ</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Góp ý</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p class="text-[11px] text-gray-600 font-bold uppercase tracking-widest">
            © 2025 Cạch Cạch. All rights reserved.
          </p>
          <div class="flex items-center gap-4">
             <UIcon name="i-heroicons-globe-alt" class="w-5 h-5 text-gray-600 hover:text-white cursor-pointer transition-colors" />
             <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-gray-600 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Default layout
</script>
