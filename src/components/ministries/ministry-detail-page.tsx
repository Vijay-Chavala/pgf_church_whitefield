'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Phone,
  Mail,
  MessageSquare,
  Video,
  Copy,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useLanguageStore } from '@/lib/stores/language-store'
import { MainLayout } from '@/components/layout'
import { useState } from 'react'

interface MinistryService {
  name: { en: string; te: string }
  time: { en: string; te: string }
  location: { en: string; te: string }
}

interface MinistryData {
  id: string
  title: { en: string; te: string }
  description: { en: string; te: string }
  services: MinistryService[]
  activities: { en: string[]; te: string[] }
  leaders: { en: string; te: string }
  contact: {
    phone: string
    whatsapp: string
    email: string
  }
  zoomDetails?: {
    id: string
    password: string
  }
}

interface MinistryDetailPageProps {
  ministry: MinistryData
}

export function MinistryDetailPage({ ministry }: MinistryDetailPageProps) {
  const { currentLanguage } = useLanguageStore()
  const [copiedZoomId, setCopiedZoomId] = useState(false)

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  const getArrayText = (arrayObj: { en: string[]; te: string[] }) => {
    return arrayObj[currentLanguage] || arrayObj.en
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedZoomId(true)
    setTimeout(() => setCopiedZoomId(false), 2000)
  }

  const seoConfig = {
    title: getText({
      en: `${ministry.title.en} - PGF Telugu Church`,
      te: `${ministry.title.te} - పిజిఎఫ్ తెలుగు చర్చి`,
    }),
    description: getText(ministry.description),
    keywords: [
      'Telugu Church',
      'Bangalore Church',
      'Ministry',
      'Christian Community',
      getText(ministry.title),
    ],
  }

  return (
    <MainLayout seo={seoConfig}>
      <div className='min-h-screen bg-gradient-to-br from-background to-muted/30'>
        {/* Header Section */}
        <section className='py-20 px-4'>
          <div className='container mx-auto max-w-6xl'>
            {/* Back Navigation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='mb-8'
            >
              <Button variant='ghost' asChild className='gap-2'>
                <Link href='/ministries'>
                  <ArrowLeft className='w-4 h-4' />
                  {currentLanguage === 'te'
                    ? 'అన్ని సేవలకు తిరిగి'
                    : 'Back to All Ministries'}
                </Link>
              </Button>
            </motion.div>

            {/* Ministry Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>
                {getText(ministry.title)}
              </h1>
              <p className='text-xl text-muted-foreground max-w-4xl mx-auto'>
                {getText(ministry.description)}
              </p>
            </motion.div>

            {/* Ministry Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'
            >
              {ministry.services.map((service, index) => (
                <Card
                  key={index}
                  className='overflow-hidden hover:shadow-lg transition-shadow'
                >
                  <CardHeader className='bg-gradient-to-r from-primary/5 to-primary/10'>
                    <CardTitle className='text-xl font-bold flex items-center gap-2'>
                      <Calendar className='w-5 h-5 text-primary' />
                      {getText(service.name)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='pt-6 space-y-4'>
                    <div className='flex items-start gap-3'>
                      <Clock className='w-5 h-5 text-muted-foreground mt-1 flex-shrink-0' />
                      <div>
                        <p className='font-semibold text-foreground'>
                          {currentLanguage === 'te' ? 'సమయం:' : 'Time:'}
                        </p>
                        <p className='text-muted-foreground'>
                          {getText(service.time)}
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start gap-3'>
                      <MapPin className='w-5 h-5 text-muted-foreground mt-1 flex-shrink-0' />
                      <div>
                        <p className='font-semibold text-foreground'>
                          {currentLanguage === 'te' ? 'స్థలం:' : 'Location:'}
                        </p>
                        <p className='text-muted-foreground whitespace-pre-line'>
                          {getText(service.location)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Zoom Details (if available) */}
            {ministry.zoomDetails && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='mb-16'
              >
                <Card className='bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'>
                  <CardHeader>
                    <CardTitle className='text-xl font-bold flex items-center gap-2'>
                      <Video className='w-5 h-5 text-blue-600' />
                      {currentLanguage === 'te'
                        ? 'జూమ్ వివరాలు'
                        : 'Zoom Details'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div className='flex items-center gap-2'>
                        <span className='font-semibold'>
                          {currentLanguage === 'te' ? 'జూమ్ ID:' : 'Zoom ID:'}
                        </span>
                        <Badge variant='secondary' className='font-mono'>
                          {ministry.zoomDetails.id}
                        </Badge>
                        <Button
                          variant='ghost'
                          size='sm'
                          onClick={() =>
                            copyToClipboard(ministry.zoomDetails!.id)
                          }
                          className='p-1 h-auto'
                        >
                          <Copy className='w-3 h-3' />
                        </Button>
                      </div>
                      <div className='flex items-center gap-2'>
                        <span className='font-semibold'>
                          {currentLanguage === 'te'
                            ? 'పాస్‌వర్డ్:'
                            : 'Password:'}
                        </span>
                        <Badge variant='secondary' className='font-mono'>
                          {ministry.zoomDetails.password}
                        </Badge>
                        <Button
                          variant='ghost'
                          size='sm'
                          onClick={() =>
                            copyToClipboard(ministry.zoomDetails!.password)
                          }
                          className='p-1 h-auto'
                        >
                          <Copy className='w-3 h-3' />
                        </Button>
                      </div>
                    </div>
                    {copiedZoomId && (
                      <p className='text-sm text-green-600 font-medium'>
                        {currentLanguage === 'te'
                          ? 'కాపీ చేయబడింది!'
                          : 'Copied!'}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Activities Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='mb-16'
            >
              <Card>
                <CardHeader>
                  <CardTitle className='text-2xl font-bold'>
                    {currentLanguage === 'te'
                      ? 'ప్రధాన కార్యకలాపాలు'
                      : 'Main Activities'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {getArrayText(ministry.activities).map(
                      (activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          className='p-4 bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg hover:shadow-md transition-shadow'
                        >
                          <p className='font-medium text-center'>{activity}</p>
                        </motion.div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Leadership & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='grid grid-cols-1 md:grid-cols-2 gap-8'
            >
              {/* Leadership */}
              <Card>
                <CardHeader>
                  <CardTitle className='text-xl font-bold flex items-center gap-2'>
                    <Users className='w-5 h-5 text-primary' />
                    {currentLanguage === 'te' ? 'నాయకత్వం' : 'Leadership'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-lg font-semibold text-foreground'>
                    {getText(ministry.leaders)}
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className='text-xl font-bold'>
                    {currentLanguage === 'te'
                      ? 'సంప్రదింపు వివరాలు'
                      : 'Contact Information'}
                  </CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='space-y-3'>
                    <div className='flex items-center gap-3'>
                      <Phone className='w-5 h-5 text-muted-foreground' />
                      <div>
                        <p className='font-semibold'>
                          {currentLanguage === 'te' ? 'ఫోన్:' : 'Phone:'}
                        </p>
                        <p className='text-muted-foreground'>
                          {ministry.contact.phone}
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <MessageSquare className='w-5 h-5 text-muted-foreground' />
                      <div>
                        <p className='font-semibold'>
                          {currentLanguage === 'te' ? 'వాట్సాప్:' : 'WhatsApp:'}
                        </p>
                        <p className='text-muted-foreground'>
                          {ministry.contact.whatsapp}
                        </p>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <Mail className='w-5 h-5 text-muted-foreground' />
                      <div>
                        <p className='font-semibold'>
                          {currentLanguage === 'te' ? 'ఇమెయిల్:' : 'Email:'}
                        </p>
                        <p className='text-muted-foreground'>
                          {ministry.contact.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='pt-4 border-t'>
                    <Button asChild className='w-full'>
                      <Link
                        href={`tel:${ministry.contact.phone.split(' / ')[0]}`}
                      >
                        {currentLanguage === 'te'
                          ? 'ఇప్పుడే కాల్ చేయండి'
                          : 'Call Now'}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
