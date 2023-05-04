import React from 'react';
import { Link } from 'react-router-dom';
import SvgOpenAssessmentsSvg from '../assets/svgs/components/open-assessments-svg';
import SvgReportsSvg from '../assets/svgs/components/reports-svg';
import SvgPeopleSvg from '../assets/svgs/components/people-svg';
import SvgRateSvg from '../assets/svgs/components/rate-svg';
import SvgMyAssessmentsSvg from '../assets/svgs/components/my-assessments-svg';

function SidebarItems() {
  const items = [
    {
      icon: <SvgMyAssessmentsSvg />,
      label: 'My Assessments',
      link: '/'
    },
    {
      icon: <SvgOpenAssessmentsSvg />,
      label: 'Open Assessments',
      link: '/open-assessments'
    },
    {
      icon: <SvgReportsSvg />,
      label: 'Reports',
      link: '/reports'
    },
    {
      icon: <SvgPeopleSvg />,
      label: 'People',
      link: '/people'
    },
    {
      icon: <SvgRateSvg />,
      label: 'Rate',
      link: '/rate'
    }
  ];

  return (
    <ul className='sidebar-items-list'>
      {items.map(item => (
        <div className='list-item'>
        <li key={item.label}>
          <span>
            <Link className='list-items-icon' to={item.link}> {item.icon} </Link>
          </span>
        </li>
        <li key={item.label}>
          <span>
            <Link className='list-items-label' to={item.link}> {item.label} </Link>
          </span>
        </li>
        </div>
      ))}
    </ul>
  )
}

export default SidebarItems;
