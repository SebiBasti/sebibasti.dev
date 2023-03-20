import utilStyles from '../styles/utils.module.scss'
import imprint from '../styles/imprint.module.scss'
import Layout from "../components/layout"
import { svgCoords } from "../public/images/svg_coords"
import { useEffect } from "react"
import { injectPhoneMailTo } from "../components/utils/phone_email_hide"

export default function Imprint() {
  useEffect( () => {
    injectPhoneMailTo()
  })
  return (
    <Layout imprint>
      <section className={ `${ utilStyles[ 'container' ] } ${ imprint.layout }` }>
        <h1>Imprint</h1>
        <h3>Information according to §5 TMG / Angaben gemäß §5 TMG</h3>
        <p>Sebastian Remm
          <br/>
          Full Stack Web-Development
          <br/>
          Wolgaster Straße 11
          <br/>
          13355 Berlin
        </p>
        <h3>Contact / Kontakt</h3>
        <div className={ imprint[ 'phone-email-container' ] }>
          <p>Tel.:</p>
          <a
            href="#"
            id="phone"
            data-phone="KzQ5MTc3Nzk2Njk5Nw=="
            className={ imprint[ 'svg-container' ] }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 18">
              <path fill="#f5f5f5" d={ svgCoords[ 'phoneNumber' ] }/>
            </svg>
          </a>
        </div>
        <div className={ imprint[ 'phone-email-container' ] }>
          <p>Email:</p>
          <a
            href="#"
            id="email"
            data-email="c2ViYXN0aWFuLnJlbW0rc2ViaWJhc3RpZGV2QGdtYWlsLmNvbQ=="
            className={ imprint[ 'svg-container' ] }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 18">
              <path fill="#f5f5f5" d={ svgCoords[ 'email' ] }/>
            </svg>
          </a>
        </div>
        <h3>VAT ID according to §27a UStG / Umsatzsteuer-ID gemäß §27a UStG:</h3>
        <p>23/490/01258</p>
        <h3>Responsible for editorial / Redaktionell verantwortlich</h3>
        <p>Sebastian Remm</p>
        <p className={ imprint[ 'small-font' ] }>Source:
          <a href="https://www.e-recht24.de">eRecht24</a>
        </p>
      </section>
    </Layout>
  )
}

// TODO: legal notice for links and content