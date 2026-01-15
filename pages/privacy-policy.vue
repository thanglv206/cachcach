<template>
  <div class="py-12 md:py-24 px-6 lg:px-12 max-w-4xl mx-auto">
    <!-- Main Box -->
    <div class="bg-[#241b14] rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
      <!-- Header -->
      <div class="p-8 md:p-12 text-center border-b border-white/5">
        <h1 class="text-3xl md:text-4xl font-black text-white mb-3">Chính sách bảo mật</h1>
        <p class="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">Cập nhật lần cuối: 24/05/2024</p>
      </div>

      <!-- Content -->
      <div class="p-8 md:p-12 space-y-12">
        <!-- 1. Tổng quan -->
        <section>
          <div class="flex items-center gap-4 mb-6">
            <div class="w-8 h-8 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center shrink-0">
              <span class="text-sm font-black text-[#f59e0b]">1</span>
            </div>
            <h2 class="text-xl md:text-2xl font-black text-white">Tổng quan</h2>
          </div>
          <p class="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
            Cạch Cạch cam kết bảo vệ sự riêng tư của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng, tiết lộ và bảo vệ thông tin của bạn khi bạn sử dụng ứng dụng di động và trang web của chúng tôi. Chúng tôi khuyến khích bạn đọc kỹ chính sách này để hiểu rõ quyền lợi của mình.
          </p>
        </section>

        <!-- 2. Thông tin chúng tôi thu thập -->
        <section>
          <div class="flex items-center gap-4 mb-6">
            <div class="w-8 h-8 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center shrink-0">
              <span class="text-sm font-black text-[#f59e0b]">2</span>
            </div>
            <h2 class="text-xl md:text-2xl font-black text-white">Thông tin chúng tôi thu thập</h2>
          </div>
          <div class="space-y-6">
            <p class="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
              Chúng tôi có thể thu thập các loại thông tin sau để cung cấp và cải thiện dịch vụ:
            </p>
            <ul class="space-y-4 ml-4">
              <li class="flex items-start gap-3">
                <span class="text-[#f59e0b] mt-1.5 shrink-0 text-xl leading-none">·</span>
                <div>
                  <span class="text-white font-bold block mb-1">Thông tin cá nhân:</span>
                  <span class="text-gray-400 text-sm md:text-base font-medium">Tên, địa chỉ email, ảnh đại diện và thông tin đăng nhập khi bạn tạo tài khoản hoặc liên kết với mạng xã hội (Facebook, Google).</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[#f59e0b] mt-1.5 shrink-0 text-xl leading-none">·</span>
                <div>
                  <span class="text-white font-bold block mb-1">Dữ liệu thiết bị:</span>
                  <span class="text-gray-400 text-sm md:text-base font-medium">Loại thiết bị, hệ điều hành, địa chỉ IP và mã định danh thiết bị duy nhất.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-[#f59e0b] mt-1.5 shrink-0 text-xl leading-none">·</span>
                <div>
                  <span class="text-white font-bold block mb-1">Dữ liệu sử dụng:</span>
                  <span class="text-gray-400 text-sm md:text-base font-medium">Lịch sử chơi game, tương tác trong game, thời gian truy cập và các hành động khác trên nền tảng.</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <!-- 3. Cách chúng tôi sử dụng thông tin -->
        <section>
          <div class="flex items-center gap-4 mb-6">
            <div class="w-8 h-8 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center shrink-0">
              <span class="text-sm font-black text-[#f59e0b]">3</span>
            </div>
            <h2 class="text-xl md:text-2xl font-black text-white">Cách chúng tôi sử dụng thông tin</h2>
          </div>
          <p class="text-gray-400 text-sm md:text-base leading-relaxed font-medium mb-6">
            Thông tin thu thập được sử dụng cho các mục đích chính sau:
          </p>
          <div class="bg-[#1a120b] rounded-2xl p-6 md:p-8 space-y-4 border border-white/5">
            <div class="flex items-center gap-4">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 shrink-0" />
              <span class="text-gray-400 text-sm md:text-base font-medium">Cung cấp, vận hành và duy trì các dịch vụ của Cạch Cạch.</span>
            </div>
            <div class="flex items-center gap-4">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 shrink-0" />
              <span class="text-gray-400 text-sm md:text-base font-medium">Cải thiện trải nghiệm người dùng, phát triển tính năng mới.</span>
            </div>
            <div class="flex items-center gap-4">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 shrink-0" />
              <span class="text-gray-400 text-sm md:text-base font-medium">Gửi thông báo về cập nhật, bảo mật và hỗ trợ kỹ thuật.</span>
            </div>
            <div class="flex items-center gap-4">
              <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-green-500 shrink-0" />
              <span class="text-gray-400 text-sm md:text-base font-medium">Phát hiện và ngăn chặn gian lận hoặc các hành vi vi phạm.</span>
            </div>
          </div>
        </section>

        <!-- 4. Chia sẻ thông tin -->
        <section>
          <div class="flex items-center gap-4 mb-6">
            <div class="w-8 h-8 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center shrink-0">
              <span class="text-sm font-black text-[#f59e0b]">4</span>
            </div>
            <h2 class="text-xl md:text-2xl font-black text-white">Chia sẻ thông tin</h2>
          </div>
          <p class="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
            Chúng tôi không bán hoặc cho thuê thông tin cá nhân của bạn. Chúng tôi chỉ có thể chia sẻ thông tin với các bên thứ ba cung cấp dịch vụ (như lưu trữ đám mây, phân tích dữ liệu) để hỗ trợ vận hành hệ thống, hoặc khi có yêu cầu bắt buộc từ cơ quan pháp luật có thẩm quyền.
          </p>
        </section>

        <!-- 5. Bảo mật dữ liệu -->
        <section>
          <div class="flex items-center gap-4 mb-6">
            <div class="w-8 h-8 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center shrink-0">
              <span class="text-sm font-black text-[#f59e0b]">5</span>
            </div>
            <h2 class="text-xl md:text-2xl font-black text-white">Bảo mật dữ liệu</h2>
          </div>
          <p class="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
            Chúng tôi áp dụng các biện pháp an ninh vật lý, điện tử và quy trình quản lý phù hợp để bảo vệ thông tin cá nhân của bạn khỏi bị truy cập trái phép, sử dụng sai mục đích hoặc tiết lộ. Tuy nhiên, không có phương thức truyền tải qua Internet hoặc lưu trữ điện tử nào là an toàn tuyệt đối 100%.
          </p>
        </section>

        <!-- 6. Quyền của người dùng -->
        <section>
          <div class="flex items-center gap-4 mb-6">
            <div class="w-8 h-8 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center shrink-0">
              <span class="text-sm font-black text-[#f59e0b]">6</span>
            </div>
            <h2 class="text-xl md:text-2xl font-black text-white">Quyền của người dùng</h2>
          </div>
          <p class="text-gray-400 text-sm md:text-base leading-relaxed font-medium">
            Bạn có quyền truy cập, chỉnh sửa hoặc yêu cầu xóa dữ liệu cá nhân của mình bất kỳ lúc nào thông qua phần cài đặt trong ứng dụng hoặc bằng cách liên hệ với bộ phận hỗ trợ của chúng tôi. Nếu bạn yêu cầu xóa tài khoản, một số thông tin có thể vẫn được lưu trữ trong thời gian ngắn để tuân thủ các nghĩa vụ pháp lý.
          </p>
        </section>
      </div>

      <!-- Footer CTA -->
      <div class="bg-[#2d2118] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5">
        <p class="text-sm text-gray-500 font-bold max-w-sm text-center md:text-left">
          Nếu bạn có thắc mắc về Chính sách bảo mật này, vui lòng liên hệ với chúng tôi.
        </p>
        <NuxtLink 
          to="/contact"
          class="flex items-center gap-3 bg-[#f59e0b] text-black text-sm font-black py-4 px-8 rounded-xl hover:scale-105 transition-all shadow-[0_8px_25px_rgba(245,158,11,0.2)]"
        >
          <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
          Liên hệ hỗ trợ
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}/privacy-policy` }]
})

useSeoMeta({
  title: 'Chính sách bảo mật – Cạch Cạch',
  description: 'Chính sách bảo mật thông tin người dùng tại Cạch Cạch.',
  ogTitle: 'Chính sách bảo mật – Cạch Cạch',
  ogDescription: 'Chính sách bảo mật thông tin người dùng tại Cạch Cạch.',
  ogType: 'website',
  ogUrl: `${config.public.siteUrl}/privacy-policy`,
})
</script>
