import React from 'react'
import './Navbar.css'
import menu_icon from "../../src/assets/menu.png"
import logo from '../../src/assets/logo.png'
import search_icon from '../../src/assets/search.png'
import upload_icon from '../../src/assets/upload.png'
import more_icon from '../../src/assets/more.png'
import notification_icon from '../../src/assets/notification.png'
import profile_icon from '../../src/assets/jack.png'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <div className='search-box flex-div'>
        <img  src={logo} alt="" />
        <input  type="text"  placeholder='Search'/>
        
        </div>
        {/* <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" /> */}
        <img className='logo'  src={search_icon} alt="" />


      </div>

      {/* <div className='nav-middle flex-div'>


      </div> */}

      <div className='nav-right flex-div'>
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='user_icon' alt="" />

      </div>
    </nav>
  )
}

export default Navbar
