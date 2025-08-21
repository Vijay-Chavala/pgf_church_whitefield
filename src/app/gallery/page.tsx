'use client'

import { MainLayout } from '@/components/layout'
import { GallerySection } from '@/components/gallery'
import { galleryCategories } from '@/data/gallery-data'
import { useLanguageStore } from '@/lib/stores/language-store'
import { motion } from 'framer-motion'
import { Camera, ArrowLeft, Grid3X3 } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

export default function GalleryPage() {
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
    te: 'హోమ్‌కు తిరిగి',
  })

  const viewAllGalleryText = getText({
    en: 'View All Gallery',
    te: 'మొత్తం గ్యాలరీ చూడండి',
  })

  return (
    <MainLayout seo={seoConfig}>
      <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
        {/* Hero Section */}
        <div className='bg-gradient-to-r from-primary to-primary/80 text-white py-20 relative overflow-hidden'>
          {/* Background Pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div
              className='absolute inset-0'
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className='container mx-auto px-4 text-center relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='max-w-4xl mx-auto'
            >
              <div className='mb-6'>
                <Camera className='h-16 w-16 mx-auto mb-4 text-white/90' />
              </div>
              <h1 className='text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg'>
                {getPageTitle()}
              </h1>
              <p className='text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto'>
                {getPageSubtitle()}
              </p>

              {/* Navigation */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <Link
                  href='/'
                  className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300'
                >
                  <ArrowLeft className='h-4 w-4' />
                  {backToHomeText}
                </Link>

                {/* Show "View All Gallery" button when filtered */}
                {categoryFilter && (
                  <Link
                    href='/gallery'
                    className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300'
                  >
                    <Grid3X3 className='h-4 w-4' />
                    {viewAllGalleryText}
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Gallery Content */}
        <div className='container mx-auto px-4 py-16'>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <GallerySection
                  title={category.title}
                  images={category.images}
                  categoryId={category.id}
                />

                {/* Separator between categories */}
                {index < filteredCategories.length - 1 && (
                  <div className='my-20'>
                    <div className='w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent'></div>
                  </div>
                )}
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center py-20'
            >
              <Camera className='h-16 w-16 mx-auto mb-6 text-slate-400' />
              <h3 className='text-2xl font-bold text-slate-700 mb-4'>
                {getText({
                  en: 'No images found',
                  te: 'చిత్రాలు కనుగొనబడలేదు',
                })}
              </h3>
              <p className='text-slate-600 mb-8'>
                {getText({
                  en: 'There are no images in this category yet.',
                  te: 'ఈ వర్గంలో ఇంకా చిత్రాలు లేవు.',
                })}
              </p>
              <Link
                href='/gallery'
                className='inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300'
              >
                <Grid3X3 className='h-4 w-4' />
                {viewAllGalleryText}
              </Link>
            </motion.div>
          )}
        </div>

        {/* Footer Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='bg-slate-100 py-16'
        >
          <div className='container mx-auto px-4 text-center max-w-2xl'>
            <h3 className='text-2xl font-bold text-slate-800 mb-4'>
              {getText({
                en: 'Have photos from our events?',
                te: 'మా కార్యక్రమాల నుండి ఫోటోలు ఉన్నాయా?',
              })}
            </h3>
            <p className='text-slate-600 mb-8'>
              {getText({
                en: "We'd love to include your photos in our gallery! Share your beautiful moments with the church family.",
                te: 'మా గ్యాలరీలో మీ ఫోటోలను చేర్చాలని మేము ఇష్టపడతాము! చర్చి కుటుంబంతో మీ అందమైన క్షణాలను పంచుకోండి.',
              })}
            </p>
            <a
              href='mailto:pgf.prayerrequests@gmail.com'
              className='inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
              {getText({
                en: 'Contact Us',
                te: 'మమ్మల్ని సంప్రదించండి',
              })}
            </a>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  )
}
