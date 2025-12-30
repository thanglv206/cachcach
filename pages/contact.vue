<template>
  <div class="py-10 md:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
    <!-- Header Section -->
    <div class="text-center mb-10 md:mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/5 mb-4 md:mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]"></span>
        <span class="text-[10px] font-black tracking-[0.2em] text-[#f59e0b] uppercase">Support Center</span>
      </div>
      <h2 class="text-4xl md:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">Liên Hệ</h2>
      <p class="text-gray-400 max-w-2xl mx-auto text-center leading-relaxed font-medium text-sm md:text-base">
        Chúng tôi luôn sẵn sàng lắng nghe ý kiến và hỗ trợ bạn mọi lúc. Kết nối với Cạch Cạch ngay!
      </p>
    </div>

    <!-- Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      <!-- Direct Information Card -->
      <div class="bg-[#241b14] rounded-3xl p-6 md:p-10 border border-white/5 relative overflow-hidden group">
        <!-- Decorative subtle gradient -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#f59e0b]/5 blur-[100px] -mr-32 -mt-32 rounded-full"></div>

        <div class="relative z-10">
          <div class="flex items-center gap-4 mb-6 md:mb-10">
            <UIcon name="i-heroicons-question-mark-circle" class="w-6 h-6 text-[#f59e0b]" />
            <h3 class="text-xl md:text-2xl font-black text-white">Thông tin trực tiếp</h3>
          </div>

          <div class="space-y-6 md:space-y-8">
            <!-- Hotline -->
            <div class="flex items-start gap-4 md:gap-5">
              <div class="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#33281e] flex items-center justify-center shrink-0 border border-white/5">
                <UIcon name="i-heroicons-phone" class="w-5 h-5 md:w-6 md:h-6 text-[#f59e0b]" />
              </div>
              <div class="pt-1">
                <span class="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1 md:mb-1.5">Hotline</span>
                <a href="tel:1900123456" class="block text-xl md:text-3xl font-black text-white hover:text-[#f59e0b] transition-colors mb-0.5 md:mb-1">1900 1234 56</a>
                <div class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span class="text-[10px] md:text-xs text-gray-500 font-bold">8:00 - 22:00 hàng ngày</span>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4 md:gap-5">
              <div class="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#33281e] flex items-center justify-center shrink-0 border border-white/5">
                <UIcon name="i-heroicons-envelope" class="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
              <div class="pt-1">
                <span class="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1 md:mb-1.5">Email Hỗ trợ</span>
                <a href="mailto:hotro@cachcach.vn" class="block text-xl md:text-3xl font-black text-white hover:text-blue-400 transition-colors mb-0.5 md:mb-1">hotro@cachcach.vn</a>
                <span class="text-[10px] md:text-xs text-gray-500 font-bold">Phản hồi trong vòng 24h</span>
              </div>
            </div>
          </div>

          <div class="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-white/5">
             <p class="text-[13px] md:text-sm text-gray-500 font-bold leading-relaxed">
              Văn phòng: Tầng 12, Tòa nhà Innovation, Quận 1, TP. Hồ Chí Minh
            </p>
          </div>
        </div>
      </div>

      <!-- Social Media Card -->
      <div class="bg-[#241b14] rounded-3xl p-6 md:p-10 border border-white/5 relative overflow-hidden">
        <div class="flex items-center gap-4 mb-2">
          <UIcon name="i-heroicons-share" class="w-6 h-6 text-purple-400" />
          <h3 class="text-xl md:text-2xl font-black text-white">Mạng xã hội</h3>
        </div>
        <p class="text-[13px] md:text-sm text-gray-500 font-bold mb-6 md:mb-10 max-w-xs">
          Theo dõi để không bỏ lỡ các boardgame mới và sự kiện hấp dẫn.
        </p>

        <div class="space-y-3 md:space-y-4">
          <!-- Facebook -->
          <a href="#" class="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-[#33281e] border border-white/5 hover:border-[#f59e0b]/30 transition-all group/item">
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-blue-600/20 flex items-center justify-center">
                <UIcon name="i-simple-icons-facebook" class="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              </div>
              <div>
                <span class="block text-sm font-black text-white">Facebook</span>
                <span class="block text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-tight">Cộng đồng 50K thành viên</span>
              </div>
            </div>
            <UIcon name="i-heroicons-chevron-right" class="w-5 h-5 text-gray-600 group-hover/item:text-white transition-colors" />
          </a>

          <!-- TikTok -->
          <a href="#" class="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-[#33281e] border border-white/5 hover:border-[#f59e0b]/30 transition-all group/item">
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <UIcon name="i-simple-icons-tiktok" class="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </div>
              <div>
                <span class="block text-sm font-black text-white">TikTok</span>
                <span class="block text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-tight">Video highlight cực cháy</span>
              </div>
            </div>
            <UIcon name="i-heroicons-chevron-right" class="w-5 h-5 text-gray-600 group-hover/item:text-white transition-colors" />
          </a>

          <!-- Instagram -->
          <a href="#" class="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-[#33281e] border border-white/5 hover:border-[#f59e0b]/30 transition-all group/item">
            <div class="flex items-center gap-4">
              <div class="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-pink-600/20 flex items-center justify-center">
                <UIcon name="i-simple-icons-instagram" class="w-4 h-4 md:w-5 md:h-5 text-pink-600" />
              </div>
              <div>
                <span class="block text-sm font-black text-white">Instagram</span>
                <span class="block text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-tight">Khoảnh khắc đáng nhớ</span>
              </div>
            </div>
            <UIcon name="i-heroicons-chevron-right" class="w-5 h-5 text-gray-600 group-hover/item:text-white transition-colors" />
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Liên Hệ – Cạch Cạch',
  description: 'Kết nối với đội ngũ Cạch Cạch để được hỗ trợ nhanh nhất về các sản phẩm boardgame và dịch vụ.'
})
</script>

<style scoped>
/* Custom styles if needed */
</style>
