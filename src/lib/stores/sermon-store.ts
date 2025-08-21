import { create } from 'zustand'
import type { SermonState, SermonFilters, Sermon, SermonSeries } from './types'

// Mock sermon data
const mockSermons: Sermon[] = [
  {
    id: 'faith-hope-love-2024',
    title: 'Faith, Hope, and Love',
    titleTe: 'విశ్వాసం, ఆశ మరియు ప్రేమ',
    description: 'A powerful message on the three essential pillars of Christian life based on 1 Corinthians 13.',
    descriptionTe: '1 కొరింథీయులు 13వ అధ్యాయం ఆధారంగా క్రైస్తవ జీవితంలోని మూడు ముఖ్యమైన స్తంభాలపై శక్తివంతమైన సందేశం.',
    pastor: {
      id: 'john-david',
      name: 'Pastor John David',
      nameTe: 'పాస్టర్ జాన్ దేవిడ్',
      image: '/images/pastors/john-david.jpg',
      bio: 'Senior Pastor with over 20 years of ministry experience.',
      bioTe: '20 సంవత్సరాలకు మించిన పరిచర్య అనుభవం ఉన్న సీనియర్ పాస్టర్.'
    },
    date: '2024-01-07T10:00:00',
    duration: 45,
    audioUrl: '/audio/sermons/faith-hope-love.mp3',
    videoUrl: '/video/sermons/faith-hope-love.mp4',
    thumbnailUrl: '/images/sermons/faith-hope-love.jpg',
    transcript: 'Today we dive deep into the beautiful passage of 1 Corinthians 13...',
    transcriptTe: 'ఈ రోజు మనం 1 కొరింథీయులు 13వ అధ్యాయంలోని అందమైన వాక్యాలను లోతుగా అధ్యయనం చేస్తాము...',
    series: 'foundations-of-faith',
    seriesTe: 'విశ్వాస పునాదులు',
    tags: ['faith', 'hope', 'love', 'christian-life', 'corinthians'],
    downloads: 245,
    views: 1250,
    isPublished: true
  },
  {
    id: 'gods-amazing-grace-2024',
    title: "God's Amazing Grace",
    titleTe: 'దేవుని అద్భుతమైన కృప',
    description: 'Understanding the depth and breadth of God\'s grace in our daily lives and salvation.',
    descriptionTe: 'మన దైనందిన జీవితంలో మరియు మోక్షంలో దేవుని కృప యొక్క లోతు మరియు వెడల్పును అర్థం చేసుకోవడం.',
    pastor: {
      id: 'mary-samuel',
      name: 'Pastor Mary Samuel',
      nameTe: 'పాస్టర్ మేరీ శామ్యూల్',
      image: '/images/pastors/mary-samuel.jpg',
      bio: 'Associate Pastor specializing in women\'s ministry and counseling.',
      bioTe: 'మహిళల పరిచర్య మరియు సలహాలలో ప్రత్యేకత కలిగిన అసోసియేట్ పాస్టర్.'
    },
    date: '2024-01-14T10:00:00',
    duration: 38,
    audioUrl: '/audio/sermons/gods-amazing-grace.mp3',
    videoUrl: '/video/sermons/gods-amazing-grace.mp4',
    thumbnailUrl: '/images/sermons/gods-grace.jpg',
    transcript: 'Grace is not just a theological concept, but a living reality...',
    transcriptTe: 'కృప కేవలం ఒక వేదాంత భావన మాత్రమే కాకుండా, జీవించే వాస్తవికత...',
    series: 'foundations-of-faith',
    seriesTe: 'విశ్వాస పునాదులు',
    tags: ['grace', 'salvation', 'mercy', 'forgiveness', 'theology'],
    downloads: 189,
    views: 892,
    isPublished: true
  },
  {
    id: 'walking-in-spirit-2024',
    title: 'Walking in the Spirit',
    titleTe: 'ఆత్మలో నడచుట',
    description: 'Learning to live and walk according to the Spirit rather than the flesh.',
    descriptionTe: 'మాంసం ప్రకారం కాకుండా ఆత్మ ప్రకారం జీవించడం మరియు నడవడం నేర్చుకోవడం.',
    pastor: {
      id: 'john-david',
      name: 'Pastor John David',
      nameTe: 'పాస్టర్ జాన్ దేవిడ్',
      image: '/images/pastors/john-david.jpg',
      bio: 'Senior Pastor with over 20 years of ministry experience.',
      bioTe: '20 సంవత్సరాలకు మించిన పరిచర్య అనుభవం ఉన్న సీనియర్ పాస్టర్.'
    },
    date: '2024-01-21T10:00:00',
    duration: 42,
    audioUrl: '/audio/sermons/walking-in-spirit.mp3',
    videoUrl: '/video/sermons/walking-in-spirit.mp4',
    thumbnailUrl: '/images/sermons/walking-spirit.jpg',
    transcript: 'The Spirit-filled life is not an option for believers, it\'s a necessity...',
    transcriptTe: 'ఆత్మతో నిండిన జీవితం విశ్వాసులకు ఒక ఎంపిక కాదు, అది అవసరం...',
    series: 'spirit-filled-living',
    seriesTe: 'ఆత్మతో నిండిన జీవనం',
    tags: ['holy-spirit', 'spiritual-growth', 'christian-living', 'galatians'],
    downloads: 156,
    views: 743,
    isPublished: true
  },
  {
    id: 'power-of-prayer-2024',
    title: 'The Power of Prayer',
    titleTe: 'ప్రార్థన యొక్క శక్తి',
    description: 'Discovering the transformative power of prayer in our relationship with God.',
    descriptionTe: 'దేవుడితో మన సంబంధంలో ప్రార్థన యొక్క రూపాంతర శక్తిని కనుగొనడం.',
    pastor: {
      id: 'mary-samuel',
      name: 'Pastor Mary Samuel',
      nameTe: 'పాస్టర్ మేరీ శామ్యూల్',
      image: '/images/pastors/mary-samuel.jpg',
      bio: 'Associate Pastor specializing in women\'s ministry and counseling.',
      bioTe: 'మహిళల పరిచర్య మరియు సలహాలలో ప్రత్యేకత కలిగిన అసోసియేట్ పాస్టర్.'
    },
    date: '2024-01-28T10:00:00',
    duration: 41,
    audioUrl: '/audio/sermons/power-of-prayer.mp3',
    thumbnailUrl: '/images/sermons/prayer-power.jpg',
    transcript: 'Prayer is not just talking to God, it\'s communion with the Creator...',
    transcriptTe: 'ప్రార్థన కేవలం దేవుడితో మాట్లాడటం మాత్రమే కాదు, సృష్టికర్తతో సహవాసం...',
    series: 'prayer-life',
    seriesTe: 'ప్రార్థనా జీవితం',
    tags: ['prayer', 'communion', 'intercession', 'spiritual-discipline'],
    downloads: 203,
    views: 967,
    isPublished: true
  }
]

const mockSermonSeries: SermonSeries[] = [
  {
    id: 'foundations-of-faith',
    title: 'Foundations of Faith',
    titleTe: 'విశ్వాస పునాదులు',
    description: 'Essential biblical truths every believer should understand.',
    descriptionTe: 'ప్రతి విశ్వాసి అర్థం చేసుకోవాల్సిన ముఖ్యమైన బైబిల్ సత్యాలు.',
    thumbnailUrl: '/images/series/foundations-of-faith.jpg',
    sermons: mockSermons.filter(s => s.series === 'foundations-of-faith'),
    startDate: '2024-01-07',
    endDate: '2024-02-04',
    isActive: false
  },
  {
    id: 'spirit-filled-living',
    title: 'Spirit-Filled Living',
    titleTe: 'ఆత్మతో నిండిన జీవనం',
    description: 'Learning to live a life empowered by the Holy Spirit.',
    descriptionTe: 'పరిశుద్ధాత్మ శక్తితో నిండిన జీవితాన్ని గడపడం నేర్చుకోవడం.',
    thumbnailUrl: '/images/series/spirit-filled-living.jpg',
    sermons: mockSermons.filter(s => s.series === 'spirit-filled-living'),
    startDate: '2024-01-21',
    endDate: '2024-03-10',
    isActive: true
  },
  {
    id: 'prayer-life',
    title: 'Developing Your Prayer Life',
    titleTe: 'మీ ప్రార్థనా జీవితాన్ని అభివృద్ధి చేయడం',
    description: 'Practical teaching on how to grow in prayer and intimacy with God.',
    descriptionTe: 'ప్రార్థనలో మరియు దేవుడితో సాన్నిహిత్యంలో ఎలా పెరుగుతారు అనే ఆచరణాత్మక బోధన.',
    thumbnailUrl: '/images/series/prayer-life.jpg',
    sermons: mockSermons.filter(s => s.series === 'prayer-life'),
    startDate: '2024-01-28',
    isActive: true
  }
]

export const useSermonStore = create<SermonState>((set, get) => ({
  sermons: mockSermons,
  series: mockSermonSeries,
  featuredSermons: mockSermons.slice(0, 3),
  currentSermon: null,
  currentSeries: null,
  filters: {},
  isLoading: false,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 1,
  error: null,
  
  setSermons: (sermons: Sermon[]) => {
    set({ 
      sermons,
      featuredSermons: sermons.slice(0, 3)
    })
  },
  
  setSeries: (series: SermonSeries[]) => {
    set({ series })
  },
  
  setCurrentSermon: (sermon: Sermon | null) => {
    set({ 
      currentSermon: sermon,
      duration: sermon?.duration ? sermon.duration * 60 : 0, // Convert minutes to seconds
      currentTime: 0,
      isPlaying: false
    })
  },
  
  setCurrentSeries: (series: SermonSeries | null) => {
    set({ currentSeries: series })
  },
  
  setFilters: (filters: SermonFilters) => {
    set({ filters })
  },
  
  fetchSermons: async () => {
    set({ isLoading: true, error: null })
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      set({
        sermons: mockSermons,
        featuredSermons: mockSermons.slice(0, 3),
        isLoading: false
      })
      
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch sermons',
        isLoading: false
      })
    }
  },
  
  fetchSermonById: async (id: string): Promise<Sermon | null> => {
    set({ isLoading: true, error: null })
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const sermon = mockSermons.find(s => s.id === id) || null
      
      if (sermon) {
        set({ 
          currentSermon: sermon,
          duration: sermon.duration * 60, // Convert minutes to seconds
          currentTime: 0
        })
      }
      
      set({ isLoading: false })
      return sermon
      
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch sermon',
        isLoading: false
      })
      return null
    }
  },
  
  playSermon: (sermon: Sermon) => {
    set({
      currentSermon: sermon,
      isPlaying: true,
      duration: sermon.duration * 60, // Convert minutes to seconds
      error: null
    })
    
    // In a real app, this would interface with an audio player
    console.log(`Playing sermon: ${sermon.title}`)
    
    // Dispatch event for audio player component
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('sermonPlay', {
        detail: { sermon }
      }))
    }
  },
  
  pauseSermon: () => {
    set({ isPlaying: false })
    
    // Dispatch event for audio player component
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('sermonPause'))
    }
  },
  
  seekTo: (time: number) => {
    const { duration } = get()
    const clampedTime = Math.max(0, Math.min(time, duration))
    
    set({ currentTime: clampedTime })
    
    // Dispatch event for audio player component
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('sermonSeek', {
        detail: { time: clampedTime }
      }))
    }
  },
  
  setVolume: (volume: number) => {
    const clampedVolume = Math.max(0, Math.min(volume, 1))
    set({ volume: clampedVolume })
    
    // Dispatch event for audio player component
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('sermonVolumeChange', {
        detail: { volume: clampedVolume }
      }))
    }
  },
  
  getFilteredSermons: (): Sermon[] => {
    const { sermons, filters } = get()
    
    return sermons.filter(sermon => {
      // Pastor filter
      if (filters.pastor && sermon.pastor.id !== filters.pastor) {
        return false
      }
      
      // Series filter
      if (filters.series && sermon.series !== filters.series) {
        return false
      }
      
      // Date range filter
      if (filters.dateRange) {
        const sermonDate = new Date(sermon.date)
        if (sermonDate < filters.dateRange.start || sermonDate > filters.dateRange.end) {
          return false
        }
      }
      
      // Tags filter
      if (filters.tags && filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some(filterTag => 
          sermon.tags.some(sermonTag => sermonTag.toLowerCase().includes(filterTag.toLowerCase()))
        )
        if (!hasMatchingTag) {
          return false
        }
      }
      
      // Has audio filter
      if (filters.hasAudio !== undefined && !!sermon.audioUrl !== filters.hasAudio) {
        return false
      }
      
      // Has video filter
      if (filters.hasVideo !== undefined && !!sermon.videoUrl !== filters.hasVideo) {
        return false
      }
      
      return sermon.isPublished
    })
  },
  
  incrementViews: (sermonId: string) => {
    const { sermons } = get()
    const updatedSermons = sermons.map(sermon => 
      sermon.id === sermonId 
        ? { ...sermon, views: sermon.views + 1 }
        : sermon
    )
    
    set({ sermons: updatedSermons })
    
    // In a real app, this would make an API call to track the view
    console.log(`Incremented views for sermon: ${sermonId}`)
  },
  
  incrementDownloads: (sermonId: string) => {
    const { sermons } = get()
    const updatedSermons = sermons.map(sermon => 
      sermon.id === sermonId 
        ? { ...sermon, downloads: sermon.downloads + 1 }
        : sermon
    )
    
    set({ sermons: updatedSermons })
    
    // In a real app, this would make an API call to track the download
    console.log(`Incremented downloads for sermon: ${sermonId}`)
  },
  
  clearError: () => {
    set({ error: null })
  }
}))

// Utility functions
export const formatSermonDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  
  if (hours > 0) {
    return `${hours}h ${mins}m`
  }
  return `${mins}m`
}

export const formatSermonDate = (date: string, locale: string = 'en-US'): string => {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const getSermonsByPastor = (pastorId: string): Sermon[] => {
  const { sermons } = useSermonStore.getState()
  return sermons.filter(sermon => sermon.pastor.id === pastorId)
}

export const getSermonsBySeries = (seriesId: string): Sermon[] => {
  const { sermons } = useSermonStore.getState()
  return sermons.filter(sermon => sermon.series === seriesId)
} 