import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const host = request.headers.get('host')
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`

  const robotsContent = `User-agent: *
${process.env.NODE_ENV === 'production' ? 'Allow: /' : 'Disallow: /'}

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /_next/
Disallow: /temp/

# Allow specific API endpoints for SEO
Allow: /api/sitemap
Allow: /api/robots
Allow: /api/rss

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Additional sitemaps for different content types
Sitemap: ${baseUrl}/sitemap-0.xml
Sitemap: ${baseUrl}/sitemap-events.xml
Sitemap: ${baseUrl}/sitemap-news.xml

# Block specific user agents if needed
User-agent: CCBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: AI2Bot
Disallow: /

# Allow Googlebot and Bingbot full access
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Church-specific crawlers and directories
User-agent: ChurchCrawler
Allow: /

# Performance: Cache headers
# This robots.txt should be cached for 24 hours`

  return new Response(robotsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  })
} 