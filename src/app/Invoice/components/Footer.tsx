import React from 'react'

const Footer = () => {
    return (
        <div className='mt-8 md:w-[478px] mx-4 md:mx-0 ml-4 md:ml-12.5 flex flex-wrap md:flex-row justify-between items-center border-t border-gray-200  ' style={{ fontFamily: "OpenSans" }}>

            {/* first */}
            <div className='flex flex-col gap-px text-[6px] leading-[10px] text-[#828691] font-normal justify-start items-start mt-3.5'>

                <span>YOUR COMPANY</span>
                <span>1331 Hart Ridge Road, 48436 Gaines, MI</span>

            </div>

            {/* second */}
            <div className='flex flex-col gap-px text-[6px] leading-[10px] text-[#828691] font-normal justify-start items-start mt-3.5'>

                <div className='flex gap-2.5 '>
                    <span className='text-[#0099FF]'> @</span>
                    <span>your.mail@gmail.com</span>

                </div>
                <div className='flex gap-2.5 '>
                    <span className='text-[#0099FF]'> m</span>
                    <span>+386 989 271 3115</span>

                </div>

            </div>

            {/* third */}
            <div className='flex w-[116px] flex-col gap-px text-[6px] leading-[10px] text-[#828691] font-normal justify-start items-start mt-3.5 text-right'>
                <span>The company is registered in the business register under no. 87650000</span>

            </div>



        </div>
    )
}

export default Footer