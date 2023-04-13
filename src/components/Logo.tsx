import Link from 'next/link'

import logo from '@/styles/logo.module.scss'

export function Logo() {
  return (
    <span className={logo.container}>
      <Link href="/">sebibasti.dev</Link>
    </span>
  )
}
