"use client";
import Image from "next/image";
import {
  Analytics,
  Calender,
  Dashboard,
  Invoice,
  Logout,
  Messages,
  Notification,
  Schedule,
  Settings,
} from "../../../../public/icons/Svg";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const Menu = [
  { id: 1, name: "Dashboard", icons: <Dashboard />, path: "/Dashboard" },
  { id: 2, name: "Analytics", icons: <Analytics />, path: "/Analytics" },
  { id: 3, name: "Invoice", icons: <Invoice />, path: "/Invoice" },
  { id: 4, name: "Schedule", icons: <Schedule />, path: "/Schedule" },
  { id: 5, name: "Calender", icons: <Calender />, path: "/Calender" },
  { id: 6, name: "Messages", icons: <Messages />, path: "/Messages" },
  { id: 7, name: "Notification", icons: <Notification />, path: "/Notification" },
  { id: 8, name: "Settings", icons: <Settings />, path: "/Settings" },
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isHovered ,setIsHovered] = useState(false)

  const handleMenuClick = (item: typeof Menu[0]) => {
    router.push(item.path);
  };
  return (
    <div onMouseEnter={() =>setIsHovered(true)} 
    onMouseLeave={()=> setIsHovered(false)}
    className={`transition-all duration-300 ease-in-out bg-white cursor-pointer ${isHovered ? "  w-full max-w-54.5": "w-20  ml-7.5 rounded-[10px] shadow-xs h-[987px] my-7.5 border border-gray-100"}`} 
    style={{ fontFamily: "Nunito" }}>
      {/* logo */}
      <div className={`flex items-center justify-between   ${isHovered ? "w-28  mt-12.5 ml-13 flex-row ": "flex flex-col mt-8.5 ml-0 gap-1.5 "}` }>
        <Image
          src="/Images/Logo.png"
          alt="Logo"
          width={42}
          height={42}
          className="w-10.5 h-10.5"
        />
        <h1
          className="font-semibold text-2xl leading-[100%] "
          style={{ fontFamily: "Nunito" }}
        >
          Base
        </h1>
      </div>

      {/* button */}
      <div className="mt-13  ">
        {Menu.map((item) => {
          const isActive = pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={` w-36.5 h-5.5 flex gap-4 mt-8 cursor-pointer ${
                isActive ? "text-[#605BFF]  " : "text-[#030229] ml-7.5"
              }`}
            >
              {/* active bg */}
              <div
                className={`flex justify-start items-center 
                            ${
                              isActive
                                ? "w-13 h-12 rounded-tr-[5px] rounded-br-[5px] bg-linear-to-r from-[#ACA9FF]/30 to-transparent "
                                : "w-13 h-12"
                            }`}
              >
                {/* icons */}
                <div
                  className={` flex items-center shrink-0 z-10  ${
                    isActive
                      ? "w-5 h-5 text-[#605BFF] ml-7.5"
                      : "text-[#030229]"
                  } ${!isHovered && "ml-0 w-5 justify-center"}`}
                >
                  <span>{item.icons}</span>
                </div>
                {isHovered && (
                   <span className="leading-[100%] text-base ml-4 font-semibold">
                  {item.name}
                </span>
                )}
               
              </div>
            </button>
          );
        })}
      </div>
      
     
      <div className="mx-6 mt-51  ">
        {isHovered && (
          <Image 
        src="/Images/Upgrade.png"
         alt="image" 
         width={168}
         height={195}
         className="w-42 h-49 object-cover"
         />
        )}
        
        
      </div>

      {/* Account */}
      <div className={`w-42 h-11 flex items-center  justify-start   ${isHovered ? "mx-6.5 mt-7.5 " : "mx-4.5 mt-[312px]"} `}>

        <div className={`flex  items-center ${isHovered ? "flex-row gap-2.5": "flex-col gap-5"}`}>
          <Image 
          src="/Images/user.png" 
          alt="image" 
          width={45}
          height={43}
          className="w-11 h-11"
          />
          {isHovered && (
            <div className="flex items-start justify-center  flex-col gap-1 w-17 "> 
            <h1 className="font-semibold text-xs leading-[100%] text-black">Easin Arafat</h1>
            <span className="font-normal text-[10px] text-black leading-[100%]">Free Account</span>

          </div>

          )}
          
          <span className="cursor-pointer">
            <Logout/>
          </span>

        </div>


      </div>
    </div>
  );
};

export default Sidebar;
