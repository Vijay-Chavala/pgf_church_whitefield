import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics, {
  trackWebVitals,
} from '@/components/analytics/google-analytics'
import PerformanceMonitor from '@/components/analytics/performance-monitor'
import AnalyticsPageView from '@/components/analytics/analytics-page-view'
import StructuredData from '@/components/seo/structured-data'
import { ThemeProvider } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

// Enhanced metadata with comprehensive SEO
export const metadata: Metadata = {
  title: {
    template: '%s | Peniel Gospel Fellowship Telugu Church',
    default:
      'PGF Telugu Church - Peniel Gospel Fellowship in Whitefield, Bangalore',
  },
  description:
    'Join Peniel Gospel Fellowship Telugu Church in Whitefield, Bangalore for worship services, community events, and spiritual growth. Sunday services 10:00 AM - 12:30 PM. All are welcome!',
  keywords: [
    'Peniel Gospel Fellowship',
    'PGF Telugu Church',
    'Church in Bangalore',
    'Church in Whitefield',
    'Telugu Church',
    'Christian Community',
    'Worship Services',
    'Bible Study',
    'Prayer Meeting',
    'Christian Events',
    'Telugu Christians',
    'Bangalore Church',
    'Whitefield Church',
    'Pentecostal Church',
    'Fellowship',
    'Community Service',
    'Youth Ministry',
    'పెనీయేల్ గాస్పెల్ ఫెలోషిప్',
    'బెంగళూరు చర్చి',
    'వైట్‌ఫీల్డ్ చర్చి',
    'తెలుగు చర్చి',
    'ప్రార్థన సభ',
    'క్రైస్తవ సేవలు',
    'ఆరాధనా సేవ',
  ],
  authors: [{ name: 'Peniel Gospel Fellowship Telugu Church' }],
  creator: 'Peniel Gospel Fellowship Telugu Church',
  publisher: 'Peniel Gospel Fellowship Telugu Church',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org'
  ),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'te-IN': '/te-IN',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org',
    title: 'Peniel Gospel Fellowship Telugu Church - Growing Together in Faith',
    description:
      'Join our vibrant community in Whitefield, Bangalore for worship, fellowship, and spiritual growth. Sunday services 9:00 AM - 12:30 PM (two services). Services in Telugu and English.',
    siteName: 'PGF Telugu Church',
    images: [
      {
        url: '/PGFLOGO.png',
        width: 512,
        height: 512,
        alt: 'Peniel Gospel Fellowship Telugu Church Logo',
      },
      {
        url: '/images/hero/church-worship.jpg',
        width: 1200,
        height: 630,
        alt: 'Sunday Worship Service at PGF Telugu Church',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PGF Telugu Church - Community of Faith in Bangalore',
    description:
      'Join our vibrant community in Whitefield for worship and fellowship. Services in Telugu and English.',
    site: '@pgfteluguchurch',
    creator: '@pgfteluguchurch',
    images: ['/PGFLOGO.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION,
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
  category: 'religion',
  classification: 'Religious Organization',
  other: {
    'og:phone_number': '+91-80-28452100',
    'og:email': 'info@pgfteluguchurch.org',
    'og:latitude': '12.9698',
    'og:longitude': '77.7500',
    'og:street-address': 'Anugraha Hall, St. Joseph Convent School Campus',
    'og:locality': 'Whitefield',
    'og:region': 'Karnataka',
    'og:postal-code': '560066',
    'og:country-name': 'India',
    'business:contact_data:street_address':
      'Anugraha Hall, St. Joseph Convent School Campus',
    'business:contact_data:locality': 'Whitefield, Bangalore',
    'business:contact_data:region': 'Karnataka',
    'business:contact_data:postal_code': '560066',
    'business:contact_data:country_name': 'India',
    'place:location:latitude': '12.9698',
    'place:location:longitude': '77.7500',
    'contact:phone_number': '+91-80-28452100',
    'contact:email': 'info@pgfteluguchurch.org',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Basic SEO Meta Tags */}
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#8B2635' />
        <meta name='msapplication-TileColor' content='#8B2635' />
        <meta name='msapplication-config' content='/browserconfig.xml' />

        {/* Preconnect to external domains for performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://www.google-analytics.com' />
        <link rel='preconnect' href='https://www.googletagmanager.com' />

        {/* DNS Prefetch for better performance */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//www.google-analytics.com' />
        <link rel='dns-prefetch' href='//www.youtube.com' />
        <link rel='dns-prefetch' href='//www.facebook.com' />

        {/* Favicon and App Icons */}
        <link rel='icon' href='/favicon.ico' sizes='32x32' />
        <link rel='icon' href='/PGFLOGO.png' type='image/png' sizes='512x512' />
        <link rel='apple-touch-icon' href='/PGFLOGO.png' sizes='512x512' />
        <link rel='manifest' href='/manifest.json' />

        {/* Additional SEO Meta Tags */}
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

        {/* Rich Snippets and Schema.org */}
        <StructuredData pageType='home' />

        {/* Performance and Resource Hints */}
        <link
          rel='preload'
          href='/fonts/inter-var.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />

        {/* Alternative Feeds */}
        <link
          rel='alternate'
          type='application/rss+xml'
          title='PGF Telugu Church RSS Feed'
          href='/rss.xml'
        />
        <link
          rel='alternate'
          type='application/atom+xml'
          title='PGF Telugu Church Atom Feed'
          href='/atom.xml'
        />

        {/* Canonical URL */}
        <link
          rel='canonical'
          href={
            process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org'
          }
        />

        {/* Language Alternatives */}
        <link
          rel='alternate'
          hrefLang='en'
          href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org'}/en`}
        />
        <link
          rel='alternate'
          hrefLang='te'
          href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org'}/te`}
        />
        <link
          rel='alternate'
          hrefLang='x-default'
          href={
            process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org'
          }
        />

        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />

        {/* Theme Initialization Script - Prevents Flash of Unstyled Content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme-store')
                  if (stored) {
                    const parsed = JSON.parse(stored)
                    const theme = parsed.state?.theme || 'system'
                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                    const actualTheme = theme === 'system' ? systemTheme : theme
                    document.documentElement.classList.toggle('dark', actualTheme === 'dark')
                  } else {
                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                    document.documentElement.classList.toggle('dark', systemTheme === 'dark')
                  }
                } catch (error) {
                  // Fallback to system theme
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                  document.documentElement.classList.toggle('dark', systemTheme === 'dark')
                }
              })()
            `,
          }}
        />

        {/* Critical CSS Inline (for above-the-fold content) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for initial paint */
              body { 
                margin: 0; 
                font-family: system-ui, -apple-system, sans-serif;
                background-color: #f9fafb;
                color: #364456;
              }
              .loading { 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                height: 100vh; 
                font-size: 1.2rem;
              }
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Skip to main content for accessibility */}
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50'
        >
          Skip to main content
        </a>

        {/* Google Analytics Integration */}
        <GoogleAnalytics>
          {/* Performance Monitoring */}
          <PerformanceMonitor />

          {/* Analytics Page View Tracking */}
          <AnalyticsPageView />

          {/* Theme Provider */}
          <ThemeProvider>
            {/* Main Content */}
            <main id='main-content' role='main'>
              {children}
            </main>
          </ThemeProvider>

          {/* Additional Analytics Scripts */}
          {process.env.NEXT_PUBLIC_CLARITY_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
                `,
              }}
            />
          )}

          {process.env.NEXT_PUBLIC_HOTJAR_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                `,
              }}
            />
          )}

          {/* Initialize Web Vitals Tracking */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Initialize web vitals tracking after page load
                window.addEventListener('load', function() {
                  if (typeof trackWebVitals === 'function') {
                    trackWebVitals();
                  }
                });
              `,
            }}
          />
        </GoogleAnalytics>

        {/* Structured Data for Organization */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': `${process.env.SITE_URL || 'https://teluguchurch.org'}#organization`,
              name: 'Telugu Christian Fellowship',
              url: process.env.SITE_URL || 'https://teluguchurch.org',
              logo: `${process.env.SITE_URL || 'https://teluguchurch.org'}/images/logo.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-40-12345678',
                contactType: 'customer service',
                availableLanguage: ['English', 'Telugu'],
              },
              sameAs: [
                'https://www.facebook.com/teluguchurch',
                'https://www.youtube.com/teluguchurch',
                'https://www.instagram.com/teluguchurch',
              ],
            }),
          }}
        />

        {/* Preload important resources */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Preload critical resources
              if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      const img = entry.target;
                      img.src = img.dataset.src;
                      img.classList.remove('lazy');
                      observer.unobserve(img);
                    }
                  });
                });
                
                document.querySelectorAll('img[data-src]').forEach(img => {
                  imageObserver.observe(img);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
