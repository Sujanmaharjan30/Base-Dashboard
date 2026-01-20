import React from 'react'
import { Camera } from '../../../../public/icons/Svg'

const Create = () => {
    const fields=[
        {labe:"Invoice Id" , placeholder:"#876370", },
        {label:"Date", placeholder:"01/12/2021"},
        {label:"Name", placeholder:"Sujan Maharjan"},
        {label:"Email", placeholder:"sujanmaharjan@gmail.com"},
        {label:"Address", placeholder:"Kathmandu,Nepal"}
    ]
  return (
    <div className='w-[566px] my-7.5 mx-7.5 bg-white rounded-[10px] ' style={{fontFamily:"Nunito"}}>
{/* heading */}
            <h1 className='text-[#030229] font-bold text-2xl leading-[100%] pt-7.5 ml-7.5'>Create New Invoice</h1>

        <div className='w-33.5 h-33.5 rounded-full flex items-center justify-center bg-[#FAFAFB] my-7.5 mx-auto  '>
            <span><Camera/></span>

        </div>


    </div>
  )
}

export default Create