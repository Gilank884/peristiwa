/** @type {import('next').NextConfig} */
const { withTranslateRoutes } = require('next-translate-routes/plugin');

const nextConfig = {
  reactStrictMode: true,

  // Konfigurasi i18n
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
  },

  // Konfigurasi translateRoutes
  translateRoutes: {
    debug: false,
    fallbackLng: {
      default: ['en'],
    },
  },

  // Konfigurasi SASS
  sassOptions: {
    additionalData: `
      @import "styles/settings/_config.scss";
      @import "styles/settings/_config.colors.scss";
      @import "styles/settings/_config.eases.scss";
      @import "styles/settings/_config.typography.scss";
      @import "styles/tools/mixins/_button.scss";
      @import "styles/tools/mixins/_container.scss";
      @import "styles/tools/mixins/_grid.scss";
      @import "styles/tools/mixins/_form.scss";
      @import "styles/tools/mixins/_typography.scss";
      @import "styles/tools/_functions.scss";
      @import "styles/objects/_mediaq.scss";
    `,
  },
};

module.exports = withTranslateRoutes(nextConfig);
