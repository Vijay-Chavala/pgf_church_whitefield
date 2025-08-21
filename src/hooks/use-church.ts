'use client'

import { useEffect, useState } from 'react'
import useChurchStore from '@/lib/stores/church-store'
import { useThemeStore } from '@/lib/stores/theme-store'
import type { Language } from '@/types'

// Hook for managing church language preference
export function useLanguage() {
  const { currentLanguage, toggleLanguage } = useChurchStore()

  const getText = (content: { en: string; te: string }) => {
    return content[currentLanguage] || content.en
  }

  return {
    currentLanguage,
    toggleLanguage,
    getText,
    isEnglish: currentLanguage === 'en',
    isTelugu: currentLanguage === 'te',
  }
}

// Hook for managing theme
export function useTheme() {
  const { theme, toggleTheme, getCurrentTheme } = useThemeStore()
  const isDarkMode = getCurrentTheme() === 'dark'

  useEffect(() => {
    // Apply theme on mount
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', isDarkMode)
    }
  }, [isDarkMode])

  return {
    isDarkMode,
    toggleTheme,
    theme: theme,
    currentTheme: getCurrentTheme(),
  }
}

// Hook for managing navigation
export function useNavigation() {
  const {
    isMenuOpen,
    activeSection,
    setMenuOpen,
    setActiveSection
  } = useChurchStore()

  const closeMenu = () => setMenuOpen(false)
  const openMenu = () => setMenuOpen(true)
  const toggleMenu = () => setMenuOpen(!isMenuOpen)

  return {
    isMenuOpen,
    activeSection,
    setActiveSection,
    closeMenu,
    openMenu,
    toggleMenu,
  }
}

// Hook for managing contact form
export function useContactForm() {
  const {
    isContactFormOpen,
    setContactFormOpen
  } = useChurchStore()

  const openContactForm = () => setContactFormOpen(true)
  const closeContactForm = () => setContactFormOpen(false)

  return {
    isContactFormOpen,
    openContactForm,
    closeContactForm,
  }
}

// Hook for managing loading states
export function useLoading() {
  const { isLoading, setLoading } = useChurchStore()

  return {
    isLoading,
    setLoading,
    startLoading: () => setLoading(true),
    stopLoading: () => setLoading(false),
  }
}

// Hook for managing church services
export function useServices() {
  const { upcomingServices, setUpcomingServices } = useChurchStore()

  const addService = (service: any) => {
    setUpcomingServices([...upcomingServices, service])
  }

  const removeService = (serviceId: string) => {
    setUpcomingServices(
      upcomingServices.filter(service => service.id !== serviceId)
    )
  }

  const updateService = (serviceId: string, updates: any) => {
    setUpcomingServices(
      upcomingServices.map(service =>
        service.id === serviceId ? { ...service, ...updates } : service
      )
    )
  }

  return {
    upcomingServices,
    addService,
    removeService,
    updateService,
    setUpcomingServices,
  }
}

// Hook for local storage persistence
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue] as const
}

// Hook for form validation
export function useFormValidation<T extends Record<string, any>>(
  initialValues: T,
  validationRules: Record<keyof T, (value: any) => string | null>
) {
  const [values, setValues] = useState<T>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({})

  const validateField = (name: keyof T, value: any): string | null => {
    const rule = validationRules[name]
    return rule ? rule(value) : null
  }

  const validateAll = (): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {}
    let isValid = true

    Object.keys(validationRules).forEach(key => {
      const fieldKey = key as keyof T
      const error = validateField(fieldKey, values[fieldKey])
      if (error) {
        newErrors[fieldKey] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }))

    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error || undefined }))
    }
  }

  const handleBlur = (name: keyof T) => {
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, values[name])
    setErrors(prev => ({ ...prev, [name]: error || undefined }))
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset,
    isValid: Object.keys(errors).length === 0,
  }
}

// Hook for intersection observer (for scroll animations)
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry?.isIntersecting || false),
      { threshold: 0.1, ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [elementRef, options])

  return isIntersecting
}

// Hook for responsive design
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    setMatches(media.matches)

    const listener = (event: MediaQueryListEvent) => setMatches(event.matches)
    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}

// Hook for debouncing values
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
} 