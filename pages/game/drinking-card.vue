<script setup lang="ts">
definePageMeta({
  layout: 'game',
  headerTitle: 'Drinking Card',
  headerBack: true,
  headerInfo: true
})

const isFlipped = ref(false)
const currentIndex = ref(0) // Track current card index
const cardTransform = ref('')
const isDragging = ref(false)

// Gesture State
let startX = 0
let startY = 0
let currentX = 0
let currentY = 0

const challengesOriginal = [
  "Kể tên 5 loại rượu trong 10 giây, nếu không uống 2 ly",
  "Hát một bài hát về tình yêu, nếu không uống 1 ly",
  "Nhảy trong 30 giây, nếu không uống 2 ly",
  "Kể một câu chuyện hài, nếu không uống 1 ly",
  "Bắt chước giọng một người nổi tiếng, nếu không uống 1 ly",
  "Làm 10 cái hít đất, nếu không uống 3 ly",
  "Gọi điện cho crush và nói 'Em nhớ anh', nếu không uống 2 ly",
  "Selfie với biểu cảm hài hước nhất, nếu không uống 1 ly",
  "Kể bí mật của bạn, nếu không uống 2 ly",
  "Nhắn tin cho người yêu cũ 'Anh/Em khỏe không?', nếu không uống 3 ly",
  "Đọc ngược bảng chữ cái, nếu không uống 1 ly",
  "Khen người bên cạnh 3 câu, nếu không uống 1 ly",
  "Im lặng trong 2 phút, nếu không uống 2 ly",
  "Vẽ chân dung người đối diện, nếu không uống 1 ly",
  "Kể về lần xấu hổ nhất, nếu không uống 2 ly",
  "Giả vờ là một con vật trong 1 phút, nếu không uống 1 ly",
  "Nói 'Tôi yêu bạn' với 3 người, nếu không uống 2 ly",
  "Thú nhận một tật xấu, nếu không uống 1 ly",
  "Làm mặt xấu nhất và giữ 10 giây, nếu không uống 1 ly",
  "Kể một câu chuyện ma, nếu không uống 2 ly"
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

// Shuffled challenges
const challenges = ref<string[]>([])

const currentChallenge = computed(() => challenges.value[currentIndex.value])

const toggleFlip = () => {
  if (!isFlipped.value) {
    isFlipped.value = true
  }
}

const handleTouchStart = (e: TouchEvent) => {
  if (!isFlipped.value) return 

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

  const threshold = 100 // Pixel distance to trigger "swipe"
  
  if (Math.abs(currentX) > threshold) {
    // Swipe Triggered (Left or Right -> Next)
    // Fly off screen in the direction of the swipe
    const flyX = currentX > 0 ? 1000 : -1000 // Fly right or left
    const flyY = currentY > 0 ? 500 : -500 // Some vertical movement
    const flyRotate = currentX > 0 ? 45 : -45

    cardTransform.value = `translate(${flyX}px, ${flyY}px) rotate(${flyRotate}deg)`
    
    // Wait for animation then reset
    setTimeout(() => {
        nextCard()
    }, 300)
  } else {
    // Reset (Snap back)
    cardTransform.value = ''
    currentX = 0
    currentY = 0
  }
}

const nextCard = () => {
  // 1. Hide card (reset flip to cover)
  isFlipped.value = false
  
  // 2. Reset position (instant, but after flip starts hiding content)
  setTimeout(() => {
    cardTransform.value = '' // Clear transform
    currentX = 0
    currentY = 0
    // 3. Update content
    currentIndex.value = (currentIndex.value + 1) % challenges.value.length
  }, 300)
}

// Ensure tour shows only once per session (reload resets this state)
const hasSeenTour = useState('hasSeenFlipCardTour', () => false)
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
  if (!hasSeenTour.value) {
    showTour.value = true
  }
  // Shuffle challenges on mount
  challenges.value = shuffleArray(challengesOriginal)
})
</script>

<template>
  <div class="flex-1 flex justify-center items-center py-24 px-4 relative"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd">
    <!-- Remove overflow-hidden from container to prevent clipping 3D box -->
    <div class="card-container" 
         :class="{ flipped: isFlipped, dragging: isDragging, 'z-40': showTour && tourStep === 1 }" 
         :style="{ transform: isFlipped ? cardTransform : '' }"
         @click="toggleFlip">
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

           <h2 class="text-4xl font-bold text-white mb-2 tracking-tight">Cạch Cạch</h2>
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
              <p class="text-xl md:text-2xl font-medium leading-relaxed px-4 select-none">
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

    <!-- Tour Guide Overlay -->
    <div v-if="showTour" class="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center p-8 text-center" @click="nextTourStep">
       
       <!-- Step 1 Instruction -->
       <div v-if="tourStep === 1" class="flex flex-col items-center animate-bounce mb-32 relative z-50">
           <p class="text-white text-xl font-bold mb-4">Chạm vào thẻ bài để xem nội dung</p>
           <UIcon name="i-heroicons-cursor-arrow-rays" class="text-5xl text-[#f59e0b]" />
       </div>

       <!-- Step 2 Instruction -->
       <div v-if="tourStep === 2" class="flex flex-col items-center relative z-50">
           <p class="text-white text-xl font-bold mb-8">Quẹt trái hoặc phải để sang thẻ khác</p>
           <div class="flex gap-12 items-center">
               <UIcon name="i-heroicons-arrow-left" class="text-4xl text-white/50 animate-pulse" />
               <UIcon name="i-heroicons-hand-raised" class="text-6xl text-[#f59e0b] animate-wiggle" />
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
/* ... existing styles ... */

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  /* Default transition for flipping */
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

/* When dragging, we want direct control (no transition lag) */
.card-container.dragging .card-inner,
.card-container.dragging {
  transition: none !important;
}

/* Also apply transition to the container for the swipe snap-back/fly-off, 
   BUT ONLY when NOT dragging. */
.card-container {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 3/4;
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.3s ease-out; /* Smooth swipe return/exit */
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

/* Fix for glitching faces: 
   Manage z-index to ensure the active face is always logically on top 
   to helper the browser render correct layers. */
.card-front, .card-back {
  /* Ensure hardware acceleration */
  transform-style: preserve-3d;
  will-change: transform;
}

/* When NOT flipped (showing Front) */
.card-container:not(.flipped) .card-front {
  z-index: 10;
}
.card-container:not(.flipped) .card-back {
  z-index: 0;
}

/* When flipped (showing Back) */
.card-container.flipped .card-front {
  z-index: 0;
}
.card-container.flipped .card-back {
  z-index: 10;
}
</style>
