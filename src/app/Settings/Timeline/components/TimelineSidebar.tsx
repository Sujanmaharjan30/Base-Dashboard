"use client";
import React from 'react';
import { Right } from '../../../../../public/icons/Svg';

interface TimelineSidebarProps {
  expandedSection: string;
  setExpandedSection: (section: string) => void;
}

const TimelineSidebar = ({ expandedSection, setExpandedSection }: TimelineSidebarProps) => {
  const sections = [
    { name: "To Do", color: "bg-[#605BFF]" },
    { name: "Doing", color: "bg-[#605BFF]" },
    { name: "Done", color: "bg-[#605BFF]" }
  ];

  return (
    <div className='w-[216px] h-auto  bg-white rounded-[10px]  flex flex-col justify-start items-center gap-3'>
      {sections.map((section) => (
        <button
          key={section.name}
          onClick={() => setExpandedSection(section.name)}
          className={`
            w-[176px] h-[50px] rounded-[10px] px-5 flex items-center mt-2.5 justify-between
            transition-all
            ${expandedSection === section.name
              ? `${section.color} text-white`
              : 'bg-white text-[#030229]'
            }
          `}
        >
          <span className='font-semibold text-base'>{section.name}</span>
          <div className={`transform transition-transform ${expandedSection === section.name ? '' : ''
            }`}>
            <Right />
          </div>
        </button>
      ))}
    </div>
  );
};

export default TimelineSidebar;

