<script setup lang="ts">
definePageMeta({
  layout: 'game',
  headerTitle: 'Lật Thẻ',
  headerBack: true,
  headerInfo: true
})

const isFlipped = ref(false)

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <div class="flex-1 flex justify-center items-center py-24">
    <div class="card-container" :class="{ flipped: isFlipped }" @click="toggleFlip">
      <div class="card-inner">
        <!-- Front Side (Orange) -->
        <div class="card-front flex flex-col items-center justify-center p-8 text-center bg-[#FF9000] rounded-2xl shadow-lg border-2 border-orange-400">
           <div class="text-white/80 font-medium tracking-widest text-sm mb-4 uppercase">CheerUp</div>
           <h2 class="text-3xl font-bold text-white mb-2">Chạm để lật thẻ</h2>
           <p class="text-white/90 text-sm font-medium">Khám phá thử thách đang chờ bạn</p>
        </div>

        <!-- Back Side (Dark/Content) -->
        <div class="card-back flex flex-col items-center justify-center p-8 text-center bg-[#1e2530] text-white rounded-2xl shadow-lg border border-gray-700">
          <div class="text-[#FF9000] font-medium tracking-widest text-sm mb-4 uppercase">Challenge</div> <!-- Placeholder Content -->
          <h2 class="text-2xl font-bold mb-4">Gọi điện cho người yêu cũ</h2>
          <p class="text-gray-400 text-sm">Hỏi thăm sức khỏe và chúc họ hạnh phúc</p>
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
