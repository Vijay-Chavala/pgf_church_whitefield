'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Play, Heart } from 'lucide-react'
import { useLanguageStore } from '@/lib/stores/language-store'
import { guestSpeakers } from '@/data/guest-speakers-data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

export function GuestSpeakers() {
  const { currentLanguage } = useLanguageStore()

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  const sectionTitle = getText({
    en: 'Guest Speakers',
    te: 'అతిథి వక్తలు',
  })

  const sectionSubtitle = getText({
    en: 'Inspiring messages from our beloved guest speakers and honoring those who have gone to be with the Lord',
    te: 'మా ప్రియమైన అతిథి వక్తల నుండి ప్రేరణాత్మక సందేశాలు మరియు ప్రభువు వద్దకు వెళ్ళిన వారిని గౌరవించడం',
  })

  const watchVideoText = getText({
    en: 'Watch Video',
    te: 'వీడియో చూడండి',
  })

  const inMemoriamText = getText({
    en: 'In Loving Memory',
    te: 'ప్రియమైన జ్ఞాపకార్థం',
  })

  return (
    <section className='py-6 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-muted/30 to-background'>
      <div className='container mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-4'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            {sectionTitle}
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Speakers Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative'
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className='guest-speakers-swiper'
            watchSlidesProgress
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor
          >
            {guestSpeakers.map((speaker, index) => (
              <SwiperSlide key={speaker.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='h-full w-full'
                >
                  <Card
                    className={`h-full w-full bg-card shadow-md hover:shadow-lg border-0 overflow-hidden group flex flex-col hover:-translate-y-1 transform cursor-pointer rounded-lg transition-all duration-300 mb-5 ${speaker.isDeceased ? 'border-2 border-rose-200 dark:border-rose-800' : ''}`}
                  >
                    <div className='relative w-full h-[280px] overflow-hidden flex-shrink-0'>
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className='object-cover object-center group-hover:scale-105 transition-transform duration-300'
                        sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300' />

                      {/* In Memoriam Badge for Deceased Speakers */}
                      {speaker.isDeceased && (
                        <div className='absolute top-3 right-3 bg-rose-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg'>
                          <Heart className='h-3 w-3' />
                          {inMemoriamText}
                        </div>
                      )}

                      {/* Tribute Overlay for Deceased Speakers */}
                      {speaker.isDeceased && speaker.tribute && (
                        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3'>
                          <p className='text-white text-xs italic text-center leading-tight'>
                            "{speaker.tribute}"
                          </p>
                        </div>
                      )}
                    </div>

                    <CardContent className='p-4 text-center flex flex-col flex-grow transition-all duration-300'>
                      <h3 className='font-semibold text-card-foreground group-hover:text-primary mb-2 text-sm md:text-base line-clamp-2 min-h-[1.5rem] flex items-center justify-center transition-colors duration-300'>
                        {speaker.name}
                      </h3>

                      <div className='flex-grow flex flex-col justify-between'>
                        <p className='text-muted-foreground text-xs md:text-sm mb-3 line-clamp-2 min-h-[2.5rem] flex items-center justify-center'>
                          {speaker.description || 'Christian Ministry Leader'}
                        </p>

                        <Button
                          asChild
                          size='sm'
                          className='w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 text-xs md:text-sm mt-auto transition-all duration-300 shadow-sm hover:shadow-md'
                        >
                          <a
                            href={speaker.youtubeLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center gap-2'
                          >
                            <Play className='h-3 w-3 md:h-4 md:w-4' />
                            {watchVideoText}
                            <ExternalLink className='h-3 w-3 md:h-4 md:w-4' />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom styles for the swiper */}
      <style jsx global>{`
        .guest-speakers-swiper {
          padding: 20px 0;
        }

        .guest-speakers-swiper .swiper-slide {
          height: auto;
          display: flex;
          align-items: stretch;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
