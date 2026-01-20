"use client";
import React, { useState } from "react";
import {
  Calendar1,
  Arrow,
  ClockIcon,
  LocationIcon,
  EditIcon1,
  DeleteIcon1,
} from "../../../../public/icons/Svg";

const AllDetails = () => {
  const [selectedEvents, setSelectedEvents] = useState<number[]>([]);

  const events = [
    {
      id: 1,
      date: "12 Dec, 2021",
      time: "10.15AM",
      location: "Office Meeting",
    },
    { id: 2, date: "10 Dec, 2021", time: "11.20AM", location: "Home" },
    { id: 3, date: "09 Dec, 2021", time: "11.45AM", location: "Friends Zone" },
    {
      id: 4,
      date: "08 Dec, 2021",
      time: "12.15PM",
      location: "Meeting Outside",
    },
    { id: 5, date: "07 Dec, 2021", time: "01.20PM", location: "Friends" },
    {
      id: 6,
      date: "05 Dec, 2021",
      time: "10.15AM",
      location: "Office Meeting",
    },
    { id: 7, date: "04 Dec, 2021", time: "11.15AM", location: "Home" },
    { id: 8, date: "04 Dec, 2021", time: "01.25PM", location: "Friends Zone" },
    {
      id: 9,
      date: "02 Dec, 2021",
      time: "10.15AM",
      location: "Meeting Outside",
    },
    { id: 10, date: "01 Dec, 2021", time: "04.30PM", location: "Friends" },
  ];

  const toggleEventSelection = (eventId: number) => {
    setSelectedEvents((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  const toggleSelectAll = () => {
    setSelectedEvents(
      selectedEvents.length === events.length ? [] : events.map((e) => e.id)
    );
  };

 

  return (
    <div className="mt-7.5 mb-7.5 w-[886px]" style={{ fontFamily: "Nunito" }}>
      {/* Table Header */}
      <div className="flex items-center gap-4 pb-3 border-b border-gray-200 px-4">
        <input
          type="checkbox"
          checked={selectedEvents.length === events.length && events.length > 0}
          onChange={toggleSelectAll}
          className="w-4 h-4 cursor-pointer"
        />
        <div className="flex items-center gap-2 flex-1">
          <span className="text-sm font-semibold text-[#030229]">Date</span>
          <Arrow />
        </div>
        <div className="flex items-center gap-2 w-[120px]">
          <span className="text-sm font-semibold text-[#030229]">Time</span>
          <Arrow />
        </div>
        <div className="flex items-center gap-2 flex-1">
          <span className="text-sm font-semibold text-[#030229]">Location</span>
          <Arrow />
        </div>
        <div className="w-[60px]"></div>
      </div>

      {/* Event Rows */}
      <div className="space-y-3 mt-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-4 p-3 h-[70px] bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow  hover:scale-[1.02] hover:z-10 cursor-pointer"
          >
            {/* Checkbox */}
            <input
              type="checkbox"
              checked={selectedEvents.includes(event.id)}
              onChange={() => toggleEventSelection(event.id)}
              className="w-4 h-4 cursor-pointer"
            />

            {/* Date */}
            <div className="flex items-center gap-2 flex-1">
              <Calendar1 />
              <span className="text-sm text-[#030229]">{event.date}</span>
            </div>

            {/* Time */}
            <div className="flex items-center gap-2 w-[120px]">
              <ClockIcon />
              <span className="text-sm text-[#030229]">{event.time}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 flex-1">
              <span className="px-4 py-1 h-[45px] w-[171px] bg-[#ACA9FF]/20 text-[#605BFF] rounded-full text-sm font-semibold flex gap-[14px] items-center ">
                <LocationIcon />
                {event.location}
              </span>
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-4 w-[100px] justify-end">
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF8E6] transition-all cursor-pointer"
              >
                {/* If your EditIcon is just the path, the group-hover can change its color */}
                <span className="text-[#FFB800] group-hover:text-white transition-colors">
                  <EditIcon1 />
                </span>
              </button>

              <button
        
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFF0F0] transition-all cursor-pointer"
              >
                <span className="text-[#FF4B4B] group-hover:text-white transition-colors">
                  <DeleteIcon1 />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDetails;
