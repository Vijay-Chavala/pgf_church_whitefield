'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Languages, Globe } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'

import { useLanguageStore } from '@/lib/stores/language-store'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  className?: string
  variant?: 'default' | 'compact' | 'mobile'
  showLabel?: boolean
}

export default function LanguageSwitcher({ 
  className, 
  variant = 'default',
  showLabel = false 
}: LanguageSwitcherProps) {
  const { currentLanguage, setLanguage } = useLanguageStore()
  
  const languages = [
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸',
      shortName: 'EN'
    },
    {
      code: 'te',
      name: 'Telugu',
      nativeName: 'తెలుగు',
      flag: '🇮🇳',
      shortName: 'తె'
    }
  ]

  const currentLang = languages.find(lang => lang.code === currentLanguage)
  const otherLang = languages.find(lang => lang.code !== currentLanguage)

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as 'en' | 'te')
    
    // Dispatch custom event for other components to listen
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: langCode }
      }))
    }
    
    // Store preference in localStorage
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('preferred-language', langCode)
    }
  }

  if (variant === 'compact') {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleLanguageChange(otherLang!.code)}
        className={cn(
          "h-8 px-2 text-xs font-medium transition-all duration-200 hover:scale-105",
          className
        )}
        aria-label={`Switch to ${otherLang?.name}`}
      >
        <motion.div
          key={currentLanguage}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="flex items-center space-x-1"
        >
          <span className="text-sm">{currentLang?.flag}</span>
          <span className="hidden sm:inline">{currentLang?.shortName}</span>
        </motion.div>
      </Button>
    )
  }

  if (variant === 'mobile') {
    return (
      <div className={cn("w-full", className)}>
        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">
              {currentLanguage === 'te' ? 'భాష' : 'Language'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant={currentLanguage === lang.code ? "default" : "ghost"}
                size="sm"
                onClick={() => handleLanguageChange(lang.code)}
                className={cn(
                  "h-8 px-3 text-xs transition-all duration-200",
                  currentLanguage === lang.code 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <span className="mr-1">{lang.flag}</span>
                {lang.shortName}
              </Button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-8 px-2 transition-all duration-200 hover:scale-105",
            className
          )}
          aria-label="Select language"
        >
          <motion.div
            key={currentLanguage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex items-center space-x-1"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm">{currentLang?.flag}</span>
            {showLabel && (
              <span className="hidden sm:inline text-xs font-medium">
                {currentLang?.shortName}
              </span>
            )}
          </motion.div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={cn(
              "flex items-center justify-between cursor-pointer",
              currentLanguage === lang.code && "bg-accent text-accent-foreground"
            )}
          >
            <div className="flex items-center space-x-3">
              <span className="text-base">{lang.flag}</span>
              <div>
                <div className="font-medium text-sm">{lang.name}</div>
                <div className="text-xs text-muted-foreground">{lang.nativeName}</div>
              </div>
            </div>
            {currentLanguage === lang.code && (
              <Badge variant="secondary" className="text-xs">
                {currentLanguage === 'te' ? 'ప్రస్తుతం' : 'Current'}
              </Badge>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Hook for using language switcher in other components
export function useLanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguageStore()
  
  const switchLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'te' : 'en'
    setLanguage(newLang)
  }
  
  const isEnglish = currentLanguage === 'en'
  const isTelugu = currentLanguage === 'te'
  
  return {
    currentLanguage,
    setLanguage,
    switchLanguage,
    isEnglish,
    isTelugu
  }
} 