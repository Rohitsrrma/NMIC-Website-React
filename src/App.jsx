import { useState,React } from 'react'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import NavBarPerma from './components/NavBar/NavBarPerma'
import CarouselButtonRight, { CarouselButtonLeft } from './components/ReusableComponents/CarouselButtons'
import IstCarousel from './components/IstCarousel/IstCarousel'
import NMIC from './assets/IstVideo/NMIC.mp4'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import TextMain from './components/MainVideoTextBottom/TextMain'
import BeginningOfCinema from './components/BeginningofCinema/BeginningOfCinema'
import GlassBuildingGallery from './components/GlassBuildingGallery/GlassBuildingGallery'
import HireVenueCarousal from './components/HireVenueCarousal/HireVenueCarousal'
import Footer from './components/Footer/Footer'
import FromBToT from './components/FromBottomToTop/FromBToT'




function App() {

  return (
    <div className='w-[100vw]  h-[100vh] bg-nmicbg'>
    <div className='flex  bg-nmicbg flex-col'>
    <NavBar />
    <NavBarPerma/>
    <IstCarousel/>
    <VideoPlayer url={NMIC} />
    <TextMain/>
    <BeginningOfCinema/>
    <GlassBuildingGallery/>
    <HireVenueCarousal />
    <div className="w-[100vw] mt-[200px] h-[1px] bg-orange-400"></div>
    <Footer/>
    <div className="m-6 bottom-0 fixed ">
    <FromBToT />
    </div>
    </div>
    
    

    </div>
  )
}

export default App

