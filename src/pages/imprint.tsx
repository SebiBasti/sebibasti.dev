import Link from 'next/link'

import { svgCoords } from '~images/svg_coords'

import imprint from '../styles/imprint.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Imprint() {
  return (
    <section className={`${utilStyles['container']} ${imprint.layout}`}>
      <h1>Imprint</h1>
      <h2>Information according to §5 TMG / Angaben gemäß §5 TMG</h2>
      <p>
        Sebastian Remm
        <br />
        Full Stack Web-Development
        <br />
        Wolgaster Straße 11
        <br />
        13355 Berlin
      </p>
      <h3>Contact / Kontakt</h3>
      <div className={imprint['phone-email-container']}>
        <p>Tel.:</p>
        <Link
          href={'#'}
          aria-label="phone-number"
          className={imprint['svg-container']}
          onClick={() =>
            (window.location.href =
              'tel:' + window.atob('KzQ5MTc3Nzk2Njk5Nw=='))
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 18">
            <path fill="#f5f5f5" d={svgCoords['phoneNumber']} />
          </svg>
        </Link>
      </div>
      <div className={imprint['phone-email-container']}>
        <p>Email:</p>
        <a
          href={'#'}
          aria-label="email"
          className={imprint['svg-container']}
          onClick={() =>
            (window.location.href =
              'mailto:' +
              window.atob(
                'c2ViYXN0aWFuLnJlbW0rc2ViaWJhc3RpZGV2QGdtYWlsLmNvbQ=='
              ))
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 18">
            <path fill="#f5f5f5" d={svgCoords['email']} />
          </svg>
        </a>
      </div>
      <h3>VAT ID according to §27a UStG / Umsatzsteuer-ID gemäß §27a UStG:</h3>
      <p>23/490/01258</p>
      <h3>Responsible for editorial / Redaktionell verantwortlich</h3>
      <p>Sebastian Remm</p>
      <p className={imprint['small-font']}>
        Source:
        <a href="https://www.e-recht24.de">eRecht24</a>
      </p>
    </section>
  )
}

// TODO: legal notice for links and content
