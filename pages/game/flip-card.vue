<script setup lang="ts">
definePageMeta({
  layout: 'game',
  headerTitle: 'Lật Thẻ',
  headerBack: true,
  headerInfo: true
})

const isFlipped = ref(false)
const currentIndex = ref(0)
const touchStartX = ref(0)
const touchEndX = ref(0)

const challenges = [
  "Hãy làm cho một người bạn hoặc người thân của bạn cười bằng một câu chuyện hài hước nhất mà bạn biết.",
  "Gọi điện cho một người bạn cũ và hát tặng họ một bài hát.",
  "Kể về lần xấu hổ nhất của bạn cho mọi người nghe.",
  "Nhắn tin cho người yêu cũ hỏi thăm sức khỏe.",
  "Mô tả người bạn thân nhất của bạn chỉ bằng 3 từ.",
  "Gửi một bức ảnh selfie hài hước cho nhóm chat gia đình.",
  "Thực hiện 10 lần hít đất ngay bây giờ.",
  "Hãy khen ngợi người ngồi bên phải bạn một câu chân thành.",
  "Kể một câu chuyện ma ngắn.",
  "Cho mọi người xem bức ảnh gần nhất trong điện thoại của bạn.",
  "Giả giọng một người nổi tiếng hoặc một nhân vật hoạt hình.",
  "Sáng tác một bài thơ ngắn về chiếc ghế bạn đang ngồi.",
  "Hãy thú nhận một tật xấu của bạn.",
  "Nhảy một điệu nhảy tự do trong 30 giây.",
  "Vẽ chân dung người đối diện trong 1 phút.",
  "Hãy im lặng trong 2 phút tiếp theo.",
  "Đọc ngược bảng chữ cái.",
  "Tìm một đồ vật màu đỏ và kể câu chuyện về nó.",
  "Nói 'Tôi yêu bạn' với người đầu tiên bạn gặp (hoặc nhắn tin).",
  "Làm mặt xấu nhất có thể và giữ nguyên trong 10 giây."
]

const currentChallenge = computed(() => challenges[currentIndex.value])

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}

const handleTouchStart = (e: TouchEvent) => {
  if (e.changedTouches.length > 0) {
    touchStartX.value = e.changedTouches[0].screenX
  }
}

const handleTouchEnd = (e: TouchEvent) => {
  if (!isFlipped.value) return 
  
  if (e.changedTouches.length > 0) {
    touchEndX.value = e.changedTouches[0].screenX
    handleSwipe()
  }
}

const handleSwipe = () => {
  const threshold = 50
  const diff = touchStartX.value - touchEndX.value

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      // Swipe Left -> Next
      nextCard()
    } else {
      // Swipe Right -> Prev
      prevCard()
    }
  }
}

const nextCard = () => {
  isFlipped.value = false // Flip back first
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % challenges.length
  }, 300) // Wait for flip animation to start usually, but here we just reset immediately then change content?
  // Better UX: Flip back (300ms) -> Change Content -> User clicks again.
  // Actually, if we flip back, the front is shown. The user doesn't see the content change until they flip again.
  // So we can change content immediately after flipping back starts.
}

const prevCard = () => {
  isFlipped.value = false
  setTimeout(() => {
    currentIndex.value = (currentIndex.value - 1 + challenges.length) % challenges.length
  }, 300)
}
</script>

<template>
  <div class="flex-1 flex justify-center items-center py-24 px-4"
       @touchstart="handleTouchStart"
       @touchend="handleTouchEnd">
    <div class="card-container" :class="{ flipped: isFlipped }" @click="toggleFlip">
      <div class="card-inner">
        <!-- Front Side (Cover) -->
        <div class="card-front relative flex flex-col items-center justify-center p-8 text-center bg-[#18181b] text-white rounded-[2rem] shadow-2xl overflow-hidden border border-white/5">
          
          <!-- Decorative Corners -->
          <div class="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#b45309] rounded-tl-2xl opacity-80"></div>
          <div class="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#b45309] rounded-br-2xl opacity-80"></div>
          <div class="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#b45309] rounded-tr-2xl opacity-80"></div>
          <div class="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#b45309] rounded-bl-2xl opacity-80"></div>

          <!-- Flame Icon Circle -->
          <div class="relative w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#b45309] flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.3)]">
             <div class="absolute inset-0 rounded-full bg-white/10 blur-md"></div>
             <!-- Flame SVG -->
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-white drop-shadow-md relative z-10">
                <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.177 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
              </svg>
          </div>

           <h2 class="text-4xl font-bold text-white mb-2 tracking-tight">CheerUp</h2>
           <p class="text-white/40 text-sm font-light tracking-wide mt-2">Chạm để lật thẻ</p>
        </div>

        <!-- Back Side (Content) -->
        <div class="card-back flex flex-col items-center justify-between p-8 text-center bg-[#18181b] text-white rounded-[2rem] shadow-lg border border-[#f59e0b]">
           <!-- Title -->
           <div class="mt-4">
              <h3 class="text-[#f59e0b] font-bold tracking-widest text-sm uppercase mb-2">Thử Thách Vui Vẻ</h3>
           </div>

           <!-- Content -->
           <div class="flex-1 flex items-center justify-center">
              <p class="text-xl md:text-2xl font-medium leading-relaxed px-4">
                {{ currentChallenge }}
              </p>
           </div>

           <!-- Footer Time -->
           <div class="mb-4 flex items-center gap-2 text-gray-400 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#f59e0b]">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
              </svg>
              <span>Thời gian: 5 phút</span>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  width: 100%;
  max-width: 380px;
  aspect-ratio: 3/4;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.card-container.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 1.5rem; /* rounded-2xl matches tailwind */
}

/* Front is already default */

.card-back {
  transform: rotateY(180deg);
}
</style>
