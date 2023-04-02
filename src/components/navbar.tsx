import Link from 'next/link'

import navbar from '@/styles/navbar.module.scss'

import Logo from './logo'

export default function Navbar() {
  return (
    <header className={navbar.container}>
      <Logo />
      <input type="checkbox" id="nav-toggle" className={navbar.toggle} />
      <nav className={navbar.nav}>
        <ul>
          <li>
            <Link
              href="https://www.codewars.com/users/SebiBasti/"
              target="_blank"
              rel="noreferrer"
            >
              codewars
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/SebiBasti/"
              target="_blank"
              rel="noreferrer"
            >
              github
            </Link>
          </li>
          <li>
            <Link href="/cv">cv</Link>
          </li>
          <li>
            <Link href="/imprint">imprint</Link>
          </li>
        </ul>
        <label htmlFor="nav-toggle" className={navbar['toggle-label-arrow']}>
          <span />
        </label>
      </nav>
      <label htmlFor="nav-toggle" className={navbar['toggle-label']}>
        <span />
      </label>
    </header>
  )
}
