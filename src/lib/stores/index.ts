// Export all store types
export type * from './types'

// Export all individual stores
export { useLanguageStore } from './language-store'
export { useThemeStore } from './theme-store'
export { useNavigationStore, generateBreadcrumbs, findNavigationItem } from './navigation-store'
export { useSearchStore } from './search-store'
export { useEventStore, isEventFull, isRegistrationClosed, getEventStatus, formatEventDate, formatEventTime } from './event-store'
export {
  useSermonStore,
  formatSermonDuration,
  formatSermonDate,
  getSermonsByPastor,
  getSermonsBySeries
} from './sermon-store'
export {
  useContactStore,
  getFormProgress,
  getCharacterCount,
  getCharacterLimit,
  isFieldRequired,
  trackFormInteraction,
  enableAutoSave,
  loadDraft,
  clearDraft
} from './contact-store'
export {
  useLoadingStore,
  useGlobalLoading,
  useComponentLoading,
  withLoading,
  createDebouncedLoader,
  LoadingQueue,
  createLoadingMonitor,
  useLoadingOverlay,
  batchLoadingOperations,
  persistLoadingState,
  restoreLoadingState
} from './loading-store'
export {
  usePrayerStore,
  formatPrayerDate,
  getPrayerCategoryLabel,
  getPrayerStatusLabel,
  canUserPrayForRequest,
  getPrayerRequestStats,
  enablePrayerAutoRefresh
} from './prayer-store'

// Combined store hooks for common patterns
export const useAppStore = () => ({
  language: useLanguageStore(),
  theme: useThemeStore(),
  navigation: useNavigationStore(),
  search: useSearchStore(),
  events: useEventStore(),
  sermons: useSermonStore(),
  contact: useContactStore(),
  prayer: usePrayerStore(),
  loading: useLoadingStore()
})

// Utility function to initialize all stores
export const initializeStores = () => {
  // Initialize language store
  const languageStore = useLanguageStore.getState()

  // Initialize theme store
  const themeStore = useThemeStore.getState()

  // Set up loading state persistence
  persistLoadingState()

  // Restore any persisted loading states
  restoreLoadingState()

  // Set up auto-save for contact form
  enableAutoSave()

  return {
    language: languageStore,
    theme: themeStore
  }
}

// Global store reset function (useful for testing or logout)
export const resetAllStores = () => {
  // Reset individual stores to their initial states
  useLanguageStore.getState().setLanguage('en')
  useThemeStore.getState().setTheme('system')
  useNavigationStore.getState().closeAllMenus()
  useSearchStore.getState().clearSearch()
  useContactStore.getState().resetForm()
  usePrayerStore.getState().clearError()
  useLoadingStore.getState().clearAllLoading()

  // Clear localStorage items
  if (typeof window !== 'undefined') {
    localStorage.removeItem('language-store')
    localStorage.removeItem('theme-store')
    localStorage.removeItem('search-store')
    localStorage.removeItem('prayer-store')
    localStorage.removeItem('contact-form-draft')
    localStorage.removeItem('prayed-requests')
    sessionStorage.removeItem('loading-states')
  }
}

// Store synchronization utilities
export const syncStoresWithURL = () => {
  if (typeof window === 'undefined') return

  const url = new URL(window.location.href)
  const params = url.searchParams

  // Sync language with URL parameter
  const langParam = params.get('lang')
  if (langParam === 'en' || langParam === 'te') {
    useLanguageStore.getState().setLanguage(langParam)
  }

  // Sync theme with URL parameter
  const themeParam = params.get('theme')
  if (themeParam === 'light' || themeParam === 'dark' || themeParam === 'system') {
    useThemeStore.getState().setTheme(themeParam)
  }

  // Sync search query with URL parameter
  const searchParam = params.get('q')
  if (searchParam) {
    useSearchStore.getState().setQuery(searchParam)
  }
}

// Store state watchers for debugging
export const enableStoreDebugging = () => {
  if (process.env.NODE_ENV !== 'development') return

  console.log('🔍 Store debugging enabled')

  // Language store watcher
  useLanguageStore.subscribe(
    (state) => {
      const language = state.currentLanguage
      console.log('🌐 Language changed:', language)
    }
  )

  // Theme store watcher
  useThemeStore.subscribe(
    (state) => {
      const theme = state.theme
      console.log('🎨 Theme changed:', theme)
    }
  )

  // Navigation store watcher
  useNavigationStore.subscribe(
    (state) => {
      const section = state.activeSection
      console.log('🧭 Active section changed:', section)
    }
  )

  // Loading store watcher
  useLoadingStore.subscribe(
    (state) => {
      const states = state.states
      const activeLoading = Object.entries(states)
        .filter(([, isLoading]) => isLoading)
        .map(([key]) => key)

      if (activeLoading.length > 0) {
        console.log('⏳ Active loading states:', activeLoading)
      }
    }
  )
}

// Performance monitoring for stores
export const monitorStorePerformance = () => {
  if (typeof window === 'undefined') return

  const storeMetrics = {
    languageChanges: 0,
    themeChanges: 0,
    navigationChanges: 0,
    searchQueries: 0,
    formSubmissions: 0
  }

  // Track language changes
  useLanguageStore.subscribe(
    (state) => {
      storeMetrics.languageChanges++
    }
  )

  // Track theme changes
  useThemeStore.subscribe(
    (state) => {
      storeMetrics.themeChanges++
    }
  )

  // Track navigation changes
  useNavigationStore.subscribe(
    (state) => {
      storeMetrics.navigationChanges++
    }
  )

  // Track search queries
  useSearchStore.subscribe(
    (state) => {
      const query = state.query
      if (query) storeMetrics.searchQueries++
    }
  )

  // Track form submissions
  useContactStore.subscribe(
    (state) => {
      const isSubmitted = state.isSubmitted
      if (isSubmitted) storeMetrics.formSubmissions++
    }
  )

    // Expose metrics globally for debugging
    ; (window as any).__storeMetrics = storeMetrics

  return storeMetrics
}

// Store hydration utility
export const hydrateStores = (initialData?: {
  language?: string
  theme?: string
  events?: any[]
  sermons?: any[]
}) => {
  if (!initialData) return

  const { language, theme, events, sermons } = initialData

  // Hydrate language store
  if (language && (language === 'en' || language === 'te')) {
    useLanguageStore.getState().setLanguage(language)
  }

  // Hydrate theme store
  if (theme && ['light', 'dark', 'system'].includes(theme)) {
    useThemeStore.getState().setTheme(theme as any)
  }

  // Hydrate events store
  if (events && Array.isArray(events)) {
    useEventStore.getState().setEvents(events)
  }

  // Hydrate sermons store
  if (sermons && Array.isArray(sermons)) {
    useSermonStore.getState().setSermons(sermons)
  }
}

// Export store selectors for optimized subscriptions
export const storeSelectors = {
  // Language selectors
  currentLanguage: (state: ReturnType<typeof useLanguageStore.getState>) => state.currentLanguage,
  isLanguageLoading: (state: ReturnType<typeof useLanguageStore.getState>) => state.isLoading,

  // Theme selectors
  currentTheme: (state: ReturnType<typeof useThemeStore.getState>) => state.getCurrentTheme(),
  themeMode: (state: ReturnType<typeof useThemeStore.getState>) => state.theme,

  // Navigation selectors
  isMobileMenuOpen: (state: ReturnType<typeof useNavigationStore.getState>) => state.isMobileMenuOpen,
  activeSection: (state: ReturnType<typeof useNavigationStore.getState>) => state.activeSection,
  breadcrumbs: (state: ReturnType<typeof useNavigationStore.getState>) => state.breadcrumbs,

  // Search selectors
  searchQuery: (state: ReturnType<typeof useSearchStore.getState>) => state.query,
  searchResults: (state: ReturnType<typeof useSearchStore.getState>) => state.results,
  isSearching: (state: ReturnType<typeof useSearchStore.getState>) => state.isSearching,

  // Events selectors
  upcomingEvents: (state: ReturnType<typeof useEventStore.getState>) => state.upcomingEvents,
  featuredEvents: (state: ReturnType<typeof useEventStore.getState>) => state.featuredEvents,
  selectedEvent: (state: ReturnType<typeof useEventStore.getState>) => state.selectedEvent,

  // Sermons selectors
  featuredSermons: (state: ReturnType<typeof useSermonStore.getState>) => state.featuredSermons,
  currentSermon: (state: ReturnType<typeof useSermonStore.getState>) => state.currentSermon,
  isPlaying: (state: ReturnType<typeof useSermonStore.getState>) => state.isPlaying,

  // Contact selectors
  formData: (state: ReturnType<typeof useContactStore.getState>) => state.formData,
  isSubmitting: (state: ReturnType<typeof useContactStore.getState>) => state.isSubmitting,
  validation: (state: ReturnType<typeof useContactStore.getState>) => state.validation,

  // Prayer selectors
  publicPrayerRequests: (state: ReturnType<typeof usePrayerStore.getState>) => state.publicRequests,
  myPrayerRequests: (state: ReturnType<typeof usePrayerStore.getState>) => state.myRequests,
  currentPrayerRequest: (state: ReturnType<typeof usePrayerStore.getState>) => state.currentRequest,

  // Loading selectors
  globalLoading: (state: ReturnType<typeof useLoadingStore.getState>) => state.states.global,
  anyLoading: (state: ReturnType<typeof useLoadingStore.getState>) => state.isAnyLoading(),
  loadingStates: (state: ReturnType<typeof useLoadingStore.getState>) => state.states
} 