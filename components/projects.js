import projects from '../styles/projects.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Image from 'next/image'
import { projectPictures } from '../public/images/index'

export default function Projects() {
  return (
    <>
      <h1 className={ utilStyles.header }>References:</h1>
      <section className={ utilStyles[ 'container-750' ] }>
        { projectPictures.map( ( picture, ind) => {
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={ picture.link }
              className={ projects[ 'picture-container' ] }
              key={ ind }
              data-description={ picture.description }
            >
              <Image
                src={ picture }
                alt={ picture.alt }
                className={ projects.picture }
                layout="responsive"
              />
            </a>
          )
        } ) }
      </section>
    </>
  )
}
