import React from 'react'
import { Check } from 'lucide-react'

function BeginningOfCinema() {
  const desc1 = "From traditional visual storytelling to optical devices, from the Lumiere brothers to H S Bhatavdekar, from open grounds to the most iconic cinema theatres of the yesteryears this gallery shows the beautiful heralding of one of the most complete forms of art & entertainment."
  const desc2 = "Here, the visitors can peep into the past through vintage optical devices";
  const desc3 = "They can meet the Lumière brothers before embarking on the journey to meet the father of Indian Cinema."
  return (
    <>
      <div className="flex-row bg-nmicbg flex">
        {/* One Row and Two Columns */}
        <div className='flex-col mt-6  bg-nmicbg flex'>
          <div className='flex-row flex justify-start '>
            <img className='h-[320px]' src="src/assets/AtNationalMuseum/1.webp" alt="" />
            <img className='h-[320px]' src="src/assets/AtNationalMuseum/2.webp" alt="" />
          </div>
          <div className="flex-col mt-5 gap-4 m-3 flex">
            <LeftIconText description={desc1} />
            <LeftIconText description={desc2} />
            <LeftIconText description={desc3} />

          </div>
        </div>
        {/* Beginning of Cinema Column */}
       
      
        <div className='flex-col gap-4 flex'>

        <UnderlinedText paragraph={"Beginning of Cinema"}/>
        <UnderlinedText paragraph={"Silent Era"}/>
        <UnderlinedText paragraph={"Advent of Sound"}/>
        <UnderlinedText paragraph={"Regional Cinema"}/>
        <UnderlinedText paragraph={"The New Wave Indian Cinema Era"}/>
        <UnderlinedText paragraph={"Timeline of Indian Cinema"}/>
        <UnderlinedText paragraph={"Studio Era"}/>
        <UnderlinedText paragraph={"Film & Social Turbulence"}/>
        <UnderlinedText paragraph={"Creative Resonance"}/>
        

        </div>
      </div>
    </>
  )
}

export const UnderlinedText = ({paragraph}) => {
  return (
    <>
    <div className="flex-col flex justify-start pr-[20px] items-end gap-2  w-[500px] ">
      <h1 className='text-orange-400 text-[22px] font-serif' >{paragraph}</h1>
      <div className="w-[95px] h-[2px] bg-orange-400"></div>

    </div>


    </>
  )
}


export function LeftIconText  ({description})  {
  return (
    <>
      <div className="flex-col flex">

        <div className="flex-row flex gap-4">
          <div className=" w-[35px] h-[35px] bg-orange-400 justify-center text-gray-100 p-1 flex rounded-full">
            <Check />
          </div>
          <p>{description}</p>
        </div>
      

        
      </div>

    </>
  )
}

export default BeginningOfCinema