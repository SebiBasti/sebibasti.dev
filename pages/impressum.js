import utilStyles from '../styles/utils.module.scss'
import impressum from '../styles/impressum.module.scss'
import Layout from "../components/layout";

export default function Impressum() {
  return (
    <Layout impressum>
      <section className={ utilStyles[ 'container-500' ] }>
        <p>test</p>
      </section>
    </Layout>
  )
}