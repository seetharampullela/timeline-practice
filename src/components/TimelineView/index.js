import {Chrono} from 'react-chrono'

import CourseTimeLineCard from '../CourseTimelineCard/index'
import ProjectTimeLineCard from '../ProjectTimelineCard'

// Write your code here
const TimeLineView = props => {
  const {timelineItemsList} = props

  //   const courseItemsList = timelineItemsList.filter(
  //     each => each.categoryId === 'COURSE',
  //   )

  //   const projectItemsList = timelineItemsList.filter(
  //     each => each.categoryId === 'PROJECT',
  //   )
  //   console.log(projectItemsList)

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimeLineCard key={item.id} projectItem={item} />
    }
    return <CourseTimeLineCard key={item.id} courseItem={item} />
  }

  return (
    <div>
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
      </Chrono>
    </div>
  )
}
export default TimeLineView
