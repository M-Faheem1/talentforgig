import React from 'react'
import SvgExportSvg from '../../../assets/svgs/components/export-svg'
import {Form, FormControl } from "react-bootstrap";
import DropdownMenu from '../../DropdownMenu';
import ActivityTable from '../ActivityTable';

function Activity() {
  return (
    <div className='activity'>
      <div className='activity-header'>
        <h2>Activity</h2>
        <div className='heading-filters'>
          <button className='btn export-btn btn-primary'> <SvgExportSvg /> <span> Export </span> </button>
          <DropdownMenu />
          <Form>
            <div className='search-input-field'>
              <FormControl type="text" placeholder="Search" />
            </div>
          </Form>
        </div>
      </div>
      <ActivityTable />
    </div>
  )
}

export default Activity
