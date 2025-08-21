'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  Calendar,
  Users,
  CalendarCheck,
  Image as ImageIcon,
  Phone,
  BookOpen,
  Newspaper,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { useNavigationStore } from '@/lib/stores/navigation-store'
import { useLanguageStore } from '@/lib/stores/language-store'
import { useThemeStore } from '@/lib/stores/theme-store'
import { churchSettings } from '@/data/church-data'
import { cn } from '@/lib/utils'
import LanguageSwitcher from './language-switcher'

const iconMap = {
  home: Home,
  info: Info,
  calendar: Calendar,
  users: Users,
  'calendar-check': CalendarCheck,
  'calendar-days': CalendarCheck,
  image: ImageIcon,
  photo: ImageIcon,
  phone: Phone,
  'book-open': BookOpen,
  newspaper: Newspaper,
}

interface HeaderProps {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  const pathname = usePathname()
  const {
    navigationItems,
    isMobileMenuOpen,
    setMobileMenuOpen,
    setActiveSection,
  } = useNavigationStore()
  const { currentLanguage } = useLanguageStore()
  const { getCurrentTheme } = useThemeStore()
  const isDarkMode = getCurrentTheme() === 'dark'
  const [scrolled, setScrolled] = React.useState(false)

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Set active section based on pathname
  React.useEffect(() => {
    const currentPath = pathname.split('/')[1] || 'home'
    setActiveSection(currentPath)
  }, [pathname, setActiveSection])

  const getIcon = (iconName?: string) => {
    if (!iconName) return null
    const IconComponent = iconMap[iconName as keyof typeof iconMap]
    return IconComponent ? <IconComponent className='w-4 h-4' /> : null
  }

  const getLabel = (item: any) => {
    return currentLanguage === 'te' ? item.labelTe : item.label
  }

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm'
          : 'bg-background/60 backdrop-blur-sm',
        className
      )}
    >
      <div className='container mx-auto px-4'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo and Church Name */}
          <Link
            href='/'
            className='flex items-center space-x-3 hover:opacity-80 transition-opacity'
            onClick={closeMenu}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='relative w-12 h-12 rounded-lg overflow-hidden shadow-lg'
            >
              <Image
                src='/PGFLOGO.png'
                alt='Peniel Gospel Fellowship Logo'
                fill
                className='object-contain'
                priority
                sizes='48px'
              />
            </motion.div>
            <div className='hidden sm:block'>
              <h1 className='text-xl font-bold text-foreground leading-tight'>
                {getLabel(churchSettings.churchName)}
              </h1>
              <p className='text-xs text-muted-foreground'>
                {currentLanguage === 'te'
                  ? 'పెనీయేల్ గాస్పెల్ ఫెలోషిప్'
                  : 'Peniel Gospel Fellowship'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:block'>
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map(item => (
                  <NavigationMenuItem key={item.id}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger className='bg-transparent'>
                          <div className='flex items-center space-x-2'>
                            {getIcon(item.icon)}
                            <span>{getLabel(item)}</span>
                          </div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2'>
                            {item.subItems.map(subItem => (
                              <li key={subItem.id}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                      pathname === subItem.href &&
                                        'bg-accent text-accent-foreground'
                                    )}
                                  >
                                    <div className='text-sm font-medium leading-none'>
                                      {getLabel(subItem)}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            'bg-transparent',
                            pathname === item.href &&
                              'bg-accent text-accent-foreground'
                          )}
                        >
                          <div className='flex items-center space-x-2'>
                            {getIcon(item.icon)}
                            <span>{getLabel(item)}</span>
                          </div>
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className='flex items-center space-x-2'>
            {/* Language Switcher */}
            {/** <LanguageSwitcher /> **/}

            {/* Theme Toggle */}
            <ThemeToggle className='w-9 px-0' />

            {/* Mobile Menu */}
            <div className='lg:hidden'>
              <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='w-9 px-0'
                    aria-label='Open menu'
                  >
                    <Menu className='w-5 h-5' />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side='right'
                  className='w-80 p-0 bg-card/95 backdrop-blur-md border-l border-border'
                >
                  <div className='flex flex-col h-full'>
                    {/* Mobile Header */}
                    <div className='flex items-center justify-between p-4 border-b border-border'>
                      <div className='flex items-center space-x-3'>
                        <div className='flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary to-forest-green rounded-lg'>
                          <span className='text-primary-foreground font-bold text-sm'>
                            ✝
                          </span>
                        </div>
                        <div>
                          <h2 className='text-lg font-semibold text-foreground'>
                            {currentLanguage === 'te' ? 'మెనూ' : 'Menu'}
                          </h2>
                        </div>
                      </div>
                      <SheetClose asChild>
                        <Button
                          variant='ghost'
                          size='sm'
                          className='w-8 h-8 p-0'
                        >
                          <X className='w-4 h-4' />
                        </Button>
                      </SheetClose>
                    </div>

                    {/* Mobile Navigation */}
                    <div className='flex-1 overflow-y-auto'>
                      <nav className='p-4 space-y-2'>
                        {navigationItems.map(item => (
                          <div key={item.id}>
                            {item.subItems ? (
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant='ghost'
                                    className='w-full justify-between h-auto p-3 text-left'
                                  >
                                    <div className='flex items-center space-x-3'>
                                      {getIcon(item.icon)}
                                      <span className='font-medium'>
                                        {getLabel(item)}
                                      </span>
                                    </div>
                                    <ChevronDown className='w-4 h-4' />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                  align='start'
                                  className='w-64'
                                  side='bottom'
                                >
                                  {item.subItems.map(subItem => (
                                    <DropdownMenuItem key={subItem.id} asChild>
                                      <Link
                                        href={subItem.href}
                                        className='w-full cursor-pointer'
                                        onClick={closeMenu}
                                      >
                                        <span className='font-medium'>
                                          {getLabel(subItem)}
                                        </span>
                                      </Link>
                                    </DropdownMenuItem>
                                  ))}
                                </DropdownMenuContent>
                              </DropdownMenu>
                            ) : (
                              <Button
                                variant='ghost'
                                className={cn(
                                  'w-full justify-start h-auto p-3 text-left',
                                  pathname === item.href &&
                                    'bg-accent text-accent-foreground'
                                )}
                                asChild
                              >
                                <Link href={item.href} onClick={closeMenu}>
                                  <div className='flex items-center space-x-3'>
                                    {getIcon(item.icon)}
                                    <span className='font-medium'>
                                      {getLabel(item)}
                                    </span>
                                  </div>
                                </Link>
                              </Button>
                            )}
                          </div>
                        ))}
                      </nav>
                    </div>

                    {/* Mobile Footer */}
                    <div className='p-4 border-t border-border bg-muted/30'>
                      <div className='text-center'>
                        <p className='text-sm text-muted-foreground'>
                          {getLabel(churchSettings.churchName)}
                        </p>
                        <p className='text-xs text-muted-foreground mt-1'>
                          {currentLanguage === 'te'
                            ? 'విశ్వాసంలో కలిసి పెరుగుతున్నాం'
                            : 'Growing Together in Faith'}
                        </p>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
