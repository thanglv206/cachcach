import { ref, onMounted, computed } from 'vue'

export const usePWAInstall = () => {
    const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null)
    const isInstallable = ref(false)
    const isInstalled = ref(false)
    const isDismissed = ref(false)

    // Check if app is already installed
    const checkIfInstalled = () => {
        // Check if running in standalone mode (installed PWA)
        if (typeof window !== 'undefined') {
            isInstalled.value = window.matchMedia('(display-mode: standalone)').matches ||
                (window.navigator as any).standalone === true
        }
    }

    // Check if user has dismissed the banner
    const checkDismissedStatus = () => {
        if (typeof window !== 'undefined') {
            const dismissed = localStorage.getItem('pwa-banner-dismissed')
            isDismissed.value = dismissed === 'true'
        }
    }

    // Show install prompt
    const showInstallPrompt = async () => {
        if (!deferredPrompt.value) {
            console.log('Install prompt not available')
            return false
        }

        try {
            // Show the install prompt
            deferredPrompt.value.prompt()

            // Wait for the user to respond to the prompt
            const { outcome } = await deferredPrompt.value.userChoice

            console.log(`User response to the install prompt: ${outcome}`)

            if (outcome === 'accepted') {
                console.log('User accepted the install prompt')
                isInstalled.value = true
            }

            // Clear the deferredPrompt for next time
            deferredPrompt.value = null
            isInstallable.value = false

            return outcome === 'accepted'
        } catch (error) {
            console.error('Error showing install prompt:', error)
            return false
        }
    }

    // Dismiss the banner
    const dismissBanner = () => {
        isDismissed.value = true
        if (typeof window !== 'undefined') {
            localStorage.setItem('pwa-banner-dismissed', 'true')
        }
    }

    // Show banner visibility state
    const showBanner = computed(() => {
        return isInstallable.value && !isInstalled.value && !isDismissed.value
    })

    // Show button visibility state
    const showButton = computed(() => {
        return isInstallable.value && !isInstalled.value
    })

    onMounted(() => {
        checkIfInstalled()
        checkDismissedStatus()

        if (typeof window !== 'undefined') {
            // Listen for the beforeinstallprompt event
            window.addEventListener('beforeinstallprompt', (e: Event) => {
                // Prevent the mini-infobar from appearing on mobile
                e.preventDefault()

                // Stash the event so it can be triggered later
                deferredPrompt.value = e as BeforeInstallPromptEvent
                isInstallable.value = true

                console.log('beforeinstallprompt event fired')
            })

            // Listen for the appinstalled event
            window.addEventListener('appinstalled', () => {
                console.log('PWA was installed')
                isInstalled.value = true
                isInstallable.value = false
                deferredPrompt.value = null
            })
        }
    })

    return {
        isInstallable,
        isInstalled,
        isDismissed,
        showBanner,
        showButton,
        showInstallPrompt,
        dismissBanner
    }
}

// Type definition for BeforeInstallPromptEvent
interface BeforeInstallPromptEvent extends Event {
    prompt(): Promise<void>
    userChoice: Promise<{
        outcome: 'accepted' | 'dismissed'
        platform: string
    }>
}
