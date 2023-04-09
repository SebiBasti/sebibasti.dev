import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  title: 'sebibasti.dev',
  description:
    'Sebastian Remm - Fullstack Web-Development | Portfolio Website & Digital Playground',
  openGraph: {
    type: 'website',
    locale: 'en_us',
    url: 'https://www.sebibasti.dev/',
    title: 'sebibasti.dev',
    description:
      'Sebastian Remm - Fullstack Web-Development | Portfolio Website & Digital Playground',
    images: [
      {
        url: 'https://www.sebibasti.dev/images/meta/og_default.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'sebibasti.dev og metatag image'
      }
    ]
  }
}

export default config
