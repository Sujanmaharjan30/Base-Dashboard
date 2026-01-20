import React from 'react'
import { Plus } from '../../../../public/icons/Svg'

const Create = () => {
  return (
    <div className='w-[206px] h-[45px] mt-7.5 mx-7.5 bg-[#605BFF] cursor-pointer rounded-[7px] flex items-center justify-center gap-3'style={{
        fontFamily:"Nunito"
    }}>
        <Plus/>
        <button className='font-semibold text-white text-sm leading-[100%] '> Create Schedule</button>


    </div>
  )
}

export default Create