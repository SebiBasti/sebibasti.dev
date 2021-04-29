import navbar from '../styles/navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className={navbar.container}>
      <h1 className={navbar.logo}>Logo</h1>
      <input type="checkbox" id="nav-toggle" className={navbar.toggle}/>
      <nav className={navbar.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>about me</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>blog</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className={navbar['toggle-label']}>
        <span/>
      </label>
    </header>
  )
}