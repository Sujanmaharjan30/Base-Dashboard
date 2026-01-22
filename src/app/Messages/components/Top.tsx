import React from 'react'
import { Magnify1, Plus } from '../../../../public/icons/Svg'

const Top = () => {
  return (
    <div className='mt-23 md:mt-5 mx-4 md:mx-5  md:w-[368px]' style={{ fontFamily: "Nunito" }}>
      <div className='flex justify-between'>

        <h1 className='text-black font-semibold leadig-[100%] '>Message</h1>
        <button className='w-8 h-8 flex justify-center items-center rounded-full bg-[#605BFF]'>
          <Plus />

        </button>
      </div>

      <div className='w-full h-[44px] rounded-[5px] bg-[#F7F7F8] flex items-center px-4 mt-6'  >
        <Magnify1 />
        <input type="text" placeholder='Search ' className='px-4' />
      </div>

      

    </div>
  )
}

export default Top