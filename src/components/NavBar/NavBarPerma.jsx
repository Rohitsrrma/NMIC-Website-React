import {React } from 'react'
import { NavEnd, NavOptions, NavPrefix } from './NavBar'

function NavBarPerma() {
  const handleScroll = ()=>{

  }


  return (
    <div className='flex-row flex   justify-between items-center p-4    h-28 w-[100vw] bg-nmicbg'>
       <NavPrefix/>
       <NavOptions/>
       <NavEnd/>
    </div>
  )
}

export default NavBarPerma