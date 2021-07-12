import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { SizeMe } from 'react-sizeme'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import cv from '../styles/cv.module.scss'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function PDFViewer( props ) {
  const [ numPages, setNumPages ] = useState( null )

  function onDocumentLoadSuccess( { numPages: nextNumPages } ) {
    setNumPages( nextNumPages )
  }

  return (
    <SizeMe
      render={ ( { size } ) => (
        <Document
          file={ props.url }
          loading= {
            <div className={ cv.container }>
              <div className={ cv.loader }/>
              <p>Loading...</p>
              <a href={ props.extLink } target="_blank" rel="noopener noreferrer">
                link to file
              </a>
            </div>
          }
          onLoadSuccess={ onDocumentLoadSuccess }
          error= {
            <div className={ cv.container }>
              <p>An error occurred!</p>
              <a href={ props.extLink } target="_blank" rel="noopener noreferrer">
                link to file
              </a>
            </div>
          }
        >
          { Array.from({ length: numPages }, (_, index) => (
            <Page
              width={ size.width ? size.width : 1 }
              key={ `page_${ index + 1 }` }
              pageNumber={ index + 1 }
              className={ cv.page }
              error= {
                <div className={ cv.container }>
                  <p>An error occurred!</p>
                  <a href={ props.extLink } target="_blank" rel="noopener noreferrer">
                    link to file
                  </a>
                </div>
              }
              renderAnnotationLayer={ true }
              renderTextLayer={ true }
            />
          ))}
          {/*<a href="https://sebibasti.github.io/" className={ cv.expand } target="_blank" rel="noopener noreferrer">*/}
          {/*  <img src="/icons/expand-arrow-svgrepo-com.svg" alt="expand pdf icon"/>*/}
          {/*</a>*/}
        </Document>
      )}
    />
  )
}

// TODO: implement fullscreen mode

// source:
// https://codesandbox.io/s/react-pdf-next-js-y4ev2?file=/components/pdf-viewer.js
// https://github.com/wojtekmaj/react-pdf/issues/129