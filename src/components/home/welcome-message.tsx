'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, Users, BookOpen, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguageStore } from '@/lib/stores/language-store'

export function WelcomeMessage() {
  const { currentLanguage } = useLanguageStore()

  const getText = (textObj: { en: string; te: string }) => {
    return textObj[currentLanguage] || textObj.en
  }

  const welcomeContent = {
    title: {
      en: 'Welcome to PGF Church',
      te: 'PGF చర్చికి స్వాగతం',
    },
    subtitle: {
      en: "Discover Your Purpose in God's Loving Community",
      te: 'దేవుని ప్రేమగల సమాజంలో మీ లక్ష్యాన్ని కనుగొనండి',
    },
    description: {
      en: "At PGF Church, we're thrilled to welcome you into our loving community. Led by Pastor Ravi Kumar and Hepsiba, we're dedicated to creating a space where you can encounter the presence of God and discover your true purpose.",
      te: 'PGF చర్చిలో, మేము మిమ్మల్ని మా ప్రేమగల సమాజంలోకి స్వాగతం చేయడంలో చాలా సంతోషిస్తున్నాము. పాస్టర్ రవి కుమార్ మరియు హెప్సిబా నేతృత్వంలో, మేము మీరు దేవుని ఉపస్థితిని అనుభవించగలిగే మరియు మీ నిజమైన లక్ష్యాన్ని కనుగొనగలిగే స్థలాన్ని సృష్టించడానికి అంకితం చేసుకున్నాము.',
    },
    history: {
      en: 'PGF Church is an independent faith ministry founded on 7th June 1978 by Dr. K. Nireekshana Paul.',
      te: 'PGF చర్చి అనేది డా. కె. నిరీక్షణ పాల్ చేత 1978 జూన్ 7న స్థాపించబడిన స్వతంత్ర విశ్వాస సేవ.',
    },
    mission: {
      en: "Just as the Bible promises, we believe that when you become part of the family of God, you'll experience a flourishing life. Whether you're joining us in person or connecting online, get ready to elevate your spiritual journey and step into a new level of destiny.",
      te: 'బైబిల్ వాగ్దానం చేసినట్లుగా, మీరు దేవుని కుటుంబంలో భాగం అయినప్పుడు, మీరు వర్ధిల్లుతున్న జీవితాన్ని అనుభవిస్తారని మేము నమ్ముతున్నాము. మీరు వ్యక్తిగతంగా మాతో చేరినా లేదా ఆన్‌లైన్‌లో కనెక్ట్ అయినా, మీ ఆధ్యాత్మిక ప్రయాణాన్ని మెరుగుపరచడానికి మరియు విధి యొక్క కొత్త స్థాయిలోకి అడుగుపెట్టడానికి సిద్ధం అవండి.',
    },
    features: [
      {
        icon: Heart,
        title: {
          en: 'Loving Community',
          te: 'ప్రేమగల సమాజం',
        },
        description: {
          en: "Experience genuine fellowship and encounter God's presence",
          te: 'నిజమైన సహవాసం మరియు దేవుని ఉపస్థితిని అనుభవించండి',
        },
      },
      {
        icon: Users,
        title: {
          en: 'Pastoral Care',
          te: 'పాస్టరల్ శ్రద్ధ',
        },
        description: {
          en: 'Guided by Pastor Ravi Kumar and Hepsiba',
          te: 'పాస్టర్ రవి కుమార్ మరియు హెప్సిబా మార్గదర్శకత్వం',
        },
      },
      {
        icon: BookOpen,
        title: {
          en: 'Spiritual Growth',
          te: 'ఆధ్యాత్మిక వృద్ధి',
        },
        description: {
          en: 'Discover your true purpose and elevate your spiritual journey',
          te: 'మీ నిజమైన లక్ష్యాన్ని కనుగొనండి మరియు మీ ఆధ్యాత్మిక ప్రయాణాన్ని మెరుగుపరచండి',
        },
      },
      {
        icon: Calendar,
        title: {
          en: 'Legacy Ministry',
          te: 'వారసత్వ సేవ',
        },
        description: {
          en: 'Independent faith ministry since 1978',
          te: '1978 నుండి స్వతంత్ర విశ్వాస సేవ',
        },
      },
    ],
  }

  return (
    <section className='py-8 px-2 bg-gradient-to-br from-background via-muted/30 to-background'>
      <div className='container mx-auto max-w-full'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-8'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            {getText(welcomeContent.title)}
          </h2>
          <p className='text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto'>
            {getText(welcomeContent.subtitle)}
          </p>
        </motion.div>

        {/* Main Content with Images - No Overlay Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_4fr_1fr] gap-4 items-start'>
          {/* Left Image - Pas.K.Nireekshana Paul (Founder) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='hidden lg:block text-center'
          >
            <div className='relative w-full h-72 mx-auto mb-2'>
              <Image
                src='/images/welcome/Ayyagaru.webp'
                alt='Pas.K.Nireekshana Paul - Founder of Peniel Gospel Fellowship'
                fill
                className='object-contain rounded-xl shadow-xl border-2 border-white'
                sizes='(max-width: 768px) 100vw, 300px'
              />
            </div>
            <div className='mt-1'>
              <h5 className='text-base font-semibold text-foreground mb-1'>
                Pas.K.Nireekshana Paul
              </h5>
              <p className='text-xs text-muted-foreground'>
                Founder of Peniel Gospel Fellowship
              </p>
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='lg:col-span-1'
          >
            <div className='bg-card/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl border border-border'>
              <div className='prose prose-lg max-w-none text-center'>
                <p className='text-base text-card-foreground leading-relaxed mb-4'>
                  {getText(welcomeContent.description)}
                </p>

                <p className='text-sm text-muted-foreground leading-relaxed mb-4 italic'>
                  {getText(welcomeContent.history)}
                </p>

                <p className='text-base text-card-foreground leading-relaxed mb-6'>
                  {getText(welcomeContent.mission)}
                </p>
              </div>

              {/* Call to Action */}
              <div className='flex flex-col sm:flex-row gap-3 justify-center pt-4 hidden'>
                <Button asChild size='default' className='text-sm px-6 py-2'>
                  <Link href='/ministries' className='flex items-center gap-2'>
                    {currentLanguage === 'te'
                      ? 'మా పరిచర్యలు చూడండి'
                      : 'View Our Ministries'}
                    <ArrowRight className='w-4 h-4' />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant='outline'
                  size='default'
                  className='text-sm px-6 py-2'
                >
                  <Link href='/gallery'>
                    {currentLanguage === 'te'
                      ? 'గ్యాలరీ చూడండి'
                      : 'View Gallery'}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Image - Pas.D.Ravi Kumar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='hidden lg:block text-center'
          >
            <div className='relative w-full h-72 mx-auto mb-2'>
              <Image
                src='/images/welcome/RaviAnna.webp'
                alt='Pas.D.Ravi Kumar - PGF Telugu Church Banglore'
                fill
                className='object-contain rounded-xl shadow-xl border-2 border-white'
                sizes='(max-width: 768px) 100vw, 300px'
              />
            </div>
            <div className='mt-1'>
              <h5 className='text-base font-semibold text-foreground mb-1'>
                Pas.D.Ravi Kumar
              </h5>
              <p className='text-xs text-muted-foreground'>
                PGF Telugu Church Banglore
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile Images - Shown on smaller screens */}
        <div className='lg:hidden mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='text-center'
          >
            <div className='relative w-48 h-56 mx-auto mb-2'>
              <Image
                src='/images/welcome/Ayyagaru.webp'
                alt='Pas.K.Nireekshana Paul - Founder of Peniel Gospel Fellowship'
                fill
                className='object-contain rounded-xl shadow-xl border-2 border-white'
                sizes='(max-width: 768px) 200px, 160px'
              />
            </div>
            <div className='mt-1'>
              <h5 className='text-base font-semibold text-foreground mb-1'>
                Pas.K.Nireekshana Paul
              </h5>
              <p className='text-xs text-muted-foreground'>
                Founder of Peniel Gospel Fellowship
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className='text-center'
          >
            <div className='relative w-48 h-56 mx-auto mb-2'>
              <Image
                src='/images/welcome/RaviAnna.webp'
                alt='Pas.D.Ravi Kumar - PGF Telugu Church Banglore'
                fill
                className='object-contain rounded-xl shadow-xl border-2 border-white'
                sizes='(max-width: 768px) 200px, 160px'
              />
            </div>
            <div className='mt-1'>
              <h5 className='text-base font-semibold text-foreground mb-1'>
                Pas.D.Ravi Kumar
              </h5>
              <p className='text-xs text-muted-foreground'>
                PGF Telugu Church Banglore
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
        >
          {welcomeContent.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
            >
              <Card className='hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary h-full'>
                <CardContent className='p-4'>
                  <div className='flex items-start space-x-3'>
                    <div className='flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center'>
                      <feature.icon className='w-5 h-5 text-primary' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-base font-semibold text-foreground mb-1'>
                        {getText(feature.title)}
                      </h3>
                      <p className='text-xs text-muted-foreground'>
                        {getText(feature.description)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className='mt-8 pt-8 border-t border-border'
        >
          <div className='grid grid-cols-2 md:grid-cols-2 gap-4 text-center'>
            {[
              /*  {
                number: '46+',
                label: { en: 'Years of Ministry', te: 'సంవత్సరాల సేవ' },
              }, */
              {
                number: '300+',
                label: { en: 'Church Members', te: 'చర్చి సభ్యులు' },
              },
              {
                number: '75+',
                label: { en: 'Families', te: 'కుటుంబాలు' },
              },
              /* {
                number: '20+',
                label: { en: 'Ministries', te: 'సేవలు' },
              }, */
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                className='space-y-1'
              >
                <div className='text-2xl md:text-3xl font-bold text-primary'>
                  {stat.number}
                </div>
                <div className='text-xs md:text-sm text-muted-foreground'>
                  {getText(stat.label)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
