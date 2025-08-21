import { type NextRequest } from 'next/server'

interface SitemapPage {
  url: string
  lastmod: string
  changefreq: string
  priority: string
  alternates?: Array<{ href: string; hreflang: string }>
}

export async function GET(request: NextRequest) {
  const host = request.headers.get('host')
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`

  // Static pages with priorities and change frequencies
  const staticPages = [
    {
      url: '/',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: '1.0',
      alternates: [
        { href: `${baseUrl}/`, hreflang: 'en' },
        { href: `${baseUrl}/te/`, hreflang: 'te' },
      ],
    },
    {
      url: '/ministries',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.9',
      alternates: [
        { href: `${baseUrl}/ministries`, hreflang: 'en' },
        { href: `${baseUrl}/te/ministries`, hreflang: 'te' },
      ],
    },
    {
      url: '/ministries/sunday-service',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
      alternates: [
        { href: `${baseUrl}/ministries/sunday-service`, hreflang: 'en' },
        { href: `${baseUrl}/te/ministries/sunday-service`, hreflang: 'te' },
      ],
    },
    {
      url: '/ministries/online-prayer',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
      alternates: [
        { href: `${baseUrl}/ministries/online-prayer`, hreflang: 'en' },
        { href: `${baseUrl}/te/ministries/online-prayer`, hreflang: 'te' },
      ],
    },
    {
      url: '/ministries/youth-ministry',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
      alternates: [
        { href: `${baseUrl}/ministries/youth-ministry`, hreflang: 'en' },
        { href: `${baseUrl}/te/ministries/youth-ministry`, hreflang: 'te' },
      ],
    },
    {
      url: '/ministries/womens-ministry',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
      alternates: [
        { href: `${baseUrl}/ministries/womens-ministry`, hreflang: 'en' },
        { href: `${baseUrl}/te/ministries/womens-ministry`, hreflang: 'te' },
      ],
    },
    {
      url: '/ministries/sunday-school',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
      alternates: [
        { href: `${baseUrl}/ministries/sunday-school`, hreflang: 'en' },
        { href: `${baseUrl}/te/ministries/sunday-school`, hreflang: 'te' },
      ],
    },
    {
      url: '/sermons',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
      alternates: [
        { href: `${baseUrl}/sermons`, hreflang: 'en' },
        { href: `${baseUrl}/te/sermons`, hreflang: 'te' },
      ],
    },
    {
      url: '/gallery',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '0.7',
      alternates: [
        { href: `${baseUrl}/gallery`, hreflang: 'en' },
        { href: `${baseUrl}/te/gallery`, hreflang: 'te' },
      ],
    },
  ]

  // In a real application, you would fetch dynamic content from your database
  // For now, we'll include some sample dynamic pages
  const dynamicPages: SitemapPage[] = [
    // Sample event pages
    {
      url: '/events/youth-retreat-2024',
      lastmod: new Date('2024-01-10').toISOString(),
      changefreq: 'weekly',
      priority: '0.6',
    },
    {
      url: '/events/community-outreach',
      lastmod: new Date('2024-01-15').toISOString(),
      changefreq: 'weekly',
      priority: '0.6',
    },
    // Sample news articles
    {
      url: '/news/new-building-project',
      lastmod: new Date('2024-01-10').toISOString(),
      changefreq: 'monthly',
      priority: '0.6',
    },
    {
      url: '/news/christmas-celebrations',
      lastmod: new Date('2023-12-26').toISOString(),
      changefreq: 'monthly',
      priority: '0.5',
    },
    // Sample ministry pages
    {
      url: '/ministries/youth',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.6',
    },
    {
      url: '/ministries/womens-ministry',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.6',
    },
  ]

  const allPages = [...staticPages, ...dynamicPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${allPages
      .map(
        (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${page.alternates
            ? page.alternates
              .map(
                (alt: { href: string; hreflang: string }) =>
                  `
    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`
              )
              .join('')
            : ''
          }
  </url>`
      )
      .join('\n')}
</urlset>`

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
} 