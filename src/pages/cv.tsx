import dynamic from 'next/dynamic'
import Head from 'next/head'

const PDFViewer = dynamic(() => import('@/components/pdfViewer'), {
  ssr: false
})

export default function Cv() {
  return <PDFViewer file={'./documents/cv_sebastian_remm.pdf'} />
}
