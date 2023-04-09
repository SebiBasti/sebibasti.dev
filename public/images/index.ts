import { StaticImageData } from 'next/image'

import profilePicture from './profile.png'
import gameOfLife from './project_game_of_life.png'
import wandgestaltung from './project_wandgestaltung_reinl.png'

interface customImageType {
  link: string
  alt: string
  description: string
  src: StaticImageData
  external: boolean
}

const projectWandgestaltung: customImageType = {
  link: 'https://www.wandgestaltung-reinl.de/',
  alt: 'picture Wandgestaltung Reinl',
  description: 'website\u00A0build\u00A0with Next.js\u00A0&\u00A0TypeScript',
  src: wandgestaltung,
  external: true
}
const projectGameOfLife: customImageType = {
  link: '/gameoflife',
  alt: 'picture project game of life',
  description:
    "Conway's\u00A0Game\u00A0of\u00A0Life build\u00A0with\u00A0Next.js &\u00A0Typescript",
  src: gameOfLife,
  external: false
}

const projectPictures = [projectWandgestaltung, projectGameOfLife]

export { profilePicture }
export { projectPictures }
