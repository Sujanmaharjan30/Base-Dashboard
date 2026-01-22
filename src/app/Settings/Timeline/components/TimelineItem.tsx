"use client";
import React from 'react';
import Image from 'next/image';
import { ThreeDot } from '../../../../../public/icons/Svg';

const TimelineItem = () => {
  const dates = ["29", "30", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  const times = ["09.00 AM", "10.00 AM", "11.00 AM", "12.00 PM", "01.00 PM", "02.00 PM", "03.00 PM", "04.00 PM", "05.00 PM"];

  const timelineTasks = [
    { id: 1, name: "Graphic Design", date: "02", timeSlot: 0, priority: "Low", status: "On Track", color: "bg-[#FF7262]" },
    { id: 2, name: "Dashboard Design", date: "02", timeSlot: 2, priority: "High", status: "On Track", color: "bg-[#2DCAED]" },
    { id: 3, name: "Logo Design", date: "02", timeSlot: 4, priority: "High", status: "On Track", color: "bg-[#2DCAED]" },
    { id: 4, name: "Web Design", date: "02", timeSlot: 6, priority: "High", status: "On Track", color: "bg-[#2DCAED]" },
  ];

  return (
    <div className="w-full max-w-[916px] bg-white rounded-[15px] p-4 md:p-6 shadow-sm overflow-hidden mb-4 mb-0" style={{ fontFamily: "Nunito" }}>
      <div className="overflow-x-auto no-scrollbar">
        <div className="min-w-[850px]">

          <div className="flex ml-20 mb-6 justify-between border-b border-gray-100 pb-4">
            {dates.map((date) => (
              <div
                key={date}
                className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-semibold shrink-0
                  ${date === "02" ? "bg-[#605BFF] text-white" : "text-gray-400"}`}
              >
                {date}
              </div>
            ))}
          </div>

          <div className="relative">
            {times.map((time, index) => (
              <div key={time} className="flex items-start h-[80px] border-b border-gray-50 last:border-0">
                <span className="w-20 text-[10px] text-gray-400 font-medium mt-[-6px] uppercase">{time}</span>
                <div className="flex-1 relative">

                  {timelineTasks.filter(t => t.timeSlot === index).map((task) => (
                    <div
                      key={task.id}
                      className="absolute left-[2%] top-2 w-[650px] h-[60px] bg-white border border-gray-100 rounded-xl shadow-sm flex items-center gap-2 px-4 z-10"
                    >
                      <input type="checkbox" className="w-5 h-5 appearance-none rounded-full border-2 border-gray-300 checked:bg-[#605BFF] checked:border-[#605BFF] cursor-pointer transition-all " />
                      <span className="text-[#030229] font-bold text-sm flex-1 whitespace-nowrap">{task.name}</span>
                      <div className="relative w-24 h-7 hidden sm:block">
                        <Image
                          src="/Images/Group (2).png"
                          alt="members"
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="flex gap-2 items-center shrink-0">
                        <span className={`${task.color} text-white text-[9px] px-2 py-1 rounded-full uppercase font-bold`}>{task.priority}</span>
                        <span className="bg-[#FFD66B] text-[#030229] text-[9px] px-2 py-1 rounded-full font-bold whitespace-nowrap">On Track</span>
                        <button className="cursor-pointer p-1"><ThreeDot /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;