import React from 'react'
import SvgExportSvg from '../../../assets/svgs/components/export-svg'
import {Form, FormControl } from "react-bootstrap";
import SvgReviewSvg from '../../../assets/svgs/components/review-svg';
import SvgStarSvg from '../../../assets/svgs/components/star-svg';
import SvgLikeSvg from '../../../assets/svgs/components/like-svg';
import DropdownMenu from '../../DropdownMenu';

function Activity() {
  return (
    <div className='activity'>
      <div className='activity-header'>
        <h2>Activity</h2>
        <div className='heading-filters'>
          <button className='btn export-btn btn-primary'> <SvgExportSvg /> <span> Export </span> </button>
          <DropdownMenu />
          <Form>
            <FormControl type="text" placeholder="Search" />
          </Form>
        </div>
      </div>
      <div className='activity-table'>
        <div className='table-head'>
          <div className='table-row'>
            <div className='table-cell w-20 candidates-col'>Candidates</div>
            <div className='table-cell w-20'>Assessments</div>
            <div className='table-cell w-10'>Date</div>
            <div className='table-cell w-10'>Duration</div>
            <div className='table-cell w-10'>Status</div>
            <div className='table-cell w-20'>Results</div>
            <div className='table-cell w-10 reviews-col'>Review</div>
          </div>
          <div className='table-body'>
          <div className='table-row'>
            <div className='table-cell w-20 candidates-col'> <span>1</span> Nicola Palumbo</div>
            <div className='table-cell w-20'>Information Security Basics</div>
            <div className='table-cell w-10'>24/09/21</div>
            <div className='table-cell w-10'>00:22:35</div>
            <div className='table-cell w-10 status-col'>Completed</div>
            <div className='table-cell w-20 results-col'>7/10 <span> <SvgStarSvg /> (3) </span> <SvgLikeSvg className='like-svg'/> (5) </div>
            <div className='table-cell w-10 reviews-col'><SvgReviewSvg /></div>
          </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
