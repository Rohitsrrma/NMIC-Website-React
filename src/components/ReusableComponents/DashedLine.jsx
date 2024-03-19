import React from 'react'


function DashedLine({dashLengh}) {
  const dashes = Array.from({ length: dashLengh }, (_, index) => (
    <div key={index} className='bg-orange-400 w-1 h-[2px]' />
  ));

  return (
    <div className='flex-row gap-[2px] mt-2 flex items-center'>
      <div className="border-t-[5px] border-r-[5px] border-b-[5px] border-orange-400 border-t-transparent border-b-transparent" />
      {dashes}
      <div className="border-t-[5px] border-l-[5px] border-b-[5px] border-orange-400 border-t-transparent border-b-transparent" />
    </div>
  );
}


export default DashedLine