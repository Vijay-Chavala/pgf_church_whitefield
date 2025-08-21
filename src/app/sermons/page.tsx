import { Metadata } from 'next'
import { SermonsPage } from '@/components/sermons/sermons-page'

export const metadata: Metadata = {
  title: 'Sermons | PGF Telugu Church',
  description:
    'Watch and listen to inspiring sermons from Peniel Gospel Fellowship Telugu Church. Bible-based messages in English and Telugu to strengthen your faith and spiritual growth.',
  keywords: [
    'church sermons',
    'Telugu sermons',
    'PGF sermons',
    'Bible messages',
    'Christian sermons',
    'spiritual growth',
    'Pastor Ravi Kumar sermons',
    'Peniel Gospel Fellowship messages',
    'ప్రబోధలు',
    'తెలుగు ప్రబోధలు',
    'బైబిల్ సందేశాలు',
  ],
  openGraph: {
    title: 'Sermons | PGF Telugu Church',
    description:
      'Watch inspiring sermons from Peniel Gospel Fellowship Telugu Church. Bible-based messages to strengthen your faith and encourage spiritual growth.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'te_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sermons | PGF Telugu Church',
    description:
      'Watch inspiring sermons from Peniel Gospel Fellowship Telugu Church. Bible-based messages for spiritual growth.',
  },
  alternates: {
    languages: {
      en: '/sermons',
      te: '/sermons',
    },
  },
}

export default function Sermons() {
  return <SermonsPage />
}
