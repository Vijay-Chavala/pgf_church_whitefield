'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, MapPin, Users, ArrowRight, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useLanguageStore } from '@/lib/stores/language-store'
import { upcomingEvents } from '@/data/church-data'

export function UpcomingEvents() {
  const { currentLanguage } = useLanguageStore()

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    if (currentLanguage === 'te') {
      return date.toLocaleDateString('te-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const formatTime = (timeString: string) => {
    return timeString
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      community: 'bg-blue-100 text-blue-800 border-blue-200',
      youth: 'bg-green-100 text-green-800 border-green-200',
      children: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      prayer: 'bg-purple-100 text-purple-800 border-purple-200',
      outreach: 'bg-orange-100 text-orange-800 border-orange-200',
      education: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    }
    return (
      colors[category as keyof typeof colors] ||
      'bg-gray-100 text-gray-800 border-gray-200'
    )
  }

  const getCategoryLabel = (category: string) => {
    const labels = {
      community: { en: 'Community', te: 'సమాజం' },
      youth: { en: 'Youth', te: 'యువజనులు' },
      children: { en: 'Children', te: 'పిల్లలు' },
      prayer: { en: 'Prayer', te: 'ప్రార్థన' },
      outreach: { en: 'Outreach', te: 'సేవా కార్యక్రమం' },
      education: { en: 'Education', te: 'విద్య' },
    }
    return getText(
      labels[category as keyof typeof labels] || { en: category, te: category }
    )
  }

  // Take first 3 events for preview
  const previewEvents = upcomingEvents.slice(0, 3)

  return (
    <section className='py-5 px-4 bg-muted/20'>
      <div className='container mx-auto max-w-7xl'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            {currentLanguage === 'te'
              ? 'రాబోయే కార్యక్రమాలు'
              : 'Upcoming Events'}
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            {currentLanguage === 'te'
              ? 'మా సమాజంలో జరిగే ప్రత్యేక కార్యక్రమాలు మరియు కార్యకలాపాలలో పాల్గొనండి'
              : 'Join us for special events and activities happening in our community'}
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {previewEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className='h-full overflow-hidden hover:shadow-xl transition-all duration-300 group'>
                {/* Event Image */}
                <div className='relative h-48 overflow-hidden'>
                  <Image
                    src={event.imageUrl || '/images/events/default-event.jpg'}
                    alt={getText({ en: event.title, te: event.titleTe })}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

                  {/* Category Badge */}
                  <div className='absolute top-4 left-4'>
                    <Badge
                      variant='secondary'
                      className={`${getCategoryColor(event.category)} font-medium`}
                    >
                      {getCategoryLabel(event.category)}
                    </Badge>
                  </div>

                  {/* Featured/Priority Badge */}
                  {event.isPublic && (
                    <div className='absolute top-4 right-4'>
                      <Badge className='bg-primary/90 text-primary-foreground flex items-center gap-1'>
                        <Star className='w-3 h-3' />
                        {currentLanguage === 'te' ? 'ప్రత్యేక' : 'Featured'}
                      </Badge>
                    </div>
                  )}

                  {/* Registration Status */}
                  {event.registrationRequired && (
                    <div className='absolute bottom-4 right-4'>
                      <Badge
                        variant={
                          event.currentParticipants <
                          (event.maxParticipants || 0)
                            ? 'default'
                            : 'destructive'
                        }
                        className='text-xs'
                      >
                        {event.currentParticipants <
                        (event.maxParticipants || 0)
                          ? currentLanguage === 'te'
                            ? 'నమోదు అవుతున్నది'
                            : 'Registration Open'
                          : currentLanguage === 'te'
                            ? 'పూర్ణమైంది'
                            : 'Full'}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader className='pb-3'>
                  <CardTitle className='text-xl font-bold line-clamp-2 mb-2'>
                    {getText({ en: event.title, te: event.titleTe })}
                  </CardTitle>

                  {/* Event Details */}
                  <div className='space-y-2 text-sm text-muted-foreground'>
                    <div className='flex items-center gap-2'>
                      <Calendar className='w-4 h-4 text-primary' />
                      <span>{formatDate(event.date)}</span>
                    </div>

                    <div className='flex items-center gap-2'>
                      <Clock className='w-4 h-4 text-primary' />
                      <span>{formatTime(event.time)}</span>
                      {event.endTime && (
                        <span className='text-xs'>
                          - {formatTime(event.endTime)}
                        </span>
                      )}
                    </div>

                    <div className='flex items-center gap-2'>
                      <MapPin className='w-4 h-4 text-primary' />
                      <span className='line-clamp-1'>
                        {getText({ en: event.location, te: event.locationTe })}
                      </span>
                    </div>

                    {event.maxParticipants && (
                      <div className='flex items-center gap-2'>
                        <Users className='w-4 h-4 text-primary' />
                        <span>
                          {event.currentParticipants}/{event.maxParticipants}{' '}
                          {currentLanguage === 'te'
                            ? 'పాల్గొనేవారు'
                            : 'participants'}
                        </span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className='pt-0'>
                  <p className='text-muted-foreground text-sm line-clamp-3 mb-4'>
                    {getText({
                      en: event.description || '',
                      te: event.descriptionTe || '',
                    })}
                  </p>

                  {/* Price */}
                  {event.cost && event.cost > 0 && (
                    <div className='mb-4'>
                      <span className='text-lg font-semibold text-primary'>
                        ₹{event.cost.toLocaleString()}
                      </span>
                      <span className='text-sm text-muted-foreground ml-2'>
                        {currentLanguage === 'te'
                          ? 'ప్రవేశ రుసుము'
                          : 'entry fee'}
                      </span>
                    </div>
                  )}

                  {/* Action Button */}
                  <Button asChild className='w-full group/btn'>
                    <Link
                      href={`/events/${event.id}`}
                      className='flex items-center justify-center gap-2'
                    >
                      {event.registrationRequired
                        ? currentLanguage === 'te'
                          ? 'నమోదు చేసుకోండి'
                          : 'Register Now'
                        : currentLanguage === 'te'
                          ? 'వివరాలు చూడండి'
                          : 'View Details'}
                      <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform' />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Events Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-center'
        >
          <Button
            asChild
            variant='outline'
            size='lg'
            className='text-lg px-8 py-3'
          >
            <Link href='/ministries' className='flex items-center gap-2'>
              {currentLanguage === 'te'
                ? 'మా పరిచర్యలు చూడండి'
                : 'View Our Ministries'}
              <ArrowRight className='w-5 h-5' />
            </Link>
          </Button>
        </motion.div>

        {/* Quick Event Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-6'
        >
          <Card className='p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20'>
            <h3 className='text-xl font-semibold mb-3'>
              {currentLanguage === 'te'
                ? 'కార్యక్రమం ప్రస్తుతం?'
                : 'Planning an Event?'}
            </h3>
            <p className='text-muted-foreground mb-4'>
              {currentLanguage === 'te'
                ? 'మీ ప్రత్యేక కార్యక్రమాన్ని మాతో పంచుకోండి'
                : 'Share your special event with our community'}
            </p>
            <Button asChild>
              <Link href='/ministries'>
                {currentLanguage === 'te'
                  ? 'పరిచర్యలు చూడండి'
                  : 'View Ministries'}
              </Link>
            </Button>
          </Card>

          <Card className='p-6 text-center bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20'>
            <h3 className='text-xl font-semibold mb-3'>
              {currentLanguage === 'te'
                ? 'వాలంటీర్ అవ్వండి'
                : 'Volunteer with Us'}
            </h3>
            <p className='text-muted-foreground mb-4'>
              {currentLanguage === 'te'
                ? 'కార్యక్రమాలను విజయవంతం చేయడంలో సహాయపడండి'
                : 'Help make our events successful and impactful'}
            </p>
            <Button asChild variant='secondary'>
              <Link href='/ministries'>
                {currentLanguage === 'te' ? 'పాల్గొనండి' : 'Get Involved'}
              </Link>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
