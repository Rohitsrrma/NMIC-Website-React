import React from 'react'
import DashedLine from '../ReusableComponents/DashedLine'
import { LeftIconText, UnderlinedText } from '../BeginningofCinema/BeginningOfCinema'

function GlassBuildingGallery() {
   
    const lfgf1 = "As visitors enter the glass gallery, they are greeted by a life-size, hyper realistic statue of none other than Satyajit Ray – the filmmaking maestro, a precious jewel in the crown of Indian cinema.";
    const lfgf2 = "In this recent addition to the museum exhibits, the lower ground floor and the ground floor of the glass gallery is dedicated to the life and works of Satyajit Ray, the legendary filmmaker and a versatile artist.";
    const lfgf3 = "The visitors will get to know about Ray’s works, both cinematic and literary, through a number of exciting and interactive audio-visual contents.";


    return (
        <>
            <div className='flex-col mt-9 justify-center items-center bg-nmicbg flex '>
                <b className='text-[40px] text-gray-900 font-serif '>GLASS BUILDING GALLERIES</b>
                <DashedLine dashLengh={"106"} />
                <h1 className='text-orange-400 w-[900px] font-serif text-center text text-[26px]'>“Not to have seen the cinema of Ray means existing in the world without seeing the sun or the moon.”</h1>
                <h1 className='font-serif m-3 text-gray-600'>- Akira Kurosawa, Filmmaker</h1>
            </div>
            <div className="flex-row justify-around flex">

                <div className='flex-col gap-4 flex'>
                    <GBText/>

                  


                </div>
                <div className='flex-col  bg-nmicbg flex'>
                    <div className='flex-row flex justify-end'>
                        <img className='h-[320px]' src="src/assets/GlassBuildingGalleries/LFGF/lfgf1.webp" alt="" />
                        <img className='h-[320px]' src="src/assets/GlassBuildingGalleries/LFGF/lfgf2.webp" alt="" />
                    </div>
                    <div className="flex-col items-end  w-[60vw]  gap-4 m-3 flex">
                        <LeftIconText description={lfgf1} />
                        <LeftIconText description={lfgf2} />
                        <LeftIconText description={lfgf3} />

                    </div>
                </div>
            </div>
        </>
    )
}


const GBText = () => {
    const lfgf1title = "Lower Ground & Ground Floor";
    const lfgf1head = "Satyajit Ray: The Poet Of Cinema";
    const firstFtitle = "First Floor";
    const firstFhead = "Gandhi And Cinema";
    const sfTitle = "Second Floor";
    const sfHead = "Children's Film Studio";
    const tfTitle = "Third Floor";
    const tfHead = "Technology, Creativity, And Indian Cinema";
    const ffTitle = "Fourth Floor";
    const ffHead = "Cinema Across India";

 return (
    <>
    <div className="flex-col m-3 flex">
    <CustomTextComponent title={lfgf1title} head={lfgf1head}/>
    <div className="flex-row gap-5 flex">
    <CustomTextComponent title={firstFtitle} head={firstFhead} />
    <CustomTextComponent title={sfTitle} head={sfHead} />
    

    </div>
    <CustomTextComponent title={tfTitle} head={tfHead} />
    <CustomTextComponent title={ffTitle}  head={ffHead} />

    </div>
    </>
 )
}

const CustomTextComponent = ({title,head})=> {
    return (
        <>
        <div className="flex-col mt-5 flex">
        <h1 className='text-orange-400 text-[24px]'>{title}</h1>
        <h1 className='text-gray-800 text-[22px]'>{head}</h1>
        <div className="w-[10vw] mt-2 h-[1px] bg-orange-400"></div>

        </div>

        </>
    )
}

export default GlassBuildingGallery