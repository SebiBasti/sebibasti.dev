import Layout, {siteTitle} from '../components/layout'
import cv from '../styles/cv.module.scss'

export default function Cv() {
  if (navigator.userAgent.includes('AppleWebKit')) {
    return (
      <Layout cv>
        <iframe src="https://drive.google.com/viewerng/viewer?embedded=true&url=sebibasti-dev.vercel.app/documents/cv_sebastian_remm.pdf" className={cv.iframe} frameBorder="0" width="100%" height="100%"/>
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