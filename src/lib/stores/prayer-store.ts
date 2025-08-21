import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { PrayerRequestState, PrayerRequest, Language } from './types'

// Mock prayer request data
const mockPrayerRequests: PrayerRequest[] = [
  {
    id: 'prayer-1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    request: 'Please pray for my mother\'s healing. She has been diagnosed with cancer and we are trusting God for complete restoration.',
    category: 'healing',
    isAnonymous: false,
    isUrgent: true,
    isPublic: true,
    status: 'praying',
    submittedDate: '2024-01-15T10:30:00',
    prayerCount: 45,
    preferredLanguage: 'en'
  },
  {
    id: 'prayer-2',
    name: 'రాము',
    email: 'ramu@example.com',
    phone: '+91-98765-43210',
    request: 'మా కుటుంబంలో ఐక్యత కోసం ప్రార్థన చేయండి. మేము చాలా కష్టమైన సమయం గడుపుతున్నాము మరియు దేవుని మార్గదర్శకత్వం అవసరం.',
    category: 'family',
    isAnonymous: false,
    isUrgent: false,
    isPublic: true,
    status: 'praying',
    submittedDate: '2024-01-18T14:20:00',
    prayerCount: 23,
    preferredLanguage: 'te'
  },
  {
    id: 'prayer-3',
    name: 'Anonymous',
    request: 'Please pray for wisdom regarding a major life decision. I need God\'s clear direction for my career path.',
    category: 'guidance',
    isAnonymous: true,
    isUrgent: false,
    isPublic: true,
    status: 'praying',
    submittedDate: '2024-01-20T09:15:00',
    prayerCount: 12,
    preferredLanguage: 'en'
  },
  {
    id: 'prayer-4',
    name: 'మరియ',
    request: 'ఆర్థిక కష్టాలను అధిగమించడానికి దేవుని సహాయం కోసం ప్రార్థనలు. ఉద్యోగం దొరకడానికి ప్రార్థన చేయండి.',
    category: 'finances',
    isAnonymous: false,
    isUrgent: true,
    isPublic: true,
    status: 'answered',
    submittedDate: '2024-01-10T16:45:00',
    answeredDate: '2024-01-25T11:30:00',
    prayerCount: 67,
    testimonial: 'దేవుని కృపతో నాకు మంచి ఉద్యోగం దొరికింది! అందరికీ ధన్యవాదాలు.',
    preferredLanguage: 'te'
  }
]

export const usePrayerStore = create<PrayerRequestState>()(
  persist(
    (set, get) => ({
      requests: mockPrayerRequests,
      myRequests: [],
      publicRequests: mockPrayerRequests.filter(req => req.isPublic),
      currentRequest: null,
      isSubmitting: false,
      error: null,
      
      submitRequest: async (requestData): Promise<boolean> => {
        set({ isSubmitting: true, error: null })
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1500))
          
          const newRequest: PrayerRequest = {
            ...requestData,
            id: `prayer-${Date.now()}`,
            submittedDate: new Date().toISOString(),
            prayerCount: 0,
            status: 'pending'
          }
          
          const { requests, publicRequests } = get()
          
          // Add to all requests
          const updatedRequests = [...requests, newRequest]
          
          // Add to public requests if not anonymous and public
          const updatedPublicRequests = newRequest.isPublic 
            ? [...publicRequests, newRequest]
            : publicRequests
          
          set({
            requests: updatedRequests,
            publicRequests: updatedPublicRequests,
            isSubmitting: false
          })
          
          // In a real app, this would make an API call
          console.log('Prayer request submitted:', newRequest)
          
          return true
          
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Failed to submit prayer request',
            isSubmitting: false
          })
          return false
        }
      },
      
      prayForRequest: async (requestId: string): Promise<void> => {
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 300))
          
          const { requests, publicRequests } = get()
          
          // Update prayer count in all requests
          const updatedRequests = requests.map(req =>
            req.id === requestId
              ? { ...req, prayerCount: req.prayerCount + 1 }
              : req
          )
          
          // Update prayer count in public requests
          const updatedPublicRequests = publicRequests.map(req =>
            req.id === requestId
              ? { ...req, prayerCount: req.prayerCount + 1 }
              : req
          )
          
          set({
            requests: updatedRequests,
            publicRequests: updatedPublicRequests
          })
          
          // Store in localStorage to prevent duplicate prayers
          if (typeof window !== 'undefined') {
            const prayedRequests = JSON.parse(
              localStorage.getItem('prayed-requests') || '[]'
            )
            if (!prayedRequests.includes(requestId)) {
              prayedRequests.push(requestId)
              localStorage.setItem('prayed-requests', JSON.stringify(prayedRequests))
            }
          }
          
          console.log('Prayed for request:', requestId)
          
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Failed to record prayer'
          })
        }
      },
      
      updateRequestStatus: async (
        requestId: string, 
        status: PrayerRequest['status'], 
        testimonial?: string
      ): Promise<boolean> => {
        set({ isSubmitting: true, error: null })
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          const { requests, publicRequests, myRequests } = get()
          const now = new Date().toISOString()
          
          // Update in all requests
          const updatedRequests = requests.map(req =>
            req.id === requestId
              ? { 
                  ...req, 
                  status,
                  answeredDate: status === 'answered' ? now : (req.answeredDate || undefined),
                  testimonial: testimonial || req.testimonial || undefined
                } as PrayerRequest
              : req
          )
          
          // Update in public requests
          const updatedPublicRequests = publicRequests.map(req =>
            req.id === requestId
              ? { 
                  ...req, 
                  status,
                  answeredDate: status === 'answered' ? now : (req.answeredDate || undefined),
                  testimonial: testimonial || req.testimonial || undefined
                } as PrayerRequest
              : req
          )
          
          // Update in my requests
          const updatedMyRequests = myRequests.map(req =>
            req.id === requestId
              ? { 
                  ...req, 
                  status,
                  answeredDate: status === 'answered' ? now : (req.answeredDate || undefined),
                  testimonial: testimonial || req.testimonial || undefined
                } as PrayerRequest
              : req
          )
          
          set({
            requests: updatedRequests,
            publicRequests: updatedPublicRequests,
            myRequests: updatedMyRequests,
            isSubmitting: false
          })
          
          return true
          
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Failed to update request status',
            isSubmitting: false
          })
          return false
        }
      },
      
      fetchPublicRequests: async (): Promise<void> => {
        set({ isSubmitting: true, error: null })
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 800))
          
          // Filter public requests
          const publicRequests = mockPrayerRequests.filter(req => req.isPublic)
          
          set({
            publicRequests,
            isSubmitting: false
          })
          
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Failed to fetch prayer requests',
            isSubmitting: false
          })
        }
      },
      
      fetchMyRequests: async (email: string): Promise<void> => {
        set({ isSubmitting: true, error: null })
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 600))
          
          // Filter requests by email
          const myRequests = mockPrayerRequests.filter(req => req.email === email)
          
          set({
            myRequests,
            isSubmitting: false
          })
          
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Failed to fetch your requests',
            isSubmitting: false
          })
        }
      },
      
      setCurrentRequest: (request: PrayerRequest | null) => {
        set({ currentRequest: request })
      },
      
      clearError: () => {
        set({ error: null })
      }
    }),
    {
      name: 'prayer-store',
      partialize: (state) => ({
        // Only persist non-sensitive data
        publicRequests: state.publicRequests.map(req => ({
          ...req,
          email: req.isAnonymous ? undefined : req.email,
          phone: req.isAnonymous ? undefined : req.phone
        }))
      })
    }
  )
)

// Utility functions for prayer requests
export const formatPrayerDate = (date: string, locale: string = 'en-US'): string => {
  const requestDate = new Date(date)
  const now = new Date()
  const diffInDays = Math.floor((now.getTime() - requestDate.getTime()) / (1000 * 60 * 60 * 24))
  
  if (diffInDays === 0) {
    return locale === 'te' ? 'ఈ రోజు' : 'Today'
  } else if (diffInDays === 1) {
    return locale === 'te' ? 'నిన్న' : 'Yesterday'
  } else if (diffInDays < 7) {
    return locale === 'te' ? `${diffInDays} రోజుల క్రితం` : `${diffInDays} days ago`
  } else {
    return requestDate.toLocaleDateString(locale === 'te' ? 'te-IN' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
}

export const getPrayerCategoryLabel = (category: PrayerRequest['category'], language: Language): string => {
  const labels = {
    healing: { en: 'Healing', te: 'స్వస్థత' },
    guidance: { en: 'Guidance', te: 'మార్గదర్శకత్వం' },
    family: { en: 'Family', te: 'కుటుంబం' },
    finances: { en: 'Finances', te: 'ఆర్థికం' },
    salvation: { en: 'Salvation', te: 'మోక్షం' },
    other: { en: 'Other', te: 'ఇతర' }
  }
  
  return labels[category][language]
}

export const getPrayerStatusLabel = (status: PrayerRequest['status'], language: Language): string => {
  const labels = {
    pending: { en: 'Pending', te: 'వేచి ఉంది' },
    praying: { en: 'Praying', te: 'ప్రార్థనలో' },
    answered: { en: 'Answered', te: 'జవాబు వచ్చింది' }
  }
  
  return labels[status][language]
}

export const canUserPrayForRequest = (requestId: string): boolean => {
  if (typeof window === 'undefined') return true
  
  const prayedRequests = JSON.parse(
    localStorage.getItem('prayed-requests') || '[]'
  )
  
  return !prayedRequests.includes(requestId)
}

export const getPrayerRequestStats = () => {
  const { requests } = usePrayerStore.getState()
  
  return {
    total: requests.length,
    pending: requests.filter(req => req.status === 'pending').length,
    praying: requests.filter(req => req.status === 'praying').length,
    answered: requests.filter(req => req.status === 'answered').length,
    urgent: requests.filter(req => req.isUrgent && req.status !== 'answered').length,
    totalPrayers: requests.reduce((sum, req) => sum + req.prayerCount, 0),
    categoriesCount: {
      healing: requests.filter(req => req.category === 'healing').length,
      guidance: requests.filter(req => req.category === 'guidance').length,
      family: requests.filter(req => req.category === 'family').length,
      finances: requests.filter(req => req.category === 'finances').length,
      salvation: requests.filter(req => req.category === 'salvation').length,
      other: requests.filter(req => req.category === 'other').length
    }
  }
}

// Auto-refresh public requests periodically
export const enablePrayerAutoRefresh = (intervalMinutes: number = 5) => {
  if (typeof window === 'undefined') return
  
  const interval = setInterval(() => {
    const { fetchPublicRequests } = usePrayerStore.getState()
    fetchPublicRequests().catch(console.error)
  }, intervalMinutes * 60 * 1000)
  
  return () => clearInterval(interval)
} 