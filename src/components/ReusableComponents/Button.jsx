import React from 'react'

function CustomButton({buttonTitle}) {
  return (
    <div className='p-[3px] h-8 flex items-center justify-center hover:cursor-pointer outline outline-orange-400 outline-[1px] bg-white'>
      <div className='w-30 h-7 flex items-center justify-center text-center text-[13px] p-1 duration-500 font-thin font-serif outline outline-[1px]  text-gray-50 px-4  hover:bg-gray-50 hover:text-orange-400  bg-orange-400'>{buttonTitle}
      </div>
    </div>
  )
}

export default CustomButton