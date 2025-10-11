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
        id: 'cfi_1',
        src: '/images/gallery/church-events/churchFellowship/CFI (1).webp',
        alt: 'Church Fellowship 1',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_2',
        src: '/images/gallery/church-events/churchFellowship/CFI (2).webp',
        alt: 'Church Fellowship 2',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_3',
        src: '/images/gallery/church-events/churchFellowship/CFI (3).webp',
        alt: 'Church Fellowship 3',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_4',
        src: '/images/gallery/church-events/churchFellowship/CFI (4).webp',
        alt: 'Church Fellowship 4',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_5',
        src: '/images/gallery/church-events/churchFellowship/CFI (5).webp',
        alt: 'Church Fellowship 5',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_6',
        src: '/images/gallery/church-events/churchFellowship/CFI (6).webp',
        alt: 'Church Fellowship 6',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_7',
        src: '/images/gallery/church-events/churchFellowship/CFI (7).webp',
        alt: 'Church Fellowship 7',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_8',
        src: '/images/gallery/church-events/churchFellowship/CFI (8).webp',
        alt: 'Church Fellowship 8',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_9',
        src: '/images/gallery/church-events/churchFellowship/CFI (9).webp',
        alt: 'Church Fellowship 9',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_10',
        src: '/images/gallery/church-events/churchFellowship/CFI (10).webp',
        alt: 'Church Fellowship 10',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_11',
        src: '/images/gallery/church-events/churchFellowship/CFI (11).webp',
        alt: 'Church Fellowship 11',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_12',
        src: '/images/gallery/church-events/churchFellowship/CFI (12).webp',
        alt: 'Church Fellowship 12',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_13',
        src: '/images/gallery/church-events/churchFellowship/CFI (13).webp',
        alt: 'Church Fellowship 13',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_14',
        src: '/images/gallery/church-events/churchFellowship/CFI (14).webp',
        alt: 'Church Fellowship 14',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_15',
        src: '/images/gallery/church-events/churchFellowship/CFI (15).webp',
        alt: 'Church Fellowship 15',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_16',
        src: '/images/gallery/church-events/churchFellowship/CFI (16).webp',
        alt: 'Church Fellowship 16',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_17',
        src: '/images/gallery/church-events/churchFellowship/CFI (17).webp',
        alt: 'Church Fellowship 17',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_18',
        src: '/images/gallery/church-events/churchFellowship/CFI (18).webp',
        alt: 'Church Fellowship 18',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_19',
        src: '/images/gallery/church-events/churchFellowship/CFI (19).webp',
        alt: 'Church Fellowship 19',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_20',
        src: '/images/gallery/church-events/churchFellowship/CFI (20).webp',
        alt: 'Church Fellowship 20',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_21',
        src: '/images/gallery/church-events/churchFellowship/CFI (21).webp',
        alt: 'Church Fellowship 21',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_22',
        src: '/images/gallery/church-events/churchFellowship/CFI (22).webp',
        alt: 'Church Fellowship 22',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_23',
        src: '/images/gallery/church-events/churchFellowship/CFI (23).webp',
        alt: 'Church Fellowship 23',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_24',
        src: '/images/gallery/church-events/churchFellowship/CFI (24).webp',
        alt: 'Church Fellowship 24',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_25',
        src: '/images/gallery/church-events/churchFellowship/CFI (25).webp',
        alt: 'Church Fellowship 25',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_26',
        src: '/images/gallery/church-events/churchFellowship/CFI (26).webp',
        alt: 'Church Fellowship 26',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_27',
        src: '/images/gallery/church-events/churchFellowship/CFI (27).webp',
        alt: 'Church Fellowship 27',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_28',
        src: '/images/gallery/church-events/churchFellowship/CFI (28).webp',
        alt: 'Church Fellowship 28',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_29',
        src: '/images/gallery/church-events/churchFellowship/CFI (29).webp',
        alt: 'Church Fellowship 29',
        category: 'church',
        subcategory: 'Church Fellowship'
    },
    {
        id: 'cfi_30',
        src: '/images/gallery/church-events/churchFellowship/CFI (30).webp',
        alt: 'Church Fellowship 30',
        category: 'church',
        subcategory: 'Church Fellowship'
    }
]

const christmas2023Images: GalleryImage[] = [
    {
        id: 'christmas23_1',
        src: '/images/gallery/church-events/Christmas2023/Christmas23_1.webp',
        alt: 'Christmas Celebration 2023 - 1',
        category: 'church',
        subcategory: 'Christmas 2023'
    },
    {
        id: 'christmas23_3',
        src: '/images/gallery/church-events/Christmas2023/Christmas23_3.webp',
        alt: 'Christmas Celebration 2023 - 3',
        category: 'church',
        subcategory: 'Christmas 2023'
    },
    {
        id: 'christmas23_4',
        src: '/images/gallery/church-events/Christmas2023/Christmas23_4.webp',
        alt: 'Christmas Celebration 2023 - 4',
        category: 'church',
        subcategory: 'Christmas 2023'
    }
]

const easter24Images: GalleryImage[] = [
    {
        id: 'easter24_1',
        src: '/images/gallery/church-events/Easter24/Easter24_1.webp',
        alt: 'Easter Celebration 2024 - 1',
        category: 'church',
        subcategory: 'Easter 2024'
    },
    {
        id: 'easter24_2',
        src: '/images/gallery/church-events/Easter24/Easter24_2.webp',
        alt: 'Easter Celebration 2024 - 2',
        category: 'church',
        subcategory: 'Easter 2024'
    },
    {
        id: 'easter24_3',
        src: '/images/gallery/church-events/Easter24/Easter24_3.webp',
        alt: 'Easter Celebration 2024 - 3',
        category: 'church',
        subcategory: 'Easter 2024'
    },
    {
        id: 'easter24_4',
        src: '/images/gallery/church-events/Easter24/Easter24_4.webp',
        alt: 'Easter Celebration 2024 - 4',
        category: 'church',
        subcategory: 'Easter 2024'
    },
    {
        id: 'easter24_5',
        src: '/images/gallery/church-events/Easter24/Easter24_5.webp',
        alt: 'Easter Celebration 2024 - 5',
        category: 'church',
        subcategory: 'Easter 2024'
    },
    {
        id: 'easter24_6',
        src: '/images/gallery/church-events/Easter24/Easter24_6.webp',
        alt: 'Easter Celebration 2024 - 6',
        category: 'church',
        subcategory: 'Easter 2024'
    }
]

const baptismsImages: GalleryImage[] = [
    {
        id: 'baptism_1',
        src: '/images/gallery/church-events/Baptisms/IMG_0245.JPG',
        alt: 'Baptism Ceremony',
        category: 'church',
        subcategory: 'Baptisms'
    }
]

const anniversaryImages: GalleryImage[] = [
    {
        id: 'anniversary_1',
        src: '/images/gallery/church-events/4thAnnversday/A4_1.webp',
        alt: '4th Anniversary Celebration - 1',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_2',
        src: '/images/gallery/church-events/4thAnnversday/A4_2.webp',
        alt: '4th Anniversary Celebration - 2',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_3',
        src: '/images/gallery/church-events/4thAnnversday/A4_3.webp',
        alt: '4th Anniversary Celebration - 3',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_4',
        src: '/images/gallery/church-events/4thAnnversday/A4_4.webp',
        alt: '4th Anniversary Celebration - 4',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_5',
        src: '/images/gallery/church-events/4thAnnversday/A4_5.webp',
        alt: '4th Anniversary Celebration - 5',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_6',
        src: '/images/gallery/church-events/4thAnnversday/A4_6.webp',
        alt: '4th Anniversary Celebration - 6',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_7',
        src: '/images/gallery/church-events/4thAnnversday/A4_7.webp',
        alt: '4th Anniversary Celebration - 7',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_8',
        src: '/images/gallery/church-events/4thAnnversday/A4_8.webp',
        alt: '4th Anniversary Celebration - 8',
        category: 'church',
        subcategory: '4th Anniversary'
    },
    {
        id: 'anniversary_9',
        src: '/images/gallery/church-events/4thAnnversday/A4_9.webp',
        alt: '4th Anniversary Celebration - 9',
        category: 'church',
        subcategory: '4th Anniversary'
    }
]

const preChristmas2024Images: GalleryImage[] = [
    {
        id: 'prechristmas24_1',
        src: '/images/gallery/church-events/preChristmas2024/pre_christmas_2024 (1).webp',
        alt: 'Pre-Christmas Celebration 2024 - 1',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_2',
        src: '/images/gallery/church-events/preChristmas2024/pre_christmas_2024 (2).webp',
        alt: 'Pre-Christmas Celebration 2024 - 2',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_3',
        src: '/images/gallery/church-events/preChristmas2024/pre_christmas_2024 (3).webp',
        alt: 'Pre-Christmas Celebration 2024 - 3',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_4',
        src: '/images/gallery/church-events/preChristmas2024/pre_christmas_2024 (4).webp',
        alt: 'Pre-Christmas Celebration 2024 - 4',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_5',
        src: '/images/gallery/church-events/preChristmas2024/pre_christmas_2024 (5).webp',
        alt: 'Pre-Christmas Celebration 2024 - 5',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_6',
        src: '/images/gallery/church-events/preChristmas2024/pre_christmas_2024 (6).webp',
        alt: 'Pre-Christmas Celebration 2024 - 6',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_7',
        src: '/images/gallery/church-events/preChristmas2024/pre_christmas_2024 (7).webp',
        alt: 'Pre-Christmas Celebration 2024 - 7',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_8',
        src: '/images/gallery/church-events/preChristmas2024/pre_christmas_2024 (8).webp',
        alt: 'Pre-Christmas Celebration 2024 - 8',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    },
    {
        id: 'prechristmas24_9',
        src: '/images/gallery/church-events/preChristmas2024/pre_christmas_2024 (9).webp',
        alt: 'Pre-Christmas Celebration 2024 - 9',
        category: 'church',
        subcategory: 'Pre-Christmas 2024'
    }
]

const watchNightService2024Images: GalleryImage[] = [
    {
        id: 'watchnight24_1',
        src: '/images/gallery/church-events/WatchNightService2024/watchNight2024 (1).webp',
        alt: 'Watch Night Service 2024 - 1',
        category: 'church',
        subcategory: 'Watch Night Service 2024'
    },
    {
        id: 'watchnight24_2',
        src: '/images/gallery/church-events/WatchNightService2024/watchNight2024 (2).webp',
        alt: 'Watch Night Service 2024 - 2',
        category: 'church',
        subcategory: 'Watch Night Service 2024'
    },
    {
        id: 'watchnight24_3',
        src: '/images/gallery/church-events/WatchNightService2024/watchNight2024 (3).webp',
        alt: 'Watch Night Service 2024 - 3',
        category: 'church',
        subcategory: 'Watch Night Service 2024'
    }
]

const marriedCoupleMeetImages: GalleryImage[] = [
    {
        id: 'mcm_1',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (1).webp',
        alt: 'Married Couple Meet - 1',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_2',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (2).webp',
        alt: 'Married Couple Meet - 2',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_3',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (3).webp',
        alt: 'Married Couple Meet - 3',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_4',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (4).webp',
        alt: 'Married Couple Meet - 4',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_5',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (5).webp',
        alt: 'Married Couple Meet - 5',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_6',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (6).webp',
        alt: 'Married Couple Meet - 6',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_7',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (7).webp',
        alt: 'Married Couple Meet - 7',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_8',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (8).webp',
        alt: 'Married Couple Meet - 8',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_9',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (9).webp',
        alt: 'Married Couple Meet - 9',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_10',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (10).webp',
        alt: 'Married Couple Meet - 10',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_11',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (11).webp',
        alt: 'Married Couple Meet - 11',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_12',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (12).webp',
        alt: 'Married Couple Meet - 12',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_13',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (13).webp',
        alt: 'Married Couple Meet - 13',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_14',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (14).webp',
        alt: 'Married Couple Meet - 14',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_15',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (15).webp',
        alt: 'Married Couple Meet - 15',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_16',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (16).webp',
        alt: 'Married Couple Meet - 16',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_17',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (17).webp',
        alt: 'Married Couple Meet - 17',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_18',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (18).webp',
        alt: 'Married Couple Meet - 18',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_19',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (19).webp',
        alt: 'Married Couple Meet - 19',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_20',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (20).webp',
        alt: 'Married Couple Meet - 20',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_21',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (21).webp',
        alt: 'Married Couple Meet - 21',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_22',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (22).webp',
        alt: 'Married Couple Meet - 22',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_23',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (23).webp',
        alt: 'Married Couple Meet - 23',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_24',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (24).webp',
        alt: 'Married Couple Meet - 24',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_25',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (25).webp',
        alt: 'Married Couple Meet - 25',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_26',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (26).webp',
        alt: 'Married Couple Meet - 26',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_27',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (27).webp',
        alt: 'Married Couple Meet - 27',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_28',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (28).webp',
        alt: 'Married Couple Meet - 28',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_29',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (29).webp',
        alt: 'Married Couple Meet - 29',
        category: 'church',
        subcategory: 'Married Couple Meet'
    },
    {
        id: 'mcm_30',
        src: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (30).webp',
        alt: 'Married Couple Meet - 30',
        category: 'church',
        subcategory: 'Married Couple Meet'
    }
]

const oldTestamentSeminarImages: GalleryImage[] = [
    {
        id: 'ots_1',
        src: '/images/gallery/church-events/Old Testament Made Easy by J. Godwin Nickelson/seminar (1).webp',
        alt: 'Old Testament Seminar - 1',
        category: 'church',
        subcategory: 'Old Testament Seminar'
    },
    {
        id: 'ots_2',
        src: '/images/gallery/church-events/Old Testament Made Easy by J. Godwin Nickelson/seminar (2).webp',
        alt: 'Old Testament Seminar - 2',
        category: 'church',
        subcategory: 'Old Testament Seminar'
    },
    {
        id: 'ots_3',
        src: '/images/gallery/church-events/Old Testament Made Easy by J. Godwin Nickelson/seminar (3).webp',
        alt: 'Old Testament Seminar - 3',
        category: 'church',
        subcategory: 'Old Testament Seminar'
    },
    {
        id: 'ots_4',
        src: '/images/gallery/church-events/Old Testament Made Easy by J. Godwin Nickelson/seminar (4).webp',
        alt: 'Old Testament Seminar - 4',
        category: 'church',
        subcategory: 'Old Testament Seminar'
    },
    {
        id: 'ots_5',
        src: '/images/gallery/church-events/Old Testament Made Easy by J. Godwin Nickelson/seminar (5).webp',
        alt: 'Old Testament Seminar - 5',
        category: 'church',
        subcategory: 'Old Testament Seminar'
    },
    {
        id: 'ots_6',
        src: '/images/gallery/church-events/Old Testament Made Easy by J. Godwin Nickelson/seminar (6).webp',
        alt: 'Old Testament Seminar - 6',
        category: 'church',
        subcategory: 'Old Testament Seminar'
    },
    {
        id: 'ots_7',
        src: '/images/gallery/church-events/Old Testament Made Easy by J. Godwin Nickelson/seminar (7).webp',
        alt: 'Old Testament Seminar - 7',
        category: 'church',
        subcategory: 'Old Testament Seminar'
    },
    {
        id: 'ots_8',
        src: '/images/gallery/church-events/Old Testament Made Easy by J. Godwin Nickelson/seminar (8).webp',
        alt: 'Old Testament Seminar - 8',
        category: 'church',
        subcategory: 'Old Testament Seminar'
    },
    {
        id: 'ots_9',
        src: '/images/gallery/church-events/Old Testament Made Easy by J. Godwin Nickelson/seminar (9).webp',
        alt: 'Old Testament Seminar - 9',
        category: 'church',
        subcategory: 'Old Testament Seminar'
    },
    {
        id: 'ots_10',
        src: '/images/gallery/church-events/Old Testament Made Easy by J. Godwin Nickelson/seminar (10).webp',
        alt: 'Old Testament Seminar - 10',
        category: 'church',
        subcategory: 'Old Testament Seminar'
    },
    {
        id: 'ots_11',
        src: '/images/gallery/church-events/Old Testament Made Easy by J. Godwin Nickelson/seminar (11).webp',
        alt: 'Old Testament Seminar - 11',
        category: 'church',
        subcategory: 'Old Testament Seminar'
    },
    {
        id: 'ots_12',
        src: '/images/gallery/church-events/Old Testament Made Easy by J. Godwin Nickelson/seminar (12).webp',
        alt: 'Old Testament Seminar - 12',
        category: 'church',
        subcategory: 'Old Testament Seminar'
    }
]

const pastoralCareImages: GalleryImage[] = [
    {
        id: 'pc_1',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (1).webp',
        alt: 'Pastoral Care - 1',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_2',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (2).webp',
        alt: 'Pastoral Care - 2',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_3',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (3).webp',
        alt: 'Pastoral Care - 3',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_4',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (4).webp',
        alt: 'Pastoral Care - 4',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_5',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (5).webp',
        alt: 'Pastoral Care - 5',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_6',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (6).webp',
        alt: 'Pastoral Care - 6',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_7',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (7).webp',
        alt: 'Pastoral Care - 7',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_8',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (8).webp',
        alt: 'Pastoral Care - 8',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_9',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (9).webp',
        alt: 'Pastoral Care - 9',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_10',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (10).webp',
        alt: 'Pastoral Care - 10',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_11',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (11).webp',
        alt: 'Pastoral Care - 11',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_12',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (12).webp',
        alt: 'Pastoral Care - 12',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_13',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (13).webp',
        alt: 'Pastoral Care - 13',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_14',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (14).webp',
        alt: 'Pastoral Care - 14',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_15',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (15).webp',
        alt: 'Pastoral Care - 15',
        category: 'church',
        subcategory: 'Pastoral Care'
    },
    {
        id: 'pc_16',
        src: '/images/gallery/church-events/pastoralCare/pastoralCare (16).webp',
        alt: 'Pastoral Care - 16',
        category: 'church',
        subcategory: 'Pastoral Care'
    }
]

const youthMeetingImages: GalleryImage[] = [
    {
        id: 'ym_1',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet1 (1).webp',
        alt: 'Youth Meeting - 1',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_2',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet1 (2).webp',
        alt: 'Youth Meeting - 2',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_3',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet1 (3).webp',
        alt: 'Youth Meeting - 3',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_4',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet1 (4).webp',
        alt: 'Youth Meeting - 4',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_5',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet1 (5).webp',
        alt: 'Youth Meeting - 5',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_6',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet1 (6).webp',
        alt: 'Youth Meeting - 6',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_7',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet1 (7).webp',
        alt: 'Youth Meeting - 7',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_8',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet1 (8).webp',
        alt: 'Youth Meeting - 8',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_9',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet2 (1).webp',
        alt: 'Youth Meeting - 9',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_10',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet2 (2).webp',
        alt: 'Youth Meeting - 10',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_11',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet2 (3).webp',
        alt: 'Youth Meeting - 11',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_12',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet2 (4).webp',
        alt: 'Youth Meeting - 12',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_13',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet2 (5).webp',
        alt: 'Youth Meeting - 13',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_14',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet2 (6).webp',
        alt: 'Youth Meeting - 14',
        category: 'church',
        subcategory: 'Youth Meeting'
    },
    {
        id: 'ym_15',
        src: '/images/gallery/church-events/YouthMeeting/youthMeet2 (7).webp',
        alt: 'Youth Meeting - 15',
        category: 'church',
        subcategory: 'Youth Meeting'
    }
]

// Kids Activities Images
const sundaySchoolImages: GalleryImage[] = [
    {
        id: 'ss_1',
        src: '/images/gallery/kids-activities/SundaySchool/SS (1).webp',
        alt: 'Sunday School Activities - 1',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_4',
        src: '/images/gallery/kids-activities/SundaySchool/SS (4).webp',
        alt: 'Sunday School Activities - 4',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_5',
        src: '/images/gallery/kids-activities/SundaySchool/SS (5).webp',
        alt: 'Sunday School Activities - 5',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_6',
        src: '/images/gallery/kids-activities/SundaySchool/SS (6).webp',
        alt: 'Sunday School Activities - 6',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_7',
        src: '/images/gallery/kids-activities/SundaySchool/SS (7).webp',
        alt: 'Sunday School Activities - 7',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_8',
        src: '/images/gallery/kids-activities/SundaySchool/SS (8).webp',
        alt: 'Sunday School Activities - 8',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_9',
        src: '/images/gallery/kids-activities/SundaySchool/SS (9).webp',
        alt: 'Sunday School Activities - 9',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_10',
        src: '/images/gallery/kids-activities/SundaySchool/SS (10).webp',
        alt: 'Sunday School Activities - 10',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_11',
        src: '/images/gallery/kids-activities/SundaySchool/SS (11).webp',
        alt: 'Sunday School Activities - 11',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_12',
        src: '/images/gallery/kids-activities/SundaySchool/SS (12).webp',
        alt: 'Sunday School Activities - 12',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_13',
        src: '/images/gallery/kids-activities/SundaySchool/SS (13).webp',
        alt: 'Sunday School Activities - 13',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_14',
        src: '/images/gallery/kids-activities/SundaySchool/SS (14).webp',
        alt: 'Sunday School Activities - 14',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_15',
        src: '/images/gallery/kids-activities/SundaySchool/SS (15).webp',
        alt: 'Sunday School Activities - 15',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_16',
        src: '/images/gallery/kids-activities/SundaySchool/SS (16).webp',
        alt: 'Sunday School Activities - 16',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_17',
        src: '/images/gallery/kids-activities/SundaySchool/SS (17).webp',
        alt: 'Sunday School Activities - 17',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_18',
        src: '/images/gallery/kids-activities/SundaySchool/SS (18).webp',
        alt: 'Sunday School Activities - 18',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_19',
        src: '/images/gallery/kids-activities/SundaySchool/SS (19).webp',
        alt: 'Sunday School Activities - 19',
        category: 'kids',
        subcategory: 'Sunday School'
    },
    {
        id: 'ss_20',
        src: '/images/gallery/kids-activities/SundaySchool/SS (20).webp',
        alt: 'Sunday School Activities - 20',
        category: 'kids',
        subcategory: 'Sunday School'
    }
]

const vbsImages: GalleryImage[] = [
    {
        id: 'vbs_1',
        src: '/images/gallery/kids-activities/VBS24/VBS1.webp',
        alt: 'Vacation Bible School 2024 - 1',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_2',
        src: '/images/gallery/kids-activities/VBS24/VBS2.webp',
        alt: 'Vacation Bible School 2024 - 2',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_3',
        src: '/images/gallery/kids-activities/VBS24/VBS3.webp',
        alt: 'Vacation Bible School 2024 - 3',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_5',
        src: '/images/gallery/kids-activities/VBS24/VBS5.webp',
        alt: 'Vacation Bible School 2024 - 5',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_6',
        src: '/images/gallery/kids-activities/VBS24/VBS6.webp',
        alt: 'Vacation Bible School 2024 - 6',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_7',
        src: '/images/gallery/kids-activities/VBS24/VBS7.webp',
        alt: 'Vacation Bible School 2024 - 7',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_8',
        src: '/images/gallery/kids-activities/VBS24/VBS8.webp',
        alt: 'Vacation Bible School 2024 - 8',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_9',
        src: '/images/gallery/kids-activities/VBS24/VBS9.webp',
        alt: 'Vacation Bible School 2024 - 9',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_10',
        src: '/images/gallery/kids-activities/VBS24/VBS10.webp',
        alt: 'Vacation Bible School 2024 - 10',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_11',
        src: '/images/gallery/kids-activities/VBS24/VBS11.webp',
        alt: 'Vacation Bible School 2024 - 11',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_12',
        src: '/images/gallery/kids-activities/VBS24/VBS12.webp',
        alt: 'Vacation Bible School 2024 - 12',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_13',
        src: '/images/gallery/kids-activities/VBS24/VBS13.webp',
        alt: 'Vacation Bible School 2024 - 13',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_14',
        src: '/images/gallery/kids-activities/VBS24/VBS14.webp',
        alt: 'Vacation Bible School 2024 - 14',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_15',
        src: '/images/gallery/kids-activities/VBS24/VBS15.webp',
        alt: 'Vacation Bible School 2024 - 15',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_16',
        src: '/images/gallery/kids-activities/VBS24/VBS16.webp',
        alt: 'Vacation Bible School 2024 - 16',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_17',
        src: '/images/gallery/kids-activities/VBS24/VBS17.webp',
        alt: 'Vacation Bible School 2024 - 17',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_18',
        src: '/images/gallery/kids-activities/VBS24/VBS18.webp',
        alt: 'Vacation Bible School 2024 - 18',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_19',
        src: '/images/gallery/kids-activities/VBS24/VBS19.webp',
        alt: 'Vacation Bible School 2024 - 19',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_20',
        src: '/images/gallery/kids-activities/VBS24/VBS20.webp',
        alt: 'Vacation Bible School 2024 - 20',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_21',
        src: '/images/gallery/kids-activities/VBS24/VBS21.webp',
        alt: 'Vacation Bible School 2024 - 21',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_22',
        src: '/images/gallery/kids-activities/VBS24/VBS22.webp',
        alt: 'Vacation Bible School 2024 - 22',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_23',
        src: '/images/gallery/kids-activities/VBS24/VBS23.webp',
        alt: 'Vacation Bible School 2024 - 23',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_24',
        src: '/images/gallery/kids-activities/VBS24/VBS24.webp',
        alt: 'Vacation Bible School 2024 - 24',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_25',
        src: '/images/gallery/kids-activities/VBS24/VBS25.webp',
        alt: 'Vacation Bible School 2024 - 25',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_26',
        src: '/images/gallery/kids-activities/VBS24/VBS26.webp',
        alt: 'Vacation Bible School 2024 - 26',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_27',
        src: '/images/gallery/kids-activities/VBS24/VBS27.webp',
        alt: 'Vacation Bible School 2024 - 27',
        category: 'kids',
        subcategory: 'VBS 2024'
    },
    {
        id: 'vbs_28',
        src: '/images/gallery/kids-activities/VBS24/VBS28.webp',
        alt: 'Vacation Bible School 2024 - 28',
        category: 'kids',
        subcategory: 'VBS 2024'
    }
]

const pgfBabiesImages: GalleryImage[] = [
    {
        id: 'babies_1',
        src: '/images/gallery/kids-activities/PGF_BABIES/bhupal.webp',
        alt: 'PGF Babies - Church Family',
        category: 'kids',
        subcategory: 'PGF Babies'
    }
]

// Additional Church Events Images
const palmSunday24Images: GalleryImage[] = [
    {
        id: 'ps24_1',
        src: '/images/gallery/church-events/palmSunday24/PS_24_1.webp',
        alt: 'Palm Sunday 2024 - 1',
        category: 'church',
        subcategory: 'Palm Sunday 2024'
    },
    {
        id: 'ps24_2',
        src: '/images/gallery/church-events/palmSunday24/PS_24_2.webp',
        alt: 'Palm Sunday 2024 - 2',
        category: 'church',
        subcategory: 'Palm Sunday 2024'
    },
    {
        id: 'ps24_3',
        src: '/images/gallery/church-events/palmSunday24/PS_24_3.webp',
        alt: 'Palm Sunday 2024 - 3',
        category: 'church',
        subcategory: 'Palm Sunday 2024'
    },
    {
        id: 'ps24_4',
        src: '/images/gallery/church-events/palmSunday24/PS_24_4.webp',
        alt: 'Palm Sunday 2024 - 4',
        category: 'church',
        subcategory: 'Palm Sunday 2024'
    },
    {
        id: 'ps24_5',
        src: '/images/gallery/church-events/palmSunday24/PS_24_5.webp',
        alt: 'Palm Sunday 2024 - 5',
        category: 'church',
        subcategory: 'Palm Sunday 2024'
    },
    {
        id: 'ps24_6',
        src: '/images/gallery/church-events/palmSunday24/PS_24_6.webp',
        alt: 'Palm Sunday 2024 - 6',
        category: 'church',
        subcategory: 'Palm Sunday 2024'
    }
]

const palmSundayRallyImages: GalleryImage[] = [
    {
        id: 'psr_1',
        src: '/images/gallery/church-events/PalmSundayRally/PSR_1.webp',
        alt: 'Palm Sunday Rally - 1',
        category: 'church',
        subcategory: 'Palm Sunday Rally'
    },
    {
        id: 'psr_2',
        src: '/images/gallery/church-events/PalmSundayRally/PSR_2.webp',
        alt: 'Palm Sunday Rally - 2',
        category: 'church',
        subcategory: 'Palm Sunday Rally'
    },
    {
        id: 'psr_3',
        src: '/images/gallery/church-events/PalmSundayRally/PSR_3.webp',
        alt: 'Palm Sunday Rally - 3',
        category: 'church',
        subcategory: 'Palm Sunday Rally'
    },
    {
        id: 'psr_4',
        src: '/images/gallery/church-events/PalmSundayRally/PSR_4.webp',
        alt: 'Palm Sunday Rally - 4',
        category: 'church',
        subcategory: 'Palm Sunday Rally'
    },
    {
        id: 'psr_5',
        src: '/images/gallery/church-events/PalmSundayRally/PSR_5.webp',
        alt: 'Palm Sunday Rally - 5',
        category: 'church',
        subcategory: 'Palm Sunday Rally'
    },
    {
        id: 'psr_6',
        src: '/images/gallery/church-events/PalmSundayRally/PSR_6.webp',
        alt: 'Palm Sunday Rally - 6',
        category: 'church',
        subcategory: 'Palm Sunday Rally'
    },
    {
        id: 'psr_7',
        src: '/images/gallery/church-events/PalmSundayRally/PSR_7.webp',
        alt: 'Palm Sunday Rally - 7',
        category: 'church',
        subcategory: 'Palm Sunday Rally'
    },
    {
        id: 'psr_8',
        src: '/images/gallery/church-events/PalmSundayRally/PSR_8.webp',
        alt: 'Palm Sunday Rally - 8',
        category: 'church',
        subcategory: 'Palm Sunday Rally'
    },
    {
        id: 'psr_9',
        src: '/images/gallery/church-events/PalmSundayRally/PSR_9.webp',
        alt: 'Palm Sunday Rally - 9',
        category: 'church',
        subcategory: 'Palm Sunday Rally'
    },
    {
        id: 'psr_10',
        src: '/images/gallery/church-events/PalmSundayRally/PSR_10.webp',
        alt: 'Palm Sunday Rally - 10',
        category: 'church',
        subcategory: 'Palm Sunday Rally'
    },
    {
        id: 'psr_11',
        src: '/images/gallery/church-events/PalmSundayRally/PSR_11.webp',
        alt: 'Palm Sunday Rally - 11',
        category: 'church',
        subcategory: 'Palm Sunday Rally'
    }
]

const preChristmas23Images: GalleryImage[] = [
    {
        id: 'prechristmas23_1',
        src: '/images/gallery/church-events/preChristmas23/PreChristmas2023_1.webp',
        alt: 'Pre-Christmas 2023 - 1',
        category: 'church',
        subcategory: 'Pre-Christmas 2023'
    },
    {
        id: 'prechristmas23_2',
        src: '/images/gallery/church-events/preChristmas23/PreChristmas2023_2.webp',
        alt: 'Pre-Christmas 2023 - 2',
        category: 'church',
        subcategory: 'Pre-Christmas 2023'
    },
    {
        id: 'prechristmas23_3',
        src: '/images/gallery/church-events/preChristmas23/PreChristmas2023_3.webp',
        alt: 'Pre-Christmas 2023 - 3',
        category: 'church',
        subcategory: 'Pre-Christmas 2023'
    },
    {
        id: 'prechristmas23_4',
        src: '/images/gallery/church-events/preChristmas23/PreChristmas2023_4.webp',
        alt: 'Pre-Christmas 2023 - 4',
        category: 'church',
        subcategory: 'Pre-Christmas 2023'
    },
    {
        id: 'prechristmas23_5',
        src: '/images/gallery/church-events/preChristmas23/PreChristmas2023_5.webp',
        alt: 'Pre-Christmas 2023 - 5',
        category: 'church',
        subcategory: 'Pre-Christmas 2023'
    },
    {
        id: 'prechristmas23_6',
        src: '/images/gallery/church-events/preChristmas23/PreChristmas2023_6.webp',
        alt: 'Pre-Christmas 2023 - 6',
        category: 'church',
        subcategory: 'Pre-Christmas 2023'
    },
    {
        id: 'prechristmas23_7',
        src: '/images/gallery/church-events/preChristmas23/PreChristmas2023_7.webp',
        alt: 'Pre-Christmas 2023 - 7',
        category: 'church',
        subcategory: 'Pre-Christmas 2023'
    },
    {
        id: 'prechristmas23_8',
        src: '/images/gallery/church-events/preChristmas23/PreChristmas2023_8.webp',
        alt: 'Pre-Christmas 2023 - 8',
        category: 'church',
        subcategory: 'Pre-Christmas 2023'
    },
    {
        id: 'prechristmas23_9',
        src: '/images/gallery/church-events/preChristmas23/PreChristmas2023_9.webp',
        alt: 'Pre-Christmas 2023 - 9',
        category: 'church',
        subcategory: 'Pre-Christmas 2023'
    },
    {
        id: 'prechristmas23_10',
        src: '/images/gallery/church-events/preChristmas23/PreChristmas2023_10.webp',
        alt: 'Pre-Christmas 2023 - 10',
        category: 'church',
        subcategory: 'Pre-Christmas 2023'
    },
    {
        id: 'prechristmas23_11',
        src: '/images/gallery/church-events/preChristmas23/PreChristmas2023_11.webp',
        alt: 'Pre-Christmas 2023 - 11',
        category: 'church',
        subcategory: 'Pre-Christmas 2023'
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
    ...watchNightService2024Images,
    ...palmSunday24Images,
    ...palmSundayRallyImages,
    ...preChristmas23Images,
    ...marriedCoupleMeetImages,
    ...oldTestamentSeminarImages,
    ...pastoralCareImages,
    ...youthMeetingImages
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
        coverImage: '/images/gallery/church-events/churchFellowship/CFI (1).webp',
        images: churchFellowshipImages,
        category: 'church'
    },
    {
        id: 'christmas-2023',
        name: 'Christmas 2023',
        title: { en: 'Christmas 2023', te: 'క్రిస్మస్ 2023' },
        description: { en: 'Celebrating the birth of Jesus Christ', te: 'యేసు క్రీస్తు జన్మను జరుపుకుంటున్నాం' },
        coverImage: '/images/gallery/church-events/Christmas2023/Christmas23_1.webp',
        images: christmas2023Images,
        category: 'church'
    },
    {
        id: 'easter-2024',
        name: 'Easter 2024',
        title: { en: 'Easter 2024', te: 'ఈస్టర్ 2024' },
        description: { en: 'Celebrating the resurrection of Jesus', te: 'యేసు పునరుత్థానాన్ని జరుపుకుంటున్నాం' },
        coverImage: '/images/gallery/church-events/Easter24/Easter24_1.webp',
        images: easter24Images,
        category: 'church'
    },
    {
        id: 'baptisms',
        name: 'Baptisms',
        title: { en: 'Baptisms', te: 'బాప్టిజంలు' },
        description: { en: 'New believers taking the step of faith', te: 'కొత్త విశ్వాసులు విశ్వాస అడుగు వేస్తున్నారు' },
        coverImage: '/images/gallery/church-events/Baptisms/IMG_0245.JPG',
        images: baptismsImages,
        category: 'church'
    },
    {
        id: '4th-anniversary',
        name: '4th Anniversary',
        title: { en: '4th Anniversary', te: '4వ వార్షికోత్సవం' },
        description: { en: 'Celebrating 4 years of God\'s faithfulness', te: 'దేవుని విశ్వసనీయత యొక్క 4 సంవత్సరాలను జరుపుకుంటున్నాం' },
        coverImage: '/images/gallery/church-events/4thAnnversday/A4_1.webp',
        images: anniversaryImages,
        category: 'church'
    },
    {
        id: 'pre-christmas-2024',
        name: 'Pre-Christmas 2024',
        title: { en: 'Pre-Christmas 2024', te: 'ప్రీ-క్రిస్మస్ 2024' },
        description: { en: 'Preparing hearts for Christmas celebration', te: 'క్రిస్మస్ వేడుకకు హృదయాలను సిద్ధం చేస్తున్నాం' },
        coverImage: '/images/gallery/church-events/preChristmas2024/pre_christmas_2024 (1).webp',
        images: preChristmas2024Images,
        category: 'church'
    },
    {
        id: 'watch-night-service-2024',
        name: 'Watch Night Service 2024',
        title: { en: 'Watch Night Service 2024', te: 'వాచ్ నైట్ సేవ 2024' },
        description: { en: 'Welcoming the new year with prayer and worship', te: 'ప్రార్థన మరియు ఆరాధనతో కొత్త సంవత్సరాన్ని స్వాగతించడం' },
        coverImage: '/images/gallery/church-events/WatchNightService2024/watchNight2024 (1).webp',
        images: watchNightService2024Images,
        category: 'church'
    },
    {
        id: 'palm-sunday-2024',
        name: 'Palm Sunday 2024',
        title: { en: 'Palm Sunday 2024', te: 'పామ్ సండే 2024' },
        description: { en: 'Celebrating Jesus\' triumphant entry into Jerusalem', te: 'జెరూసలేంలోకి యేసు విజయవంతమైన ప్రవేశాన్ని జరుపుకుంటున్నాం' },
        coverImage: '/images/gallery/church-events/palmSunday24/PS_24_1.webp',
        images: palmSunday24Images,
        category: 'church'
    },
    {
        id: 'palm-sunday-rally',
        name: 'Palm Sunday Rally',
        title: { en: 'Palm Sunday Rally', te: 'పామ్ సండే ర్యాలీ' },
        description: { en: 'Community rally celebrating Palm Sunday', te: 'పామ్ సండేను జరుపుకునే కమ్యూనిటీ ర్యాలీ' },
        coverImage: '/images/gallery/church-events/PalmSundayRally/PSR_1.webp',
        images: palmSundayRallyImages,
        category: 'church'
    },
    {
        id: 'pre-christmas-2023',
        name: 'Pre-Christmas 2023',
        title: { en: 'Pre-Christmas 2023', te: 'ప్రీ-క్రిస్మస్ 2023' },
        description: { en: 'Preparing hearts for Christmas celebration 2023', te: 'క్రిస్మస్ వేడుక 2023కు హృదయాలను సిద్ధం చేస్తున్నాం' },
        coverImage: '/images/gallery/church-events/preChristmas23/PreChristmas2023_1.webp',
        images: preChristmas23Images,
        category: 'church'
    },
    {
        id: 'married-couple-meet',
        name: 'Married Couple Meet',
        title: { en: 'Married Couple Meet', te: 'వివాహిత జంటల సమావేశం' },
        description: { en: 'Fellowship and strengthening of married couples', te: 'వివాహిత జంటల సహవాసం మరియు బలపరచడం' },
        coverImage: '/images/gallery/church-events/marriedCoupleMeet/marriedCoupleMeet (1).webp',
        images: marriedCoupleMeetImages,
        category: 'church'
    },
    {
        id: 'old-testament-seminar',
        name: 'Old Testament Seminar',
        title: { en: 'Old Testament Made Easy', te: 'పాత నిబంధన సులభం చేయబడింది' },
        description: { en: 'Bible study seminar by J. Godwin Nickelson', te: 'J. గాడ్విన్ నికెల్సన్ చేత బైబిల్ అధ్యయన సెమినార్' },
        coverImage: '/images/gallery/church-events/Old Testament Made Easy by J. Godwin Nickelson/seminar (1).webp',
        images: oldTestamentSeminarImages,
        category: 'church'
    },
    {
        id: 'pastoral-care',
        name: 'Pastoral Care',
        title: { en: 'Pastoral Care', te: 'పాస్టరల్ కేర్' },
        description: { en: 'Caring for the flock with love and compassion', te: 'ప్రేమ మరియు కరుణతో మంద పట్ల శ్రద్ధ' },
        coverImage: '/images/gallery/church-events/pastoralCare/pastoralCare (1).webp',
        images: pastoralCareImages,
        category: 'church'
    },
    {
        id: 'youth-meeting',
        name: 'Youth Meeting',
        title: { en: 'Youth Meeting', te: 'యువజన సమావేశం' },
        description: { en: 'Empowering and inspiring the next generation', te: 'తరువాతి తరానికి శక్తినిచ్చి ప్రేరేపించడం' },
        coverImage: '/images/gallery/church-events/YouthMeeting/youthMeet1 (1).webp',
        images: youthMeetingImages,
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
        coverImage: '/images/gallery/kids-activities/SundaySchool/SS (1).webp',
        images: sundaySchoolImages,
        category: 'kids'
    },
    {
        id: 'vbs-2024',
        name: 'VBS 2024',
        title: { en: 'Vacation Bible School 2024', te: 'వేకేషన్ బైబిల్ స్కూల్ 2024' },
        description: { en: 'Fun-filled Bible learning for children', te: 'పిల్లలకు ఆనందకరమైన బైబిల్ అభ్యాసం' },
        coverImage: '/images/gallery/kids-activities/VBS24/VBS1.webp',
        images: vbsImages,
        category: 'kids'
    },
    {
        id: 'pgf-babies',
        name: 'PGF Babies',
        title: { en: 'PGF Babies', te: 'PGF పిల్లలు' },
        description: { en: 'Our precious little ones in the church family', te: 'చర్చి కుటుంబంలో మా విలువైన చిన్నపిల్లలు' },
        coverImage: '/images/gallery/kids-activities/PGF_BABIES/bhupal.webp',
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
