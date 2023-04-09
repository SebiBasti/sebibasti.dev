import { projectPictures } from '~images'

import Image from 'next/image'

import projects from '@/styles/projects.module.scss'

export function Projects() {
  return (
    <section className={projects.container}>
      <h2>References:</h2>
      {projectPictures.map((picture, ind) => {
        return (
          <a
            target={`${picture.external ? '_blank' : ''}`}
            href={picture.link}
            className={projects['picture-container']}
            key={ind}
            data-description={picture.description}
          >
            <Image
              src={picture.src}
              alt={picture.alt}
              sizes={
                '(min-width: 750px) min(calc(50vw - 4rem), calc(500px - 4rem)), calc(100vw - 6rem)'
              }
              className={projects.picture}
              priority
            />
            <p className={projects['sr-only']}>{picture.description}</p>
          </a>
        )
      })}
    </section>
  )
}
