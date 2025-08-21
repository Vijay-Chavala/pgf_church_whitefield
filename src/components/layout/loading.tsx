'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Loader2, Church, Heart } from 'lucide-react'

import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

import { useLanguageStore } from '@/lib/stores/language-store'
import { cn } from '@/lib/utils'

// Main Loading Spinner Component
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  text?: string
}

export function LoadingSpinner({ 
  size = 'md', 
  className,
  text 
}: LoadingSpinnerProps) {
  const { currentLanguage } = useLanguageStore()
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const defaultText = currentLanguage === 'te' ? 'లోడ్ అవుతోంది...' : 'Loading...'

  return (
    <div className={cn("flex items-center justify-center space-x-2", className)}>
      <Loader2 className={cn("animate-spin text-primary", sizeClasses[size])} />
      {text !== undefined && (
        <span className="text-sm text-muted-foreground">
          {text || defaultText}
        </span>
      )}
    </div>
  )
}

// Full Page Loading Component
interface PageLoadingProps {
  message?: string
  showChurchLogo?: boolean
}

export function PageLoading({ message, showChurchLogo = true }: PageLoadingProps) {
  const { currentLanguage } = useLanguageStore()
  
  const defaultMessage = currentLanguage === 'te' 
    ? 'పేజీ లోడ్ అవుతోంది...' 
    : 'Loading page...'

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-6 p-8"
      >
        {showChurchLogo && (
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-primary to-forest-green rounded-full shadow-lg"
          >
            <Church className="w-8 h-8 text-primary-foreground" />
          </motion.div>
        )}
        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            {currentLanguage === 'te' ? 'పెనీయేల్ గాస్పెల్ ఫెలోషిప్' : 'Peniel Gospel Fellowship'}
          </h2>
          <p className="text-muted-foreground">
            {message || defaultMessage}
          </p>
        </div>
        
        <LoadingSpinner size="lg" />
        
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center justify-center space-x-1 text-xs text-muted-foreground"
        >
          <span>
            {currentLanguage === 'te' ? 'ప్రేమతో తయారు చేయబడింది' : 'Made with'}
          </span>
          <Heart className="w-3 h-3 text-red-500" />
        </motion.div>
      </motion.div>
    </div>
  )
}

// Header Skeleton
export function HeaderSkeleton() {
  return (
    <div className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex h-8 items-center justify-between">
          <div className="flex items-center space-x-3">
            <Skeleton className="w-10 h-10 rounded-lg" />
            <div className="space-y-1">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-20" />
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <Skeleton className="w-8 h-8 rounded" />
            <Skeleton className="w-8 h-8 rounded" />
            <Skeleton className="w-8 h-8 rounded lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Card Skeleton for content loading
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </CardContent>
    </Card>
  )
}

// Event Card Skeleton
export function EventCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Skeleton className="w-4 h-4" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-6 w-3/4" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
          </div>
          <div className="flex items-center justify-between pt-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-8" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Sermon Card Skeleton
export function SermonCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Skeleton className="h-40 w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Skeleton className="w-12 h-12 rounded-full" />
        </div>
      </div>
      <CardContent className="p-4">
        <div className="space-y-3">
          <Skeleton className="h-5 w-3/4" />
          <div className="flex items-center space-x-2">
            <Skeleton className="w-6 h-6 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
          </div>
          <div className="flex items-center justify-between pt-2">
            <Skeleton className="h-3 w-16" />
            <div className="flex space-x-1">
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-6 w-6" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Navigation Skeleton
export function NavigationSkeleton() {
  return (
    <div className="hidden lg:block">
      <div className="flex items-center space-x-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-16" />
        ))}
      </div>
    </div>
  )
}

// Footer Skeleton
export function FooterSkeleton() {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-6 w-32" />
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Skeleton key={j} className="h-4 w-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6 border-t border-border/20">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <Skeleton className="h-4 w-64" />
          <div className="flex items-center space-x-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="w-8 h-8 rounded" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// Gallery Skeleton
export function GallerySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <Skeleton key={i} className="aspect-square rounded-lg" />
      ))}
    </div>
  )
}

// Table Skeleton
export function TableSkeleton({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <div className="space-y-3">
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="h-6 w-full" />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {Array.from({ length: cols }).map((_, j) => (
            <Skeleton key={j} className="h-4 w-full" />
          ))}
        </div>
      ))}
    </div>
  )
}

// Hook for loading states
export function useLoading(initialState = false) {
  const [isLoading, setIsLoading] = React.useState(initialState)
  
  const startLoading = React.useCallback(() => setIsLoading(true), [])
  const stopLoading = React.useCallback(() => setIsLoading(false), [])
  const toggleLoading = React.useCallback(() => setIsLoading(prev => !prev), [])
  
  return {
    isLoading,
    startLoading,
    stopLoading,
    toggleLoading,
    setIsLoading
  }
} 