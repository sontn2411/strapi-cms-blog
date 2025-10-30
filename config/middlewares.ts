export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com',
            'https://console.cloudinary.com',
            'https://res.cloudinary.com',
            'https://*',
            'http://*',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'res.cloudinary.com',
            'https://console.cloudinary.com',
            'https://res.cloudinary.com',
            'https://*',
            'http://*',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::logger',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  {
    name: 'strapi::favicon',
    config: {
      path: './public/uploads/favicon.ico',
    },
  },
  // 'strapi::public',
  {
    name: 'strapi::public',
    config: {
      path: './public',
    },
  },
]
