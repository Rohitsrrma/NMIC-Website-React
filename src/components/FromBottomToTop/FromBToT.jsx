import { React, useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

function FromBToT() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > 500) {
                // setShowNavbar(true);

                setIsVisible(true); // Show navbar
            } else {
                setIsVisible(false); // Hide navbar
            }
        };

        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up by removing the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])

    const handleOnClick = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    let element;
    if (isVisible) {
         element = <div onClick={handleOnClick} className=' w-[40px] h-[40px] hover:cursor-pointer z-40 flex items-center justify-center  bg-orange-400'>
            <div className='w-[32px] items-center flex text-white justify-center outline outline-white bg-orange-400  h-[32px] ' >
                <ArrowUp />
            </div>
        </div>
    } else {
        element = <div></div>
    }


    return (
        <>
            {element}
        </>
    )
}

export default FromBToT