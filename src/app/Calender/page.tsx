"use client";
import React, { useState } from 'react'
import Top from './components/Top'
import Create from './components/Create'
import Calender from './components/Calender'
import People from './components/People'
import Schedule from './components/Schedule'
import MonthView from './components/MonthView'
import YearView from './components/YearView'
import DayView from './components/DayView';

const Page = () => {
  const [activeView, setActiveView] = useState("Month");
  
  return (
    <div>
        <Top activeView={activeView} setActiveView={setActiveView}/>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col md:w-[266px] mx-4 md:mx-7.5 mt-7 bg-white rounded-[10px]'>
            <Create/>
            <Calender/>
            <People/>
            <Schedule/>
          </div>
          
          {/* Main Calendar Views */}
          <div className='flex-1 mt-7 mr-7.5'>
            
            {activeView === "Day" && <DayView />}
            {activeView === "Week" && <MonthView />}
            {activeView === "Month" && <MonthView />}
            {activeView === "Year" && <YearView />}
          </div>
        </div>
    </div>
  )
}

export default Page