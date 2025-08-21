import { MinistriesPage } from '@/components/ministries/ministries-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ministries - PGF Telugu Church',
  description:
    'Discover our various ministries and programs designed to foster spiritual growth for every age and life stage at Peniel Gospel Fellowship Telugu Church.',
  keywords: [
    'Telugu Church Ministries',
    'Bangalore Church Programs',
    'Youth Ministry',
    'Women Ministry',
    'Sunday School',
    'Online Prayer Meeting',
    'Christian Community',
    'Peniel Gospel Fellowship',
  ],
}

export default function MinistriesPageRoute() {
  return <MinistriesPage />
}
