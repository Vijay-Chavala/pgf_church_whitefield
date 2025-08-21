# Environment Configuration

This file contains environment-specific configuration for the Peniel Gospel Fellowship Telugu Church website.

## Site Configuration

```bash
# Site Information
NEXT_PUBLIC_SITE_NAME="Peniel Gospel Fellowship Telugu Church"
NEXT_PUBLIC_SITE_SHORT_NAME="PGF Telugu Church"
NEXT_PUBLIC_SITE_DESCRIPTION="A vibrant community of Telugu-speaking believers in Whitefield, Bangalore, dedicated to worship, fellowship, and spiritual growth in Christ."
NEXT_PUBLIC_SITE_URL="https://pgfteluguchurch.org"
NEXT_PUBLIC_SITE_DOMAIN="pgfteluguchurch.org"

# Church Information
NEXT_PUBLIC_CHURCH_NAME="Peniel Gospel Fellowship Telugu Church"
NEXT_PUBLIC_CHURCH_SHORT_NAME="PGF Telugu Church"
NEXT_PUBLIC_CHURCH_PHONE="+91-80-28452100"
NEXT_PUBLIC_CHURCH_EMAIL="info@pgfteluguchurch.org"
NEXT_PUBLIC_CHURCH_WHATSAPP="+91-98450-12345"

# Address Information
NEXT_PUBLIC_CHURCH_STREET="Anugraha Hall, St. Joseph Convent School Campus"
NEXT_PUBLIC_CHURCH_AREA="Exactly Opp: YEZDI SHOWROOM, Next to The Lady of the Lourds church"
NEXT_PUBLIC_CHURCH_LANDMARK="Diagonally opp. to Whitefield Police Station, Close to HOPE FARM METRO STATION"
NEXT_PUBLIC_CHURCH_CITY="Bangalore"
NEXT_PUBLIC_CHURCH_STATE="Karnataka"
NEXT_PUBLIC_CHURCH_ZIP="560066"
NEXT_PUBLIC_CHURCH_COUNTRY="India"

# Location Coordinates (Whitefield, Bangalore)
NEXT_PUBLIC_CHURCH_LATITUDE="12.9698"
NEXT_PUBLIC_CHURCH_LONGITUDE="77.7500"
NEXT_PUBLIC_GOOGLE_MAPS_URL="https://maps.google.com/?q=Peniel+Gospel+Fellowship+Telugu+Church+Whitefield+Bangalore"

# Service Timings
NEXT_PUBLIC_SUNDAY_SERVICE_START="10:00"
NEXT_PUBLIC_SUNDAY_SERVICE_END="12:30"
NEXT_PUBLIC_WEDNESDAY_PRAYER_START="19:30"
NEXT_PUBLIC_WEDNESDAY_PRAYER_END="21:00"
NEXT_PUBLIC_FRIDAY_FELLOWSHIP_START="19:30"
NEXT_PUBLIC_FRIDAY_FELLOWSHIP_END="21:00"

# Social Media
NEXT_PUBLIC_FACEBOOK_URL="https://www.facebook.com/pgfteluguchurch"
NEXT_PUBLIC_YOUTUBE_URL="https://www.youtube.com/@pgfteluguchurch"
NEXT_PUBLIC_INSTAGRAM_URL="https://www.instagram.com/pgfteluguchurch"
NEXT_PUBLIC_TWITTER_URL="https://www.twitter.com/pgfteluguchurch"

# SEO Configuration
NEXT_PUBLIC_DEFAULT_OG_IMAGE="/images/og-image.jpg"
NEXT_PUBLIC_FAVICON="/favicon.ico"
NEXT_PUBLIC_APPLE_TOUCH_ICON="/apple-touch-icon.png"

# Language Settings
NEXT_PUBLIC_DEFAULT_LANGUAGE="en"
NEXT_PUBLIC_SUPPORTED_LANGUAGES="en,te"
NEXT_PUBLIC_LANGUAGE_NAMES="English,తెలుగు"
```

## Analytics & Tracking

```bash
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_GA4_PROPERTY_ID="123456789"

# Google Search Console
NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION="your-verification-code"

# Facebook Pixel (if using)
NEXT_PUBLIC_FACEBOOK_PIXEL_ID="your-pixel-id"

# Performance Monitoring
NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING="true"
NEXT_PUBLIC_ENABLE_ERROR_TRACKING="true"
```

## Feature Flags

```bash
# Feature Toggles
NEXT_PUBLIC_ENABLE_ONLINE_GIVING="true"
NEXT_PUBLIC_ENABLE_EVENT_REGISTRATION="true"
NEXT_PUBLIC_ENABLE_PRAYER_REQUESTS="true"
NEXT_PUBLIC_ENABLE_TESTIMONIALS="true"
NEXT_PUBLIC_ENABLE_LIVE_STREAMING="true"
NEXT_PUBLIC_ENABLE_NEWSLETTER="true"
NEXT_PUBLIC_ENABLE_MULTILINGUAL="true"
NEXT_PUBLIC_ENABLE_DARK_MODE="true"

# Content Management
NEXT_PUBLIC_ENABLE_SERMON_DOWNLOADS="true"
NEXT_PUBLIC_ENABLE_GALLERY="true"
NEXT_PUBLIC_ENABLE_BLOG="true"
NEXT_PUBLIC_ENABLE_EVENTS_CALENDAR="true"
```

## External Services

```bash
# Email Service (for contact forms, newsletters)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
SMTP_FROM="noreply@pgfteluguchurch.org"

# Video Streaming
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID="UCxxxxxxxxxxxxxxxxx"
NEXT_PUBLIC_FACEBOOK_PAGE_ID="your-page-id"

# Payment Gateway (for donations)
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_xxxxxxxxxx"
RAZORPAY_KEY_SECRET="your-secret-key"

# Database (if using external database)
DATABASE_URL="postgresql://username:password@localhost:5432/church_db"

# File Storage (for uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

## Security Configuration

```bash
# Security
NEXTAUTH_SECRET="your-very-secure-secret-key"
NEXTAUTH_URL="https://pgfteluguchurch.org"

# API Rate Limiting
API_RATE_LIMIT_PER_HOUR="1000"
API_RATE_LIMIT_PER_DAY="10000"

# CORS Settings
ALLOWED_ORIGINS="https://pgfteluguchurch.org,https://www.pgfteluguchurch.org"
```

## Development vs Production

### Development (.env.local)

```bash
# Development-specific variables
NODE_ENV="development"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
NEXT_PUBLIC_ENABLE_DEBUG="true"
```

### Production (.env.production)

```bash
# Production-specific variables
NODE_ENV="production"
NEXT_PUBLIC_SITE_URL="https://pgfteluguchurch.org"
NEXT_PUBLIC_API_URL="https://pgfteluguchurch.org/api"
NEXT_PUBLIC_ENABLE_DEBUG="false"
```

## Setup Instructions

1. **Create Environment Files:**

   ```bash
   # For local development
   cp .env.example .env.local

   # For production deployment
   cp .env.example .env.production
   ```

2. **Update Values:**
   - Replace all placeholder values with actual configuration
   - Ensure all secrets are kept secure and not committed to version control
   - Use different values for development and production environments

3. **Verify Configuration:**

   ```bash
   # Check environment variables are loaded correctly
   npm run dev

   # Verify in browser console:
   console.log(process.env.NEXT_PUBLIC_SITE_NAME)
   ```

## Important Notes

- **Never commit sensitive information** like API keys, database passwords, or secrets to version control
- Use different Google Analytics IDs for development and production
- Ensure CORS settings allow your domain
- Test all external service integrations before deploying to production
- Keep environment files in sync between team members (without sensitive values)
- Use a secure method to share sensitive environment variables with team members

## Environment Variables by Feature

### SEO & Analytics

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION`
- `NEXT_PUBLIC_DEFAULT_OG_IMAGE`

### Church Information

- `NEXT_PUBLIC_CHURCH_NAME`
- `NEXT_PUBLIC_CHURCH_PHONE`
- `NEXT_PUBLIC_CHURCH_EMAIL`
- Address-related variables

### Social Media Integration

- `NEXT_PUBLIC_FACEBOOK_URL`
- `NEXT_PUBLIC_YOUTUBE_URL`
- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_TWITTER_URL`

### Email & Communication

- `SMTP_*` variables for email functionality
- `NEXT_PUBLIC_CHURCH_WHATSAPP` for WhatsApp integration

### Payment & Donations

- `NEXT_PUBLIC_RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`

This configuration ensures your Peniel Gospel Fellowship Telugu Church website has all the necessary environment variables for optimal functionality across different deployment environments.
