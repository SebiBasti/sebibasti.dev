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
          {/*<li>*/}
          {/*  <Link href="/about">*/}
          {/*    <a>about me</a>*/}
          {/*  </Link>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link href="/blog">*/}
          {/*    <a>blog</a>*/}
          {/*  </Link>*/}
          {/*</li>*/}
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
