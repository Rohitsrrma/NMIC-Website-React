import React from 'react'
import 'flowbite';
import CarouselButtonRight, { CarouselButtonLeft } from '../ReusableComponents/CarouselButtons';
import Clock from '../ReusableComponents/Clock';
import CustomButton from '../ReusableComponents/Button';

function IstCarousel() {
  const desc1 = "The National Museum of Indian Cinema, much like india's beloved films serves as a bridge connecting the past, present, and future of Indian cinema. Entertainment meets enlightenment as we dive into the fascinating history of Indian Cinema, evoking nostalgia and curiosity in our visitors."
  const desc2 = "Visit us, and embark on a wholesome exploration into the world of celluoid through our virtual exhibits and interactive features"
  const desc3 = "National Museum of Indian Cinema is a monument of information, memories, and nostalgia for cinema lovers across"
  const desc4 = "In Honor of International Women's Day, the Museum is thrilled to present a special day-long event dedicated to women's contributions in cinema with Free Guided Tours, Empowering Panel Diescussion, lunch and Special movie Screening";

  return (
    <div
    id="animation-carousel"
    className="= p-[90px]  relative z-10 w-full"
    data-carousel="static"
  >
    {/* Carousel wrapper */}

    <div className="overflow-hidden h-screen relative bg-nmicbg rounded-lg md:h-96">
      {/* Item 1 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
        <div className="flex-row justify-start flex w-full">
          <div className="flex-col">
            <h1 className='font-serif font-[900]  w-[26vw] text-gray-800 text-[38px]'>National Museum of Indian Cinema</h1>
            <p className='font-serif text-justify w-[40vw] text-[16px]'>{desc1}</p>

            <p className='font-serif mt-3 text-justify w-[40vw] text-[16px]'>{desc2}</p>
            <div className='h-[1px] mt-5 bg-slate-500'></div>
            <div className="flex-row flex mt-5 ml-3 gap-4 justify-start">
              <Clock />
              <h3 className='w-[20vw] text-balance font-serif text-gray-600'>Tuesday to Sunday: 10 AM to 6 PM closed on Mondays and Public Holidays</h3>
            </div>
          </div>
          <img
            src="src/assets/IstCarousel/Group-6950.webp"
            className="absolute right-0 h-96"
            alt="..."
          />


        </div>

      </div>
      {/* Item 2 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
        <div className="flex-row justify-start flex w-full">
          <div className="flex-col">
            <h1 className='font-serif font-[900]  w-[26vw] text-gray-800 text-[38px]'>National Museum of Indian Cinema</h1>
            <p className='font-serif text-justify w-[40vw] text-[16px]'>{desc1}</p>

            <p className='font-serif mt-3 text-justify w-[40vw] text-[16px]'>{desc2}</p>
            <div className='h-[1px] mt-5 bg-slate-500'></div>
            <div className="flex-row flex mt-5 ml-3 gap-4 justify-start">
              <Clock />
              <h3 className='w-[20vw] text-balance font-serif text-gray-600'>Tuesday to Sunday: 10 AM to 6 PM closed on Mondays and Public Holidays</h3>
            </div>
          </div>
          <img
            src="src/assets/IstCarousel/Group-6950.webp"
            className="absolute right-0 h-96"
            alt="..."
          />


        </div>

      </div>  
      {/* Item  */}

      <div
        className="hidden duration-700 ease-in-out"
        data-carousel-item=""
      >
        <div className="flex-row  justify-start flex  w-full">
          <div className="flex-col ">
            <h1 className='font-serif font-[900] w-[26vw] text-gray-800 text-[38px]'>National Museum of Indian Cinema</h1>
            <p className='font-serif text-gray-800 text-justify w-[40vw] text-[16px]'>{desc3}</p>


            <div className='h-[1px] mt-5 bg-slate-500'></div>
            <div className="flex-row flex mt-5 ml-3 gap-4 justify-start">
              <Clock />
              <h3 className='w-[20vw] text-balance font-serif text-gray-600'>Tuesday to Sunday: 10 AM to 6 PM closed on Mondays and Public Holidays</h3>
            </div>
          </div>
          <img
            src="src/assets/IstCarousel/banner.webp"
            className="absolute right-0 h-[340px]"
            alt="..."
          />


        </div>

      </div>
      {/* Item 3 */}
      <div className="hidden duration-700 ease-in-out" data-carousel-item="">
        <div className="flex-row  justify-start flex w-full">
          <div className="flex-col ">
            <h1 className='font-serif font-[900]  w-[30vw] text-gray-800 text-[35px]'>Celebrate Women in Cinema!</h1>
            <h2 className='font-serif font-medium text-[16px] text-gray-700'>Special Event at the Museum on March 11th</h2>
            <p className='font-serif text-gray-600 mt-2 text-justify w-[35vw] text-[15px]'>{desc4}</p>
            <p className='mt-2 font-serif text-[14px] w-[35vw] text-gray-700'>Mark your calenders for March 11th! join us for a full agenda starting at 11 AM</p>


            <div className='flex mt-1 p-1'>
              <CustomButton buttonTitle={"Know More"} />
            </div>


            <div className='h-[1px] mt-2 bg-slate-500'></div>
            <div className="flex-row flex mt-2 ml-3 gap-4 justify-start">
              <Clock />
              <h3 className='w-[20vw] text-balance font-serif text-gray-600'>Tuesday to Sunday: 10 AM to 6 PM closed on Mondays and Public Holidays</h3>
            </div>
          </div>
          <img
            src="src/assets/IstCarousel/Meet-our-powerhouse-panellists-for-INTERNATIONAL-WOMENS-DAY-e1710133361651.webp"
            className="absolute right-0 bottom-0 h-80"
            alt="..."
          />

        </div>

      </div>
      {/* Item 4 */}
     

    </div>
    {/* Slider controls */}



    <button
      type="button"
      className="absolute left-0  bottom-0 top-0 m-auto  h-20 w-16    z-10 flex items-center justify-center  cursor-pointer group focus:outline-none"
      data-carousel-prev=""
    >
      <CarouselButtonLeft />

    </button>
    <button
      type="button"
      className="absolute right-0  top-0 bottom-0 m-auto end-0 h-20 w-16   z-10 flex items-center justify-center cursor-pointer group focus:outline-none"
      data-carousel-next=""
    >
      <CarouselButtonRight />
    </button>

  </div>

  )
}

export default IstCarousel