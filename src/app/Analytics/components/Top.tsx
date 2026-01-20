import React from 'react'
import { Plus } from '../../../../public/icons/Svg'

const Top = ({onAddClick}:{onAddClick:()=>void}) => {
  return (
    <div className='w-[858px] h-[42px] my-7.5 ml-7.5 flex justify-between items-start' style={{fontFamily:"Nunito"}}>
        <h1 className='text-[#030229] text-2xl leading-[100%] '>Customer List </h1>
        <div onClick={onAddClick} 
        className='flex items-center justify-center rounded-[10px] gap-2.5 w-[165px] bg-[#605BFF] h-[42px] cursor-pointer'>
            <Plus/>
            <button className='text-white  text-normal text-base leading-[100%]'>
                Add Customer
            </button>

        </div>


    </div>
  )
}

export default Top