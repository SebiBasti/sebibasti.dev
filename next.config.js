/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [82, 110, 140, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  // https://stackoverflow.com/a/75124844/13746045
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source'
    })
    return config
  }
}

module.exports = nextConfig
