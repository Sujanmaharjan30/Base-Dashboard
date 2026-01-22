import React from 'react'
import { Plus } from '../../../../public/icons/Svg'

const Top = ({ onAddClick }: { onAddClick: () => void }) => {
  return (
    <div className='w-[calc(100%-32px)] md:w-[858px] h-auto md:h-[42px]  ml-4 md:ml-7.5 flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between items-start mt-23 md:mt-7.5' style={{ fontFamily: "Nunito" }}>
      <h1 className='text-[#030229] text-2xl leading-[100%] '>Customer List </h1>
      <div onClick={onAddClick}
        className='flex items-center justify-center rounded-[10px] gap-2.5 w-[165px] bg-[#605BFF] h-[42px] cursor-pointer'>
        <Plus />
        <button className='text-white  text-normal text-base leading-[100%]'>
          Add Customer
        </button>

      </div>


    </div>
  )
}

export default Top