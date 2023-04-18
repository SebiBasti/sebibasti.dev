import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useRef, useState } from 'react'

import { useWidth } from '@/utils'
import { NextSeo } from 'next-seo'
import page1 from '~/documents/cv_page_1.svg'
import page2 from '~/documents/cv_page_2.svg'
import { downloadIcon, expandIcon } from '~/icons'

import cvSEO from '@/config/cv-seo.config'

import cvStyles from '@/styles/cv.module.scss'

export default function Cv() {
  const mainRef = useRef<HTMLDivElement>(null)
  const width = useWidth(mainRef)
  const [buttonVisible, setButtonVisible] = useState<boolean>(false)
  const [fullscreen, setFullscreen] = useState<boolean>(false)

  useEffect(
    () => setButtonVisible((width && width < 996) || fullscreen),
    [setButtonVisible, width, fullscreen]
  )

  const expandButton = (
    <button
      onClick={() => setFullscreen(!fullscreen)}
      className={`${fullscreen ? cvStyles.rotated : ''} ${cvStyles.button}`}
    >
      <Image src={expandIcon} alt={'expand pdf icon'} />
    </button>
  )

  return (
    <main
      className={`${cvStyles.container} ${
        fullscreen ? cvStyles.fullscreen : ''
      }`}
      ref={mainRef}
    >
      <NextSeo {...cvSEO} />
      <button
        className={`${cvStyles.button} ${
          buttonVisible ? cvStyles.download : ''
        }`}
      >
        <Link href="/documents/cv_sebastian_remm.pdf" target="_blank">
          <Image src={downloadIcon} alt={'download pdf icon'} />
        </Link>
      </button>
      {buttonVisible ? expandButton : null}
      <Image src={page1} alt="cv page 1" className={cvStyles.page} priority />
      <Image src={page2} alt="cv page 2" className={cvStyles.page} />
    </main>
  )
}
