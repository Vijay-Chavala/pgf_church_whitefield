'use client'

import { MainLayout } from '@/components/layout'
import { useLanguageStore } from '@/lib/stores/language-store'
import {
  HeroBanner,
  WelcomeMessage,
  UpcomingEvents,
  SermonHighlights,
  GuestSpeakers,
  GalleryOverview,
  MinistriesOverview,
  CallToAction,
  SocialRadialMenu,
} from '@/components/home'

export function HomePage() {
  const { currentLanguage } = useLanguageStore()

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  const seoConfig = {
    title: getText({
      en: 'Home - Growing Together in Faith',
      te: 'హోమ్ - విశ్వాసంలో కలిసి పెరుగుతున్నాం',
    }),
    description: getText({
      en: 'Join Peniel Gospel Fellowship Telugu Church in Whitefield, Bangalore for worship services, community events, and spiritual growth. Sunday services 9:00 AM - 12:30 PM (two services).',
      te: 'బెంగళూరు వైట్‌ఫీల్డ్‌లో పెనీయేల్ గాస్పెల్ ఫెలోషిప్ తెలుగు చర్చిలో ఆరాధన సేవలు, సమాజ కార్యక్రమాలు మరియు ఆధ్యాత్మిక వృద్ధి కోసం చేరండి. ఆదివారం సేవలు ఉదయం 9:00 - మధ్యాహ్నం 12:30 (రెండు సేవలు).',
    }),
    keywords: [
      'Telugu Church',
      'Bangalore Church',
      'Whitefield Church',
      'Christian Community',
      'Worship Services',
      'Peniel Gospel Fellowship',
      'పెనీయేల్ గాస్పెల్ ఫెలోషిప్',
      'తెలుగు చర్చి',
      'బెంగళూరు చర్చి',
    ],
  }

  return (
    <MainLayout seo={seoConfig} showBreadcrumbs={false}>
      <div className='min-h-screen'>
        {/* Hero Banner Section */}
        <HeroBanner />

        {/* Welcome Message Section */}
        <WelcomeMessage />

        {/* Upcoming Events Section - Hidden as requested */}
        {/* <UpcomingEvents /> */}

        {/* Ministries Overview Section */}
        <MinistriesOverview />
        {/* Sermon Highlights Section */}
        <SermonHighlights />

        {/* Guest Speakers Section */}
        <GuestSpeakers />

        {/* Gallery Overview Section */}
        <GalleryOverview />

        {/* Call to Action Section */}
        <CallToAction />

        {/* Floating Social Media Radial Menu */}
        <SocialRadialMenu />
      </div>
    </MainLayout>
  )
}
