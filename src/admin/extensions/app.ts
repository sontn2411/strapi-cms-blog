import type { StrapiApp } from '@strapi/strapi/admin'

export default {
  config: {
    head: {
      title: 'Tên dự án của bạn',
      favicon: '/favicon.ico',
    },
  },
  bootstrap(app: StrapiApp) {
    console.log('Admin app loaded:', app)
  },
}
