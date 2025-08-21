import { create } from 'zustand'
import type { LoadingState, LoadingStates } from './types'

// Default loading states
const defaultStates: LoadingStates = {
  global: false,
  navigation: false,
  events: false,
  sermons: false,
  contact: false,
  search: false,
  theme: false,
  language: false,
  prayer: false
}

export const useLoadingStore = create<LoadingState>((set, get) => ({
  states: defaultStates,
  
  setLoading: (key: keyof LoadingStates | string, loading: boolean) => {
    set(state => ({
      states: {
        ...state.states,
        [key]: loading
      }
    }))
    
    // Dispatch custom event for other components to listen
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('loadingStateChange', {
        detail: { key, loading, allStates: get().states }
      }))
    }
  },
  
  setGlobalLoading: (loading: boolean) => {
    set(state => ({
      states: {
        ...state.states,
        global: loading
      }
    }))
    
    // Add/remove global loading class to body for CSS styling
    if (typeof document !== 'undefined') {
      if (loading) {
        document.body.classList.add('app-loading')
      } else {
        document.body.classList.remove('app-loading')
      }
    }
    
    // Dispatch global loading event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('globalLoadingChange', {
        detail: { loading }
      }))
    }
  },
  
  isAnyLoading: (): boolean => {
    const { states } = get()
    return Object.values(states).some(loading => loading)
  },
  
  getLoadingState: (key: keyof LoadingStates | string): boolean => {
    const { states } = get()
    return states[key as keyof LoadingStates] || false
  },
  
  clearAllLoading: () => {
    set({ states: defaultStates })
    
    // Remove global loading class
    if (typeof document !== 'undefined') {
      document.body.classList.remove('app-loading')
    }
    
    // Dispatch clear event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('allLoadingCleared'))
    }
  }
}))

// Loading state utilities and hooks
export const useGlobalLoading = () => {
  const { states, setGlobalLoading } = useLoadingStore()
  return {
    isLoading: states.global,
    setLoading: setGlobalLoading
  }
}

export const useComponentLoading = (component: keyof LoadingStates | string) => {
  const { states, setLoading } = useLoadingStore()
  return {
    isLoading: states[component as keyof LoadingStates] || false,
    setLoading: (loading: boolean) => setLoading(component, loading)
  }
}

// Higher-order function for automatic loading state management
export const withLoading = <T extends any[], R>(
  fn: (...args: T) => Promise<R>,
  loadingKey: keyof LoadingStates | string
) => {
  return async (...args: T): Promise<R> => {
    const { setLoading } = useLoadingStore.getState()
    
    try {
      setLoading(loadingKey, true)
      const result = await fn(...args)
      return result
    } finally {
      setLoading(loadingKey, false)
    }
  }
}

// Debounced loading state setter (prevents rapid loading state changes)
export const createDebouncedLoader = (
  loadingKey: keyof LoadingStates | string,
  delay: number = 300
) => {
  let timeoutId: NodeJS.Timeout | null = null
  
  return {
    start: () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      
      const { setLoading } = useLoadingStore.getState()
      setLoading(loadingKey, true)
    },
    
    stop: () => {
      const { setLoading } = useLoadingStore.getState()
      
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      
      timeoutId = setTimeout(() => {
        setLoading(loadingKey, false)
        timeoutId = null
      }, delay)
    },
    
    immediate: () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
      
      const { setLoading } = useLoadingStore.getState()
      setLoading(loadingKey, false)
    }
  }
}

// Loading queue for managing multiple sequential operations
export class LoadingQueue {
  private queue: Array<{ key: string; promise: Promise<any> }> = []
  private readonly loadingKey: keyof LoadingStates | string
  
  constructor(loadingKey: keyof LoadingStates | string) {
    this.loadingKey = loadingKey
  }
  
  add<T>(key: string, promise: Promise<T>): Promise<T> {
    const { setLoading } = useLoadingStore.getState()
    
    // Add to queue
    this.queue.push({ key, promise })
    
    // Set loading state
    setLoading(this.loadingKey, true)
    
    // Handle completion
    const handleCompletion = () => {
      // Remove from queue
      this.queue = this.queue.filter(item => item.promise !== promise)
      
      // If queue is empty, stop loading
      if (this.queue.length === 0) {
        setLoading(this.loadingKey, false)
      }
    }
    
    promise.then(handleCompletion).catch(handleCompletion)
    
    return promise
  }
  
  clear() {
    const { setLoading } = useLoadingStore.getState()
    this.queue = []
    setLoading(this.loadingKey, false)
  }
  
  getQueueSize(): number {
    return this.queue.length
  }
  
  isProcessing(): boolean {
    return this.queue.length > 0
  }
}

// Performance monitoring for loading states
export const createLoadingMonitor = (loadingKey: keyof LoadingStates | string) => {
  let startTime: number | null = null
  let totalLoadingTime = 0
  let loadingCount = 0
  
  const monitor = {
    onStart: () => {
      startTime = performance.now()
      console.log(`🔄 Loading started: ${loadingKey}`)
    },
    
    onEnd: () => {
      if (startTime) {
        const duration = performance.now() - startTime
        totalLoadingTime += duration
        loadingCount++
        
        console.log(`✅ Loading completed: ${loadingKey} (${duration.toFixed(2)}ms)`)
        
        // Log performance warning if loading takes too long
        if (duration > 3000) {
          console.warn(`⚠️ Slow loading detected: ${loadingKey} took ${duration.toFixed(2)}ms`)
        }
        
        startTime = null
      }
    },
    
    getStats: () => ({
      averageLoadingTime: loadingCount > 0 ? totalLoadingTime / loadingCount : 0,
      totalLoadingTime,
      loadingCount
    }),
    
    reset: () => {
      startTime = null
      totalLoadingTime = 0
      loadingCount = 0
    }
  }
  
  // Auto-attach to loading state changes
  if (typeof window !== 'undefined') {
    const unsubscribe = useLoadingStore.subscribe(
      (state) => {
        const isLoading = state.states[loadingKey as keyof LoadingStates]
        if (isLoading) {
          monitor.onStart()
        } else {
          monitor.onEnd()
        }
      }
    )
    
    // Return cleanup function
    return { ...monitor, cleanup: unsubscribe }
  }
  
  return monitor
}

// Global loading overlay component state
export const useLoadingOverlay = () => {
  const { states } = useLoadingStore()
  
  return {
    shouldShow: states.global || states.navigation,
    message: states.global ? 'Loading...' : states.navigation ? 'Navigating...' : '',
    variant: states.global ? 'global' : 'navigation'
  }
}

// Batch loading operations
export const batchLoadingOperations = async <T>(
  operations: Array<{
    key: keyof LoadingStates | string
    operation: () => Promise<T>
  }>
): Promise<T[]> => {
  const { setLoading } = useLoadingStore.getState()
  
  // Set all loading states
  operations.forEach(({ key }) => setLoading(key, true))
  
  try {
    // Execute all operations in parallel
    const results = await Promise.all(
      operations.map(({ operation }) => operation())
    )
    
    return results
  } finally {
    // Clear all loading states
    operations.forEach(({ key }) => setLoading(key, false))
  }
}

// Loading state persistence (for page refreshes)
export const persistLoadingState = () => {
  if (typeof window === 'undefined') return
  
  const unsubscribe = useLoadingStore.subscribe(
    (state) => {
      // Only persist certain loading states that should survive page refresh
      const states = state.states
      const persistentStates = {
        theme: states.theme,
        language: states.language
      }
      
      sessionStorage.setItem('loading-states', JSON.stringify(persistentStates))
    }
  )
  
  return unsubscribe
}

// Restore loading state on app initialization
export const restoreLoadingState = () => {
  if (typeof window === 'undefined') return
  
  try {
    const saved = sessionStorage.getItem('loading-states')
    if (saved) {
      const persistentStates = JSON.parse(saved)
      const { setLoading } = useLoadingStore.getState()
      
      Object.entries(persistentStates).forEach(([key, loading]) => {
        if (typeof loading === 'boolean') {
          setLoading(key, loading)
        }
      })
    }
  } catch (error) {
    console.error('Error restoring loading state:', error)
  }
} 