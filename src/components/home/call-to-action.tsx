'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Calendar,
  Navigation,
  BookOpen,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguageStore } from '@/lib/stores/language-store'
import { churchSettings } from '@/data/church-data'

export function CallToAction() {
  const { currentLanguage } = useLanguageStore()

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  return (
    <section className='py-8 px-4 bg-gradient-to-br from-primary/10 via-muted/20 to-primary/5'>
      <div className='container mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            {currentLanguage === 'te' ? 'మాతో చేరండి' : 'Visit Us'}
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            {currentLanguage === 'te'
              ? 'మీరు ఎల్లప్పుడూ స్వాగతం. మా ఆరాధన సేవలు మరియు కార్యక్రమాలలో మాతో చేరండి'
              : 'You are always welcome. Join us for our worship services and programs'}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Service Times */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className='h-full'>
              <CardContent className='p-8'>
                <div className='flex items-center gap-3 mb-6'>
                  <Calendar className='w-6 h-6 text-primary' />
                  <h3 className='text-2xl font-bold'>
                    {currentLanguage === 'te' ? 'సేవా వేళలు' : 'Service Times'}
                  </h3>
                </div>

                <div className='space-y-6'>
                  {/* Sunday Service */}
                  <div className='flex items-start gap-4 p-4 bg-primary/5 rounded-lg'>
                    <Clock className='w-5 h-5 text-primary mt-1' />
                    <div>
                      <h4 className='font-semibold text-lg'>
                        {currentLanguage === 'te'
                          ? 'ఆదివారం ఆరాధన'
                          : 'Sunday Worship'}
                      </h4>
                      <p className='text-primary font-medium text-sm'>
                        {churchSettings.serviceTimings.sunday}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {currentLanguage === 'te'
                          ? 'ప్రతి ఆదివారం (1వ ఆదివారం పవిత్ర సంయోగం)'
                          : 'Holy Communion : 1st Sunday'}
                      </p>
                    </div>
                  </div>

                  {/* Wednesday Prayer */}
                  <div
                    className='flex items-start gap-4 p-4 bg-muted/30 rounded-lg'
                    style={{
                      margin: '0',
                    }}
                  >
                    <Clock className='w-5 h-5 text-secondary-foreground mt-1' />
                    <div>
                      <h4 className='font-semibold'>
                        {currentLanguage === 'te'
                          ? 'బుధవారం ప్రార్థన'
                          : 'Wednesday Prayer'}
                      </h4>
                      <p className='text-secondary-foreground font-medium text-sm'>
                        {churchSettings.serviceTimings.wednesday}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {currentLanguage === 'te'
                          ? 'ప్రతి బుధవారం (ఆన్‌లైన్)'
                          : 'Every Wednesday (Online)'}
                      </p>
                    </div>
                  </div>

                  {/* Friday Activities */}
                  <div
                    className='flex items-start gap-4 p-4 bg-muted/30 rounded-lg'
                    style={{
                      margin: '0',
                    }}
                  >
                    <Clock className='w-5 h-5 text-secondary-foreground mt-1' />
                    <div>
                      <h4 className='font-semibold'>
                        {currentLanguage === 'te'
                          ? 'శుక్రవారం కార్యక్రమాలు'
                          : 'Friday Activities'}
                      </h4>
                      <p className='text-secondary-foreground font-medium text-sm'>
                        {churchSettings.serviceTimings.friday}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {currentLanguage === 'te'
                          ? 'మహిళల సేవ & యువజన సహవాసం'
                          : "Women's Ministry "}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {currentLanguage === 'te'
                          ? 'యువకుల సేవ'
                          : 'Youth Ministry(Online)'}
                      </p>
                    </div>
                  </div>

                  {/* Saturday Prayer */}
                  {churchSettings.serviceTimings.saturday && (
                    <div
                      className='flex items-start gap-4 p-4 bg-muted/30 rounded-lg'
                      style={{
                        margin: '0',
                      }}
                    >
                      <Clock className='w-5 h-5 text-secondary-foreground mt-1' />
                      <div>
                        <h4 className='font-semibold'>
                          {currentLanguage === 'te'
                            ? 'శనివారం ప్రార్థన'
                            : 'Saturday Prayer'}
                        </h4>
                        <p className='text-secondary-foreground font-medium text-sm'>
                          {churchSettings.serviceTimings.saturday}
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          {currentLanguage === 'te'
                            ? 'ప్రతి శనివారం (ఆన్‌లైన్)'
                            : 'Every Saturday (Online)'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact & Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className='h-full'>
              <CardContent className='p-8'>
                <div className='flex items-center gap-3 mb-6'>
                  <MapPin className='w-6 h-6 text-primary' />
                  <h3 className='text-2xl font-bold'>
                    {currentLanguage === 'te' ? 'మా చిరునామా' : 'Our Location'}
                  </h3>
                </div>

                <div className='space-y-6'>
                  {/* Address */}
                  <div>
                    <h4 className='font-semibold mb-2'>
                      {currentLanguage === 'te' ? 'చిరునామా:' : 'Address:'}
                    </h4>
                    <p className='text-muted-foreground'>
                      {getText(churchSettings.address)}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className='space-y-3'>
                    <div className='flex items-center gap-3'>
                      <Phone className='w-4 h-4 text-primary' />
                      <a
                        href={`tel:${churchSettings.phone}`}
                        className='hover:text-primary transition-colors'
                      >
                        {churchSettings.phone}
                      </a>
                    </div>

                    <div className='flex items-center gap-3'>
                      <Mail className='w-4 h-4 text-primary' />
                      <a
                        href={`mailto:${churchSettings.email}`}
                        className='hover:text-primary transition-colors'
                      >
                        {churchSettings.email}
                      </a>
                    </div>
                  </div>

                  {/* Directions Button */}
                  <div className='pt-4'>
                    <Button asChild className='w-full'>
                      <a
                        href={`https://maps.google.com/?q=${churchSettings.coordinates?.latitude || 12.9698},${churchSettings.coordinates?.longitude || 77.75}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center justify-center gap-2'
                      >
                        <Navigation className='w-4 h-4' />
                        {currentLanguage === 'te'
                          ? 'దిశలు పొందండి'
                          : 'Get Directions'}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='text-center mt-16 space-y-6 hidden'
        >
          <h3 className='text-2xl font-bold'>
            {currentLanguage === 'te'
              ? 'మొదటిసారి వస్తున్నారా?'
              : 'First Time Visiting?'}
          </h3>

          <p className='text-muted-foreground max-w-2xl mx-auto'>
            {currentLanguage === 'te'
              ? 'మేము మిమ్మల్ని స్వాగతిస్తున్నాము! మీకు ఏవైనా ప్రశ్నలు ఉంటే లేదా మరింత తెలుసుకోవాలంటే మాతో సంప్రదించండి.'
              : 'We would love to welcome you! Contact us if you have any questions or want to know more.'}
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' className='text-lg px-8 py-3'>
              <Link href='/ministries'>
                {currentLanguage === 'te'
                  ? 'మా పరిచర్యలు చూడండి'
                  : 'View Our Ministries'}
              </Link>
            </Button>

            <Button
              asChild
              variant='outline'
              size='lg'
              className='text-lg px-8 py-3'
            >
              <Link href='/sermons'>
                {currentLanguage === 'te' ? 'ప్రవచనాలు చూడండి' : 'View Sermons'}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
