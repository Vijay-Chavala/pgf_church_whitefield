# Telugu Christian Fellowship Website

A modern, responsive website for a Telugu Christian church built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

### ✨ **Modern Technology Stack**

- **Next.js 14** with App Router
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** with custom warm church color palette
- **Shadcn/ui** component library
- **Zustand** for state management
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons

### 🎨 **Design & UX**

- Warm, welcoming color scheme (burgundy, gold, cream tones)
- Responsive design with mobile-first approach
- Dark/light theme support
- Smooth animations and transitions
- Accessibility features (skip links, semantic HTML, ARIA labels)

### 🌐 **Bilingual Support**

- Telugu and English language support
- Easy language switching
- Localized content throughout

### 🚀 **Performance & SEO**

- Optimized for Web Vitals (LCP, CLS, FID)
- Next.js Image optimization
- Automatic sitemap generation
- Open Graph and Twitter Card meta tags
- JSON-LD structured data for search engines
- Security headers and CSP

### 📱 **Church-Specific Features**

- Service times and schedules
- Event management
- Ministry information
- Pastor and leadership profiles
- Contact information and location
- Gallery for church events
- Prayer request system
- News and announcements

## 🛠️ **Project Structure**

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles with church theme
│   ├── layout.tsx         # Root layout with SEO setup
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
├── data/                  # Static data and content
│   └── church-data.ts     # Church information and sample data
├── hooks/                 # Custom React hooks
│   └── use-church.ts      # Church-specific hooks
├── lib/                   # Utility functions and configurations
│   ├── stores/           # Zustand store definitions
│   │   └── church-store.ts
│   └── utils.ts          # Utility functions (from Shadcn)
└── types/                # TypeScript type definitions
    └── index.ts          # Church-related types
```

## 🚀 **Getting Started**

### Prerequisites

- Node.js 18.0.0 or later
- npm 9.0.0 or later

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd telugu-church-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 **Available Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run sitemap` - Generate sitemap
- `npm run clean` - Clean build artifacts

## 🎨 **Color Palette**

The website uses a warm, welcoming color scheme perfect for a church:

- **Primary (Burgundy)**: Rich, dignified burgundy for headers and primary actions
- **Secondary (Gold)**: Warm gold for accents and highlights
- **Background (Cream)**: Soft cream background for warmth
- **Text (Warm Brown)**: Deep warm brown for readable text
- **Cards**: Pure warm white for content cards

## 📱 **Responsive Design**

The website is fully responsive with breakpoints:

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🌐 **Internationalization**

The website supports both English and Telugu:

- Content is stored in localized objects
- Easy language switching via header toggle
- All UI elements are translated
- Telugu font support included

## 🔧 **Configuration**

### Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
SITE_URL=https://your-church-website.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

### Church Settings

Update church information in `src/data/church-data.ts`:

- Church name and address
- Contact information
- Service times
- Pastor details
- Ministry information

## 📈 **SEO Features**

- Comprehensive meta tags
- Open Graph and Twitter Card support
- JSON-LD structured data for churches
- Automatic sitemap generation
- Robots.txt configuration
- Optimized for local search

## 🛡️ **Security**

- Content Security Policy (CSP) headers
- Security headers (X-Frame-Options, X-Content-Type-Options)
- Input validation and sanitization
- Safe image optimization

## 🎭 **State Management**

Uses Zustand for lightweight state management:

- Theme preferences (dark/light mode)
- Language selection (English/Telugu)
- Navigation state
- Contact form state
- Service information

## 🎨 **Styling**

- **Tailwind CSS v4** with custom church theme
- **CSS custom properties** for theme variables
- **Smooth transitions** for all interactive elements
- **Glass morphism** effects for modern look

## 📦 **Components**

The project uses Shadcn/ui components with church-specific customizations:

- Consistent design system
- Accessible components
- Dark mode support
- Custom animations

## 🔄 **Development Workflow**

1. **Code Quality**: ESLint + Prettier with church-specific rules
2. **Type Safety**: TypeScript with strict mode
3. **Git Hooks**: Pre-commit hooks for formatting and linting
4. **Performance**: Bundle analysis and optimization

## 📚 **Documentation**

- All components are fully typed with TypeScript
- Comprehensive JSDoc comments
- Type definitions for all church-related data
- Hook documentation with usage examples

## 🎯 **Future Enhancements**

- [ ] Online donation system
- [ ] Event registration
- [ ] Sermon video integration
- [ ] Member portal
- [ ] Prayer request management
- [ ] Newsletter subscription
- [ ] Social media integration
- [ ] Progressive Web App (PWA) features

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 **License**

This project is licensed under the MIT License.

## 🙏 **Acknowledgments**

- Built with love for the Telugu Christian community
- Inspired by modern church websites and UX best practices
- Special thanks to the open-source community

---

**Built with Next.js 14, TypeScript, Tailwind CSS, and ❤️**
