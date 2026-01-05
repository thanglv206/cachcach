<script setup lang="ts">
definePageMeta({
  layout: 'game',
  headerTitle: '18+',
  headerBack: true,
  headerInfo: true
})

// Truth questions
const truthQuestions = [
  "Điều táo bạo nhất bạn từng làm trong tình yêu là gì?",
  "Bạn có thích được người khác giới chạm vào đâu nhất?",
  "Lần đầu tiên của bạn diễn ra như thế nào?",
  "Bạn có bao giờ nảy sinh ý định 'ngoại tình' trong tư tưởng chưa?",
  "Điều gì ở người khác giới khiến bạn cảm thấy bị thu hút nhất?",
  "Bạn đã từng có tình một đêm chưa?",
  "Tư thế yêu thích nhất của bạn là gì?",
  "Bạn có bao giờ xem phim người lớn cùng người yêu không?",
  "Điều gì khiến bạn cảm thấy hưng phấn nhất?",
  "Bạn đã bao giờ thử 'chuyện ấy' ở nơi công cộng chưa?",
  "Bạn có thích được bịt mắt khi đang yêu không?",
  "Điều điên rồ nhất bạn từng làm trên giường là gì?",
  "Bạn có bao giờ mơ về một người không phải người yêu mình chưa?",
  "Bạn thích ánh sáng hay bóng tối hơn khi làm chuyện ấy?",
  "Điều gì là 'điểm G' của bạn?",
  "Bạn đã từng thử những trò chơi mạo hiểm trong tình yêu chưa?",
  "Bạn có bao giờ bị bắt gặp khi đang làm chuyện ấy không?",
  "Điều bí mật nhất mà bạn muốn thử cùng người yêu là gì?",
  "Bạn đã bao giờ nảy sinh tình cảm với người yêu của bạn thân chưa?",
  "Nếu được chọn một người trong nhóm này để có một đêm cháy bỏng, bạn chọn ai?"
]

// Dare challenges
const dareChallenges = [
  "Thực hiện một động tác sexy trong 30 giây",
  "Thì thầm điều gì đó ngọt ngào vào tai người ngồi cạnh",
  "Hôn lên cổ người ngồi bên phải bạn",
  "Cho phép người bên cạnh kiểm tra tin nhắn gần nhất của bạn với người yêu",
  "Tháo một món đồ trên người (ngoại trừ quần áo chính)",
  "Nhắn tin cho người yêu cũ và nói 'Em/Anh vẫn nhớ mùi hương của anh/em'",
  "Mô phỏng một âm thanh gợi cảm",
  "Để một người trong nhóm vẽ lên người bạn",
  "Ăn một miếng trái cây từ miệng người khác",
  "Thực hiện một điệu nhảy quyến rũ xung quanh một thành viên trong nhóm",
  "Để mọi người xem ảnh gợi cảm nhất trong điện thoại của bạn",
  "Cắn nhẹ vào tai người ngồi bên trái",
  "Kể về một ảo tưởng thầm kín của bạn",
  "Thử thách người khác giới trong nhóm làm một điều gì đó mạo hiểm",
  "Uống 3 ly liên tiếp nếu không muốn kể về lần đầu tiên",
  "Để một người trong nhóm massage vai cho bạn trong 2 phút",
  "Nói một câu thả thính cực mạnh với người đối diện",
  "Chia sẻ về nụ hôn nồng cháy nhất bạn từng có",
  "Bắt chước một cảnh phim lãng mạn cùng một thành viên",
  "Để người khác chọn một thử thách 'nóng' cho bạn"
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
  if (!flippedCard.value) return 
  
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
  
    const rotate = deltaX * 0.05
    cardTransform.value = `translate(${deltaX}px, ${deltaY}px) rotate(${rotate}deg)`
  }
}

const handleTouchEnd = () => {
  if (!isDragging.value) return
  isDragging.value = false

  const threshold = 100 
  
  if (Math.abs(currentX) > threshold) {
    const flyX = currentX > 0 ? 1000 : -1000
    const flyY = currentY > 0 ? 500 : -500
    const flyRotate = currentX > 0 ? 45 : -45

    cardTransform.value = `translate(${flyX}px, ${flyY}px) rotate(${flyRotate}deg)`
    
    setTimeout(() => {
      nextQuestion()
    }, 300)
  } else {
    cardTransform.value = ''
    currentX = 0
    currentY = 0
  }
}

const nextQuestion = () => {
  flippedCard.value = null
  
  setTimeout(() => {
    cardTransform.value = ''
    currentX = 0
    currentY = 0
    currentIndex.value = (currentIndex.value + 1) % truthQuestions.length
  }, 300)
}

const hasSeenTour = useState('hasSeenTruthOrDareTour', () => false)
const showTour = ref(false)
const tourStep = ref(1)

const nextTourStep = () => {
  if (tourStep.value < 2) {
    tourStep.value++
  } else {
    showTour.value = false
    hasSeenTour.value = true
  }
}

onMounted(() => {
  shuffledTruths.value = shuffleArray(truthQuestions)
  shuffledDares.value = shuffleArray(dareChallenges)
  
  if (!hasSeenTour.value) {
    showTour.value = true
  }
})
</script>

<template>
  <div class="flex-1 flex flex-col items-center justify-center py-8 px-6" 
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd">
    <p v-if="!flippedCard" class="text-gray-400 text-base mb-8 text-center">Chọn một lá bài để bắt đầu!</p>

    <div class="w-full max-w-md mx-auto" :class="flippedCard ? '' : 'space-y-6'">
      <div 
        v-show="!flippedCard || flippedCard === 'truth'"
        class="card-wrapper"
        :class="{ 'is-flipped': flippedCard === 'truth', 'dragging': isDragging }"
        :style="{ transform: flippedCard === 'truth' ? cardTransform : '' }"
        @click="flipCard('truth')"
      >
        <div class="card-flipper">
          <div class="card-face card-front bg-gradient-to-br from-[#4a0a0a] to-[#2d0707] rounded-3xl p-6 shadow-2xl border border-red-900/30">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex items-center justify-center shadow-lg">
                <UIcon name="i-heroicons-fire-20-solid" class="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 class="text-[#ef4444] text-3xl font-black text-center mb-2 tracking-wide">THẬT</h2>
            <p class="text-gray-400 text-sm text-center">Chạm để lật thẻ</p>
          </div>

          <div class="card-face card-back bg-[#18181b] rounded-3xl p-8 shadow-2xl border border-[#ef4444]">
            <div class="mt-4">
              <h3 class="text-[#ef4444] font-bold tracking-widest text-sm uppercase mb-2 text-center">Câu hỏi Thật 18+</h3>
            </div>
            <div class="flex-1 flex items-center justify-center min-h-[200px]">
              <p class="text-xl font-medium leading-relaxed px-4 select-none text-center text-white">
                {{ currentTruth }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div 
        v-show="!flippedCard || flippedCard === 'dare'"
        class="card-wrapper"
        :class="{ 'is-flipped': flippedCard === 'dare', 'dragging': isDragging }"
        :style="{ transform: flippedCard === 'dare' ? cardTransform : '' }"
        @click="flipCard('dare')"
      >
        <div class="card-flipper">
          <div class="card-face card-front bg-gradient-to-br from-[#4a0a0a] to-[#2d0707] rounded-3xl p-6 shadow-2xl border border-red-900/30">
            <div class="flex justify-center mb-4">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white">
                  <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <h2 class="text-[#ef4444] text-3xl font-black text-center mb-2 tracking-wide">THÁCH</h2>
            <p class="text-gray-400 text-sm text-center">Chạm để lật thẻ</p>
          </div>

          <div class="card-face card-back bg-[#18181b] rounded-3xl p-8 shadow-2xl border border-[#ef4444]">
            <div class="mt-4">
              <h3 class="text-[#ef4444] font-bold tracking-widest text-sm uppercase mb-2 text-center">Thử thách 18+</h3>
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

    <!-- Tour Guide Overlay -->
    <div v-if="showTour" class="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center p-8 text-center" @click="nextTourStep">
       <div v-if="tourStep === 1" class="flex flex-col items-center animate-bounce mb-32 relative z-50">
           <p class="text-white text-xl font-bold mb-4">Chọn 1 trong 2 lá bài Thật hay Thách</p>
           <UIcon name="i-heroicons-cursor-arrow-rays" class="text-5xl text-[#ef4444]" />
       </div>
       <div v-if="tourStep === 2" class="flex flex-col items-center relative z-50">
           <p class="text-white text-xl font-bold mb-8">Vuốt sang ngang để chuyển sang cặp bài mới</p>
           <div class="flex gap-12 items-center">
               <UIcon name="i-heroicons-arrow-left" class="text-4xl text-white/50 animate-pulse" />
               <UIcon name="i-heroicons-hand-raised" class="text-6xl text-[#ef4444] animate-wiggle" />
               <UIcon name="i-heroicons-arrow-right" class="text-4xl text-white/50 animate-pulse" />
           </div>
       </div>
       <div class="absolute bottom-12 text-white/40 text-sm">Chạm vào màn hình để tiếp tục</div>
    </div>
  </div>
</template>

<style scoped>
@keyframes wiggle {
  0%, 100% { transform: rotate(-10deg); }
  50% { transform: rotate(10deg); }
}
.animate-wiggle {
  animation: wiggle 1s ease-in-out infinite;
}

.card-wrapper {
  width: 100%;
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.3s ease-out;
}

.card-wrapper.dragging,
.card-wrapper.dragging .card-flipper {
  transition: none !important;
}

.card-wrapper:not(.is-flipped) .card-front {
  position: relative;
}

.card-wrapper:not(.is-flipped) .card-back {
  position: absolute;
  top: 0;
  left: 0;
}

.card-wrapper.is-flipped {
  aspect-ratio: 3/4;
  max-width: 320px;
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

.card-wrapper:not(.is-flipped):hover .card-front {
  transform: scale(1.02);
  transition: transform 0.2s ease;
}
</style>
