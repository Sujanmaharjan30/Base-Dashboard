"use client";
import React, { useState } from 'react'

const Top = () => {

  const formatDateForInput = (dateStr: string): string => {
    const [day, month, year] = dateStr.split('-');
    return `${year}-${month}-${day}`;
  };


  const formatDateFromInput = (dateStr: string): string => {
    const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year}`;
  };


  const [startDate, setStartDate] = useState('10-06-2021');
  const [endDate, setEndDate] = useState('10-10-2021');
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDateFromInput(e.target.value);
    setStartDate(formatted);
    setShowStartPicker(false);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDateFromInput(e.target.value);
    setEndDate(formatted);
    setShowEndPicker(false);
  };

  return (
    <div className='mt-23 md:mt-8.5 ml-4 md:ml-7.5 mr-4 md:mr-7.5 w-[calc(100%-32px)] md:w-full flex flex-col gap-4 md:gap-0 md:flex-row md:items-center ' style={{ fontFamily: "Nunito" }}>
      <h1 className='text-[#030229] text-2xl font-bold leading-[100%]'>Dashboard</h1>

      <div className='flex items-center gap-3 md:ml-185 flex-wrap'>
        <div className='relative'>
          <input
            type="text"
            value={startDate}
            readOnly
            onClick={() => setShowStartPicker(!showStartPicker)}
            className='px-2 md:px-4 py-2 border border-gray-200 rounded bg-white text-gray-500 cursor-pointer focus:outline-none focus:border-[#605BFF] pr-8 w-30 md:w-36'
            style={{ fontFamily: "Nunito" }}
          />
          {showStartPicker && (
            <div className='absolute top-full left-0 mt-1 z-50'>
              <input
                type="date"
                value={formatDateForInput(startDate)}
                onChange={handleStartDateChange}
                className='px-4 py-2 border border-gray-200 rounded bg-white shadow-lg max-w-[200px]'
                style={{ fontFamily: "Nunito" }}
                autoFocus
              />
            </div>
          )}
          <svg
            className='absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </div>

        <div className='relative'>
          <input
            type="text"
            value={endDate}
            readOnly
            onClick={() => setShowEndPicker(!showEndPicker)}
            className='px-2 md:px-4 py-2 border border-gray-200 rounded bg-white text-gray-500 cursor-pointer focus:outline-none focus:border-[#605BFF] pr-8 w-30 md:w-36'
            style={{ fontFamily: "Nunito" }}
          />
          {showEndPicker && (
            <div className='absolute top-full right-0 md:left-0 mt-1 z-50'>
              <input
                type="date"
                value={formatDateForInput(endDate)}
                onChange={handleEndDateChange}
                className='px-4 py-2 border border-gray-200 rounded bg-white shadow-lg max-w-[200px]'
                style={{ fontFamily: "Nunito" }}
                autoFocus
              />
            </div>
          )}
          <svg
            className='absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Top