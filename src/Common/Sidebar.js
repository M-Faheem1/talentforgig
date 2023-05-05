import React from 'react'
import SidebarItems from 'Common/SidebarItems'
import SidebarFooterList from 'Common/SidebarFooterList'
import SvgTalentForGigSvg from 'assets/svgs/components/talent-for-gig-svg'

function Sidebar() {
  return (
    <div className='side-bar'>
      <div className='sidebar-icon'>
        <SvgTalentForGigSvg />
      </div>
      <div className='sidebar-items'>
        <SidebarItems />
      </div>
      <div className='sidebar-footer'>
        <SidebarFooterList />
      </div>
    </div>
  )
}

export default Sidebar
