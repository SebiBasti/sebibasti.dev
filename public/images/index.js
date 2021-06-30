import profilePicture from './profile.jpeg'
import projectCv from './project_cv.png'
import projectJamable from './project_jamable.png'
import projectWandgestaltung from './project_wandgestaltung_reinl.png'

projectCv.link = 'https://sebibasti.github.io'
projectCv.alt = 'picture project cv'
projectCv.description = 'CV (in HTML & CSS)'
projectJamable.link = 'https://jamable.herokuapp.com'
projectJamable.alt = 'picture project jamable'
projectJamable.description = 'Jamable'
projectWandgestaltung.link = 'https://wandgestaltung-reinl.herokuapp.com'
projectWandgestaltung.alt = 'picture project wandgestaltung reinl'
projectWandgestaltung.description = 'Wandgestaltung Reinl'

const projectPictures = [ projectCv, projectJamable, projectWandgestaltung ]

export { profilePicture }
export { projectPictures }
