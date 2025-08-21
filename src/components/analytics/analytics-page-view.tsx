'use client'

import { useGAPageView } from '@/components/analytics/google-analytics'

// Analytics Page View Hook Component
export default function AnalyticsPageView() {
  useGAPageView()
  return null
} 