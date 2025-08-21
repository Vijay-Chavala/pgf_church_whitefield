import { create } from 'zustand'
import type { ContactFormState, ContactFormData, ContactFormValidation, Language } from './types'

// Default form data
const defaultFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  category: 'general',
  preferredLanguage: 'en',
  preferredContact: 'email',
  isUrgent: false,
  newsletter: false,
  privacyConsent: false
}

// Validation functions
const validateEmail = (email: string): string | null => {
  if (!email) return 'Email is required'

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address'
  }

  return null
}

const validatePhone = (phone: string): string | null => {
  if (!phone) return null // Phone is optional

  // Indian phone number regex (supports +91, 0, or direct 10 digits)
  const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/
  if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
    return 'Please enter a valid Indian phone number'
  }

  return null
}

const validateName = (name: string): string | null => {
  if (!name.trim()) return 'Name is required'

  if (name.trim().length < 2) {
    return 'Name must be at least 2 characters long'
  }

  if (name.trim().length > 100) {
    return 'Name must not exceed 100 characters'
  }

  return null
}

const validateSubject = (subject: string): string | null => {
  if (!subject.trim()) return 'Subject is required'

  if (subject.trim().length < 5) {
    return 'Subject must be at least 5 characters long'
  }

  if (subject.trim().length > 200) {
    return 'Subject must not exceed 200 characters'
  }

  return null
}

const validateMessage = (message: string): string | null => {
  if (!message.trim()) return 'Message is required'

  if (message.trim().length < 10) {
    return 'Message must be at least 10 characters long'
  }

  if (message.trim().length > 2000) {
    return 'Message must not exceed 2000 characters'
  }

  return null
}

const validateCategory = (category: string): string | null => {
  const validCategories = ['general', 'prayer', 'counseling', 'ministry', 'event', 'volunteer']
  if (!validCategories.includes(category)) {
    return 'Please select a valid category'
  }

  return null
}

const validatePrivacyConsent = (consent: boolean): string | null => {
  if (!consent) {
    return 'You must agree to the privacy policy to submit the form'
  }

  return null
}

export const useContactStore = create<ContactFormState>((set, get) => ({
  formData: defaultFormData,
  validation: {},
  isSubmitting: false,
  isSubmitted: false,
  error: null,
  successMessage: null,

  setFormData: (data: Partial<ContactFormData>) => {
    const currentData = get().formData
    const newData = { ...currentData, ...data }

    set({ formData: newData })

    // Clear validation errors for updated fields
    const updatedValidation = { ...get().validation }
    Object.keys(data).forEach(key => {
      delete updatedValidation[key as keyof ContactFormValidation]
    })

    set({ validation: updatedValidation })
  },

  setValidation: (validation: ContactFormValidation) => {
    set({ validation })
  },

  validateField: (field: keyof ContactFormData, value: any): string | null => {
    switch (field) {
      case 'name':
        return validateName(value)
      case 'email':
        return validateEmail(value)
      case 'phone':
        return validatePhone(value)
      case 'subject':
        return validateSubject(value)
      case 'message':
        return validateMessage(value)
      case 'category':
        return validateCategory(value)
      case 'privacyConsent':
        return validatePrivacyConsent(value)
      default:
        return null
    }
  },

  validateForm: (): boolean => {
    const { formData } = get()
    const validation: ContactFormValidation = {}
    let isValid = true

    // Validate all required fields
    const nameError = validateName(formData.name)
    if (nameError) {
      validation.name = nameError
      isValid = false
    }

    const emailError = validateEmail(formData.email)
    if (emailError) {
      validation.email = emailError
      isValid = false
    }

    const phoneError = validatePhone(formData.phone || '')
    if (phoneError) {
      validation.phone = phoneError
      isValid = false
    }

    const subjectError = validateSubject(formData.subject)
    if (subjectError) {
      validation.subject = subjectError
      isValid = false
    }

    const messageError = validateMessage(formData.message)
    if (messageError) {
      validation.message = messageError
      isValid = false
    }

    const categoryError = validateCategory(formData.category)
    if (categoryError) {
      validation.category = categoryError
      isValid = false
    }

    const privacyError = validatePrivacyConsent(formData.privacyConsent)
    if (privacyError) {
      validation.privacyConsent = privacyError
      isValid = false
    }

    set({ validation })
    return isValid
  },

  submitForm: async (): Promise<boolean> => {
    const { formData, validateForm } = get()

    // Clear previous messages
    set({ error: null, successMessage: null })

    // Validate form
    const isValid = validateForm()
    if (!isValid) {
      return false
    }

    set({ isSubmitting: true })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // In a real app, this would be an API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer
        })
      })

      if (!response.ok) {
        throw new Error('Failed to submit form. Please try again.')
      }

      // Success
      set({
        isSubmitting: false,
        isSubmitted: true,
        successMessage: formData.preferredLanguage === 'te'
          ? 'మీ సందేశం విజయవంతంగా పంపబడింది. మేము త్వరలో మీకు ప్రత్యుత్తరం ఇస్తాము.'
          : 'Your message has been sent successfully. We will get back to you soon.',
        formData: defaultFormData, // Reset form
        validation: {} // Clear validation
      })

      return true

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred'

      set({
        isSubmitting: false,
        error: formData.preferredLanguage === 'te'
          ? `లోపం: ${errorMessage}. దయచేసి మళ్లీ ప్రయత్నించండి.`
          : `Error: ${errorMessage}. Please try again.`
      })

      return false
    }
  },

  resetForm: () => {
    set({
      formData: defaultFormData,
      validation: {},
      isSubmitting: false,
      isSubmitted: false,
      error: null,
      successMessage: null
    })
  },

  clearMessages: () => {
    set({
      error: null,
      successMessage: null
    })
  }
}))

// Utility functions for form handling
export const getFormProgress = (): number => {
  const { formData } = useContactStore.getState()
  const requiredFields = ['name', 'email', 'subject', 'message', 'privacyConsent']
  const filledFields = requiredFields.filter(field => {
    const value = formData[field as keyof ContactFormData]
    if (typeof value === 'boolean') return value
    if (typeof value === 'string') return value.trim().length > 0
    return false
  })

  return Math.round((filledFields.length / requiredFields.length) * 100)
}

export const getCharacterCount = (field: keyof ContactFormData): number => {
  const { formData } = useContactStore.getState()
  const value = formData[field]
  return typeof value === 'string' ? value.length : 0
}

export const getCharacterLimit = (field: keyof ContactFormData): number => {
  switch (field) {
    case 'name':
      return 100
    case 'subject':
      return 200
    case 'message':
      return 2000
    default:
      return 0
  }
}

export const isFieldRequired = (field: keyof ContactFormData): boolean => {
  const requiredFields = ['name', 'email', 'subject', 'message', 'privacyConsent']
  return requiredFields.includes(field)
}

// Form submission analytics (in a real app, this would integrate with analytics service)
export const trackFormInteraction = (action: string, field?: string) => {
  if (typeof window !== 'undefined') {
    // Google Analytics or other analytics service
    console.log(`Contact Form: ${action}${field ? ` - ${field}` : ''}`)

    // Custom event for analytics
    window.dispatchEvent(new CustomEvent('contactFormInteraction', {
      detail: { action, field, timestamp: new Date().toISOString() }
    }))
  }
}

// Auto-save functionality (saves to localStorage)
export const enableAutoSave = () => {
  if (typeof window === 'undefined') return

  const unsubscribe = useContactStore.subscribe(
    (state) => {
      // Only save if form has meaningful data
      const formData = state.formData
      if (formData.name || formData.email || formData.subject || formData.message) {
        localStorage.setItem('contact-form-draft', JSON.stringify(formData))
      }
    }
  )

  return unsubscribe
}

// Load saved draft
export const loadDraft = (): boolean => {
  if (typeof window === 'undefined') return false

  try {
    const saved = localStorage.getItem('contact-form-draft')
    if (saved) {
      const draftData = JSON.parse(saved) as Partial<ContactFormData>
      useContactStore.getState().setFormData(draftData)
      return true
    }
  } catch (error) {
    console.error('Error loading form draft:', error)
  }

  return false
}

// Clear saved draft
export const clearDraft = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('contact-form-draft')
  }
} 