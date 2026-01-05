<script setup lang="ts">
definePageMeta({
  layout: 'game',
  headerTitle: 'Thước phim cuộc đời',
  headerBack: true,
  headerInfo: true
})

const isFlipped = ref(false)
const currentIndex = ref(0) 
const cardTransform = ref('')
const isDragging = ref(false)

let startX = 0
let startY = 0
let currentX = 0
let currentY = 0

const challengesOriginal = [
  "Bạn đã từ tè dầm chưa? Nếu rồi thì uống một ly thôi.",
  "Hồi nhỏ bạn đã từng trốn bố mẹ đi chơi net đúng không? Uống một ly vì tuổi thơ dữ dội đi nào.",
  "Hãy hỏi lần lượt các thành viên ai chưa từng bị 0 điểm thì cụng ly nào.",
  "Bạn sẽ uống một ly nếu bạn từng khóc vì một chú cún, hay một chú mèo,",
  "Uống một ly nếu hồi nhỏ bạn từng thử đồ của người lớn như giày cao gót, son môi,..,",
  "Những ai đã từng biểu diễn văn nghệ ở lớp ở trường thì được thưởng một ly.",
  "Uống một ly nếu bạn từng làm hoặc bị ai đó kéo dây áo con ở trong.",
  "Những ai đã từng đánh nhau khi đi học thì cụng với nhau một ly nào.",
  "Lần lượt, hãy kể về số lượng người yêu thời cấp 2 của bản thân bao nhiêu người, thì bấy nhiêu ly.",
  "Những ai đã từng xem phim sẽ năm cấp hai thì uống với nhau một ly đầy nào.",
  "Nếu bạn đã từng bị cắm sừng thời còn đi học thì hãy đứng lên, cầm ly và kể về \"chuyện đã từng\" nào.",
  "Bạn đã từng có nụ hôn nào vào thời đi học cấp 3 chưa? Nếu có thì không phải uống nha.",
  "Bạn đã từng yêu ai cùng lớp chưa? Nếu giờ còn yêu thì không phải uống Nếu hớt duyên rồi thì cạn ly nào.",
  "Nếu bạn đã từng viết thư tình hoặc được nhận thư tình thì chúc mừng bạn, làm một ly thôi.",
  "Bạn đã từng xưng vợ chồng với ai đó thời đi học chưa? Người đó giờ ra sao rồi?",
  "Uống một ly nếu thời đi học bạn từng tỏ tình thất bại.,",
  "Uống một ly nếu bạn từng yêu bạn thân của bạn Tình tay ba à?",
  "Nếu bạn đã từng học lại thì uống một ly nào,",
  "Uống một ly nếu bạn từng chơi game liên tục thâu đêm.",
  "Nếu bạn đã từng có một mối tình từ cấp ba lên tới đại học thì uống một ly nào,",
  "Uống một ly nếu bạn từng có tình yêu thông qua mạng xã hội.",
  "Nếu bạn từng có một mối quan hệ trên tình bạn dưới tình yêu.",
  "Uống một ly nếu bạn từng yêu đơn phương ai đó.",
  "Nếu thời đại học bạn từng nghèo đến mức phải ăn mỳ gói thay bữa.",
  "Uống hai ly nếu bạn đã từng tán hộ ai đó giúp bạn mình.",
  "Nếu bạn từng thích người yêu của bạn bè bạn thì người bên trái bạn có quyết định bạn uống bao nhiêu ly.",
  "Nếu bạn đã từng thẩm du lén lút khi nhà có người thì uống một ly nào.",
  "Uống một ly nếu bạn từng tham gia clb, hoặc hội nhóm tại trường đại học.",
  "Những người cùng chung trường đại học thì uống một ly nào.",
  "Uống một ly nếu bạn từng tốt nghiệp đại học trên 3.0.",
  "Uống một ly nếu bạn từng được tán tỉnh khi đi học cấp 2.",
  "Uống một ly nếu bạn từng có một mối tình thời đại học.",
  "Uống một ly nếu bạn từng bị nợ lương.",
  "Những ai đã từng quay lại với người yêu cũ thì uống môt ly.",
  "Nếu bạn đã từng hẹn hò trên 2 người trong 1 tuần thì uống một ly,",
  "Nếu bạn đã từng yêu ai đó trong vòng 1 tháng rồi chia tay thì uống một ly,",
  "Uống một ly nếu bạn từng say quắc cần câu,",
  "Uống một ly nếu bạn từng khóc sướt mướt sau chia tay.",
  "Uống một ly nếu bạn từng đạp phải cứt chó.",
  "Nếu bạn từng đi stalk ai đó trên mạng xã hội thì uống một ly.",
  "Nếu bạn từng đi soi nyc của nym thì uống môt ly.",
  "Uống một ly nếu bạn từng có một nụ hôn đồng giới, kể cả hôn má.",
  "Uống một ly nếu bạn từng đi chùa cầu duyên. ",
  "Bạn đã từng have “sẽ” trên 2 người thì uống một ly.",
  "Bạn có thích hoặc từng thích ai trong nhóm này không? Nếu có thì uống một ly.",
  "Uống hai ly nếu bạn từng giả vờ say để đạt được mục đích nào đó.",
  "Uống hai ly nếu sở hữu món đồ chơi sẽ damdang bị bắt quả tang nha. ",
  "Uống một ly nếu bạn từng hằng ngày vào xem facebook người yêu cũ sau chia tay.",
  "Uống hai ly nếu bạn từng thả thính người khác nhưng không yêu.",
  "Nếu bạn đã từng “chơi đồ” thì uống hai ly đi nào.",
  "Uống một ly nếu bạn từng có một tình yêu kéo dài không quá một tháng.",
  "Uống một ly nếu bạn từng làm mất ví tiền."
]

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!]
  }
  return shuffled
}

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
        nextCard()
    }, 300)
  } else {
    cardTransform.value = ''
    currentX = 0
    currentY = 0
  }
}

const nextCard = () => {
  isFlipped.value = false
  setTimeout(() => {
    cardTransform.value = '' 
    currentX = 0
    currentY = 0
    currentIndex.value = (currentIndex.value + 1) % challenges.value.length
  }, 300)
}

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
  challenges.value = shuffleArray(challengesOriginal)
})
</script>

<template>
  <div class="flex-1 flex justify-center items-center py-24 px-4 relative"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd">
    <div class="card-container" 
         :class="{ flipped: isFlipped, dragging: isDragging, 'z-40': showTour && tourStep === 1 }" 
         :style="{ transform: isFlipped ? cardTransform : '' }"
         @click="toggleFlip">
      <div class="card-inner">
        <!-- Front Side (Cover) -->
        <div class="card-front relative flex flex-col items-center justify-center p-8 text-center bg-[#18181b] text-white rounded-[2rem] shadow-2xl overflow-hidden border border-white/5">
          <div class="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#b45309] rounded-tl-2xl opacity-80"></div>
          <div class="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#b45309] rounded-br-2xl opacity-80"></div>
          <div class="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#b45309] rounded-tr-2xl opacity-80"></div>
          <div class="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#b45309] rounded-bl-2xl opacity-80"></div>

          <div class="relative w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#4c1d95] flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)]">
             <div class="absolute inset-0 rounded-full bg-white/10 blur-md"></div>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-white drop-shadow-md relative z-10">
                <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-15ZM10.5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm-3 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM18 16.5H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 0 1.5Zm-9-3h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5Z" />
              </svg>
          </div>

           <h2 class="text-4xl font-bold text-white mb-2 tracking-tight">Cạch Cạch</h2>
           <p class="text-white/40 text-sm font-light tracking-wide mt-2">Chăm để lật thẻ</p>
        </div>

        <!-- Back Side (Content) -->
        <div class="card-back flex flex-col items-center justify-between p-8 text-center bg-[#18181b] text-white rounded-[2rem] shadow-lg border border-[#8b5cf6]">
           <div class="mt-4">
              <h3 class="text-[#8b5cf6] font-bold tracking-widest text-sm uppercase mb-2">Thước phim cuộc đời</h3>
           </div>
           <div class="flex-1 flex items-center justify-center">
              <p class="text-xl md:text-2xl font-medium leading-relaxed px-4 select-none">
                {{ currentChallenge }}
              </p>
           </div>
           <div class="mb-4 flex items-center gap-2 text-gray-400 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#8b5cf6]">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
              </svg>
              <span>Thời gian: Không giới hạn</span>
           </div>
        </div>
      </div>
    </div>

    <!-- Tour Guide Overlay -->
    <div v-if="showTour" class="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center p-8 text-center" @click="nextTourStep">
       <div v-if="tourStep === 1" class="flex flex-col items-center animate-bounce mb-32 relative z-50">
           <p class="text-white text-xl font-bold mb-4">Chạm vào thẻ bài để xem nội dung</p>
           <UIcon name="i-heroicons-cursor-arrow-rays" class="text-5xl text-[#8b5cf6]" />
       </div>
       <div v-if="tourStep === 2" class="flex flex-col items-center relative z-50">
           <p class="text-white text-xl font-bold mb-8">Quẹt trái hoặc phải để sang thẻ khác</p>
           <div class="flex gap-12 items-center">
               <UIcon name="i-heroicons-arrow-left" class="text-4xl text-white/50 animate-pulse" />
               <UIcon name="i-heroicons-hand-raised" class="text-6xl text-[#8b5cf6] animate-wiggle" />
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

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.card-container.dragging .card-inner,
.card-container.dragging {
  transition: none !important;
}

.card-container {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 3/4;
  perspective: 1000px;
  cursor: pointer;
  transition: transform 0.3s ease-out; 
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
  border-radius: 1.5rem; 
}

.card-back {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  transform-style: preserve-3d;
  will-change: transform;
}

.card-container:not(.flipped) .card-front {
  z-index: 10;
}
.card-container:not(.flipped) .card-back {
  z-index: 0;
}

.card-container.flipped .card-front {
  z-index: 0;
}
.card-container.flipped .card-back {
  z-index: 10;
}
</style>
