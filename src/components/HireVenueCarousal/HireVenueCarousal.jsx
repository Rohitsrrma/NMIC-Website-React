import React from 'react'
import CustomButton from '../ReusableComponents/Button'
import CarouselButtonRight, { CarouselButtonLeft } from '../ReusableComponents/CarouselButtons';

function HireVenueCarousal() {
  return (
    <div className='flex-row justify-around z-10 mt-[10vh] flex'>
      <div className="flex-col items-center  justify-end flex">
        <b className='text-center font-serif text-[28px]'>HIRE <br />VENUES</b>

        <div className='mt-2 w-[111px]'>
          <CustomButton buttonTitle={"Inquire Now"} />
        </div>
      </div>
      <VenueCarousal />

    </div>
  )
}


const VenueCarousal = () => {
  return (
    <>
      <div id="controls-carousel" className="relative  w-[50vw]" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative overflow-hidden rounded-lg md:h-[400px]">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="src/assets/HireVenusCarousal/Mask-Group-29.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 2 */}
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item=""
          >
            <img
              src="src/assets/HireVenusCarousal/Audi-II-Still-1.webp"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="src/assets/HireVenusCarousal/Venue-for-hire-RR-2-min.webp"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="src/assets/HireVenusCarousal/Venue-for-hire-RR-3-min.webp"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="src/assets/HireVenusCarousal/Reception-Foyer.webp"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 6 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="src/assets/HireVenusCarousal/Venue-for-hire-Reception-Foyer-n-Audi-2-min.webp"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 7 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="src/assets/HireVenusCarousal/Venue-for-hire-JB-hall-min.webp"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 8 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="src/assets/HireVenusCarousal/Venue-for-hire-Gulshan-Mahal-Backside-min.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 9 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="src/assets/HireVenusCarousal/Venue-for-hire-Amphitheatre-min.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 10 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="src/assets/HireVenusCarousal/VenueOpenAirT.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          {/* Item 11 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="src/assets/HireVenusCarousal/Venue2.png"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* Slider controls */}

        <button
          type="button"
          className=" absolute left-0  h-20 w-16    z-10 flex items-center justify-center  cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <CarouselButtonLeft />

        </button>
        <button
          type="button"
          className="absolute right-0  h-20 w-16   z-10 flex items-center justify-center cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <CarouselButtonRight />
        </button>

      </div>


    </>
  )


}

export default HireVenueCarousal