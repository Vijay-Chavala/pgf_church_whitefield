import { create } from 'zustand'
import type { NavigationState, NavigationItem } from './types'

// Define navigation items structure
const defaultNavigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    labelTe: 'హోమ్',
    href: '/',
    icon: 'home'
  },
  {
    id: 'ministries',
    label: 'Ministries',
    labelTe: 'పరిచర్యలు',
    href: '/ministries',
    icon: 'users',
    subItems: [
      {
        id: 'sunday-service',
        label: 'Sunday Service & Fellowship',
        labelTe: 'ఆదివారం సేవ మరియు సహవాసం',
        href: '/ministries/sunday-service'
      },
      {
        id: 'online-prayer',
        label: 'Online Prayer Meeting',
        labelTe: 'ఆన్‌లైన్ ప్రార్థనా సభ',
        href: '/ministries/online-prayer'
      },
      {
        id: 'youth-ministry',
        label: 'Youth Ministry',
        labelTe: 'యువజన పరిచర్య',
        href: '/ministries/youth-ministry'
      },
      {
        id: 'womens-ministry',
        label: "Women's Ministry",
        labelTe: 'మహిళల పరిచర్య',
        href: '/ministries/womens-ministry'
      },
      {
        id: 'sunday-school',
        label: 'Sunday School & Kids Ministry',
        labelTe: 'ఆదివారం పాఠశాల & పిల్లల సేవ',
        href: '/ministries/sunday-school'
      }
    ]
  },
  {
    id: 'sermons',
    label: 'Sermons',
    labelTe: 'ప్రవచనాలు',
    href: '/sermons',
    icon: 'book-open'
  },
  {
    id: 'gallery',
    label: 'Gallery',
    labelTe: 'గ్యాలరీ',
    href: '/gallery',
    icon: 'photo'
  }
]

export const useNavigationStore = create<NavigationState>((set, get) => ({
  isMenuOpen: false,
  isMobileMenuOpen: false,
  activeSection: 'home',
  breadcrumbs: [],
  navigationItems: defaultNavigationItems,

  setMenuOpen: (open: boolean) => {
    set({ isMenuOpen: open })

    // Close mobile menu when desktop menu state changes
    if (!open) {
      set({ isMobileMenuOpen: false })
    }
  },

  setMobileMenuOpen: (open: boolean) => {
    set({ isMobileMenuOpen: open })

    // Prevent body scroll when mobile menu is open
    if (typeof document !== 'undefined') {
      if (open) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }

    // Dispatch event for other components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('mobileMenuToggle', {
        detail: { isOpen: open }
      }))
    }
  },

  setActiveSection: (section: string) => {
    set({ activeSection: section })

    // Update navigation items with active state
    const { navigationItems } = get()
    const updatedItems: NavigationItem[] = navigationItems.map(item => ({
      ...item,
      isActive: item.id === section || item.href === section,
      subItems: item.subItems ? item.subItems.map(subItem => ({
        ...subItem,
        isActive: subItem.id === section || subItem.href === section
      })) : undefined
    })) as NavigationItem[]

    set({ navigationItems: updatedItems })
  },

  setBreadcrumbs: (breadcrumbs: Array<{ label: string; href: string }>) => {
    set({ breadcrumbs })
  },

  toggleMobileMenu: () => {
    const { isMobileMenuOpen } = get()
    get().setMobileMenuOpen(!isMobileMenuOpen)
  },

  closeAllMenus: () => {
    set({
      isMenuOpen: false,
      isMobileMenuOpen: false
    })

    // Restore body scroll
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
    }
  }
}))

// Utility function to generate breadcrumbs from path
export const generateBreadcrumbs = (pathname: string): Array<{ label: string; href: string }> => {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: Array<{ label: string; href: string }> = [
    { label: 'Home', href: '/' }
  ]

  let currentPath = ''

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`

    // Convert segment to readable label
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')

    breadcrumbs.push({
      label,
      href: currentPath
    })
  })

  return breadcrumbs
}

// Helper function to find navigation item by href
export const findNavigationItem = (href: string): NavigationItem | null => {
  const { navigationItems } = useNavigationStore.getState()

  for (const item of navigationItems) {
    if (item.href === href) {
      return item
    }

    if (item.subItems) {
      for (const subItem of item.subItems) {
        if (subItem.href === href) {
          return subItem
        }
      }
    }
  }

  return null
}

// Auto-close mobile menu on route change
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    useNavigationStore.getState().closeAllMenus()
  })
}

// Handle escape key to close menus
if (typeof document !== 'undefined') {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const { isMobileMenuOpen, isMenuOpen } = useNavigationStore.getState()
      if (isMobileMenuOpen || isMenuOpen) {
        useNavigationStore.getState().closeAllMenus()
      }
    }
  })

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const { isMobileMenuOpen } = useNavigationStore.getState()
    if (isMobileMenuOpen) {
      const target = e.target as Element
      const mobileMenu = document.querySelector('[data-mobile-menu]')
      const menuButton = document.querySelector('[data-mobile-menu-button]')

      if (
        mobileMenu &&
        menuButton &&
        !mobileMenu.contains(target) &&
        !menuButton.contains(target)
      ) {
        useNavigationStore.getState().setMobileMenuOpen(false)
      }
    }
  })
} 