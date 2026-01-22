"use client";
import React from 'react';

const YearView = () => {
  const year = 2026;
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const generateMonthDays = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const days = [];

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        isToday: month === 0 && day === 2 // Highlight January 2
      });
    }

    // Next month days to complete the grid
    const remainingCells = 35 - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        day,
        isCurrentMonth: false
      });
    }

    return days;
  };

  return (
    <div className='bg-white rounded-[10px] p-4 md:p-8 w-full md:w-[860px] mx-4 md:mx-0' style={{ fontFamily: "Nunito" }}>
      {/* Year Header */}
      <div className='mb-8'>
        <h2 className='text-xl font-semibold text-[#030229]'>Calendar year</h2>
      </div>

      <div className='grid md:grid-cols-3 gap-10'>
        {monthNames.map((monthName, monthIndex) => {
          const monthDays = generateMonthDays(year, monthIndex);

          return (
            <div key={monthIndex} className='border border-gray-200 rounded-lg p-4'>
              <div className='text-center mb-2  pb-3'>
                <h3 className='text-base font-semibold text-[#030229] text-left'>
                  {monthName} {year}
                </h3>
              </div>

              <div className='grid grid-cols-7 gap-1 mb-2'>
                {daysOfWeek.map((day, index) => (
                  <div key={index} className='text-center text-xs text-gray-400 font-semibold py-1'>
                    {day}
                  </div>
                ))}
              </div>

              <div className='grid grid-cols-7 gap-1'>
                {monthDays.map((item, index) => (
                  <div
                    key={index}
                    className={`text-center text-xs py-2 flex items-center justify-center w-8 h-8 rounded-full transition-all ${item.isToday
                        ? 'bg-[#605BFF] text-white font-bold'
                        : item.isCurrentMonth
                          ? 'text-[#030229] hover:bg-gray-100 cursor-pointer font-medium'
                          : 'text-gray-300'
                      }`}
                  >
                    {item.day}
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

export default YearView;

