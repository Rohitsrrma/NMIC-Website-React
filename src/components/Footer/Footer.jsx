import React from 'react'
import {Instagram, FacebookIcon, Twitter, Mail, MapPin} from 'lucide-react'

function Footer() {
    return (
        
        <div className='mb-[50px] mt-[50px]'>
            
            <div className="flex-row justify-around flex">
                <div className="flex-col flex">
                    <img className='h-[70px]' src="src/assets/Footer/logo.svg" alt="" />
                    <img className='h-[70px] mt-5' src="src/assets/Footer/NFDC.svg" alt="" />
                </div>
                <div className="flex-col col">
                    <b className='text-[24px] font-serif'>Quick Links</b>
                  <div className="flex-row mt-4 gap-28 items-center flex">
                  <div className="flex-col gap-2 flex">
                        <a className='font-serif text-gray-700'  href="">About Us</a>
                        <a className='font-serif text-gray-700' href="">Exhibits</a>
                        <a className='font-serif text-gray-700' href="">Facilities</a>
                    </div>
                    <div className="flex-col gap-2 flex">
                        <a className='font-serif text-gray-700' href="">Media</a>
                        <a className='font-serif text-gray-700' href="">Photo Gallery</a>
                        <a className='font-serif text-gray-700' href="">Merchandise</a>
                    </div>
                  </div>
                </div> 
                <div className="flex-col flex">
                    <b className='text-[24px] font-serif' >Social Media</b>
                    <div className="flex-row gap-3 mt-3 flex">
                    <Instagram className='hover:cursor-pointer' />
                    <FacebookIcon className='hover:cursor-pointer' />
                    <Twitter className='hover:cursor-pointer' />
                    </div>


                </div>
                <div className="flex-col gap-2 flex">
                    <b className='text-[24px] font-serif'>Contact Us</b>
                    <div className="flex-row gap-2 flex">
                        <Mail />
                        <p>nmicmumbai@nfdcindia</p>

                    </div>
                    <div className="flex-row gap-2 flex">
                        <MapPin />
                        <p>24, Dr. G.Deshmukh Marg, Cumballa <br /> Hill, Mumbai, Maharashtra 400026</p>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Footer