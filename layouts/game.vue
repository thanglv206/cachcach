<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const headerTitle = computed(() => route.meta.headerTitle || 'CheerUp')
const showBack = computed(() => route.meta.headerBack)
const showInfo = computed(() => route.meta.headerInfo)

const goBack = () => {
    router.back()
}
</script>

<template>
  <div class="w-full max-w-md mx-auto h-screen flex flex-col bg-[#151c24] text-white overflow-hidden shadow-2xl relative">
    <!-- Header -->
    <header class="p-6 flex justify-between items-center bg-[#151c24] z-10 shrink-0">
        <div v-if="showBack" class="w-10">
             <UButton icon="i-heroicons-chevron-left" color="neutral" variant="ghost" class="p-0 text-3xl text-white" @click="goBack" />
        </div>
        <div v-else class="w-10"></div> <!-- Spacer -->

       <div class="text-xl font-bold tracking-tight text-center flex-1">{{ headerTitle }}</div>

       <div v-if="showInfo" class="w-10 flex justify-end">
            <UButton icon="i-heroicons-information-circle" color="neutral" variant="ghost" class="p-0 text-2xl text-white" />
       </div>
       <div v-else class="w-10 flex justify-end">
           <UButton icon="i-heroicons-cog-6-tooth" color="neutral" variant="ghost" class="text-white" />
       </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 px-4 overflow-y-auto scrollbar-hide flex flex-col">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="w-full bg-[#1e2530] border-t border-gray-800 p-2 pb-4 shrink-0">
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
