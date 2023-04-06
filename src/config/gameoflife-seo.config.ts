import config from '@/config/next-seo.config'
import { NextSeoProps } from 'next-seo'

const gameOfLifeSEO: NextSeoProps = {
  title: 'sebibasti.dev - Game of Life',
  description: 'A Game of Life implementation in React & Typescript',
  openGraph: {
    type: 'website',
    locale: 'en_us',
    url: 'https://www.sebibasti.dev/gameoflife',
    title: 'sebibasti.dev - Game of Life',
    description: 'A Game of Life implementation in React & Typescript',
    images: [
      {
        url: 'https://www.sebibasti.dev/images/og_gemoflife_image.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'sebibasti.dev game of life og metatag image'
      }
    ]
  }
}

export default gameOfLifeSEO
