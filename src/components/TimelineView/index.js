import {Chrono} from 'react-chrono'

import CourseTimeLineCard from '../CourseTimelineCard/index'
import ProjectTimeLineCard from '../ProjectTimelineCard'

// Write your code here
const TimeLineView = props => {
  const {timelineItemsList} = props

  const courseItemsList = timelineItemsList.filter(
    each => each.categoryId === 'COURSE',
  )

  const projectItemsList = timelineItemsList.filter(
    each => each.categoryId === 'PROJECT',
  )
  console.log(projectItemsList)

  //   const courseItems = timelineItemsList.map(each => ({
  //     title: each.title,
  //   }))

  return (
    <div>
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {courseItemsList.map(each => (
          <div>
            <CourseTimeLineCard courseItem={each} key={each.id} />
          </div>
        ))}

        {projectItemsList.map(each => (
          <div>
            <ProjectTimeLineCard projectItem={each} key={each.id} />
          </div>
        ))}
      </Chrono>
    </div>
  )
}
export default TimeLineView
