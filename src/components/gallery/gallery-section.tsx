'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { useLanguageStore } from '@/lib/stores/language-store'
import { GalleryImage } from '@/data/gallery-data'
import 'react-photo-view/dist/react-photo-view.css'

interface GallerySectionProps {
  title: { en: string; te: string }
  images: GalleryImage[]
  categoryId: string
}

export function GallerySection({
  title,
  images,
  categoryId,
}: GallerySectionProps) {
  const { currentLanguage } = useLanguageStore()

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Group images by subcategory for better organization
  const groupedImages = images.reduce(
    (acc, image) => {
      const subcategory = image.subcategory
      if (!acc[subcategory]) {
        acc[subcategory] = []
      }
      acc[subcategory].push(image)
      return acc
    },
    {} as Record<string, GalleryImage[]>
  )

  return (
    <section className='py-12'>
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='mb-12'
      >
        <h2 className='text-3xl md:text-4xl font-bold text-slate-800 mb-4 text-center'>
          {getText(title)}
        </h2>
        <div className='w-24 h-1 bg-primary mx-auto rounded-full mb-8'></div>
        <p className='text-center text-slate-600 text-lg max-w-2xl mx-auto'>
          {categoryId === 'church'
            ? getText({
                en: 'Celebrating our faith journey together through worship, fellowship, and special occasions',
                te: 'ఆరాధన, సహవాసం మరియు ప్రత్యేక సందర్భాలలో మా విశ్వాస ప్రయాణాన్ని కలిసి జరుపుకుంటున్నాం',
              })
            : getText({
                en: 'Growing in faith through fun activities, learning, and building lasting friendships',
                te: 'వినోదభరితమైన కార్యకలాపాలు, అభ్యాసం మరియు శాశ్వత స్నేహాలను నిర్మించడం ద్వారా విశ్వాసంలో పెరుగుతున్నాం',
              })}
        </p>
      </motion.div>

      {/* Images Gallery */}
      <PhotoProvider
        speed={() => 300}
        easing={type =>
          type === 2
            ? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
            : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }
      >
        <div className='space-y-16'>
          {Object.entries(groupedImages).map(
            ([subcategory, subcategoryImages]) => (
              <motion.div
                key={subcategory}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='space-y-6'
              >
                {/* Subcategory Title */}
                <div className='text-center'>
                  <h3 className='text-2xl font-semibold text-slate-700 mb-2'>
                    {subcategory}
                  </h3>
                  <div className='w-16 h-0.5 bg-primary/60 mx-auto rounded-full'></div>
                </div>

                {/* Images Grid */}
                <motion.div
                  variants={containerVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
                >
                  {subcategoryImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      variants={itemVariants}
                      className='group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white'
                    >
                      <PhotoView src={image.src}>
                        <div className='relative aspect-square cursor-pointer'>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className='object-cover transition-transform duration-500 group-hover:scale-110'
                            sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                          />

                          {/* Hover Overlay */}
                          <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300'></div>

                          {/* View Icon */}
                          <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <div className='bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300'>
                              <svg
                                className='w-6 h-6 text-slate-700'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                />
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </PhotoView>

                      {/* Image Caption */}
                      <div className='p-3'>
                        <p className='text-sm text-slate-600 text-center font-medium'>
                          {image.alt}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          )}
        </div>
      </PhotoProvider>
    </section>
  )
}
