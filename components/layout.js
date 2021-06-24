import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Navbar from './navbar'

const name = 'Sebastian'
export const siteTitle = 'Sebastian Remm - Fullstack Web Developer'


// Monkey patch for height adjustment
if (typeof document != 'undefined') {
  const heightAdjust = (document.documentElement.clientHeight - 52).toString() + 'px'
  const mainNode = document.getElementsByTagName('main')[0]
  mainNode.style.minHeight = heightAdjust;
}


export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Sebastian Remm - Fullstack Web Developer"
          content="Useful information about myself"
        />
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
      <main className={styles.content}>{children}</main>
    </>
  )
}
