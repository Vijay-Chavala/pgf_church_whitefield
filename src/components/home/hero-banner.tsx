'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguageStore } from '@/lib/stores/language-store'
import Image from 'next/image'

interface HeroSlide {
  id: string
  image: string
  title: { en: string; te: string }
  subtitle: { en: string; te: string }
  bibleVerse: { en: string; te: string }
  bibleReference: { en: string; te: string }
  cta?: { en: string; te: string }
}

const heroSlides: HeroSlide[] = [
  {
    id: 'sunday-school',
    image: '/images/hero/IMG_3331.JPEG',
    title: {
      en: 'Training Up Our Children',
      te: 'మా పిల్లలను చక్కగా పెంచుతున్నాము',
    },
    subtitle: {
      en: "Sunday School - Nurturing young hearts with God's love and wisdom",
      te: 'ఆదివారం పాఠశాల - దేవుని ప్రేమ మరియు జ్ఞానంతో చిన్న హృదయాలను పెంపొందిస్తున్నాము',
    },
    bibleVerse: {
      en: 'Train up a child in the way he should go, and when he is old he will not depart from it.',
      te: 'పిల్లవాడిని వాడు నడవలసిన మార్గంలో నడిపించు; వాడు ముసలివాడైనప్పుడు దాని విడిచిపెట్టడు.',
    },
    bibleReference: {
      en: 'Proverbs 22:6',
      te: 'సామెతలు 22:6',
    },
    cta: {
      en: 'Join Sunday School',
      te: 'ఆదివారం పాఠశాలలో చేరండి',
    },
  },
  {
    id: 'womens-ministry',
    image: '/images/hero/IMG_3330.JPEG',
    title: {
      en: 'Women of Faith and Strength',
      te: 'విశ్వాసం మరియు బలం గల మహిళలు',
    },
    subtitle: {
      en: 'Empowering women to be virtuous leaders in their families and community',
      te: 'మహిళలను వారి కుటుంబాలలో మరియు సమాజంలో సద్గుణ నాయకులుగా శక్తివంతం చేయడం',
    },
    bibleVerse: {
      en: 'She is clothed with strength and dignity; she can laugh at the days to come.',
      te: 'ఆమె బలమును, గౌరవమును ధరించుకొని ఉండును; రాబోవు దినములను చూచి నవ్వును.',
    },
    bibleReference: {
      en: 'Proverbs 31:25',
      te: 'సామెతలు 31:25',
    },
    cta: {
      en: "Women's Ministry",
      te: 'మహిళల సేవ',
    },
  },
  {
    id: 'mens-ministry',
    image: '/images/hero/IMG_3332.JPEG',
    title: {
      en: 'Men of God Standing Strong',
      te: 'దేవుని మనుషులు దృఢంగా నిలుచున్నారు',
    },
    subtitle: {
      en: 'Building godly men who lead with integrity, wisdom, and compassion',
      te: 'నిష్కళంకత, జ్ఞానం మరియు కరుణతో నాయకత్వం వహించే దైవిక పురుషులను నిర్మించడం',
    },
    bibleVerse: {
      en: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.',
      te: 'బలపడు, ధైర్యవంతుడవు కమ్ము; భయపడకు, కల్వరపడకు; ఎందుకంటే నీవు ఎక్కడికి వెళ్లినా నీ దేవుడైన యెహోవా నీకు తోడుగా ఉంటాడు.',
    },
    bibleReference: {
      en: 'Joshua 1:9',
      te: 'యెహోషువ 1:9',
    },
    cta: {
      en: "Men's Fellowship",
      te: 'పురుషుల సహవాసం',
    },
  },
  {
    id: 'youth-girls',
    image: '/images/hero/IMG_3329.JPEG',
    title: {
      en: 'Daughters of the King',
      te: 'రాజు యొక్క కుమార్తెలు',
    },
    subtitle: {
      en: 'Young women discovering their identity and purpose in Christ',
      te: 'క్రీస్తులో తమ గుర్తింపు మరియు లక్ష్యాన్ని కనుగొనే యువతులు',
    },
    bibleVerse: {
      en: 'She is more precious than rubies; nothing you desire can compare with her.',
      te: 'ఆమె పగడముల కంటే వెలయగునది; నీకు కావలసినవాన్నిటిలో దేనితోను ఆమెను పోల్చలేము.',
    },
    bibleReference: {
      en: 'Proverbs 31:10',
      te: 'సామెతలు 31:10',
    },
    cta: {
      en: 'Youth Girls Ministry',
      te: 'యువతుల సేవ',
    },
  },
  {
    id: 'youth-boys',
    image: '/images/hero/IMG_3327.JPEG',
    title: {
      en: 'Future Leaders in Christ',
      te: 'క్రీస్తులో భవిష్యత్ నాయకులు',
    },
    subtitle: {
      en: 'Young men being equipped to serve God and make a difference in the world',
      te: 'దేవునిసేవించడానికి మరియు ప్రపంచంలో మార్పు తీసుకురావడానికి సిద్ధపడుతున్న యువకులు',
    },
    bibleVerse: {
      en: "Don't let anyone look down on you because you are young, but set an example for the believers.",
      te: 'నీవు యవ్వనుడవని ఎవడును నిన్ను తృణీకరింపకుండా విశ్వాసులకు మాట మరియు నడక.',
    },
    bibleReference: {
      en: '1 Timothy 4:12',
      te: '1 తిమోతి 4:12',
    },
    cta: {
      en: 'Youth Boys Ministry',
      te: 'యువకుల సేవ',
    },
  },
  {
    id: 'children-babies',
    image: '/images/hero/IMG_3335.JPEG',
    title: {
      en: 'Little Ones, Big Hearts',
      te: 'చిన్న పిల్లలు, పెద్ద హృదయాలు',
    },
    subtitle: {
      en: 'Blessing and nurturing our youngest members with love and care',
      te: 'మా అతి చిన్న సభ్యులను ప్రేమ మరియు శ్రద్ధతో ఆశీర్వదించడం మరియు పెంపొందించడం',
    },
    bibleVerse: {
      en: 'Jesus said, "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these."',
      te: 'యేసు ఇలా అన్నాడు: "చిన్న పిల్లలను నా దగ్గరకు రానివ్వండి, వారిని అడ్డుకోవద్దు, ఎందుకంటే స్వర్గరాజ్యం ఇలాంటి వారిదే."',
    },
    bibleReference: {
      en: 'Matthew 19:14',
      te: 'మత్తయి 19:14',
    },
    cta: {
      en: "Children's Ministry",
      te: 'పిల్లల సేవ',
    },
  },
  {
    id: 'pastor-family',
    image: '/images/hero/IMG_3328.JPEG',
    title: {
      en: 'Shepherds of the Flock',
      te: 'మందకు కాపరులు',
    },
    subtitle: {
      en: 'Our pastoral family dedicating their lives to serve God and His people',
      te: 'దేవుని మరియు ఆయన ప్రజలను సేవించడానికి తమ జీవితాలను అంకితం చేసిన మా పాస్టర్ కుటుంబం',
    },
    bibleVerse: {
      en: "Be shepherds of God's flock that is under your care, watching over them—not because you must, but because you are willing.",
      te: 'మీ వశమునందున్న దేవుని మందను కాపాడండి; బలవంతంగా కాకుండా దేవుని చిత్తప్రకారము.',
    },
    bibleReference: {
      en: '1 Peter 5:2',
      te: '1 పేతురు 5:2',
    },
    cta: {
      en: 'Meet Our Pastors',
      te: 'మా పాస్టర్లను కలుసుకోండి',
    },
  },
  {
    id: 'church-worship',
    image: '/images/hero/church-worship.jpg',
    title: {
      en: 'United in Worship',
      te: 'ఆరాధనలో ఐక్యపడిన',
    },
    subtitle: {
      en: 'Coming together as one body to praise and worship our Lord and Savior',
      te: 'మన ప్రభువు మరియు రక్షకుడిని స్తుతించడానికి మరియు ఆరాధించడానికి ఒక శరీరంగా కలిసి రావడం',
    },
    bibleVerse: {
      en: 'Come, let us bow down in worship, let us kneel before the Lord our Maker.',
      te: 'రండి, మనము దండమెత్తి నమస్కరించుదాము; మనలను సృష్టించిన యెహోవా సన్నిధిలో మోకరించుదాము.',
    },
    bibleReference: {
      en: 'Psalm 95:6',
      te: 'కీర్తనలు 95:6',
    },
    cta: {
      en: 'Join Our Worship',
      te: 'మా ఆరాధనలో చేరండి',
    },
  },
  {
    id: 'fellowship',
    image: '/images/hero/congregation.jpg',
    title: {
      en: 'Sweet Fellowship Together',
      te: 'కలిసి తియ్యని సహవాసం',
    },
    subtitle: {
      en: "Building lasting relationships and sharing God's love in Christian fellowship",
      te: 'శాశ్వత సంబంధాలను నిర్మించడం మరియు క్రైస్తవ సహవాసంలో దేవుని ప్రేమను పంచుకోవడం',
    },
    bibleVerse: {
      en: "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer.",
      te: 'వారు అపొస్తలుల బోధలోను, సహవాసములోను, రొట్టె విరుచుట లోను, ప్రార్థనలలోను నిలకడగా ఉండిరి.',
    },
    bibleReference: {
      en: 'Acts 2:42',
      te: 'అపొస్తలుల కార్యలు 2:42',
    },
    cta: {
      en: 'Join Fellowship',
      te: 'సహవాసంలో చేరండి',
    },
  },
  {
    id: 'church-service',
    image: '/images/hero/ravi.jpg',
    title: {
      en: 'Called to Serve',
      te: 'సేవకు పిలువబడినవారు',
    },
    subtitle: {
      en: 'Living out our faith through acts of service and love in our community',
      te: 'మా సమాజంలో సేవ మరియు ప్రేమ కార్యాల ద్వారా మా విశ్వాసాన్ని జీవించడం',
    },
    bibleVerse: {
      en: 'For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.',
      te: 'మనుష్య కుమారుడు కూడ సేవ చేయించుకోవాలని రాకుండా సేవ చేయాలని, అనేకుల కోసం తన ప్రాణమును విమోచన వెలగా ఇవ్వాలని వచ్చాడు.',
    },
    bibleReference: {
      en: 'Mark 10:45',
      te: 'మార్కు 10:45',
    },
    cta: {
      en: 'Serve With Us',
      te: 'మాతో సేవ చేయండి',
    },
  },
]

export function HeroBanner() {
  const { currentLanguage } = useLanguageStore()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  // Preload images
  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image()
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, src]))
        resolve()
      }
      img.onerror = reject
      img.src = src
    })
  }, [])

  // Preload all images on component mount
  useEffect(() => {
    const preloadAllImages = async () => {
      const totalImages = heroSlides.length
      let loadedCount = 0

      const imagePromises = heroSlides.map(async slide => {
        try {
          await preloadImage(slide.image)
          loadedCount++
          setLoadingProgress((loadedCount / totalImages) * 100)
        } catch (error) {
          console.warn(`Failed to preload image: ${slide.image}`, error)
          loadedCount++
          setLoadingProgress((loadedCount / totalImages) * 100)
        }
      })

      try {
        await Promise.all(imagePromises)
        // Add small delay to show completion
        setTimeout(() => setIsLoading(false), 500)
      } catch (error) {
        console.warn('Some images failed to preload:', error)
        setTimeout(() => setIsLoading(false), 500)
      }
    }

    preloadAllImages()
  }, [preloadImage])

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isLoading) return

    const interval = setInterval(() => {
      nextSlide()
    }, 8000) // Increased to 8 seconds for more reading time

    return () => clearInterval(interval)
  }, [isAutoPlaying, isLoading, nextSlide])

  const currentSlideData = heroSlides[currentSlide]

  // Loading state
  if (isLoading) {
    return (
      <section className='relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center'>
        <div className='text-center text-white max-w-md mx-auto px-6'>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='mb-8'
          >
            <div className='relative'>
              <div className='animate-spin rounded-full h-24 w-24 border-4 border-white/20 border-t-white mx-auto mb-6'></div>
              <div className='absolute inset-0 flex items-center justify-center'>
                <span className='text-sm font-bold'>
                  {Math.round(loadingProgress)}%
                </span>
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='text-2xl font-semibold mb-4'
          >
            {currentLanguage === 'te' ? 'లోడ్ అవుతోంది...' : 'Loading...'}
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className='mb-6'
          >
            <p className='text-gray-300 mb-3'>
              {currentLanguage === 'te'
                ? 'చిత్రాలను సిద్ధం చేస్తున్నాము'
                : 'Preparing images'}
            </p>

            {/* Progress Bar */}
            <div className='w-full bg-gray-700 rounded-full h-2 overflow-hidden'>
              <motion.div
                className='h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>

            <p className='text-sm text-gray-400 mt-2'>
              {currentLanguage === 'te'
                ? `${Math.round(loadingProgress)}% పూర్తయింది`
                : `${Math.round(loadingProgress)}% complete`}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className='text-sm text-gray-400'
          >
            {currentLanguage === 'te'
              ? 'పెనీయేల్ గాస్పెల్ ఫెలోషిప్'
              : 'Peniel Gospel Fellowship'}
          </motion.p>
        </div>
      </section>
    )
  }

  // Ensure we have valid slide data
  if (!currentSlideData) {
    return (
      <section className='relative h-screen w-full overflow-hidden bg-gray-900 flex items-center justify-center'>
        <div className='text-center text-white'>
          <h2 className='text-2xl font-semibold'>
            {currentLanguage === 'te'
              ? 'కంటెంట్ లోడ్ చేయడంలో లోపం'
              : 'Error loading content'}
          </h2>
        </div>
      </section>
    )
  }

  return (
    <motion.section
      className='relative h-screen w-full overflow-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className='relative w-full h-full'
        >
          {/* Hero Image - Proper Next.js Image component */}
          <div className='relative w-full h-full'>
            <Image
              src={
                currentSlideData?.image ||
                heroSlides[0]?.image ||
                '/images/hero/church-worship.jpg'
              }
              alt={getText(
                currentSlideData?.title ||
                  heroSlides[0]?.title || {
                    en: 'Church Image',
                    te: 'చర్చి చిత్రం',
                  }
              )}
              fill
              className='object-cover'
              priority={currentSlide === 0}
              quality={90}
              sizes='100vw'
              loading={currentSlide === 0 ? 'eager' : 'lazy'}
            />

            {/* Subtle overlay for better text readability */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20' />
          </div>

          {/* Text Overlay - Positioned absolutely */}
          <div className='absolute inset-0 flex items-end justify-center p-4 z-10'>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className='w-full max-w-6xl mx-auto mb-8'
            >
              {/* Glassmorphism Container */}
              <div className='bg-black/30 border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl'>
                <div className='text-center'>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <h1 className='text-xxl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight'>
                      {getText(
                        currentSlideData?.title ||
                          heroSlides[0]?.title || {
                            en: 'Welcome',
                            te: 'స్వాగతం',
                          }
                      )}
                    </h1>

                    <p className='text-base md:text-lg lg:text-xl text-gray-300 mb-2 leading-relaxed max-w-4xl mx-auto'>
                      {getText(
                        currentSlideData?.subtitle ||
                          heroSlides[0]?.subtitle || {
                            en: 'Welcome to our church',
                            te: 'మా చర్చికి స్వాగతం',
                          }
                      )}
                    </p>

                    {/* Bible Verse */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                      className=''
                    >
                      <blockquote className='text-sm md:text-base lg:text-lg text-yellow-200 italic max-w-3xl mx-auto leading-relaxed'>
                        "
                        {getText(
                          currentSlideData?.bibleVerse ||
                            heroSlides[0]?.bibleVerse || {
                              en: 'For God so loved the world...',
                              te: 'దేవుడు లోకమును ఎంతో ప్రేమించెను...',
                            }
                        )}
                        "
                      </blockquote>
                      <cite className='text-xs md:text-sm text-yellow-300 font-semibold'>
                        —{' '}
                        {getText(
                          currentSlideData?.bibleReference ||
                            heroSlides[0]?.bibleReference || {
                              en: 'John 3:16',
                              te: 'యోహాను 3:16',
                            }
                        )}
                      </cite>
                    </motion.div>

                    {/* Call to Action Buttons */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9, duration: 0.8 }}
                      className='flex flex-col sm:flex-row gap-4 justify-center hidden'
                    >
                      <Button
                        size='lg'
                        className='text-base px-6 py-3 bg-primary hover:bg-primary/90 backdrop-blur-sm'
                      >
                        {getText(
                          currentSlideData?.cta || {
                            en: 'Join Us',
                            te: 'మాతో చేరండి',
                          }
                        )}
                      </Button>
                      <Button
                        variant='outline'
                        size='lg'
                        className='text-base px-6 py-3 border-white/50 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm'
                      >
                        {currentLanguage === 'te'
                          ? 'మా గురించి తెలుసుకోండి'
                          : 'Learn More'}
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className='absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors'
        aria-label='Previous slide'
      >
        <ChevronLeft className='w-6 h-6' />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className='absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors'
        aria-label='Next slide'
      >
        <ChevronRight className='w-6 h-6' />
      </button>

      {/* Slide Indicators */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 max-w-lg overflow-x-auto px-4 hidden'>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
              index === currentSlide
                ? 'bg-white scale-150'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className='absolute top-8 left-8 z-20 text-white/80'>
        <span className='text-sm font-medium'>
          {currentSlide + 1} / {heroSlides.length}
        </span>
      </div>

      {/* Auto-play pause/play indicator */}
      <div className='absolute top-8 right-8 z-20'>
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className='p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors'
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? (
            <div className='w-4 h-4 flex space-x-1'>
              <div className='w-1.5 h-4 bg-white rounded-sm'></div>
              <div className='w-1.5 h-4 bg-white rounded-sm'></div>
            </div>
          ) : (
            <div className='w-4 h-4 border-l-4 border-white border-y-2 border-y-transparent border-r-0 ml-1'></div>
          )}
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className='absolute bottom-8 right-8 z-20 text-white/80'
      >
        <div className='flex flex-col items-center space-y-2'>
          <span className='text-sm font-medium'>
            {currentLanguage === 'te' ? 'క్రింద చూడండి' : 'Scroll Down'}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className='w-1 h-8 bg-white/50 rounded-full'
          />
        </div>
      </motion.div>
    </motion.section>
  )
}
