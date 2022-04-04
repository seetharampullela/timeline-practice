// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {courseItem} = props
  const {courseTitle, duration, description, tagsList} = courseItem

  return (
    <div>
      <div className="course-header">
        <h1>{courseTitle}</h1>
        <div className="clock-duration">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="tags">
        {tagsList.map(each => (
          <p className="tags-para">{each.name}</p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimeLineCard
