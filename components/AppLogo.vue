<template>
  <div 
    :class="[
      'bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center shadow-lg transition-transform hover:scale-105',
      sizeClasses[size].container
    ]"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      :class="[
        'text-[#1a1a1a]',
        sizeClasses[size].icon
      ]"
    >
      <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.177 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
    </svg>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  size: 'md'
})

const sizeClasses = {
  sm: {
    container: 'w-10 h-10 rounded-xl',
    icon: 'w-6 h-6'
  },
  md: {
    container: 'w-12 h-12 rounded-2xl',
    icon: 'w-7 h-7'
  },
  lg: {
    container: 'w-24 h-24 rounded-[2.5rem]',
    icon: 'w-14 h-14'
  }
}
</script>
