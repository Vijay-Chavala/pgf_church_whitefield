'use client'

import { Suspense } from 'react'
import { MainLayout } from '@/components/layout'
import { GallerySection } from '@/components/gallery'
import { galleryCategories } from '@/data/gallery-data'
import { useLanguageStore } from '@/lib/stores/language-store'
import { motion } from 'framer-motion'
import { Camera, ArrowLeft, Grid3X3 } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

// Component that uses useSearchParams - must be wrapped in Suspense
function GalleryPageWithSearchParams() {
  const { currentLanguage } = useLanguageStore()
  const searchParams = useSearchParams()
  const categoryFilter = searchParams.get('category')

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  // Filter gallery categories based on the selected category
  const filteredCategories = useMemo(() => {
    if (!categoryFilter) {
      return galleryCategories // Show all categories
    }

    // Filter categories based on the category parameter
    return galleryCategories
      .filter(category => {
        // Check if any image in the category matches the filter
        return category.images.some(image => image.category === categoryFilter)
      })
      .map(category => ({
        ...category,
        // Also filter images within the category
        images: category.images.filter(
          image => image.category === categoryFilter
        ),
      }))
  }, [categoryFilter])

  // Dynamic page title based on filter
  const getPageTitle = () => {
    if (categoryFilter === 'church') {
      return getText({
        en: 'Church Gallery',
        te: 'చర్చి గ్యాలరీ',
      })
    } else if (categoryFilter === 'kids') {
      return getText({
        en: 'Kids Gallery',
        te: 'పిల్లల గ్యాలరీ',
      })
    }
    return getText({
      en: 'Our Gallery',
      te: 'మా గ్యాలరీ',
    })
  }

  // Dynamic page subtitle based on filter
  const getPageSubtitle = () => {
    if (categoryFilter === 'church') {
      return getText({
        en: 'Beautiful moments from our church events and celebrations',
        te: 'మా చర్చి కార్యక్రమాలు మరియు వేడుకల అందమైన క్షణాలు',
      })
    } else if (categoryFilter === 'kids') {
      return getText({
        en: 'Joyful moments from kids activities and programs',
        te: 'పిల్లల కార్యకలాపాలు మరియు కార్యక్రమాల ఆనందకరమైన క్షణాలు',
      })
    }
    return getText({
      en: 'Capturing beautiful moments of faith and fellowship',
      te: 'విశ్వాసం మరియు సహవాసం యొక్క అందమైన క్షణాలను చిత్రీకరిస్తున్నాం',
    })
  }

  const seoConfig = {
    title: getText({
      en: 'Gallery - Peniel Gospel Fellowship',
      te: 'గ్యాలరీ - పెనీయేల్ గాస్పెల్ ఫెలోషిప్',
    }),
    description: getText({
      en: 'View our church photo gallery featuring church events, kids activities, and fellowship moments.',
      te: 'చర్చి కార్యక్రమాలు, పిల్లల కార్యకలాపాలు మరియు సహవాస క్షణాలను కలిగి ఉన్న మా చర్చి ఫోటో గ్యాలరీని చూడండి.',
    }),
    keywords: [
      'church gallery',
      'church events',
      'kids activities',
      'fellowship',
      'peniel gospel fellowship',
      'telugu church',
    ],
  }

  const backToHomeText = getText({
    en: 'Back to Home',
    te: 'హోమ్‌కు వెళ్లు',
  })

  const filterText = getText({
    en: 'Filter by Category',
    te: 'వర్గం ద్వారా ఫిల్టర్ చేయండి',
  })

  const allCategoriesText = getText({
    en: 'All Categories',
    te: 'అన్ని వర్గాలు',
  })

  const churchCategoryText = getText({
    en: 'Church Events',
    te: 'చర్చి కార్యక్రమాలు',
  })

  const kidsCategoryText = getText({
    en: 'Kids Activities',
    te: 'పిల్లల కార్యకలాపాలు',
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
              {getPageTitle()}
            </h1>
          </div>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            {getPageSubtitle()}
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='mb-8'
        >
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
            <div className='flex items-center space-x-2'>
              <Grid3X3 className='w-5 h-5 text-muted-foreground' />
              <span className='text-sm font-medium text-muted-foreground'>
                {filterText}
              </span>
            </div>
            <div className='flex flex-wrap gap-2'>
              <Link
                href='/gallery'
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !categoryFilter
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {allCategoriesText}
              </Link>
              <Link
                href='/gallery?category=church'
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  categoryFilter === 'church'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {churchCategoryText}
              </Link>
              <Link
                href='/gallery?category=kids'
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  categoryFilter === 'kids'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {kidsCategoryText}
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {filteredCategories.map(category => (
            <GallerySection
              key={category.id}
              title={category.title}
              images={category.images}
              categoryId={category.id}
            />
          ))}
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='text-center mt-12'
        >
          <Link
            href='/'
            className='inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors'
          >
            <ArrowLeft className='w-4 h-4' />
            <span>{backToHomeText}</span>
          </Link>
        </motion.div>
      </div>
    </MainLayout>
  )
}

// Loading fallback component
function GalleryPageFallback() {
  return (
    <MainLayout>
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4' />
          <p className='text-muted-foreground'>Loading gallery...</p>
        </div>
      </div>
    </MainLayout>
  )
}

// Main export - wraps the component that uses useSearchParams with Suspense
export default function GalleryPage() {
  return (
    <Suspense fallback={<GalleryPageFallback />}>
      <GalleryPageWithSearchParams />
    </Suspense>
  )
}
