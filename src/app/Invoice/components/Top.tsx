"use client";
import React from 'react'
import { Magnify, Plus } from '../../../../public/icons/Svg'
import Link from 'next/link'

const Top = () => {
  
  return (
    <div className='mt-8.5 ml-7.5 flex  items-start'>
        <h1 className='font-bold text-2xl leading-[100%] text-black'>Invoice List</h1>
        <div className='flex items-center gap-5 ml-[666px]'>
        <div className='flex items-center w-[230px] h-[40px] bg-white rounded-[10px] px-4 shadow-sm'>
                <input 
                    type="text" 
                    placeholder='Search' 
                    className='outline-none text-sm w-full placeholder:text-[#8E95A9] text-[#030229]'
                />
                <span className='text-[#8E95A9]'><Magnify/></span>
            </div>
            <Link href="/Create">
            <div className='w-[122px] h-[40px] rounded-[10px] bg-[#605BFF] flex gap-2.5 px-4 items-center cursor-pointer'>
                <span><Plus/></span>
                <button className='text-white font-semibold text-sm leading-[100%]'>Add New</button>

            </div>
            </Link>

        </div>

    </div>
  )
}

export default Top