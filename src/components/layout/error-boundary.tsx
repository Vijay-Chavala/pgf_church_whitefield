'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  RefreshCw,
  Home,
  Mail,
  Bug,
  ExternalLink,
  ChevronDown,
  Copy,
  Check,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
// Alert components would be imported if available
// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

import { useLanguageStore } from '@/lib/stores/language-store'
import { cn } from '@/lib/utils'

// Error Boundary Class Component (required for React Error Boundaries)
interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

class ErrorBoundaryClass extends React.Component<
  {
    children: React.ReactNode
    fallback:
      | React.ComponentType<{ error: Error; reset: () => void }>
      | undefined
    onError: ((error: Error, errorInfo: React.ErrorInfo) => void) | undefined
  },
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
      errorInfo: null,
    }
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    })

    // Log error
    console.error('Error caught by boundary:', error, errorInfo)

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Send error to monitoring service (if available)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'exception', {
        description: error.toString(),
        fatal: false,
      })
    }
  }

  override render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return (
        <FallbackComponent
          error={this.state.error!}
          reset={() =>
            this.setState({ hasError: false, error: null, errorInfo: null })
          }
        />
      )
    }

    return this.props.children
  }
}

// Default Error Fallback Component
interface ErrorFallbackProps {
  error: Error
  reset: () => void
  className?: string
}

function DefaultErrorFallback({ error, reset, className }: ErrorFallbackProps) {
  const { currentLanguage } = useLanguageStore()
  const [showDetails, setShowDetails] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const copyErrorToClipboard = () => {
    const errorText = `Error: ${error.message}\nStack: ${error.stack}`
    navigator.clipboard.writeText(errorText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const refreshPage = () => {
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  const goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }

  return (
    <div
      className={cn(
        'min-h-screen flex items-center justify-center bg-background p-4',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='w-full max-w-2xl'
      >
        <Card className='border-destructive/20'>
          <CardHeader className='text-center'>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
              className='flex justify-center mb-4'
            >
              <div className='flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full'>
                <AlertTriangle className='w-8 h-8 text-destructive' />
              </div>
            </motion.div>

            <CardTitle className='text-2xl text-foreground'>
              {currentLanguage === 'te'
                ? 'ఏదో తప్పు జరిగింది'
                : 'Something went wrong'}
            </CardTitle>

            <CardDescription className='text-base'>
              {currentLanguage === 'te'
                ? 'మేము ఈ సమస్యను పరిష్కరించడానికి కృషి చేస్తున్నాము. దయచేసి మళ్లీ ప్రయత్నించండి.'
                : "We're working to fix this issue. Please try again or contact us if the problem persists."}
            </CardDescription>
          </CardHeader>

          <CardContent className='space-y-6'>
            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
              <Button onClick={reset} className='flex items-center space-x-2'>
                <RefreshCw className='w-4 h-4' />
                <span>
                  {currentLanguage === 'te' ? 'మళ్లీ ప్రయత్నించు' : 'Try Again'}
                </span>
              </Button>

              <Button
                variant='outline'
                onClick={refreshPage}
                className='flex items-center space-x-2'
              >
                <RefreshCw className='w-4 h-4' />
                <span>
                  {currentLanguage === 'te'
                    ? 'పేజీ రీలోడ్ చేయి'
                    : 'Refresh Page'}
                </span>
              </Button>

              <Button
                variant='secondary'
                onClick={goHome}
                className='flex items-center space-x-2'
              >
                <Home className='w-4 h-4' />
                <span>
                  {currentLanguage === 'te' ? 'హోమ్‌కు వెళ్లు' : 'Go Home'}
                </span>
              </Button>
            </div>

            <Separator />

            {/* Error Details Toggle */}
            <div className='space-y-3'>
              <Button
                variant='ghost'
                onClick={() => setShowDetails(!showDetails)}
                className='w-full justify-between text-muted-foreground'
              >
                <div className='flex items-center space-x-2'>
                  <Bug className='w-4 h-4' />
                  <span>
                    {currentLanguage === 'te'
                      ? 'సాంకేతిక వివరాలు'
                      : 'Technical Details'}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform',
                    showDetails && 'rotate-180'
                  )}
                />
              </Button>

              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className='space-y-3'
                >
                  <Card className='bg-muted/50'>
                    <CardContent className='p-4'>
                      <div className='space-y-3'>
                        <div className='flex items-center justify-between'>
                          <Badge variant='destructive' className='text-xs'>
                            {currentLanguage === 'te' ? 'ఎర్రర్' : 'Error'}
                          </Badge>
                          <Button
                            variant='ghost'
                            size='sm'
                            onClick={copyErrorToClipboard}
                            className='text-xs h-6 px-2'
                          >
                            {copied ? (
                              <>
                                <Check className='w-3 h-3 mr-1' />
                                {currentLanguage === 'te'
                                  ? 'కాపీ అయింది'
                                  : 'Copied'}
                              </>
                            ) : (
                              <>
                                <Copy className='w-3 h-3 mr-1' />
                                {currentLanguage === 'te'
                                  ? 'కాపీ చేయి'
                                  : 'Copy'}
                              </>
                            )}
                          </Button>
                        </div>

                        <div className='space-y-2'>
                          <p className='text-sm font-medium text-foreground'>
                            {currentLanguage === 'te'
                              ? 'ఎర్రర్ మెసేజ్:'
                              : 'Error Message:'}
                          </p>
                          <code className='block text-xs bg-background p-2 rounded border text-destructive font-mono'>
                            {error.message}
                          </code>
                        </div>

                        {error.stack && (
                          <div className='space-y-2'>
                            <p className='text-sm font-medium text-foreground'>
                              {currentLanguage === 'te'
                                ? 'స్టాక్ ట్రేస్:'
                                : 'Stack Trace:'}
                            </p>
                            <code className='block text-xs bg-background p-2 rounded border text-muted-foreground font-mono max-h-32 overflow-y-auto'>
                              {error.stack}
                            </code>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            <Separator />

            {/* Support Information */}
            <div className='text-center space-y-3'>
              <p className='text-sm text-muted-foreground'>
                {currentLanguage === 'te'
                  ? 'సహాయం కావాలా? మాతో సంప్రదించండి:'
                  : 'Need help? Contact our support team:'}
              </p>

              <div className='flex flex-col sm:flex-row gap-2 justify-center'>
                <Button variant='outline' size='sm' asChild>
                  <a
                    href='mailto:support@pgfteluguchurch.org'
                    className='flex items-center space-x-2'
                  >
                    <Mail className='w-4 h-4' />
                    <span>
                      {currentLanguage === 'te'
                        ? 'ఇమెయిల్ సపోర్ట్'
                        : 'Email Support'}
                    </span>
                    <ExternalLink className='w-3 h-3' />
                  </a>
                </Button>

                <Button variant='outline' size='sm' asChild>
                  <a href='/contact' className='flex items-center space-x-2'>
                    <span>
                      {currentLanguage === 'te' ? 'సంప్రదించండి' : 'Contact Us'}
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

// Page Not Found Component
export function NotFoundError() {
  const { currentLanguage } = useLanguageStore()

  return (
    <div className='min-h-screen flex items-center justify-center bg-background p-4'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className='text-center space-y-6 max-w-md'
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='text-8xl font-bold text-primary'
        >
          404
        </motion.div>

        <div className='space-y-2'>
          <h1 className='text-2xl font-bold text-foreground'>
            {currentLanguage === 'te' ? 'పేజీ కనుగొనబడలేదు' : 'Page Not Found'}
          </h1>
          <p className='text-muted-foreground'>
            {currentLanguage === 'te'
              ? 'మీరు వెతుకుతున్న పేజీ ఉనికిలో లేదు లేదా తరలించబడింది.'
              : 'The page you are looking for does not exist or has been moved.'}
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 justify-center'>
          <Button asChild>
            <a href='/' className='flex items-center space-x-2'>
              <Home className='w-4 h-4' />
              <span>
                {currentLanguage === 'te' ? 'హోమ్‌కు వెళ్లు' : 'Go Home'}
              </span>
            </a>
          </Button>

          <Button variant='outline' onClick={() => window.history.back()}>
            {currentLanguage === 'te' ? 'వెనుకకు వెళ్లు' : 'Go Back'}
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

// Main Error Boundary Export
export default function ErrorBoundary({
  children,
  fallback,
  onError,
}: {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}) {
  return (
    <ErrorBoundaryClass fallback={fallback} onError={onError}>
      {children}
    </ErrorBoundaryClass>
  )
}

// Hook for error handling
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null)

  const handleError = React.useCallback((error: Error) => {
    setError(error)
    console.error('Error handled:', error)

    // Send to monitoring service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'exception', {
        description: error.toString(),
        fatal: false,
      })
    }
  }, [])

  const clearError = React.useCallback(() => {
    setError(null)
  }, [])

  return {
    error,
    handleError,
    clearError,
    hasError: error !== null,
  }
}
