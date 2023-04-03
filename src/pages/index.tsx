import { profilePicture } from '~images'

import Image from 'next/image'

import Projects from '../components/projects'
import home from '../styles/home.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Home() {
  return (
    <>
      <section className={utilStyles['container-500']}>
        <div className={home['picture-container']}>
          <Image
            src={profilePicture}
            alt="Profile picture Sebastian Remm"
            className={home.picture}
            sizes={
              '(min-width: 500px) clamp(150px, 30vw - 4rem, 300px - 4rem), calc(100vw - 8rem)'
            }
            priority
          />
        </div>
        <span className={home['top-description']}>
          Hi, my name is Sebastian and I like coding and the web. This is my
          digital play&shy;ground and the place where I show my work.
        </span>
      </section>
      <Projects />
    </>
  )
}
