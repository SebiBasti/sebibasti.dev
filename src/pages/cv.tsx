import dynamic from 'next/dynamic'

import { NextSeo } from 'next-seo'

import cvSEO from '@/config/cv-seo.config'

const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
  ssr: false
})

export default function Cv() {
  return (
    <main>
      <NextSeo {...cvSEO} />
      <PDFViewer file={'./documents/cv_sebastian_remm.pdf'} />
    </main>
  )
}
