import Layout from '../components/layout'
import dynamic from "next/dynamic"

const PDFViewer = dynamic(() => import("../components/pdf_viewer"), {
  ssr: false
});

export default function Cv() {
  return (
    <Layout cv>
      <PDFViewer url={ './documents/cv_sebastian_remm.pdf' } extLink={ 'https://sebibasti.github.io/' }/>
    </Layout>
  );
}
