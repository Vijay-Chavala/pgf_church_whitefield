'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/lib/stores/theme-store'
import { Sun, Moon, Monitor } from 'lucide-react'

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
  variant?: 'default' | 'ghost' | 'outline'
  size?: 'default' | 'sm' | 'lg'
}

export function ThemeToggle({
  className,
  showLabel = false,
  variant = 'ghost',
  size = 'sm',
}: ThemeToggleProps) {
  const { theme, toggleTheme, getCurrentTheme } = useThemeStore()
  const isDarkMode = getCurrentTheme() === 'dark'

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className='h-4 w-4' />
      case 'dark':
        return <Moon className='h-4 w-4' />
      case 'system':
        return <Monitor className='h-4 w-4' />
      default:
        return <Sun className='h-4 w-4' />
    }
  }

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light Mode'
      case 'dark':
        return 'Dark Mode'
      case 'system':
        return 'System Mode'
      default:
        return 'Light Mode'
    }
  }

  const getAriaLabel = () => {
    const currentTheme = getThemeLabel()
    const nextTheme =
      theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
    return `Switch from ${currentTheme} to ${nextTheme}`
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={className}
      aria-label={getAriaLabel()}
      title={getAriaLabel()}
    >
      {getThemeIcon()}
      {showLabel && (
        <span className='ml-2 hidden sm:inline-block'>{getThemeLabel()}</span>
      )}
    </Button>
  )
}
