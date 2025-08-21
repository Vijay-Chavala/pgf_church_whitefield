import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Language, LanguageState } from './types'

// Translation keys for common terms
const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    events: 'Events',
    ministries: 'Ministries',
    sermons: 'Sermons',
    contact: 'Contact',
    news: 'News',
    gallery: 'Gallery',

    // Common phrases
    welcome: 'Welcome',
    loading: 'Loading...',
    error: 'Error',
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    close: 'Close',

    // Time and dates
    today: 'Today',
    tomorrow: 'Tomorrow',
    yesterday: 'Yesterday',
    sunday: 'Sunday',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',

    // Months
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December',

    // Church specific
    church: 'Church',
    pastor: 'Pastor',
    worship: 'Worship',
    prayer: 'Prayer',
    bible_study: 'Bible Study',
    youth: 'Youth',
    children: 'Children',
    fellowship: 'Fellowship',
    ministry: 'Ministry',
    service: 'Service',
    sermon: 'Sermon',
    testimony: 'Testimony',
    offering: 'Offering',
    baptism: 'Baptism',
    communion: 'Communion',

    // Contact
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    subject: 'Subject',
    address: 'Address',

    // Forms
    required: 'Required',
    optional: 'Optional',
    invalid_email: 'Invalid email address',
    invalid_phone: 'Invalid phone number',
    field_required: 'This field is required',

    // Actions
    register: 'Register',
    login: 'Login',
    logout: 'Logout',
    search: 'Search',
    view_more: 'View More',
    read_more: 'Read More',
    download: 'Download',
    share: 'Share',

    // Status
    upcoming: 'Upcoming',
    past: 'Past',
    live: 'Live',
    published: 'Published',
    draft: 'Draft',
    active: 'Active',
    inactive: 'Inactive'
  },
  te: {
    // Navigation - Telugu
    home: 'హోమ్',
    about: 'మా గురించి',
    services: 'సేవలు',
    events: 'కార్యక్రమలు',
    ministries: 'పరిచర్యలు',
    sermons: 'ప్రవచనాలు',
    contact: 'సంప్రదింపు',
    news: 'వార్తలు',
    gallery: 'గ్యాలరీ',

    // Common phrases - Telugu
    welcome: 'స్వాగతం',
    loading: 'లోడ్ అవుతోంది...',
    error: 'లోపం',
    submit: 'సమర్పించు',
    cancel: 'రద్దు చేయి',
    save: 'సేవ్ చేయి',
    edit: 'సవరించు',
    delete: 'తొలగించు',
    confirm: 'నిర్ధారించు',
    close: 'మూసివేయి',

    // Time and dates - Telugu
    today: 'ఈ రోజు',
    tomorrow: 'రేపు',
    yesterday: 'నిన్న',
    sunday: 'ఆదివారం',
    monday: 'సోమవారం',
    tuesday: 'మంగళవారం',
    wednesday: 'బుధవారం',
    thursday: 'గురువారం',
    friday: 'శుక్రవారం',
    saturday: 'శనివారం',

    // Months - Telugu
    january: 'జనవరి',
    february: 'ఫిబ్రవరి',
    march: 'మార్చి',
    april: 'ఏప్రిల్',
    may: 'మే',
    june: 'జూన్',
    july: 'జూలై',
    august: 'ఆగస్టు',
    september: 'సెప్టెంబర్',
    october: 'అక్టోబర్',
    november: 'నవంబర్',
    december: 'డిసెంబర్',

    // Church specific - Telugu
    church: 'చర్చ్',
    pastor: 'పాస్టర్',
    worship: 'ఆరాధన',
    prayer: 'ప్రార్థన',
    bible_study: 'బైబిల్ అధ్యయనం',
    youth: 'యువకులు',
    children: 'పిల్లలు',
    fellowship: 'సహవాసం',
    ministry: 'పరిచర్య',
    service: 'సేవ',
    sermon: 'ప్రవచనం',
    testimony: 'సాక్ష్యం',
    offering: 'అర్పణ',
    baptism: 'బాప్టిజం',
    communion: 'కమ్యూనియన్',

    // Contact - Telugu
    name: 'పేరు',
    email: 'ఇమెయిల్',
    phone: 'ఫోన్',
    message: 'సందేశం',
    subject: 'విషయం',
    address: 'చిరునామా',

    // Forms - Telugu
    required: 'తప్పనిసరి',
    optional: 'ఐచ్ఛికం',
    invalid_email: 'చెల్లని ఇమెయిల్ చిరునామా',
    invalid_phone: 'చెల్లని ఫోన్ నంబర్',
    field_required: 'ఈ ఫీల్డ్ తప్పనిసరి',

    // Actions - Telugu
    register: 'నమోదు చేయండి',
    login: 'లాగిన్',
    logout: 'లాగౌట్',
    search: 'వెతకండి',
    view_more: 'మరింత చూడండి',
    read_more: 'మరింత చదవండి',
    download: 'డౌన్‌లోడ్',
    share: 'భాగస్వామ్యం',

    // Status - Telugu
    upcoming: 'రాబోయే',
    past: 'గత',
    live: 'ప్రత్యక్ష',
    published: 'ప్రచురించబడింది',
    draft: 'డ్రాఫ్ట్',
    active: 'చురుకైన',
    inactive: 'నిష్క్రియ'
  }
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      currentLanguage: 'en', // Default to English
      isLoading: false,

      setLanguage: (language: Language) => {
        set({ isLoading: true })

        // Simulate async language loading
        setTimeout(() => {
          set({
            currentLanguage: language,
            isLoading: false
          })

          // Update document lang attribute
          if (typeof document !== 'undefined') {
            document.documentElement.lang = language === 'te' ? 'te-IN' : 'en-US'
          }

          // Dispatch custom event for other components to listen
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('languageChanged', {
              detail: { language }
            }))
          }
        }, 100)
      },

      toggleLanguage: () => {
        const { currentLanguage } = get()
        const newLanguage = currentLanguage === 'en' ? 'te' : 'en'
        get().setLanguage(newLanguage)
      },

      t: (key: string, fallback?: string) => {
        const { currentLanguage } = get()
        const translation = translations[currentLanguage]?.[key as keyof typeof translations.en]

        if (translation) {
          return translation
        }

        // Fallback to English if Telugu translation not found
        if (currentLanguage === 'te') {
          const englishTranslation = translations.en[key as keyof typeof translations.en]
          if (englishTranslation) {
            return englishTranslation
          }
        }

        // Return fallback or key if no translation found
        return fallback || key
      }
    }),
    {
      name: 'language-store',
      partialize: (state) => ({
        currentLanguage: state.currentLanguage
      })
    }
  )
) 