"use client";
import React from 'react';

interface ButtonProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Button = ({ activeTab, setActiveTab }: ButtonProps) => {
  const tabs = ["All", "Personal", "Teams"];

  return (
    <div className="w-[328px]  mt-7.5 mx-5" style={{ fontFamily: "Nunito" }}>
      <div className="flex justify-between items-center relative border-b-2 border-gray-100 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative px-4 transition-all duration-300 group"
          >

            <span className={`text-lg font-semibold ${activeTab === tab
              ? "text-[#605BFF]"
              : "text-[#A0A0A0] hover:text-[#030229]"
              }`}>
              {tab}
            </span>

            {activeTab === tab && (
              <div className="absolute -bottom-[10px] left-0 right-0 flex flex-col items-center">

                <div className="w-full h-[3px] bg-[#605BFF] rounded-full" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Button;