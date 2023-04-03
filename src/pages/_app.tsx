import { SEO } from '@/config/next-seo.config'
import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'

import { AppProps } from 'next/app'
import { Courier_Prime } from 'next/font/google'
import { useRouter } from 'next/router'

import Navbar from '@/components/navbar'

import '@/styles/colors.scss'
import '@/styles/global.scss'
import layout from '@/styles/layout.module.scss'

const courierPrime = Courier_Prime({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const canonicalUrl = (
    `https://www.sebibasti.dev` + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]
  return (
    <main className={`${courierPrime.className} ${layout.content}`}>
      <DefaultSeo canonical={canonicalUrl} {...SEO} />
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
}
