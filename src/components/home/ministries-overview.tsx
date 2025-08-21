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

// Ministry data with actual church ministries
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
    activities: {
      en: [
        'Worship Service',
        'Holy Communion (1st Sunday)',
        'Bible Teaching',
        'Fellowship Time',
      ],
      te: [
        'ఆరాధన సేవ',
        'పవిత్ర కమ్యూనియన్ (1వ ఆదివారం)',
        'బైబిల్ బోధన',
        'సహవాస సమయం',
      ],
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
    title: {
      en: 'Online Prayer Meetings',
      te: 'ఆన్‌లైన్ ప్రార్థనా సభలు',
    },
    description: {
      en: 'Connect with our community through online prayer meetings via Zoom. Join us for intercession, praise, and spiritual fellowship from the comfort of your home.',
      te: 'జూమ్ ద్వారా ఆన్‌లైన్ ప్రార్థనా సభలలో మా సమాజంతో అనుసంధానమవండి. మీ ఇంటి వసతిలో నుండి మధ్యవర్తిత్వం, స్తుతి మరియు ఆధ్యాత్మిక సహవాసం కోసం మాతో చేరండి.',
    },
    activities: {
      en: [
        'Intercession Prayer',
        'Praise & Worship',
        'Testimony Sharing',
        'Bible Study',
      ],
      te: [
        'మధ్యవర్తిత్వ ప్రార్థన',
        'స్తుతి & ఆరాధన',
        'సాక్ష్యాల పంచుకోవడం',
        'బైబిల్ అధ్యయనం',
      ],
    },
    meetingTime: {
      en: 'Wed: 6:00 AM - 7:00 AM | Sat: 8:00 PM - 9:00 PM | Fri: 9:00 PM - 10:00 PM (Youth)',
      te: 'బుధ: ఉదయం 6:00 - 7:00 | శని: రాత్రి 8:00 - 9:00 | శుక్ర: రాత్రి 9:00 - 10:00 (యువజన)',
    },
    location: {
      en: 'Online (Zoom)',
      te: 'ఆన్‌లైన్ (జూమ్)',
    },
    leader: {
      en: 'Pastor Ravi Kumar',
      te: 'పాస్టర్ రవి కుమార్',
    },
    members: 0, // Don't include member count as per instructions
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    borderColor: 'border-green-200',
  },
  {
    id: 'womens-ministry',
    icon: Heart,
    title: {
      en: "Women's Ministry",
      te: 'మహిళల సేవ',
    },
    description: {
      en: 'Building strong sisterhood through prayer, fellowship, and mutual support. We focus on spiritual growth, family life, and community outreach led by Sister Hepsiba.',
      te: 'ప్రార్థన, సహవాసం మరియు పరస్పర మద్దతు ద్వారా బలమైన సోదరత్వాన్ని నిర్మించడం. సిస్టర్ హెప్సిబా నేతృత్వంలో మేము ఆధ్యాత్మిక వృద్ధి, కుటుంబ జీవితం మరియు సమాజ సేవపై దృష్టి సారిస్తాము.',
    },
    activities: {
      en: [
        "Women's Fellowship",
        'Prayer Circles',
        'Bible Study',
        'Family Support',
      ],
      te: [
        'మహిళల సహవాసం',
        'ప్రార్థనా వృత్తాలు',
        'బైబిల్ అధ్యయనం',
        'కుటుంబ మద్దతు',
      ],
    },
    meetingTime: {
      en: 'Every Friday 10:00 AM - 12:00 PM',
      te: 'ప్రతి శుక్రవారం ఉదయం 10:00 - మధ్యాహ్నం 12:00',
    },
    location: {
      en: 'PGF Telugu Church',
      te: 'పిజిఎఫ్ తెలుగు చర్చి',
    },
    leader: {
      en: 'Sister Hepsiba',
      te: 'సిస్టర్ హెప్సిబా',
    },
    members: 0, // Don't include member count as per instructions
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
    borderColor: 'border-pink-200',
  },
  {
    id: 'youth-ministry',
    icon: Users,
    title: {
      en: 'Youth Ministry',
      te: 'యువజన సేవ',
    },
    description: {
      en: 'Empowering young people to grow in faith and leadership through Christ-centered activities and fellowship. Led by Pastor Ravi Kumar and Hepsiba.',
      te: 'క్రీస్తు-కేంద్రిత కార్యకలాపాలు మరియు సహవాసం ద్వారా యువజనులను విశ్వాసం మరియు నాయకత్వంలో ఎదగడానికి శక్తివంతం చేయడం. పాస్టర్ రవి కుమార్ మరియు హెప్సిబా నేతృత్వంలో.',
    },
    activities: {
      en: [
        'Youth Fellowship',
        'Bible Studies',
        'Community Service',
        'Leadership Training',
      ],
      te: ['యువజన సహవాసం', 'బైబిల్ అధ్యయనాలు', 'సమాజ సేవ', 'నాయకత్వ శిక్షణ'],
    },
    meetingTime: {
      en: 'Every 1st Sunday 2:00 PM - 4:00 PM',
      te: 'ప్రతి 1వ ఆదివారం మధ్యాహ్నం 2:00 - 4:00',
    },
    location: {
      en: 'PGF Telugu Church',
      te: 'పిజిఎఫ్ తెలుగు చర్చి',
    },
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
      en: "Creating a safe, fun, and nurturing environment where children can learn about God's love through age-appropriate activities, songs, and Bible stories during Sunday services.",
      te: 'ఆదివారం సేవల సమయంలో వయస్సుకు తగిన కార్యకలాపాలు, పాటలు మరియు బైబిల్ కథల ద్వారా పిల్లలు దేవుని ప్రేమ గురించి నేర్చుకోవడానికి సురక్షితమైన, ఆనందకరమైన మరియు పోషణాత్మక వాతావరణాన్ని సృష్టించడం.',
    },
    activities: {
      en: [
        'Sunday School',
        'Kids Worship',
        'Bible Stories',
        'Creative Activities',
      ],
      te: [
        'ఆదివారం పాఠశాల',
        'పిల్లల ఆరాధన',
        'బైబిల్ కథలు',
        'సృజనాత్మక కార్యకలాపాలు',
      ],
    },
    meetingTime: {
      en: 'During Sunday Services',
      te: 'ఆదివారం సేవల సమయంలో',
    },
    location: {
      en: 'Kids Hall (Anugraha Hall)',
      te: 'పిల్లల హాల్ (అనుగ్రహ హాల్)',
    },
    leader: {
      en: 'Sunday School Teachers',
      te: 'ఆదివారం పాఠశాల ఉపాధ్యాయులు',
    },
    members: 50,
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
    borderColor: 'border-yellow-200',
  },
]

export function MinistriesOverview() {
  const { currentLanguage } = useLanguageStore()

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  const getArrayText = (arrayObj: { en: string[]; te: string[] }) => {
    return arrayObj[currentLanguage] || arrayObj.en
  }

  return (
    <section className='py-5 px-4 bg-muted/20'>
      <div className='container mx-auto max-w-7xl'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            {currentLanguage === 'te' ? 'మా సేవలు' : 'Our Ministries'}
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            {currentLanguage === 'te'
              ? 'ప్రతి వయస్సు మరియు జీవిత దశకు వేర్వేరు సేవలు మరియు కార్యక్రమాల ద్వారా ఆధ్యాత్మిక వృద్ధిని ప్రోత్సహిస్తున్నాము'
              : 'Fostering spiritual growth through diverse ministries and programs for every age and life stage'}
          </p>
        </motion.div>

        {/* Ministries Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {ministriesData.map((ministry, index) => (
            <motion.div
              key={ministry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card
                className={`h-full overflow-hidden py-4 hover:shadow-xl transition-all duration-300 group ${ministry.bgColor} ${ministry.borderColor} border-2`}
              >
                <CardHeader className='pb-3'>
                  {/* Ministry Icon */}
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
                  {/* Description */}
                  <p className='text-sm text-muted-foreground line-clamp-3'>
                    {getText(ministry.description)}
                  </p>

                  {/* Key Activities */}
                  <div>
                    <h4 className='text-sm font-semibold mb-2 text-foreground'>
                      {currentLanguage === 'te'
                        ? 'ముఖ్య కార్యకలాపాలు:'
                        : 'Key Activities:'}
                    </h4>
                    <div className='flex flex-wrap gap-1'>
                      {getArrayText(ministry.activities)
                        .slice(0, 3)
                        .map((activity, actIndex) => (
                          <Badge
                            key={actIndex}
                            variant='outline'
                            className='text-xs'
                          >
                            {activity}
                          </Badge>
                        ))}
                      {getArrayText(ministry.activities).length > 3 && (
                        <Badge variant='outline' className='text-xs'>
                          +{getArrayText(ministry.activities).length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Meeting Details */}
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

                  {/* Leader */}
                  <div className='pt-2 border-t border-gray-200'>
                    <div className='flex items-center gap-2 text-xs'>
                      <User className='w-3 h-3 text-primary' />
                      <span className='font-medium'>
                        {getText(ministry.leader)}
                      </span>
                    </div>
                  </div>

                  {/* Learn More Button */}
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

        {/* Ministry Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 hidden'
        >
          <Card className='p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20'>
            <h3 className='text-2xl font-bold text-primary mb-2'>335+</h3>
            <p className='text-sm text-muted-foreground'>
              {currentLanguage === 'te' ? 'సక్రియ సభ్యులు' : 'Active Members'}
            </p>
          </Card>

          <Card className='p-6 text-center bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20'>
            <h3 className='text-2xl font-bold text-secondary-foreground mb-2'>
              5
            </h3>
            <p className='text-sm text-muted-foreground'>
              {currentLanguage === 'te' ? 'ముఖ్య సేవలు' : 'Core Ministries'}
            </p>
          </Card>

          <Card className='p-6 text-center bg-gradient-to-br from-muted/5 to-muted/10 border-muted/20'>
            <h3 className='text-2xl font-bold text-muted-foreground mb-2'>
              24/7
            </h3>
            <p className='text-sm text-muted-foreground'>
              {currentLanguage === 'te' ? 'ప్రార్థనా మద్దతు' : 'Prayer Support'}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
