/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')

const { i18n } = require('./next-i18next.config')

const nextConfig = {
  poweredByHeader: false,
  /**
   * Opt-in to webpack 5 support
   * @see https://github.com/vercel/next.js/issues/21679#issuecomment-771941447
   */
  future: {
    webpack5: true,
  },
  i18n,
}

module.exports = withPlugins([], nextConfig)
