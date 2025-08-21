'use client'

import { useThemeStore } from '@/lib/stores/theme-store'
import { useEffect, useState } from 'react'

export function ThemeDebug() {
  const { theme, getCurrentTheme } = useThemeStore()
  const [domClasses, setDomClasses] = useState<string>('')
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const checkTheme = () => {
      const root = document.documentElement
      const classes = root.className
      const hasDarkClass = root.classList.contains('dark')

      setDomClasses(classes)
      setIsDarkMode(hasDarkClass)
    }

    checkTheme()

    // Check every second for debugging
    const interval = setInterval(checkTheme, 1000)

    return () => clearInterval(interval)
  }, [theme])

  return (
    <div className='fixed top-20 right-4 bg-red-500 text-white p-4 rounded-lg z-50 text-xs max-w-xs'>
      <h3 className='font-bold mb-2'>Theme Debug</h3>
      <div className='space-y-1'>
        <div>Store Theme: {theme}</div>
        <div>Current Theme: {getCurrentTheme()}</div>
        <div>Is Dark Mode: {isDarkMode ? 'Yes' : 'No'}</div>
        <div>DOM Classes: {domClasses}</div>
        <div>Has Dark Class: {domClasses.includes('dark') ? 'Yes' : 'No'}</div>
      </div>
    </div>
  )
}
