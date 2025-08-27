'use client'

import { Suspense } from 'react'
import { useGAPageView } from '@/components/analytics/google-analytics'

// Analytics Page View Hook Component
function AnalyticsPageViewContent() {
  useGAPageView()
  return null
}

export default function AnalyticsPageView() {
  return (
    <Suspense fallback={null}>
      <AnalyticsPageViewContent />
    </Suspense>
  )
}
