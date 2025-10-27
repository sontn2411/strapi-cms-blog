import type { StrapiApp } from '@strapi/strapi/admin'
import logo from './extensions/logo.svg'
import favicon from './extensions/favicon.ico'

export default {
  config: {
    auth: {
      logo: logo,
    },
    menu: {
      logo: favicon,
    },
    head: {
      favicon: favicon,
    },
    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to SweetSoft',
        'Auth.form.welcome.subtitle': 'Log in to your SweetSoft account',
        'Auth.form.email.placeholder': 'e.g, son.tran@sweetsoft.vn',
      },
    },

    theme: {
      light: {
        colors: {
          primary100: '#f6ecfc',
          primary200: '#e0c1f4',
          primary500: '#452189', //mau chinh
          buttonPrimary500: '#7b79ff', // Màu nền chính của button
          buttonNeutral0: '#ffffff', // Màu chữ hoặc nền phụ của button
          primary600: '#452189',
          primary700: '#8312d1',
          danger700: '#b72b1a',
        },
      },
      dark: {},
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app)
  },
}
