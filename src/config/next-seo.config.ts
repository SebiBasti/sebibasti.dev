import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  title: 'sebibasti.dev',
  description:
    'Hi, my name is Sebastian and I like coding and the web. This is my digital playground and the place where I show my work.',
  openGraph: {
    type: 'website',
    locale: 'en_us',
    url: 'https://www.sebibasti.dev/',
    title: 'sebibasti.dev',
    description:
      'Hi, my name is Sebastian and I like coding and the web. This is my digital playground and the place where I show my work.',
    images: [
      {
        url: 'https://www.sebibasti.dev/images/og_meta_image.png',
        type: 'image/png',
        width: 1200,
        height: 627,
        alt: 'sebibasti.dev og metatag image'
      }
    ]
  }
}

export default config
