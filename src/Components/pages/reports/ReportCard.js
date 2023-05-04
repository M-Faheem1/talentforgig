import React from 'react'

function ReportCard({ icon, heading, subHeading }) {
  return (
    <div className='card'>
      <div className="card-heading">
        <div className="card-icon">{icon}</div>
        <h4>{heading}</h4>
      </div>
      <p className="card-subheading">{subHeading}</p>
    </div>
  )
}

export default ReportCard
