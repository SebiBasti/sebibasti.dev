import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.scss'
import Image from 'next/image'
import home from '../styles/home.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet" />
      </Head>
      <section className={home['top-container']}>
        <div className={home['picture-container']}>
          <Image
            src="/images/profile.jpg"
            alt="Profile picture Sebastian Remm"
            className={home.picture}
            width="30%"
            height="auto"
            layout="responsive"
            priority="true"
            placeholder="blur"
          />
        </div>
        <span className={home['top-description']}>

        </span>
      </section>
    </Layout>
  )
}
