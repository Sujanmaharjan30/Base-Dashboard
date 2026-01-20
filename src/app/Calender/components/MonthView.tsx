"use client";
import React, { useState } from 'react';
import { Left, Right } from '../../../../public/icons/Svg';

const MonthView = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 11, 2)); // December 2026

  const monthNames = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"];
  
  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Events data
  const events: { [key: string]: Array<{ title: string; color: string }> } = {
    '2': [
      { title: 'Free day', color: 'bg-cyan-400' },
      { title: 'Party Time', color: 'bg-pink-500' }
    ],
    '16': [{ title: 'Victory day', color: 'bg-orange-400' }],
    '21': [{ title: 'Invited by friends', color: 'bg-pink-500' }],
    '25': [{ title: 'Christmas Day', color: 'bg-cyan-400' }]
  };

  // Generate calendar days
  const calendarDays = [];
  
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false
    });
  }
  
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: true
    });
  }
  
  const remainingCells = 35 - calendarDays.length;
  for (let day = 1; day <= remainingCells; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false
    });
  }

  return (
    <div className='  w-[860px]' style={{ fontFamily: "Nunito" }}>
      {/* Header */}
      <div className='flex items-center justify-between mb-6 bg-white h-[50px] px-6 rounded-tl-[10px] rounded-tr-[10px]'>
        <span className='text-base font-normal text-[#030229]'>{monthName} 2, {year}</span>
        <div className='flex gap-3'>
          <button onClick={goToPreviousMonth} className='cursor-pointer text-gray-300 hover:text-[#605BFF]'>
            <Left/>
          </button>
          <button onClick={goToNextMonth} className='cursor-pointer text-gray-300 hover:text-[#605BFF]'>
            <Right/>
          </button>
        </div>
      </div>

      {/* Days of week */}
      <div className='grid grid-cols-7 mb-4 '>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className='text-center text-sm font-semibold text-gray-400 py-3 '>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className='grid grid-cols-7 border-l border-t border-gray-200 '>
        {calendarDays.map((item, index) => {
          const dayEvents = events[item.day.toString()] || [];
          const hasHighlight = item.day === 2 && item.isCurrentMonth;
          
          return (
            <div
              key={index}
              className={`relative min-h-[110px] border-b border-r border-gray-200 p-3 flex ${dayEvents.length > 0 ? 'flex-col items-center justify-start' : 'items-center justify-center'}`}
            >
              {item.isCurrentMonth ? (
                <>
                  {hasHighlight && (
                    <div className='absolute top-0 left-0 right-0 h-1 bg-orange-400'></div>
                  )}
                  <div className={`text-center text-lg mb-2 ${hasHighlight ? 'text-orange-400 font-bold' : 'text-[#030229]'}`}>
                    {item.day.toString().padStart(2, '0')}
                  </div>
                  {dayEvents.length > 0 && (
                    <div className='space-y-1'>
                      {dayEvents.slice(0, 2).map((event, idx) => (
                        <div
                          key={idx}
                          className={`${event.color} text-white text-xs px-2 py-1 rounded text-center font-medium`}
                        >
                          {event.title}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className='text-xs text-[#605BFF] text-center cursor-pointer'>
                          More
                        </div>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className='text-center text-lg text-gray-300'>
                  {item.day.toString().padStart(2, '0')}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;

