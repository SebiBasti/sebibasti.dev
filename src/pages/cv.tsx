import dynamic from 'next/dynamic'
import Head from 'next/head'

const PDFViewer = dynamic(() => import('@/components/pdfViewer'), {
  ssr: false
})

export default function Cv() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.sebibasti.dev" />
      </Head>
      <PDFViewer file={'./documents/cv_sebastian_remm.pdf'} />
    </>
  )
}
