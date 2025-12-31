<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const headerTitle = computed(() => route.meta.headerTitle || 'Cạch Cạch')
const showBack = computed(() => route.meta.headerBack)
const showInfo = computed(() => route.meta.headerInfo)

const goBack = () => {
    router.push('/game')
}
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
            <div class="flex-1 flex items-center justify-between">
                 <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <AppLogo size="sm" class="scale-90" />
                    <span class="text-lg font-black text-white">Cạch Cạch</span>
                 </NuxtLink>
                 
                 <UButton icon="i-heroicons-cog-6-tooth" color="neutral" variant="ghost" class="p-0 text-xl text-white" />
            </div>
        </template>
    </header>


    <!-- Main Content -->
    <main class="flex-1 px-4 pt-6 overflow-y-auto overflow-x-hidden scrollbar-hide flex flex-col">
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
