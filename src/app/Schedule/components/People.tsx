"use client";
import React, { useState } from 'react'
import { Magnify1 } from '../../../../public/icons/Svg'

const People = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const people = [
    {
      id: 1,
      name: "Eddie Lobanovskiy",
      email: "laboanovskiy@gmail.com",
      avatarBg: "bg-blue-200"
    },
    {
      id: 2,
      name: "Alexey Stave",
      email: "alexeyst@gmail.com",
      avatarBg: "bg-pink-200"
    },
    {
      id: 3,
      name: "Anton Tkacheve",
      email: "tkacheveanton@gmail.com",
      avatarBg: "bg-blue-200"
    }
  ];

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='mt-7.5 mx-7.5' style={{ fontFamily: "Nunito" }}>
      {/* Title */}
      <h2 className='text-base font-bold text-[#030229] mb-4'>People</h2>

      {/* Search Bar */}
      <div className='relative mb-4'>
        <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
          <Magnify1 />
        </div>
        <input
          type="text"
          placeholder="Search for People"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full pl-9 pr-4 py-2 bg-gray-100 rounded-[7px] text-sm text-[#030229] placeholder:text-gray-500 focus:outline-none focus:bg-gray-200'
        />
      </div>

      {/* People List */}
      <div className='space-y-0'>
        {filteredPeople.map((person, index) => (
          <div key={person.id}>
            <div className='flex items-center gap-3 py-3'>
              {/* Avatar */}
              <div className={`w-10 h-10 rounded-full ${person.avatarBg} flex items-center justify-center shrink-0`}>
                <span className='text-[#030229] font-semibold text-sm'>
                  {person.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              {/* Name and Email */}
              <div className='flex-1 min-w-0'>
                <h3 className='text-sm font-semibold text-[#030229] truncate'>{person.name}</h3>
                <p className='text-xs text-gray-500 truncate'>{person.email}</p>
              </div>
            </div>
            {index < filteredPeople.length - 1 && (
              <div className='border-t border-gray-200'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default People