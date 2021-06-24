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
          Hi, my name is Sebastian and I like coding and the web. This is my digital play&shy;ground and the place where I show my work.
        </span>
      </section>
    </Layout>
  )
}
