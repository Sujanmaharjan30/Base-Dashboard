"use client";
import React, { useState } from 'react'
import { Left, Right } from '../../../../public/icons/Svg';

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 11, 2));
  const [selectedDate, setSelectedDate] = useState(3);

  // Get month name and year
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get first day of month and number of days
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Format date for header (e.g., "December 2, 2021")
  const formatHeaderDate = () => {
    return `${monthName} ${selectedDate}, ${year}`;
  };

  // Generate calendar days
  const calendarDays = [];

  // Previous month's days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      isSelected: false
    });
  }

  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: true,
      isSelected: day === selectedDate && month === currentDate.getMonth() && year === 2026
    });
  }

  // Next month's days to fill the grid
  const remainingCells = 42 - calendarDays.length; // 6 rows * 7 days
  for (let day = 1; day <= remainingCells; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false,
      isSelected: false
    });
  }

  const handleDateClick = (day: number, isCurrentMonth: boolean) => {
    if (isCurrentMonth) {
      setSelectedDate(day);
    }
  };

  return (
    <div className='mt-5 mx-7.5 border border-[#F7F7F8] rounded-[7px] p-4 md:w-[206px]' style={{ fontFamily: "Nunito" }}>
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <span className='text-xs font-semibold text-[#030229]'>{formatHeaderDate()}</span>
        <div className='flex gap-2'>
          <button onClick={goToPreviousMonth} className='cursor-pointer text-gray-400 hover:text-[#605BFF]'>
            <Left />
          </button>
          <button onClick={goToNextMonth} className='cursor-pointer text-gray-400 hover:text-[#605BFF]'>
            <Right />
          </button>
        </div>
      </div>

      {/*  week */}
      <div className='grid grid-cols-7 gap-1 mb-2'>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className='text-center text-xs font-semibold text-[#030229] py-1'>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className='grid grid-cols-7 gap-1'>
        {calendarDays.slice(0, 35).map((item, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(item.day, item.isCurrentMonth)}
            className={`text-center text-xs py-2 flex items-center justify-center w-6 h-6 rounded ${item.isSelected
                ? 'bg-[#605BFF] text-white  rounded-full shrink-0 font-semibold '
                : item.isCurrentMonth
                  ? 'text-[#030229] hover:bg-gray-100'
                  : 'text-gray-400'
              }`}
          >
            {item.day}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Calender