import { withNextRouter } from 'storybook-addon-next-router'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import '../src/styles/index.scss'

// @see https://www.npmjs.com/package/storybook-addon-next-router
export const decorators = [
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {}, // defaults to using addon actions integration, can override any method in the router
  }),
  (Story, Context) => {
    i18n.use(initReactI18next).init({
      lng: 'en',
      fallbackLng: 'en',

      // have a common namespace used around the full app
      ns: ['translations'],
      defaultNS: 'translations',

      // debug: true,

      interpolation: {
        escapeValue: false, // not needed for react!!
      },

      // TODO: load actual translations
      resources: { en: { translations: {} } },
    })

    return <Story />
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
