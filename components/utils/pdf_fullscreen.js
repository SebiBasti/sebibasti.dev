import cv from '../../styles/pdf.module.scss'

const pdfFullscreenToggle = () => {
  const pdf = document.getElementsByClassName('react-pdf__Document')[0]
  pdf.classList.toggle(cv.fullscreen)
}

export { pdfFullscreenToggle }