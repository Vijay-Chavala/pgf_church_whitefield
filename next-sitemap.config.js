/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://teluguchurch.org',
  generateRobosTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*', '/private/*'],

  // Add additional sitemaps
  additionalPaths: async config => [
    await config.transform(config, '/ministries'),
    await config.transform(config, '/sermons'),
    await config.transform(config, '/gallery'),
    await config.transform(config, '/ministries/sunday-service'),
    await config.transform(config, '/ministries/online-prayer'),
    await config.transform(config, '/ministries/youth-ministry'),
    await config.transform(config, '/ministries/womens-ministry'),
    await config.transform(config, '/ministries/sunday-school'),
  ],

  // Custom transformation
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: getChangeFreq(path),
      priority: getPriority(path),
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'en',
        },
        {
          href: `${config.siteUrl}/te${path}`,
          hreflang: 'te',
        },
      ],
    }
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/private'],
      },
    ],
    additionalSitemaps: ['https://teluguchurch.org/sitemap.xml'],
  },
}

function getChangeFreq(path) {
  if (path === '/') return 'daily'
  if (path.includes('/ministries')) return 'weekly'
  if (path.includes('/sermons')) return 'weekly'
  if (path.includes('/gallery')) return 'weekly'
  return 'monthly'
}

function getPriority(path) {
  if (path === '/') return 1.0
  if (path.includes('/ministries')) return 0.9
  if (path.includes('/sermons')) return 0.8
  if (path.includes('/gallery')) return 0.7
  return 0.6
}
