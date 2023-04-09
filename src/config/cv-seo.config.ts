import { NextSeoProps } from 'next-seo'

const cvSEO: NextSeoProps = {
  title: 'sebibasti.dev - CV',
  description:
    'Experienced coding instructor with a passion for technology and a proven ability to quickly learn new concepts. Seeking to join a dynamic team and continue professional growth as a developer. Strong problem-solving skills, effective communication, and a commitment to producing high-quality work.',
  openGraph: {
    type: 'website',
    locale: 'en_us',
    url: 'https://www.sebibasti.dev/uses',
    title: 'sebibasti.dev - CV',
    description:
      'Experienced coding instructor with a passion for technology and a proven ability to quickly learn new concepts. Seeking to join a dynamic team and continue professional growth as a developer. Strong problem-solving skills, effective communication, and a commitment to producing high-quality work.',
    images: [
      {
        url: 'https://www.sebibasti.dev/images/meta/og_cv.png',
        type: 'image/png',
        width: 1200,
        height: 630,
        alt: 'sebibasti.dev cv og metatag image'
      }
    ]
  }
}

export default cvSEO
