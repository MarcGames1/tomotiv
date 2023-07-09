/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tomotiv.ro',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: [
    '/termeni-conditii',
    '/politica-cookie',
    '/admin/*',
    '/admin',
    '/cursuri-utilizator',
    'curs/*',
    '/gdpr',
    '/inregistrare',
    '/login',
    '/forgot-password',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/',
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: 'curs/*',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
      },

      {
        userAgent: 'DotBot',
        disallow: ['/', '/*'],
      },
      {
        userAgent: 'AhrefsBot',
        disallow: ['/', '/*'],
      },
      {
        userAgent: 'PetalBot',
        disallow: ['/', '/*'],
      },
      {
        userAgent: 'SEMrushBot',
        disallow: ['/', '/*'],
      },
      {
        userAgent: 'Majestic',
        disallow: ['/', '/*'],
      },

      {
        userAgent: 'AdsBot-Google-Mobile',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: 'curs/*',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
      },
      {
        userAgent: 'AdsBot-Google',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: 'curs/*',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: ['/'],
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: 'curs/*',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: 'curs/*',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
      },
      {
        userAgent: 'Googlebot-Video',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: 'curs/*',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: 'curs/*',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
      },
      {
        userAgent: 'Google-Read-Aloud',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: 'curs/*',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
      },
      {
        userAgent: 'Google-Site-Verification',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: 'curs/*',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
      },
      {
        userAgent: 'Bingbot',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: 'curs/*',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
      },
      {
        userAgent: 'Slurp',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: 'curs/*',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
      },
      {
        userAgent: 'DuckDuckBot',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: 'curs/*',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
      },
      {
        userAgent: 'facebot',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: 'curs/*',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
      },
      {
        userAgent: 'Applebot',
        allow: ['/'],
        disallow: '/politica-cookie',
        disallow: '/termeni-conditii',
        disallow: '/admin/*',
        dissallow: '/gdpr',
        dissallow: '/politica-cookie',
        dissallow: '/cursuri-utilizator',
        dissallow: '/inregistrare',
        dissallow: '/login',
        dissallow: '/forgot-password',
        dissallow: 'curs/*',
      },
    ],
  },
};
