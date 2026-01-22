import React from 'react'
import Top from './components/Top'
import Application from './components/Application'
import Reports from './components/Reports'
import Analytics from './components/Analytics'
import Order from './components/Order'
import Selling from './components/Selling'

const page = () => {
  return (
    <div className=' h-auto w-full md:w-[1222px]'>
      <Top />
      <Application />
      <div className='flex flex-col md:flex-row gap-4 md:gap-0 '>
        <Reports />
        <Analytics />

      </div>
      <div className='flex flex-col md:flex-row '>
        <Order />
        <Selling />

      </div>

    </div>
  )
}

export default page
