import utilStyles from '../styles/utils.module.scss'
import impressum from '../styles/impressum.module.scss'
import Layout from "../components/layout";

export default function Impressum() {
  return (
    <Layout impressum>
      <section className={ `${ utilStyles[ 'container' ] } ${ impressum.layout }` }>
        <h1>Impressum</h1>
        <h3>Angaben gem&auml;&szlig; §5 TMG / Information according to §5 TMG</h3>
        <p>Sebastian Remm
          <br/>
          Full Stack Web-Development
          <br/>
          Wolgaster Stra&szlig;e 11
          <br/>
          13355 Berlin
        </p>
        <h3>Kontakt / Contact</h3>
        <p>
          Telefon: &#x2b;&#x34;&#x39; &#x31;&#x37;&#x37; &#x37;&#x39;&#x36;&#x36;&#x39;&#x39;&#x37;
          <br/>
          E-Mail: <a
            href="&#x73;&#x65;&#x62;&#x61;&#x73;&#x74;&#x69;&#x61;&#x6e;&#x2e;&#x72;&#x65;&#x6d;&#x6d;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;">
            &#x73;&#x65;&#x62;&#x61;&#x73;&#x74;&#x69;&#x61;&#x6e;&#x2e;&#x72;&#x65;&#x6d;&#x6d;&#x40;&#x67;&#x6d;&#x61;&#x69;&#x6c;&#x2e;&#x63;&#x6f;&#x6d;
          </a>
        </p>
        <h3>Umsatzsteuer-ID / VAT ID</h3>
        <p>
          Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect;27a Umsatzsteuergesetz:
          <br/>
          <p className={ impressum[ 'padding-top' ] }>23/490/01258</p>
        </p>
        <h3>Redaktionell verantwortlich / Responsible for editorial</h3>
        <p>Sebastian Remm</p>
        <p className={ impressum[ 'small-font' ] }>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
      </section>
    </Layout>
  )
}