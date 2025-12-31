<template>
  <div class="min-h-screen bg-[#1a120b] pt-8 md:pt-16 pb-12 md:pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Page Header -->
      <div class="text-center mb-10 md:mb-16">
        <h1 class="text-4xl md:text-5xl font-black text-white mb-6">Tin tức</h1>
        <p class="text-gray-400 font-medium text-sm md:text-base max-w-2xl mx-auto">
          Cập nhật tin tức, mẹo chơi & sự kiện mới nhất từ Cạch Cạch
        </p>
      </div>

      <!-- Categories -->
      <div class="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8 md:mb-12">
        <button
          @click="activeCategory = 'all'"
          :class="[
            'px-6 py-2.5 rounded-full text-sm font-black transition-all',
            activeCategory === 'all' 
              ? 'bg-[#f59e0b] text-black shadow-[0_4px_15px_rgba(245,158,11,0.2)]' 
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          ]"
        >
          Tin tức
        </button>
        <button
          @click="activeCategory = 'tips'"
          :class="[
            'px-6 py-2.5 rounded-full text-sm font-black transition-all',
            activeCategory === 'tips' 
              ? 'bg-[#f59e0b] text-black shadow-[0_4px_15px_rgba(245,158,11,0.2)]' 
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          ]"
        >
          Mẹo chơi game
        </button>
        <button
          @click="activeCategory = 'updates'"
          :class="[
            'px-6 py-2.5 rounded-full text-sm font-black transition-all',
            activeCategory === 'updates' 
              ? 'bg-[#f59e0b] text-black shadow-[0_4px_15px_rgba(245,158,11,0.2)]' 
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          ]"
        >
          Cập nhật
        </button>
      </div>

      <!-- Blog List -->
      <div class="grid grid-cols-1 gap-4 md:gap-6 mb-8 md:mb-12">
        <div v-for="post in blogPosts" :key="post.id" 
             class="bg-[#241a12] rounded-2xl md:rounded-[2rem] border border-white/5 p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-10 hover:border-[#f59e0b]/20 transition-all group">
          <!-- Post Image -->
          <div class="w-full md:w-[340px] aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden shrink-0 bg-[#1a120b]">
            <template v-if="post.image">
              <NuxtImg 
                :src="post.image" 
                :alt="post.title" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                format="webp"
                loading="lazy"
              />
            </template>
            <div v-else class="w-full h-full flex items-center justify-center p-8 opacity-20">
              <UIcon :name="post.placeholderIcon" class="w-16 h-16" />
            </div>
          </div>

          <!-- Post Content -->
          <div class="flex-1 flex flex-col justify-center py-0 md:py-2">
            <div class="flex items-center gap-3 mb-2 md:mb-4">
              <span :class="[
                'px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider',
                post.tagColor || 'bg-[#f59e0b] text-black'
              ]">
                {{ post.tag }}
              </span>
              <div class="flex items-center gap-1.5 text-[11px] text-gray-500 font-bold uppercase tracking-tight">
                <UIcon name="i-heroicons-clock" class="w-3.5 h-3.5" />
                {{ post.date }}
              </div>
            </div>

            <h3 class="text-lg md:text-2xl font-black text-white mb-2 md:mb-4 group-hover:text-[#f59e0b] transition-colors leading-tight">
              {{ post.title }}
            </h3>
            
            <p class="text-gray-400 text-xs md:text-base leading-relaxed mb-4 md:mb-6 font-medium line-clamp-2 md:line-clamp-3">
              {{ post.summary }}
            </p>

            <NuxtLink to="#" class="flex items-center gap-2 text-[#f59e0b] text-sm font-black uppercase tracking-widest hover:underline group/link">
              Xem chi tiết
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <CommonCPagination 
        v-model="currentPage" 
        :total-pages="12" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeCategory = ref('all')
const currentPage = ref(1)

const blogPosts = ref([
  {
    id: 1,
    title: 'Siêu giải đấu Cạch Cạch mùa hè 2024 chính thức khởi tranh',
    summary: 'Tổng giải thưởng lên đến 100 triệu đồng dành cho các cao thủ Boardgame. Đăng ký ngay để nhận quà giới hạn.',
    tag: 'HOT',
    tagColor: 'bg-[#f59e0b] text-black',
    date: '2 giờ trước',
    image: '/images/blog_tournament.png',
    placeholderIcon: 'i-heroicons-trophy'
  },
  {
    id: 2,
    title: 'Chiến thuật tâm lý học trong "Lật Thẻ Bài" 18+',
    summary: 'Những thủ thuật nhỏ giúp bạn qua mặt cả những người chơi lão luyện nhất. Đọc ngay để nắm bắt tâm lý đối thủ.',
    tag: 'MUST READ',
    tagColor: 'bg-[#b87333] text-white',
    date: '5 giờ trước',
    image: '/images/blog_strategy.png',
    placeholderIcon: 'i-heroicons-sparkles'
  },
  {
    id: 3,
    title: 'Cập nhật cộng đồng: Tính năng Voice Chat đã có mặt',
    summary: 'Giao tiếp dễ dàng hơn với bạn bè ngay trong phòng chơi mà không cần ứng dụng thứ 3.',
    tag: 'NEWS',
    tagColor: 'bg-[#4a90e2] text-white',
    date: '1 ngày trước',
    image: null,
    placeholderIcon: 'i-heroicons-megaphone'
  },
  {
    id: 4,
    title: 'Top 10 người chơi xuất sắc tháng 10',
    summary: 'Vinh danh những gương mặt vàng trong làng boardgame Cạch Cạch. Xem ngay danh sách để biết mình có tên không nhé!',
    tag: 'EVENT',
    tagColor: 'bg-[#22c55e] text-white',
    date: '3 ngày trước',
    image: null,
    placeholderIcon: 'i-heroicons-trophy'
  }
])

useSeoMeta({
  title: 'Tin tức & Sự kiện | Cạch Cạch',
  description: 'Cập nhật tin tức, mẹo chơi & sự kiện mới nhất từ Cạch Cạch',
  ogTitle: 'Tin tức & Sự kiện | Cạch Cạch',
  ogDescription: 'Cập nhật tin tức, mẹo chơi & sự kiện mới nhất từ Cạch Cạch',
  ogType: 'website',
  ogUrl: 'https://cachcach.org/blog',
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
