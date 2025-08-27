[16:50:28.914] Running build in Washington, D.C., USA (East) – iad1
[16:50:28.914] Build machine configuration: 2 cores, 8 GB
[16:50:28.929] Cloning github.com/Vijay-Chavala/pgf_church_whitefield (Branch: main, Commit: ac3372f)
[16:50:29.054] Previous build caches not available
[16:50:32.995] Cloning completed: 4.066s
[16:50:33.401] Running "vercel build"
[16:50:33.786] Vercel CLI 46.0.3
[16:50:34.095] Warning: Detected "engines": { "node": ">=18.0.0" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: http://vercel.link/node-version
[16:50:34.108] Installing dependencies...
[16:50:48.528] 
[16:50:48.528] added 597 packages in 14s
[16:50:48.529] 
[16:50:48.529] 177 packages are looking for funding
[16:50:48.529]   run `npm fund` for details
[16:50:48.584] Detected Next.js version: 15.3.5
[16:50:48.589] Running "npm run build"
[16:50:48.698] 
[16:50:48.698] > telugu-church-website@0.1.0 build
[16:50:48.698] > next build
[16:50:48.698] 
[16:50:49.314] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[16:50:49.315] This information is used to shape Next.js' roadmap and prioritize features.
[16:50:49.315] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[16:50:49.315] https://nextjs.org/telemetry
[16:50:49.315] 
[16:50:49.429]    ▲ Next.js 15.3.5
[16:50:49.429]    - Experiments (use with caution):
[16:50:49.439]      ✓ optimizeCss
[16:50:49.440] 
[16:50:49.476]    Creating an optimized production build ...
[16:50:49.504]    Using tsconfig file: ./tsconfig.json
[16:51:06.620]  ✓ Compiled successfully in 16.0s
[16:51:06.632]    Linting and checking validity of types ...
[16:51:21.365] 
[16:51:21.367] Failed to compile.
[16:51:21.367] 
[16:51:21.368] ./src/app/api/robots/route.ts
[16:51:21.368] 3:8  Warning: Async function 'GET' has too many lines (76). Maximum allowed is 50.  max-lines-per-function
[16:51:21.368] 
[16:51:21.368] ./src/app/api/rss/route.ts
[16:51:21.368] 4:8  Warning: Async function 'GET' has too many lines (92). Maximum allowed is 50.  max-lines-per-function
[16:51:21.368] 
[16:51:21.369] ./src/app/api/sitemap/route.ts
[16:51:21.369] 11:8  Warning: Async function 'GET' has too many lines (179). Maximum allowed is 50.  max-lines-per-function
[16:51:21.369] 
[16:51:21.369] ./src/app/gallery/page.tsx
[16:51:21.369] 13:16  Warning: Function 'GalleryPage' has too many lines (259). Maximum allowed is 50.  max-lines-per-function
[16:51:21.370] 187:21  Warning: Empty components are self-closing  react/self-closing-comp
[16:51:21.372] 
[16:51:21.372] ./src/app/layout.tsx
[16:51:21.373] 138:16  Warning: Function 'RootLayout' has too many lines (297). Maximum allowed is 50.  max-lines-per-function
[16:51:21.373] 
[16:51:21.373] ./src/components/analytics/google-analytics.tsx
[16:51:21.373] 35:7  Warning: 'command' is defined but never used.  no-unused-vars
[16:51:21.374] 36:7  Warning: 'targetId' is defined but never used.  no-unused-vars
[16:51:21.374] 37:7  Warning: 'config' is defined but never used.  no-unused-vars
[16:51:21.374] 37:31  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.374] 39:31  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.374] 68:5  Warning: Expected property shorthand.  object-shorthand
[16:51:21.374] 256:12  Warning: Fragments should contain more than one child - otherwise, there’s no need for a Fragment at all.  react/jsx-no-useless-fragment
[16:51:21.374] 
[16:51:21.374] ./src/components/analytics/performance-monitor.tsx
[16:51:21.374] 52:5  Warning: Unexpected console statement.  no-console
[16:51:21.374] 77:7  Warning: Unexpected console statement.  no-console
[16:51:21.374] 144:13  Warning: Unexpected console statement.  no-console
[16:51:21.374] 155:5  Warning: Unexpected console statement.  no-console
[16:51:21.375] 163:9  Warning: Use object destructuring.  prefer-destructuring
[16:51:21.375] 163:34  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.375] 187:5  Warning: Unexpected console statement.  no-console
[16:51:21.375] 200:9  Warning: Use object destructuring.  prefer-destructuring
[16:51:21.375] 200:36  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.375] 224:7  Warning: Unexpected console statement.  no-console
[16:51:21.375] 229:16  Warning: Function 'PerformanceMonitor' has too many lines (80). Maximum allowed is 50.  max-lines-per-function
[16:51:21.375] 230:13  Warning: Arrow function has too many lines (75). Maximum allowed is 50.  max-lines-per-function
[16:51:21.375] 239:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.375] 253:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.375] 264:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.376] 275:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.378] 286:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.379] 
[16:51:21.379] ./src/components/gallery/gallery-section.tsx
[16:51:21.382] 16:8  Warning: Function 'GallerySection' has too many lines (171). Maximum allowed is 50.  max-lines-per-function
[16:51:21.383] 51:13  Warning: Use object destructuring.  prefer-destructuring
[16:51:21.383] 74:9  Warning: Empty components are self-closing  react/self-closing-comp
[16:51:21.383] 99:13  Warning: Arrow function has too many lines (82). Maximum allowed is 50.  max-lines-per-function
[16:51:21.383] 113:19  Warning: Empty components are self-closing  react/self-closing-comp
[16:51:21.383] 124:42  Warning: Arrow function has too many lines (54). Maximum allowed is 50.  max-lines-per-function
[16:51:21.383] 124:50  Warning: 'index' is defined but never used.  no-unused-vars
[16:51:21.383] 124:50  Warning: 'index' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.383] 141:27  Warning: Empty components are self-closing  react/self-closing-comp
[16:51:21.383] 
[16:51:21.383] ./src/components/home/call-to-action.tsx
[16:51:21.383] 11:8  Warning: Function 'CallToAction' has too many lines (268). Maximum allowed is 50.  max-lines-per-function
[16:51:21.383] 11:8  Warning: Function 'CallToAction' has a complexity of 25. Maximum allowed is 10.  complexity
[16:51:21.383] 
[16:51:21.383] ./src/components/home/gallery-overview.tsx
[16:51:21.383] 17:8  Warning: Function 'GalleryOverview' has too many lines (175). Maximum allowed is 50.  max-lines-per-function
[16:51:21.383] 90:34  Warning: Arrow function has too many lines (76). Maximum allowed is 50.  max-lines-per-function
[16:51:21.384] 
[16:51:21.384] ./src/components/home/guest-speakers.tsx
[16:51:21.384] 18:8  Warning: Function 'GuestSpeakers' has too many lines (158). Maximum allowed is 50.  max-lines-per-function
[16:51:21.384] 97:32  Warning: Arrow function has too many lines (53). Maximum allowed is 50.  max-lines-per-function
[16:51:21.384] 
[16:51:21.384] ./src/components/home/hero-banner.tsx
[16:51:21.384] 263:8  Warning: Function 'HeroBanner' has too many lines (400). Maximum allowed is 50.  max-lines-per-function
[16:51:21.384] 263:8  Warning: Function 'HeroBanner' has a complexity of 39. Maximum allowed is 10.  complexity
[16:51:21.384] 299:18  Warning: 'error' is defined but never used.  no-unused-vars
[16:51:21.384] 299:18  Warning: 'error' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.384] 310:16  Warning: 'error' is defined but never used.  no-unused-vars
[16:51:21.384] 310:16  Warning: 'error' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.384] 356:15  Warning: Empty components are self-closing  react/self-closing-comp
[16:51:21.384] 633:15  Warning: Empty components are self-closing  react/self-closing-comp
[16:51:21.384] 634:15  Warning: Empty components are self-closing  react/self-closing-comp
[16:51:21.384] 637:13  Warning: Empty components are self-closing  react/self-closing-comp
[16:51:21.384] 
[16:51:21.384] ./src/components/home/home-page.tsx
[16:51:21.384] 16:8  Warning: Function 'HomePage' has too many lines (61). Maximum allowed is 50.  max-lines-per-function
[16:51:21.384] 
[16:51:21.384] ./src/components/home/ministries-overview.tsx
[16:51:21.384] 230:8  Warning: Function 'MinistriesOverview' has too many lines (179). Maximum allowed is 50.  max-lines-per-function
[16:51:21.384] 264:31  Warning: Arrow function has too many lines (106). Maximum allowed is 50.  max-lines-per-function
[16:51:21.384] 
[16:51:21.384] ./src/components/home/sermon-highlights.tsx
[16:51:21.384] 12:8  Warning: Function 'SermonHighlights' has too many lines (202). Maximum allowed is 50.  max-lines-per-function
[16:51:21.384] 85:30  Warning: Arrow function has too many lines (102). Maximum allowed is 50.  max-lines-per-function
[16:51:21.385] 
[16:51:21.386] ./src/components/home/social-radial-menu.tsx
[16:51:21.390] 24:8  Warning: Function 'SocialRadialMenu' has too many lines (129). Maximum allowed is 50.  max-lines-per-function
[16:51:21.390] 
[16:51:21.390] ./src/components/home/upcoming-events.tsx
[16:51:21.390] 13:8  Warning: Function 'UpcomingEvents' has too many lines (310). Maximum allowed is 50.  max-lines-per-function
[16:51:21.390] 99:30  Warning: Arrow function has too many lines (149). Maximum allowed is 50.  max-lines-per-function
[16:51:21.391] 99:30  Warning: Arrow function has a complexity of 22. Maximum allowed is 10.  complexity
[16:51:21.391] 
[16:51:21.391] ./src/components/home/welcome-message.tsx
[16:51:21.391] 11:8  Warning: Function 'WelcomeMessage' has too many lines (342). Maximum allowed is 50.  max-lines-per-function
[16:51:21.391] 
[16:51:21.391] ./src/components/layout/breadcrumb-nav.tsx
[16:51:21.391] 27:16  Warning: Function 'BreadcrumbNav' has too many lines (178). Maximum allowed is 50.  max-lines-per-function
[16:51:21.391] 37:45  Warning: Arrow function has too many lines (104). Maximum allowed is 50.  max-lines-per-function
[16:51:21.392] 62:26  Warning: Arrow function has too many lines (65). Maximum allowed is 50.  max-lines-per-function
[16:51:21.392] 62:26  Warning: Arrow function has a complexity of 13. Maximum allowed is 10.  complexity
[16:51:21.392] 
[16:51:21.392] ./src/components/layout/error-boundary.tsx
[16:51:21.392] 47:16  Warning: 'error' is defined but never used.  no-unused-vars
[16:51:21.392] 47:30  Warning: 'errorInfo' is defined but never used.  no-unused-vars
[16:51:21.392] 60:35  Warning: '_error' is defined but never used.  no-unused-vars
[16:51:21.392] 60:35  Warning: '_error' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.392] 75:5  Warning: Unexpected console statement.  no-console
[16:51:21.392] 83:78  Error: The `Function` type accepts any function-like value.
[16:51:21.392] Prefer explicitly defining any function parameters and return type.  @typescript-eslint/no-unsafe-function-type
[16:51:21.392] 84:43  Error: The `Function` type accepts any function-like value.
[16:51:21.392] Prefer explicitly defining any function parameters and return type.  @typescript-eslint/no-unsafe-function-type
[16:51:21.392] 115:1  Warning: Function 'DefaultErrorFallback' has too many lines (230). Maximum allowed is 50.  max-lines-per-function
[16:51:21.392] 115:1  Warning: Function 'DefaultErrorFallback' has a complexity of 19. Maximum allowed is 10.  complexity
[16:51:21.392] 347:8  Warning: Function 'NotFoundError' has too many lines (54). Maximum allowed is 50.  max-lines-per-function
[16:51:21.393] 410:14  Warning: 'error' is defined but never used.  no-unused-vars
[16:51:21.393] 410:28  Warning: 'errorInfo' is defined but never used.  no-unused-vars
[16:51:21.393] 425:5  Warning: Unexpected console statement.  no-console
[16:51:21.393] 428:78  Error: The `Function` type accepts any function-like value.
[16:51:21.393] Prefer explicitly defining any function parameters and return type.  @typescript-eslint/no-unsafe-function-type
[16:51:21.393] 429:43  Error: The `Function` type accepts any function-like value.
[16:51:21.393] Prefer explicitly defining any function parameters and return type.  @typescript-eslint/no-unsafe-function-type
[16:51:21.393] 
[16:51:21.393] ./src/components/layout/footer.tsx
[16:51:21.393] 34:16  Warning: Function 'Footer' has too many lines (330). Maximum allowed is 50.  max-lines-per-function
[16:51:21.393] 34:16  Warning: Function 'Footer' has a complexity of 13. Maximum allowed is 10.  complexity
[16:51:21.393] 
[16:51:21.393] ./src/components/layout/header.tsx
[16:51:21.393] 72:16  Warning: Function 'Header' has too many lines (283). Maximum allowed is 50.  max-lines-per-function
[16:51:21.393] 81:11  Warning: 'getCurrentTheme' is assigned a value but never used.  no-unused-vars
[16:51:21.393] 81:11  Warning: 'getCurrentTheme' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[16:51:21.393] 159:38  Warning: Arrow function has too many lines (52). Maximum allowed is 50.  max-lines-per-function
[16:51:21.393] 269:46  Warning: Arrow function has too many lines (60). Maximum allowed is 50.  max-lines-per-function
[16:51:21.393] 
[16:51:21.393] ./src/components/layout/language-switcher.tsx
[16:51:21.393] 5:10  Warning: 'Languages' is defined but never used.  no-unused-vars
[16:51:21.393] 5:10  Warning: 'Languages' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.393] 25:16  Warning: Function 'LanguageSwitcher' has too many lines (160). Maximum allowed is 50.  max-lines-per-function
[16:51:21.393] 25:16  Warning: Function 'LanguageSwitcher' has a complexity of 12. Maximum allowed is 10.  complexity
[16:51:21.394] 
[16:51:21.394] ./src/components/layout/loading.tsx
[16:51:21.394] 53:8  Warning: Function 'PageLoading' has too many lines (56). Maximum allowed is 50.  max-lines-per-function
[16:51:21.394] 
[16:51:21.394] ./src/components/layout/main-layout.tsx
[16:51:21.395] 30:37  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.395] 36:16  Warning: Function 'MainLayout' has too many lines (78). Maximum allowed is 50.  max-lines-per-function
[16:51:21.395] 36:16  Warning: Function 'MainLayout' has a complexity of 15. Maximum allowed is 10.  complexity
[16:51:21.395] 116:1  Warning: Function 'ScrollToTopButton' has too many lines (54). Maximum allowed is 50.  max-lines-per-function
[16:51:21.395] 
[16:51:21.395] ./src/components/layout/map-section.tsx
[16:51:21.395] 16:16  Warning: Function 'MapSection' has too many lines (332). Maximum allowed is 50.  max-lines-per-function
[16:51:21.396] 142:21  Warning: Value must be omitted for boolean attribute `allowFullScreen`  react/jsx-boolean-value
[16:51:21.396] 
[16:51:21.396] ./src/components/layout/seo.tsx
[16:51:21.396] 8:10  Warning: 'churchSettings' is defined but never used.  no-unused-vars
[16:51:21.396] 8:10  Warning: 'churchSettings' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.396] 21:35  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.396] 26:8  Warning: Function 'SEO' has too many lines (144). Maximum allowed is 50.  max-lines-per-function
[16:51:21.396] 26:8  Warning: Function 'SEO' has a complexity of 18. Maximum allowed is 10.  complexity
[16:51:21.397] 82:5  Warning: Fragments should contain more than one child - otherwise, there’s no need for a Fragment at all.  react/jsx-no-useless-fragment
[16:51:21.397] 172:8  Warning: Function 'OrganizationStructuredData' has too many lines (66). Maximum allowed is 50.  max-lines-per-function
[16:51:21.397] 240:8  Warning: Function 'EventStructuredData' has too many lines (59). Maximum allowed is 50.  max-lines-per-function
[16:51:21.397] 
[16:51:21.397] ./src/components/ministries/ministries-page.tsx
[16:51:21.397] 142:8  Warning: Function 'MinistriesPage' has too many lines (169). Maximum allowed is 50.  max-lines-per-function
[16:51:21.397] 192:35  Warning: Arrow function has too many lines (72). Maximum allowed is 50.  max-lines-per-function
[16:51:21.403] 
[16:51:21.404] ./src/components/ministries/ministry-detail-page.tsx
[16:51:21.404] 52:8  Warning: Function 'MinistryDetailPage' has too many lines (313). Maximum allowed is 50.  max-lines-per-function
[16:51:21.404] 52:8  Warning: Function 'MinistryDetailPage' has a complexity of 15. Maximum allowed is 10.  complexity
[16:51:21.404] 
[16:51:21.404] ./src/components/providers/theme-provider.tsx
[16:51:21.405] 34:10  Warning: Fragments should contain more than one child - otherwise, there’s no need for a Fragment at all.  react/jsx-no-useless-fragment
[16:51:21.405] 
[16:51:21.405] ./src/components/seo/structured-data.tsx
[16:51:21.405] 38:16  Warning: Function 'StructuredData' has too many lines (344). Maximum allowed is 50.  max-lines-per-function
[16:51:21.405] 38:16  Warning: Function 'StructuredData' has a complexity of 14. Maximum allowed is 10.  complexity
[16:51:21.405] 
[16:51:21.405] ./src/components/sermons/sermons-page.tsx
[16:51:21.405] 28:8  Warning: Function 'SermonsPage' has too many lines (259). Maximum allowed is 50.  max-lines-per-function
[16:51:21.406] 135:9  Warning: Empty components are self-closing  react/self-closing-comp
[16:51:21.406] 153:9  Warning: Empty components are self-closing  react/self-closing-comp
[16:51:21.406] 154:9  Warning: Empty components are self-closing  react/self-closing-comp
[16:51:21.406] 293:13  Warning: 'textObj' is defined but never used.  no-unused-vars
[16:51:21.406] 294:16  Warning: 'dateString' is defined but never used.  no-unused-vars
[16:51:21.407] 295:20  Warning: 'minutes' is defined but never used.  no-unused-vars
[16:51:21.407] 299:1  Warning: Function 'SermonCard' has too many lines (124). Maximum allowed is 50.  max-lines-per-function
[16:51:21.407] 
[16:51:21.407] ./src/components/ui/color-showcase.tsx
[16:51:21.407] 9:8  Warning: Function 'ColorShowcase' has too many lines (227). Maximum allowed is 50.  max-lines-per-function
[16:51:21.407] 
[16:51:21.407] ./src/components/ui/input.tsx
[16:51:21.407] 5:18  Error: An interface declaring no members is equivalent to its supertype.  @typescript-eslint/no-empty-object-type
[16:51:21.408] 
[16:51:21.408] ./src/components/ui/theme-toggle.tsx
[16:51:21.408] 15:8  Warning: Function 'ThemeToggle' has too many lines (58). Maximum allowed is 50.  max-lines-per-function
[16:51:21.408] 22:9  Warning: 'isDarkMode' is assigned a value but never used.  no-unused-vars
[16:51:21.408] 22:9  Warning: 'isDarkMode' is assigned a value but never used.  @typescript-eslint/no-unused-vars
[16:51:21.408] 
[16:51:21.409] ./src/hooks/use-church.ts
[16:51:21.409] 6:15  Warning: 'Language' is defined but never used.  no-unused-vars
[16:51:21.409] 6:15  Warning: 'Language' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.409] 40:5  Warning: Expected property shorthand.  object-shorthand
[16:51:21.409] 101:32  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.409] 111:54  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.410] 138:7  Warning: Unexpected console statement.  no-console
[16:51:21.410] 143:34  Warning: 'val' is defined but never used.  no-unused-vars
[16:51:21.410] 151:7  Warning: Unexpected console statement.  no-console
[16:51:21.410] 159:8  Warning: Function 'useFormValidation' has too many lines (62). Maximum allowed is 50.  max-lines-per-function
[16:51:21.410] 159:60  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.410] 161:37  Warning: 'value' is defined but never used.  no-unused-vars
[16:51:21.411] 161:44  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.411] 167:48  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.411] 189:47  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.411] 
[16:51:21.411] ./src/lib/stores/church-store.ts
[16:51:21.411] 12:17  Warning: 'open' is defined but never used.  no-unused-vars
[16:51:21.412] 13:22  Warning: 'section' is defined but never used.  no-unused-vars
[16:51:21.412] 21:25  Warning: 'services' is defined but never used.  no-unused-vars
[16:51:21.412] 25:24  Warning: 'open' is defined but never used.  no-unused-vars
[16:51:21.422] 29:16  Warning: 'loading' is defined but never used.  no-unused-vars
[16:51:21.423] 
[16:51:21.423] ./src/lib/stores/contact-store.ts
[16:51:21.423] 2:73  Warning: 'Language' is defined but never used.  no-unused-vars
[16:51:21.423] 2:73  Warning: 'Language' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.424] 102:57  Warning: Arrow function has too many lines (181). Maximum allowed is 50.  max-lines-per-function
[16:51:21.424] 129:56  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.424] 150:17  Warning: Method 'validateForm' has too many lines (51). Maximum allowed is 50.  max-lines-per-function
[16:51:21.424] 202:15  Warning: Async method 'submitForm' has too many lines (62). Maximum allowed is 50.  max-lines-per-function
[16:51:21.424] 326:5  Warning: Unexpected console statement.  no-console
[16:51:21.424] 342:13  Warning: Use object destructuring.  prefer-destructuring
[16:51:21.424] 364:5  Warning: Unexpected console statement.  no-console
[16:51:21.424] 
[16:51:21.425] ./src/lib/stores/event-store.ts
[16:51:21.425] 139:49  Warning: Arrow function has too many lines (216). Maximum allowed is 50.  max-lines-per-function
[16:51:21.425] 239:21  Warning: Async method 'registerForEvent' has too many lines (65). Maximum allowed is 50.  max-lines-per-function
[16:51:21.425] 239:45  Warning: 'participantData' is defined but never used.  no-unused-vars
[16:51:21.425] 239:45  Warning: 'participantData' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.425] 239:62  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.425] 308:26  Warning: Arrow function has a complexity of 13. Maximum allowed is 10.  complexity
[16:51:21.426] 
[16:51:21.426] ./src/lib/stores/language-store.ts
[16:51:21.426] 213:5  Warning: Arrow function has too many lines (54). Maximum allowed is 50.  max-lines-per-function
[16:51:21.426] 
[16:51:21.426] ./src/lib/stores/loading-store.ts
[16:51:21.426] 17:53  Warning: Arrow function has too many lines (68). Maximum allowed is 50.  max-lines-per-function
[16:51:21.426] 104:39  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.427] 105:11  Warning: 'args' is defined but never used.  no-unused-vars
[16:51:21.427] 165:56  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.428] 213:37  Warning: Arrow function has too many lines (60). Maximum allowed is 50.  max-lines-per-function
[16:51:21.428] 221:7  Warning: Unexpected console statement.  no-console
[16:51:21.428] 230:9  Warning: Unexpected console statement.  no-console
[16:51:21.428] 234:11  Warning: Unexpected console statement.  no-console
[16:51:21.428] 317:13  Warning: Use object destructuring.  prefer-destructuring
[16:51:21.428] 347:5  Warning: Unexpected console statement.  no-console
[16:51:21.429] 
[16:51:21.429] ./src/lib/stores/navigation-store.ts
[16:51:21.429] 68:59  Warning: Arrow function has too many lines (74). Maximum allowed is 50.  max-lines-per-function
[16:51:21.429] 152:30  Warning: 'index' is defined but never used.  no-unused-vars
[16:51:21.429] 152:30  Warning: 'index' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.429] 
[16:51:21.429] ./src/lib/stores/prayer-store.ts
[16:51:21.430] 68:5  Warning: Arrow function has too many lines (221). Maximum allowed is 50.  max-lines-per-function
[16:51:21.430] 108:11  Warning: Unexpected console statement.  no-console
[16:51:21.430] 158:11  Warning: Unexpected console statement.  no-console
[16:51:21.430] 167:28  Warning: Async method 'updateRequestStatus' has too many lines (67). Maximum allowed is 50.  max-lines-per-function
[16:51:21.430] 384:33  Warning: Unexpected console statement.  no-console
[16:51:21.430] 
[16:51:21.430] ./src/lib/stores/search-store.ts
[16:51:21.431] 3:57  Warning: 'Language' is defined but never used.  no-unused-vars
[16:51:21.431] 3:57  Warning: 'Language' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.431] 93:23  Warning: Arrow function has too many lines (124). Maximum allowed is 50.  max-lines-per-function
[16:51:21.431] 100:30  Warning: Arrow function has too many lines (61). Maximum allowed is 50.  max-lines-per-function
[16:51:21.431] 106:46  Warning: Arrow function has too many parameters (5). Maximum allowed is 4.  max-params
[16:51:21.431] 123:23  Warning: Unexpected string concatenation.  prefer-template
[16:51:21.431] 127:23  Warning: Unexpected string concatenation.  prefer-template
[16:51:21.432] 169:19  Warning: Arrow function has a complexity of 14. Maximum allowed is 10.  complexity
[16:51:21.432] 249:5  Warning: Arrow function has too many lines (96). Maximum allowed is 50.  max-lines-per-function
[16:51:21.432] 311:11  Warning: Unexpected console statement.  no-console
[16:51:21.432] 
[16:51:21.432] ./src/lib/stores/sermon-store.ts
[16:51:21.432] 169:51  Warning: Arrow function has too many lines (224). Maximum allowed is 50.  max-lines-per-function
[16:51:21.433] 270:5  Warning: Unexpected console statement.  no-console
[16:51:21.433] 318:27  Warning: Arrow function has a complexity of 15. Maximum allowed is 10.  complexity
[16:51:21.433] 372:5  Warning: Unexpected console statement.  no-console
[16:51:21.433] 386:5  Warning: Unexpected console statement.  no-console
[16:51:21.433] 
[16:51:21.433] ./src/lib/stores/theme-store.ts
[16:51:21.433] 118:26  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.433] 143:14  Warning: 'error' is defined but never used.  no-unused-vars
[16:51:21.434] 143:14  Warning: 'error' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.434] 
[16:51:21.434] ./src/lib/stores/types.ts
[16:51:21.434] 3:35  Warning: 'NewsItem' is defined but never used.  no-unused-vars
[16:51:21.434] 3:35  Warning: 'NewsItem' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.435] 3:53  Warning: 'Ministry' is defined but never used.  no-unused-vars
[16:51:21.435] 3:53  Warning: 'Ministry' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.435] 3:63  Warning: 'ChurchService' is defined but never used.  no-unused-vars
[16:51:21.435] 3:63  Warning: 'ChurchService' is defined but never used.  @typescript-eslint/no-unused-vars
[16:51:21.435] 26:17  Warning: 'language' is defined but never used.  no-unused-vars
[16:51:21.435] 28:7  Warning: 'key' is defined but never used.  no-unused-vars
[16:51:21.435] 28:20  Warning: 'fallback' is defined but never used.  no-unused-vars
[16:51:21.436] 38:14  Warning: 'theme' is defined but never used.  no-unused-vars
[16:51:21.436] 60:17  Warning: 'open' is defined but never used.  no-unused-vars
[16:51:21.436] 61:23  Warning: 'open' is defined but never used.  no-unused-vars
[16:51:21.436] 62:22  Warning: 'section' is defined but never used.  no-unused-vars
[16:51:21.436] 63:20  Warning: 'breadcrumbs' is defined but never used.  no-unused-vars
[16:51:21.436] 101:14  Warning: 'query' is defined but never used.  no-unused-vars
[16:51:21.437] 102:16  Warning: 'filters' is defined but never used.  no-unused-vars
[16:51:21.437] 103:19  Warning: 'query' is defined but never used.  no-unused-vars
[16:51:21.437] 103:34  Warning: 'filters' is defined but never used.  no-unused-vars
[16:51:21.437] 105:21  Warning: 'query' is defined but never used.  no-unused-vars
[16:51:21.437] 129:15  Warning: 'events' is defined but never used.  no-unused-vars
[16:51:21.437] 130:16  Warning: 'filters' is defined but never used.  no-unused-vars
[16:51:21.437] 131:22  Warning: 'event' is defined but never used.  no-unused-vars
[16:51:21.437] 133:20  Warning: 'id' is defined but never used.  no-unused-vars
[16:51:21.438] 134:22  Warning: 'eventId' is defined but never used.  no-unused-vars
[16:51:21.438] 134:39  Warning: 'participantData' is defined but never used.  no-unused-vars
[16:51:21.438] 134:56  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.438] 200:16  Warning: 'sermons' is defined but never used.  no-unused-vars
[16:51:21.438] 201:15  Warning: 'series' is defined but never used.  no-unused-vars
[16:51:21.438] 202:22  Warning: 'sermon' is defined but never used.  no-unused-vars
[16:51:21.439] 203:22  Warning: 'series' is defined but never used.  no-unused-vars
[16:51:21.439] 204:16  Warning: 'filters' is defined but never used.  no-unused-vars
[16:51:21.439] 206:21  Warning: 'id' is defined but never used.  no-unused-vars
[16:51:21.439] 207:16  Warning: 'sermon' is defined but never used.  no-unused-vars
[16:51:21.439] 209:12  Warning: 'time' is defined but never used.  no-unused-vars
[16:51:21.439] 210:15  Warning: 'volume' is defined but never used.  no-unused-vars
[16:51:21.439] 212:20  Warning: 'sermonId' is defined but never used.  no-unused-vars
[16:51:21.440] 213:24  Warning: 'sermonId' is defined but never used.  no-unused-vars
[16:51:21.440] 249:17  Warning: 'data' is defined but never used.  no-unused-vars
[16:51:21.440] 250:19  Warning: 'validation' is defined but never used.  no-unused-vars
[16:51:21.440] 251:19  Warning: 'field' is defined but never used.  no-unused-vars
[16:51:21.440] 251:49  Warning: 'value' is defined but never used.  no-unused-vars
[16:51:21.440] 251:56  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[16:51:21.440] 284:19  Warning: 'request' is defined but never used.  no-unused-vars
[16:51:21.441] 285:20  Warning: 'requestId' is defined but never used.  no-unused-vars
[16:51:21.441] 286:25  Warning: 'requestId' is defined but never used.  no-unused-vars
[16:51:21.441] 286:44  Warning: 'status' is defined but never used.  no-unused-vars
[16:51:21.441] 286:77  Warning: 'testimonial' is defined but never used.  no-unused-vars
[16:51:21.441] 288:21  Warning: 'email' is defined but never used.  no-unused-vars
[16:51:21.441] 289:23  Warning: 'request' is defined but never used.  no-unused-vars
[16:51:21.441] 309:16  Warning: 'key' is defined but never used.  no-unused-vars
[16:51:21.441] 309:51  Warning: 'loading' is defined but never used.  no-unused-vars
[16:51:21.442] 310:22  Warning: 'loading' is defined but never used.  no-unused-vars
[16:51:21.442] 312:21  Warning: 'key' is defined but never used.  no-unused-vars
[16:51:21.442] 
[16:51:21.442] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
[16:51:21.487] Error: Command "npm run build" exited with 1