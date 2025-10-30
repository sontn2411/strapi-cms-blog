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
      title: 'Tên dự án của bạn',
    },
    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to SweetSoft',
        'Auth.form.welcome.subtitle': 'Log in to your SweetSoft account',
        'Auth.form.email.placeholder': 'e.g, son.tran@sweetsoft.vn',

        // 'HomePage.head.title': '',
      },
    },

    theme: {
      light: {
        colors: {
          primary100: '#f6ecfc',
          primary200: '#e0c1f4',
          primary500: '#452189', //mau chinh
          buttonPrimary500: '#452189', // Màu nền chính của button
          buttonNeutral0: '#ffffff', // Màu chữ hoặc nền phụ của button
          primary600: '#452189',
          primary700: '#8312d1',
          danger700: '#b72b1a',
          buttonPrimary600: '#452189',
        },
      },
      dark: {
        colors: {
          primary100: '#f6ecfc',
          primary200: '#e0c1f4',
          primary500: '#452189', //mau chinh
          buttonPrimary500: '#452189', // Màu nền chính của button
          buttonNeutral0: '#ffffff', // Màu chữ hoặc nền phụ của button
          primary600: '#452189',
          primary700: '#8312d1',
          danger700: '#b72b1a',
          buttonPrimary600: '#452189',
        },
      },
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
    app
      .getPlugin('content-manager')
      .injectComponent('editView', 'right-links', {
        name: 'MyCustomButton',
        Component: () => (
          <button onClick={() => alert('Clicked!')}>My Button</button>
        ),
      })
  },
}
