import React from 'react'
import SvgSettingsSvg from '../assets/svgs/components/settings-svg'
import SvgLogoutSvg from '../assets/svgs/components/logout-svg'

function SidebarFooterList() {
  return (
    <ul className='sidebar-footer-list-items'>
      <li>
        <a className='footer-list-items-icon'><SvgSettingsSvg /></a>
        <a href='#'>Settings</a>
      </li>
      <li>
        <a className='footer-list-items-icon'><SvgLogoutSvg /></a>
        <a href='#'>Logout</a>
      </li>
    </ul>
  )
}

export default SidebarFooterList
