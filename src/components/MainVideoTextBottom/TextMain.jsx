import React from 'react'
import DashedLine from '../ReusableComponents/DashedLine'

function TextMain() {
    const desc1 = "Our journey begins with ‘Gulshan Mahal’, a charming 19th-century bungalow, which showcases the inception of Cinema in India. Meanwhile, our Glass Building Galleries stand as a testament to the evolution and essence of Indian cinema to the present day."
    return (
        <div className='items-center flex-col flex justify-center bg-nmicbg'>
            <p className='text-[38px] mt-16 text-gray-800 font-extrabold tracking-wider font-serif'>THE ATTRACTIONS</p>
            <p className='text-[58px] text-orange-400 font-extrabold tracking-wider font-serif'>AT NMIC</p>
            <p className='text-[38px] mt-10 text-gray-800 font-extrabold tracking-wider font-serif'>AT THE NATIONAL MUSEUM OF INDIAN CINEMA</p>
            <DashedLine dashLengh={180} />
            <h1 className='text-[22px] mt-2 px-48 text-center text-orange-400 font-extrabold tracking-wider font-serif'>“Cinema’s characteristic forte is its ability to capture and communicate
                the intimacies of the human mind.”</h1>
            <h6 className='font-serif mt-4  text-gray-700'>- Satyajit Ray</h6>    
            <p className='px-10 mt-4 align-middle text-center font-serif'>{desc1}</p>

        </div>
    )
}

export default TextMain