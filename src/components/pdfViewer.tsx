import { DocumentProps } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import { expandIcon } from '~/icons'

import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'

import { useWidth } from '@/utils'

import pdf from '@/styles/pdf.module.scss'

export default function PDFViewer(props: DocumentProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  const width = useWidth(mainRef) // source 1
  const [buttonVisible, setButtonVisible] = useState<boolean>(false)
  const [fullscreen, setFullscreen] = useState<boolean>(false)

  function onDocumentLoadSuccess({
    numPages: nextNumPages
  }: {
    numPages: number
  }) {
    setNumPages(nextNumPages)
  }

  useEffect(
    () => setButtonVisible((width && width < 996) || fullscreen),
    [setButtonVisible, width, fullscreen]
  )

  const expandButton = (
    <button
      onClick={() => setFullscreen(!fullscreen)}
      className={fullscreen ? pdf.rotated : ''}
    >
      <Image src={expandIcon} alt={'expand pdf icon'} />
    </button>
  )

  return (
    <Document
      inputRef={mainRef}
      file={props.file}
      className={`${pdf.document} ` + `${fullscreen ? pdf.fullscreen : ''}`}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={
        <div className={pdf.container}>
          <div className={pdf.loader} />
          <p>Loading...</p>
          <a href={props.file} target="_blank" rel="noopener noreferrer">
            link to file
          </a>
        </div>
      }
      error={
        <div className={pdf.container}>
          <p>An error occurred!</p>
          <a href={props.file} target="_blank" rel="noopener noreferrer">
            link to file
          </a>
        </div>
      }
    >
      {buttonVisible ? expandButton : null}
      {Array.from(new Array(numPages), (el, index) => (
        <Page
          renderMode={'svg'}
          width={width}
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          className={pdf.page}
          error={
            <div className={pdf.container}>
              <p>An error occurred!</p>
              <a href={props.file} target="_blank" rel="noopener noreferrer">
                link to file
              </a>
            </div>
          }
          renderAnnotationLayer={true}
          renderTextLayer={true}
        />
      ))}
    </Document>
  )
}

// source 1: https://github.com/wojtekmaj/react-pdf/issues/129
