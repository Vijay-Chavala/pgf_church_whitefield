// Common types
export interface BaseContent {
  id: string
  title: string
  titleTe: string
  description?: string
  descriptionTe?: string
  createdAt: string
  updatedAt: string
}

// Navigation types
export interface NavItem {
  id: string
  label: string
  labelTe: string
  href: string
  icon?: string
  subItems?: NavItem[]

}

// Church service types
export interface ChurchService extends BaseContent {
  date: string
  time: string
  duration?: number
  type: 'regular' | 'special' | 'youth' | 'prayer' | 'wedding' | 'funeral'
  location: string
  locationTe: string
  pastor?: Pastor
  isRecurring: boolean
  recurringPattern?: 'weekly' | 'monthly' | 'yearly'
  maxAttendees?: number
  registrationRequired: boolean
}

// Pastor and leadership types
export interface Pastor {
  id: string
  name: string
  nameTe: string
  title: string
  titleTe: string
  bio: string
  bioTe: string
  imageUrl?: string
  phone?: string
  email?: string
  yearJoined: number
}

export interface Leader extends Pastor {
  department: string
  departmentTe: string
  responsibilities: string[]
  responsibilitiesTe: string[]
}

// Event types
export interface Event extends BaseContent {
  date: string
  time: string
  endDate?: string
  endTime?: string
  location: string
  locationTe: string
  imageUrl?: string
  organizer: string
  organizerTe: string
  category: 'community' | 'youth' | 'children' | 'prayer' | 'outreach' | 'education'
  isPublic: boolean
  registrationRequired: boolean
  registrationDeadline?: string
  maxParticipants?: number
  currentParticipants: number
  cost?: number
  tags: string[]
}

// News and announcement types
export interface NewsItem extends BaseContent {
  excerpt: string
  excerptTe: string
  content: string
  contentTe: string
  imageUrl?: string
  author: string
  authorTe: string
  category: 'announcement' | 'news' | 'testimony' | 'community'
  isHighPriority: boolean
  publishedDate: string
  tags: string[]
}

// Ministry types
export interface Ministry extends BaseContent {
  leader: Pastor | Leader
  members: number
  meetingTime: string
  meetingLocation: string
  meetingLocationTe: string
  imageUrl?: string
  category: 'youth' | 'children' | 'women' | 'men' | 'prayer' | 'outreach' | 'music'
  isActive: boolean
  contactInfo: ContactInfo
}

// Contact types
export interface ContactInfo {
  email?: string
  phone?: string
  address?: string
  addressTe?: string
  socialMedia?: {
    facebook?: string
    instagram?: string
    youtube?: string
    whatsapp?: string
  }
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  preferredLanguage: 'en' | 'te'
  category: 'general' | 'prayer' | 'counseling' | 'ministry' | 'event'
}

// Gallery types
export interface GalleryItem {
  id: string
  title: string
  titleTe: string
  imageUrl: string
  thumbnailUrl?: string
  description?: string
  descriptionTe?: string
  date: string
  category: 'service' | 'event' | 'ministry' | 'community' | 'building'
  photographer?: string
  tags: string[]
}

export interface Album {
  id: string
  title: string
  titleTe: string
  description?: string
  descriptionTe?: string
  coverImageUrl: string
  items: GalleryItem[]
  date: string
  isPublic: boolean
}

// Prayer request types
export interface PrayerRequest {
  id: string
  name: string
  email?: string
  phone?: string
  request: string
  category: 'healing' | 'guidance' | 'family' | 'finances' | 'salvation' | 'other'
  isAnonymous: boolean
  isUrgent: boolean
  status: 'pending' | 'praying' | 'answered'
  submittedDate: string
  preferredLanguage: 'en' | 'te'
}

// Donation types
export interface Donation {
  id: string
  amount: number
  currency: 'INR' | 'USD'
  donorName?: string
  donorEmail?: string
  purpose: 'general' | 'building' | 'ministry' | 'outreach' | 'special'
  isRecurring: boolean
  recurringFrequency?: 'weekly' | 'monthly' | 'yearly'
  date: string
  status: 'pending' | 'completed' | 'failed'
  transactionId?: string
}

// Utility types
export type Language = 'en' | 'te'

export interface LocalizedContent {
  en: string
  te: string
}

export interface ChurchSettings {
  churchName: LocalizedContent
  address: LocalizedContent
  phone: string
  email: string
  website: string
  socialMedia: ContactInfo['socialMedia']
  serviceTimings: {
    sunday: string
    wednesday?: string
    friday?: string
    saturday?: string
  }
  coordinates?: {
    latitude: number
    longitude: number
  }
}

// API response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form validation types
export interface ValidationError {
  field: string
  message: string
  messageTe: string
}

export interface FormState<T> {
  data: T
  errors: ValidationError[]
  isSubmitting: boolean
  isValid: boolean
} 