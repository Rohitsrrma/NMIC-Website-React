import React from 'react'

function Clock() {
  return (
    <div className=' relative w-[45px] rounded-full h-[45px] flex items-center justify-center hover:cursor-pointer  outline outline-orange-400 outline-[1px] bg-nmicbg'>
            <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center outline outline-orange-400 outline-[1px]  text-gray-50  '></div>
            <div className="absolute w-[1px] right-[21.5px] bottom-[20px] h-[18px] bg-orange-400"></div>
            <div className="absolute w-[1px] right-[16px] rotate-90 top-[18px] h-[13px] bg-orange-400"></div>
            <div className="absolute rounded-2xl w-[5px] right-[19.5px] top-[22px] h-[5px] bg-orange-400"></div>
        </div>
  )
}

export default Clock