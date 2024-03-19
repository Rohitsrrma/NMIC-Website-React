import {React, useEffect, useState} from 'react'
import CustomButton from '../ReusableComponents/Button'

function NavBar({props}) {

    const [top, setTop] = useState(-450);
  

    useEffect(() => {
      // Function to handle scroll events
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos > 100) {
          // setShowNavbar(true);
  
          setTop(0); // Show navbar
        } else {
          setTop(-400); // Hide navbar
        }
      };
  
      // Add scroll event listener when the component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Clean up by removing the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    const navbarStyle = {
        
        
        top: `${top}px`,
        width: '100%',
        
      };

    return (
    <div style={navbarStyle} className='flex-row z-30  flex  fixed justify-between items-center p-4  elevation-4  h-28 w-[100vw] bg-gray-50'>
    <NavPrefix/>
    <NavOptions/>
    <NavEnd/>
    </div>
  )
}

export function NavPrefix() {
return (    
    <img className='h-16' src="src/assets/NavBar/NFDC-NMIC.png" alt="" />
)
}

export function NavOptions () {
    return (
        <div className="flex-row gap-5 flex">
            <div className="flex-col flex  items-center">
            <a className='text-orange-400 font-serif' href='http://localhost:5173/'>Home</a>
            <div className='bg-orange-400 w-2 h-2 rounded-3xl'></div>
            </div>
            <div className="flex-col flex  items-center">
            <a className='text-orange-400 font-serif' href='http://localhost:5173/'>About Us</a>
            <div className='bg-orange-400 w-2 h-2 rounded-3xl hidden'></div>
            </div>
            <div className="flex-col flex  items-center">
            <a className='text-orange-400 font-serif' href='http://localhost:5173/'>Exhibits</a>
            <div className='bg-orange-400 w-2 h-2 rounded-3xl hidden'></div>
            </div>
            <div className="flex-col flex  items-center">
            <a className='text-orange-400 font-serif' href='http://localhost:5173/'>Facilities</a>
            <div className='bg-orange-400 w-2 h-2 rounded-3xl hidden'></div>
            </div>
            <div className="flex-col flex  items-center">
            <a className='text-orange-400 font-serif' href='http://localhost:5173/'>Media</a>
            <div className='bg-orange-400 w-2 h-2 rounded-3xl hidden'></div>
            </div>
            <div className="flex-col flex  items-center">
            <a className='text-orange-400 font-serif' href='http://localhost:5173/'>Photo Gallery</a>
            <div className='bg-orange-400 w-2 h-2 rounded-3xl hidden'></div>
            </div>
            <div className="flex-col flex  items-center">
            <a className='text-orange-400 font-serif' href='http://localhost:5173/'>Events</a>
            <div className='bg-orange-400 w-2 h-2 rounded-3xl hidden'></div>
            </div>
        </div>
    )
}

export function NavEnd() {
    return (
        <>
        <div className="flex-row gap-2 items-center flex">
        <CustomButton buttonTitle={"Contact Us"}/>
        <CustomButton buttonTitle={"Book Tickets"}/>
        <img className='scale-75' src="src/assets/NavBar/ministryinfobroad.svg" alt="" />
        </div>
        </>
    )
}



export default NavBar
