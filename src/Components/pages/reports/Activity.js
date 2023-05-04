import React from 'react'
import SvgExportSvg from '../../../assets/svgs/components/export-svg'
import { DropdownButton, Dropdown, Form, FormControl } from "react-bootstrap";
import SvgReviewSvg from '../../../assets/svgs/components/review-svg';
import SvgStarSvg from '../../../assets/svgs/components/star-svg';
import SvgLikeSvg from '../../../assets/svgs/components/like-svg';

function Activity() {
  return (
    <div className='activity'>
      <div className='activity-header'>
        <h2>Activity</h2>
        <div className='heading-filters'>
          <button className='btn active export-btn'> <SvgExportSvg /> <span> Export </span> </button>
          <DropdownButton id="dropdown-basic-button" title="Last 90 Days">
            <Dropdown.Item href="#/Company-Name-1">Last 70 Days</Dropdown.Item>
            <Dropdown.Item href="#/Company-Name-2">Last 50 Days</Dropdown.Item>
            <Dropdown.Item href="#/Company-Name-3">Last 30 Days</Dropdown.Item>
          </DropdownButton>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </div>
      </div>
      <div className='activity-table'>
        <div className='table-head'>
          <div className='table-head-row'>
            <div className='table-head-col w-20 candidates-col'>Candidates</div>
            <div className='table-head-col w-20'>Assessments</div>
            <div className='table-head-col w-10'>Date</div>
            <div className='table-head-col w-10'>Duration</div>
            <div className='table-head-col w-10'>Status</div>
            <div className='table-head-col w-20'>Results</div>
            <div className='table-head-col w-10 reviews-col'>Review</div>
          </div>
          <div className='table-body'>
          <div className='table-body-row'>
            <div className='table-body-col w-20 candidates-col'> <span>1</span> Nicola Palumbo</div>
            <div className='table-body-col w-20'>Information Security Basics</div>
            <div className='table-body-col w-10'>24/09/21</div>
            <div className='table-body-col w-10'>00:22:35</div>
            <div className='table-body-col w-10 status-col'>Completed</div>
            <div className='table-body-col w-20 results-col'>7/10 <span> <SvgStarSvg /> (3) </span> <SvgLikeSvg /> (5) </div>
            <div className='table-body-col w-10 reviews-col'><SvgReviewSvg /></div>
          </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity