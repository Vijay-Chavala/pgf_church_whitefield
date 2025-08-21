'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ChevronRight } from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { useLanguageStore } from '@/lib/stores/language-store'
import { useNavigationStore } from '@/lib/stores/navigation-store'
import { cn } from '@/lib/utils'

interface BreadcrumbNavProps {
  className?: string
  showHome?: boolean
  maxItems?: number
}

export default function BreadcrumbNav({ 
  className, 
  showHome = true,
  maxItems = 4 
}: BreadcrumbNavProps) {
  const pathname = usePathname()
  const { currentLanguage } = useLanguageStore()
  const { navigationItems } = useNavigationStore()

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = React.useMemo(() => {
    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: Array<{ label: string; href: string; isActive?: boolean }> = []

    // Add home if showHome is true
    if (showHome) {
      breadcrumbs.push({
        label: currentLanguage === 'te' ? 'హోమ్' : 'Home',
        href: '/',
        isActive: pathname === '/'
      })
    }

    // If we're on the home page, return early
    if (pathname === '/') {
      return breadcrumbs
    }

    // Build breadcrumbs from path segments
    let currentPath = ''
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === pathSegments.length - 1

      // Find matching navigation item
      let foundItem = null
      let parentItem = null

      // Search in main navigation items
      for (const navItem of navigationItems) {
        if (navItem.href === currentPath) {
          foundItem = navItem
          break
        }
        
        // Search in sub-items
        if (navItem.subItems) {
          for (const subItem of navItem.subItems) {
            if (subItem.href === currentPath) {
              foundItem = subItem
              parentItem = navItem
              break
            }
          }
        }
        
        if (foundItem) break
      }

      // Add parent item if we found a sub-item
      if (parentItem && breadcrumbs.length > 0) {
        const parentExists = breadcrumbs.some(crumb => crumb.href === parentItem.href)
        if (!parentExists) {
          breadcrumbs.push({
            label: currentLanguage === 'te' ? parentItem.labelTe : parentItem.label,
            href: parentItem.href,
            isActive: false
          })
        }
      }

      // Add current item
      if (foundItem) {
        breadcrumbs.push({
          label: currentLanguage === 'te' ? foundItem.labelTe : foundItem.label,
          href: currentPath,
          isActive: isLast
        })
      } else {
        // Fallback: create breadcrumb from segment
        const formattedLabel = segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
        
        breadcrumbs.push({
          label: formattedLabel,
          href: currentPath,
          isActive: isLast
        })
      }
    })

    // Limit breadcrumbs if maxItems is set
    if (breadcrumbs.length > maxItems) {
      const firstItem = breadcrumbs[0]
      const lastItems = breadcrumbs.slice(-maxItems + 2)
      return [
        firstItem,
        { label: '...', href: '', isActive: false },
        ...lastItems
      ]
    }

    return breadcrumbs
  }, [pathname, navigationItems, currentLanguage, showHome, maxItems])

  // Don't render if only home breadcrumb or no breadcrumbs
  if (generateBreadcrumbs.length <= 1) {
    return null
  }

  return (
    <nav 
      className={cn("py-3", className)} 
      aria-label={currentLanguage === 'te' ? 'నావిగేషన్ పాత్' : 'Breadcrumb navigation'}
    >
      <Breadcrumb>
        <BreadcrumbList>
          {generateBreadcrumbs.map((crumb, index) => {
            const isLast = index === generateBreadcrumbs.length - 1
            const isEllipsis = crumb?.label === '...'

            if (!crumb) return null
            
            return (
              <React.Fragment key={`${crumb.href}-${index}`}>
                <BreadcrumbItem>
                  {isEllipsis ? (
                    <span className="text-muted-foreground">...</span>
                  ) : isLast ? (
                    <BreadcrumbPage className="text-foreground font-medium">
                      {crumb.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink 
                      asChild
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Link href={crumb.href}>
                        {index === 0 && showHome ? (
                          <div className="flex items-center space-x-1">
                            <Home className="w-4 h-4" />
                            <span className="hidden sm:inline">{crumb.label}</span>
                          </div>
                        ) : (
                          crumb.label
                        )}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                
                {!isLast && !isEllipsis && (
                  <BreadcrumbSeparator>
                    <ChevronRight className="w-4 h-4" />
                  </BreadcrumbSeparator>
                )}
              </React.Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  )
}

// Hook for managing breadcrumbs programmatically
export function useBreadcrumbs() {
  const { setBreadcrumbs } = useNavigationStore()
  const { currentLanguage } = useLanguageStore()

  const updateBreadcrumbs = React.useCallback(
    (crumbs: Array<{ label: { en: string; te: string } | string; href: string }>) => {
      const formattedCrumbs = crumbs.map(crumb => ({
        label: typeof crumb.label === 'string' 
          ? crumb.label 
          : (currentLanguage === 'te' ? crumb.label.te : crumb.label.en),
        href: crumb.href
      }))
      setBreadcrumbs(formattedCrumbs)
    },
    [setBreadcrumbs, currentLanguage]
  )

  const addBreadcrumb = React.useCallback(
    (label: { en: string; te: string } | string, href: string) => {
      const formattedLabel = typeof label === 'string' 
        ? label 
        : (currentLanguage === 'te' ? label.te : label.en)
      
      setBreadcrumbs((prev: Array<{ label: string; href: string }>) => [...prev, { label: formattedLabel, href }])
    },
    [setBreadcrumbs, currentLanguage]
  )

  const clearBreadcrumbs = React.useCallback(() => {
    setBreadcrumbs([])
  }, [setBreadcrumbs])

  return {
    updateBreadcrumbs,
    addBreadcrumb,
    clearBreadcrumbs
  }
}

// Structured Data for Breadcrumbs (SEO)
export function BreadcrumbStructuredData({ breadcrumbs }: { 
  breadcrumbs: Array<{ label: string; href: string }> 
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://pgfteluguchurch.org'}${crumb.href}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 