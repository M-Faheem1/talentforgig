import React from 'react'
import ReportCard from './ReportCard'
import SvgPublishedAssessmentsSvg from '../../../assets/svgs/components/published-assessments-svg'
import SvgTotalCandidatesSvg from '../../../assets/svgs/components/total-candidates-svg'
import SvgAssessmentSubmittedSvg from '../../../assets/svgs/components/assessment-submitted-svg'
import SvgTimeSpentSvg from '../../../assets/svgs/components/time-spent-svg'
import Activity from './Activity'

function Reports() {
  return (
    <div className='main'>
      <div className='reports'>
        <div className='heading'>
          <h2>Reports</h2>
        </div>
          <h3>Overall</h3>
          <div>
            <div className='report-card'>
              <ReportCard
                icon={<SvgPublishedAssessmentsSvg />}
                heading="01"
                subHeading="Published Assessments"/>
                <ReportCard 
                icon={< SvgTotalCandidatesSvg />}
                heading="02"
                subHeading="Total Candidates"/>
            </div>
            <div className='report-card'>
              <ReportCard
              icon={<SvgAssessmentSubmittedSvg />}
              heading="02"
              subHeading="Assessment Submitted"/>
              <ReportCard 
              icon={<SvgTimeSpentSvg />}
              heading="02"
              subHeading="Time Spent - All Users"/>
            </div>
          </div>
          <Activity />
      </div>
    </div>
  )
}

export default Reports
