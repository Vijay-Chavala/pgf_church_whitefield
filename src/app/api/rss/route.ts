import { type NextRequest } from 'next/server'
import { latestNews, upcomingEvents, churchSettings } from '@/data/church-data'

export async function GET(request: NextRequest) {
  const host = request.headers.get('host')
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`

  // Combine news and events for RSS feed
  const feedItems = [
    ...latestNews.map((item) => ({
      ...item,
      type: 'news',
      link: `/news/${item.id}`,
      pubDate: new Date(item.publishedDate).toUTCString(),
    })),
    ...upcomingEvents.map((item) => ({
      ...item,
      type: 'event',
      link: `/events/${item.id}`,
      pubDate: new Date(item.date).toUTCString(),
    })),
  ]
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .slice(0, 20) // Limit to 20 most recent items

  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${churchSettings.churchName.en} - News &amp; Events</title>
    <description>Latest news, events, and announcements from ${churchSettings.churchName.en}</description>
    <link>${baseUrl}</link>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Next.js PGF Telugu Church Website</generator>
    <managingEditor>${churchSettings.email} (${churchSettings.churchName.en})</managingEditor>
    <webMaster>${churchSettings.email} (${churchSettings.churchName.en})</webMaster>
    <category>Religion/Christianity</category>
    <copyright>Copyright ${new Date().getFullYear()} ${churchSettings.churchName.en}. All rights reserved.</copyright>
    <image>
      <url>${baseUrl}/images/logo.png</url>
      <title>${churchSettings.churchName.en}</title>
      <link>${baseUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    
${feedItems
  .map(
    (item) => `    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${
        'excerpt' in item ? item.excerpt : item.description || ''
      }]]></description>
      <link>${baseUrl}${item.link}</link>
      <guid isPermaLink="true">${baseUrl}${item.link}</guid>
      <pubDate>${item.pubDate}</pubDate>
      <category><![CDATA[${item.type === 'news' ? item.category : 'event'}]]></category>
      ${
        'author' in item
          ? `<dc:creator><![CDATA[${item.author}]]></dc:creator>`
          : `<dc:creator><![CDATA[${item.organizer}]]></dc:creator>`
      }
      <content:encoded><![CDATA[
        ${
          'content' in item
            ? item.content
            : `<p><strong>Date:</strong> ${new Date(
                item.date
              ).toLocaleDateString()}</p>
               <p><strong>Time:</strong> ${item.time}</p>
               <p><strong>Location:</strong> ${item.location}</p>
               ${item.description ? `<p>${item.description}</p>` : ''}
               ${
                 'registrationRequired' in item && item.registrationRequired
                   ? '<p><em>Registration required for this event.</em></p>'
                   : ''
               }`
        }
      ]]></content:encoded>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`

  return new Response(rssContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=1800, stale-while-revalidate=3600', // 30 minutes cache
    },
  })
} 