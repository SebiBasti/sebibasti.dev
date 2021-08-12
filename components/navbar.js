import navbar from '../styles/navbar.module.scss'
import Link from 'next/link'
import Logo from '../components/logo'

export default function Navbar() {
  return (
    <header className={navbar.container}>
      <Logo/>
      <input type="checkbox" id="nav-toggle" className={navbar.toggle}/>
      <nav className={navbar.nav}>
        <ul>
          <li>
            <Link href="https://www.codewars.com/users/SebiBasti/">
              <a target="_blank" rel="noreferrer">codewars</a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/SebiBasti/">
              <a target="_blank" rel="noreferrer">github</a>
            </Link>
          </li>
          <li>
            <Link href="/cv">
              <a>cv</a>
            </Link>
          </li>
          <li>
            <Link href="/imprint">
              <a>imprint</a>
            </Link>
          </li>
        </ul>
        <label htmlFor="nav-toggle" className={navbar['toggle-label-arrow']}>
          <span/>
        </label>
      </nav>
      <label htmlFor="nav-toggle" className={navbar['toggle-label']}>
        <span/>
      </label>
    </header>
  )
}
