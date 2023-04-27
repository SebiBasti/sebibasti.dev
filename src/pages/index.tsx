import Image from 'next/image'

import { profilePicture } from '~/images'

import Blog from '@/components/Blog'

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
          Hey there!
          <br />
          Welcome to my blog and digital playground.
        </h1>
      </section>
      <Blog />
    </main>
  )
}
