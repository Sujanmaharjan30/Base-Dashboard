"use client";
import React, { useState } from 'react';
import TaskHeader from './components/TaskHeader';
import ListView from './List/ListView';
import BoardView from './Board/BoardView';
import TimelineView from './Timeline/TimelineView';

const Page = () => {
  const [activeTab, setActiveTab] = useState("List");

  return (
    <div>
      <TaskHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className='ml-7.5 mr-7.5 '>
        {activeTab === "List" && <ListView />}
        {activeTab === "Board" && <BoardView />}
        {activeTab === "Timeline" && <TimelineView />}
      </div>
    </div>
  );
};

export default Page;