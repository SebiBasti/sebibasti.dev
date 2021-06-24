import Layout, {siteTitle} from '../components/layout'
import cv from '../styles/cv.module.scss'

export default function Cv() {
  if (typeof window !== 'undefined' && document.documentElement.clientWidth >= 880) {
    return (
      <Layout cv>
        <iframe src="https://sebibasti.github.io/" className={cv.iframe} frameBorder="0" width="100%" height="100%"/>
      </Layout>
    )
  } else {
    return (
      <Layout cv>
        <iframe src="/documents/cv_sebastian_remm.pdf" className={cv.iframe} frameBorder="0" width="100%" height="100%"/>
      </Layout>
    )
  }
}