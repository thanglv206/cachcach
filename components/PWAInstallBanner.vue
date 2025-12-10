<template>
  <Transition name="slide-down">
    <div v-if="showBanner" class="pwa-install-banner">
      <div class="banner-content">
        <div class="banner-info">
          <div class="app-icon">
            <img src="/icon-192x192.png" alt="Cạch Cạch" />
          </div>
          <div class="app-details">
            <h3 class="app-name">Cạch Cạch</h3>
            <p class="app-description">Cài đặt app để trải nghiệm tốt hơn</p>
          </div>
        </div>
        
        <div class="banner-actions">
          <button @click="handleInstall" class="install-btn">
            <UIcon name="i-heroicons-arrow-down-tray" class="text-lg" />
            <span>Cài đặt</span>
          </button>
          <button @click="handleDismiss" class="dismiss-btn" aria-label="Đóng">
            <UIcon name="i-heroicons-x-mark" class="text-xl" />
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { showBanner, showInstallPrompt, dismissBanner } = usePWAInstall()

const handleInstall = async () => {
  const installed = await showInstallPrompt()
  if (!installed) {
    console.log('Installation was cancelled or failed')
  }
}

const handleDismiss = () => {
  dismissBanner()
}
</script>

<style scoped>
.pwa-install-banner {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 12px 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.pwa-install-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: slide 3s ease-in-out infinite;
}

@keyframes slide {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.banner-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  position: relative;
  z-index: 1;
}

.banner-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
}

.app-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.app-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.app-details {
  flex: 1;
  min-width: 0;
}

.app-name {
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.2;
}

.app-description {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin: 2px 0 0;
  line-height: 1.3;
}

.banner-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.install-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: white;
  color: #667eea;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.install-btn:hover {
  background: #f8f9ff;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.install-btn:active {
  transform: translateY(0);
}

.dismiss-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.dismiss-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.dismiss-btn:active {
  transform: scale(0.95);
}

/* Transition animations */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Mobile responsive */
@media (max-width: 640px) {
  .app-name {
    font-size: 14px;
  }
  
  .app-description {
    font-size: 12px;
  }
  
  .install-btn span {
    display: none;
  }
  
  .install-btn {
    padding: 8px 12px;
  }
}
</style>
