import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-background p-4'>
      <div className='text-center space-y-6 max-w-md'>
        <div className='text-8xl font-bold text-primary animate-pulse'>404</div>

        <div className='space-y-2'>
          <h1 className='text-2xl font-bold text-foreground'>Page Not Found</h1>
          <p className='text-muted-foreground'>
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <Button asChild>
            <Link href='/' className='flex items-center space-x-2'>
              <Home className='w-4 h-4' />
              <span>Go Home</span>
            </Link>
          </Button>

          <Button variant='outline' onClick={() => window.history.back()}>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}
