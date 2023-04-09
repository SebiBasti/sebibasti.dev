import Link from 'next/link'

import { phone, email } from '~/svg_coords'

import imprint from '@/styles/imprint.module.scss'

export default function Imprint() {
  return (
    <main className={imprint.layout}>
      <h1>Imprint</h1>
      <h2>
        Information according&nbsp;to §5 TMG / Angaben&nbsp;gemäß §5&nbsp;TMG
      </h2>
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
      <p>
        Tel.:
        <Link
          href={'#'}
          aria-label="phone-number"
          className={imprint['svg-container']}
          onClick={() =>
            (window.location.href =
              'tel:' + window.atob('KzQ5MTc3Nzk2Njk5Nw=='))
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="19" width="145">
            <path fill="#f5f5f5" d={phone} />
          </svg>
        </Link>
        <br />
        Email:
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
          <svg xmlns="http://www.w3.org/2000/svg" height="19" width="232">
            <path fill="#f5f5f5" d={email} />
          </svg>
        </a>
      </p>
      <h3>
        VAT ID according to&nbsp;§27a UStG / Umsatzsteuer-ID gemäß §27a UStG:
      </h3>
      <p>23/490/01258</p>
      <h3>Responsible for editorial / Redaktionell verantwortlich</h3>
      <p>Sebastian Remm</p>
      <h3>Disclaimer / Haftungsausschluss</h3>
      <p>
        Despite careful content control, I assume no liability for the content
        of external links. The content of the linked pages is the sole
        responsibility of their operators.
        <br />
        Für die Inhalte externer Links übernehme ich trotz sorgfältiger
        inhaltlicher Kontrolle keine Haftung. Für den Inhalt der verlinkten
        Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>
      <small>
        Source:&nbsp;
        <Link
          href="https://www.e-recht24.de"
          aria-label="eRecht24 link"
          target="_blank"
        >
          eRecht24
        </Link>
      </small>
    </main>
  )
}
