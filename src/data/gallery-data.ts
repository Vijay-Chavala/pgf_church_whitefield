export interface GalleryImage {
    id: string
    src: string
    alt: string
    category: string
    subcategory: string
}

export interface GallerySubcategory {
    id: string
    name: string
    title: { en: string; te: string }
    description: { en: string; te: string }
    coverImage: string
    images: GalleryImage[]
    category: string
}

export interface GalleryCategory {
    id: string
    title: { en: string; te: string }
    description: { en: string; te: string }
    subcategories: GallerySubcategory[]
}

// Church Moments Images
const churchFellowshipImages: GalleryImage[] = [
    {
        id: 'cf_1',
        src: '/images/gallery/churchFellowship/CF1.webp',
        alt: 'Church Fellowship 1',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cf_2',
        src: '/images/gallery/churchFellowship/CF2.webp',
        alt: 'Church Fellowship 2',
        category: 'church',
        subcategory: 'Church Fellowship'
    }
]

const christmas2023Images: GalleryImage[] = [
    {
        id: 'christmas23_1',
        src: '/images/gallery/Christmas2023/Christmas23_1.webp',
        alt: 'Christmas Celebration 2023 - 1',
        category: 'church',
        subcategory: 'Christmas 2023'
    },
    {
        id: 'christmas23_3',
        src: '/images/gallery/Christmas2023/Christmas23_3.webp',
        alt: 'Christmas Celebration 2023 - 3',
        category: 'church',
        subcategory: 'Christmas 2023'
    },
    {
        id: 'christmas23_4',
        src: '/images/gallery/Christmas2023/Christmas23_4.webp',
        alt: 'Christmas Celebration 2023 - 4',
        category: 'church',
        subcategory: 'Christmas 2023'
    }
]

const easter24Images: GalleryImage[] = [
    {
        id: 'easter24_1',
        src: '/images/gallery/Easter24/Easter24_1.webp',
        alt: 'Easter Celebration 2024 - 1',
        category: 'church',
        subcategory: 'Easter 2024'
    },
    {
        id: 'easter24_2',
        src: '/images/gallery/Easter24/Easter24_2.webp',
        alt: 'Easter Celebration 2024 - 2',
        category: 'church',
        subcategory: 'Easter 2024'
    },
    {
        id: 'easter24_3',
        src: '/images/gallery/Easter24/Easter24_3.webp',
        alt: 'Easter Celebration 2024 - 3',
        category: 'church',
        subcategory: 'Easter 2024'
    },
    {
        id: 'easter24_4',
        src: '/images/gallery/Easter24/Easter24_4.webp',
        alt: 'Easter Celebration 2024 - 4',
        category: 'church',
        subcategory: 'Easter 2024'
    },
    {
        id: 'easter24_5',
        src: '/images/gallery/Easter24/Easter24_5.webp',
        alt: 'Easter Celebration 2024 - 5',
        category: 'church',
        subcategory: 'Easter 2024'
    },
    {
        id: 'easter24_6',
        src: '/images/gallery/Easter24/Easter24_6.webp',
        alt: 'Easter Celebration 2024 - 6',
        category: 'church',
        subcategory: 'Easter 2024'
    }
]

const baptismsImages: GalleryImage[] = [
    {
        id: 'baptism_1',
        src: '/images/gallery/Baptisms/IMG_0245.JPG',
        alt: 'Baptism Ceremony',
        category: 'church',
        subcategory: 'Baptisms'
    }
]

const anniversaryImages: GalleryImage[] = [
    {
        id: 'anniversary_1',
        src: '/images/gallery/4thAnnversday/A4_1.webp',
        alt: '4th Anniversary Celebration - 1',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_2',
        src: '/images/gallery/4thAnnversday/A4_2.webp',
        alt: '4th Anniversary Celebration - 2',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_3',
        src: '/images/gallery/4thAnnversday/A4_3.webp',
        alt: '4th Anniversary Celebration - 3',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_4',
        src: '/images/gallery/4thAnnversday/A4_4.webp',
        alt: '4th Anniversary Celebration - 4',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_5',
        src: '/images/gallery/4thAnnversday/A4_5.webp',
        alt: '4th Anniversary Celebration - 5',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_6',
        src: '/images/gallery/4thAnnversday/A4_6.webp',
        alt: '4th Anniversary Celebration - 6',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_7',
        src: '/images/gallery/4thAnnversday/A4_7.webp',
        alt: '4th Anniversary Celebration - 7',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_8',
        src: '/images/gallery/4thAnnversday/A4_8.webp',
        alt: '4th Anniversary Celebration - 8',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_9',
        src: '/images/gallery/4thAnnversday/A4_9.webp',
        alt: '4th Anniversary Celebration - 9',
        category: 'church',
        subcategory: '4th Anniversary'
    }
]

const preChristmas2024Images: GalleryImage[] = [
    {
        id: 'prechristmas24_1',
        src: '/images/gallery/preChristmas2024/pre_christmas_2024 (1).webp',
        alt: 'Pre-Christmas Celebration 2024 - 1',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_2',
        src: '/images/gallery/preChristmas2024/pre_christmas_2024 (2).webp',
        alt: 'Pre-Christmas Celebration 2024 - 2',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_3',
        src: '/images/gallery/preChristmas2024/pre_christmas_2024 (3).webp',
        alt: 'Pre-Christmas Celebration 2024 - 3',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_4',
        src: '/images/gallery/preChristmas2024/pre_christmas_2024 (4).webp',
        alt: 'Pre-Christmas Celebration 2024 - 4',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_5',
        src: '/images/gallery/preChristmas2024/pre_christmas_2024 (5).webp',
        alt: 'Pre-Christmas Celebration 2024 - 5',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_6',
        src: '/images/gallery/preChristmas2024/pre_christmas_2024 (6).webp',
        alt: 'Pre-Christmas Celebration 2024 - 6',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_7',
        src: '/images/gallery/preChristmas2024/pre_christmas_2024 (7).webp',
        alt: 'Pre-Christmas Celebration 2024 - 7',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_8',
        src: '/images/gallery/preChristmas2024/pre_christmas_2024 (8).webp',
        alt: 'Pre-Christmas Celebration 2024 - 8',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_9',
        src: '/images/gallery/preChristmas2024/pre_christmas_2024 (9).webp',
        alt: 'Pre-Christmas Celebration 2024 - 9',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    }
]

const watchNightService2024Images: GalleryImage[] = [
    {
        id: 'watchnight24_1',
        src: '/images/gallery/WatchNightService2024/watchNight2024 (1).webp',
        alt: 'Watch Night Service 2024 - 1',
        category: 'church',
        subcategory: 'Watch Night Service 2024'
    },
    {
        id: 'watchnight24_2',
        src: '/images/gallery/WatchNightService2024/watchNight2024 (2).webp',
        alt: 'Watch Night Service 2024 - 2',
        category: 'church',
        subcategory: 'Watch Night Service 2024'
    },
    {
        id: 'watchnight24_3',
        src: '/images/gallery/WatchNightService2024/watchNight2024 (3).webp',
        alt: 'Watch Night Service 2024 - 3',
        category: 'church',
        subcategory: 'Watch Night Service 2024'
    }
]

// Kids Activities Images
const sundaySchoolImages: GalleryImage[] = [
    {
        id: 'ss_1',
        src: '/images/gallery/SundaySchool/SS (1).webp',
        alt: 'Sunday School Activities - 1',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_2',
        src: '/images/gallery/SundaySchool/SS (2).webp',
        alt: 'Sunday School Activities - 2',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_3',
        src: '/images/gallery/SundaySchool/SS (3).webp',
        alt: 'Sunday School Activities - 3',
        category: 'kids',
        subcategory: 'Sunday School'
    }
]

const vbsImages: GalleryImage[] = [
    {
        id: 'vbs_1',
        src: '/images/gallery/VBS24/VBS1.webp',
        alt: 'Vacation Bible School 2024 - 1',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_2',
        src: '/images/gallery/VBS24/VBS2.webp',
        alt: 'Vacation Bible School 2024 - 2',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_3',
        src: '/images/gallery/VBS24/VBS3.webp',
        alt: 'Vacation Bible School 2024 - 3',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_5',
        src: '/images/gallery/VBS24/VBS5.webp',
        alt: 'Vacation Bible School 2024 - 5',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_6',
        src: '/images/gallery/VBS24/VBS6.webp',
        alt: 'Vacation Bible School 2024 - 6',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_7',
        src: '/images/gallery/VBS24/VBS7.webp',
        alt: 'Vacation Bible School 2024 - 7',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_8',
        src: '/images/gallery/VBS24/VBS8.webp',
        alt: 'Vacation Bible School 2024 - 8',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_9',
        src: '/images/gallery/VBS24/VBS9.webp',
        alt: 'Vacation Bible School 2024 - 9',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_10',
        src: '/images/gallery/VBS24/VBS10.webp',
        alt: 'Vacation Bible School 2024 - 10',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_11',
        src: '/images/gallery/VBS24/VBS11.webp',
        alt: 'Vacation Bible School 2024 - 11',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_12',
        src: '/images/gallery/VBS24/VBS12.webp',
        alt: 'Vacation Bible School 2024 - 12',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_13',
        src: '/images/gallery/VBS24/VBS13.webp',
        alt: 'Vacation Bible School 2024 - 13',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_14',
        src: '/images/gallery/VBS24/VBS14.webp',
        alt: 'Vacation Bible School 2024 - 14',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_15',
        src: '/images/gallery/VBS24/VBS15.webp',
        alt: 'Vacation Bible School 2024 - 15',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_16',
        src: '/images/gallery/VBS24/VBS16.webp',
        alt: 'Vacation Bible School 2024 - 16',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_17',
        src: '/images/gallery/VBS24/VBS17.webp',
        alt: 'Vacation Bible School 2024 - 17',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_18',
        src: '/images/gallery/VBS24/VBS18.webp',
        alt: 'Vacation Bible School 2024 - 18',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_19',
        src: '/images/gallery/VBS24/VBS19.webp',
        alt: 'Vacation Bible School 2024 - 19',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_20',
        src: '/images/gallery/VBS24/VBS20.webp',
        alt: 'Vacation Bible School 2024 - 20',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_21',
        src: '/images/gallery/VBS24/VBS21.webp',
        alt: 'Vacation Bible School 2024 - 21',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_22',
        src: '/images/gallery/VBS24/VBS22.webp',
        alt: 'Vacation Bible School 2024 - 22',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_23',
        src: '/images/gallery/VBS24/VBS23.webp',
        alt: 'Vacation Bible School 2024 - 23',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_24',
        src: '/images/gallery/VBS24/VBS24.webp',
        alt: 'Vacation Bible School 2024 - 24',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_25',
        src: '/images/gallery/VBS24/VBS25.webp',
        alt: 'Vacation Bible School 2024 - 25',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_26',
        src: '/images/gallery/VBS24/VBS26.webp',
        alt: 'Vacation Bible School 2024 - 26',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_27',
        src: '/images/gallery/VBS24/VBS27.webp',
        alt: 'Vacation Bible School 2024 - 27',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_28',
        src: '/images/gallery/VBS24/VBS28.webp',
        alt: 'Vacation Bible School 2024 - 28',
        category: 'kids',
        subcategory: 'VBS 2024'
    }
]

const pgfBabiesImages: GalleryImage[] = [
    {
        id: 'babies_1',
        src: '/images/gallery/PGF_BABIES/bhupal.webp',
        alt: 'PGF Babies - Church Family',
        category: 'kids',
        subcategory: 'PGF Babies'
    }
]

// Combine all images
const allChurchImages = [
    ...churchFellowshipImages,
    ...christmas2023Images,
    ...easter24Images,
    ...baptismsImages,
    ...anniversaryImages,
    ...preChristmas2024Images,
    ...watchNightService2024Images
]

const allKidsImages = [
    ...sundaySchoolImages,
    ...vbsImages,
    ...pgfBabiesImages
]

// Create subcategories for Church Events
const churchSubcategories: GallerySubcategory[] = [
    {
        id: 'church-fellowship',
        name: 'Church Fellowship',
        title: { en: 'Church Fellowship', te: 'చర్చి సహవాసం' },
        description: { en: 'Beautiful moments of fellowship and community', te: 'సహవాసం మరియు సమాజం యొక్క అందమైన క్షణాలు' },
        coverImage: '/images/gallery/churchFellowship/CF1.webp',
        images: churchFellowshipImages,
        category: 'church'
    },
    {
        id: 'christmas-2023',
        name: 'Christmas 2023',
        title: { en: 'Christmas 2023', te: 'క్రిస్మస్ 2023' },
        description: { en: 'Celebrating the birth of Jesus Christ', te: 'యేసు క్రీస్తు జన్మను జరుపుకుంటున్నాం' },
        coverImage: '/images/gallery/Christmas2023/Christmas23_1.webp',
        images: christmas2023Images,
        category: 'church'
    },
    {
        id: 'easter-2024',
        name: 'Easter 2024',
        title: { en: 'Easter 2024', te: 'ఈస్టర్ 2024' },
        description: { en: 'Celebrating the resurrection of Jesus', te: 'యేసు పునరుత్థానాన్ని జరుపుకుంటున్నాం' },
        coverImage: '/images/gallery/Easter24/Easter24_1.webp',
        images: easter24Images,
        category: 'church'
    },
    {
        id: 'baptisms',
        name: 'Baptisms',
        title: { en: 'Baptisms', te: 'బాప్టిజంలు' },
        description: { en: 'New believers taking the step of faith', te: 'కొత్త విశ్వాసులు విశ్వాస అడుగు వేస్తున్నారు' },
        coverImage: '/images/gallery/Baptisms/IMG_0245.JPG',
        images: baptismsImages,
        category: 'church'
    },
    {
        id: '4th-anniversary',
        name: '4th Anniversary',
        title: { en: '4th Anniversary', te: '4వ వార్షికోత్సవం' },
        description: { en: 'Celebrating 4 years of God\'s faithfulness', te: 'దేవుని విశ్వసనీయత యొక్క 4 సంవత్సరాలను జరుపుకుంటున్నాం' },
        coverImage: '/images/gallery/4thAnnversday/A4_1.webp',
        images: anniversaryImages,
        category: 'church'
    },
    {
        id: 'pre-christmas-2024',
        name: 'Pre-Christmas 2024',
        title: { en: 'Pre-Christmas 2024', te: 'ప్రీ-క్రిస్మస్ 2024' },
        description: { en: 'Preparing hearts for Christmas celebration', te: 'క్రిస్మస్ వేడుకకు హృదయాలను సిద్ధం చేస్తున్నాం' },
        coverImage: '/images/gallery/preChristmas2024/pre_christmas_2024 (1).webp',
        images: preChristmas2024Images,
        category: 'church'
    },
    {
        id: 'watch-night-service-2024',
        name: 'Watch Night Service 2024',
        title: { en: 'Watch Night Service 2024', te: 'వాచ్ నైట్ సేవ 2024' },
        description: { en: 'Welcoming the new year with prayer and worship', te: 'ప్రార్థన మరియు ఆరాధనతో కొత్త సంవత్సరాన్ని స్వాగతించడం' },
        coverImage: '/images/gallery/WatchNightService2024/watchNight2024 (1).webp',
        images: watchNightService2024Images,
        category: 'church'
    }
]

// Create subcategories for Kids Activities
const kidsSubcategories: GallerySubcategory[] = [
    {
        id: 'sunday-school',
        name: 'Sunday School',
        title: { en: 'Sunday School', te: 'ఆదివార పాఠశాల' },
        description: { en: 'Teaching children about God\'s love', te: 'పిల్లలకు దేవుని ప్రేమ గురించి బోధిస్తున్నాం' },
        coverImage: '/images/gallery/SundaySchool/SS (1).webp',
        images: sundaySchoolImages,
        category: 'kids'
    },
    {
        id: 'vbs-2024',
        name: 'VBS 2024',
        title: { en: 'Vacation Bible School 2024', te: 'వేకేషన్ బైబిల్ స్కూల్ 2024' },
        description: { en: 'Fun-filled Bible learning for children', te: 'పిల్లలకు ఆనందకరమైన బైబిల్ అభ్యాసం' },
        coverImage: '/images/gallery/VBS24/VBS1.webp',
        images: vbsImages,
        category: 'kids'
    },
    {
        id: 'pgf-babies',
        name: 'PGF Babies',
        title: { en: 'PGF Babies', te: 'PGF పిల్లలు' },
        description: { en: 'Our precious little ones in the church family', te: 'చర్చి కుటుంబంలో మా విలువైన చిన్నపిల్లలు' },
        coverImage: '/images/gallery/PGF_BABIES/bhupal.webp',
        images: pgfBabiesImages,
        category: 'kids'
    }
]

export const galleryCategories: GalleryCategory[] = [
    {
        id: 'church',
        title: { en: 'Church Events', te: 'చర్చి కార్యక్రమాలు' },
        description: { en: 'Celebrating faith, fellowship, and God\'s goodness', te: 'విశ్వాసం, సహవాసం మరియు దేవుని మంచితనాన్ని జరుపుకుంటున్నాం' },
        subcategories: churchSubcategories
    },
    {
        id: 'kids',
        title: { en: 'Kids Activities', te: 'పిల్లల కార్యకలాపాలు' },
        description: { en: 'Nurturing young hearts in faith and love', te: 'విశ్వాసం మరియు ప్రేమలో యువ హృదయాలను పెంపొందిస్తున్నాం' },
        subcategories: kidsSubcategories
    }
]

export const allGalleryImages = [...allChurchImages, ...allKidsImages]

// Helper function to get subcategory by category and subcategory id
export const getSubcategory = (categoryId: string, subcategoryId: string): GallerySubcategory | undefined => {
    const category = galleryCategories.find(cat => cat.id === categoryId)
    return category?.subcategories.find(sub => sub.id === subcategoryId)
}

// Helper function to get all subcategories for a category
export const getSubcategoriesByCategory = (categoryId: string): GallerySubcategory[] => {
    const category = galleryCategories.find(cat => cat.id === categoryId)
    return category?.subcategories || []
}
