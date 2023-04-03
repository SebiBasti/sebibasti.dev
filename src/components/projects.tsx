import { projectPictures } from '~images'

import Image from 'next/image'

import projects from '../styles/projects.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Projects() {
  return (
    <>
      <h1 className={utilStyles.header}>References:</h1>
      <section className={utilStyles['container-750']}>
        {projectPictures.map((picture, ind) => {
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={picture.link}
              className={projects['picture-container']}
              key={ind}
              data-description={picture.description}
            >
              <Image
                src={picture.src}
                alt={picture.alt}
                sizes={
                  '(min-width: 750px) min(calc(50vw - 5rem), calc(500px - 5rem)), calc(100vw - 8rem)'
                }
                className={projects.picture}
              />
              <p className={utilStyles['sr-only']}>{picture.description}</p>
            </a>
          )
        })}
      </section>
    </>
  )
}
