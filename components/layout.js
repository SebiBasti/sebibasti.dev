import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import { resizeWindow } from "./utils/window_resize"
import { useEffect } from "react"

const name = 'Sebastian'
export const siteTitle = 'Sebastian Remm - Fullstack Web Developer'

export default function Layout( { children, home } ) {
  useEffect( () => {
    resizeWindow()
  } )

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Sebastian Remm - Fullstack Web Developer"
          content="Useful information about myself"
        />
        <script>0</script>
        <meta
          /* TODO: - implement own image */
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className={ styles.content }>{ children }</main>
    </>
  )
}