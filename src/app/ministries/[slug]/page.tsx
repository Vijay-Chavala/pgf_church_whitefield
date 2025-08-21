import { notFound } from 'next/navigation'
import { MinistryDetailPage } from '@/components/ministries/ministry-detail-page'

// Ministry data with updated timings and details
const ministriesData = {
  'sunday-service': {
    id: 'sunday-service',
    title: {
      en: 'Sunday Service & Fellowship',
      te: 'ఆదివారం సేవ మరియు సహవాసం',
    },
    description: {
      en: 'Join us every Sunday for worship, fellowship, and spiritual growth. We have two services with Holy Communion on the 1st Sunday of each month.',
      te: 'ప్రతి ఆదివారం ఆరాధన, సహవాసం మరియు ఆధ్యాత్మిక వృద్ధి కోసం మాతో చేరండి. ప్రతి నెల మొదటి ఆదివారం పవిత్ర సంయోగంతో మాకు రెండు సేవలు ఉన్నాయి.',
    },
    services: [
      {
        name: { en: '1st Service', te: '1వ సేవ' },
        time: { en: '9:00 AM - 10:30 AM', te: 'ఉదయం 9:00 - 10:30' },
        location: {
          en: 'Peniel Gospel Fellowship Telugu Church\nAnugraha Hall, St. Joseph Convent School Campus\nOpp: YEZDI SHOW ROOM, Near Whitefield Police Station\nClose to HOPE FARM METRO STATION\nWhitefield, Bangalore-560066',
          te: 'పెనీయేల్ గాస్పెల్ ఫెలోషిప్ తెలుగు చర్చి\nఅనుగ్రహ హాల్, సెయింట్ జోసెఫ్ కాన్వెంట్ స్కూల్ క్యాంపస్\nవైట్‌ఫీల్డ్, బెంగళూరు-560066',
        },
      },
      {
        name: { en: '2nd Service', te: '2వ సేవ' },
        time: { en: '10:30 AM - 12:30 PM', te: 'ఉదయం 10:30 - మధ్యాహ్నం 12:30' },
        location: {
          en: 'Peniel Gospel Fellowship Telugu Church\nAnugraha Hall, St. Joseph Convent School Campus\nOpp: YEZDI SHOW ROOM, Near Whitefield Police Station\nClose to HOPE FARM METRO STATION\nWhitefield, Bangalore-560066',
          te: 'పెనీయేల్ గాస్పెల్ ఫెలోషిప్ తెలుగు చర్చి\nఅనుగ్రహ హాల్, సెయింట్ జోసెఫ్ కాన్వెంట్ స్కూల్ క్యాంపస్\nవైట్‌ఫీల్డ్, బెంగళూరు-560066',
        },
      },
    ],
    activities: {
      en: [
        'Worship Service',
        'Holy Communion',
        'Bible Teaching',
        'Fellowship Time',
        'Prayer Ministry',
      ],
      te: [
        'ఆరాధన సేవ',
        'పవిత్ర కమ్యూనియన్',
        'బైబిల్ బోధన',
        'సహవాస సమయం',
        'ప్రార్థనా సేవ',
      ],
    },
    leaders: {
      en: 'Pastor Ravi Kumar & Hepsiba',
      te: 'పాస్టర్ రవి కుమార్ & హెప్సిబా',
    },
    contact: {
      phone: '7204074515 / 9845754515',
      whatsapp: '7204074515 / 9845754515',
      email: 'pgf.prayerrequests@gmail.com',
    },
  },
  'online-prayer': {
    id: 'online-prayer',
    title: {
      en: 'Online Prayer Meeting',
      te: 'ఆన్‌లైన్ ప్రార్థనా సభ',
    },
    description: {
      en: 'Connect with our community through online prayer meetings via Zoom. Join us for intercession, praise, and spiritual fellowship from anywhere.',
      te: 'జూమ్ ద్వారా ఆన్‌లైన్ ప్రార్థనా సభలలో మా సమాజంతో అనుసంధానమవండి. ఎక్కడ నుండైనా మధ్యవర్తిత్వం, స్తుతి మరియు ఆధ్యాత్మిక సహవాసం కోసం మాతో చేరండి.',
    },
    services: [
      {
        name: { en: 'Wednesday Prayer Meeting', te: 'బుధవారం ప్రార్థనా సభ' },
        time: { en: '6:00 AM - 7:00 AM', te: 'ఉదయం 6:00 - 7:00' },
        location: { en: 'Online (Zoom)', te: 'ఆన్‌లైన్ (జూమ్)' },
      },
      {
        name: { en: 'Saturday Prayer Meeting', te: 'శనివారం ప్రార్థనా సభ' },
        time: { en: '8:00 PM - 9:00 PM', te: 'రాత్రి 8:00 - 9:00' },
        location: { en: 'Online (Zoom)', te: 'ఆన్‌లైన్ (జూమ్)' },
      },
      {
        name: { en: 'Friday Youth Fellowship', te: 'శుక్రవారం యువజన సహవాసం' },
        time: { en: '9:00 PM - 10:00 PM', te: 'రాత్రి 9:00 - 10:00' },
        location: { en: 'Online (Zoom)', te: 'ఆన్‌లైన్ (జూమ్)' },
      },
    ],
    activities: {
      en: [
        'Intercession Prayer',
        'Praise & Worship',
        'Testimony Sharing',
        'Bible Study',
        'Personal Prayer',
      ],
      te: [
        'మధ్యవర్తిత్వ ప్రార్థన',
        'స్తుతి & ఆరాధన',
        'సాక్ష్యాల పంచుకోవడం',
        'బైబిల్ అధ్యయనం',
        'వ్యక్తిగత ప్రార్థన',
      ],
    },
    leaders: {
      en: 'Pastor Ravi Kumar',
      te: 'పాస్టర్ రవి కుమార్',
    },
    zoomDetails: {
      id: '3353743463',
      password: '777',
    },
    contact: {
      phone: '7204074515 / 9845754515',
      whatsapp: '7204074515 / 9845754515',
      email: 'pgf.prayerrequests@gmail.com',
    },
  },
  'youth-ministry': {
    id: 'youth-ministry',
    title: {
      en: 'Youth Ministry',
      te: 'యువజన సేవ',
    },
    description: {
      en: 'Empowering young people to grow in faith, develop leadership skills, and make a positive impact in their communities through Christ-centered activities.',
      te: 'క్రీస్తు-కేంద్రిత కార్యకలాపాల ద్వారా యువజనులను విశ్వాసంలో ఎదగడానికి, నాయకత్వ నైపుణ్యాలను అభివృద్ధి చేయడానికి మరియు వారి సమాజాలలో సానుకూల ప్రభావం చూపడానికి శక్తివంతం చేయడం.',
    },
    services: [
      {
        name: { en: 'Youth Fellowship', te: 'యువజన సహవాసం' },
        time: {
          en: 'Every 1st Sunday 2:00 PM - 4:00 PM',
          te: 'ప్రతి 1వ ఆదివారం మధ్యాహ్నం 2:00 - 4:00',
        },
        location: {
          en: 'Peniel Gospel Fellowship Telugu Church\nWhitefield, Bangalore',
          te: 'పెనీయేల్ గాస్పెల్ ఫెలోషిప్ తెలుగు చర్చి\nవైట్‌ఫీల్డ్, బెంగళూరు',
        },
      },
    ],
    activities: {
      en: [
        'Youth Fellowship',
        'Bible Studies',
        'Community Service',
        'Leadership Training',
        'Youth Camps',
        'Music Ministry',
      ],
      te: [
        'యువజన సహవాసం',
        'బైబిల్ అధ్యయనాలు',
        'సమాజ సేవ',
        'నాయకత్వ శిక్షణ',
        'యువజన శిబిరాలు',
        'సంగీత సేవ',
      ],
    },
    leaders: {
      en: 'Youth Pastor',
      te: 'యువజన పాస్టర్',
    },
    contact: {
      phone: '7204074515 / 9845754515',
      whatsapp: '7204074515 / 9845754515',
      email: 'pgf.prayerrequests@gmail.com',
    },
  },
  'womens-ministry': {
    id: 'womens-ministry',
    title: {
      en: "Women's Ministry",
      te: 'మహిళల సేవ',
    },
    description: {
      en: 'Building strong sisterhood through prayer, fellowship, and mutual support. Led by Sister Hepsiba, we focus on spiritual growth and family life.',
      te: 'ప్రార్థన, సహవాసం మరియు పరస్పర మద్దతు ద్వారా బలమైన సోదరత్వాన్ని నిర్మించడం. సిస్టర్ హెప్సిబా నేతృత్వంలో మేము ఆధ్యాత్మిక వృద్ధి మరియు కుటుంబ జీవితంపై దృష్టి సారిస్తాము.',
    },
    services: [
      {
        name: { en: "Women's Fellowship", te: 'మహిళల సహవాసం' },
        time: {
          en: 'Every Friday 10:00 AM - 12:00 PM',
          te: 'ప్రతి శుక్రవారం ఉదయం 10:00 - మధ్యాహ్నం 12:00',
        },
        location: {
          en: 'Peniel Gospel Fellowship Telugu Church\nWhitefield, Bangalore',
          te: 'పెనీయేల్ గాస్పెల్ ఫెలోషిప్ తెలుగు చర్చి\nవైట్‌ఫీల్డ్, బెంగళూరు',
        },
      },
    ],
    activities: {
      en: [
        "Women's Fellowship",
        'Prayer Circles',
        'Bible Study',
        'Family Support',
        'Community Service',
        'Cooking Ministry',
      ],
      te: [
        'మహిళల సహవాసం',
        'ప్రార్థనా వృత్తాలు',
        'బైబిల్ అధ్యయనం',
        'కుటుంబ మద్దతు',
        'సమాజ సేవ',
        'వంట సేవ',
      ],
    },
    leaders: {
      en: 'Sister Hepsiba',
      te: 'సిస్టర్ హెప్సిబా',
    },
    contact: {
      phone: '7204074515 / 9845754515',
      whatsapp: '7204074515 / 9845754515',
      email: 'pgf.prayerrequests@gmail.com',
    },
  },
  'sunday-school': {
    id: 'sunday-school',
    title: {
      en: 'Sunday School & Kids Ministry',
      te: 'ఆదివారం పాఠశాల & పిల్లల సేవ',
    },
    description: {
      en: "Creating a safe, fun, and nurturing environment where children can learn about God's love through age-appropriate activities during Sunday services.",
      te: 'ఆదివారం సేవల సమయంలో వయస్సుకు తగిన కార్యకలాపాల ద్వారా పిల్లలు దేవుని ప్రేమ గురించి నేర్చుకోవడానికి సురక్షితమైన, ఆనందకరమైన మరియు పోషణాత్మక వాతావరణాన్ని సృష్టించడం.',
    },
    services: [
      {
        name: { en: 'Sunday School', te: 'ఆదివారం పాఠశాల' },
        time: {
          en: 'During Sunday Services',
          te: 'ఆదివారం సేవల సమయంలో',
        },
        location: {
          en: 'Kids Hall (Anugraha Hall)\nPeniel Gospel Fellowship Telugu Church\nWhitefield, Bangalore',
          te: 'పిల్లల హాల్ (అనుగ్రహ హాల్)\nపెనీయేల్ గాస్పెల్ ఫెలోషిప్ తెలుగు చర్చి\nవైట్‌ఫీల్డ్, బెంగళూరు',
        },
      },
    ],
    activities: {
      en: [
        'Sunday School',
        'Kids Worship',
        'Bible Stories',
        'Creative Activities',
        'Games & Songs',
        'Character Building',
      ],
      te: [
        'ఆదివారం పాఠశాల',
        'పిల్లల ఆరాధన',
        'బైబిల్ కథలు',
        'సృజనాత్మక కార్యకలాపాలు',
        'ఆటలు & పాటలు',
        'సున్నిత నిర్మాణం',
      ],
    },
    leaders: {
      en: 'Sunday School Teachers',
      te: 'ఆదివారం పాఠశాల ఉపాధ్యాయులు',
    },
    contact: {
      phone: '7204074515 / 9845754515',
      whatsapp: '7204074515 / 9845754515',
      email: 'pgf.prayerrequests@gmail.com',
    },
  },
}

interface MinistryPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return Object.keys(ministriesData).map(slug => ({
    slug,
  }))
}

export async function generateMetadata({ params }: MinistryPageProps) {
  const ministry = ministriesData[params.slug as keyof typeof ministriesData]

  if (!ministry) {
    return {
      title: 'Ministry Not Found',
    }
  }

  return {
    title: `${ministry.title.en} - PGF Telugu Church`,
    description: ministry.description.en,
  }
}

export default function MinistryPage({ params }: MinistryPageProps) {
  const ministry = ministriesData[params.slug as keyof typeof ministriesData]

  if (!ministry) {
    notFound()
  }

  return <MinistryDetailPage ministry={ministry} />
}
