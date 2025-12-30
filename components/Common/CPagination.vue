<template>
  <div class="flex items-center justify-center gap-2 py-4 md:py-8">
    <!-- Prev Button -->
    <button
      @click="updatePage(modelValue - 1)"
      :disabled="modelValue === 1"
      class="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
    >
      <UIcon name="i-heroicons-chevron-left-20-solid" class="w-5 h-5" />
    </button>

    <!-- Page Numbers -->
    <div class="flex items-center gap-2">
      <template v-for="page in visiblePages" :key="page">
        <button
          v-if="typeof page === 'number'"
          @click="updatePage(page)"
          :class="[
            'w-10 h-10 rounded-xl font-bold text-sm transition-all',
            modelValue === page 
              ? 'bg-[#f59e0b] text-black shadow-[0_4px_15px_rgba(245,158,11,0.3)]' 
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          ]"
        >
          {{ page }}
        </button>
        <span v-else class="text-gray-600 px-2 font-bold">...</span>
      </template>
    </div>

    <!-- Next Button -->
    <button
      @click="updatePage(modelValue + 1)"
      :disabled="modelValue === totalPages"
      class="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
    >
      <UIcon name="i-heroicons-chevron-right-20-solid" class="w-5 h-5" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: number
  totalPages: number
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const updatePage = (page: number) => {
  if (page >= 1 && page <= props.totalPages && page !== props.modelValue) {
    emit('update:modelValue', page)
  }
}

const visiblePages = computed(() => {
  const current = props.modelValue
  const last = props.totalPages
  const delta = 2
  const left = current - delta
  const right = current + delta + 1
  const range = []
  const rangeWithDots = []
  let l

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i)
    }
  }

  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push('...')
      }
    }
    rangeWithDots.push(i)
    l = i
  }

  return rangeWithDots
})
</script>
