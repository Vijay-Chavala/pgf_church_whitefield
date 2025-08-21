# Layout Components Documentation

This directory contains all the responsive layout components for the Telugu Church website built with Shadcn/ui and Tailwind CSS. All components are fully responsive, accessible (WCAG 2.1 AA compliant), and support Telugu/English languages.

## 🏗️ Components Overview

### Core Layout Components

- **MainLayout** - Main layout wrapper that combines all layout components
- **Header** - Responsive header with navigation menu (desktop/mobile)
- **Footer** - Footer with contact info and social links
- **LanguageSwitcher** - Telugu/English language toggle component
- **BreadcrumbNav** - Breadcrumb navigation for better UX

### Loading Components

- **LoadingSpinner** - Customizable loading spinner
- **PageLoading** - Full page loading screen
- **HeaderSkeleton** - Skeleton for header during loading
- **CardSkeleton** - Generic card skeleton
- **EventCardSkeleton** - Event-specific card skeleton
- **SermonCardSkeleton** - Sermon-specific card skeleton
- **NavigationSkeleton** - Navigation skeleton
- **FooterSkeleton** - Footer skeleton
- **GallerySkeleton** - Gallery skeleton
- **TableSkeleton** - Table skeleton

### Error Components

- **ErrorBoundary** - React error boundary with fallback UI
- **NotFoundError** - 404 page component
- **useErrorHandler** - Hook for error handling

### SEO Components

- **SEO** - Main SEO meta tags component
- **OrganizationStructuredData** - Church organization structured data
- **EventStructuredData** - Event structured data
- **ArticleStructuredData** - Article/sermon structured data
- **useSEO** - Hook for dynamic SEO

## 🚀 Quick Start

### Basic Page Layout

```tsx
import { MainLayout } from '@/components/layout'

export default function MyPage() {
  return (
    <MainLayout
      seo={{
        title: 'My Page Title',
        description: 'Page description',
        keywords: ['keyword1', 'keyword2'],
      }}
    >
      <div className='container mx-auto px-4 py-8'>
        <h1>My Page Content</h1>
      </div>
    </MainLayout>
  )
}
```

### Using Individual Components

```tsx
import {
  Header,
  Footer,
  BreadcrumbNav,
  LanguageSwitcher,
} from '@/components/layout'

export default function CustomLayout() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <BreadcrumbNav />
      <main className='flex-1'>{/* Your content */}</main>
      <Footer />
    </div>
  )
}
```

## 📱 Header Component

The Header component provides a responsive navigation with desktop and mobile variants.

### Features

- Responsive design (desktop/mobile)
- Dropdown navigation menus
- Language switcher integration
- Theme toggle
- Smooth animations
- ARIA accessibility

### Usage

```tsx
import { Header } from '@/components/layout'

// Basic usage (uses default props)
<Header />

// With custom className
<Header className="bg-red-500" />
```

### Navigation Data

The header reads navigation items from the navigation store (`src/lib/stores/navigation-store.ts`). Update the navigation items there to modify the menu.

## 🌍 Language Switcher

Supports Telugu and English language switching with multiple variants.

### Variants

- `default` - Dropdown with language options
- `compact` - Simple toggle button
- `mobile` - Mobile-optimized layout

### Usage

```tsx
import { LanguageSwitcher } from '@/components/layout'

// Default dropdown variant
<LanguageSwitcher />

// Compact toggle variant
<LanguageSwitcher variant="compact" />

// Mobile variant
<LanguageSwitcher variant="mobile" />

// With label
<LanguageSwitcher variant="default" showLabel={true} />
```

### Hook Usage

```tsx
import { useLanguageSwitcher } from '@/components/layout'

function MyComponent() {
  const { currentLanguage, switchLanguage, isEnglish, isTelugu } =
    useLanguageSwitcher()

  return <button onClick={switchLanguage}>Current: {currentLanguage}</button>
}
```

## 🍞 Breadcrumb Navigation

Automatically generates breadcrumbs based on the current route and navigation structure.

### Features

- Auto-generation from pathname
- Structured data for SEO
- Responsive design
- Customizable max items
- Home icon support

### Usage

```tsx
import { BreadcrumbNav, useBreadcrumbs } from '@/components/layout'

// Basic usage
<BreadcrumbNav />

// Without home breadcrumb
<BreadcrumbNav showHome={false} />

// Limit breadcrumb items
<BreadcrumbNav maxItems={3} />

// Programmatic breadcrumb management
function MyComponent() {
  const { updateBreadcrumbs, addBreadcrumb, clearBreadcrumbs } = useBreadcrumbs()

  React.useEffect(() => {
    updateBreadcrumbs([
      { label: { en: 'Events', te: 'కార్యక్రమలు' }, href: '/events' },
      { label: { en: 'Christmas Service', te: 'క్రిస్మస్ సేవ' }, href: '/events/christmas' }
    ])
  }, [])

  return <div>Content</div>
}
```

## ⚡ Loading Components

Various loading states for different UI components.

### LoadingSpinner

```tsx
import { LoadingSpinner } from '@/components/layout'

// Different sizes
<LoadingSpinner size="sm" />
<LoadingSpinner size="md" />
<LoadingSpinner size="lg" />

// With custom text
<LoadingSpinner text="Loading events..." />

// Custom styling
<LoadingSpinner className="text-blue-500" />
```

### PageLoading

```tsx
import { PageLoading } from '@/components/layout'

<PageLoading message="Loading page..." />
<PageLoading showChurchLogo={false} />
```

### Skeleton Components

```tsx
import {
  CardSkeleton,
  EventCardSkeleton,
  SermonCardSkeleton,
  GallerySkeleton,
  TableSkeleton
} from '@/components/layout'

// Generic card skeleton
<CardSkeleton />

// Specific skeletons
<EventCardSkeleton />
<SermonCardSkeleton />

// Gallery skeleton
<GallerySkeleton />

// Table skeleton
<TableSkeleton rows={5} cols={4} />
```

### Loading Hook

```tsx
import { useLoading } from '@/components/layout'

function MyComponent() {
  const { isLoading, startLoading, stopLoading, toggleLoading } = useLoading()

  const handleSubmit = async () => {
    startLoading()
    try {
      await submitData()
    } finally {
      stopLoading()
    }
  }

  return <div>{isLoading ? <LoadingSpinner /> : <Content />}</div>
}
```

## 🚨 Error Boundary

Catch and handle React errors gracefully.

### Usage

```tsx
import { ErrorBoundary, NotFoundError, useErrorHandler } from '@/components/layout'

// Wrap your app or components
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>

// Custom error fallback
<ErrorBoundary fallback={CustomErrorComponent}>
  <MyComponent />
</ErrorBoundary>

// Error handler hook
function MyComponent() {
  const { error, handleError, clearError, hasError } = useErrorHandler()

  const doSomething = () => {
    try {
      riskyOperation()
    } catch (err) {
      handleError(err)
    }
  }

  if (hasError) {
    return <div>Error: {error.message}</div>
  }

  return <div>Content</div>
}

// 404 Page
export default function NotFound() {
  return <NotFoundError />
}
```

## 🔍 SEO Components

Optimize your pages for search engines.

### Main SEO Component

```tsx
import { SEO } from '@/components/layout'

;<SEO
  title='Page Title'
  description='Page description'
  keywords={['keyword1', 'keyword2']}
  ogImage='/images/custom-og-image.jpg'
  noIndex={false}
  structuredData={{
    '@type': 'Event',
    name: 'Christmas Service',
  }}
/>
```

### Structured Data Components

```tsx
import {
  OrganizationStructuredData,
  EventStructuredData,
  ArticleStructuredData
} from '@/components/layout'

// Organization data (automatically included in MainLayout)
<OrganizationStructuredData />

// Event data
<EventStructuredData
  event={{
    name: "Christmas Service",
    description: "Join us for our Christmas celebration",
    startDate: "2024-12-25T10:00:00",
    location: "Church Hall",
    image: "/images/christmas-event.jpg"
  }}
/>

// Article data
<ArticleStructuredData
  article={{
    title: "Sermon Title",
    description: "Sermon description",
    author: "Pastor Name",
    datePublished: "2024-12-01T10:00:00",
    url: "/sermons/sermon-title"
  }}
/>
```

### SEO Hook

```tsx
import { useSEO } from '@/components/layout'

function MyComponent() {
  const { generatePageSEO, generateBreadcrumbStructuredData } = useSEO()

  const pageSEO = generatePageSEO({
    title: 'Dynamic Title',
    description: 'Dynamic description',
  })

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Events', url: '/events' },
  ])

  return <div>Content</div>
}
```

## 🎨 Styling & Customization

All components use Tailwind CSS and support the design system defined in `globals.css`.

### Color Variables

The components use CSS custom properties for theming:

- `--primary` - Primary brand color
- `--secondary` - Secondary color
- `--accent` - Accent color
- `--background` - Background color
- `--foreground` - Text color
- `--muted` - Muted text color
- `--border` - Border color

### Responsive Breakpoints

Components are built mobile-first with these breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Dark Mode

All components support dark mode through the theme store. Toggle with:

```tsx
import { useThemeStore } from '@/lib/stores/theme-store'

function ThemeToggle() {
  const { theme, toggleTheme, getCurrentTheme } = useThemeStore()
  const isDarkMode = getCurrentTheme() === 'dark'

  return <button onClick={toggleTheme}>{isDarkMode ? '☀️' : '🌙'}</button>
}
```

## ♿ Accessibility Features

All components follow WCAG 2.1 AA guidelines:

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance
- Skip links
- Alternative text for images

### Skip Links

The MainLayout includes a skip link for keyboard users:

```tsx
<a
  href='#main-content'
  className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4'
>
  Skip to main content
</a>
```

## 🔧 Advanced Usage

### HOC Pattern

Wrap pages with layout using the HOC:

```tsx
import { withMainLayout } from '@/components/layout'

function MyPage() {
  return <div>Page content</div>
}

export default withMainLayout(MyPage, {
  seo: {
    title: 'My Page',
    description: 'Page description',
  },
  showBreadcrumbs: false,
})
```

### Layout Hook

Manage layout state:

```tsx
import { useMainLayout } from '@/components/layout'

function MyComponent() {
  const {
    layoutConfig,
    hideBreadcrumbs,
    showBreadcrumbs,
    hideHeader,
    showHeader,
  } = useMainLayout()

  // Conditionally hide breadcrumbs
  React.useEffect(() => {
    if (someCondition) {
      hideBreadcrumbs()
    }

    return () => showBreadcrumbs()
  }, [])

  return <div>Content</div>
}
```

## 📦 Installation

The components are already installed if you're using this project. To use in a new project:

1. Install Shadcn/ui components:

```bash
npx shadcn@latest add button dropdown-menu sheet navigation-menu skeleton alert-dialog breadcrumb separator card avatar badge
```

2. Copy the layout components to your project
3. Update import paths as needed
4. Ensure you have the required stores (language, theme, navigation, loading)

## 🤝 Contributing

When adding new layout components:

1. Follow the existing patterns
2. Add TypeScript types
3. Include accessibility features
4. Support both Telugu and English
5. Add to the index.ts export
6. Update this documentation

## 📋 Component Checklist

For new components, ensure:

- [ ] TypeScript types defined
- [ ] Responsive design (mobile-first)
- [ ] Accessibility (ARIA, keyboard navigation)
- [ ] Language support (Telugu/English)
- [ ] Dark mode support
- [ ] Loading states
- [ ] Error handling
- [ ] Documentation
- [ ] Export in index.ts

## 🐛 Troubleshooting

### Common Issues

1. **Components not rendering**: Check if stores are properly initialized
2. **Language not switching**: Verify language store implementation
3. **Styles not applying**: Ensure Tailwind CSS is configured correctly
4. **TypeScript errors**: Check import paths and type definitions

### Debug Mode

Enable debug logging:

```tsx
// Add to your page
if (process.env.NODE_ENV === 'development') {
  console.log('Layout debug info:', {
    currentLanguage,
    pathname,
    navigationItems,
  })
}
```
