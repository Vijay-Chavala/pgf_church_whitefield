export interface SermonData {
  id: string
  title: { en: string; te: string }
  description: { en: string; te: string }
  speaker: { en: string; te: string }
  date: string
  youtubeLiveLink: string
  series?: { en: string; te: string }
  duration?: number
  tags?: string[]
  isNew?: boolean
}

export const latestSermonsData: SermonData[] = [
  {
    id: "112q1",
    title: {
      en: "Walking in Divine Purpose",
      te: "దైవిక లక్ష్యంలో నడిచడం"
    },
    description: {
      en: "Discover God's unique plan for your life and learn to walk confidently in His purpose.",
      te: "మీ జీవితం కోసం దేవుని ప్రత్యేక ప్రణాళికను కనుగొనండి మరియు ఆయన లక్ష్యంలో నమ్మకంతో నడవడం నేర్చుకోండి."
    },
    speaker: {
      en: "Pastor Ravi Kumar",
      te: "పాస్టర్ రవి కుమార్"
    },
    date: "2024-01-21",
    youtubeLiveLink: "https://www.youtube.com/embed/c4pghohDMH4?si=-qA1LfPovMhTFyi0",
    series: {
      en: "Living by Faith",
      te: "విశ్వాసంతో జీవించడం"
    },
    duration: 45,
    tags: ["faith", "purpose", "divine plan"],
    isNew: true
  },
  {
    id: "122q1", 
    title: {
      en: "The Power of Prayer and Praise",
      te: "ప్రార్థన మరియు స్తుతుల శక్తి"
    },
    description: {
      en: "Understanding the transformative power of prayer and how praise opens heaven's doors.",
      te: "ప్రార్థన యొక్క మార్చే శక్తిని అర్థం చేసుకోవడం మరియు స్తుతులు స్వర్గ ద్వారాలను ఎలా తెరుస్తాయో తెలుసుకోవడం."
    },
    speaker: {
      en: "Pastor Hepsiba",
      te: "పాస్టర్ హెప్సిబా"
    },
    date: "2024-01-14",
    youtubeLiveLink: "https://www.youtube.com/embed/X9OM3VbncNM?si=Ia5mFhqJ2cMX98np",
    series: {
      en: "Spiritual Warfare",
      te: "ఆధ్యాత్మిక యుద్ధం"
    },
    duration: 42,
    tags: ["prayer", "praise", "worship"],
    isNew: true
  },
  {
    id: "12q1",
    title: {
      en: "God's Love Never Fails",
      te: "దేవుని ప్రేమ ఎన్నడూ విఫలం కాదు"
    },
    description: {
      en: "Experience the unconditional love of God that sustains us through every season of life.",
      te: "జీవితంలోని ప్రతి కాలంలో మనలను నిలబెట్టే దేవుని షరతులు లేని ప్రేమను అనుభవించండి."
    },
    speaker: {
      en: "Pastor Ravi Kumar",
      te: "పాస్టర్ రవి కుమార్"
    },
    date: "2024-01-07",
    youtubeLiveLink: "https://www.youtube.com/embed/5Cq-a9EzJrM?si=Jw3H-RKgZl0zDnqI",
    series: {
      en: "God's Character",
      te: "దేవుని స్వభావం"
    },
    duration: 38,
    tags: ["love", "unconditional", "faithfulness"],
    isNew: false
  },
  {
    id: "121",
    title: {
      en: "Building Strong Foundations",
      te: "బలమైన పునాదులు వేయడం"
    },
    description: {
      en: "Learn how to build your life on the solid rock of Christ and establish unshakeable foundations.",
      te: "క్రీస్తు అనే గట్టి రాతిపై మీ జీవితాన్ని నిర్మించడం మరియు వణుకని పునాదులు వేయడం ఎలాగో నేర్చుకోండి."
    },
    speaker: {
      en: "Pastor John Samuel",
      te: "పాస్టర్ జాన్ శామ్యూల్"
    },
    date: "2023-12-31",
    youtubeLiveLink: "https://www.youtube.com/embed/dLLXjnuUuxY?si=wH3bDd29gejy0PVi",
    series: {
      en: "New Year Series",
      te: "నూతన సంవత్సర శ్రేణి"
    },
    duration: 50,
    tags: ["foundation", "stability", "growth"],
    isNew: false
  },
  {
    id: "01A",
    title: {
      en: "Walking in the Light",
      te: "వెలుగులో నడవడం"
    },
    description: {
      en: "Discover what it means to walk in God's light and live a life of transparency and truth.",
      te: "దేవుని వెలుగులో నడవడం అంటే ఏమిటో మరియు పారదర్శకత మరియు సత్యం యొక్క జీవితం గడపడం ఎలాగో కనుగొనండి."
    },
    speaker: {
      en: "Pastor Ravi Kumar",
      te: "పాస్టర్ రవి కుమార్"
    },
    date: "2023-12-24",
    youtubeLiveLink: "https://www.youtube.com/embed/HPsC_VKpAmY?si=PbgHrv8W9DHp08_5",
    series: {
      en: "Christmas Special",
      te: "క్రిస్మస్ ప్రత్యేక"
    },
    duration: 40,
    tags: ["light", "truth", "christmas"],
    isNew: false
  },
  {
    id: "01B",
    title: {
      en: "The Gift of Salvation",
      te: "మోక్షం యొక్క బహుమతి"
    },
    description: {
      en: "Understanding the greatest gift ever given - the salvation through Jesus Christ our Lord.",
      te: "ఇప్పటివరకు ఇవ్వబడిన గొప్ప బహుమతిని అర్థం చేసుకోవడం - మన ప్రభువైన యేసు క్రీస్తు ద్వారా మోక్షం."
    },
    speaker: {
      en: "Pastor Hepsiba",
      te: "పాస్టర్ హెప్సిబా"
    },
    date: "2023-12-17",
    youtubeLiveLink: "https://www.youtube.com/embed/bUO5BkiL640?si=Hta7S8MFkH-D_0EP",
    series: {
      en: "Christmas Special",
      te: "క్రిస్మస్ ప్రత్యేక"
    },
    duration: 35,
    tags: ["salvation", "gift", "jesus"],
    isNew: false
  },
  {
    id: "02A",
    title: {
      en: "Faith in Action",
      te: "చర్యలో విశ్వాసం"
    },
    description: {
      en: "Learn how to put your faith into action and see God move powerfully in your circumstances.",
      te: "మీ విశ్వాసాన్ని చర్యలో ఎలా పెట్టాలో నేర్చుకోండి మరియు మీ పరిస్థితులలో దేవుడు శక్తివంతంగా కదలడం చూడండి."
    },
    speaker: {
      en: "Pastor Ravi Kumar",
      te: "పాస్టర్ రవి కుమార్"
    },
    date: "2023-12-10",
    youtubeLiveLink: "https://www.youtube.com/embed/Q_rdMCFQB6Y?si=JfVcGDukdrpbKq2T",
    series: {
      en: "Living Faith",
      te: "జీవన్త విశ్వాసం"
    },
    duration: 44,
    tags: ["faith", "action", "miracles"],
    isNew: false
  },
  {
    id: "02B",
    title: {
      en: "The Heart of Worship",
      te: "ఆరాధన యొక్క హృదయం"
    },
    description: {
      en: "Discover what true worship means and how to worship God in spirit and in truth.",
      te: "నిజమైన ఆరాధన అంటే ఏమిటో మరియు ఆత్మలో మరియు సత్యంలో దేవుణ్ణి ఎలా ఆరాధించాలో కనుగొనండి."
    },
    speaker: {
      en: "Pastor John Samuel",
      te: "పాస్టర్ జాన్ శామ్యూల్"
    },
    date: "2023-12-03",
    youtubeLiveLink: "https://www.youtube.com/embed/QwyMpI8vTJc?si=RAxgxcvNk7sSKgrj",
    series: {
      en: "Worship and Praise",
      te: "ఆరాధన మరియు స్తుతి"
    },
    duration: 39,
    tags: ["worship", "praise", "spirit"],
    isNew: false
  },
  {
    id: "03A",
    title: {
      en: "Overcoming Life's Storms",
      te: "జీవిత తుఫానులను అధిగమించడం"
    },
    description: {
      en: "Find strength and peace in the midst of life's storms through the power of God's Word.",
      te: "దేవుని వాక్య శక్తి ద్వారా జీవిత తుఫానుల మధ్యలో బలం మరియు శాంతిని కనుగొనండి."
    },
    speaker: {
      en: "Pastor Ravi Kumar",
      te: "పాస్టర్ రవి కుమార్"
    },
    date: "2023-11-26",
    youtubeLiveLink: "https://www.youtube.com/embed/7mUJVUQuZxM?si=FpgvOLmH9pyJNTC6",
    series: {
      en: "Overcoming Challenges",
      te: "సవాళ్లను అధిగమించడం"
    },
    duration: 46,
    tags: ["storms", "strength", "peace"],
    isNew: false
  },
  {
    id: "03B",
    title: {
      en: "The Power of Unity",
      te: "ఐక్యత యొక్క శక్తి"
    },
    description: {
      en: "Understanding how unity in the body of Christ brings breakthrough and blessing.",
      te: "క్రీస్తు శరీరంలో ఐక్యత ఎలా పురోగతి మరియు ఆశీర్వాదం తెస్తుందో అర్థం చేసుకోవడం."
    },
    speaker: {
      en: "Pastor Hepsiba",
      te: "పాస్టర్ హెప్సిబా"
    },
    date: "2023-11-19",
    youtubeLiveLink: "https://www.youtube.com/embed/sboig9ZkxRE?si=oqd9T4TpDPsEEbfx",
    series: {
      en: "Church Life",
      te: "చర్చి జీవితం"
    },
    duration: 41,
    tags: ["unity", "church", "blessing"],
    isNew: false
  },
  {
    id: "04A",
    title: {
      en: "Growing in Grace",
      te: "దయలో పెరుగుట"
    },
    description: {
      en: "Learn how to grow in God's grace and experience His unmerited favor in every area of life.",
      te: "దేవుని దయలో ఎలా పెరుగుతారో మరియు జీవితంలోని ప్రతి రంగంలో ఆయన అనర్హ కృపను ఎలా అనుభవించాలో నేర్చుకోండి."
    },
    speaker: {
      en: "Pastor Ravi Kumar", 
      te: "పాస్టర్ రవి కుమార్"
    },
    date: "2023-11-12",
    youtubeLiveLink: "https://www.youtube.com/embed/7mUJVUQuZxM?si=FpgvOLmH9pyJNTC6",
    series: {
      en: "Grace and Mercy",
      te: "దయ మరియు కరుణ"
    },
    duration: 43,
    tags: ["grace", "growth", "favor"],
    isNew: false
  },
  {
    id: "04B",
    title: {
      en: "Living with Purpose",
      te: "లక్ష్యంతో జీవించడం"
    },
    description: {
      en: "Discover your God-given purpose and learn to live a life that makes a difference.",
      te: "దేవుడు ఇచ్చిన మీ లక్ష్యాన్ని కనుగొనండి మరియు మార్పు తెచ్చే జీవితాన్ని ఎలా గడపాలో నేర్చుకోండి."
    },
    speaker: {
      en: "Pastor John Samuel",
      te: "పాస్టర్ జాన్ శామ్యూల్"
    },
    date: "2023-11-05",
    youtubeLiveLink: "https://www.youtube.com/embed/sboig9ZkxRE?si=3K6b38YwQs4AKs2O",
    series: {
      en: "Purpose-Driven Life",
      te: "లక్ష్య ప్రేరిత జీవితం"
    },
    duration: 48,
    tags: ["purpose", "calling", "difference"],
    isNew: false
  }
]

// Get latest 2 sermons for home page highlights
export const getLatestSermonsForHome = (): SermonData[] => {
  return latestSermonsData.slice(0, 2)
}

// Get all sermons sorted by date (newest first)
export const getAllSermons = (): SermonData[] => {
  return latestSermonsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get sermons by series
export const getSermonsBySeries = (seriesEn: string): SermonData[] => {
  return latestSermonsData.filter(sermon => 
    sermon.series && sermon.series.en.toLowerCase() === seriesEn.toLowerCase()
  )
}

// Get featured/new sermons
export const getFeaturedSermons = (): SermonData[] => {
  return latestSermonsData.filter(sermon => sermon.isNew)
} 