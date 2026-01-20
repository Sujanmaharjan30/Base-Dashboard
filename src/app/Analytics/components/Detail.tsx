"use client";
import React, { useState } from 'react'
import {
    Arrow,
    EditIcon,
    DeleteIcon,
    InlineDot,
  } from "../../../../public/icons/Svg";
import Image from 'next/image';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender: string;
  img: string;
}

interface DetailProps {
  onCustomerClick: (customer: Customer) => void;
  selectedCustomerId: number;
}

const Detail = ({ onCustomerClick, selectedCustomerId }: DetailProps) => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const toggleMenu = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };
    const events = [
        { id: 1, name: "John Deo", email: "johndoe2211@gmail.com", phone: "+9847562301", gender: "Male", img: "/Images/group.png" },
        { id: 2, name: "Shelby Goode", email: "shelbygoode481@gmail.com", phone: "+9865741230", gender: "Female", img: "/Images/female.png" },
        { id: 3, name: "Robert Bacins", email: "robertbacins4182@gmail.com", phone: "+9632015478", gender: "Male", img: "/Images/group.png" },
        { id: 4, name: "Shelby Goode", email: "shelbygoode481@gmail.com", phone: "+9587412307", gender: "Female", img: "/Images/female.png" },
        { id: 5, name: "Robert Bacins", email: "robertbacins4182@gmail.com", phone: "+9302145687", gender: "Male", img: "/Images/group.png" },
        { id: 6, name: "Sujan Maharjan", email: "sujan@gmail.com", phone: "+9201654730", gender: "Male", img: "/Images/group.png" },
        { id: 7, name: "Rajesh Maharjan", email: "rajesh@gmail.com", phone: "+9201654731", gender: "Male", img: "/Images/group.png" },
        { id: 8, name: "Sunil Maharjan", email: "sunil@gmail.com", phone: "+9201654732", gender: "Male", img: "/Images/group.png" },
        { id: 9, name: "Shelby Goode", email: "shelbygoode481@gmail.com", phone: "+9865741230", gender: "Female", img: "/Images/female.png" },
        { id: 10, name: "Shelby Goode", email: "shelbygoode481@gmail.com", phone: "+9865741230", gender: "Female", img: "/Images/female.png" },
      ];
    
    
    
  return (
<div className="mt-7.5 mb-7.5 w-[886px]" style={{ fontFamily: "Nunito" }}>
      {/* Table Header Labels */}
      <div className="grid grid-cols-12 px-8 py-4 text-[13px] font-semibold text-slate-400 items-center ">
        <div className="col-span-3 flex items-center gap-2">
           Name <Arrow />
        </div>
        <div className="col-span-4 flex items-center gap-2">
           Email <Arrow />
        </div>
        <div className="col-span-2 flex items-center gap-2">
           Phone number <Arrow />
        </div>
        <div className="col-span-2 flex items-center gap-2">
           Gender <Arrow />
        </div>
        <div className="col-span-1"></div>
      </div>

      {/* Customer Rows */}
      <div className="space-y-3 mt-4 ml-7.5">
        {events.map((event,index) => (
          <div
            key={event.id}
            onClick={() => onCustomerClick(event)}
            className={`grid grid-cols-12 items-center bg-white p-4 rounded-xl shadow-sm transition-all hover:scale-[1.01] hover:shadow-lg hover:z-10 cursor-pointer ${
              selectedCustomerId === event.id ? 'border-2 border-[#605BFF]' : 'border-none'
            }`}
          >
            <div className="col-span-3 flex items-center gap-3">
              <Image src={event.img} className="w-10 h-10 rounded-full border border-gray-50" alt="avatar" width={40} height={40}/>
              <span className="font-semibold text-[#1A1C21] text-sm">{event.name}</span>
            </div>

            <div className="col-span-4 text-slate-500 text-sm truncate pr-4">
              {event.email}
            </div>
            <div className="col-span-2 text-slate-500 text-sm">
              {event.phone}
            </div>
            <div className="col-span-2">
              <span className={`px-4 py-1 rounded-full text-xs font-bold ${
                event.gender === 'Male' 
                  ? 'bg-blue-50 text-blue-500' 
                  : 'bg-orange-50 text-orange-400'
              }`}>
                {event.gender}
              </span>
            </div>
          <div className="relative">
                <span
                  onClick={(e) => toggleMenu(index, e)}
                  className={`cursor-pointer transition-colors ${
                    openMenuIndex === index
                      ? "text-[#5B58FF]"
                      : "text-gray-300 group-hover:text-[#5B58FF]"
                  }`}
                >
                  <InlineDot />
                </span>

                {openMenuIndex === index && (
                  <div className="absolute right-0 top-5 w-[120px] bg-white rounded-[10px] shadow-2xl border border-gray-100 z-100 p-2 flex flex-col gap-1">
                    <button className="flex items-center gap-2 px-3 py-2 bg-[#F5F5FF] rounded-[6px] text-[#5B58FF] text-sm transition-colors text-left cursor-pointer">
                      <EditIcon /> Edit
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-[#FFF5F5] rounded-[6px] text-[#FF4B4B] text-sm transition-colors text-left cursor-pointer">
                      <DeleteIcon /> Delete
                    </button>
                  </div>
                )}
              </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Detail