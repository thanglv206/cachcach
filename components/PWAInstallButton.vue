<template>
  <UButton
    v-if="showButton"
    icon="i-heroicons-arrow-down-tray"
    color="neutral"
    variant="ghost"
    class="pwa-install-button p-0 text-xl text-white relative"
    @click="handleInstall"
    aria-label="Cài đặt app"
  >
    <span class="pulse-ring"></span>
  </UButton>
</template>

<script setup lang="ts">
const { showButton, showInstallPrompt } = usePWAInstall()

const handleInstall = async () => {
  const installed = await showInstallPrompt()
  if (installed) {
    console.log('App installed successfully from button')
  }
}
</script>

<style scoped>
.pwa-install-button {
  position: relative;
}

.pulse-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 2px solid #f59e0b;
  border-radius: 50%;
  animation: pulse 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
  pointer-events: none;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}

.pwa-install-button:hover .pulse-ring {
  animation-play-state: paused;
}
</style>
