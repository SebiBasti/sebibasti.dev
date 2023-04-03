/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [82, 110, 140, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig
