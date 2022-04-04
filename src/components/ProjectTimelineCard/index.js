// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimeLineCard = props => {
  const {projectItem} = props
  const {
    projectTitle,
    description,
    duration,
    projectUrl,
    imageUrl,
  } = projectItem

  return (
    <div>
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="course-header">
        <h1>{projectTitle}</h1>
        <div className="clock-duration">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimeLineCard
