import SEO from '@/config/next-seo.config'
import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'

import { AppProps } from 'next/app'
import { Courier_Prime } from 'next/font/google'
import Head from 'next/head'

import { Navbar, Footer } from '@/components'

import { useCanonicalUrl } from '@/utils'

import '@/styles/colors.scss'
import '@/styles/global.scss'
import layout from '@/styles/layout.module.scss'

const courierPrime = Courier_Prime({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const canonicalUrl = useCanonicalUrl('https://www.sebibasti.dev')
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${courierPrime.className} ${layout.content}`}>
        <DefaultSeo canonical={canonicalUrl} {...SEO} />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </div>
    </>
  )
}
