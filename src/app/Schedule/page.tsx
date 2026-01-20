import React from 'react'
import Top from './components/Top'
import Create from './components/Create'
import Calender from './components/Calender'
import People from './components/People'
import Schedule from './components/Schedule'
import AllDetails from './components/AllDetails'

const page = () => {
  return (
    <div>
        <Top/>
        <div className='flex '>

        <div className='flex flex-col w-[266px] mx-7.5 mt-7.5 bg-white rounded-[10px]'>
<Create/>
<Calender/>
<People/>
<Schedule/>
        </div>
        <AllDetails/>
        </div>
    </div>
  )
}

export default page