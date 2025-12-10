<script setup lang="ts">
definePageMeta({
  layout: 'game',
  headerTitle: 'Thật hay Thách',
  headerBack: true,
  headerInfo: true
})

// Truth questions
const truthQuestions = [
  "Bạn đã từng nói dối ai đó trong nhóm này chưa?",
  "Điều gì khiến bạn cảm thấy xấu hổ nhất?",
  "Bạn có crush ai trong nhóm không?",
  "Bí mật lớn nhất bạn giấu gia đình là gì?",
  "Bạn đã bao giờ ăn cắp thứ gì chưa?",
  "Điều kỳ quặc nhất bạn từng làm khi ở một mình?",
  "Bạn có thích ai đó mà chưa dám tỏ tình không?",
  "Lần cuối cùng bạn khóc là khi nào và vì sao?",
  "Bạn sẽ hẹn hò với ai trong nhóm nếu phải chọn?",
  "Điều bạn hối hận nhất trong đời là gì?",
  "Bạn đã từng xem lén tin nhắn của ai đó chưa?",
  "Thói quen xấu nhất của bạn là gì?",
  "Bạn có bao giờ ghen tị với bạn bè không?",
  "Món quà tệ nhất bạn từng nhận là gì?",
  "Bạn đã từng làm gì mà bố mẹ không bao giờ biết?",
  "Nếu có thể vô hình, bạn sẽ làm gì đầu tiên?",
  "Điều gì khiến bạn cảm thấy ngại ngùng nhất khi ở trường?",
  "Bạn có bao giờ làm bài thi gian lận không?",
  "Người bạn thầm yêu đầu tiên của bạn là ai?",
  "Điều gì trong phòng ngủ của bạn mà không ai biết?"
]

// Dare challenges
const dareChallenges = [
  "Hát một bài hát bất kỳ trong 30 giây",
  "Gửi tin nhắn 'Anh/Em nhớ bạn' cho người liên hệ thứ 5 trong danh bạ",
  "Nhảy một điệu nhảy ngẫu hứng trong 1 phút",
  "Gọi điện cho crush và nói 'Hôm nay bạn đẹp quá'",
  "Đăng một bức ảnh xấu của bạn lên story",
  "Để mọi người xem 5 tin nhắn cuối cùng của bạn",
  "Nói 'Tôi yêu bạn' với người đầu tiên bạn nhìn thấy",
  "Ăn một thứ gì đó mà người khác chọn",
  "Nhắn tin xin lỗi với người bạn đã làm tổn thương",
  "Chụp ảnh selfie với biểu cảm hài hước và gửi cho nhóm",
  "Hát karaoke với giọng điệu buồn cười nhất có thể",
  "Kể một câu chuyện ma trong bóng tối",
  "Làm 20 cái hít đất ngay bây giờ",
  "Gọi điện cho bố/mẹ và nói 'Con yêu bố/mẹ'",
  "Nhảy theo bài hát mà nhóm chọn",
  "Nói ngược một câu dài mà mọi người yêu cầu",
  "Vẽ chân dung người bên cạnh trong 2 phút",
  "Im lặng hoàn toàn trong 3 phút tiếp theo",
  "Bắt chước giọng nói của một người nổi tiếng",
  "Để mọi người đọc tin nhắn gần nhất với crush của bạn"
]

// Shuffle array helper
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!]
  }
  return shuffled
}

// Shuffled arrays
const shuffledTruths = ref<string[]>([])
const shuffledDares = ref<string[]>([])
const currentIndex = ref(0)

// Current questions
const currentTruth = computed(() => shuffledTruths.value[currentIndex.value] || truthQuestions[0])
const currentDare = computed(() => shuffledDares.value[currentIndex.value] || dareChallenges[0])

const flippedCard = ref<'truth' | 'dare' | null>(null)

const flipCard = (cardType: 'truth' | 'dare') => {
  if (!flippedCard.value) {
    flippedCard.value = cardType
  }
}

// Swipe gesture state
const cardTransform = ref('')
const isDragging = ref(false)
let startX = 0
let startY = 0
let currentX = 0
let currentY = 0

const handleTouchStart = (e: TouchEvent) => {
  if (!flippedCard.value) return // Only allow swipe when a card is flipped
  
  if (e.touches && e.touches.length > 0) {
    isDragging.value = true
    startX = e.touches[0]!.clientX
    startY = e.touches[0]!.clientY
  }
}

const handleTouchMove = (e: TouchEvent) => {
  if (!isDragging.value) return

  if (e.touches && e.touches.length > 0) {
    const x = e.touches[0]!.clientX
    const y = e.touches[0]!.clientY
  
    const deltaX = x - startX
    const deltaY = y - startY

    currentX = deltaX
    currentY = deltaY
  
    // Tinder-like rotation: more drag X = more rotation
    const rotate = deltaX * 0.05

    cardTransform.value = `translate(${deltaX}px, ${deltaY}px) rotate(${rotate}deg)`
  }
}

const handleTouchEnd = () => {
  if (!isDragging.value) return
  isDragging.value = false

  const threshold = 100 // Pixel distance to trigger swipe
  
  if (Math.abs(currentX) > threshold) {
    // Swipe triggered - fly off screen
    const flyX = currentX > 0 ? 1000 : -1000
    const flyY = currentY > 0 ? 500 : -500
    const flyRotate = currentX > 0 ? 45 : -45

    cardTransform.value = `translate(${flyX}px, ${flyY}px) rotate(${flyRotate}deg)`
    
    // Wait for animation then move to next question
    setTimeout(() => {
      nextQuestion()
    }, 300)
  } else {
    // Reset - snap back
    cardTransform.value = ''
    currentX = 0
    currentY = 0
  }
}

const nextQuestion = () => {
  // Reset flip state
  flippedCard.value = null
  
  // Reset position
  setTimeout(() => {
    cardTransform.value = ''
    currentX = 0
    currentY = 0
    // Move to next question
    currentIndex.value = (currentIndex.value + 1) % truthQuestions.length
  }, 300)
}

// Initialize shuffled arrays on mount
onMounted(() => {
  shuffledTruths.value = shuffleArray(truthQuestions)
  shuffledDares.value = shuffleArray(dareChallenges)
})
</script>

<template>
  <div class="flex-1 flex flex-col items-center py-8 px-6" 
       :class="{ 'justify-center': flippedCard !== null, 'justify-start': flippedCard === null }"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd">
    <!-- Instruction Text - hide when a card is flipped -->
    <p v-if="!flippedCard" class="text-gray-400 text-base mb-8 text-center">Chọn một lá bài để bắt đầu!</p>

    <!-- Cards Container -->
    <div class="w-full max-w-md" :class="flippedCard ? '' : 'space-y-6'">
      <!-- THẬT Card -->
      <div 
        v-show="!flippedCard || flippedCard === 'truth'"
        class="card-wrapper"
        :class="{ 'is-flipped': flippedCard === 'truth', 'dragging': isDragging }"
        :style="{ transform: flippedCard === 'truth' ? cardTransform : '' }"
        @click="flipCard('truth')"
      >
        <div class="card-flipper">
          <!-- Front Face -->
          <div class="card-face card-front bg-gradient-to-br from-[#4a3a1a] to-[#2d2410] rounded-3xl p-8 shadow-2xl border border-yellow-900/30">
            <div class="flex justify-center mb-6">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center shadow-lg">
                <span class="text-4xl font-black text-[#2d2410]">?</span>
              </div>
            </div>
            <h2 class="text-[#f59e0b] text-4xl font-black text-center mb-3 tracking-wide">THẬT</h2>
            <p class="text-gray-400 text-sm text-center">Chạm để lật thẻ</p>
          </div>

          <!-- Back Face -->
          <div class="card-face card-back bg-[#18181b] rounded-3xl p-8 shadow-2xl border border-[#f59e0b]">
            <div class="mt-4">
              <h3 class="text-[#f59e0b] font-bold tracking-widest text-sm uppercase mb-2 text-center">Câu hỏi Thật</h3>
            </div>
            <div class="flex-1 flex items-center justify-center min-h-[200px]">
              <p class="text-xl font-medium leading-relaxed px-4 select-none text-center text-white">
                {{ currentTruth }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- THÁCH Card -->
      <div 
        v-show="!flippedCard || flippedCard === 'dare'"
        class="card-wrapper"
        :class="{ 'is-flipped': flippedCard === 'dare', 'dragging': isDragging }"
        :style="{ transform: flippedCard === 'dare' ? cardTransform : '' }"
        @click="flipCard('dare')"
      >
        <div class="card-flipper">
          <!-- Front Face -->
          <div class="card-face card-front bg-gradient-to-br from-[#4a3a1a] to-[#2d2410] rounded-3xl p-8 shadow-2xl border border-yellow-900/30">
            <div class="flex justify-center mb-6">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-[#2d2410]">
                  <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <h2 class="text-[#f59e0b] text-4xl font-black text-center mb-3 tracking-wide">THÁCH</h2>
            <p class="text-gray-400 text-sm text-center">Chạm để lật thẻ</p>
          </div>

          <!-- Back Face -->
          <div class="card-face card-back bg-[#18181b] rounded-3xl p-8 shadow-2xl border border-[#f59e0b]">
            <div class="mt-4">
              <h3 class="text-[#f59e0b] font-bold tracking-widest text-sm uppercase mb-2 text-center">Thử thách</h3>
            </div>
            <div class="flex-1 flex items-center justify-center min-h-[200px]">
              <p class="text-xl font-medium leading-relaxed px-4 select-none text-center text-white">
                {{ currentDare }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  width: 100%;
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.3s ease-out;
}

/* Disable transition when dragging for direct control */
.card-wrapper.dragging,
.card-wrapper.dragging .card-flipper {
  transition: none !important;
}

/* When not flipped: front face is relative (normal flow), back is absolute (hidden) */
.card-wrapper:not(.is-flipped) .card-front {
  position: relative;
}

.card-wrapper:not(.is-flipped) .card-back {
  position: absolute;
  top: 0;
  left: 0;
}

/* When flipped: expand to flip-card height and both faces become absolute */
.card-wrapper.is-flipped {
  aspect-ratio: 3/4;
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
}

.card-wrapper.is-flipped .card-front,
.card-wrapper.is-flipped .card-back {
  position: absolute;
  top: 0;
  left: 0;
}

.card-flipper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.card-wrapper.is-flipped .card-flipper {
  transform: rotateY(180deg);
}

.card-face {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  will-change: transform;
}

.card-back {
  transform: rotateY(180deg);
}

/* Hover effect only when not flipped */
.card-wrapper:not(.is-flipped):hover .card-front {
  transform: scale(1.02);
  transition: transform 0.2s ease;
}
</style>
