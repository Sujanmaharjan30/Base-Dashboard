"use client";
import React, { useState } from 'react';
import TimelineItem from './components/TimelineItem';
import TimelineSidebar from './components/TimelineSidebar';

const TimelineView = () => {
  const [expandedSection, setExpandedSection] = useState("To Do");

  return (
    <div className='mt-6.5 flex flex-col md:flex-row gap-6' style={{ fontFamily: "Nunito" }}>
      {/* Left */}
      <TimelineSidebar 
        expandedSection={expandedSection} 
        setExpandedSection={setExpandedSection}
      />
      
      {/*Timeline */}
      <TimelineItem />
    </div>
  );
};

export default TimelineView;

