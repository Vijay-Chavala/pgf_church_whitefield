[19:01:58.816] Running build in Washington, D.C., USA (East) – iad1
[19:01:58.816] Build machine configuration: 2 cores, 8 GB
[19:01:58.831] Cloning github.com/Vijay-Chavala/pgf_church_whitefield (Branch: main, Commit: 01d5924)
[19:01:58.950] Previous build caches not available
[19:02:02.867] Cloning completed: 4.035s
[19:02:03.305] Running "vercel build"
[19:02:03.798] Vercel CLI 46.0.3
[19:02:04.119] Warning: Detected "engines": { "node": ">=18.0.0" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: http://vercel.link/node-version
[19:02:04.135] Installing dependencies...
[19:02:19.210] 
[19:02:19.210] added 600 packages in 15s
[19:02:19.210] 
[19:02:19.211] 178 packages are looking for funding
[19:02:19.211]   run `npm fund` for details
[19:02:19.295] Detected Next.js version: 15.3.5
[19:02:19.297] Running "npm run build"
[19:02:19.717] 
[19:02:19.718] > telugu-church-website@0.1.0 build
[19:02:19.718] > next build
[19:02:19.718] 
[19:02:20.358] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[19:02:20.359] This information is used to shape Next.js' roadmap and prioritize features.
[19:02:20.359] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[19:02:20.359] https://nextjs.org/telemetry
[19:02:20.360] 
[19:02:20.467]    ▲ Next.js 15.3.5
[19:02:20.468]    - Experiments (use with caution):
[19:02:20.468]      ✓ optimizeCss
[19:02:20.468] 
[19:02:20.494]    Creating an optimized production build ...
[19:02:20.519]    Using tsconfig file: ./tsconfig.json
[19:02:37.255]  ✓ Compiled successfully in 16.0s
[19:02:37.260]    Linting and checking validity of types ...
[19:02:51.478] 
[19:02:51.478] ./src/app/api/robots/route.ts
[19:02:51.480] 3:8  Warning: Async function 'GET' has too many lines (76). Maximum allowed is 50.  max-lines-per-function
[19:02:51.480] 
[19:02:51.480] ./src/app/api/rss/route.ts
[19:02:51.480] 4:8  Warning: Async function 'GET' has too many lines (92). Maximum allowed is 50.  max-lines-per-function
[19:02:51.480] 
[19:02:51.481] ./src/app/api/sitemap/route.ts
[19:02:51.481] 11:8  Warning: Async function 'GET' has too many lines (179). Maximum allowed is 50.  max-lines-per-function
[19:02:51.481] 
[19:02:51.481] ./src/app/gallery/page.tsx
[19:02:51.481] 13:16  Warning: Function 'GalleryPage' has too many lines (259). Maximum allowed is 50.  max-lines-per-function
[19:02:51.481] 
[19:02:51.482] ./src/app/layout.tsx
[19:02:51.482] 138:16  Warning: Function 'RootLayout' has too many lines (297). Maximum allowed is 50.  max-lines-per-function
[19:02:51.482] 
[19:02:51.483] ./src/components/analytics/google-analytics.tsx
[19:02:51.483] 35:7  Warning: '_command' is defined but never used.  no-unused-vars
[19:02:51.483] 36:7  Warning: '_targetId' is defined but never used.  no-unused-vars
[19:02:51.483] 37:7  Warning: '_config' is defined but never used.  no-unused-vars
[19:02:51.483] 
[19:02:51.484] ./src/components/analytics/performance-monitor.tsx
[19:02:51.484] 160:12  Warning: '_error' is defined but never used.  no-unused-vars
[19:02:51.484] 160:12  Warning: '_error' is defined but never used.  @typescript-eslint/no-unused-vars
[19:02:51.484] 169:9  Warning: Use object destructuring.  prefer-destructuring
[19:02:51.485] 169:34  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.485] 208:9  Warning: Use object destructuring.  prefer-destructuring
[19:02:51.485] 208:36  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.485] 241:16  Warning: Function 'PerformanceMonitor' has too many lines (80). Maximum allowed is 50.  max-lines-per-function
[19:02:51.485] 242:13  Warning: Arrow function has too many lines (75). Maximum allowed is 50.  max-lines-per-function
[19:02:51.486] 251:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.486] 265:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.486] 276:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.486] 287:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.487] 298:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.487] 
[19:02:51.487] ./src/components/gallery/gallery-section.tsx
[19:02:51.487] 16:8  Warning: Function 'GallerySection' has too many lines (171). Maximum allowed is 50.  max-lines-per-function
[19:02:51.488] 51:13  Warning: Use object destructuring.  prefer-destructuring
[19:02:51.488] 99:13  Warning: Arrow function has too many lines (82). Maximum allowed is 50.  max-lines-per-function
[19:02:51.488] 124:42  Warning: Arrow function has too many lines (54). Maximum allowed is 50.  max-lines-per-function
[19:02:51.488] 
[19:02:51.488] ./src/components/home/call-to-action.tsx
[19:02:51.489] 11:8  Warning: Function 'CallToAction' has too many lines (268). Maximum allowed is 50.  max-lines-per-function
[19:02:51.489] 11:8  Warning: Function 'CallToAction' has a complexity of 25. Maximum allowed is 10.  complexity
[19:02:51.489] 
[19:02:51.490] ./src/components/home/gallery-overview.tsx
[19:02:51.490] 17:8  Warning: Function 'GalleryOverview' has too many lines (175). Maximum allowed is 50.  max-lines-per-function
[19:02:51.490] 90:34  Warning: Arrow function has too many lines (76). Maximum allowed is 50.  max-lines-per-function
[19:02:51.490] 
[19:02:51.490] ./src/components/home/guest-speakers.tsx
[19:02:51.491] 18:8  Warning: Function 'GuestSpeakers' has too many lines (158). Maximum allowed is 50.  max-lines-per-function
[19:02:51.494] 97:32  Warning: Arrow function has too many lines (53). Maximum allowed is 50.  max-lines-per-function
[19:02:51.494] 
[19:02:51.494] ./src/components/home/hero-banner.tsx
[19:02:51.494] 263:8  Warning: Function 'HeroBanner' has too many lines (400). Maximum allowed is 50.  max-lines-per-function
[19:02:51.496] 263:8  Warning: Function 'HeroBanner' has a complexity of 39. Maximum allowed is 10.  complexity
[19:02:51.496] 
[19:02:51.497] ./src/components/home/home-page.tsx
[19:02:51.497] 16:8  Warning: Function 'HomePage' has too many lines (61). Maximum allowed is 50.  max-lines-per-function
[19:02:51.497] 
[19:02:51.497] ./src/components/home/ministries-overview.tsx
[19:02:51.497] 230:8  Warning: Function 'MinistriesOverview' has too many lines (179). Maximum allowed is 50.  max-lines-per-function
[19:02:51.498] 264:31  Warning: Arrow function has too many lines (106). Maximum allowed is 50.  max-lines-per-function
[19:02:51.498] 
[19:02:51.498] ./src/components/home/sermon-highlights.tsx
[19:02:51.498] 12:8  Warning: Function 'SermonHighlights' has too many lines (202). Maximum allowed is 50.  max-lines-per-function
[19:02:51.498] 85:30  Warning: Arrow function has too many lines (102). Maximum allowed is 50.  max-lines-per-function
[19:02:51.498] 
[19:02:51.499] ./src/components/home/social-radial-menu.tsx
[19:02:51.499] 24:8  Warning: Function 'SocialRadialMenu' has too many lines (129). Maximum allowed is 50.  max-lines-per-function
[19:02:51.499] 
[19:02:51.499] ./src/components/home/upcoming-events.tsx
[19:02:51.499] 13:8  Warning: Function 'UpcomingEvents' has too many lines (310). Maximum allowed is 50.  max-lines-per-function
[19:02:51.500] 99:30  Warning: Arrow function has too many lines (149). Maximum allowed is 50.  max-lines-per-function
[19:02:51.500] 99:30  Warning: Arrow function has a complexity of 22. Maximum allowed is 10.  complexity
[19:02:51.500] 
[19:02:51.500] ./src/components/home/welcome-message.tsx
[19:02:51.500] 11:8  Warning: Function 'WelcomeMessage' has too many lines (342). Maximum allowed is 50.  max-lines-per-function
[19:02:51.500] 
[19:02:51.501] ./src/components/layout/breadcrumb-nav.tsx
[19:02:51.501] 27:16  Warning: Function 'BreadcrumbNav' has too many lines (178). Maximum allowed is 50.  max-lines-per-function
[19:02:51.501] 37:45  Warning: Arrow function has too many lines (104). Maximum allowed is 50.  max-lines-per-function
[19:02:51.501] 62:26  Warning: Arrow function has too many lines (65). Maximum allowed is 50.  max-lines-per-function
[19:02:51.501] 62:26  Warning: Arrow function has a complexity of 13. Maximum allowed is 10.  complexity
[19:02:51.501] 
[19:02:51.502] ./src/components/layout/error-boundary.tsx
[19:02:51.502] 44:14  Warning: '_error' is defined but never used.  no-unused-vars
[19:02:51.502] 44:29  Warning: '_errorInfo' is defined but never used.  no-unused-vars
[19:02:51.502] 53:17  Warning: '_error' is defined but never used.  no-unused-vars
[19:02:51.502] 53:32  Warning: '_errorInfo' is defined but never used.  no-unused-vars
[19:02:51.503] 93:19  Warning: 'command' is defined but never used.  no-unused-vars
[19:02:51.503] 93:36  Warning: 'params' is defined but never used.  no-unused-vars
[19:02:51.504] 99:18  Warning: 'command' is defined but never used.  no-unused-vars
[19:02:51.504] 99:35  Warning: 'params' is defined but never used.  no-unused-vars
[19:02:51.504] 132:1  Warning: Function 'DefaultErrorFallback' has too many lines (230). Maximum allowed is 50.  max-lines-per-function
[19:02:51.504] 132:1  Warning: Function 'DefaultErrorFallback' has a complexity of 19. Maximum allowed is 10.  complexity
[19:02:51.515] 364:8  Warning: Function 'NotFoundError' has too many lines (54). Maximum allowed is 50.  max-lines-per-function
[19:02:51.515] 427:14  Warning: '_error' is defined but never used.  no-unused-vars
[19:02:51.516] 427:29  Warning: '_errorInfo' is defined but never used.  no-unused-vars
[19:02:51.516] 449:19  Warning: 'command' is defined but never used.  no-unused-vars
[19:02:51.516] 449:36  Warning: 'params' is defined but never used.  no-unused-vars
[19:02:51.517] 455:18  Warning: 'command' is defined but never used.  no-unused-vars
[19:02:51.517] 455:35  Warning: 'params' is defined but never used.  no-unused-vars
[19:02:51.517] 
[19:02:51.517] ./src/components/layout/footer.tsx
[19:02:51.517] 34:16  Warning: Function 'Footer' has too many lines (330). Maximum allowed is 50.  max-lines-per-function
[19:02:51.518] 34:16  Warning: Function 'Footer' has a complexity of 13. Maximum allowed is 10.  complexity
[19:02:51.518] 
[19:02:51.518] ./src/components/layout/header.tsx
[19:02:51.518] 72:16  Warning: Function 'Header' has too many lines (288). Maximum allowed is 50.  max-lines-per-function
[19:02:51.518] 164:38  Warning: Arrow function has too many lines (52). Maximum allowed is 50.  max-lines-per-function
[19:02:51.519] 274:46  Warning: Arrow function has too many lines (60). Maximum allowed is 50.  max-lines-per-function
[19:02:51.519] 
[19:02:51.519] ./src/components/layout/language-switcher.tsx
[19:02:51.519] 25:16  Warning: Function 'LanguageSwitcher' has too many lines (165). Maximum allowed is 50.  max-lines-per-function
[19:02:51.520] 25:16  Warning: Function 'LanguageSwitcher' has a complexity of 12. Maximum allowed is 10.  complexity
[19:02:51.520] 
[19:02:51.520] ./src/components/layout/loading.tsx
[19:02:51.520] 53:8  Warning: Function 'PageLoading' has too many lines (56). Maximum allowed is 50.  max-lines-per-function
[19:02:51.520] 
[19:02:51.521] ./src/components/layout/main-layout.tsx
[19:02:51.521] 30:37  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.521] 36:16  Warning: Function 'MainLayout' has too many lines (78). Maximum allowed is 50.  max-lines-per-function
[19:02:51.521] 36:16  Warning: Function 'MainLayout' has a complexity of 15. Maximum allowed is 10.  complexity
[19:02:51.521] 116:1  Warning: Function 'ScrollToTopButton' has too many lines (54). Maximum allowed is 50.  max-lines-per-function
[19:02:51.522] 
[19:02:51.522] ./src/components/layout/map-section.tsx
[19:02:51.522] 16:16  Warning: Function 'MapSection' has too many lines (332). Maximum allowed is 50.  max-lines-per-function
[19:02:51.522] 
[19:02:51.522] ./src/components/layout/seo.tsx
[19:02:51.523] 21:35  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.523] 26:8  Warning: Function 'SEO' has too many lines (144). Maximum allowed is 50.  max-lines-per-function
[19:02:51.523] 26:8  Warning: Function 'SEO' has a complexity of 18. Maximum allowed is 10.  complexity
[19:02:51.523] 82:5  Warning: Fragments should contain more than one child - otherwise, there’s no need for a Fragment at all.  react/jsx-no-useless-fragment
[19:02:51.529] 172:8  Warning: Function 'OrganizationStructuredData' has too many lines (66). Maximum allowed is 50.  max-lines-per-function
[19:02:51.529] 240:8  Warning: Function 'EventStructuredData' has too many lines (59). Maximum allowed is 50.  max-lines-per-function
[19:02:51.530] 
[19:02:51.530] ./src/components/ministries/ministries-page.tsx
[19:02:51.530] 142:8  Warning: Function 'MinistriesPage' has too many lines (169). Maximum allowed is 50.  max-lines-per-function
[19:02:51.530] 192:35  Warning: Arrow function has too many lines (72). Maximum allowed is 50.  max-lines-per-function
[19:02:51.530] 
[19:02:51.531] ./src/components/ministries/ministry-detail-page.tsx
[19:02:51.531] 52:8  Warning: Function 'MinistryDetailPage' has too many lines (313). Maximum allowed is 50.  max-lines-per-function
[19:02:51.531] 52:8  Warning: Function 'MinistryDetailPage' has a complexity of 15. Maximum allowed is 10.  complexity
[19:02:51.531] 
[19:02:51.531] ./src/components/providers/theme-provider.tsx
[19:02:51.531] 34:10  Warning: Fragments should contain more than one child - otherwise, there’s no need for a Fragment at all.  react/jsx-no-useless-fragment
[19:02:51.532] 
[19:02:51.532] ./src/components/seo/structured-data.tsx
[19:02:51.532] 38:16  Warning: Function 'StructuredData' has too many lines (344). Maximum allowed is 50.  max-lines-per-function
[19:02:51.532] 38:16  Warning: Function 'StructuredData' has a complexity of 14. Maximum allowed is 10.  complexity
[19:02:51.532] 
[19:02:51.532] ./src/components/sermons/sermons-page.tsx
[19:02:51.532] 28:8  Warning: Function 'SermonsPage' has too many lines (259). Maximum allowed is 50.  max-lines-per-function
[19:02:51.532] 293:13  Warning: 'textObj' is defined but never used.  no-unused-vars
[19:02:51.532] 294:16  Warning: 'dateString' is defined but never used.  no-unused-vars
[19:02:51.532] 295:20  Warning: 'minutes' is defined but never used.  no-unused-vars
[19:02:51.532] 299:1  Warning: Function 'SermonCard' has too many lines (124). Maximum allowed is 50.  max-lines-per-function
[19:02:51.532] 
[19:02:51.532] ./src/components/ui/color-showcase.tsx
[19:02:51.533] 9:8  Warning: Function 'ColorShowcase' has too many lines (227). Maximum allowed is 50.  max-lines-per-function
[19:02:51.533] 
[19:02:51.533] ./src/components/ui/theme-toggle.tsx
[19:02:51.533] 15:8  Warning: Function 'ThemeToggle' has too many lines (57). Maximum allowed is 50.  max-lines-per-function
[19:02:51.533] 
[19:02:51.533] ./src/hooks/use-church.ts
[19:02:51.533] 102:32  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.533] 112:54  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.533] 138:14  Warning: '_error' is defined but never used.  no-unused-vars
[19:02:51.533] 138:14  Warning: '_error' is defined but never used.  @typescript-eslint/no-unused-vars
[19:02:51.533] 144:34  Warning: '_val' is defined but never used.  no-unused-vars
[19:02:51.533] 151:14  Warning: '_error' is defined but never used.  no-unused-vars
[19:02:51.533] 151:14  Warning: '_error' is defined but never used.  @typescript-eslint/no-unused-vars
[19:02:51.533] 160:8  Warning: Function 'useFormValidation' has too many lines (62). Maximum allowed is 50.  max-lines-per-function
[19:02:51.533] 162:37  Warning: 'value' is defined but never used.  no-unused-vars
[19:02:51.534] 168:48  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.534] 190:47  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.534] 
[19:02:51.534] ./src/lib/stores/church-store.ts
[19:02:51.534] 12:17  Warning: 'open' is defined but never used.  no-unused-vars
[19:02:51.534] 13:22  Warning: 'section' is defined but never used.  no-unused-vars
[19:02:51.534] 21:25  Warning: 'services' is defined but never used.  no-unused-vars
[19:02:51.534] 25:24  Warning: 'open' is defined but never used.  no-unused-vars
[19:02:51.534] 29:16  Warning: 'loading' is defined but never used.  no-unused-vars
[19:02:51.534] 
[19:02:51.534] ./src/lib/stores/contact-store.ts
[19:02:51.534] 102:57  Warning: Arrow function has too many lines (181). Maximum allowed is 50.  max-lines-per-function
[19:02:51.534] 129:56  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.535] 150:17  Warning: Method 'validateForm' has too many lines (51). Maximum allowed is 50.  max-lines-per-function
[19:02:51.535] 202:15  Warning: Async method 'submitForm' has too many lines (62). Maximum allowed is 50.  max-lines-per-function
[19:02:51.535] 342:13  Warning: Use object destructuring.  prefer-destructuring
[19:02:51.535] 363:12  Warning: '_error' is defined but never used.  no-unused-vars
[19:02:51.535] 363:12  Warning: '_error' is defined but never used.  @typescript-eslint/no-unused-vars
[19:02:51.535] 
[19:02:51.535] ./src/lib/stores/event-store.ts
[19:02:51.535] 139:49  Warning: Arrow function has too many lines (216). Maximum allowed is 50.  max-lines-per-function
[19:02:51.535] 239:21  Warning: Async method 'registerForEvent' has too many lines (65). Maximum allowed is 50.  max-lines-per-function
[19:02:51.535] 239:45  Warning: '_participantData' is defined but never used.  no-unused-vars
[19:02:51.535] 239:45  Warning: '_participantData' is defined but never used.  @typescript-eslint/no-unused-vars
[19:02:51.535] 239:63  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.535] 308:26  Warning: Arrow function has a complexity of 13. Maximum allowed is 10.  complexity
[19:02:51.535] 
[19:02:51.535] ./src/lib/stores/language-store.ts
[19:02:51.536] 213:5  Warning: Arrow function has too many lines (54). Maximum allowed is 50.  max-lines-per-function
[19:02:51.536] 
[19:02:51.536] ./src/lib/stores/loading-store.ts
[19:02:51.536] 17:53  Warning: Arrow function has too many lines (68). Maximum allowed is 50.  max-lines-per-function
[19:02:51.536] 104:39  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.536] 105:11  Warning: 'args' is defined but never used.  no-unused-vars
[19:02:51.536] 165:56  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.536] 213:37  Warning: Arrow function has too many lines (60). Maximum allowed is 50.  max-lines-per-function
[19:02:51.536] 317:13  Warning: Use object destructuring.  prefer-destructuring
[19:02:51.537] 346:12  Warning: 'error' is defined but never used.  no-unused-vars
[19:02:51.537] 346:12  Warning: 'error' is defined but never used.  @typescript-eslint/no-unused-vars
[19:02:51.537] 
[19:02:51.537] ./src/lib/stores/navigation-store.ts
[19:02:51.537] 68:59  Warning: Arrow function has too many lines (74). Maximum allowed is 50.  max-lines-per-function
[19:02:51.537] 152:30  Warning: 'index' is defined but never used.  no-unused-vars
[19:02:51.538] 152:30  Warning: 'index' is defined but never used.  @typescript-eslint/no-unused-vars
[19:02:51.538] 
[19:02:51.538] ./src/lib/stores/prayer-store.ts
[19:02:51.538] 68:5  Warning: Arrow function has too many lines (221). Maximum allowed is 50.  max-lines-per-function
[19:02:51.538] 167:28  Warning: Async method 'updateRequestStatus' has too many lines (67). Maximum allowed is 50.  max-lines-per-function
[19:02:51.538] 
[19:02:51.538] ./src/lib/stores/search-store.ts
[19:02:51.538] 93:23  Warning: Arrow function has too many lines (124). Maximum allowed is 50.  max-lines-per-function
[19:02:51.538] 100:30  Warning: Arrow function has too many lines (61). Maximum allowed is 50.  max-lines-per-function
[19:02:51.538] 106:46  Warning: Arrow function has too many parameters (5). Maximum allowed is 4.  max-params
[19:02:51.538] 169:19  Warning: Arrow function has a complexity of 14. Maximum allowed is 10.  complexity
[19:02:51.538] 249:5  Warning: Arrow function has too many lines (96). Maximum allowed is 50.  max-lines-per-function
[19:02:51.538] 310:18  Warning: '_error' is defined but never used.  no-unused-vars
[19:02:51.538] 310:18  Warning: '_error' is defined but never used.  @typescript-eslint/no-unused-vars
[19:02:51.539] 
[19:02:51.539] ./src/lib/stores/sermon-store.ts
[19:02:51.539] 169:51  Warning: Arrow function has too many lines (224). Maximum allowed is 50.  max-lines-per-function
[19:02:51.539] 318:27  Warning: Arrow function has a complexity of 15. Maximum allowed is 10.  complexity
[19:02:51.539] 
[19:02:51.539] ./src/lib/stores/theme-store.ts
[19:02:51.539] 118:26  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.539] 143:14  Warning: '_error' is defined but never used.  no-unused-vars
[19:02:51.540] 143:14  Warning: '_error' is defined but never used.  @typescript-eslint/no-unused-vars
[19:02:51.540] 
[19:02:51.540] ./src/lib/stores/types.ts
[19:02:51.551] 26:17  Warning: 'language' is defined but never used.  no-unused-vars
[19:02:51.551] 28:7  Warning: 'key' is defined but never used.  no-unused-vars
[19:02:51.551] 28:20  Warning: 'fallback' is defined but never used.  no-unused-vars
[19:02:51.551] 38:14  Warning: 'theme' is defined but never used.  no-unused-vars
[19:02:51.551] 60:17  Warning: 'open' is defined but never used.  no-unused-vars
[19:02:51.551] 61:23  Warning: 'open' is defined but never used.  no-unused-vars
[19:02:51.551] 62:22  Warning: 'section' is defined but never used.  no-unused-vars
[19:02:51.551] 63:20  Warning: 'breadcrumbs' is defined but never used.  no-unused-vars
[19:02:51.551] 101:14  Warning: 'query' is defined but never used.  no-unused-vars
[19:02:51.551] 102:16  Warning: 'filters' is defined but never used.  no-unused-vars
[19:02:51.551] 103:19  Warning: 'query' is defined but never used.  no-unused-vars
[19:02:51.552] 103:34  Warning: 'filters' is defined but never used.  no-unused-vars
[19:02:51.552] 105:21  Warning: 'query' is defined but never used.  no-unused-vars
[19:02:51.552] 129:15  Warning: 'events' is defined but never used.  no-unused-vars
[19:02:51.552] 130:16  Warning: 'filters' is defined but never used.  no-unused-vars
[19:02:51.552] 131:22  Warning: 'event' is defined but never used.  no-unused-vars
[19:02:51.552] 133:20  Warning: 'id' is defined but never used.  no-unused-vars
[19:02:51.552] 134:22  Warning: 'eventId' is defined but never used.  no-unused-vars
[19:02:51.552] 134:39  Warning: 'participantData' is defined but never used.  no-unused-vars
[19:02:51.552] 134:56  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.552] 200:16  Warning: 'sermons' is defined but never used.  no-unused-vars
[19:02:51.552] 201:15  Warning: 'series' is defined but never used.  no-unused-vars
[19:02:51.552] 202:22  Warning: 'sermon' is defined but never used.  no-unused-vars
[19:02:51.552] 203:22  Warning: 'series' is defined but never used.  no-unused-vars
[19:02:51.552] 204:16  Warning: 'filters' is defined but never used.  no-unused-vars
[19:02:51.552] 206:21  Warning: 'id' is defined but never used.  no-unused-vars
[19:02:51.553] 207:16  Warning: 'sermon' is defined but never used.  no-unused-vars
[19:02:51.553] 209:12  Warning: 'time' is defined but never used.  no-unused-vars
[19:02:51.553] 210:15  Warning: 'volume' is defined but never used.  no-unused-vars
[19:02:51.553] 212:20  Warning: 'sermonId' is defined but never used.  no-unused-vars
[19:02:51.553] 213:24  Warning: 'sermonId' is defined but never used.  no-unused-vars
[19:02:51.553] 249:17  Warning: 'data' is defined but never used.  no-unused-vars
[19:02:51.553] 250:19  Warning: 'validation' is defined but never used.  no-unused-vars
[19:02:51.553] 251:19  Warning: 'field' is defined but never used.  no-unused-vars
[19:02:51.553] 251:49  Warning: 'value' is defined but never used.  no-unused-vars
[19:02:51.553] 251:56  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[19:02:51.553] 284:19  Warning: 'request' is defined but never used.  no-unused-vars
[19:02:51.553] 285:20  Warning: 'requestId' is defined but never used.  no-unused-vars
[19:02:51.553] 286:25  Warning: 'requestId' is defined but never used.  no-unused-vars
[19:02:51.553] 286:44  Warning: 'status' is defined but never used.  no-unused-vars
[19:02:51.554] 286:77  Warning: 'testimonial' is defined but never used.  no-unused-vars
[19:02:51.554] 288:21  Warning: 'email' is defined but never used.  no-unused-vars
[19:02:51.554] 289:23  Warning: 'request' is defined but never used.  no-unused-vars
[19:02:51.554] 309:16  Warning: 'key' is defined but never used.  no-unused-vars
[19:02:51.554] 309:51  Warning: 'loading' is defined but never used.  no-unused-vars
[19:02:51.554] 310:22  Warning: 'loading' is defined but never used.  no-unused-vars
[19:02:51.554] 312:21  Warning: 'key' is defined but never used.  no-unused-vars
[19:02:51.554] 
[19:02:51.554] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
[19:02:52.448]    Collecting page data ...
[19:02:54.719]    Generating static pages (0/16) ...
[19:02:55.739]  ⨯ useSearchParams() should be wrapped in a suspense boundary at page "/404". Read more: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
[19:02:55.739]     at o (/vercel/path0/.next/server/vendors.js:3:21313)
[19:02:55.739]     at d (/vercel/path0/.next/server/vendors.js:24:44337)
[19:02:55.740]     at r (/vercel/path0/.next/server/common.js:88:27495)
[19:02:55.740]     at r (/vercel/path0/.next/server/common.js:88:27328)
[19:02:55.740]     at nF (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:76:46843)
[19:02:55.740]     at nH (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:76:48618)
[19:02:55.740]     at nH (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:76:64688)
[19:02:55.740]     at nW (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:76:67762)
[19:02:55.740]     at nz (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:76:65337)
[19:02:55.741]     at nY (/vercel/path0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:76:71193)
[19:02:55.741] Error occurred prerendering page "/_not-found". Read more: https://nextjs.org/docs/messages/prerender-error
[19:02:55.741] Export encountered an error on /_not-found/page: /_not-found, exiting the build.
[19:02:55.749]  ⨯ Next.js build worker exited with code: 1 and signal: null
[19:02:55.799] Error: Command "npm run build" exited with 1