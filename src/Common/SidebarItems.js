import React from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink className='list-items-label' activeClassName='active' exact to={sidebarItem.ROUTE}>
            {sidebarItem.icon} {sidebarItem.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default SidebarItems;
