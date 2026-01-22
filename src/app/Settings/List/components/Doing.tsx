"use client";
import React from 'react';
import { Arrow, DeleteIcon, EditIcon } from '../../../../../public/icons/Svg';
import Image from 'next/image';


const Doing = () => {
  const tasks = [
    { id: 1, name: "Ui Design", start: "03/12/2021", end: "5/12/2021", members: "5 Member", status: "Pending", img: "/Images/Figma.png" },
    { id: 2, name: "Logo Design", start: "03/12/2021", end: "5/12/2021", members: "5 Member", status: "Pending", img: "/Images/ai.png" },
  ];
  const gridLayout = "grid-cols-[2fr_2fr_2fr_2fr_2fr_2fr_1fr]";
  return (
    <div className='mt-6.5 md:w-[1162px] bg-white rounded-[15px]  ' style={{ fontFamily: "Nunito" }}>
      <div className='flex  items-start mx-7.5 pt-7.5'>
        <h2 className='text-[#030229] text-base leading-[100%] font-semibold'>Doing</h2>
        <button className='text-[#605BFF] text-sm font-semibold ml-38.5 md:ml-[972px] cursor-pointer'>See More</button>

      </div>
      <div className="w-full md:max-w-[1162px] mt-5 " style={{ fontFamily: 'Nunito' }}>
        <div className='overflow-x-auto no-scrollbar'>
          <div className='min-w-[900px]'>

            <div className={`grid ${gridLayout} bg-white font-semibold text-sm py-4 px-7 items-center`}>
              <div className="text-[#030229] ">Check Box</div>
              <div className="text-[#030229]  flex items-center gap-1">Task Name <Arrow /></div>
              <div className="text-[#030229]  flex items-center gap-1">Start Date  <Arrow /></div>
              <div className="text-[#030229]  flex items-center gap-1">End Date  <Arrow /></div>
              <div className="text-[#030229]  flex items-center gap-1">Member  <Arrow /></div>
              <div className="text-[#030229]  flex items-center gap-1">Status  <Arrow /></div>
              <div className="text-[#030229] ">Actions</div>
            </div>

            {tasks.map((task) => (
              <div key={task.id} className={`grid ${gridLayout} bg-white h-[50px] px-7 items-start text-left `}>

                <div>
                  <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center">
                    <Image
                      src={task.img}
                      alt={task.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[#605BFF] text-sm font-semibold">{task.name}</span>
                </div>

                <div className="text-[#030229] text-sm opacity-70">{task.start}</div>

                <div className="text-[#D11A2A] text-sm font-semibold">{task.end}</div>

                <div className="text-[#030229] text-sm opacity-70">{task.members}</div>

                <div>
                  <span className="bg-[#FF8F6B]  text-white px-4 py-1.5 rounded-lg text-xs font-medium">
                    {task.status}
                  </span>
                </div>

                <div className="flex gap-3">
                  <button className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors">
                    <EditIcon />
                  </button>
                  <button className="p-2 bg-red-50 text-red-500 rounded-full hover:bg-red-100 transition-colors">
                    <DeleteIcon />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default Doing;

