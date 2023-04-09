import footerStyle from '@/styles/footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { codewars, github, linkedin } from '~/icons'

export function Footer() {
  return (
    <footer className={footerStyle.container}>
      <p>Sebastian&nbsp;Remm ©&nbsp;2021&nbsp;-&nbsp;2023</p>
      <Link
        href="https://github.com/SebiBasti"
        target="_blank"
        data-alt="github"
      >
        <Image src={github} alt="github icon" fill />
      </Link>
      <Link
        href="https://www.linkedin.com/in/sebastian-remm/"
        target="_blank"
        data-alt="linkedin"
      >
        <Image src={linkedin} alt="linkedin icon" fill />
      </Link>
      <Link
        href="https://www.codewars.com/users/SebiBasti"
        target="_blank"
        data-alt="codewars"
      >
        <Image src={codewars} alt="codewars icon" fill />
      </Link>
    </footer>
  )
}
