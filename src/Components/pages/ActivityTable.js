import React from 'react'
import SvgSortSvg from '../../assets/svgs/components/sort-svg'
import SvgStarSvg from '../../assets/svgs/components/star-svg'
import SvgLikeSvg from '../../assets/svgs/components/like-svg'
import SvgReviewSvg from '../../assets/svgs/components/review-svg'

function ActivityTable() {
  return (
    <div className='activity-table'>
    <div className='table-head'>
      <div className='table-row'>
        <div className='table-cell w-20 candidates-col'>Candidates</div>
        <div className='table-cell w-20'>Assessments</div>
        <div className='table-cell w-15 date-cell'> <span>Date</span><SvgSortSvg /></div>
        <div className='table-cell w-15'>Duration</div>
        <div className='table-cell w-15 status-cell'><span>Status</span><SvgSortSvg /></div>
        <div className='table-cell w-20 results-header-cell'>Results</div>
        <div className='table-cell w-5'>Review</div>
      </div>
      <div className='table-body'>
      <div className='table-row'>
        <div className='table-cell w-20 candidates-col'> <span>1</span> Nicola Palumbo</div>
        <div className='table-cell w-20'>Information Security Basics</div>
        <div className='table-cell w-15'>24/09/21</div>
        <div className='table-cell w-15'>00:22:35</div>
        <div className='table-cell w-15 status-cell'>Completed</div>
        <div className='table-cell w-20 results-col'>7/10 <span> <SvgStarSvg /> (3) </span> <SvgLikeSvg className='like-svg'/> (5) </div>
        <div className='table-cell w-5 reviews-col'><SvgReviewSvg /></div>
      </div> 
      </div>
    </div>
  </div>
  )
}

export default ActivityTable
