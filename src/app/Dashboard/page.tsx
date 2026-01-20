import React from 'react'
import Top from './components/Top'
import Application from './components/Application'
import Reports from './components/Reports'
import Analytics from './components/Analytics'
import Order from './components/Order'
import Selling from './components/Selling'

const page = () => {
  return (
    <div className=' h-auto w-[1222px]'>
        <Top/>
        <Application/>
        <div className='flex '>
            <Reports/>
            <Analytics/>

        </div>
        <div className='flex '>
           <Order/>
           <Selling/>

        </div>

    </div>
  )
}

export default page
