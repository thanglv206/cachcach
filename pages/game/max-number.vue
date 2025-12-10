<script setup lang="ts">
import { ref, onMounted } from 'vue'

definePageMeta({
  layout: 'game',
  headerTitle: 'Số lớn nhất',
  headerBack: true
})

interface Card {
  id: number
  number: number
  isFlipped: boolean
}

const cards = ref<Card[]>([])

// Initialize cards with random numbers
const initializeCards = () => {
  const numbers = Array.from({ length: 9 }, (_, i) => i + 1)
    .map(() => Math.floor(Math.random() * 100) + 1)
  
  cards.value = numbers.map((number, index) => ({
    id: index,
    number,
    isFlipped: false
  }))
}

const flipCard = (cardId: number) => {
  const card = cards.value.find(c => c.id === cardId)
  if (card && !card.isFlipped) {
    card.isFlipped = true
  }
}

const resetGame = () => {
  initializeCards()
}

onMounted(() => {
  initializeCards()
})
</script>

<template>
  <div class="flex flex-col h-full">
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
              <div class="flex items-center justify-center h-full">
                <span class="text-5xl font-black text-[#f59e0b]">{{ card.number }}</span>
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
