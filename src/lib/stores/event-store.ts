import { create } from 'zustand'
import type { EventState, EventFilters } from './types'
import type { Event } from '@/types'

// Mock event data - In a real app, this would come from an API
const mockEvents: Event[] = [
  {
    id: 'christmas-2024',
    title: 'Christmas Celebration 2024',
    titleTe: 'క్రిస్మస్ వేడుకలు 2024',
    description: 'Join us for a joyous Christmas celebration with special carols, fellowship, and worship service. Bring your family and friends for this blessed occasion.',
    descriptionTe: 'ప్రత్యేక కీర్తనలు, సహవాసం మరియు ఆరాధన సేవతో ఆనందకరమైన క్రిస్మస్ వేడుకలో మాతో చేరండి. ఈ ఆశీర్వాద సందర్భానికి మీ కుటుంబం మరియు స్నేహితులను తీసుకొని రండి.',
    date: '2024-12-25',
    time: '10:00',
    endDate: '2024-12-25',
    endTime: '12:30',
    location: 'Main Sanctuary',
    locationTe: 'ప్రధాన మందిరం',
    category: 'community',
    isPublic: true,
    registrationRequired: false,
    maxParticipants: 500,
    currentParticipants: 0,
    cost: 0,
    organizer: 'Church Administration',
    organizerTe: 'చర్చ్ పరిపాలన',
    tags: ['christmas', 'worship', 'celebration', 'family'],
    imageUrl: '/images/events/christmas-2024.jpg',
    registrationDeadline: '2024-12-24T23:59:59',
    createdAt: '2024-01-01T00:00:00',
    updatedAt: '2024-01-01T00:00:00'
  },
  {
    id: 'new-year-prayer-2024',
    title: 'New Year Prayer Service',
    titleTe: 'నూతన సంవత్సర ప్రార్థనా సేవ',
    description: 'Start the new year with prayer and thanksgiving. A special midnight prayer service to welcome 2025 with God\'s blessings.',
    descriptionTe: 'ప్రార్థన మరియు కృతజ్ఞతతో నూతన సంవత్సరాన్ని ప్రారంభించండి. దేవుని ఆశీర్వాదాలతో 2025ను స్వాగతించడానికి ప్రత్యేక అర్ధరాత్రి ప్రార్థనా సేవ.',
    date: '2024-12-31',
    time: '23:00',
    endDate: '2025-01-01',
    endTime: '01:00',
    location: 'Main Sanctuary',
    locationTe: 'ప్రధాన మందిరం',
    category: 'prayer',
    isPublic: true,
    registrationRequired: true,
    maxParticipants: 300,
    currentParticipants: 150,
    cost: 0,
    organizer: 'Pastor John David',
    organizerTe: 'పాస్టర్ జాన్ దేవిడ్',
    tags: ['new-year', 'prayer', 'midnight', 'thanksgiving'],
    imageUrl: '/images/events/new-year-prayer.jpg',
    registrationDeadline: '2024-12-30T23:59:59',
    createdAt: '2024-01-01T00:00:00',
    updatedAt: '2024-01-01T00:00:00'
  },
  {
    id: 'youth-retreat-2024',
    title: 'Youth Winter Retreat',
    titleTe: 'యువజన శీతాకాల ఉపవాస సభ',
    description: 'A three-day youth retreat focusing on spiritual growth, fellowship, and fun activities. Open for ages 13-25.',
    descriptionTe: 'ఆధ్యాత్మిక వృద్ధి, సహవాసం మరియు వినోద కార్యకలాపాలపై దృష్టి సారించే మూడు రోజుల యువజన ఉపవాస సభ. 13-25 వయస్సు వారికి తెరవబడింది.',
    date: '2025-01-15',
    time: '09:00',
    endDate: '2025-01-17',
    endTime: '17:00',
    location: 'Faith Camp Grounds, Mysore',
    locationTe: 'ఫెయిత్ క్యాంప్ గ్రౌండ్స్, మైసూర్',
    category: 'youth',
    isPublic: true,
    registrationRequired: true,
    maxParticipants: 50,
    currentParticipants: 32,
    cost: 2500,
    organizer: 'Youth Ministry Team',
    organizerTe: 'యువజన పరిచర్య బృందం',
    tags: ['youth', 'retreat', 'camp', 'fellowship'],
    imageUrl: '/images/events/youth-retreat.jpg',
    registrationDeadline: '2025-01-10T23:59:59',
    createdAt: '2024-01-01T00:00:00',
    updatedAt: '2024-01-01T00:00:00'
  },
  {
    id: 'womens-conference-2024',
    title: 'Women\'s Annual Conference',
    titleTe: 'మహిళల వార్షిక సమావేశం',
    description: 'Annual women\'s conference with inspiring speakers, workshops, and fellowship time. Theme: "Daughters of the King".',
    descriptionTe: 'ప్రేరణాత్మక వక్తలు, వర్క్‌షాప్‌లు మరియు సహవాస సమయంతో వార్షిక మహిళల సమావేశం. థీమ్: "రాజు కుమార్తెలు".',
    date: '2025-02-08',
    time: '09:00',
    endDate: '2025-02-08',
    endTime: '17:00',
    location: 'Church Fellowship Hall',
    locationTe: 'చర్చ్ సహవాస మందిరం',
    category: 'community',
    isPublic: true,
    registrationRequired: true,
    maxParticipants: 200,
    currentParticipants: 89,
    cost: 500,
    organizer: 'Women\'s Ministry',
    organizerTe: 'మహిళల పరిచర్య',
    tags: ['women', 'conference', 'workshop', 'fellowship'],
    imageUrl: '/images/events/womens-conference.jpg',
    registrationDeadline: '2025-02-05T23:59:59',
    createdAt: '2024-01-01T00:00:00',
    updatedAt: '2024-01-01T00:00:00'
  },
  {
    id: 'easter-2024',
    title: 'Easter Celebration 2024',
    titleTe: 'ఈస్టర్ వేడుకలు 2024',
    description: 'Celebrate the resurrection of Jesus Christ with special worship service, communion, and fellowship meal.',
    descriptionTe: 'ప్రత్యేక ఆరాధన సేవ, కమ్యూనియన్ మరియు సహవాస భోజనంతో యేసుక్రీస్తు పునరుత్థానాన్ని జరుపుకోండి.',
    date: '2024-03-31',
    time: '10:00',
    endDate: '2024-03-31',
    endTime: '14:00',
    location: 'Main Sanctuary & Fellowship Hall',
    locationTe: 'ప్రధాన మందిరం & సహవాస మందిరం',
    category: 'community',
    isPublic: true,
    registrationRequired: false,
    maxParticipants: 600,
    currentParticipants: 450,
    cost: 0,
    organizer: 'Church Leadership',
    organizerTe: 'చర్చ్ నాయకత్వం',
    tags: ['easter', 'resurrection', 'worship', 'communion'],
    imageUrl: '/images/events/easter-2024.jpg',
    registrationDeadline: '2024-03-30T23:59:59',
    createdAt: '2024-01-01T00:00:00',
    updatedAt: '2024-01-01T00:00:00'
  }
]

export const useEventStore = create<EventState>((set, get) => ({
  events: mockEvents,
  featuredEvents: mockEvents.filter(event => {
    // Check if event is upcoming and has registration required
    const now = new Date()
    const eventDate = new Date(event.date)
    return eventDate > now && event.registrationRequired
  }),
  upcomingEvents: mockEvents.filter(event => {
    const now = new Date()
    const eventDate = new Date(event.date)
    return eventDate > now
  }),
  filters: {},
  selectedEvent: null,
  isLoading: false,
  error: null,

  setEvents: (events: Event[]) => {
    set({
      events,
      featuredEvents: events.filter(event => {
        const now = new Date()
        const eventDate = new Date(event.date)
        return eventDate > now && event.registrationRequired
      }),
      upcomingEvents: events.filter(event => {
        const now = new Date()
        const eventDate = new Date(event.date)
        return eventDate > now
      })
    })
  },

  setFilters: (filters: EventFilters) => {
    set({ filters })
  },

  setSelectedEvent: (event: Event | null) => {
    set({ selectedEvent: event })
  },

  fetchEvents: async () => {
    set({ isLoading: true, error: null })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      // In a real app, this would be an API call
      const events = mockEvents

      set({
        events,
        featuredEvents: events.filter(event => {
          const now = new Date()
          const eventDate = new Date(event.date)
          return eventDate > now && event.registrationRequired
        }),
        upcomingEvents: events.filter(event => {
          const now = new Date()
          const eventDate = new Date(event.date)
          return eventDate > now
        }),
        isLoading: false
      })

    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch events',
        isLoading: false
      })
    }
  },

  fetchEventById: async (id: string): Promise<Event | null> => {
    set({ isLoading: true, error: null })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))

      const event = mockEvents.find(e => e.id === id) || null

      if (event) {
        set({ selectedEvent: event })
      }

      set({ isLoading: false })
      return event

    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Failed to fetch event',
        isLoading: false
      })
      return null
    }
  },

  registerForEvent: async (eventId: string, participantData: any): Promise<boolean> => {
    set({ isLoading: true, error: null })

    try {
      // Simulate API call for registration
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Find the event and update attendee count
      const { events } = get()
      const eventIndex = events.findIndex(e => e.id === eventId)

      if (eventIndex === -1) {
        throw new Error('Event not found')
      }

      const event = events[eventIndex]

      if (!event) {
        throw new Error('Event not found')
      }

      if (!event.registrationRequired) {
        throw new Error('Registration is not required for this event')
      }

      if (event.maxParticipants && event.currentParticipants >= event.maxParticipants) {
        throw new Error('Event is full')
      }

      // Update the event with new attendee count
      const updatedEvents = [...events]
      updatedEvents[eventIndex] = {
        ...event,
        currentParticipants: event.currentParticipants + 1
      }

      set({
        events: updatedEvents,
        isLoading: false
      })

      // Also update other derived states
      const featuredEvents = updatedEvents.filter(e => {
        const now = new Date()
        const eventDate = new Date(e.date)
        return eventDate > now && e.registrationRequired
      })
      const upcomingEvents = updatedEvents.filter(e => {
        const now = new Date()
        const eventDate = new Date(e.date)
        return eventDate > now
      })

      set({ featuredEvents, upcomingEvents })

      return true

    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Registration failed',
        isLoading: false
      })
      return false
    }
  },

  getFilteredEvents: (): Event[] => {
    const { events, filters } = get()

    return events.filter(event => {
      // Category filter
      if (filters.category && event.category !== filters.category) {
        return false
      }

      // Upcoming filter
      if (filters.upcoming !== undefined) {
        const now = new Date()
        const eventDate = new Date(event.date)
        const isUpcoming = eventDate > now
        if (isUpcoming !== filters.upcoming) {
          return false
        }
      }

      // Featured filter (events that are upcoming and require registration)
      if (filters.featured !== undefined) {
        const now = new Date()
        const eventDate = new Date(event.date)
        const isFeatured = eventDate > now && event.registrationRequired
        if (isFeatured !== filters.featured) {
          return false
        }
      }

      // Date range filter
      if (filters.dateRange) {
        const eventDate = new Date(event.date)
        if (eventDate < filters.dateRange.start || eventDate > filters.dateRange.end) {
          return false
        }
      }

      // Registration required filter
      if (filters.registrationOpen !== undefined && event.registrationRequired !== filters.registrationOpen) {
        return false
      }

      return true
    })
  },

  clearError: () => {
    set({ error: null })
  }
}))

// Utility functions for working with events
export const isEventFull = (event: Event): boolean => {
  return event.maxParticipants ? event.currentParticipants >= event.maxParticipants : false
}

export const isRegistrationClosed = (event: Event): boolean => {
  if (!event.registrationRequired) return true
  if (!event.registrationDeadline) return false

  const deadline = new Date(event.registrationDeadline)
  return new Date() > deadline
}

export const getEventStatus = (event: Event): 'upcoming' | 'ongoing' | 'past' => {
  const now = new Date()
  const eventStart = new Date(event.date)
  const eventEnd = event.endDate ? new Date(event.endDate) : eventStart

  if (now < eventStart) return 'upcoming'
  if (now > eventEnd) return 'past'
  return 'ongoing'
}

export const formatEventDate = (date: string, locale: string = 'en-US'): string => {
  const eventDate = new Date(date)
  return eventDate.toLocaleDateString(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const formatEventTime = (date: string, locale: string = 'en-US'): string => {
  const eventDate = new Date(date)
  return eventDate.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit'
  })
} 