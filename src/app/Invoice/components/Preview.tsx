import React from 'react'
import { Download, Printer } from '../../../../public/icons/Svg'
import Receipt from './Receipt'

const Preview = () => {
  return (
    <div className='mt-7.5 mx-4 md:mx-7.5' style={{ fontFamily: "Nunito" }}>

      <div className='flex justify-between items-center  ' >
        <h1 className='font-bold text-2xl leading-[100%] text-[#030229]'>Preview</h1>
        <div className='flex gap-7.5 justify-center items-center '>
          <Download />
          <Printer />


        </div>


      </div>
      <Receipt />
    </div>
  )
}

export default Preview