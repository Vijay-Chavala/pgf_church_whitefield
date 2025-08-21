'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Users,
  Heart,
  Video,
  Baby,
  ArrowRight,
  Clock,
  MapPin,
  User,
  Church,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useLanguageStore } from '@/lib/stores/language-store'
import { MainLayout } from '@/components/layout'

// Updated ministry data with correct timings and details
const ministriesData = [
  {
    id: 'sunday-service',
    icon: Church,
    title: {
      en: 'Sunday Service & Fellowship',
      te: 'ఆదివారం సేవ మరియు సహవాసం',
    },
    description: {
      en: 'Join us every Sunday for worship, fellowship, and spiritual growth. We have two services with Holy Communion on the 1st Sunday of each month.',
      te: 'ప్రతి ఆదివారం ఆరాధన, సహవాసం మరియు ఆధ్యాత్మిక వృద్ధి కోసం మాతో చేరండి. ప్రతి నెల మొదటి ఆదివారం పవిత్ర సంయోగంతో మాకు రెండు సేవలు ఉన్నాయి.',
    },
    meetingTime: {
      en: '1st Service: 9:00 AM - 10:30 AM | 2nd Service: 10:30 AM - 12:30 PM',
      te: '1వ సేవ: ఉదయం 9:00 - 10:30 | 2వ సేవ: ఉదయం 10:30 - మధ్యాహ్నం 12:30',
    },
    location: {
      en: 'Anugraha Hall, St. Joseph Convent School Campus',
      te: 'అనుగ్రహ హాల్, సెయింట్ జోసెఫ్ కాన్వెంట్ స్కూల్ క్యాంపస్',
    },
    leader: {
      en: 'Pastor Ravi Kumar & Hepsiba',
      te: 'పాస్టర్ రవి కుమార్ & హెప్సిబా',
    },
    members: 200,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'online-prayer',
    icon: Video,
    title: { en: 'Online Prayer Meetings', te: 'ఆన్‌లైన్ ప్రార్థనా సభలు' },
    description: {
      en: 'Connect with our community through online prayer meetings via Zoom. Join from anywhere for intercession and fellowship.',
      te: 'జూమ్ ద్వారా ఆన్‌లైన్ ప్రార్థనా సభలలో మా సమాజంతో అనుసంధానమవండి. ఎక్కడ నుండైనా మధ్యవర్తిత్వం మరియు సహవాసం కోసం చేరండి.',
    },
    meetingTime: {
      en: 'Wed: 6:00 AM - 7:00 AM | Sat: 8:00 PM - 9:00 PM | Fri: 9:00 PM - 10:00 PM (Youth)',
      te: 'బుధ: ఉదయం 6:00 - 7:00 | శని: రాత్రి 8:00 - 9:00 | శుక్ర: రాత్రి 9:00 - 10:00 (యువజన)',
    },
    location: {
      en: 'Online (Zoom)',
      te: 'ఆన్‌లైన్ (జూమ్)',
    },
    leader: { en: 'Pastor Ravi Kumar', te: 'పాస్టర్ రవి కుమార్' },
    members: 0, // Don't include member count as per instructions
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    borderColor: 'border-green-200',
  },
  {
    id: 'womens-ministry',
    icon: Heart,
    title: { en: "Women's Ministry", te: 'మహిళల సేవ' },
    description: {
      en: 'Building strong sisterhood through prayer, fellowship, and mutual support. Led by Sister Hepsiba with focus on spiritual growth.',
      te: 'ప్రార్థన, సహవాసం మరియు పరస్పర మద్దతు ద్వారా బలమైన సోదరత్వాన్ని నిర్మించడం. సిస్టర్ హెప్సిబా నేతృత్వంలో ఆధ్యాత్మిక వృద్ధిపై దృష్టి.',
    },
    meetingTime: {
      en: 'Every Friday 10:00 AM - 12:00 PM',
      te: 'ప్రతి శుక్రవారం ఉదయం 10:00 - మధ్యాహ్నం 12:00',
    },
    location: { en: 'PGF Telugu Church', te: 'పిజిఎఫ్ తెలుగు చర్చి' },
    leader: { en: 'Sister Hepsiba', te: 'సిస్టర్ హెప్సిబా' },
    members: 0, // Don't include member count as per instructions
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
    borderColor: 'border-pink-200',
  },
  {
    id: 'youth-ministry',
    icon: Users,
    title: { en: 'Youth Ministry', te: 'యువజన సేవ' },
    description: {
      en: 'Empowering young people to grow in faith and leadership through Christ-centered activities and fellowship. Led by Pastor Ravi Kumar and Hepsiba.',
      te: 'క్రీస్తు-కేంద్రిత కార్యకలాపాలు మరియు సహవాసం ద్వారా యువజనులను విశ్వాసం మరియు నాయకత్వంలో ఎదగడానికి శక్తివంతం చేయడం. పాస్టర్ రవి కుమార్ మరియు హెప్సిబా నేతృత్వంలో.',
    },
    meetingTime: {
      en: 'Every 1st Sunday 2:00 PM - 4:00 PM',
      te: 'ప్రతి 1వ ఆదివారం మధ్యాహ్నం 2:00 - 4:00',
    },
    location: { en: 'PGF Telugu Church', te: 'పిజిఎఫ్ తెలుగు చర్చి' },
    leader: {
      en: 'Pastor Ravi Kumar & Hepsiba',
      te: 'పాస్టర్ రవి కుమార్ & హెప్సిబా',
    },
    members: 50,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-gradient-to-br from-purple-50 to-violet-50',
    borderColor: 'border-purple-200',
  },
  {
    id: 'sunday-school',
    icon: Baby,
    title: {
      en: 'Sunday School & Kids Ministry',
      te: 'ఆదివారం పాఠశాల & పిల్లల సేవ',
    },
    description: {
      en: "Creating a safe, fun environment where children learn about God's love through age-appropriate activities during Sunday services.",
      te: 'ఆదివారం సేవల సమయంలో వయస్సుకు తగిన కార్యకలాపాల ద్వారా పిల్లలు దేవుని ప్రేమ గురించి నేర్చుకోవడానికి సురక్షితమైన, ఆనందకరమైన వాతావరణాన్ని సృష్టించడం.',
    },
    meetingTime: {
      en: 'During Sunday Services',
      te: 'ఆదివారం సేవల సమయంలో',
    },
      location: { en: 'Kids Hall (Anugraha Hall)', te: 'పిల్లల హాల్ (అనుగ్రహ హాల్)' },
    leader: { en: 'Sunday School Teachers', te: 'ఆదివారం పాఠశాల ఉపాధ్యాయులు' },
    members: 50,
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
    borderColor: 'border-yellow-200',
  },
]

export function MinistriesPage() {
  const { currentLanguage } = useLanguageStore()

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  const seoConfig = {
    title: getText({
      en: 'Ministries - PGF Telugu Church',
      te: 'పరిచర్యలు - పిజిఎఫ్ తెలుగు చర్చి',
    }),
    description: getText({
      en: 'Discover our various ministries and programs designed to foster spiritual growth for every age and life stage.',
      te: 'ప్రతి వయస్సు మరియు జీవిత దశకు ఆధ్యాత్మిక వృద్ధిని ప్రోత్సహించడానికి రూపొందించిన మా వివిధ పరిచర్యలు మరియు కార్యక్రమాలను కనుగొనండి.',
    }),
    keywords: [
      'Telugu Church Ministries',
      'Bangalore Church Programs',
      'Youth Ministry',
      'Women Ministry',
      'Sunday School',
      'Online Prayer Meeting',
    ],
  }

  return (
    <MainLayout seo={seoConfig}>
      <div className='min-h-screen bg-gradient-to-br from-background to-muted/30'>
        {/* Header Section */}
        <section className='py-20 px-4'>
          <div className='container mx-auto max-w-7xl'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='text-center mb-16'
            >
              <h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>
                {currentLanguage === 'te' ? 'మా పరిచర్యలు' : 'Our Ministries'}
              </h1>
              <p className='text-xl text-muted-foreground max-w-4xl mx-auto'>
                {currentLanguage === 'te'
                  ? 'ప్రతి వయస్సు మరియు జీవిత దశకు వేర్వేరు పరిచర్యలు మరియు కార్యక్రమాల ద్వారా ఆధ్యాత్మిక వృద్ధిని ప్రోత్సహిస్తున్నాము'
                  : 'Fostering spiritual growth through diverse ministries and programs for every age and life stage'}
              </p>
            </motion.div>

            {/* Ministries Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {ministriesData.map((ministry, index) => (
                <motion.div
                  key={ministry.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card
                    className={`h-full overflow-hidden py-5 hover:shadow-xl transition-all duration-300 group ${ministry.bgColor} ${ministry.borderColor} border-2`}
                  >
                    <CardHeader className='pb-3'>
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${ministry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <ministry.icon className='w-8 h-8 text-white' />
                      </div>
                      <CardTitle className='text-xl font-bold mb-3'>
                        {getText(ministry.title)}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className='pt-0 space-y-4'>
                      <p className='text-sm text-muted-foreground line-clamp-3'>
                        {getText(ministry.description)}
                      </p>

                      <div className='space-y-2 text-xs text-muted-foreground'>
                        <div className='flex items-center gap-2'>
                          <Clock className='w-3 h-3' />
                          <span>{getText(ministry.meetingTime)}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <MapPin className='w-3 h-3' />
                          <span>{getText(ministry.location)}</span>
                        </div>
                        {ministry.members > 0 ? (
                          <div className='flex items-center gap-2'>
                            <Users className='w-3 h-3' />
                            <span>
                              {ministry.members}{' '}
                              {currentLanguage === 'te' ? 'సభ్యులు' : 'members'}
                            </span>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>

                      <div className='pt-2 border-t border-gray-200'>
                        <div className='flex items-center gap-2 text-xs'>
                          <User className='w-3 h-3 text-primary' />
                          <span className='font-medium'>
                            {getText(ministry.leader)}
                          </span>
                        </div>
                      </div>

                      <Button asChild size='sm' className='w-full mt-4'>
                        <Link
                          href={`/ministries/${ministry.id}`}
                          className='flex items-center justify-center gap-2'
                        >
                          {currentLanguage === 'te'
                            ? 'మరింత తెలుసుకోండి'
                            : 'Learn More'}
                          <ArrowRight className='w-3 h-3' />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='mt-20 text-center'
            >
              <Card className='p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20'>
                <h3 className='text-2xl font-bold text-foreground mb-4'>
                  {currentLanguage === 'te'
                    ? 'ఏదైనా పరిచర్యలో పాల్గొనాలనుకుంటున్నారా?'
                    : 'Want to Get Involved in Any Ministry?'}
                </h3>
                <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
                  {currentLanguage === 'te'
                    ? 'మీ ఆసక్తులకు మరియు వేలంట్లకు తగిన పరిచర్యను కనుగొనండి. మేము మిమ్మల్ని స్వాగతిస్తున్నాము!'
                    : 'Find the ministry that matches your interests and talents. We welcome you to join us!'}
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Button asChild size='lg' className='text-lg px-8 py-3'>
                    <Link href='tel:7204074515'>
                      {currentLanguage === 'te'
                        ? 'ఇప్పుడే కాల్ చేయండి'
                        : 'Call Now'}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant='outline'
                    size='lg'
                    className='text-lg px-8 py-3'
                  >
                    <Link href='/contact'>
                      {currentLanguage === 'te' ? 'సంప్రదింపు' : 'Contact Us'}
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
