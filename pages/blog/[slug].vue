<template>
  <div class="min-h-screen bg-[#1a120b] pt-8 md:pt-16 pb-12 md:pb-24">
    <div v-if="pending" class="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center py-20">
      <div class="w-12 h-12 border-4 border-[#f59e0b] border-t-transparent rounded-full animate-spin mb-4"></div>
      <p class="text-gray-400 font-bold uppercase tracking-widest text-xs">Đang tải bài viết...</p>
    </div>

    <div v-else-if="error" class="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center py-20">
      <div class="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 border border-white/5">
        <UIcon name="i-heroicons-exclamation-triangle" class="w-10 h-10 text-red-500/50" />
      </div>
      <h1 class="text-2xl font-black text-white mb-4">Không tìm thấy bài viết</h1>
      <p class="text-gray-500 mb-8 max-w-md text-center">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị gỡ bỏ.</p>
      <NuxtLink to="/blog" class="px-8 py-3 rounded-full bg-[#f59e0b] text-black font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">
        Quay lại Blog
      </NuxtLink>
    </div>

    <div v-else-if="post" class="max-w-7xl mx-auto px-6">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-500 mb-8 md:mb-12">
        <NuxtLink to="/" class="hover:text-[#f59e0b] transition-colors whitespace-nowrap">Trang chủ</NuxtLink>
        <UIcon name="i-heroicons-chevron-right" class="w-3 h-3 shrink-0" />
        <NuxtLink to="/blog" class="hover:text-[#f59e0b] transition-colors whitespace-nowrap">Blog</NuxtLink>
        <UIcon name="i-heroicons-chevron-right" class="w-3 h-3 shrink-0" />
        <span class="text-[#f59e0b] truncate max-w-[150px] md:max-w-none">{{ post?.title }}</span>
      </nav>

      <div class="lg:grid lg:grid-cols-12 lg:gap-16">
        <!-- Main Content -->
        <div class="lg:col-span-8">
          <!-- Post Header -->
          <div class="mb-8 md:mb-12">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div class="flex flex-wrap items-center gap-3 md:gap-4">
                <span class="px-2.5 py-1 rounded bg-[#f59e0b] text-black text-[9px] md:text-[10px] font-black uppercase tracking-wider">
                  {{ post?.tag || 'MẸO CHƠI' }}
                </span>
                <div class="flex items-center gap-1.5 text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-tight">
                  <UIcon name="i-heroicons-calendar" class="w-3.5 h-3.5" />
                  {{ post?.date }}
                </div>
                <div class="flex items-center gap-1.5 text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-tight">
                  <UIcon name="i-heroicons-clock" class="w-3.5 h-3.5" />
                  5 phút đọc
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full overflow-hidden bg-white/5 border border-white/10 shrink-0">
                  <NuxtImg src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" class="w-full h-full object-cover" />
                </div>
                <div class="text-white font-black text-xs md:text-sm">Admin Cạch Cạch</div>
              </div>
            </div>

            <h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-0 leading-[1.1]">
              {{ post?.title }}
            </h1>
          </div>

          <!-- Featured Image -->
          <div v-if="post.image" class="aspect-[16/9] rounded-2xl md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-12 border border-white/5">
            <NuxtImg 
              :src="post.image" 
              :alt="post.title" 
              class="w-full h-full object-cover"
              format="webp"
            />
          </div>

          <!-- Post Content (v-html) -->
          <div class="post-content mb-12" v-html="post.content"></div>

          <!-- Tags & Share -->
          <div class="pt-10 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
            <div class="flex items-center gap-4">
              <span class="text-gray-500 text-[11px] font-black uppercase tracking-widest whitespace-nowrap">Chia sẻ:</span>
              <div class="flex items-center gap-3">
                 <button 
                  @click="shareOnPlatform('facebook')"
                  class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-lg shadow-blue-600/20"
                 >
                   <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                 </button>
                 <button 
                  @click="shareOnPlatform('twitter')"
                  class="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white border border-white/10 hover:scale-110 active:scale-95 transition-all shadow-lg shadow-white/5"
                 >
                   <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/></svg>
                 </button>
                 <button 
                  @click="shareOnPlatform('linkedin')"
                  class="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all shadow-lg shadow-blue-700/20"
                 >
                   <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554V15.034c0-1.291-.023-2.954-1.8-2.954-1.802 0-2.078 1.408-2.078 2.859v5.513h-3.554V8.975h3.41v1.561h.046c.476-.9 1.636-1.85 3.367-1.85 3.601 0 4.267 2.37 4.267 5.455v6.311zM4.61 7.425a2.062 2.062 0 1 1 .001-4.125 2.062 2.062 0 0 1-0.001 4.125zM6.388 20.452H2.832V8.975h3.556v11.477z"/></svg>
                 </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar (Related Posts) -->
        <aside class="lg:col-span-4 mt-12 lg:mt-0">
          <div class="sticky top-24">
            <div class="flex items-center gap-3 mb-8">
              <div class="w-1.5 h-8 bg-[#f59e0b] rounded-full"></div>
              <h2 class="text-xl md:text-2xl font-black text-white">Bài viết liên quan</h2>
            </div>
            
            <div class="flex flex-col gap-6">
              <NuxtLink v-for="rel in relatedPosts" :key="rel.slug" :to="`/blog/${rel.slug}`" class="flex gap-4 group">
                <div class="w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-[#241a12] border border-white/5">
                    <NuxtImg :src="rel.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div class="flex flex-col gap-2 py-1">
                  <h3 class="text-white font-black text-sm group-hover:text-[#f59e0b] transition-colors line-clamp-2 leading-snug">
                    {{ rel.title }}
                  </h3>
                  <div class="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold uppercase tracking-tight">
                    <UIcon name="i-heroicons-clock" class="w-3.5 h-3.5" />
                    {{ rel.date }}
                  </div>
                </div>
              </NuxtLink>
            </div>

            <!-- Ad/CTA Placeholder -->
            <div class="mt-12 p-8 rounded-[2rem] bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-black">
              <h4 class="text-xl font-black mb-4">Chơi game ngay!</h4>
              <p class="text-sm font-bold mb-6 opacity-80">Trải nghiệm những phút giây giải trí tuyệt vời cùng bạn bè.</p>
              <NuxtLink to="/game" class="inline-flex px-6 py-3 rounded-full bg-black text-white text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">
                Bắt đầu ngay
              </NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()
const slug = route.params.slug as string

interface BlogPost {
  title: string
  tag: string
  category: string
  categoryName: string
  image: string
  date: string
  content: string
  description: string
}

const { data: post, pending, error } = await useAsyncData<BlogPost>(
  `blog-${slug}`,
  () => $fetch('/api/blog', {
    params: { slug }
  })
)

// Fetch Related Posts
const { data: relatedData } = await useAsyncData(
  `related-${slug}`,
  () => $fetch('/api/blogs', {
    query: { limit: 10 }
  })
)

const relatedPosts = computed(() => {
  if (!relatedData.value?.data) return []
  return relatedData.value.data
    .filter((p: any) => p.slug !== slug)
    .slice(0, 3)
})

const shareOnPlatform = (platform: 'facebook' | 'twitter' | 'linkedin') => {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(post.value?.title || '')
  
  let shareUrl = ''
  switch (platform) {
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
      break
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`
      break
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
      break
  }
  
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400')
  }
}

useSeoMeta({
  title: () => `${post.value?.title || 'Đang tải...'} | Blog Cạch Cạch`,
  ogTitle: () => post.value?.title,
  description: () => post.value?.description || 'Khám phá bí mật chiến thắng trong trò chơi Drinking Card cùng Cạch Cạch.',
  ogDescription: () => post.value?.description,
  ogImage: () => post.value?.image,
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: () => post.value?.title,
  twitterDescription: () => post.value?.description,
  twitterImage: () => post.value?.image,
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl}/blog/${slug}`
    }
  ]
})
</script>

<style scoped>
:deep(.post-content h1), :deep(.post-content h2), :deep(.post-content h3) {
  color: #fff;
  font-weight: 900;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

:deep(.post-content h2) { font-size: 2.25rem; }
:deep(.post-content h3) { font-size: 1.875rem; }

:deep(.post-content p) {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  color: #9ca3af;
  font-size: 1.125rem;
  line-height: 1.75;
}

:deep(.post-content img), :deep(.post-content span:has(img)) {
  max-width: 100% !important;
  height: auto !important;
  border-radius: 1.5rem;
  margin: 1rem auto;
  display: block;
  width: 100% !important;
}

:deep(.post-content img) {
  border: 1px solid rgba(255, 255, 255, 0.05);
  width: 100% !important;
}

:deep(.post-content blockquote) {
  position: relative;
  padding: 2.5rem 2rem;
  margin: 3rem 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  overflow: hidden;
}

:deep(.post-content blockquote::before) {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background: #f59e0b;
}

:deep(.post-content blockquote p) {
  margin: 0;
  color: #fff;
  font-style: italic;
  font-weight: 500;
  font-size: 1.5rem;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
