'use client'

import { Suspense, use } from 'react'
import { MainLayout } from '@/components/layout'
import { getSubcategory } from '@/data/gallery-data'
import { useLanguageStore } from '@/lib/stores/language-store'
import { motion } from 'framer-motion'
import { Camera, ArrowLeft, Images, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { notFound } from 'next/navigation'
import 'react-photo-view/dist/react-photo-view.css'

interface SubcategoryPageProps {
  params: Promise<{
    category: string
    subcategory: string
  }>
}

function SubcategoryPageContent({ params }: SubcategoryPageProps) {
  const { currentLanguage } = useLanguageStore()
  const { category: categoryId, subcategory: subcategoryId } = use(params)

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  // Find the subcategory
  const subcategory = getSubcategory(categoryId, subcategoryId)

  if (!subcategory) {
    notFound()
  }

  const seoConfig = {
    title: getText({
      en: `${getText(subcategory.title)} - Peniel Gospel Fellowship`,
      te: `${getText(subcategory.title)} - పెనీయేల్ గాస్పెల్ ఫెలోషిప్`,
    }),
    description: getText(subcategory.description),
    keywords: [
      'church gallery',
      subcategory.name.toLowerCase(),
      categoryId === 'church' ? 'church events' : 'kids activities',
      'peniel gospel fellowship',
      'telugu church',
    ],
  }

  const backToCategoryText = getText({
    en: `Back to ${categoryId === 'church' ? 'Church Events' : 'Kids Activities'}`,
    te: `${categoryId === 'church' ? 'చర్చి కార్యక్రమాలు' : 'పిల్లల కార్యకలాపాలు'}కి వెళ్లు`,
  })

  const imagesCountText = getText({
    en: `${subcategory.images.length} ${subcategory.images.length === 1 ? 'image' : 'images'}`,
    te: `${subcategory.images.length} చిత్రాలు`,
  })

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

  return (
    <MainLayout seo={seoConfig}>
      <div className='container mx-auto px-4 py-8'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-8'
        >
          <div className='flex items-center justify-center mb-4'>
            <Camera className='w-8 h-8 text-primary mr-3' />
            <h1 className='text-4xl font-bold text-foreground'>
              {getText(subcategory.title)}
            </h1>
          </div>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-6'>
            {getText(subcategory.description)}
          </p>

          {/* Breadcrumb */}
          <div className='flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-4'>
            <Link
              href='/gallery'
              className='hover:text-primary transition-colors'
            >
              Gallery
            </Link>
            <span>/</span>
            <Link
              href={`/gallery/${categoryId}`}
              className='hover:text-primary transition-colors'
            >
              {categoryId === 'church' ? 'Church Events' : 'Kids Activities'}
            </Link>
            <span>/</span>
            <span className='text-foreground'>
              {getText(subcategory.title)}
            </span>
          </div>

          {/* Image Count */}
          <div className='flex items-center justify-center space-x-2 text-muted-foreground'>
            <Images className='w-4 h-4' />
            <span>{imagesCountText}</span>
          </div>
        </motion.div>

        {/* Images Grid */}
        <PhotoProvider
          speed={() => 300}
          easing={type =>
            type === 2
              ? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
              : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
          }
        >
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12'
          >
            {subcategory.images.map((image, index) => (
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
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300' />

                    {/* View Icon */}
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <div className='bg-white/20 backdrop-blur-sm rounded-full p-3'>
                        <Camera className='w-6 h-6 text-white' />
                      </div>
                    </div>

                    {/* Image Number */}
                    <div className='absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      {index + 1}
                    </div>
                  </div>
                </PhotoView>
              </motion.div>
            ))}
          </motion.div>
        </PhotoProvider>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='text-center'
        >
          <Link
            href={`/gallery/${categoryId}`}
            className='inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors'
          >
            <ArrowLeft className='w-4 h-4' />
            <span>{backToCategoryText}</span>
          </Link>
        </motion.div>
      </div>
    </MainLayout>
  )
}

// Loading fallback component
function SubcategoryPageFallback() {
  return (
    <MainLayout>
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4' />
          <p className='text-muted-foreground'>Loading images...</p>
        </div>
      </div>
    </MainLayout>
  )
}

export default function SubcategoryPage({ params }: SubcategoryPageProps) {
  return (
    <Suspense fallback={<SubcategoryPageFallback />}>
      <SubcategoryPageContent params={params} />
    </Suspense>
  )
}
