<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const headerTitle = computed(() => route.meta.headerTitle || 'Cạch Cạch')
const showBack = computed(() => route.meta.headerBack)
const showInfo = computed(() => route.meta.headerInfo)

const goBack = () => {
    router.push('/game')
}

// Device optimization modal logic
const showDeviceModal = ref(false)

const closeDeviceModal = () => {
  showDeviceModal.value = false
  if (import.meta.client) {
    localStorage.setItem('device-optimization-notified', 'true')
  }
}

onMounted(() => {
  if (import.meta.client) {
    const isDesktop = window.innerWidth > 768
    const alreadyNotified = localStorage.getItem('device-optimization-notified')
    
    if (isDesktop && !alreadyNotified) {
      showDeviceModal.value = true
    }
  }
})
</script>

<template>
  <div class="w-full max-w-md mx-auto h-[100dvh] flex flex-col bg-[#151c24] text-white overflow-hidden shadow-2xl relative">
    <!-- Header -->
    <header class="px-4 py-2 flex items-center bg-[#151c24] z-10 shrink-0 border-b border-white/5 h-14">
        <template v-if="showBack">
            <!-- Left side -->
            <div class="w-10 flex items-center">
                 <UButton icon="i-heroicons-chevron-left" color="neutral" variant="ghost" class="p-0 text-xl text-white" @click="goBack" />
            </div>

            <!-- Center side -->
            <div class="flex-1 text-center overflow-hidden">
                <span class="text-lg font-bold tracking-tight truncate">{{ headerTitle }}</span>
            </div>

            <!-- Right side -->
            <div class="w-10 flex items-center justify-end">
                <UButton v-if="showInfo" icon="i-heroicons-information-circle" color="neutral" variant="ghost" class="p-0 text-xl text-white" />
                <UButton v-else icon="i-heroicons-cog-6-tooth" color="neutral" variant="ghost" class="p-0 text-xl text-white" />
            </div>
        </template>

        <template v-else>
            <!-- Standard Header for Main Game List -->
            <div class="flex-1 flex items-center justify-center">
                 <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <AppLogo size="sm" class="scale-90" />
                    <span class="text-lg font-black text-white">Cạch Cạch</span>
                 </NuxtLink>
            </div>
        </template>
    </header>


    <!-- Main Content -->
    <main class="flex-1 px-4 pt-6 overflow-y-auto overflow-x-hidden scrollbar-hide flex flex-col font-sans">
      <slot />
    </main>


    <!-- Footer -->
    <footer class="w-full bg-[#1e2530] border-t border-gray-800 p-2 pb-4 shrink-0">
       <div class="grid grid-cols-2 h-full">
          <NuxtLink to="/" class="flex flex-col items-center justify-center gap-1" :class="route.path === '/' ? 'text-primary' : 'text-gray-500'">
             <UIcon name="i-heroicons-home" class="text-2xl" />
             <span class="text-xs font-medium">Trang chủ</span>
          </NuxtLink>
          <NuxtLink to="/game" class="flex flex-col items-center justify-center gap-1" :class="route.path.startsWith('/game') ? 'text-primary' : 'text-gray-500'">
             <UIcon name="i-heroicons-puzzle-piece-solid" class="text-2xl" />
             <span class="text-xs font-medium">Danh sách game</span>
          </NuxtLink>
       </div>
    </footer>

    <!-- Device Optimization Modal -->
    <div v-if="showDeviceModal" class="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-4">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/80"></div>
      
      <!-- Modal Content -->
      <div class="relative bg-[#1e2530] rounded-[2rem] p-8 w-full max-w-sm border border-white/5 shadow-2xl flex flex-col items-center">
        <!-- Icon -->
        <div class="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
          <div class="w-12 h-12 bg-[#f59e0b] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            <UIcon name="i-heroicons-device-phone-mobile-20-solid" class="text-2xl text-black" />
          </div>
        </div>

        <!-- Text Content -->
        <h2 class="text-xl font-bold text-white mb-4 text-center">Thông báo tối ưu thiết bị</h2>
        <p class="text-gray-400 text-sm leading-relaxed text-center mb-8 px-2 font-medium">
          Game được thiết kế và hiển thị tốt nhất trên điện thoại. Vui lòng sử dụng điện thoại để chơi game với trải nghiệm tốt nhất.
        </p>

        <!-- Button -->
        <button 
          @click="closeDeviceModal"
          class="w-full py-4 px-6 bg-[#f59e0b] text-black font-black rounded-2xl shadow-[0_8px_25px_rgba(245,158,11,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          Đã hiểu
        </button>
      </div>
    </div>

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
