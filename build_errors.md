[18:27:49.163] Running build in Washington, D.C., USA (East) – iad1
[18:27:49.163] Build machine configuration: 2 cores, 8 GB
[18:27:49.178] Cloning github.com/Vijay-Chavala/pgf_church_whitefield (Branch: main, Commit: f70cbcb)
[18:27:49.463] Previous build caches not available
[18:27:55.422] Cloning completed: 6.244s
[18:27:55.872] Running "vercel build"
[18:27:56.266] Vercel CLI 46.0.3
[18:27:56.795] Warning: Detected "engines": { "node": ">=18.0.0" } in your `package.json` that will automatically upgrade when a new major Node.js Version is released. Learn More: http://vercel.link/node-version
[18:27:56.810] Installing dependencies...
[18:28:13.782] 
[18:28:13.783] added 597 packages in 16s
[18:28:13.783] 
[18:28:13.783] 177 packages are looking for funding
[18:28:13.784]   run `npm fund` for details
[18:28:13.852] Detected Next.js version: 15.3.5
[18:28:13.858] Running "npm run build"
[18:28:13.975] 
[18:28:13.975] > telugu-church-website@0.1.0 build
[18:28:13.976] > next build
[18:28:13.976] 
[18:28:14.671] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[18:28:14.672] This information is used to shape Next.js' roadmap and prioritize features.
[18:28:14.672] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[18:28:14.672] https://nextjs.org/telemetry
[18:28:14.672] 
[18:28:14.792]    ▲ Next.js 15.3.5
[18:28:14.793]    - Experiments (use with caution):
[18:28:14.793]      ✓ optimizeCss
[18:28:14.793] 
[18:28:14.820]    Creating an optimized production build ...
[18:28:14.846]    Using tsconfig file: ./tsconfig.json
[18:28:32.520]  ✓ Compiled successfully in 17.0s
[18:28:32.525]    Linting and checking validity of types ...
[18:28:47.417] 
[18:28:47.418] ./src/app/api/robots/route.ts
[18:28:47.419] 3:8  Warning: Async function 'GET' has too many lines (76). Maximum allowed is 50.  max-lines-per-function
[18:28:47.419] 
[18:28:47.419] ./src/app/api/rss/route.ts
[18:28:47.419] 4:8  Warning: Async function 'GET' has too many lines (92). Maximum allowed is 50.  max-lines-per-function
[18:28:47.419] 
[18:28:47.420] ./src/app/api/sitemap/route.ts
[18:28:47.420] 11:8  Warning: Async function 'GET' has too many lines (179). Maximum allowed is 50.  max-lines-per-function
[18:28:47.420] 
[18:28:47.420] ./src/app/gallery/page.tsx
[18:28:47.420] 13:16  Warning: Function 'GalleryPage' has too many lines (259). Maximum allowed is 50.  max-lines-per-function
[18:28:47.421] 187:21  Warning: Empty components are self-closing  react/self-closing-comp
[18:28:47.422] 
[18:28:47.423] ./src/app/layout.tsx
[18:28:47.423] 138:16  Warning: Function 'RootLayout' has too many lines (297). Maximum allowed is 50.  max-lines-per-function
[18:28:47.423] 
[18:28:47.423] ./src/components/analytics/google-analytics.tsx
[18:28:47.424] 35:7  Warning: 'command' is defined but never used.  no-unused-vars
[18:28:47.424] 36:7  Warning: '_targetId' is defined but never used.  no-unused-vars
[18:28:47.424] 37:7  Warning: '_config' is defined but never used.  no-unused-vars
[18:28:47.424] 
[18:28:47.424] ./src/components/analytics/performance-monitor.tsx
[18:28:47.425] 161:5  Warning: Unexpected console statement.  no-console
[18:28:47.425] 169:9  Warning: Use object destructuring.  prefer-destructuring
[18:28:47.425] 169:34  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.425] 207:9  Warning: Use object destructuring.  prefer-destructuring
[18:28:47.426] 207:36  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.426] 239:16  Warning: Function 'PerformanceMonitor' has too many lines (80). Maximum allowed is 50.  max-lines-per-function
[18:28:47.426] 240:13  Warning: Arrow function has too many lines (75). Maximum allowed is 50.  max-lines-per-function
[18:28:47.426] 249:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.426] 263:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.435] 274:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.436] 285:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.436] 296:50  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.436] 
[18:28:47.437] ./src/components/gallery/gallery-section.tsx
[18:28:47.437] 16:8  Warning: Function 'GallerySection' has too many lines (171). Maximum allowed is 50.  max-lines-per-function
[18:28:47.437] 51:13  Warning: Use object destructuring.  prefer-destructuring
[18:28:47.438] 74:9  Warning: Empty components are self-closing  react/self-closing-comp
[18:28:47.438] 99:13  Warning: Arrow function has too many lines (82). Maximum allowed is 50.  max-lines-per-function
[18:28:47.440] 124:42  Warning: Arrow function has too many lines (54). Maximum allowed is 50.  max-lines-per-function
[18:28:47.440] 
[18:28:47.440] ./src/components/home/call-to-action.tsx
[18:28:47.440] 11:8  Warning: Function 'CallToAction' has too many lines (268). Maximum allowed is 50.  max-lines-per-function
[18:28:47.441] 11:8  Warning: Function 'CallToAction' has a complexity of 25. Maximum allowed is 10.  complexity
[18:28:47.441] 
[18:28:47.441] ./src/components/home/gallery-overview.tsx
[18:28:47.441] 17:8  Warning: Function 'GalleryOverview' has too many lines (175). Maximum allowed is 50.  max-lines-per-function
[18:28:47.442] 90:34  Warning: Arrow function has too many lines (76). Maximum allowed is 50.  max-lines-per-function
[18:28:47.442] 
[18:28:47.442] ./src/components/home/guest-speakers.tsx
[18:28:47.442] 18:8  Warning: Function 'GuestSpeakers' has too many lines (158). Maximum allowed is 50.  max-lines-per-function
[18:28:47.443] 97:32  Warning: Arrow function has too many lines (53). Maximum allowed is 50.  max-lines-per-function
[18:28:47.443] 
[18:28:47.443] ./src/components/home/hero-banner.tsx
[18:28:47.443] 263:8  Warning: Function 'HeroBanner' has too many lines (400). Maximum allowed is 50.  max-lines-per-function
[18:28:47.443] 263:8  Warning: Function 'HeroBanner' has a complexity of 39. Maximum allowed is 10.  complexity
[18:28:47.443] 356:15  Warning: Empty components are self-closing  react/self-closing-comp
[18:28:47.444] 633:15  Warning: Empty components are self-closing  react/self-closing-comp
[18:28:47.444] 634:15  Warning: Empty components are self-closing  react/self-closing-comp
[18:28:47.444] 637:13  Warning: Empty components are self-closing  react/self-closing-comp
[18:28:47.444] 
[18:28:47.445] ./src/components/home/home-page.tsx
[18:28:47.445] 16:8  Warning: Function 'HomePage' has too many lines (61). Maximum allowed is 50.  max-lines-per-function
[18:28:47.445] 
[18:28:47.445] ./src/components/home/ministries-overview.tsx
[18:28:47.445] 230:8  Warning: Function 'MinistriesOverview' has too many lines (179). Maximum allowed is 50.  max-lines-per-function
[18:28:47.445] 264:31  Warning: Arrow function has too many lines (106). Maximum allowed is 50.  max-lines-per-function
[18:28:47.446] 
[18:28:47.446] ./src/components/home/sermon-highlights.tsx
[18:28:47.446] 12:8  Warning: Function 'SermonHighlights' has too many lines (202). Maximum allowed is 50.  max-lines-per-function
[18:28:47.446] 85:30  Warning: Arrow function has too many lines (102). Maximum allowed is 50.  max-lines-per-function
[18:28:47.446] 
[18:28:47.447] ./src/components/home/social-radial-menu.tsx
[18:28:47.447] 24:8  Warning: Function 'SocialRadialMenu' has too many lines (129). Maximum allowed is 50.  max-lines-per-function
[18:28:47.447] 
[18:28:47.447] ./src/components/home/upcoming-events.tsx
[18:28:47.447] 13:8  Warning: Function 'UpcomingEvents' has too many lines (310). Maximum allowed is 50.  max-lines-per-function
[18:28:47.447] 99:30  Warning: Arrow function has too many lines (149). Maximum allowed is 50.  max-lines-per-function
[18:28:47.448] 99:30  Warning: Arrow function has a complexity of 22. Maximum allowed is 10.  complexity
[18:28:47.451] 
[18:28:47.451] ./src/components/home/welcome-message.tsx
[18:28:47.452] 11:8  Warning: Function 'WelcomeMessage' has too many lines (342). Maximum allowed is 50.  max-lines-per-function
[18:28:47.452] 
[18:28:47.452] ./src/components/layout/breadcrumb-nav.tsx
[18:28:47.452] 27:16  Warning: Function 'BreadcrumbNav' has too many lines (178). Maximum allowed is 50.  max-lines-per-function
[18:28:47.452] 37:45  Warning: Arrow function has too many lines (104). Maximum allowed is 50.  max-lines-per-function
[18:28:47.453] 62:26  Warning: Arrow function has too many lines (65). Maximum allowed is 50.  max-lines-per-function
[18:28:47.453] 62:26  Warning: Arrow function has a complexity of 13. Maximum allowed is 10.  complexity
[18:28:47.453] 
[18:28:47.453] ./src/components/layout/error-boundary.tsx
[18:28:47.453] 44:14  Warning: '_error' is defined but never used.  no-unused-vars
[18:28:47.454] 44:29  Warning: '_errorInfo' is defined but never used.  no-unused-vars
[18:28:47.454] 53:17  Warning: '_error' is defined but never used.  no-unused-vars
[18:28:47.454] 53:32  Warning: '_errorInfo' is defined but never used.  no-unused-vars
[18:28:47.454] 81:5  Warning: Unexpected console statement.  no-console
[18:28:47.454] 93:19  Warning: 'command' is defined but never used.  no-unused-vars
[18:28:47.455] 93:36  Warning: 'params' is defined but never used.  no-unused-vars
[18:28:47.455] 99:18  Warning: 'command' is defined but never used.  no-unused-vars
[18:28:47.455] 99:35  Warning: 'params' is defined but never used.  no-unused-vars
[18:28:47.456] 132:1  Warning: Function 'DefaultErrorFallback' has too many lines (230). Maximum allowed is 50.  max-lines-per-function
[18:28:47.456] 132:1  Warning: Function 'DefaultErrorFallback' has a complexity of 19. Maximum allowed is 10.  complexity
[18:28:47.456] 364:8  Warning: Function 'NotFoundError' has too many lines (54). Maximum allowed is 50.  max-lines-per-function
[18:28:47.456] 427:14  Warning: '_error' is defined but never used.  no-unused-vars
[18:28:47.456] 427:29  Warning: '_errorInfo' is defined but never used.  no-unused-vars
[18:28:47.457] 442:5  Warning: Unexpected console statement.  no-console
[18:28:47.457] 449:19  Warning: 'command' is defined but never used.  no-unused-vars
[18:28:47.457] 449:36  Warning: 'params' is defined but never used.  no-unused-vars
[18:28:47.457] 455:18  Warning: 'command' is defined but never used.  no-unused-vars
[18:28:47.457] 455:35  Warning: 'params' is defined but never used.  no-unused-vars
[18:28:47.457] 
[18:28:47.457] ./src/components/layout/footer.tsx
[18:28:47.458] 34:16  Warning: Function 'Footer' has too many lines (330). Maximum allowed is 50.  max-lines-per-function
[18:28:47.458] 34:16  Warning: Function 'Footer' has a complexity of 13. Maximum allowed is 10.  complexity
[18:28:47.458] 
[18:28:47.458] ./src/components/layout/header.tsx
[18:28:47.458] 72:16  Warning: Function 'Header' has too many lines (288). Maximum allowed is 50.  max-lines-per-function
[18:28:47.458] 164:38  Warning: Arrow function has too many lines (52). Maximum allowed is 50.  max-lines-per-function
[18:28:47.458] 274:46  Warning: Arrow function has too many lines (60). Maximum allowed is 50.  max-lines-per-function
[18:28:47.459] 
[18:28:47.459] ./src/components/layout/language-switcher.tsx
[18:28:47.459] 25:16  Warning: Function 'LanguageSwitcher' has too many lines (165). Maximum allowed is 50.  max-lines-per-function
[18:28:47.459] 25:16  Warning: Function 'LanguageSwitcher' has a complexity of 12. Maximum allowed is 10.  complexity
[18:28:47.459] 
[18:28:47.459] ./src/components/layout/loading.tsx
[18:28:47.459] 53:8  Warning: Function 'PageLoading' has too many lines (56). Maximum allowed is 50.  max-lines-per-function
[18:28:47.459] 
[18:28:47.460] ./src/components/layout/main-layout.tsx
[18:28:47.460] 30:37  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.460] 36:16  Warning: Function 'MainLayout' has too many lines (78). Maximum allowed is 50.  max-lines-per-function
[18:28:47.460] 36:16  Warning: Function 'MainLayout' has a complexity of 15. Maximum allowed is 10.  complexity
[18:28:47.460] 116:1  Warning: Function 'ScrollToTopButton' has too many lines (54). Maximum allowed is 50.  max-lines-per-function
[18:28:47.460] 
[18:28:47.460] ./src/components/layout/map-section.tsx
[18:28:47.461] 16:16  Warning: Function 'MapSection' has too many lines (332). Maximum allowed is 50.  max-lines-per-function
[18:28:47.461] 
[18:28:47.461] ./src/components/layout/seo.tsx
[18:28:47.461] 21:35  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.461] 26:8  Warning: Function 'SEO' has too many lines (144). Maximum allowed is 50.  max-lines-per-function
[18:28:47.461] 26:8  Warning: Function 'SEO' has a complexity of 18. Maximum allowed is 10.  complexity
[18:28:47.462] 82:5  Warning: Fragments should contain more than one child - otherwise, there’s no need for a Fragment at all.  react/jsx-no-useless-fragment
[18:28:47.462] 172:8  Warning: Function 'OrganizationStructuredData' has too many lines (66). Maximum allowed is 50.  max-lines-per-function
[18:28:47.462] 240:8  Warning: Function 'EventStructuredData' has too many lines (59). Maximum allowed is 50.  max-lines-per-function
[18:28:47.462] 
[18:28:47.463] ./src/components/ministries/ministries-page.tsx
[18:28:47.463] 142:8  Warning: Function 'MinistriesPage' has too many lines (169). Maximum allowed is 50.  max-lines-per-function
[18:28:47.463] 192:35  Warning: Arrow function has too many lines (72). Maximum allowed is 50.  max-lines-per-function
[18:28:47.463] 
[18:28:47.463] ./src/components/ministries/ministry-detail-page.tsx
[18:28:47.463] 52:8  Warning: Function 'MinistryDetailPage' has too many lines (313). Maximum allowed is 50.  max-lines-per-function
[18:28:47.463] 52:8  Warning: Function 'MinistryDetailPage' has a complexity of 15. Maximum allowed is 10.  complexity
[18:28:47.464] 
[18:28:47.464] ./src/components/providers/theme-provider.tsx
[18:28:47.464] 34:10  Warning: Fragments should contain more than one child - otherwise, there’s no need for a Fragment at all.  react/jsx-no-useless-fragment
[18:28:47.464] 
[18:28:47.464] ./src/components/seo/structured-data.tsx
[18:28:47.464] 38:16  Warning: Function 'StructuredData' has too many lines (344). Maximum allowed is 50.  max-lines-per-function
[18:28:47.464] 38:16  Warning: Function 'StructuredData' has a complexity of 14. Maximum allowed is 10.  complexity
[18:28:47.465] 
[18:28:47.465] ./src/components/sermons/sermons-page.tsx
[18:28:47.465] 28:8  Warning: Function 'SermonsPage' has too many lines (259). Maximum allowed is 50.  max-lines-per-function
[18:28:47.465] 293:13  Warning: 'textObj' is defined but never used.  no-unused-vars
[18:28:47.465] 294:16  Warning: 'dateString' is defined but never used.  no-unused-vars
[18:28:47.465] 295:20  Warning: 'minutes' is defined but never used.  no-unused-vars
[18:28:47.465] 299:1  Warning: Function 'SermonCard' has too many lines (124). Maximum allowed is 50.  max-lines-per-function
[18:28:47.466] 
[18:28:47.466] ./src/components/ui/color-showcase.tsx
[18:28:47.466] 9:8  Warning: Function 'ColorShowcase' has too many lines (227). Maximum allowed is 50.  max-lines-per-function
[18:28:47.466] 
[18:28:47.466] ./src/components/ui/theme-toggle.tsx
[18:28:47.466] 15:8  Warning: Function 'ThemeToggle' has too many lines (57). Maximum allowed is 50.  max-lines-per-function
[18:28:47.466] 
[18:28:47.467] ./src/hooks/use-church.ts
[18:28:47.467] 102:32  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.467] 112:54  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.467] 138:14  Warning: 'error' is defined but never used.  no-unused-vars
[18:28:47.467] 138:14  Warning: 'error' is defined but never used.  @typescript-eslint/no-unused-vars
[18:28:47.467] 144:34  Warning: '_val' is defined but never used.  no-unused-vars
[18:28:47.468] 151:14  Warning: 'error' is defined but never used.  no-unused-vars
[18:28:47.468] 151:14  Warning: 'error' is defined but never used.  @typescript-eslint/no-unused-vars
[18:28:47.474] 160:8  Warning: Function 'useFormValidation' has too many lines (62). Maximum allowed is 50.  max-lines-per-function
[18:28:47.474] 162:37  Warning: 'value' is defined but never used.  no-unused-vars
[18:28:47.474] 168:48  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.474] 190:47  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.475] 
[18:28:47.475] ./src/lib/stores/church-store.ts
[18:28:47.475] 12:17  Warning: 'open' is defined but never used.  no-unused-vars
[18:28:47.475] 13:22  Warning: 'section' is defined but never used.  no-unused-vars
[18:28:47.475] 21:25  Warning: 'services' is defined but never used.  no-unused-vars
[18:28:47.475] 25:24  Warning: 'open' is defined but never used.  no-unused-vars
[18:28:47.475] 29:16  Warning: 'loading' is defined but never used.  no-unused-vars
[18:28:47.476] 
[18:28:47.476] ./src/lib/stores/contact-store.ts
[18:28:47.476] 102:57  Warning: Arrow function has too many lines (181). Maximum allowed is 50.  max-lines-per-function
[18:28:47.476] 129:56  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.476] 150:17  Warning: Method 'validateForm' has too many lines (51). Maximum allowed is 50.  max-lines-per-function
[18:28:47.476] 202:15  Warning: Async method 'submitForm' has too many lines (62). Maximum allowed is 50.  max-lines-per-function
[18:28:47.476] 342:13  Warning: Use object destructuring.  prefer-destructuring
[18:28:47.477] 363:12  Warning: 'error' is defined but never used.  no-unused-vars
[18:28:47.477] 363:12  Warning: 'error' is defined but never used.  @typescript-eslint/no-unused-vars
[18:28:47.477] 
[18:28:47.477] ./src/lib/stores/event-store.ts
[18:28:47.477] 139:49  Warning: Arrow function has too many lines (216). Maximum allowed is 50.  max-lines-per-function
[18:28:47.477] 239:21  Warning: Async method 'registerForEvent' has too many lines (65). Maximum allowed is 50.  max-lines-per-function
[18:28:47.477] 239:45  Warning: '_participantData' is defined but never used.  no-unused-vars
[18:28:47.478] 239:45  Warning: '_participantData' is defined but never used.  @typescript-eslint/no-unused-vars
[18:28:47.478] 239:63  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.478] 308:26  Warning: Arrow function has a complexity of 13. Maximum allowed is 10.  complexity
[18:28:47.478] 
[18:28:47.478] ./src/lib/stores/language-store.ts
[18:28:47.478] 213:5  Warning: Arrow function has too many lines (54). Maximum allowed is 50.  max-lines-per-function
[18:28:47.478] 
[18:28:47.479] ./src/lib/stores/loading-store.ts
[18:28:47.479] 17:53  Warning: Arrow function has too many lines (68). Maximum allowed is 50.  max-lines-per-function
[18:28:47.479] 104:39  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.479] 105:11  Warning: 'args' is defined but never used.  no-unused-vars
[18:28:47.479] 165:56  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.479] 213:37  Warning: Arrow function has too many lines (60). Maximum allowed is 50.  max-lines-per-function
[18:28:47.480] 317:13  Warning: Use object destructuring.  prefer-destructuring
[18:28:47.480] 347:5  Warning: Unexpected console statement.  no-console
[18:28:47.480] 
[18:28:47.480] ./src/lib/stores/navigation-store.ts
[18:28:47.480] 68:59  Warning: Arrow function has too many lines (74). Maximum allowed is 50.  max-lines-per-function
[18:28:47.480] 152:30  Warning: 'index' is defined but never used.  no-unused-vars
[18:28:47.481] 152:30  Warning: 'index' is defined but never used.  @typescript-eslint/no-unused-vars
[18:28:47.481] 
[18:28:47.481] ./src/lib/stores/prayer-store.ts
[18:28:47.481] 68:5  Warning: Arrow function has too many lines (221). Maximum allowed is 50.  max-lines-per-function
[18:28:47.481] 167:28  Warning: Async method 'updateRequestStatus' has too many lines (67). Maximum allowed is 50.  max-lines-per-function
[18:28:47.481] 384:33  Warning: Unexpected console statement.  no-console
[18:28:47.482] 
[18:28:47.482] ./src/lib/stores/search-store.ts
[18:28:47.482] 93:23  Warning: Arrow function has too many lines (124). Maximum allowed is 50.  max-lines-per-function
[18:28:47.482] 100:30  Warning: Arrow function has too many lines (61). Maximum allowed is 50.  max-lines-per-function
[18:28:47.482] 106:46  Warning: Arrow function has too many parameters (5). Maximum allowed is 4.  max-params
[18:28:47.492] 169:19  Warning: Arrow function has a complexity of 14. Maximum allowed is 10.  complexity
[18:28:47.493] 249:5  Warning: Arrow function has too many lines (96). Maximum allowed is 50.  max-lines-per-function
[18:28:47.493] 310:18  Warning: 'error' is defined but never used.  no-unused-vars
[18:28:47.493] 310:18  Warning: 'error' is defined but never used.  @typescript-eslint/no-unused-vars
[18:28:47.494] 
[18:28:47.494] ./src/lib/stores/sermon-store.ts
[18:28:47.494] 169:51  Warning: Arrow function has too many lines (224). Maximum allowed is 50.  max-lines-per-function
[18:28:47.494] 318:27  Warning: Arrow function has a complexity of 15. Maximum allowed is 10.  complexity
[18:28:47.494] 
[18:28:47.494] ./src/lib/stores/theme-store.ts
[18:28:47.494] 118:26  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.494] 143:14  Warning: '_error' is defined but never used.  no-unused-vars
[18:28:47.495] 143:14  Warning: '_error' is defined but never used.  @typescript-eslint/no-unused-vars
[18:28:47.495] 
[18:28:47.495] ./src/lib/stores/types.ts
[18:28:47.495] 26:17  Warning: 'language' is defined but never used.  no-unused-vars
[18:28:47.495] 28:7  Warning: 'key' is defined but never used.  no-unused-vars
[18:28:47.495] 28:20  Warning: 'fallback' is defined but never used.  no-unused-vars
[18:28:47.496] 38:14  Warning: 'theme' is defined but never used.  no-unused-vars
[18:28:47.496] 60:17  Warning: 'open' is defined but never used.  no-unused-vars
[18:28:47.496] 61:23  Warning: 'open' is defined but never used.  no-unused-vars
[18:28:47.496] 62:22  Warning: 'section' is defined but never used.  no-unused-vars
[18:28:47.496] 63:20  Warning: 'breadcrumbs' is defined but never used.  no-unused-vars
[18:28:47.496] 101:14  Warning: 'query' is defined but never used.  no-unused-vars
[18:28:47.496] 102:16  Warning: 'filters' is defined but never used.  no-unused-vars
[18:28:47.497] 103:19  Warning: 'query' is defined but never used.  no-unused-vars
[18:28:47.497] 103:34  Warning: 'filters' is defined but never used.  no-unused-vars
[18:28:47.497] 105:21  Warning: 'query' is defined but never used.  no-unused-vars
[18:28:47.497] 129:15  Warning: 'events' is defined but never used.  no-unused-vars
[18:28:47.497] 130:16  Warning: 'filters' is defined but never used.  no-unused-vars
[18:28:47.497] 131:22  Warning: 'event' is defined but never used.  no-unused-vars
[18:28:47.497] 133:20  Warning: 'id' is defined but never used.  no-unused-vars
[18:28:47.497] 134:22  Warning: 'eventId' is defined but never used.  no-unused-vars
[18:28:47.498] 134:39  Warning: 'participantData' is defined but never used.  no-unused-vars
[18:28:47.498] 134:56  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.498] 200:16  Warning: 'sermons' is defined but never used.  no-unused-vars
[18:28:47.498] 201:15  Warning: 'series' is defined but never used.  no-unused-vars
[18:28:47.498] 202:22  Warning: 'sermon' is defined but never used.  no-unused-vars
[18:28:47.498] 203:22  Warning: 'series' is defined but never used.  no-unused-vars
[18:28:47.498] 204:16  Warning: 'filters' is defined but never used.  no-unused-vars
[18:28:47.499] 206:21  Warning: 'id' is defined but never used.  no-unused-vars
[18:28:47.499] 207:16  Warning: 'sermon' is defined but never used.  no-unused-vars
[18:28:47.499] 209:12  Warning: 'time' is defined but never used.  no-unused-vars
[18:28:47.499] 210:15  Warning: 'volume' is defined but never used.  no-unused-vars
[18:28:47.499] 212:20  Warning: 'sermonId' is defined but never used.  no-unused-vars
[18:28:47.500] 213:24  Warning: 'sermonId' is defined but never used.  no-unused-vars
[18:28:47.500] 249:17  Warning: 'data' is defined but never used.  no-unused-vars
[18:28:47.500] 250:19  Warning: 'validation' is defined but never used.  no-unused-vars
[18:28:47.500] 251:19  Warning: 'field' is defined but never used.  no-unused-vars
[18:28:47.500] 251:49  Warning: 'value' is defined but never used.  no-unused-vars
[18:28:47.500] 251:56  Warning: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[18:28:47.500] 284:19  Warning: 'request' is defined but never used.  no-unused-vars
[18:28:47.501] 285:20  Warning: 'requestId' is defined but never used.  no-unused-vars
[18:28:47.501] 286:25  Warning: 'requestId' is defined but never used.  no-unused-vars
[18:28:47.501] 286:44  Warning: 'status' is defined but never used.  no-unused-vars
[18:28:47.501] 286:77  Warning: 'testimonial' is defined but never used.  no-unused-vars
[18:28:47.501] 288:21  Warning: 'email' is defined but never used.  no-unused-vars
[18:28:47.501] 289:23  Warning: 'request' is defined but never used.  no-unused-vars
[18:28:47.501] 309:16  Warning: 'key' is defined but never used.  no-unused-vars
[18:28:47.501] 309:51  Warning: 'loading' is defined but never used.  no-unused-vars
[18:28:47.501] 310:22  Warning: 'loading' is defined but never used.  no-unused-vars
[18:28:47.502] 312:21  Warning: 'key' is defined but never used.  no-unused-vars
[18:28:47.502] 
[18:28:47.502] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
[18:28:48.187]    Collecting page data ...
[18:28:50.276]    Generating static pages (0/16) ...
[18:28:51.192] Error occurred prerendering page "/404". Read more: https://nextjs.org/docs/messages/prerender-error
[18:28:51.192] Error: Cannot find module 'critters'
[18:28:51.192] Require stack:
[18:28:51.193] - /vercel/path0/node_modules/next/dist/compiled/next-server/pages.runtime.prod.js
[18:28:51.193] - /vercel/path0/.next/server/pages/_document.js
[18:28:51.193] - /vercel/path0/node_modules/next/dist/server/require.js
[18:28:51.193] - /vercel/path0/node_modules/next/dist/server/load-components.js
[18:28:51.193] - /vercel/path0/node_modules/next/dist/build/utils.js
[18:28:51.194] - /vercel/path0/node_modules/next/dist/build/worker.js
[18:28:51.194] - /vercel/path0/node_modules/next/dist/compiled/jest-worker/processChild.js
[18:28:51.194]     at Function.<anonymous> (node:internal/modules/cjs/loader:1365:15)
[18:28:51.194]     at /vercel/path0/node_modules/next/dist/server/require-hook.js:55:36
[18:28:51.194]     at defaultResolveImpl (node:internal/modules/cjs/loader:1021:19)
[18:28:51.194]     at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1026:22)
[18:28:51.195]     at Function._load (node:internal/modules/cjs/loader:1175:37)
[18:28:51.195]     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
[18:28:51.195]     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
[18:28:51.195]     at Module.<anonymous> (node:internal/modules/cjs/loader:1445:12)
[18:28:51.195]     at mod.require (/vercel/path0/node_modules/next/dist/server/require-hook.js:65:28)
[18:28:51.195]     at require (node:internal/modules/helpers:135:16)
[18:28:51.196] Export encountered an error on /_error: /404, exiting the build.
[18:28:51.202]  ⨯ Next.js build worker exited with code: 1 and signal: null
[18:28:51.257] Error: Command "npm run build" exited with 1