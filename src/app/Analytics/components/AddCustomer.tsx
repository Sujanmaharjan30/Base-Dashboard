"use client";
import React from 'react';
import { Arrow, Camera, Cross } from '../../../../public/icons/Svg';
// import Image from 'next/image';

const AddCustomer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/20">

      <div className="flex-1" onClick={onClose} />

      <div className="w-[409px] h-full bg-white p-8 shadow-2xl animate-in slide-in-from-right duration-300 overflow-y-auto rounded-tl-[10px] rounded-bl-[10px]">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold leading-[100%] text-[#030229]">Add Customer</h2>
          <button onClick={onClose} className=" w-10 h-10 rounded-full bg-[#E71D36]/20 flex justify-center items-center cursor-pointer"> <Cross /></button>
        </div>

        {/* profile picture */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-[134px] h-[134px] bg-[#F7F7F8] rounded-full flex items-center justify-center ">
            <span className="text-gray-400"><Camera /></span>
          </div>
        </div>

        <form className="flex flex-col gap-5">
          <div>
            <label className="text-sm font-normal text-[#030229]">First Name</label>
            <input type="text" placeholder="John" className="w-full mt-2 p-3 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-[#605BFF]" />
          </div>
          <div>
            <label className="text-sm font-normal text-[#030229]">Last Name</label>
            <input type="text" placeholder="Deo" className="w-full mt-2 p-3 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-[#605BFF]" />
          </div>
          <div>
            <label className="text-sm font-normal text-[#030229]">Email</label>
            <input type="email" placeholder="example@gmail.com" className="w-full mt-2 p-3 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-[#605BFF]" />
          </div>

          <div>
            <label className="text-sm font-normal text-[#030229]">Gender</label>
            <div className="relative mt-2">
              <select
                className="w-full p-3 bg-gray-50 rounded-lg border-none outline-none appearance-none cursor-pointer text-[#030229]"
                defaultValue="Male"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <Arrow />
              </div>
            </div>
          </div>

          <button className="w-full mt-[40px] bg-[#605BFF] text-white py-4 rounded-[10px] font-bold shadow-xs text-base cursor-pointer leading-[100%]">
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;