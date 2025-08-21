'use client'

import * as React from 'react'
import Head from 'next/head'
import { usePathname } from 'next/navigation'

import { useLanguageStore } from '@/lib/stores/language-store'
import { churchSettings } from '@/data/church-data'

// SEO Configuration Types
interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  canonicalUrl?: string
  noIndex?: boolean
  noFollow?: boolean
  structuredData?: Record<string, any>
  alternateLanguages?: Record<string, string>
}

// Main SEO Component
export function SEO({
  title,
  description,
  keywords = [],
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noIndex = false,
  noFollow = false,
  structuredData,
  alternateLanguages,
}: SEOProps) {
  const pathname = usePathname()
  const { currentLanguage } = useLanguageStore()

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org'
  const currentUrl = `${siteUrl}${pathname}`

  // Default SEO values
  const defaultTitle =
    currentLanguage === 'te'
      ? 'పెనీయేల్ గాస్పెల్ ఫెలోషిప్ తెలుగు చర్చి - బెంగళూరు'
      : 'Peniel Gospel Fellowship Telugu Church - Bangalore'

  const defaultDescription =
    currentLanguage === 'te'
      ? 'బెంగళూరు వైట్‌ఫీల్డ్‌లో పెనీయేల్ గాస్పెల్ ఫెలోషిప్ తెలుగు చర్చిలో చేరండి. ఆదివారం సేవలు, సమాజ కార్యక్రమాలు మరియు ఆధ్యాత్మిక వృద్ధి కోసం.'
      : 'Join Peniel Gospel Fellowship Telugu Church in Whitefield, Bangalore for worship services, community events, and spiritual growth. Sunday services 9:00 AM - 12:30 PM (two services).'

  const defaultKeywords = [
    'Peniel Gospel Fellowship',
    'PGF Telugu Church',
    'Telugu Church Bangalore',
    'Church in Whitefield',
    'Telugu Christians',
    'Christian Community',
    'Worship Services',
    'Bible Study',
    'Prayer Meeting',
    'పెనీయేల్ గాస్పెల్ ఫెలోషిప్',
    'తెలుగు చర్చి',
    'బెంగళూరు చర్చి',
    'వైట్‌ఫీల్డ్ చర్చి',
    'ఆరాధనా సేవ',
    'ప్రార్థన సభ',
  ]

  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const pageDescription = description || defaultDescription
  const pageKeywords = [...defaultKeywords, ...keywords]
  const pageCanonicalUrl = canonicalUrl || currentUrl
  const pageOgImage = ogImage || `${siteUrl}/images/og-church-main.jpg`

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
        <meta name='keywords' content={pageKeywords.join(', ')} />
        <meta name='author' content='Peniel Gospel Fellowship Telugu Church' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#8B2635' />

        {/* Robots Meta */}
        <meta
          name='robots'
          content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`}
        />

        {/* Canonical URL */}
        <link rel='canonical' href={pageCanonicalUrl} />

        {/* Language Alternatives */}
        <link
          rel='alternate'
          hrefLang='en'
          href={`${siteUrl}${pathname}?lang=en`}
        />
        <link
          rel='alternate'
          hrefLang='te'
          href={`${siteUrl}${pathname}?lang=te`}
        />
        <link
          rel='alternate'
          hrefLang='x-default'
          href={`${siteUrl}${pathname}`}
        />

        {alternateLanguages &&
          Object.entries(alternateLanguages).map(([lang, url]) => (
            <link key={lang} rel='alternate' hrefLang={lang} href={url} />
          ))}

        {/* Open Graph Meta Tags */}
        <meta property='og:type' content={ogType} />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:url' content={pageCanonicalUrl} />
        <meta property='og:site_name' content='PGF Telugu Church' />
        <meta property='og:image' content={pageOgImage} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content={pageTitle} />
        <meta
          property='og:locale'
          content={currentLanguage === 'te' ? 'te_IN' : 'en_US'}
        />

        {/* Twitter Card Meta Tags */}
        <meta name='twitter:card' content={twitterCard} />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={pageDescription} />
        <meta name='twitter:image' content={pageOgImage} />
        <meta name='twitter:site' content='@pgfteluguchurch' />
        <meta name='twitter:creator' content='@pgfteluguchurch' />

        {/* Additional Meta Tags */}
        <meta name='application-name' content='PGF Telugu Church' />
        <meta name='apple-mobile-web-app-title' content='PGF Telugu Church' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='mobile-web-app-capable' content='yes' />

        {/* Geo Location Meta Tags */}
        <meta name='geo.region' content='IN-KA' />
        <meta name='geo.placename' content='Whitefield, Bangalore' />
        <meta name='geo.position' content='12.9698;77.7500' />
        <meta name='ICBM' content='12.9698, 77.7500' />

        {/* Structured Data */}
        {structuredData && (
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )}
      </Head>
    </>
  )
}

// Organization Structured Data
export function OrganizationStructuredData() {
  const { currentLanguage } = useLanguageStore()
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Church',
    '@id': `${siteUrl}#organization`,
    name:
      currentLanguage === 'te'
        ? 'పెనీయేల్ గాస్పెల్ ఫెలోషిప్ తెలుగు చర్చి'
        : 'Peniel Gospel Fellowship Telugu Church',
    alternateName: 'PGF Telugu Church',
    description:
      currentLanguage === 'te'
        ? 'బెంగళూరు వైట్‌ఫీల్డ్‌లో తెలుగు క్రైస్తవ సమాజం'
        : 'Telugu Christian community in Whitefield, Bangalore',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/church-building.jpg`,
    email: 'info@pgfteluguchurch.org',
    telephone: '+91-98765-43210',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Whitefield',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560066',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9698,
      longitude: 77.75,
    },
    openingHours: ['Su 10:00-12:30', 'We 19:00-20:00', 'Fr 19:00-20:30'],
    sameAs: [
      'https://www.facebook.com/pgfteluguchurch',
      'https://www.youtube.com/@pgfteluguchurch',
      'https://www.instagram.com/pgfteluguchurch',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98765-43210',
      contactType: 'customer service',
      availableLanguage: ['English', 'Telugu'],
      email: 'info@pgfteluguchurch.org',
    },
    member: [
      {
        '@type': 'Person',
        name: 'Pastor Name',
        jobTitle: 'Senior Pastor',
        email: 'pastor@pgfteluguchurch.org',
      },
    ],
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Event Structured Data
export function EventStructuredData({
  event,
}: {
  event: {
    name: string
    description: string
    startDate: string
    endDate?: string
    location: string
    image?: string
    organizer?: string
  }
}) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Whitefield',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560066',
        addressCountry: 'IN',
      },
    },
    image: event.image || `${siteUrl}/images/events/default-event.jpg`,
    organizer: {
      '@type': 'Organization',
      name: event.organizer || 'Peniel Gospel Fellowship Telugu Church',
      url: siteUrl,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
    },
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Article Structured Data
export function ArticleStructuredData({
  article,
}: {
  article: {
    title: string
    description: string
    author: string
    datePublished: string
    dateModified?: string
    image?: string
    url: string
  }
}) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Peniel Gospel Fellowship Telugu Church',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image || `${siteUrl}/images/og-church-main.jpg`,
    url: article.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

// Hook for dynamic SEO
export function useSEO() {
  const pathname = usePathname()
  const { currentLanguage } = useLanguageStore()

  const generatePageSEO = React.useCallback(
    (config: Partial<SEOProps>) => {
      const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org'

      return {
        title: config.title,
        description: config.description,
        canonicalUrl: `${siteUrl}${pathname}`,
        ogImage: config.ogImage || `${siteUrl}/images/og-church-main.jpg`,
        alternateLanguages: {
          en: `${siteUrl}${pathname}?lang=en`,
          te: `${siteUrl}${pathname}?lang=te`,
        },
        ...config,
      }
    },
    [pathname]
  )

  const generateBreadcrumbStructuredData = React.useCallback(
    (breadcrumbs: Array<{ name: string; url: string }>) => {
      const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org'

      return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `${siteUrl}${crumb.url}`,
        })),
      }
    },
    []
  )

  return {
    generatePageSEO,
    generateBreadcrumbStructuredData,
    currentLanguage,
    pathname,
  }
}
