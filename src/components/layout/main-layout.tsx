'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Header from './header'
import Footer from './footer'
import MapSection from './map-section'
import BreadcrumbNav from './breadcrumb-nav'
import ErrorBoundary from './error-boundary'
import { PageLoading } from './loading'
import { SEO, OrganizationStructuredData } from './seo'

import { useLoadingStore } from '@/lib/stores/loading-store'
import { cn } from '@/lib/utils'

interface MainLayoutProps {
  children: React.ReactNode
  className?: string
  showBreadcrumbs?: boolean
  showHeader?: boolean
  showFooter?: boolean
  showMap?: boolean
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
    ogImage?: string
    noIndex?: boolean
    structuredData?: Record<string, any>
  }
  loading?: boolean
  loadingMessage?: string
}

export default function MainLayout({
  children,
  className,
  showBreadcrumbs = true,
  showHeader = true,
  showFooter = true,
  showMap = true,
  seo,
  loading = false,
  loadingMessage,
}: MainLayoutProps) {
  const { states } = useLoadingStore()
  const isGlobalLoading = states.global
  const [mounted, setMounted] = React.useState(false)

  // Handle client-side mounting
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Combine loading states
  const isLoading = loading || isGlobalLoading

  if (!mounted) {
    return null
  }

  if (isLoading) {
    return <PageLoading message={loadingMessage || 'Loading...'} />
  }

  return (
    <ErrorBoundary>
      <div className='min-h-screen flex flex-col bg-background'>
        {/* SEO Meta Tags */}
        {seo && <SEO {...seo} />}

        {/* Organization Structured Data */}
        <OrganizationStructuredData />

        {/* Header */}
        {showHeader && <Header />}

        {/* Main Content */}
        <main className={cn('flex-1', className)}>
          {/* Breadcrumbs */}
          {showBreadcrumbs && (
            <div className='container mx-auto px-4'>
              <BreadcrumbNav />
            </div>
          )}

          {/* Page Content with Animation */}
          <AnimatePresence mode='wait'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className='min-h-[60vh]'
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Map Section */}
        {showMap && <MapSection />}

        {/* Footer */}
        {showFooter && <Footer />}

        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </div>
    </ErrorBoundary>
  )
}

// Scroll to Top Button Component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false)

  // Show button when page is scrolled down
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={scrollToTop}
      className='fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
      aria-label='Scroll to top'
    >
      <svg
        className='w-6 h-6 mx-auto'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 10l7-7m0 0l7 7m-7-7v18'
        />
      </svg>
    </motion.button>
  )
}

// Layout Hook for managing layout state
export function useMainLayout() {
  const [layoutConfig, setLayoutConfig] = React.useState({
    showBreadcrumbs: true,
    showHeader: true,
    showFooter: true,
  })

  const updateLayoutConfig = React.useCallback(
    (updates: Partial<typeof layoutConfig>) => {
      setLayoutConfig(prev => ({ ...prev, ...updates }))
    },
    []
  )

  const hideBreadcrumbs = React.useCallback(() => {
    setLayoutConfig(prev => ({ ...prev, showBreadcrumbs: false }))
  }, [])

  const showBreadcrumbs = React.useCallback(() => {
    setLayoutConfig(prev => ({ ...prev, showBreadcrumbs: true }))
  }, [])

  const hideHeader = React.useCallback(() => {
    setLayoutConfig(prev => ({ ...prev, showHeader: false }))
  }, [])

  const showHeader = React.useCallback(() => {
    setLayoutConfig(prev => ({ ...prev, showHeader: true }))
  }, [])

  const hideFooter = React.useCallback(() => {
    setLayoutConfig(prev => ({ ...prev, showFooter: false }))
  }, [])

  const showFooter = React.useCallback(() => {
    setLayoutConfig(prev => ({ ...prev, showFooter: true }))
  }, [])

  return {
    layoutConfig,
    updateLayoutConfig,
    hideBreadcrumbs,
    showBreadcrumbs,
    hideHeader,
    showHeader,
    hideFooter,
    showFooter,
  }
}

// HOC for wrapping pages with layout
export function withMainLayout<P extends object>(
  Component: React.ComponentType<P>,
  layoutProps?: Omit<MainLayoutProps, 'children'>
) {
  return function WrappedComponent(props: P) {
    return (
      <MainLayout {...layoutProps}>
        <Component {...props} />
      </MainLayout>
    )
  }
}
