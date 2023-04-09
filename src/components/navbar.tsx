import Link from 'next/link'

import navbar from '@/styles/navbar.module.scss'

import { Logo } from '@/components'

export function Navbar() {
  return (
    <header className={navbar.container}>
      <Logo />
      <input
        type="checkbox"
        id="nav-toggle"
        className={navbar.toggle}
        aria-label="open navigation"
      />
      <nav className={navbar.nav}>
        <ul>
          <li>
            <Link href="/gameoflife">game&nbsp;of&nbsp;life</Link>
          </li>
          <li>
            <Link href="/uses">uses</Link>
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
