import Image from 'next/image'
import React from 'react'

const Total = () => {
  return (
    <div className='mt-15 ml-4 md:ml-13 cursor-pointer' style={{fontFamily:"OpenSans"}}>
        <Image 
        src="/Images/Data.png" 
        alt="Data" 
        width={478}
        height={178}
        className='w-[300px] md:w-[478px] h-[178px] '
        />

        <div className='mt-6 ml-0 md:ml-[112px] flex flex-col gap-2 mx-4 md:mx-0'>
            <span className='text-[#828691] text-[8px] leading-[100%] font-normal '>Transfer the amount to the business account below. Please include invoice number on your check.</span>
            <div className='flex gap-4 items-center '>
                <div className='flex gap-1 md:ml-50.5'>

                <span className='text-[#9DA8BB] font-semibold text-[8px] leading-[100%] '>Bank:</span>
                <span className='text-[#1F2229] text-[8px] leading-[100%] font-semibold'>FTSBUS33</span>
                </div>

                <div className='flex w-[3px] h-[3px] rounded-full  bg-[#0099FF]'></div>

                <div className='flex gap-1'>

                <span className='text-[#9DA8BB] font-semibold text-[8px] leading-[100%] '>Bank:</span>
                <span className='text-[#1F2229] text-[8px] leading-[100%] font-semibold'>FTSBUS33</span>
                </div>



            </div>

        </div>

    </div>
  )
}

export default Total