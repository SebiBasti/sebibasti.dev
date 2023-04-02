import { StaticImageData } from 'next/image'

import profilePicture from './profile.png'
import blogApi from './project_blog_api.png'
import wandgestaltung from './project_wandgestaltung_reinl.png'

interface customImageType {
  link: string
  alt: string
  description: string
  src: StaticImageData
}

const projectWandgestaltung: customImageType = {
  link: 'https://www.wandgestaltung-reinl.de/',
  alt: 'picture Wandgestaltung Reinl',
  description: 'website build with Next.js & TypeScript',
  src: wandgestaltung
}
const projectBlogApi: customImageType = {
  link: 'https://github.com/SebiBasti/blog-api',
  alt: 'picture project blog api',
  description: 'Blog API with unit tests',
  src: blogApi
}

const projectPictures = [projectWandgestaltung, projectBlogApi]

export { profilePicture }
export { projectPictures }
