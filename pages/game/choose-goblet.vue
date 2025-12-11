<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'game',
  headerTitle: 'Chọn ly',
  headerBack: true,
  headerInfo: true
})

interface Card {
  id: number
  number: number
  isFlipped: boolean
}

const cards = ref<Card[]>([])
const selectedGobletCount = ref<number>(3)
const showModal = ref<boolean>(true)

// Tour guide state
const hasSeenTour = useState('hasSeenChooseGobletTour', () => false)
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

// Initialize 9 cards with random numbers from 1 to selected goblet count
const initializeCards = () => {
  const maxNumber = selectedGobletCount.value
  const cardArray: Card[] = []
  
  // Create 9 cards with random numbers
  for (let i = 0; i < 9; i++) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1
    cardArray.push({
      id: i,
      number: randomNumber,
      isFlipped: false
    })
  }
  
  cards.value = cardArray
}

const selectGobletCount = (count: number) => {
  selectedGobletCount.value = count
}

const startGame = () => {
  showModal.value = false
  initializeCards()
}

// Initialize on mount
onMounted(() => {
  // Show tour if not seen before
  if (!hasSeenTour.value) {
    showTour.value = true
  }
})

const flipCard = (cardId: number) => {
  const card = cards.value.find(c => c.id === cardId)
  if (card && !card.isFlipped) {
    card.isFlipped = true
  }
}

const resetGame = () => {
  showModal.value = true
  cards.value = []
}
</script>

<template>
  <div class="flex flex-col h-full">
    <!-- Modal chọn số ly -->
    <div 
      v-if="showModal" 
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
    >
      <div class="bg-gradient-to-br from-[#2d3748] to-[#1a202c] rounded-3xl p-8 w-full max-w-md border-2 border-[#f59e0b]/20 shadow-2xl">
        <h2 class="text-2xl font-black text-white text-center mb-8">Chọn số ly</h2>
        
        <!-- Buttons for selecting goblet count -->
        <div class="flex gap-3 justify-center mb-8">
          <button
            v-for="count in [1, 2, 3, 4, 5]"
            :key="count"
            @click="selectGobletCount(count)"
            class="w-16 h-16 rounded-2xl font-black text-xl transition-all duration-300"
            :class="selectedGobletCount === count 
              ? 'bg-gradient-to-br from-[#f59e0b] to-[#f97316] text-white shadow-lg shadow-[#f59e0b]/50 scale-110' 
              : 'bg-[#1a202c] text-gray-400 border-2 border-gray-700 hover:border-[#f59e0b]/40 hover:text-white'"
          >
            {{ count }}
          </button>
        </div>
        
        <!-- Start button -->
        <button
          @click="startGame"
          class="w-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Bắt đầu
        </button>
      </div>
    </div>

    <!-- Game Grid -->
    <div class="flex-1 flex items-center justify-center py-6">
      <div class="grid grid-cols-3 gap-3 w-full max-w-sm px-4">
        <div
          v-for="card in cards"
          :key="card.id"
          @click="flipCard(card.id)"
          class="card-container aspect-[3/4] cursor-pointer"
          :class="{ 'flipped': card.isFlipped }"
        >
          <div class="card">
            <!-- Card Back (Star) -->
            <div class="card-face card-back">
              <div class="flex items-center justify-center h-full">
                <UIcon name="i-heroicons-star-solid" class="text-[#f59e0b] text-6xl" />
              </div>
            </div>
            
            <!-- Card Front (Number) -->
            <div class="card-face card-front">
              <div class="flex flex-col items-center justify-center h-full gap-1 px-2">
                <span class="text-sm font-medium text-white">Uống</span>
                <span class="text-6xl font-black text-[#f59e0b]">{{ card.number }}</span>
                <span class="text-sm font-medium text-white">ly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Reset Button -->
    <div class="px-4 pb-6">
      <button
        @click="resetGame"
        class="w-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Chơi lại
      </button>
    </div>

    <!-- Tour Guide Overlay -->
    <div v-if="showTour" class="fixed inset-0 bg-black/80 z-[60] flex flex-col items-center justify-center p-8 text-center" @click="nextTourStep">
      <!-- Step 1 -->
      <div v-if="tourStep === 1" class="flex flex-col items-center animate-bounce relative z-50">
        <p class="text-white text-xl font-bold mb-4 max-w-md">Chọn số ly ngẫu nhiên tối đa để uống</p>
        <UIcon name="i-heroicons-cursor-arrow-rays" class="text-5xl text-[#f59e0b] mt-4" />
      </div>

      <!-- Step 2 -->
      <div v-if="tourStep === 2" class="flex flex-col items-center relative z-50">
        <span class="text-8xl mb-6">🍺</span>
        <p class="text-white text-xl font-bold mb-4 max-w-md">Uống tương ứng số ly mà người chơi mở ra</p>
      </div>

      <div class="absolute bottom-12 text-white/40 text-sm">Chạm vào màn hình để tiếp tục</div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  perspective: 1000px;
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.card-container.flipped .card {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  overflow: hidden;
}

.card-back {
  background: linear-gradient(145deg, #2d3748 0%, #1a202c 100%);
  border: 2px solid rgba(245, 158, 11, 0.2);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.card-front {
  background: linear-gradient(145deg, #2d3748 0%, #1a202c 100%);
  border: 3px solid #f59e0b;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(245, 158, 11, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transform: rotateY(180deg);
}

.card-container:hover .card-back {
  border-color: rgba(245, 158, 11, 0.4);
  box-shadow: 
    0 6px 12px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.card-container:active .card {
  transform: scale(0.95);
}

.card-container.flipped:active .card {
  transform: rotateY(180deg) scale(0.95);
}
</style>
