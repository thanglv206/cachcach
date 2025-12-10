<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Xác nhận rời khỏi trò chơi?'
  },
  description: {
    type: String,
    default: 'Bạn có chắc chắn muốn rời khỏi trò chơi? Mọi tiến trình hiện tại sẽ bị mất.'
  },
  confirmLabel: {
    type: String,
    default: 'Rời khỏi'
  },
  cancelLabel: {
    type: String,
    default: 'Hủy'
  }
})

const isOpen = ref(false)
const router = useRouter()
let resolveLeave: ((value: boolean) => void) | null = null

onBeforeRouteLeave(() => {
    isOpen.value = true;
  return new Promise((resolve) => {
    
    resolveLeave = resolve;
  });
});

const handleConfirm = () => {
  isOpen.value = false;
  if (resolveLeave) resolveLeave(true); // true → rời, false → ở lại
};

const handleCancel = () => {
  isOpen.value = false;
  if (resolveLeave) resolveLeave(false); // true → rời, false → ở lại
};
</script>

<template>
  <UModal v-model:open="isOpen" :ui="{ overlay: { background: 'bg-black/80 backdrop-blur-sm' } } as any">
    <template #content>
        <div class="bg-[#1e1e1e] rounded-2xl p-6 text-center border border-white/5 shadow-2xl">
            <h3 class="text-xl font-bold text-white mb-3 tracking-tight">{{ title }}</h3>
            
            <p class="text-gray-400 text-sm leading-relaxed mb-8">
                {{ description }}
            </p>

            <div class="grid grid-cols-2 gap-3">
                <button 
                class="px-4 py-3 rounded-full bg-[#3a3a3a] text-white font-medium hover:bg-[#4a4a4a] transition-colors duration-200"
                @click="handleCancel"
                >
                {{ cancelLabel }}
                </button>
                <button 
                class="px-4 py-3 rounded-full bg-orange-500 text-black font-bold hover:bg-orange-400 transition-colors duration-200"
                @click="handleConfirm"
                >
                {{ confirmLabel }}
                </button>
            </div>
        </div>    
    </template>
  </UModal>
</template>
