import React from 'react'
import { Link } from 'react-router-dom'
import SvgSettingsSvg from '../assets/svgs/components/settings-svg'
import SvgLogoutSvg from '../assets/svgs/components/logout-svg'
import { ROUTES } from '../routes'

function SidebarFooterList() {
  return (
    <ul className='sidebar-footer-list-items'>
      <li>
        <Link to={ROUTES.SETTINGS}> <SvgSettingsSvg /> <span> Settings </span> </Link>
      </li>
      <li>
        <Link to={ROUTES.LOGOUT}> <SvgLogoutSvg /> <span> Logout </span> </Link>
      </li>
    </ul>
  )
}

export default SidebarFooterList
