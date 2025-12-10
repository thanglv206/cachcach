<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const headerTitle = computed(() => route.meta.headerTitle || 'Cạch Cạch')
const showBack = computed(() => route.meta.headerBack)
const showInfo = computed(() => route.meta.headerInfo)

const goBack = () => {
    router.back()
}
</script>

<template>
  <div class="w-full max-w-md mx-auto h-[100dvh] flex flex-col bg-[#151c24] text-white overflow-hidden shadow-2xl relative">
    <!-- Header -->
    <header class="p-4 flex justify-between items-center bg-[#151c24] z-10 shrink-0">
        <div v-if="showBack" class="w-8">
             <UButton icon="i-heroicons-chevron-left" color="neutral" variant="ghost" class="p-0 text-2xl text-white" @click="goBack" />
        </div>
        <div v-else class="w-8"></div> <!-- Spacer -->

       <div class="text-lg font-bold tracking-tight text-center flex-1">{{ headerTitle }}</div>

       <div v-if="showInfo" class="w-8 flex justify-end">
            <UButton icon="i-heroicons-information-circle" color="neutral" variant="ghost" class="p-0 text-xl text-white" />
       </div>
       <div v-else class="w-8 flex justify-end">
           <UButton icon="i-heroicons-cog-6-tooth" color="neutral" variant="ghost" class="p-0 text-xl text-white" />
       </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 px-4 overflow-y-auto overflow-x-hidden scrollbar-hide flex flex-col">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="w-full bg-[#1e2530] border-t border-gray-800 p-2 pb-4 shrink-0">
       <div class="grid grid-cols-2 h-full">
          <NuxtLink to="/game" class="flex flex-col items-center justify-center gap-1" :class="route.path.startsWith('/game') ? 'text-primary' : 'text-gray-500'">
             <UIcon name="i-heroicons-home" class="text-2xl" />
             <span class="text-xs font-medium">Trang chủ</span>
          </NuxtLink>
          <NuxtLink to="/discover" class="flex flex-col items-center justify-center gap-1" :class="route.path === '/discover' ? 'text-primary' : 'text-gray-500'">
             <UIcon name="i-heroicons-map" class="text-2xl" />
             <span class="text-xs font-medium">Khám phá</span>
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
