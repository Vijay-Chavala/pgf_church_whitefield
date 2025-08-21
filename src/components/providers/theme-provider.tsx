'use client'

import * as React from 'react'
import { useThemeStore } from '@/lib/stores/theme-store'

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useThemeStore()
  const [mounted, setMounted] = React.useState(false)

  // Handle client-side mounting to prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Just ensure the theme is applied when the component mounts
  React.useEffect(() => {
    if (mounted) {
      // Let the theme store handle the actual theme application
      // We just need to ensure the store is properly initialized
      const store = useThemeStore.getState()
      store.getCurrentTheme()
    }
  }, [mounted, theme])

  // Prevent flash of unstyled content
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return <>{children}</>
}
