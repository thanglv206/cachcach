<script setup lang="ts">
definePageMeta({
  layout: 'game',
  headerTitle: 'Drinking Card',
  headerBack: true
})

const topics = [
  {
    id: 'warm-up',
    title: 'Khởi động',
    description: 'Nhẹ nhàng làm nóng không khí.',
    link: '/game/drinking-card/warm-up',
    icon: 'i-heroicons-face-smile-20-solid',
    color: 'from-[#10b981] to-[#059669]',
    shadow: 'shadow-emerald-900/20'
  },
  {
    id: 'film-of-life',
    title: 'Thước phim cuộc đời',
    description: 'Những câu chuyện chưa từng kể.',
    link: '/game/drinking-card/film-of-life',
    icon: 'i-heroicons-film-20-solid',
    color: 'from-[#6366f1] to-[#4f46e5]',
    shadow: 'shadow-indigo-900/20'
  },
  {
    id: '18-plus',
    title: '18+',
    description: 'Thử thách táo bạo cùng người thương.',
    link: '/game/drinking-card/18-plus',
    icon: 'i-heroicons-fire-20-solid',
    color: 'from-[#ef4444] to-[#dc2626]',
    shadow: 'shadow-red-900/20'
  }
]
</script>

<template>
  <div class="max-w-lg mx-auto space-y-10">
    <div class="space-y-3">
      <h1 class="text-3xl font-bold text-white tracking-tight">Chọn Topic</h1>
      <p class="text-gray-400 text-sm leading-relaxed max-w-[280px]">
        Chọn chủ đề phù hợp để bắt đầu cuộc vui cùng Drinking Card!
      </p>
    </div>

    <div class="space-y-4">
      <NuxtLink 
        v-for="topic in topics" 
        :key="topic.id"
        :to="topic.link"
        class="group flex items-center gap-5 bg-[#1a232e] rounded-[32px] p-6 transition-all hover:bg-[#202b3a] active:scale-[0.98] border border-white/5"
      >
        <!-- Icon -->
        <div class="w-16 h-16 shrink-0 rounded-[22px] bg-gradient-to-br flex items-center justify-center shadow-lg" :class="topic.color">
          <UIcon :name="topic.icon" class="w-8 h-8 text-white" />
        </div>
        
        <!-- Content -->
        <div class="flex-1 min-w-0">
          <h2 class="text-xl font-bold text-white mb-1">{{ topic.title }}</h2>
          <p class="text-gray-400 text-xs leading-snug">{{ topic.description }}</p>
        </div>

        <!-- Arrow -->
        <div class="w-10 h-10 shrink-0 rounded-full bg-[#2a3746] flex items-center justify-center group-hover:bg-[#324254] transition-colors">
          <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5 text-gray-400 group-hover:text-white" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
</style>
