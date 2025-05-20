module.exports = {
    i18n: {
        locales: ['default', 'en', 'de', 'fr', 'it', 'es'],
        defaultLocale: 'default',
        localeDetection: false,
      },
      trailingSlash: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
    compiler: {
        styledComponents: true
    }
}
