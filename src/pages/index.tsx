import Image from 'next/image'

import { Projects } from '@/components'
import { profilePicture } from '~/images'

import home from '@/styles/home.module.scss'

export default function Home() {
  return (
    <main>
      <section className={home.container}>
        <div className={home['picture-container']}>
          <Image
            src={profilePicture}
            alt="Profile picture Sebastian Remm"
            className={home.picture}
            sizes={
              '(min-width: 500px) clamp(150px, calc(30vw - 2rem), 300px), calc(100vw - 8rem)'
            }
            priority
          />
        </div>
        <h1>
          Hey there! Welcome to my personal portfolio and digital playground.
        </h1>
      </section>
      <Projects />
    </main>
  )
}
