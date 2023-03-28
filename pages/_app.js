import '../styles/global.scss'
import '../styles/colors.scss'
import Navbar from "../components/navbar"
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
