import Layout, {siteTitle} from '../components/layout'
import cv from '../styles/cv.module.scss'

export default function Cv() {
  return (
    <Layout cv>
      <iframe src="/documents/cv_sebastian_remm.pdf" className={cv.iframe} frameBorder="0" width="100%" height="100%"/>
    </Layout>
  )
}