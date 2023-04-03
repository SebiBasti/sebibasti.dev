import dynamic from 'next/dynamic'

const PDFViewer = dynamic(() => import('@/components/pdfViewer'), {
  ssr: false
})

export default function Cv() {
  return <PDFViewer file={'./documents/cv_sebastian_remm.pdf'} />
}
