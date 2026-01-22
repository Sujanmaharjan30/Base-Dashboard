import React from 'react'
import Create from '../Invoice/components/Create'
import Product from '../Invoice/components/Product'
import Preview from '../Invoice/components/Preview'
import Total from '../Invoice/components/Total'
import Notes from '../Invoice/components/Notes'
import Footer from '../Invoice/components/Footer'

const page = () => {
  return (
    <div className='flex flex-col md:flex-row  '>
<div className='flex flex-col md:w-[566px] mt-23 md:mt-7.5 mx-4 md:mx-7.5  bg-white rounded-[10px]'>

        <Create/>
        <Product/>
</div>
<div className='md:w-[566px] bg-white rounded-[10px] mt-7.5 mx-4 md:mx-0 '>

<Preview/>
<Total/>
<Notes/>
<Footer/>
</div>
    </div>
  )
}

export default page