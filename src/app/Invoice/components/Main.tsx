"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Star,
  Calendar1,
  Mail,
  Action,
  Arrow,
  InlineDot,
  EditIcon,
  DeleteIcon,
} from "../../../../public/icons/Svg";

const Main = () => {
  const invoices = [
    {
      id: "#876364",
      name: "Arrora gaur",
      email: "arroragaur@gmail.com",
      date: "12 Dec, 2020",
      status: "Complete",
      image: "/Images/Group.png",
      statusColor: "bg-[#E6F7EF] text-[#00B074]",
      isStarred: true,
    },
    {
      id: "#876123",
      name: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "10 Dec, 2020",
      status: "Pending",
      image: "/Images/Group.png",
      statusColor: "bg-[#FFF4E6] text-[#FF9F43]",
      isStarred: true,
    },
    {
      id: "#876123",
      name: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "10 Dec, 2020",
      status: "Pending",
      image: "/Images/Group.png",
      statusColor: "bg-[#FFF4E6] text-[#FF9F43]",
      isStarred: true,
    },
    {
      id: "#876123",
      name: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "10 Dec, 2020",
      status: "Pending",
      image: "/Images/Group.png",
      statusColor: "bg-[#FFF4E6] text-[#FF9F43]",
      isStarred: true,
    },
    {
      id: "#876123",
      name: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "10 Dec, 2020",
      status: "Cancel",
      image: "/Images/Group.png",
      statusColor: "bg-[#D11A2A]/20 text-[#D11A2A]",
      isStarred: true,
    },
    {
      id: "#876364",
      name: "Arrora gaur",
      email: "arroragaur@gmail.com",
      date: "12 Dec, 2020",
      status: "Complete",
      image: "/Images/Group.png",
      statusColor: "bg-[#E6F7EF] text-[#00B074]",
      isStarred: true,
    },
    {
      id: "#876123",
      name: "James Mullican",
      email: "jamesmullican@gmail.com",
      date: "10 Dec, 2020",
      status: "Cancel",
      image: "/Images/Group.png",
      statusColor: "bg-[#D11A2A]/20 text-[#D11A2A]",
      isStarred: true,
    },
  ];
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };
  return (
    <div>
      <div
        className="grid grid-cols-[50px_130px_245px_265px_180px_240px_80px] px-11 pb-4 border-b border-gray-100 text-[#8E95A9] text-sm font-medium mt-[35px] "
        style={{ fontFamily: "Nunito" }}
      >
        <div className="flex justify-center">
          <input type="checkbox" className="rounded w-4 h-4" />
        </div>
        <div className="flex items-center gap-2.5 font-normal text-[#030229]">
          Invoice Id <Arrow />
        </div>
        <div className="flex items-center gap-2.5 font-normal text-[#030229]">
          Name
          <Arrow />
        </div>
        <div className="flex items-center gap-2.5 font-normal text-[#030229]">
          Email
          <Arrow />
        </div>
        <div className="flex items-center gap-2.5 font-normal text-[#030229]">
          Date
          <Arrow />
        </div>
        <div className="flex items-center gap-2.5 font-normal text-[#030229]">
          Status
          <Arrow />
        </div>
        <div className="text-right">
          <Action />
        </div>
      </div>

      {/* Row Mapping */}
      <div className="flex flex-col">
        {invoices.map((invoice, index) => (
          <div
            key={index}
            className="w-fit h-[70px] bg-white rounded-[12px] ml-7.5 mb-4 px-4
      grid grid-cols-[50px_130px_245px_265px_180px_180px_80px] items-center 
      shadow-sm transition-all duration-300 ease-in-out
      hover:scale-[1.01] hover:shadow-lg hover:z-10
      group cursor-pointer"
          >
            {/* Selection */}
            <div className="flex justify-center">
              <input type="checkbox" className="rounded w-4 h-4" />
            </div>

            {/* ID */}
            <div className="text-sm font-medium text-black">{invoice.id}</div>

            {/* Name & Avatar */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={invoice.image}
                  alt={invoice.name}
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-sm font-medium text-black">
                {invoice.name}
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 text-sm text-[#030229]">
              <span className="text-green-500">
                <Mail />
              </span>
              {invoice.email}
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-black">
              <span className="text-blue-500">
                <Calendar1 />
              </span>
              {invoice.date}
            </div>

            {/* Status Badge */}
            <div>
              <span
                className={`px-4 py-1 rounded-full text-xs font-semibold ${invoice.statusColor}`}
              >
                {invoice.status}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-9">
              <span
                className={
                  invoice.isStarred ? "text-yellow-400" : "text-gray-300"
                }
              >
                <Star />
              </span>
              <div className="relative">
                <span
                  onClick={() => toggleMenu(index)}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
