import styles from '../styles/layout.module.scss'
import { resizeWindow } from "./utils/window_resize"
import { useEffect } from "react"

export default function Layout( { children, home } ) {
  useEffect( () => {
    resizeWindow()
  } )

  return (
    <>
      <main className={ styles.content }>{ children }</main>
    </>
  )
}