'use client'

import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguageStore } from '@/lib/stores/language-store'

export default function MapSection() {
  const { currentLanguage } = useLanguageStore()

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  const sectionTitle = getText({
    en: 'Find Us',
    te: 'మమమ్ని కనుగొనండి',
  })

  const sectionSubtitle = getText({
    en: 'Visit us at our location in Whitefield, Bangalore',
    te: 'వైట్‌ఫీల్డ్, బెంగళూరులో మా స్థానాన్ని సందర్శించండి',
  })

  const addressTitle = getText({
    en: 'Our Address',
    te: 'మా చిరునామా',
  })

  const contactTitle = getText({
    en: 'Get in Touch',
    te: 'మాతో సంప్రదించండి',
  })

  const directionsText = getText({
    en: 'Get Directions',
    te: 'దిశలను పొందండి',
  })

  const openInMapsText = getText({
    en: 'Open in Maps',
    te: 'మ్యాప్స్‌లో తెరవండి',
  })

  const serviceTimesTitle = getText({
    en: 'Service Times',
    te: 'సేవా సమయాలు',
  })

  const serviceSchedule = [
    {
      service: getText({ en: 'Sunday Worship', te: 'ఆదివారం ఆరాధన' }),
      time: '1st Service: 9:00 AM - 10:30 AM | 2nd Service: 10:30 AM - 12:30 PM',
      day: getText({ en: 'Every Sunday', te: 'ప్రతి ఆదివారం' }),
    },
    {
      service: getText({ en: "Women's Ministry", te: 'మహిళల సేవ' }),
      time: '10:00 AM - 12:00 PM',
      day: getText({ en: 'Every Friday', te: 'ప్రతి శుక్రవారం' }),
    },
    {
      service: getText({ en: 'Youth Ministry', te: 'యువకుల సేవ' }),
      time: '2:00 PM - 4:00 PM ',
      day: getText({ en: 'Every 1st Sunday', te: 'ప్రతి 1వ ఆదివారం' }),
    },
  ]

  const handleGetDirections = () => {
    // Using the correct Google Maps directions link provided by the user
    window.open(
      'https://www.google.com/maps/dir//Whitefield,+Bengaluru,+Karnataka+560066/@12.9763059,77.6665113,25259m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bae0f30e3c39fff:0xe54558584c087ca8!2m2!1d77.7489089!2d12.9762845?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D',
      '_blank'
    )
  }

  const handleOpenInMaps = () => {
    // For mobile devices, try to open in native maps app
    if (typeof window !== 'undefined') {
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      if (isMobile) {
        // For mobile, use the coordinates for better native app integration
        window.open(
          'https://maps.google.com/maps?q=12.9762845,77.7489089+(Peniel+Gospel+Fellowship)',
          '_blank'
        )
      } else {
        window.open(
          'https://www.google.com/maps/dir//Whitefield,+Bengaluru,+Karnataka+560066/@12.9763059,77.6665113,25259m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bae0f30e3c39fff:0xe54558584c087ca8!2m2!1d77.7489089!2d12.9762845?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D',
          '_blank'
        )
      }
    }
  }

  return (
    <section className='bg-gradient-to-b from-slate-50 to-white py-8'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-slate-800 mb-4'>
            {sectionTitle}
          </h2>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
            {sectionSubtitle}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='lg:col-span-2'
          >
            <Card className='overflow-hidden shadow-xl border-0'>
              <CardContent className='p-0'>
                <div className='relative h-[400px] md:h-[500px]'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.26653421829!2d77.6665113!3d12.9763059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f30e3c39fff%3A0xe54558584c087ca8!2sWhitefield%2C%20Bengaluru%2C%20Karnataka%20560066!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin'
                    width='100%'
                    height='100%'
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    className='rounded-lg'
                    title='Peniel Gospel Fellowship Location Map'
                  />

                  {/* Map Overlay with Church Info */}
                  <div className='absolute bottom-4 left-4 right-4'>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className='bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20'
                    >
                      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                        <div className='flex items-center space-x-3'>
                          <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0'>
                            <MapPin className='h-5 w-5 text-white' />
                          </div>
                          <div>
                            <h3 className='font-semibold text-slate-800 text-sm sm:text-base'>
                              {getText({
                                en: 'Peniel Gospel Fellowship',
                                te: 'పెనీయేల్ గాస్పెల్ ఫెలోషిప్',
                              })}
                            </h3>
                            <p className='text-xs sm:text-sm text-slate-600'>
                              {getText({
                                en: 'Whitefield, Bangalore',
                                te: 'వైట్‌ఫీల్డ్, బెంగళూరు',
                              })}
                            </p>
                          </div>
                        </div>
                        <Button
                          onClick={handleGetDirections}
                          size='sm'
                          className='bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-200'
                        >
                          <Navigation className='h-4 w-4 mr-2' />
                          {directionsText}
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='space-y-6'
          >
            {/* Address Card */}
            <Card className='shadow-lg hover:shadow-xl transition-shadow duration-300 border-0'>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <MapPin className='h-6 w-6 text-blue-600' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-slate-800 mb-2'>
                      {addressTitle}
                    </h3>
                    <p className='text-slate-600 mb-3 leading-relaxed'>
                      Anugraha Hall, St. Joseph Convent School Campus
                      <br />
                      Whitefield, Bangalore
                      <br />
                      Karnataka 560066
                    </p>
                    <Button
                      onClick={handleOpenInMaps}
                      variant='outline'
                      size='sm'
                      className='w-full hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200'
                    >
                      <ExternalLink className='h-4 w-4 mr-2' />
                      {openInMapsText}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className='shadow-lg hover:shadow-xl transition-shadow duration-300 border-0'>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Phone className='h-6 w-6 text-green-600' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-slate-800 mb-3'>
                      {contactTitle}
                    </h3>
                    <div className='space-y-3'>
                      <div className='flex items-center space-x-3'>
                        <Phone className='h-4 w-4 text-slate-500 flex-shrink-0' />
                        <a
                          href='tel:+919876543210'
                          className='text-slate-600 hover:text-primary transition-colors duration-200'
                        >
                          +91 98765 43210
                        </a>
                      </div>
                      <div className='flex items-center space-x-3'>
                        <Mail className='h-4 w-4 text-slate-500 flex-shrink-0' />
                        <a
                          href='mailto:pgf.prayerrequests@gmail.com'
                          className='text-slate-600 hover:text-primary transition-colors duration-200'
                        >
                          pgf.prayerrequests@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Times Card */}
            <Card className='shadow-lg hover:shadow-xl transition-shadow duration-300 border-0'>
              <CardContent className='p-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Clock className='h-6 w-6 text-purple-600' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-slate-800 mb-3'>
                      {serviceTimesTitle}
                    </h3>
                    <div className='space-y-4'>
                      {serviceSchedule.map((schedule, index) => (
                        <div
                          key={index}
                          className='border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200'
                        >
                          <div className='flex flex-col'>
                            <span className='font-medium text-slate-800'>
                              {schedule.service}
                            </span>
                            <span className='text-sm text-slate-600'>
                              {schedule.day}
                            </span>
                            <span className='text-sm font-medium text-primary'>
                              {schedule.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-center mt-12'
        >
          <p className='text-slate-600 mb-6'>
            {getText({
              en: 'Join us for worship and fellowship. Everyone is welcome!',
              te: 'ఆరాధన మరియు సహవాసం కోసం మాతో చేరండి. అందరికీ స్వాగతం!',
            })}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              onClick={handleGetDirections}
              size='lg'
              className='bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200'
            >
              <Navigation className='h-5 w-5 mr-2' />
              {directionsText}
            </Button>
            <Button
              variant='outline'
              size='lg'
              asChild
              className='hover:bg-slate-50 transition-colors duration-200'
            >
              <a href='tel:+919876543210'>
                <Phone className='h-5 w-5 mr-2' />
                {getText({ en: 'Call Us', te: 'కాల్ చేయండి' })}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
