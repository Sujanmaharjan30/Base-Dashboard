"use client";
import React from 'react';
import { Magnify1, Plus } from '../../../../public/icons/Svg';

interface TaskHeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TaskHeader = ({ activeTab, setActiveTab }: TaskHeaderProps) => {
  const tabs = ["List", "Board", "Timeline"];

  return (
    <div className="mt-23 md:mt-10 ml-7.5" style={{ fontFamily: "Nunito" }}>
      <div className='flex flex-col md:flex-row md:items-center justify-start gap-4 md:gap-0'>
        <h1 className='text-black text-2xl leading-[100%] font-bold'>Task Preview</h1>
        <button className='w-[129px] h-[44px] flex justify-center items-center cursor-pointer bg-[#605BFF] font-normal text-white border border-[#FFFFFF] rounded-[10px] md:ml-[886px]'>
          <Plus />
          Add Task
        </button>
      </div>

      <div className='flex flex-col md:flex-row justify-between md:items-center md:w-[1162px] md:h-[45px] mt-6.5 gap-4 md:gap-0'>
        <div className='w-[233px] h-[44px] flex items-center justify-center rounded-[10px] bg-white overflow-hidden'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                h-[44px] text-sm relative transition-colors px-2 w-full  cursor-pointer
                ${activeTab === tab
                  ? "text-white bg-[#605BFF] font-semibold "
                  : "text-[#030229] font-normal"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-[230px] h-10 px-4 border border-[#E5E5E5] rounded-lg text-sm text-[#030229] placeholder-[#A0A0A0] focus:outline-none focus:border-[#605BFF]"
          />
          <div className='absolute right-35 md:right-5 top-4 md:top-1/2 md:-translate-y-1/2'>
            <Magnify1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;

