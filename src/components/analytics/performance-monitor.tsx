'use client'

import { useEffect } from 'react'
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals'

interface PerformanceMetric {
  name: string
  value: number
  delta: number
  id: string
  rating: 'good' | 'needs-improvement' | 'poor'
  navigationType: 'navigate' | 'reload' | 'back-forward' | 'prerender'
}

// Performance thresholds based on Core Web Vitals
const PERFORMANCE_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 },
} as const

// Determine performance rating
function getPerformanceRating(
  name: keyof typeof PERFORMANCE_THRESHOLDS,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = PERFORMANCE_THRESHOLDS[name]
  if (value <= thresholds.good) return 'good'
  if (value <= thresholds.poor) return 'needs-improvement'
  return 'poor'
}

// Send metrics to analytics
function sendToAnalytics(metric: PerformanceMetric) {
  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: metric.name,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      custom_parameter_rating: metric.rating,
      custom_parameter_navigation: metric.navigationType,
      non_interaction: true,
    })
  }

  // Send to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('🔥 Performance Metric:', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
    })
  }

  // Send to custom analytics endpoint (optional)
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics/performance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        metric: metric.name,
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
      }),
    }).catch((error) => {
      console.warn('Failed to send performance metric:', error)
    })
  }
}

// Monitor resource loading performance
function monitorResourcePerformance() {
  if (typeof window === 'undefined' || !window.performance) return

  // Monitor images loading
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'resource') {
        const resourceEntry = entry as PerformanceResourceTiming

        // Track slow loading resources
        if (resourceEntry.duration > 1000) {
          if (window.gtag) {
            window.gtag('event', 'slow_resource', {
              event_category: 'Performance',
              event_label: resourceEntry.name,
              value: Math.round(resourceEntry.duration),
              non_interaction: true,
            })
          }
        }

        // Track failed resources
        if (resourceEntry.transferSize === 0 && resourceEntry.decodedBodySize === 0) {
          if (window.gtag) {
            window.gtag('event', 'resource_error', {
              event_category: 'Performance',
              event_label: resourceEntry.name,
              non_interaction: true,
            })
          }
        }
      }
    })
  })

  observer.observe({ entryTypes: ['resource'] })

  // Cleanup observer after 30 seconds
  setTimeout(() => observer.disconnect(), 30000)
}

// Monitor long tasks (blocking the main thread)
function monitorLongTasks() {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return

  try {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'longtask') {
          const longTaskEntry = entry as PerformanceEntry & { duration: number }

          if (window.gtag) {
            window.gtag('event', 'long_task', {
              event_category: 'Performance',
              event_label: 'blocking_task',
              value: Math.round(longTaskEntry.duration),
              non_interaction: true,
            })
          }

          if (process.env.NODE_ENV === 'development') {
            console.warn('⚠️ Long task detected:', {
              duration: longTaskEntry.duration,
              startTime: longTaskEntry.startTime,
            })
          }
        }
      })
    })

    observer.observe({ entryTypes: ['longtask'] })
  } catch (error) {
    console.warn('Long task monitoring not supported:', error)
  }
}

// Monitor memory usage
function monitorMemoryUsage() {
  if (typeof window === 'undefined' || !('memory' in performance)) return

  const memory = (performance as any).memory
  if (!memory) return

  const memoryInfo = {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
  }

  // Send memory usage if it's high (over 80% of limit)
  const memoryUsagePercentage = (memoryInfo.usedJSHeapSize / memoryInfo.jsHeapSizeLimit) * 100

  if (memoryUsagePercentage > 80) {
    if (window.gtag) {
      window.gtag('event', 'high_memory_usage', {
        event_category: 'Performance',
        event_label: 'memory_warning',
        value: Math.round(memoryUsagePercentage),
        non_interaction: true,
      })
    }
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Memory Usage:', {
      used: `${Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024)} MB`,
      total: `${Math.round(memoryInfo.totalJSHeapSize / 1024 / 1024)} MB`,
      limit: `${Math.round(memoryInfo.jsHeapSizeLimit / 1024 / 1024)} MB`,
      percentage: `${memoryUsagePercentage.toFixed(2)}%`,
    })
  }
}

// Connection quality monitoring
function monitorNetworkQuality() {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) return

  const connection = (navigator as any).connection
  if (!connection) return

  const networkInfo = {
    effectiveType: connection.effectiveType,
    downlink: connection.downlink,
    rtt: connection.rtt,
    saveData: connection.saveData,
  }

  if (window.gtag) {
    window.gtag('event', 'network_info', {
      event_category: 'Performance',
      event_label: networkInfo.effectiveType,
      custom_parameter_downlink: networkInfo.downlink,
      custom_parameter_rtt: networkInfo.rtt,
      custom_parameter_save_data: networkInfo.saveData,
      non_interaction: true,
    })
  }

  // Warn about slow connections
  if (networkInfo.effectiveType === 'slow-2g' || networkInfo.effectiveType === '2g') {
    if (process.env.NODE_ENV === 'development') {
      console.warn('🐌 Slow network detected:', networkInfo)
    }
  }
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Core Web Vitals monitoring
    onCLS((metric) => {
      sendToAnalytics({
        name: 'CLS',
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        rating: getPerformanceRating('CLS', metric.value),
        navigationType: metric.navigationType as any,
      })
    })

    // Note: FID has been replaced by INP in web-vitals v3
    // onFID is no longer available

    onFCP((metric) => {
      sendToAnalytics({
        name: 'FCP',
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        rating: getPerformanceRating('FCP', metric.value),
        navigationType: metric.navigationType as any,
      })
    })

    onLCP((metric) => {
      sendToAnalytics({
        name: 'LCP',
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        rating: getPerformanceRating('LCP', metric.value),
        navigationType: metric.navigationType as any,
      })
    })

    onTTFB((metric) => {
      sendToAnalytics({
        name: 'TTFB',
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        rating: getPerformanceRating('TTFB', metric.value),
        navigationType: metric.navigationType as any,
      })
    })

    onINP((metric) => {
      sendToAnalytics({
        name: 'INP',
        value: metric.value,
        delta: metric.delta,
        id: metric.id,
        rating: getPerformanceRating('INP', metric.value),
        navigationType: metric.navigationType as any,
      })
    })

    // Additional monitoring
    monitorResourcePerformance()
    monitorLongTasks()
    
    // Monitor memory and network periodically
    const monitoringInterval = setInterval(() => {
      monitorMemoryUsage()
      monitorNetworkQuality()
    }, 30000) // Every 30 seconds

    // Cleanup
    return () => {
      clearInterval(monitoringInterval)
    }
  }, [])

  // This component doesn't render anything
  return null
} 