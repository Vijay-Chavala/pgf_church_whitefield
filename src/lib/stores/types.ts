// Global state type definitions for Zustand stores

import type { Event as BaseEvent, Pastor } from '@/types'

// Extended Event type for store usage
export interface Event extends BaseEvent {
  isUpcoming?: boolean
  isFeatured?: boolean
  registrationOpen?: boolean
  maxAttendees?: number
  currentAttendees?: number
  price?: number
}

// Extended Pastor type for sermons
export interface SermonPastor extends Pastor {
  image?: string
}

// Language Store Types
export type Language = 'en' | 'te'

export interface LanguageState {
  currentLanguage: Language
  isLoading: boolean
  setLanguage: (_language: Language) => void
  toggleLanguage: () => void
  t: (_key: string, _fallback?: string) => string
}

// Theme Store Types
export type Theme = 'light' | 'dark' | 'system'

export interface ThemeState {
  theme: Theme
  systemTheme: 'light' | 'dark'
  isLoading: boolean
  setTheme: (_theme: Theme) => void
  toggleTheme: () => void
  getCurrentTheme: () => 'light' | 'dark'
}

// Navigation Store Types
export interface NavigationItem {
  id: string
  label: string
  labelTe: string
  href: string
  icon?: string
  isActive?: boolean
  subItems?: NavigationItem[]
}

export interface NavigationState {
  isMenuOpen: boolean
  isMobileMenuOpen: boolean
  activeSection: string
  breadcrumbs: Array<{ label: string; href: string }>
  navigationItems: NavigationItem[]
  setMenuOpen: (_open: boolean) => void
  setMobileMenuOpen: (_open: boolean) => void
  setActiveSection: (_section: string) => void
  setBreadcrumbs: (_breadcrumbs: Array<{ label: string; href: string }>) => void
  toggleMobileMenu: () => void
  closeAllMenus: () => void
}

// Search Store Types
export interface SearchFilters {
  category?: 'all' | 'events' | 'news' | 'sermons' | 'ministries' | 'services'
  dateRange?: {
    start: Date
    end: Date
  }
  language?: Language
  tags?: string[]
}

export interface SearchResult {
  id: string
  title: string
  titleTe: string
  description: string
  descriptionTe: string
  type: 'event' | 'news' | 'sermon' | 'ministry' | 'service'
  url: string
  date?: string
  relevanceScore: number
  highlights?: string[]
}

export interface SearchState {
  query: string
  results: SearchResult[]
  filters: SearchFilters
  isSearching: boolean
  hasSearched: boolean
  totalResults: number
  suggestions: string[]
  recentSearches: string[]
  setQuery: (_query: string) => void
  setFilters: (_filters: SearchFilters) => void
  performSearch: (_query: string, _filters?: SearchFilters) => Promise<void>
  clearSearch: () => void
  addRecentSearch: (_query: string) => void
  clearRecentSearches: () => void
}

// Event Store Types
export interface EventFilters {
  category?: string
  upcoming?: boolean
  featured?: boolean
  dateRange?: {
    start: Date
    end: Date
  }
  registrationOpen?: boolean
}

export interface EventState {
  events: Event[]
  featuredEvents: Event[]
  upcomingEvents: Event[]
  filters: EventFilters
  selectedEvent: Event | null
  isLoading: boolean
  error: string | null
  setEvents: (_events: Event[]) => void
  setFilters: (_filters: EventFilters) => void
  setSelectedEvent: (_event: Event | null) => void
  fetchEvents: () => Promise<void>
  fetchEventById: (_id: string) => Promise<Event | null>
  registerForEvent: (_eventId: string, _participantData: any) => Promise<boolean>
  getFilteredEvents: () => Event[]
  clearError: () => void
}

// Sermon Store Types
export interface Sermon {
  id: string
  title: string
  titleTe: string
  description: string
  descriptionTe: string
  pastor: SermonPastor
  date: string
  duration: number // in minutes
  audioUrl?: string
  videoUrl?: string
  thumbnailUrl?: string
  transcript?: string
  transcriptTe?: string
  series?: string
  seriesTe?: string
  tags: string[]
  downloads: number
  views: number
  isPublished: boolean
}

export interface SermonSeries {
  id: string
  title: string
  titleTe: string
  description: string
  descriptionTe: string
  thumbnailUrl: string
  sermons: Sermon[]
  startDate: string
  endDate?: string
  isActive: boolean
}

export interface SermonFilters {
  pastor?: string
  series?: string
  dateRange?: {
    start: Date
    end: Date
  }
  tags?: string[]
  hasAudio?: boolean
  hasVideo?: boolean
}

export interface SermonState {
  sermons: Sermon[]
  series: SermonSeries[]
  featuredSermons: Sermon[]
  currentSermon: Sermon | null
  currentSeries: SermonSeries | null
  filters: SermonFilters
  isLoading: boolean
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  error: string | null
  setSermons: (_sermons: Sermon[]) => void
  setSeries: (_series: SermonSeries[]) => void
  setCurrentSermon: (_sermon: Sermon | null) => void
  setCurrentSeries: (_series: SermonSeries | null) => void
  setFilters: (_filters: SermonFilters) => void
  fetchSermons: () => Promise<void>
  fetchSermonById: (_id: string) => Promise<Sermon | null>
  playSermon: (_sermon: Sermon) => void
  pauseSermon: () => void
  seekTo: (_time: number) => void
  setVolume: (_volume: number) => void
  getFilteredSermons: () => Sermon[]
  incrementViews: (_sermonId: string) => void
  incrementDownloads: (_sermonId: string) => void
  clearError: () => void
}

// Contact Form Store Types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  category: 'general' | 'prayer' | 'counseling' | 'ministry' | 'event' | 'volunteer'
  preferredLanguage: Language
  preferredContact: 'email' | 'phone' | 'whatsapp'
  isUrgent: boolean
  newsletter: boolean
  privacyConsent: boolean
}

export interface ContactFormValidation {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  category?: string
  privacyConsent?: string
}

export interface ContactFormState {
  formData: ContactFormData
  validation: ContactFormValidation
  isSubmitting: boolean
  isSubmitted: boolean
  error: string | null
  successMessage: string | null
  setFormData: (data: Partial<ContactFormData>) => void
  setValidation: (validation: ContactFormValidation) => void
  validateField: (field: keyof ContactFormData, value: any) => string | null
  validateForm: () => boolean
  submitForm: () => Promise<boolean>
  resetForm: () => void
  clearMessages: () => void
}

// Prayer Request Store Types
export interface PrayerRequest {
  id: string
  name: string
  email?: string
  phone?: string
  request: string
  category: 'healing' | 'guidance' | 'family' | 'finances' | 'salvation' | 'other'
  isAnonymous: boolean
  isUrgent: boolean
  isPublic: boolean
  status: 'pending' | 'praying' | 'answered'
  submittedDate: string
  answeredDate?: string
  prayerCount: number
  testimonial?: string
  preferredLanguage: Language
}

export interface PrayerRequestState {
  requests: PrayerRequest[]
  myRequests: PrayerRequest[]
  publicRequests: PrayerRequest[]
  currentRequest: PrayerRequest | null
  isSubmitting: boolean
  error: string | null
  submitRequest: (request: Omit<PrayerRequest, 'id' | 'submittedDate' | 'prayerCount' | 'status'>) => Promise<boolean>
  prayForRequest: (requestId: string) => Promise<void>
  updateRequestStatus: (requestId: string, status: PrayerRequest['status'], testimonial?: string) => Promise<boolean>
  fetchPublicRequests: () => Promise<void>
  fetchMyRequests: (email: string) => Promise<void>
  setCurrentRequest: (request: PrayerRequest | null) => void
  clearError: () => void
}

// Loading States Store Types
export interface LoadingStates {
  global: boolean
  navigation: boolean
  events: boolean
  sermons: boolean
  contact: boolean
  search: boolean
  theme: boolean
  language: boolean
  prayer: boolean
  [key: string]: boolean
}

export interface LoadingState {
  states: LoadingStates
  setLoading: (key: keyof LoadingStates | string, loading: boolean) => void
  setGlobalLoading: (loading: boolean) => void
  isAnyLoading: () => boolean
  getLoadingState: (key: keyof LoadingStates | string) => boolean
  clearAllLoading: () => void
}

// Combined App State Type
export interface AppState {
  language: LanguageState
  theme: ThemeState
  navigation: NavigationState
  search: SearchState
  events: EventState
  sermons: SermonState
  contact: ContactFormState
  prayer: PrayerRequestState
  loading: LoadingState
} 