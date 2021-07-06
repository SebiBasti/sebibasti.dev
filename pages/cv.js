import Layout from '../components/layout'
import cv from '../styles/cv.module.scss'

export default function Cv( { timestamp } ) {
  return (
    <Layout cv>
      <iframe
        src={ `https://drive.google.com/viewerng/viewer?embedded=true&url=sebibasti-dev.vercel.app/documents/cv_sebastian_remm.pdf?${ timestamp }` }
        className={ cv.iframe }
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Layout>
  )
}

export function getStaticProps() {
  const timestamp = 'timestamp=' + Date.now()
  return {
    props: {
      timestamp
    }
  }
}