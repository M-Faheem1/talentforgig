import React from 'react'
import SvgOpenAssessmentsSvg from '../assets/svgs/components/open-assessments-svg'
import SvgReportsSvg from '../assets/svgs/components/reports-svg'
import SvgPeopleSvg from '../assets/svgs/components/people-svg'
import SvgRateSvg from '../assets/svgs/components/rate-svg'
import SvgMyAssessmentsSvg from '../assets/svgs/components/my-assessments-svg'

function SidebarItems() {
  return (
      <ul className='sidebar-items-list'>
        <li> 
          <span><a className='sidebar-list-items-icon'><SvgMyAssessmentsSvg /></a></span>
          <span><a className='list-items' href='#'>My Assessments</a></span>
        </li>
        <li> 
          <span><a className='sidebar-list-items-icon'><SvgOpenAssessmentsSvg /></a></span>
          <span><a className='list-items' href='#'>Open Assessments</a></span>
        </li>
        <li> 
          <span><a className='sidebar-list-items-icon'><SvgReportsSvg /></a></span>
          <span><a className='list-items' href='#'>Reports</a></span>
        </li>
        <li> 
          <span><a className='sidebar-list-items-icon'><SvgPeopleSvg /></a></span>
          <span><a className='list-items' href='#'>People</a></span>
        </li>
        <li> 
          <span><a className='sidebar-list-items-icon'><SvgRateSvg /></a></span>
          <span><a className='list-items' href='#'>Rate</a></span>
        </li>
      </ul>
  )
}

export default SidebarItems
