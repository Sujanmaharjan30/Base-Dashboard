"use client";
import React, { useState } from "react";
import { Left, Right } from "../../../../public/icons/Svg";

interface Event {
  id: number;
  title: string;
  duration: number; // in hours
  color: string;
  position: number; // starting hour (24h format)
  align: "left" | "center" | "right";
}

const DayView = () => {
  const [currentDate,setCurrentDate] = useState(new Date(2021, 11, 2)); // Dec 2, 2021

  const events: Event[] = [
    { id: 1, title: "Invited by friends", duration: 1, color: "bg-[#FF8F6B]", position: 9 ,align: "left"},
    { id: 2, title: "Prayer Time", duration: 1, color: "bg-[#26C0E2]", position: 12,align: "center" },
    { id: 3, title: "Lunch Time", duration: 1, color: "bg-[#FF8F6B]", position: 14 ,align: "right"},
    { id: 4, title: "Prayer Time", duration: 1, color: "bg-[#3A974C]", position: 18 ,align: "left"},
    { id: 5, title: "Dinner Time", duration: 2, color: "bg-[#605BFF]", position: 21 ,align: "right"},
  ];

  const timeSlots = [
    "09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM",
    "03:00 PM","04:00 PM","05:00 PM","06:00 PM","07:00 PM","08:00 PM",
    "09:00 PM","10:00 PM"
  ];

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const goToPreviousDay = () =>
         { const newDate = new Date(currentDate);
             newDate.setDate(newDate.getDate() - 1); setCurrentDate(newDate); };
              const goToNextDay = () => { const newDate = new Date(currentDate); 
                newDate.setDate(newDate.getDate() + 1); setCurrentDate(newDate);
             };

  return (
    <div className="bg-white rounded-[10px] p-4 md:p-8 w-full  md:w-[860px] mx-4 md:mx-0" style={{ fontFamily: "Nunito" }}>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold text-[#030229]">
          {formatDate(currentDate)}
        </h2>

        <div className="flex gap-2">
          <button onClick={goToPreviousDay} className="w-8 h-8 cursor-pointer ">
            <Left/>
          </button>
          <button onClick={goToNextDay} className="w-8 h-8 cursor-pointer   ">
           <Right/>
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Center dashed line */}
        <div className="absolute  border-[#DADADA]" />

        {timeSlots.map((time, index) => {
          const hour = index + 9;
          const eventsAtThisHour = events.filter(
            (event) => event.position === hour
          );

          return (
            <div
              key={index}
              className="flex relative h-[50px] border-b border-[#F1F1F5] "
            >
              {/* Time label */}
              <div className="w-24 text-sm text-[#030229] pt-5">
                {time}
              </div>

              {/* Events */}
              <div className="flex-1 relative ">
                {eventsAtThisHour.map((event) => (
               <div
               key={event.id}
               className={`
                 ${event.color}
                 absolute top-1/2 -translate-y-1/2
                 w-[163px] h-[45px] rounded-[12px]
                 text-white text-sm font-semibold
                 flex items-center justify-center
             
                 ${
                   event.align === "left"
                     ? "left-6"
                     : event.align === "center"
                     ? "left-1/2 -translate-x-1/2"
                     : "right-6"
                 }
               `}
             >
               {event.title}
             </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DayView;
