import Image from 'next/image'
import React from 'react'

const Chats = () => {
  return (
    <div className='w-[340px] h-[77px] ml-[15px]  mt-[23px] flex justify-between items-start' style={{fontFamily:"Nunito"}}>
            <Image 
            src="/Images/Active.png" 
            alt="image" 
            width={50}
            height={50}
            />
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#030229] font-normal text-base leading-[100%]'>Sujan Maharjan</h1>
                <span className='w-[197px] text-[#030229] font-normal text-xs leading-[100%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, hic. </span>

            </div>
            <span className='text-black font-normal text-[10px] leading-[100%]'>1 min ago</span>



    </div>
  )
}

export default Chats