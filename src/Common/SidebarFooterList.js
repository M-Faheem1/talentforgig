import React from 'react'
import { Link } from 'react-router-dom'
import SvgSettingsSvg from '../assets/svgs/components/settings-svg'
import SvgLogoutSvg from '../assets/svgs/components/logout-svg'

function SidebarFooterList() {
  return (
    <ul className='sidebar-footer-list-items'>
      <li>
        <Link to='/settings'> <SvgSettingsSvg /> <span> Settings </span> </Link>
      </li>
      <li>
        <Link to='/logout'> <SvgLogoutSvg /> <span> Logout </span> </Link>
      </li>
    </ul>
  )
}

export default SidebarFooterList
