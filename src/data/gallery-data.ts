export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  subcategory: string
}

export interface GalleryCategory {
  id: string
  title: { en: string; te: string }
  images: GalleryImage[]
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

// Kids Activities Images
const sundaySchoolImages: GalleryImage[] = [
  {
    id: 'ss_1',
    src: '/images/gallery/SundaySchool/SS1.webp',
    alt: 'Sunday School Activities',
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
  ...anniversaryImages
]

const allKidsImages = [
  ...sundaySchoolImages,
  ...vbsImages,
  ...pgfBabiesImages
]

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'church',
    title: { en: 'Church Moments', te: 'చర్చి క్షణాలు' },
    images: allChurchImages
  },
  {
    id: 'kids',
    title: { en: 'Kids Activities', te: 'పిల్లల కార్యకలాపాలు' },
    images: allKidsImages
  }
]

export const allGalleryImages = [...allChurchImages, ...allKidsImages] 