<template>
  <div class="w-full max-w-md mx-auto min-h-screen flex flex-col bg-[#151c24] text-white overflow-hidden shadow-2xl relative">
    <!-- Header -->
    <header class="p-6 flex justify-between items-center bg-[#151c24] z-10">
       <div class="text-2xl font-black tracking-tight">CheerUp</div>
       <UButton icon="i-heroicons-cog-6-tooth" color="neutral" variant="ghost" class="text-white" />
    </header>

    <!-- Main Content -->
    <main class="flex-1 px-4 pb-24 overflow-y-auto scrollbar-hide">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="absolute bottom-0 w-full bg-[#1e2530] border-t border-gray-800 p-2 pb-4">
       <div class="grid grid-cols-2 h-full">
          <div class="flex flex-col items-center justify-center gap-1 text-primary">
             <UIcon name="i-heroicons-home" class="text-2xl" />
             <span class="text-xs font-medium">Trang chủ</span>
          </div>
          <div class="flex flex-col items-center justify-center gap-1 text-gray-500">
             <UIcon name="i-heroicons-map" class="text-2xl" />
             <span class="text-xs font-medium">Khám phá</span>
          </div>
       </div>
    </footer>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
