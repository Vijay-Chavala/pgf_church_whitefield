'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Camera } from 'lucide-react'
import { useLanguageStore } from '@/lib/stores/language-store'

interface GalleryCategory {
  id: string
  title: { en: string; te: string }
  images: string[]
  href: string
}

export function GalleryOverview() {
  const { currentLanguage } = useLanguageStore()

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  const sectionTitle = getText({
    en: 'Our Gallery',
    te: 'మా గ్యాలరీ',
  })

  const sectionSubtitle = getText({
    en: 'Capturing beautiful moments of faith and fellowship',
    te: 'విశ్వాసం మరియు సహవాసం యొక్క అందమైన క్షణాలను చిత్రీకరిస్తున్నాం',
  })

  const seeMoreText = getText({
    en: 'See More',
    te: 'మరిన్ని చూడండి',
  })

  const viewGalleryText = getText({
    en: 'View Full Gallery',
    te: 'పూర్తి గ్యాలరీ చూడండి',
  })

  const galleryCategories: GalleryCategory[] = [
    {
      id: 'church',
      title: { en: 'Church Events', te: 'చర్చి కార్యక్రమాలు' },
      images: [
        '/images/gallery/churchFellowship/CF1.webp',
        '/images/gallery/Christmas2023/Christmas23_1.webp',
        '/images/gallery/Easter24/Easter24_1.webp',
        '/images/gallery/4thAnnversday/A4_1.webp',
      ],
      href: '/gallery?category=church',
    },
    {
      id: 'kids',
      title: { en: 'Kids Events', te: 'పిల్లల కార్యక్రమాలు' },
      images: [
        '/images/gallery/SundaySchool/SS1.webp',
        '/images/gallery/VBS24/VBS1.webp',
        '/images/gallery/PGF_BABIES/bhupal.webp',
        '/images/gallery/VBS24/VBS15.webp',
      ],
      href: '/gallery?category=kids',
    },
  ]

  return (
    <section className='py-10 px-4 md:px-8 lg:px-12 bg-background'>
      <div className='container mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            {sectionTitle}
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Gallery Categories */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {galleryCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className='group relative'
            >
              <Link href={category.href}>
                <div className='relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300'>
                  {/* Background Pattern/Collage */}
                  <div className='absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200'>
                    <div className='grid grid-cols-2 h-full gap-1 p-2'>
                      {category.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className='relative overflow-hidden rounded-lg'
                        >
                          <Image
                            src={image}
                            alt={`${getText(category.title)} ${imgIndex + 1}`}
                            fill
                            className='object-cover transition-transform duration-500 group-hover:scale-110'
                            sizes='(max-width: 768px) 50vw, 25vw'
                            onError={e => {
                              // Fallback to placeholder if image doesn't exist
                              e.currentTarget.src = `https://images.unsplash.com/photo-${
                                category.id === 'church'
                                  ? '1438232992991-967b8ac5b592'
                                  : '1503454537195-1dcabb73ffb9'
                              }?auto=format&fit=crop&w=800&q=80`
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className='absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500' />

                  {/* Hover Animation Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                  {/* Content */}
                  <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-8'>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className='text-center transform group-hover:scale-105 transition-transform duration-500'
                    >
                      <div className='mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300'>
                        <Camera className='h-12 w-12 mx-auto mb-2' />
                      </div>
                      <h3 className='text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg'>
                        {getText(category.title)}
                      </h3>
                      <div className='transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                        <Button
                          variant='outline'
                          size='lg'
                          className='bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-slate-800 transition-all duration-300'
                        >
                          {seeMoreText}
                          <ArrowRight className='ml-2 h-4 w-4' />
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-center'
        >
          <Button
            asChild
            size='lg'
            className='bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
          >
            <Link href='/gallery' className='flex items-center gap-2'>
              <Camera className='h-5 w-5' />
              {viewGalleryText}
              <ArrowRight className='h-5 w-5' />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
