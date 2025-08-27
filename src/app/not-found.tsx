import { Suspense } from 'react'
import { NotFoundError } from '@/components/layout/error-boundary'

// Wrapper component to handle useSearchParams with Suspense
function NotFoundWrapper() {
  return <NotFoundError />
}

export default function NotFound() {
  return (
    <Suspense fallback={<NotFoundError />}>
      <NotFoundWrapper />
    </Suspense>
  )
}
