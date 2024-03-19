import React from 'react';


export function CarouselButtonLeft() {
    return (
        <div className='m-[30px] relative w-[40px] h-[50px] flex items-center justify-center hover:cursor-pointer  outline outline-orange-400 outline-[1px] bg-nmicbg'>
            <div className='w-[35px] h-[45px] flex items-center justify-center outline outline-orange-400 outline-[1px]  text-gray-50  '></div>
            <div className="absolute w-[25px] right-[-7px] h-[1px] bg-orange-400"></div>
            <div className="absolute border-t-[5px] border-r-[5px] border-b-[5px] 
 border-orange-400 border-t-transparent border-b-transparent"></div>
        </div>
    )
}

 function CarouselButtonRight() {
    return (
        <div className='m-[30px] relative w-[40px] h-[50px] flex items-center justify-center hover:cursor-pointer  outline outline-orange-400 outline-[1px] bg-nmicbg'>
            <div className='w-[35px] h-[45px] flex items-center justify-center outline outline-orange-400 outline-[1px]  text-gray-50  '></div>
            <div className="absolute w-[25px] right-[22px] h-[1px] bg-orange-400"></div>
            <div className="absolute border-t-[5px] border-l-[5px] border-b-[5px] 
 border-orange-400 border-t-transparent border-b-transparent"></div>
        </div>
    )
}

export default CarouselButtonRight