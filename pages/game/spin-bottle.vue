<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'game',
  headerTitle: 'Xoay chai',
  headerBack: true,
  headerInfo: true
})

const rotation = ref(0)
const isSpinning = ref(false)

// Tour guide state
const hasSeenTour = useState('hasSeenSpinBottleTour', () => false)
const showTour = ref(false)
const tourStep = ref(1)

const nextTourStep = () => {
  if (tourStep.value < 3) {
    tourStep.value++
  } else {
    showTour.value = false
    hasSeenTour.value = true
  }
}

// Initialize on mount
onMounted(() => {
  // Show tour if not seen before
  if (!hasSeenTour.value) {
    showTour.value = true
  }
})

const spinBottle = () => {
  if (isSpinning.value) return
  
  isSpinning.value = true
  // At least 5 full rotations (1800 deg) plus a random angle
  const extraRotations = 5 + Math.floor(Math.random() * 10)
  const finalAngle = Math.floor(Math.random() * 360)
  rotation.value += extraRotations * 360 + finalAngle
  
  // Disable button during spin transition (3 seconds)
  setTimeout(() => {
    isSpinning.value = false
  }, 3000)
}
</script>

<template>
  <div class="flex-1 flex flex-col items-center justify-between py-10 relative overflow-hidden transition-all duration-500">
    <!-- Screen Border Highlight Shadow -->
    <div 
      class="fixed inset-0 pointer-events-none z-[100] transition-opacity duration-700 ease-in-out border-shadow-glow"
      :class="isSpinning ? 'opacity-100' : 'opacity-0'"
    ></div>

    <!-- Wooden Table Background -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/images/games/wooden-table.png" 
        alt="Wooden Table" 
        class="w-full h-full object-cover opacity-80"
      />
      <!-- Vignette and Lateral Overlays for smooth transition to UI background -->
      <div 
        class="absolute inset-0 z-10 shadow-[inset_0_0_100px_rgba(21,28,36,0.6)]"
        style="background: 
          radial-gradient(circle at center, transparent 10%, #151c24 100%),
          linear-gradient(to right, #151c24 0%, transparent 15%, transparent 85%, #151c24 100%);"
      ></div>
    </div>

    <!-- Bottle Container -->
    <div class="relative z-10 flex-1 flex items-center justify-center w-full">
      <div 
        class="bottle-wrapper"
        :style="{ transform: `rotate(${rotation}deg)` }"
      >
        <img 
          src="/images/games/beer-bottle.png" 
          alt="Beer Bottle" 
          class="w-60 h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        />
      </div>
    </div>

    <!-- Spin Button Section -->
    <div class="w-full px-4 mb-2 relative z-10">
      <button 
        @click="spinBottle"
        :disabled="isSpinning"
        class="w-full bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 disabled:hover:scale-100 uppercase tracking-widest"
      >
        {{ isSpinning ? 'Ai đây, ai đây,...' : 'XOAY CHAI' }}
      </button>
    </div>

    <!-- Tour Guide Overlay -->
    <div v-if="showTour" class="fixed inset-0 bg-black/80 z-[60] flex flex-col items-center justify-center p-8 text-center" @click="nextTourStep">
      <!-- Step 1 -->
      <div v-if="tourStep === 1" class="flex flex-col items-center animate-bounce relative z-50">
        <span class="text-8xl mb-6">📱</span>
        <p class="text-white text-xl font-bold mb-4 max-w-md">Đặt điện thoại chính giữa bàn, anh em xếp thành vòng tròn</p>
        <UIcon name="i-heroicons-cursor-arrow-rays" class="text-5xl text-[#f59e0b] mt-4" />
      </div>

      <!-- Step 2 -->
      <div v-if="tourStep === 2" class="flex flex-col items-center relative z-50">
        <span class="text-8xl mb-6">🍺</span>
        <p class="text-white text-xl font-bold mb-4 max-w-md">Chai bia xoay vào ai, người đó uống 1 ly</p>
      </div>

      <!-- Step 3 -->
      <div v-if="tourStep === 3" class="flex flex-col items-center relative z-50">
        <span class="text-8xl mb-6">⚖️</span>
        <p class="text-white text-xl font-bold mb-4 max-w-md">Nếu chai xoay vào giữa 2 người, cả 2 cùng uống</p>
      </div>

      <div class="absolute bottom-12 text-white/40 text-sm">Chạm vào màn hình để tiếp tục</div>
    </div>
  </div>
</template>

<style scoped>
.bottle-wrapper {
  transition: transform 3s cubic-bezier(0.15, 0, 0.15, 1);
  will-change: transform;
}

.bottle-wrapper {
  transition: transform 3s cubic-bezier(0.15, 0, 0.15, 1);
  will-change: transform;
}

.border-shadow-glow {
  box-shadow: inset 0 0 10px rgba(245, 158, 11, 0.3), inset 0 0 30px rgba(245, 158, 11, 0.15);
}

/* Optional: Add a very subtle pulse while active to keep it 'alive' */
.border-shadow-glow.opacity-100 {
  animation: soft-pulse 2s ease-in-out infinite;
}

@keyframes soft-pulse {
  0%, 100% { 
    box-shadow: inset 0 0 10px rgba(245, 158, 11, 0.3), inset 0 0 30px rgba(245, 158, 11, 0.15);
  }
}

/* Add a subtle glow behind the bottle */
.bottle-wrapper::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(20px);
  z-index: -1;
}
</style>
