import Link from 'next/link'
import logo from '../styles/logo.module.scss'

export default function Logo() {
  return (
    <div className={logo.container}>
      <Link href="/">
        <a>SebiBasti.dev</a>
      </Link>
    </div>
  )
}