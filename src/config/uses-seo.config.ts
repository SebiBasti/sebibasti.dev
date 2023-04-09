import { NextSeoProps } from 'next-seo'

const usesSEO: NextSeoProps = {
  title: 'sebibasti.dev - Uses',
  description:
    'My current hard- and software setup - inspired by https://uses.tech',
  openGraph: {
    type: 'website',
    locale: 'en_us',
    url: 'https://www.sebibasti.dev/uses',
    title: 'sebibasti.dev - Uses',
    description:
      'My current hard- and software setup - inspired by https://uses.tech',
    images: [
      {
        url: 'https://www.sebibasti.dev/images/meta/og_uses.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'sebibasti.dev uses og metatag image'
      }
    ]
  }
}

export default usesSEO
