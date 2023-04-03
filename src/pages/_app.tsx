import { SEO } from '@/config/next-seo.config'
import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'

import { AppProps } from 'next/app'
import { Courier_Prime } from 'next/font/google'

import Navbar from '@/components/navbar'

import '@/styles/colors.scss'
import '@/styles/global.scss'
import layout from '@/styles/layout.module.scss'

const courierPrime = Courier_Prime({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${courierPrime.className} ${layout.content}`}>
      <DefaultSeo {...SEO} />
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </main>
  )
}
