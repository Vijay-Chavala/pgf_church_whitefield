import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface ChurchStore {
  // Theme state
  isDarkMode: boolean
  toggleTheme: () => void
  
  // Navigation state
  isMenuOpen: boolean
  activeSection: string
  setMenuOpen: (open: boolean) => void
  setActiveSection: (section: string) => void
  
  // Language state
  currentLanguage: 'te' | 'en'
  toggleLanguage: () => void
  
  // Church service state
  upcomingServices: ServiceInfo[]
  setUpcomingServices: (services: ServiceInfo[]) => void
  
  // Contact form state
  isContactFormOpen: boolean
  setContactFormOpen: (open: boolean) => void
  
  // Loading states
  isLoading: boolean
  setLoading: (loading: boolean) => void
}

interface ServiceInfo {
  id: string
  title: string
  titleTe: string
  date: string
  time: string
  type: 'regular' | 'special' | 'youth' | 'prayer'
  description?: string
  descriptionTe?: string
}

const useChurchStore = create<ChurchStore>()(
  devtools(
    (set, get) => ({
      // Theme state
      isDarkMode: false,
      toggleTheme: () => {
        const { isDarkMode } = get()
        set({ isDarkMode: !isDarkMode }, false, 'toggleTheme')
        
        // Update document class for theme switching
        if (typeof document !== 'undefined') {
          document.documentElement.classList.toggle('dark', !isDarkMode)
        }
      },
      
      // Navigation state
      isMenuOpen: false,
      activeSection: 'home',
      setMenuOpen: (open: boolean) =>
        set({ isMenuOpen: open }, false, 'setMenuOpen'),
      setActiveSection: (section: string) =>
        set({ activeSection: section }, false, 'setActiveSection'),
      
      // Language state
      currentLanguage: 'en',
      toggleLanguage: () => {
        const { currentLanguage } = get()
        set(
          { currentLanguage: currentLanguage === 'en' ? 'te' : 'en' },
          false,
          'toggleLanguage'
        )
      },
      
      // Church service state
      upcomingServices: [],
      setUpcomingServices: (services: ServiceInfo[]) =>
        set({ upcomingServices: services }, false, 'setUpcomingServices'),
      
      // Contact form state
      isContactFormOpen: false,
      setContactFormOpen: (open: boolean) =>
        set({ isContactFormOpen: open }, false, 'setContactFormOpen'),
      
      // Loading states
      isLoading: false,
      setLoading: (loading: boolean) =>
        set({ isLoading: loading }, false, 'setLoading'),
    }),
    {
      name: 'church-store',
    }
  )
)

export default useChurchStore
export type { ServiceInfo } 