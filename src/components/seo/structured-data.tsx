import Script from 'next/script'
import {
  churchSettings,
  upcomingEvents,
  upcomingServices,
  pastors,
} from '@/data/church-data'

interface StructuredDataProps {
  pageType?:
    | 'home'
    | 'about'
    | 'services'
    | 'events'
    | 'contact'
    | 'news'
    | 'article'
  eventData?: {
    name: string
    description: string
    startDate: string
    endDate?: string
    location: string
    organizer: string
    price?: number
    currency?: string
  }
  articleData?: {
    title: string
    description: string
    author: string
    publishedDate: string
    modifiedDate?: string
    image?: string
  }
}

export default function StructuredData({
  pageType = 'home',
  eventData,
  articleData,
}: StructuredDataProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org'

  // Base organization schema for church
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Church',
    '@id': `${baseUrl}#organization`,
    name: churchSettings.churchName.en,
    alternateName: churchSettings.churchName.te,
    description:
      'A vibrant community of Telugu-speaking believers in Whitefield, Bangalore',
    url: baseUrl,
    logo: `${baseUrl}/PGFLOGO.png`,
    image: [
      `${baseUrl}/PGFLOGO.png`,
      `${baseUrl}/images/hero/church-worship.jpg`,
      `${baseUrl}/images/gallery/Easter24/Easter24_1.webp`,
    ],
    email: churchSettings.email,
    telephone: churchSettings.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: churchSettings.address.en,
      addressLocality: 'Whitefield',
      addressRegion: 'Karnataka',
      postalCode: '560066',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: churchSettings.coordinates!.latitude,
      longitude: churchSettings.coordinates!.longitude,
    },
    sameAs: [
      churchSettings.socialMedia!.facebook,
      churchSettings.socialMedia!.youtube,
      churchSettings.socialMedia!.instagram,
    ].filter(Boolean),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Church Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sunday Worship Service',
            description: 'Weekly worship service in Telugu and English',
            serviceType: 'Religious Service',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Prayer Meeting',
            description: 'Midweek prayer and Bible study',
            serviceType: 'Prayer Service',
          },
        },
      ],
    },
    // Opening hours for services
    openingHours: [
      'Su 09:00-12:30', // Sunday services 9:00 AM - 12:30 PM (two services)
      'We 06:00-07:00', // Wednesday prayer 6:00 AM - 7:00 AM (online)
      'Fr 10:00-12:00', // Friday women's ministry 10:00 AM - 12:00 PM
      'Fr 21:00-22:00', // Friday youth fellowship 9:00 PM - 10:00 PM
      'Sa 20:00-21:00', // Saturday prayer 8:00 PM - 9:00 PM (online)
    ],
    // Church leadership
    member: pastors.map(pastor => ({
      '@type': 'Person',
      name: pastor.name,
      jobTitle: pastor.title,
      description: pastor.bio, // bio is a string, not an object
      image: pastor.imageUrl, // imageUrl, not image
      email: pastor.email,
    })),
    // Congregation size and founding
    foundingDate: '2015-01-01',
    memberOf: {
      '@type': 'Organization',
      name: 'Pentecostal Church Network',
    },
    // Accessibility
    accessibilityFeature: [
      'wheelchairAccessible',
      'assistiveListeningSystem',
      'signLanguageInterpretation',
    ],
    // Languages used
    knowsLanguage: ['Telugu', 'English', 'Hindi'],
  }

  // Local business schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}#localbusiness`,
    name: churchSettings.churchName.en,
    description:
      'Peniel Gospel Fellowship Telugu Church serving the Telugu-speaking community in Whitefield, Bangalore',
    url: baseUrl,
    image: `${baseUrl}/PGFLOGO.png`,
    telephone: churchSettings.phone,
    email: churchSettings.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: churchSettings.address.en,
      addressLocality: 'Whitefield',
      addressRegion: 'Karnataka',
      postalCode: '560066',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: churchSettings.coordinates!.latitude,
      longitude: churchSettings.coordinates!.longitude,
    },
    openingHours: ['Su 10:00-12:30', 'We 19:30-21:00', 'Fr 19:30-21:00'],
    priceRange: 'Free',
    paymentAccepted: 'Cash, Online Transfer',
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(churchSettings.address.en)}`,
  }

  // Website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}#website`,
    name: churchSettings.churchName.en,
    description: `Official website of ${churchSettings.churchName.en} in Whitefield, Bangalore`,
    url: baseUrl,
    publisher: {
      '@id': `${baseUrl}#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['en', 'te'],
  }

  // Events schema
  const eventsSchema = upcomingEvents.slice(0, 3).map(event => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${baseUrl}/events/${event.id}`,
    name: event.title,
    description: event.description,
    startDate: new Date(event.date).toISOString(),
    endDate: new Date(
      new Date(event.date).getTime() + 2 * 60 * 60 * 1000
    ).toISOString(), // 2 hours later
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        streetAddress: churchSettings.address.en,
        addressLocality: 'Whitefield',
        addressRegion: 'Karnataka',
        postalCode: '560066',
        addressCountry: 'IN',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: churchSettings.churchName.en,
      url: baseUrl,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${baseUrl}/events/${event.id}`,
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    image: event.imageUrl || `${baseUrl}/images/events/default-event.jpg`, // imageUrl, not image
  }))

  // Services schema
  const servicesSchema = upcomingServices.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${baseUrl}/services/${service.id}`,
    name: service.title,
    description: service.description,
    startDate: new Date(service.date).toISOString(),
    endDate: new Date(
      new Date(service.date).getTime() + 2 * 60 * 60 * 1000
    ).toISOString(),
    location: {
      '@type': 'Place',
      name: service.location,
      address: {
        '@type': 'PostalAddress',
        streetAddress: churchSettings.address.en,
        addressLocality: 'Whitefield',
        addressRegion: 'Karnataka',
        postalCode: '560066',
        addressCountry: 'IN',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: churchSettings.churchName.en,
      url: baseUrl,
    },
    isAccessibleForFree: true,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  }))

  // Page-specific schemas
  let pageSpecificSchema = null

  if (pageType === 'article' && articleData) {
    pageSpecificSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: articleData.title,
      description: articleData.description,
      author: {
        '@type': 'Person',
        name: articleData.author,
      },
      publisher: {
        '@id': `${baseUrl}#organization`,
      },
      datePublished: articleData.publishedDate,
      dateModified: articleData.modifiedDate || articleData.publishedDate,
      image: articleData.image || `${baseUrl}/images/default-article.jpg`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': typeof window !== 'undefined' ? window.location.href : baseUrl,
      },
    }
  }

  if (pageType === 'events' && eventData) {
    pageSpecificSchema = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: eventData.name,
      description: eventData.description,
      startDate: eventData.startDate,
      endDate: eventData.endDate,
      location: {
        '@type': 'Place',
        name: eventData.location,
        address: {
          '@type': 'PostalAddress',
          streetAddress: churchSettings.address.en,
          addressLocality: 'Whitefield',
          addressRegion: 'Karnataka',
          postalCode: '560066',
          addressCountry: 'IN',
        },
      },
      organizer: {
        '@type': 'Organization',
        name: eventData.organizer,
        url: baseUrl,
      },
      offers: eventData.price
        ? {
            '@type': 'Offer',
            price: eventData.price.toString(),
            priceCurrency: eventData.currency || 'INR',
            availability: 'https://schema.org/InStock',
          }
        : {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
          },
    }
  }

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...(pageType !== 'home'
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: pageType.charAt(0).toUpperCase() + pageType.slice(1),
              item: `${baseUrl}/${pageType}`,
            },
          ]
        : []),
    ],
  }

  // Combine all schemas
  const allSchemas = [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    breadcrumbSchema,
    ...eventsSchema,
    ...servicesSchema,
    ...(pageSpecificSchema ? [pageSpecificSchema] : []),
  ]

  return (
    <>
      {allSchemas.map((schema, index) => (
        <Script
          key={`schema-${index}`}
          id={`structured-data-${index}`}
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  )
}
