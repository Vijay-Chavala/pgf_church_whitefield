'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, User, ArrowRight, BookOpen, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useLanguageStore } from '@/lib/stores/language-store'
import { getLatestSermonsForHome } from '@/data/sermons-data'

export function SermonHighlights() {
  const { currentLanguage } = useLanguageStore()
  const recentSermons = getLatestSermonsForHome()

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    if (currentLanguage === 'te') {
      return date.toLocaleDateString('te-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const formatDuration = (minutes?: number) => {
    if (!minutes) return ''
    if (minutes < 60) {
      return `${minutes} ${currentLanguage === 'te' ? 'నిమిషాలు' : 'min'}`
    }
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  return (
    <section className='relative py-20 px-4 overflow-hidden'>
      {/* Parallax Background Image */}
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 80, 0.7)), url(/images/sermons/sermons-bg.jpg) center center / cover no-repeat fixed',
        }}
      />

      {/* Overlay for better text readability */}
      <div className='absolute' />

      {/* Content Container */}
      <div className='relative z-10 container mx-auto max-w-7xl'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            {currentLanguage === 'te'
              ? 'ప్రబోధ ముఖ్యాంశాలు'
              : 'Sermon Highlights'}
          </h2>
          <p className='text-xl text-white/90 max-w-3xl mx-auto'>
            {currentLanguage === 'te'
              ? 'దేవుని వాక్యం నుండి తాజా సందేశాలు మరియు ప్రేరణాదాయక బోధనలు'
              : "Recent messages and inspiring teachings from God's Word"}
          </p>
        </motion.div>

        {/* Sermons Grid - 2 YouTube Videos */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {recentSermons.map((sermon, index) => (
            <motion.div
              key={sermon.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className='h-full overflow-hidden hover:shadow-xl transition-all duration-300 group bg-card/5 backdrop-blur-sm my-6'>
                {/* YouTube Video Embed */}
                <div className='relative h-64 overflow-hidden bg-gray-900'>
                  <iframe
                    src={sermon.youtubeLiveLink}
                    title={getText(sermon.title)}
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                    className='w-full h-full object-cover'
                  />

                  {/* Duration Badge */}
                  {/**{sermon.duration && (
                    <div className='absolute top-4 right-4'>
                      <Badge className='bg-black/70 text-white flex items-center gap-1'>
                        <Clock className='w-3 h-3' />
                        {formatDuration(sermon.duration)}
                      </Badge>
                    </div>
                  )} **/}

                  {/* New Badge */}
                  {/**{sermon.isNew && (
                    <div className='absolute top-4 left-4'>
                      <Badge className='bg-primary text-primary-foreground'>
                        {currentLanguage === 'te' ? 'కొత్తది' : 'New'}
                      </Badge>
                    </div>
                  )} **/}

                  {/* Series Badge */}
                  {sermon.series && (
                    <div className='absolute bottom-4 left-4'>
                      <Badge
                        variant='secondary'
                        className='bg-white/90 text-foreground'
                      >
                        {getText(sermon.series)}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader className='pb-3'>
                  <CardTitle className='text-xl font-bold line-clamp-2 mb-3 text-white'>
                    {getText(sermon.title)}
                  </CardTitle>

                  {/* Sermon Meta */}
                  <div className='flex flex-wrap items-center gap-4 text-sm text-white/80'>
                    <div className='flex items-center gap-1'>
                      <User className='w-4 h-4' />
                      <span>{getText(sermon.speaker)}</span>
                    </div>

                    <div className='flex items-center gap-1'>
                      <Calendar className='w-4 h-4' />
                      <span>{formatDate(sermon.date)}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className='pt-0'>
                  <p className='text-white/70 text-sm line-clamp-3 mb-6'>
                    {getText(sermon.description)}
                  </p>

                  {/* Action Buttons */}
                  <div className='flex gap-3'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='flex-1'
                      onClick={() =>
                        window.open(
                          sermon.youtubeLiveLink.replace(
                            '/embed/',
                            '/watch?v='
                          ),
                          '_blank'
                        )
                      }
                    >
                      <BookOpen className='w-4 h-4 mr-2' />
                      {currentLanguage === 'te'
                        ? 'YouTube లో చూడండి'
                        : 'Watch on YouTube'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Sermons Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-center'
        >
          <Button
            asChild
            size='lg'
            className='text-lg px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20 text-white'
          >
            <Link href='/sermons' className='flex items-center gap-2'>
              {currentLanguage === 'te'
                ? 'అన్ని ప్రబోధలు చూడండి'
                : 'View All Sermons'}
              <ArrowRight className='w-5 h-5' />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
