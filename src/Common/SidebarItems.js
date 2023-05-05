import React from 'react';
import { Link } from 'react-router-dom';
import SvgOpenAssessmentsSvg from '../assets/svgs/components/open-assessments-svg';
import SvgReportsSvg from '../assets/svgs/components/reports-svg';
import SvgPeopleSvg from '../assets/svgs/components/people-svg';
import SvgRateSvg from '../assets/svgs/components/rate-svg';
import SvgMyAssessmentsSvg from '../assets/svgs/components/my-assessments-svg';

function SidebarItems() {
  const sidebarItems = [
    {
      icon: <SvgMyAssessmentsSvg />,
      label: 'My Assessments',
      ROUTE: '/'
    },
    {
      icon: <SvgOpenAssessmentsSvg />,
      label: 'Open Assessments',
      ROUTE: '/open-assessments'
    },
    {
      icon: <SvgReportsSvg />,
      label: 'Reports',
      ROUTE: '/reports'
    },
    {
      icon: <SvgPeopleSvg />,
      label: 'People',
      ROUTE: '/people'
    },
    {
      icon: <SvgRateSvg />,
      label: 'Rate',
      ROUTE: '/rate'
    }
  ];

  return (
    <ul className='sidebar-items-list'>
      {sidebarItems.map(sidebarItem => (
        <li key={sidebarItem.label}>
          <Link className='list-items-label' to={sidebarItem.ROUTE}> {sidebarItem.icon} {sidebarItem.label} </Link>
        </li>
      ))}
    </ul>
  )
}

export default SidebarItems;
