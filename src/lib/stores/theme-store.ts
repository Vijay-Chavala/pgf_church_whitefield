import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Theme, ThemeState } from './types'

// Helper function to detect system theme
const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light'

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Helper function to apply theme to document
const applyTheme = (theme: 'light' | 'dark') => {
  if (typeof document === 'undefined') return

  const root = document.documentElement
  const isDark = theme === 'dark'

  if (isDark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }

  // Update meta theme-color for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]')
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', isDark ? '#1e293b' : '#f9fafb')
  }

  // Dispatch custom event for other components
  window.dispatchEvent(new CustomEvent('themeChanged', {
    detail: { theme }
  }))
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      systemTheme: getSystemTheme(),
      isLoading: false,

      setTheme: (theme: Theme) => {
        set({ isLoading: true })

        // Apply theme immediately for better UX
        const actualTheme = theme === 'system' ? get().systemTheme : theme
        applyTheme(actualTheme)

        setTimeout(() => {
          set({
            theme,
            isLoading: false
          })
        }, 50)
      },

      toggleTheme: () => {
        const { theme } = get()
        let newTheme: Theme

        switch (theme) {
          case 'light':
            newTheme = 'dark'
            break
          case 'dark':
            newTheme = 'system'
            break
          case 'system':
          default:
            newTheme = 'light'
            break
        }

        get().setTheme(newTheme)
      },

      getCurrentTheme: () => {
        const { theme, systemTheme } = get()
        return theme === 'system' ? systemTheme : theme
      }
    }),
    {
      name: 'theme-store',
      partialize: (state) => ({
        theme: state.theme
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Apply theme on hydration
          const actualTheme = state.getCurrentTheme()
          applyTheme(actualTheme)

          // Listen for system theme changes
          if (typeof window !== 'undefined') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

            const handleSystemThemeChange = (e: MediaQueryListEvent) => {
              const newSystemTheme = e.matches ? 'dark' : 'light'
              useThemeStore.setState({ systemTheme: newSystemTheme })

              // If currently using system theme, apply the new system theme
              if (state && state.theme === 'system') {
                applyTheme(newSystemTheme)
              }
            }

            // Modern browsers
            if (mediaQuery.addEventListener) {
              mediaQuery.addEventListener('change', handleSystemThemeChange)
            } else {
              // Fallback for older browsers
              mediaQuery.addListener(handleSystemThemeChange)
            }

            // Store cleanup function for potential future use
            ; (window as any).__themeCleanup = () => {
              if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleSystemThemeChange)
              } else {
                mediaQuery.removeListener(handleSystemThemeChange)
              }
            }
          }
        }
      }
    }
  )
)

// Initialize theme on module load
if (typeof window !== 'undefined') {
  // Prevent flash of unstyled content
  const storedTheme = localStorage.getItem('theme-store')
  if (storedTheme) {
    try {
      const parsed = JSON.parse(storedTheme)
      const theme = parsed.state?.theme || 'system'
      const systemTheme = getSystemTheme()
      const actualTheme = theme === 'system' ? systemTheme : theme
      applyTheme(actualTheme)
    } catch (error) {
      // Fallback to system theme if parsing fails
      applyTheme(getSystemTheme())
    }
  } else {
    // First visit - use system preference
    applyTheme(getSystemTheme())
  }
} 