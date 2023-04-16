import { AppProps } from 'next/app'

import { Layout } from '@/components'
import { useCanonicalUrl } from '@/utils'
import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'

import SEO from '@/config/next-seo.config'

import '@/styles/colors.scss'
import '@/styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  const canonicalUrl = useCanonicalUrl('https://www.sebibasti.dev')
  return (
    <Layout>
      <DefaultSeo canonical={canonicalUrl} {...SEO} />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}
