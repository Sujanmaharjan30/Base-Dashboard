"use client";
import React, { useState } from 'react'
import Top from './components/Top'
import Button from './components/button'
import Chats from './Personal/components/Chats'
import View from './components/View';

const MessagesPage = () => {
  const [activeTab, setActiveTab] = useState("Personal");

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='flex flex-col bg-white rounded-[10px] my-7.5 mx-4 md:mx-7.5'>

      <Top/>
      <Button activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === "Personal" && <Chats/>}
      {activeTab === "All" && <div className='p-5'>All Messages</div>}
      {activeTab === "Teams" && <div className='p-5'>Team Messages</div>}
      
      </div>
      <View/>
      </div>
  )
}

export default MessagesPage