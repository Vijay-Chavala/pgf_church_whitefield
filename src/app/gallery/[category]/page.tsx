'use client'

import { Suspense, use } from 'react'
import { MainLayout } from '@/components/layout'
import {
  getSubcategoriesByCategory,
  galleryCategories,
} from '@/data/gallery-data'
import { useLanguageStore } from '@/lib/stores/language-store'
import { motion } from 'framer-motion'
import { Camera, ArrowLeft, Grid3X3, Images } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

function CategoryPageContent({ params }: CategoryPageProps) {
  const { currentLanguage } = useLanguageStore()
  const { category: categoryId } = use(params)

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  // Find the category
  const category = galleryCategories.find(cat => cat.id === categoryId)

  if (!category) {
    notFound()
  }

  const subcategories = getSubcategoriesByCategory(categoryId)

  const seoConfig = {
    title: getText({
      en: `${getText(category.title)} - Peniel Gospel Fellowship`,
      te: `${getText(category.title)} - పెనీయేల్ గాస్పెల్ ఫెలోషిప్`,
    }),
    description: getText(category.description),
    keywords: [
      'church gallery',
      categoryId === 'church' ? 'church events' : 'kids activities',
      'peniel gospel fellowship',
      'telugu church',
    ],
  }

  const backToGalleryText = getText({
    en: 'Back to Gallery',
    te: 'గ్యాలరీకి వెళ్లు',
  })

  const subcategoriesText = getText({
    en: 'Subcategories',
    te: 'ఉప వర్గాలు',
  })

  const imagesCountText = (count: number) =>
    getText({
      en: `${count} ${count === 1 ? 'image' : 'images'}`,
      te: `${count} చిత్రాలు`,
    })

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
              {getText(category.title)}
            </h1>
          </div>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-6'>
            {getText(category.description)}
          </p>

          {/* Breadcrumb */}
          <div className='flex items-center justify-center space-x-2 text-sm text-muted-foreground'>
            <Link
              href='/gallery'
              className='hover:text-primary transition-colors'
            >
              Gallery
            </Link>
            <span>/</span>
            <span className='text-foreground'>{getText(category.title)}</span>
          </div>
        </motion.div>

        {/* Subcategories Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='mb-8'
        >
          <div className='flex items-center space-x-2 mb-6'>
            <Grid3X3 className='w-5 h-5 text-muted-foreground' />
            <span className='text-lg font-medium text-foreground'>
              {subcategoriesText}
            </span>
            <span className='text-sm text-muted-foreground'>
              ({subcategories.length})
            </span>
          </div>
        </motion.div>

        {/* Subcategories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'
        >
          {subcategories.map((subcategory, index) => (
            <motion.div
              key={subcategory.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className='group relative'
            >
              <Link href={`/gallery/${categoryId}/${subcategory.id}`}>
                <div className='relative h-[300px] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]'>
                  {/* Cover Image */}
                  <Image
                    src={subcategory.coverImage}
                    alt={getText(subcategory.title)}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />

                  {/* Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

                  {/* Hover Overlay */}
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300' />

                  {/* Content */}
                  <div className='absolute inset-0 flex flex-col justify-end p-6 text-white'>
                    <div className='transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                      <div className='flex items-center mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300'>
                        <Images className='w-4 h-4 mr-2' />
                        <span className='text-sm'>
                          {imagesCountText(subcategory.images.length)}
                        </span>
                      </div>
                      <h3 className='text-xl font-bold mb-2 drop-shadow-lg'>
                        {getText(subcategory.title)}
                      </h3>
                      <p className='text-sm text-white/90 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        {getText(subcategory.description)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Back to Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='text-center'
        >
          <Link
            href='/gallery'
            className='inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors'
          >
            <ArrowLeft className='w-4 h-4' />
            <span>{backToGalleryText}</span>
          </Link>
        </motion.div>
      </div>
    </MainLayout>
  )
}

// Loading fallback component
function CategoryPageFallback() {
  return (
    <MainLayout>
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4' />
          <p className='text-muted-foreground'>Loading category...</p>
        </div>
      </div>
    </MainLayout>
  )
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <Suspense fallback={<CategoryPageFallback />}>
      <CategoryPageContent params={params} />
    </Suspense>
  )
}
