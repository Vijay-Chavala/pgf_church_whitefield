'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Google Analytics event types for church website
export interface GAEvent {
  action: string
  category: string
  label?: string
  value?: number
}

// Church-specific event categories
export const GA_CATEGORIES = {
  SERVICE: 'Service',
  EVENT: 'Event',
  CONTACT: 'Contact',
  LANGUAGE: 'Language',
  THEME: 'Theme',
  NAVIGATION: 'Navigation',
  PRAYER: 'Prayer_Request',
  ENGAGEMENT: 'Engagement',
  DOWNLOAD: 'Download',
  VIDEO: 'Video',
} as const

// GA4 enhanced measurement events
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'consent',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer: Record<string, any>[]
  }
}

// Track page views
export function useGAPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_TRACKING_ID || !window.gtag) return

    const url = pathname + (searchParams.toString() ? `?${searchParams}` : '')
    
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [pathname, searchParams])
}

// Track custom events
export function trackGAEvent({ action, category, label, value }: GAEvent) {
  if (!GA_TRACKING_ID || !window.gtag) return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Church-specific tracking functions
export const churchAnalytics = {
  // Service-related tracking
  trackServiceView: (serviceType: string) => {
    trackGAEvent({
      action: 'view_service',
      category: GA_CATEGORIES.SERVICE,
      label: serviceType,
    })
  },

  trackServiceRegistration: (serviceType: string) => {
    trackGAEvent({
      action: 'register_service',
      category: GA_CATEGORIES.SERVICE,
      label: serviceType,
    })
  },

  // Event tracking
  trackEventView: (eventName: string) => {
    trackGAEvent({
      action: 'view_event',
      category: GA_CATEGORIES.EVENT,
      label: eventName,
    })
  },

  trackEventRegistration: (eventName: string, cost?: number) => {
    trackGAEvent({
      action: 'register_event',
      category: GA_CATEGORIES.EVENT,
      label: eventName,
      value: cost,
    })
  },

  // Language switching
  trackLanguageChange: (fromLang: string, toLang: string) => {
    trackGAEvent({
      action: 'change_language',
      category: GA_CATEGORIES.LANGUAGE,
      label: `${fromLang}_to_${toLang}`,
    })
  },

  // Theme switching
  trackThemeChange: (theme: 'light' | 'dark') => {
    trackGAEvent({
      action: 'change_theme',
      category: GA_CATEGORIES.THEME,
      label: theme,
    })
  },

  // Contact interactions
  trackContactFormSubmit: (formType: string) => {
    trackGAEvent({
      action: 'submit_form',
      category: GA_CATEGORIES.CONTACT,
      label: formType,
    })
  },

  trackPhoneClick: () => {
    trackGAEvent({
      action: 'click_phone',
      category: GA_CATEGORIES.CONTACT,
    })
  },

  trackEmailClick: () => {
    trackGAEvent({
      action: 'click_email',
      category: GA_CATEGORIES.CONTACT,
    })
  },

  // Prayer request tracking
  trackPrayerRequest: (category: string, isUrgent: boolean) => {
    trackGAEvent({
      action: 'submit_prayer',
      category: GA_CATEGORIES.PRAYER,
      label: `${category}_${isUrgent ? 'urgent' : 'normal'}`,
    })
  },

  // Engagement tracking
  trackVideoPlay: (videoTitle: string) => {
    trackGAEvent({
      action: 'play_video',
      category: GA_CATEGORIES.VIDEO,
      label: videoTitle,
    })
  },

  trackDownload: (fileName: string, fileType: string) => {
    trackGAEvent({
      action: 'download_file',
      category: GA_CATEGORIES.DOWNLOAD,
      label: `${fileName}.${fileType}`,
    })
  },

  trackSocialShare: (platform: string, content: string) => {
    trackGAEvent({
      action: 'share_content',
      category: GA_CATEGORIES.ENGAGEMENT,
      label: `${platform}_${content}`,
    })
  },

  // Navigation tracking
  trackMenuClick: (menuItem: string) => {
    trackGAEvent({
      action: 'click_menu',
      category: GA_CATEGORIES.NAVIGATION,
      label: menuItem,
    })
  },

  trackSearchUsage: (searchTerm: string, resultsCount: number) => {
    trackGAEvent({
      action: 'search',
      category: GA_CATEGORIES.NAVIGATION,
      label: searchTerm,
      value: resultsCount,
    })
  },
}

// Web Vitals tracking
export function trackWebVitals() {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return

  // Track Core Web Vitals
  import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
    onCLS((metric) => {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: 'CLS',
        value: Math.round(metric.value * 1000),
        non_interaction: true,
      })
    })

    onFID((metric) => {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: 'FID',
        value: Math.round(metric.value),
        non_interaction: true,
      })
    })

    onFCP((metric) => {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: 'FCP',
        value: Math.round(metric.value),
        non_interaction: true,
      })
    })

    onLCP((metric) => {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: 'LCP',
        value: Math.round(metric.value),
        non_interaction: true,
      })
    })

    onTTFB((metric) => {
      window.gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: 'TTFB',
        value: Math.round(metric.value),
        non_interaction: true,
      })
    })
  })
}

interface GoogleAnalyticsProps {
  children?: React.ReactNode
}

export default function GoogleAnalytics({ children }: GoogleAnalyticsProps) {
  if (!GA_TRACKING_ID) {
    return <>{children}</>
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
              anonymize_ip: true,
              allow_google_signals: false,
              cookie_flags: 'SameSite=None;Secure',
              custom_map: {
                'custom_parameter_1': 'church_language',
                'custom_parameter_2': 'church_location'
              }
            });
            
            // Track initial page load
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              page_path: window.location.pathname
            });
          `,
        }}
      />
      {children}
    </>
  )
} 