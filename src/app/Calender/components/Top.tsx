"use client";
import React from 'react'

interface TopProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Top = ({ activeView, setActiveView }: TopProps) => {
    const item=[
        "Day",
        "Week",
        "Month",
        "Year",
    ]
  return (
    <div className='mt-9 flex justify-start items-center ml-8.5 ' style={{fontFamily:"Nunito"}}>
        <h1 className='text-2xl leading-[100%] text-[#030229] font-bold'>
            Calendar
        </h1>
        <div className='w-[359px] flex justify-center items-center gap-5 ml-[702px]'>
            {item.map((items,id)=>(
                <button 
                key={id} 
                onClick={() => setActiveView(items)} 
                className={`w-16.5 h-10 rounded-[10px] text-sm font-semibold transition-all cursor-pointer ${
                    activeView === items  
                    ? "bg-[#605BFF] text-white font-sm leading-[100%] font-semibold" 
                    : "bg-[#605BFF]/5 text-[#030229] font-semibold text-sm leading-[100%]" 
                }`}
            >
                {items}
            </button>
            ))}

        </div>

    </div>
  )
}

export default Top