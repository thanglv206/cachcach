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
          Tất cả
        </button>
        <button
          v-for="cat in categories"
          :key="cat.slug"
          @click="activeCategory = cat.slug"
          :class="[
            'px-6 py-2.5 rounded-full text-sm font-black transition-all',
            activeCategory === cat.slug
              ? 'bg-[#f59e0b] text-black shadow-[0_4px_15px_rgba(245,158,11,0.2)]' 
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          ]"
        >
          {{ cat.title }}
        </button>
      </div>

      <!-- Blog List -->
      <div v-if="blogPosts.length > 0" class="grid grid-cols-1 gap-4 md:gap-6 mb-8 md:mb-12">
        <div v-for="post in blogPosts" :key="post.id" 
             class="bg-[#241a12] rounded-2xl md:rounded-[2rem] border border-white/5 p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-10 hover:border-[#f59e0b]/20 transition-all group">
          <!-- Post Image -->
          <div class="w-full md:w-[340px] aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden shrink-0 bg-[#1a120b]">
            <template v-if="post.thumbnail">
              <NuxtImg 
                :src="post.thumbnail" 
                :alt="post.title" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                format="webp"
                loading="lazy"
              />
            </template>
            <div v-else class="w-full h-full flex items-center justify-center p-8 opacity-20">
              <UIcon :name="post.placeholderIcon || 'i-heroicons-document-text'" class="w-16 h-16" />
            </div>
          </div>

          <!-- Post Content -->
          <div class="flex-1 flex flex-col justify-center py-0 md:py-2">
            <div class="flex flex-wrap items-center gap-2 mb-2 md:mb-4">
              <template v-if="post.categoryName">
                <span 
                  v-for="(cat, index) in post.categoryName.split(',').slice(0, 2)" 
                  :key="index"
                  class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-[#f59e0b] text-black shrink-0"
                >
                  {{ cat.trim() }}
                </span>
                <span 
                  v-if="post.categoryName.split(',').length > 2"
                  class="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-white/5 text-gray-400 shrink-0"
                >
                  +{{ post.categoryName.split(',').length - 2 }}
                </span>
              </template>
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

            <NuxtLink :to="`/blog/${post.slug}`" class="flex items-center gap-2 text-[#f59e0b] text-sm font-black uppercase tracking-widest hover:underline group/link">
              Xem chi tiết
              <UIcon name="i-heroicons-arrow-right-20-solid" class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else-if="!pending" class="flex flex-col items-center justify-center py-20 px-6 text-center">
        <div class="w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-[2rem] flex items-center justify-center mb-8 border border-white/5">
          <UIcon name="i-heroicons-document-text" class="w-10 h-10 md:w-14 md:h-14 text-white/20" />
        </div>
        <h3 class="text-xl md:text-2xl font-black text-white mb-4">
          Hiện tại chưa có tin tức nào.
        </h3>
        <p class="text-gray-500 text-sm md:text-base font-medium max-w-sm leading-relaxed">
          Các bài viết mới nhất sẽ được cập nhật sớm.<br class="hidden md:block" />
          Vui lòng quay lại sau bạn nhé!
        </p>
      </div>

      <!-- Pagination -->
      <CommonCPagination 
        v-if="blogPosts.length > 0"
        v-model="currentPage" 
        :total-pages="totalPages" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const activeCategory = computed({
  get: () => (route.query.category as string) || 'all',
  set: (val) => {
    router.push({ 
      query: { 
        ...route.query, 
        category: val === 'all' ? undefined : val,
        page: undefined // Reset page when category changes
      } 
    })
  }
})

const currentPage = computed({
  get: () => Number(route.query.page) || 1,
  set: (val) => {
    router.push({ 
      query: { 
        ...route.query, 
        page: val === 1 ? undefined : val 
      } 
    })
  }
})

interface Category {
  slug: string
  title: string
}

interface BlogResponse {
  data: any[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Fetch Categories
const categories = useState<Category[]>('blog-categories', () => [])

if (categories.value.length === 0) {
  const { data: categoriesData } = await useAsyncData<{ data: Category[] }>(
    'blog-categories',
    () => $fetch('/api/blog-categories')
  )
  if (categoriesData.value?.data) {
    categories.value = categoriesData.value.data
  }
}

const { data: blogData, pending } = await useAsyncData<BlogResponse>(
  `blogs-${activeCategory.value}-${currentPage.value}`,
  () => $fetch('/api/blogs', {
    query: {
      page: currentPage.value,
      category: activeCategory.value,
      limit: 10
    }
  }),
  {
    watch: [() => route.query.category, () => route.query.page]
  }
)

const blogPosts = computed(() => blogData.value?.data || [])
const totalPages = computed(() => blogData.value?.pagination?.totalPages || 1)

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
