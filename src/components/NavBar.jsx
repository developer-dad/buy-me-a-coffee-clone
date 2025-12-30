import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/logo.png'

function NavBar() {
  return (
    // <div className='bg-white h-16 flex items-center justify-center'>!! NEVBAR COMMING SOON !!</div>
    <div className='h-16 bg-white flex justify-between items-center px-2.5'>
      {/* left */}
      <div className='flex items-center gap-1.5'>
        {/* hamburger */}
        <div>
          <GiHamburgerMenu size={22}/>
        </div>
        {/* logo */}
        <div>
          <img src={logo} alt="logo" width={22}/>
        </div>
      </div>
      {/* right */}
      <div className='flex items-center gap-2'>
        {/* login */}
        <div>
          <button>
            Log in
          </button>
        </div>
        {/* start my page */}
        <div>
          <button className='bg-yellow-300 px-4 py-2 rounded-full'>
            Start my Page
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar