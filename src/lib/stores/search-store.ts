import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { SearchState, SearchFilters, SearchResult, Language } from './types'

// Mock search data - In a real app, this would come from an API
const searchableContent = {
  events: [
    {
      id: 'christmas-2024',
      title: 'Christmas Celebration 2024',
      titleTe: 'క్రిస్మస్ వేడుకలు 2024',
      description: 'Join us for a special Christmas celebration with carols, fellowship, and worship.',
      descriptionTe: 'కీర్తనలు, సహవాసం మరియు ఆరాధనతో ప్రత్యేక క్రిస్మస్ వేడుకలో మాతో చేరండి.',
      type: 'event' as const,
      url: '/events/christmas-2024',
      date: '2024-12-25',
      tags: ['christmas', 'celebration', 'worship', 'fellowship']
    },
    {
      id: 'youth-camp-2024',
      title: 'Youth Summer Camp 2024',
      titleTe: 'యువజన వేసవి శిబిరం 2024',
      description: 'A week-long youth camp filled with activities, worship, and spiritual growth.',
      descriptionTe: 'కార్యకలాపాలు, ఆరాధన మరియు ఆధ్యాత్మిక వృద్ధితో నిండిన వారం రోజుల యువజన శిబిరం.',
      type: 'event' as const,
      url: '/events/youth-camp-2024',
      date: '2024-06-15',
      tags: ['youth', 'camp', 'summer', 'activities']
    }
  ],
  sermons: [
    {
      id: 'faith-hope-love',
      title: 'Faith, Hope, and Love',
      titleTe: 'విశ్వాసం, ఆశ మరియు ప్రేమ',
      description: 'A powerful sermon on the three pillars of Christian life.',
      descriptionTe: 'క్రైస్తవ జీవితంలోని మూడు స్తంభాలపై శక్తివంతమైన ప్రవచనం.',
      type: 'sermon' as const,
      url: '/sermons/faith-hope-love',
      date: '2024-01-07',
      tags: ['faith', 'hope', 'love', 'christian-life']
    },
    {
      id: 'gods-grace',
      title: "God's Amazing Grace",
      titleTe: 'దేవుని అద్భుతమైన కృప',
      description: 'Understanding the depth and breadth of God\'s grace in our lives.',
      descriptionTe: 'మన జీవితాలలో దేవుని కృప యొక్క లోతు మరియు వెడల్పును అర్థం చేసుకోవడం.',
      type: 'sermon' as const,
      url: '/sermons/gods-grace',
      date: '2024-01-14',
      tags: ['grace', 'salvation', 'mercy', 'forgiveness']
    }
  ],
  news: [
    {
      id: 'new-ministry-launch',
      title: 'New Children Ministry Launch',
      titleTe: 'కొత్త పిల్లల పరిచర్య ప్రారంభం',
      description: 'We are excited to announce the launch of our new children ministry program.',
      descriptionTe: 'మా కొత్త పిల్లల పరిచర్య కార్యక్రమం ప్రారంభాన్ని ప్రకటించడంలో మేము సంతోషిస్తున్నాము.',
      type: 'news' as const,
      url: '/news/children-ministry-launch',
      date: '2024-02-01',
      tags: ['children', 'ministry', 'launch', 'education']
    }
  ],
  ministries: [
    {
      id: 'youth-ministry',
      title: 'Youth Ministry',
      titleTe: 'యువజన పరిచర్య',
      description: 'Empowering young people to grow in faith and serve their community.',
      descriptionTe: 'యువజనులను విశ్వాసంలో ఎదుగుటకు మరియు వారి సమాజానికి సేవ చేయుటకు శక్తినివ్వడం.',
      type: 'ministry' as const,
      url: '/ministries/youth',
      tags: ['youth', 'community', 'service', 'growth']
    },
    {
      id: 'prayer-ministry',
      title: 'Prayer Ministry',
      titleTe: 'ప్రార్థన పరిచర్య',
      description: 'Dedicated to intercession and spiritual warfare through prayer.',
      descriptionTe: 'ప్రార్థన ద్వారా మధ్యవర్తిత్వం మరియు ఆధ్యాత్మిక యుద్ధానికి అంకితం.',
      type: 'ministry' as const,
      url: '/ministries/prayer',
      tags: ['prayer', 'intercession', 'spiritual', 'warfare']
    }
  ]
}

// Search algorithm with fuzzy matching
const performSearch = (query: string, filters: SearchFilters): SearchResult[] => {
  if (!query.trim()) return []
  
  const searchTerm = query.toLowerCase().trim()
  const results: SearchResult[] = []
  
  // Helper function to calculate relevance score
  const calculateRelevance = (
    title: string, 
    titleTe: string, 
    description: string, 
    descriptionTe: string,
    tags: string[]
  ): { score: number; highlights: string[] } => {
    let score = 0
    const highlights: string[] = []
    
    // Title exact match gets highest score
    if (title.toLowerCase().includes(searchTerm)) {
      score += 100
      highlights.push(title)
    }
    if (titleTe.includes(searchTerm)) {
      score += 100
      highlights.push(titleTe)
    }
    
    // Description match gets medium score
    if (description.toLowerCase().includes(searchTerm)) {
      score += 50
      highlights.push(description.substring(0, 100) + '...')
    }
    if (descriptionTe.includes(searchTerm)) {
      score += 50
      highlights.push(descriptionTe.substring(0, 100) + '...')
    }
    
    // Tag match gets lower score
    tags.forEach(tag => {
      if (tag.toLowerCase().includes(searchTerm)) {
        score += 25
        highlights.push(`Tag: ${tag}`)
      }
    })
    
    // Fuzzy matching for partial words
    const words = searchTerm.split(' ')
    words.forEach(word => {
      if (word.length > 2) {
        const titleWords = title.toLowerCase().split(' ')
        const descWords = description.toLowerCase().split(' ')
        
        titleWords.forEach(titleWord => {
          if (titleWord.includes(word) && titleWord !== word) {
            score += 10
          }
        })
        
        descWords.forEach(descWord => {
          if (descWord.includes(word) && descWord !== word) {
            score += 5
          }
        })
      }
    })
    
    return { score, highlights }
  }
  
  // Search through all content types
  Object.entries(searchableContent).forEach(([contentType, items]) => {
    // Apply category filter
    if (filters.category && filters.category !== 'all' && contentType !== filters.category) {
      return
    }
    
    items.forEach(item => {
      const { score, highlights } = calculateRelevance(
        item.title,
        item.titleTe,
        item.description,
        item.descriptionTe,
        item.tags || []
      )
      
      if (score > 0) {
        // Apply date filter if specified
        if (filters.dateRange && 'date' in item && item.date) {
          const itemDate = new Date(item.date)
          if (itemDate < filters.dateRange.start || itemDate > filters.dateRange.end) {
            return
          }
        }
        
        // Apply tag filter if specified
        if (filters.tags && filters.tags.length > 0) {
          const itemTags = item.tags || []
          const hasMatchingTag = filters.tags.some(filterTag => 
            itemTags.some(itemTag => itemTag.toLowerCase().includes(filterTag.toLowerCase()))
          )
          if (!hasMatchingTag) {
            return
          }
        }
        
        results.push({
          id: item.id,
          title: item.title,
          titleTe: item.titleTe,
          description: item.description,
          descriptionTe: item.descriptionTe,
          type: item.type,
          url: item.url,
          date: 'date' in item ? item.date : undefined,
          relevanceScore: score,
          highlights
        })
      }
    })
  })
  
  // Sort by relevance score
  return results.sort((a, b) => b.relevanceScore - a.relevanceScore)
}

// Generate search suggestions based on query
const generateSuggestions = (query: string): string[] => {
  if (!query || query.length < 2) return []
  
  const suggestions = new Set<string>()
  const searchTerm = query.toLowerCase()
  
  // Extract common terms from all content
  Object.values(searchableContent).flat().forEach(item => {
    // Add title words
    item.title.toLowerCase().split(' ').forEach(word => {
      if (word.length > 2 && word.includes(searchTerm)) {
        suggestions.add(word)
      }
    })
    
    // Add tags
    if (item.tags) {
      item.tags.forEach(tag => {
        if (tag.toLowerCase().includes(searchTerm)) {
          suggestions.add(tag)
        }
      })
    }
  })
  
  return Array.from(suggestions).slice(0, 5)
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set, get) => ({
      query: '',
      results: [],
      filters: {
        category: 'all',
        language: 'te'
      },
      isSearching: false,
      hasSearched: false,
      totalResults: 0,
      suggestions: [],
      recentSearches: [],
      
      setQuery: (query: string) => {
        set({ query })
        
        // Generate suggestions for non-empty queries
        if (query.length > 1) {
          const suggestions = generateSuggestions(query)
          set({ suggestions })
        } else {
          set({ suggestions: [] })
        }
      },
      
      setFilters: (filters: SearchFilters) => {
        set({ filters })
        
        // Re-run search if there's an active query
        const { query } = get()
        if (query && get().hasSearched) {
          get().performSearch(query, filters)
        }
      },
      
      performSearch: async (query: string, filters?: SearchFilters) => {
        const searchFilters = filters || get().filters
        
        set({ 
          isSearching: true,
          query 
        })
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 300))
        
        try {
          const results = performSearch(query, searchFilters)
          
          set({
            results,
            totalResults: results.length,
            isSearching: false,
            hasSearched: true
          })
          
          // Add to recent searches if it's a meaningful query
          if (query.length > 2) {
            get().addRecentSearch(query)
          }
          
        } catch (error) {
          console.error('Search error:', error)
          set({
            results: [],
            totalResults: 0,
            isSearching: false,
            hasSearched: true
          })
        }
      },
      
      clearSearch: () => {
        set({
          query: '',
          results: [],
          hasSearched: false,
          totalResults: 0,
          suggestions: []
        })
      },
      
      addRecentSearch: (query: string) => {
        const { recentSearches } = get()
        const updatedSearches = [
          query,
          ...recentSearches.filter(search => search !== query)
        ].slice(0, 10) // Keep only last 10 searches
        
        set({ recentSearches: updatedSearches })
      },
      
      clearRecentSearches: () => {
        set({ recentSearches: [] })
      }
    }),
    {
      name: 'search-store',
      partialize: (state) => ({
        recentSearches: state.recentSearches,
        filters: state.filters
      })
    }
  )
) 